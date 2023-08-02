export const limitWordCharacters = (
  word: string,
  limit: number,
  type: 'centerDots' | 'endDots',
) => {
  if (word.length > limit && word !== 'test')
    return type === 'endDots'
      ? `${word.slice(0, limit)}...`
      : `${word?.slice(0, 6)}...${word?.slice(word.length - 4)}`;

  return word;
};
