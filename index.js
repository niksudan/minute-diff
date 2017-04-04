const moment = require('moment');

module.exports = (fromDateRaw, toDateRaw = false) => {
  const fromDate = moment(fromDateRaw);
  if (toDateRaw === false) {
    const toDate = moment();
  } else {
    const toDate = moment(toDateRaw);
  }
  if (!fromDate || !toDate) {
    return false;
  }
  const duration = moment.duration(toDate.diff(fromDate));
  if (!duration) {
    return 0;
  }
  return duration.asMinutes();
};
