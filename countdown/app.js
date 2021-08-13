//! arrays that i don't really understand why they're here yet

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveawayDate = document.querySelector('.giveaway-date');
const timerContainer = document.querySelector('.timer-container');
const boxH5 = document.querySelectorAll('.box h5');
// console.log(boxH5);

//* declared giveaway date
var dateDate = new Date('September 15, 2022 12:22:32');
// console.log(giveawayDate);
//* end declared giveaway date

//* my year, month, hour, etc that gets that attribute and acts as a middle man
const year = dateDate.getFullYear();
const hours = dateDate.getHours();
const min = dateDate.getMinutes();

let month = dateDate.getMonth();
// console.log(months(month));
month = months[month];

const date = dateDate.getDate();

const weekday = weekdays[dateDate.getDay()];
// console.log(weekday);

giveawayDate.textContent = `${weekday}, ${month} ${date}, ${year} at ${hours}:${min}am`;

// *future time in milliseconds
const futureTime = dateDate.getTime();
// console.log(futureTime);
function timeCalc (){
    const today = new Date().getTime();
    console.log(today);
}

timeCalc();