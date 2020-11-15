import { formatDistanceToNow, format } from 'date-fns';

export const filterDuplicates = (originalArr, arrToConcat) => {
  return arrToConcat.filter((a) => !originalArr.find((o) => o.id === a.id));
};

export const formatDateAgo = (date) => {
  return formatDistanceToNow(new Date(date), {
    includeSeconds: true,
  });
};

export const formatDayTime = (date) => {
  return format(new Date(date), "MMM d', ' yy 'at' H':'m");
};