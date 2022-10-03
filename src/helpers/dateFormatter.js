const months = [
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

const dateFormatter = date => {
  var seconds = Math.floor((new Date().getTime() - Number(date)) / 1000);

  interval = seconds / 86400;
  if (interval > 1) {
    const currentDate = new Date(date);
    const Year = currentDate.getFullYear();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    return `${month} ${day}, ${Year}`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago';
  }
  if (seconds > 1) {
    return Math.floor(seconds) + ' seconds ago';
  }
  return 'Just now';
};

export default dateFormatter;
