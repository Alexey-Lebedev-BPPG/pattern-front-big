export const dateToValidForm = (createdAt: string) => {
  const monthes = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const d = new Date(createdAt);
  return `${d.getDate()} ${
    monthes[d.getMonth()]
  } ${d.getFullYear()} ${d.toLocaleString('en-US', {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  })}`;
};
