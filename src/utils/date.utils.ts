function getYesterdayDate() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  return yesterday;
}

function getPreviousDate(daysBack: number) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - daysBack);

  return yesterday;
}

function formatDate(dateString: Date) {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const isToday = date.toDateString() === today.toDateString();
  const isYesterday = date.toDateString() === yesterday.toDateString();

  if (isToday) {
    return 'today';
  } else if (isYesterday) {
    return 'yesterday';
  } else {
    return date.toISOString().split('T')[0]; // yyyy-mm-dd format
  }
}

export default {
  getYesterdayDate,
  getPreviousDate,
  formatDate,
};
