import { DateTime } from './luxon.js';

const showTime = () => {
  const dateTime = document.querySelector('.time');
  const now = DateTime.now();
  dateTime.innerText = `${now.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)}`;
};

export default showTime;
