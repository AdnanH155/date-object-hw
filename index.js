/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...)
const date_ = new Date(2023, 5);
console.log(date_ instanceof Date);

// // 2. Create today's date

const date = new Date();

console.log(date);

// 3. Get the current timestamp (using a static method of Date)

console.log(date.getTime());

// 4. Create a date to represent next Christmas Day

const christmasDay = new Date(2023, 11, 25);
console.log(christmasDay);

// //  - Get difference between now and xmas

// //  - Divide by number of ms in 1 day:
// //  - milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second

// //  - Math.floor for whole days; Math.ceil to include today

// 5. Work out how many days it is until christmas

// const todayDate_ = new Date();
// console.log(todayDate);

// const timeDifference = todayDate_ - christmasDay;
// const daysUntilChristmas = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// console.log(daysUntilChristmas);

// // // 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date2", date2);
if (date1.getTime() > date2.getTime()) {
  console.log("date1 is in the future");
} else if (date1.getTime() === date2.getTime()) {
  console.log("dates are the same");
} else {
  console.log("date2 is newer");
}

// 7. How do I test if a date is valid? ****

function isDateValid(date) {
  return date instanceof Date && !isNaN(date);
}
const validDate = new Date("12-10-2023");
const inValidDate = new Date("adnan");
console.log(isDateValid(validDate));

// // 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object
const currentDate = new Date();

const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const formattedDate = month + "-" + day + "-" + year;

// // 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')

const englishFormattedDate = currentDate.toLocaleDateString("en-GB");
const germanFormattedDate = currentDate.toLocaleDateString("de-DE");
console.log(englishFormattedDate);
console.log(germanFormattedDate);

// // 10. Output the current time in hours, mins & seconds
const _currentDate = new Date();

const hours = _currentDate.getHours();
const minutes = _currentDate.getMinutes();
const seconds = _currentDate.getSeconds();

console.log(`Current time: ${hours}:${minutes}:${seconds}`);

// // 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.
function updateClock() {
  const currentDate1 = new Date();
  console.log(currentDate1.toLocaleTimeString());
}
// setInterval(updateClock, 1000);

// 12. Create a copy of today
const currentDate_ = new Date();
const copyofCurrentDate_ = new Date(currentDate_);

console.log("Current Date", currentDate_);
console.log("Copy of Current Date", copyofCurrentDate_);

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now
const todayDate = new Date();
todayDate.setFullYear(todayDate.getFullYear() + 3);
todayDate.setMonth(todayDate.getMonth() + 2);
todayDate.setDate(todayDate.getDate() + 1);

console.log(`the date will be ${todayDate}`);

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
const today = new Date();
const auTime = new Intl.DateTimeFormat("en-AU", {
  timeZone: "Australia/Sydney",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}).format(today);
console.log("The time in sydney, Australia is :", auTime);

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.
function convertToMilliseconds(years, months, days, hours, minutes, seconds) {
  const millisecondsInSecond = 1000;
  const millisecondsInMinute = millisecondsInSecond * 60;
  const millisecondsInHour = millisecondsInMinute * 60;
  const millisecondsInDay = millisecondsInHour * 24;
  const millisecondsInMonth = millisecondsInDay * 30;
  const millisecondsInYear = millisecondsInDay * 365;

  // this section does the maths and converts the data entered into milliseconds
  const totalMilliseconds =
    years * millisecondsInYear +
    months * millisecondsInMonth +
    days * millisecondsInDay +
    hours * millisecondsInHour +
    minutes * millisecondsInMinute +
    seconds * millisecondsInSecond;

  return totalMilliseconds;
}
const years = 4;
const months = 2;
const days = 6;
const hour = 12;
const minute = 20;
const second = 30;

const totalMilliseconds = convertToMilliseconds(
  years,
  months,
  days,
  hours,
  minutes,
  seconds
);

console.log(
  `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds is ${totalMilliseconds} ms.`
);

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

/*****************************************************************
 * For date-fns Exercises follow link on page
 ******************************************************************/
