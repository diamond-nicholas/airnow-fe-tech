export const formatDate = (text) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'June',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const formatted = new Date(text);

  const formattedMonth = monthNames[formatted.getMonth()];
  const formattedDay = formatted.getDate();
  const formattedYear = formatted.getFullYear();

  return `${formattedMonth} ${formattedDay}, ${formattedYear}`;
};
