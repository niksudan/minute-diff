const moment = require('moment');
const isDate = require('is-date-object');

module.exports = (fromDateRaw, toDateRaw = false) => {
  const fromDate = moment((isDate(fromDateRaw)) ? fromDateRaw : new Date(fromDateRaw));
  const toDate = (toDateRaw === false) ?
    moment() :
    (moment((isDate(toDateRaw)) ? toDateRaw : new Date(toDateRaw)));
  if (!fromDate || !toDate) {
    return false;
  }
  const duration = moment.duration(toDate.diff(fromDate));
  if (!duration) {
    return 0;
  }
  return duration.asMinutes();
};
