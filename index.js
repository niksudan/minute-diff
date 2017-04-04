const moment = require('moment');

module.exports = (fromDateRaw, toDateRaw = new Date()) => {
  const fromDate = moment(fromDateRaw);
  const toDate = moment(toDateRaw);
  if (!fromDate || !toDate) {
    return false;
  }
  const duration = moment.duration(toDate.diff(fromDate));
  if (!duration) {
    return 0;
  }
  return duration.asMinutes();
};
