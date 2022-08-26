export const formatDate = (text) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jun',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const formatted = new Date(text);

  const formattedMonth = monthNames[formatted.getMonth()];
  const formattedDay = formatted.getDate();
  const formattedYear = formatted.getFullYear();

  return `${formattedMonth} ${formattedDay}, ${formattedYear}`;
};
