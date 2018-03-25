import _ from 'lodash';

export default (duration) => {
  if (!duration) return 0;
  const minutes = duration.minutes();
  const hours = duration.hours();
  const days = duration.days();
  const weeks = duration.weeks();
  const years = duration.years();
  if (years > 5) return '> 5y';
  if (years >= 1) {
    return `${years}y${weeks}w`;
  } else if (weeks >= 1) {
    return `${weeks}w${days}d`;
  } else if (days >= 1) {
    return `${days}d${hours}h`;
  } else if (hours >= 1) {
    return `${hours}h${minutes}m`;
  } else {
    return `${minutes}m`;
  }
}
