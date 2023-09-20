export const formatDate = (addedAt) => { // get date for YYYY-MM-DDTHH:mm:ss.sssZ format
  let timestamp = Date.parse(addedAt) + 10800000; // fix server bug - return time plus 3 hours
  const date = new Date(timestamp);

  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } else if (diffMin < 1) {
    return `${Math.floor(diffSec)} сек. назад`
  } else if (diffHour < 1) {
    return `${Math.floor(diffMin)} мин. назад`
  } else {
    return `${hour}:${minutes} [${dayOfMonth}.${month}.${year}]`
  }
}