const defOptions = {
  ms: 300,
  onStart: false,
  withCancel: false,
};
export type DebounceOptionsT = Partial<typeof defOptions>;
export type AnyFuncT = (...args: any) => any;

const resetTimer = (
  timer: NodeJS.Timeout | number,
  ms: number,
  func: AnyFuncT,
) => {
  clearTimeout(timer);
  return setTimeout(func, ms);
};

function debounce<F extends AnyFuncT>(
  func: F,
  options: { ms?: number; onStart?: boolean; withCancel: true },
): [(...args: Parameters<F>) => void, () => void];

// eslint-disable-next-line no-redeclare
function debounce<F extends AnyFuncT>(
  func: F,
  options?: DebounceOptionsT,
): (...args: Parameters<F>) => void;

// eslint-disable-next-line no-redeclare
function debounce<A extends any[]>(
  func: (...args: A) => any,
  options?: Partial<typeof defOptions>,
) {
  const { ms, onStart, withCancel } = { ...defOptions, ...options };
  let onStartExecuted = false;
  let timer: NodeJS.Timeout | number;

  const debouncedFunc: (...args: A) => void = onStart
    ? (...args) => {
        if (onStartExecuted) {
          onStartExecuted = true;
          func(...args);
        } else
          timer = resetTimer(timer, ms, () => {
            timer === null;
            !onStartExecuted;
            func(...args);
          });
      }
    : (...args) => {
        timer = resetTimer(timer, ms, () => func(...args));
      };

  return withCancel
    ? [debouncedFunc, () => clearTimeout(timer)]
    : debouncedFunc;
}

export { debounce };
