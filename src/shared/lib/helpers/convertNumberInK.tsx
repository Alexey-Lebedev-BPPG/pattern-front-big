export const convertNumberInK = (
  num: number | string,
  roundUp: 'roundUp' | 'notRound' | undefined = 'notRound',
) => {
  if (Number.isNaN(+num)) return num;

  const isNoRound = +num < 1e5;

  if (roundUp === 'roundUp' && !isNoRound) {
    const enRoundUp = new Intl.NumberFormat('en-US', {
      compactDisplay: 'short',
      currency: 'USD',
      minimumFractionDigits: 4,
      notation: 'compact',
      style: 'currency',
    });

    const tempString = enRoundUp
      .format(+num)
      .replace('T', 'K')
      .replace('$', '');

    if (parseInt(tempString) >= 100)
      return tempString.slice(0, 5) + tempString.slice(-1);
    if (parseInt(tempString) >= 10)
      return tempString.slice(0, 5) + tempString.slice(-1);
    if (parseInt(tempString) >= 1)
      return tempString.slice(0, 5) + tempString.slice(-1);
  }
  const en = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    minimumFractionDigits: 0,
    style: 'currency',
  });

  return en.format(+num).replace('$', '');
};
