const defOptions = {
  ms: 300,
  onStart: false,
  withCancel: false,
};

function throttle<A extends any[], R>(
  func: (...args: A) => R,
  options?: Partial<typeof defOptions>,
) {
  const { ms, onStart, withCancel } = { ...defOptions, ...options };
  let nextArgs = [] as unknown as A;
  let doNext = false;
  let onGoing = false;
  let timer: NodeJS.Timeout;

  const next = () => {
    if (doNext) {
      func(...nextArgs);
      doNext = false;
      timer = setTimeout(next, ms);
    } else onGoing = false;
  };

  const throttledFunc = (...args: A) => {
    if (!onGoing) {
      onGoing = true;
      if (onStart) func(...args);
      else {
        nextArgs = args;
        doNext = true;
      }
      setTimeout(next, ms);
    } else {
      doNext = true;
      nextArgs = args;
    }
  };

  return withCancel
    ? [throttledFunc, () => clearTimeout(timer)]
    : throttledFunc;
}

export default throttle;
