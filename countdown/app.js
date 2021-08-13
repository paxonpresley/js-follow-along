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
    // console.log(today);
    // ! t will be calculated in milliseconds
    const t = dateDate - today;
    // console.log(t);
    // * 1s = 1000ms
    // * 1min = 60sec
    // * 1hr = 60min
    // * 1 day = 24hrs

    // this equation is going to give you a number that counts one day in milliseconds
    const oneDay = 24*60*60*1000;
    // console.log(oneDay);
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    const oneSecond = 1000;

    // * long way of doing things
        // let days = t - oneDay;
        // days = Math.floor(days);
        // let hours = t % oneDay / oneHour;
        // hours = Math.floor(hours);
        // // console.log(hours);
        // let minutes = t % oneDay % oneHour / oneMinute;
        // minutes = Math.floor(minutes);
        // // console.log(minutes);
        // let seconds = t % oneDay % oneHour % oneMinute / 1000;
        // seconds = Math.floor(seconds);
        // // console.log(seconds);

    let days = Math.floor(t - oneDay);
    console.log(days);
    let hours = Math.floor(t % oneDay / oneHour);
    let minutes = Math.floor(t % oneHour / oneMinute);
    let seconds = Math.floor(t % oneMinute / oneSecond);
};

timeCalc();