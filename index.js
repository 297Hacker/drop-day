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
    "December"
];

const weekdays = [
    "monday",
    "thuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

const drop = document.querySelector(".content p");
const deadline = document.querySelectorAll(".deadline");
const items = document.querySelectorAll(".deadline div");
const futureDate = new Date(2021, 11, 20, 20, 0, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const min = futureDate.getMinutes();

let month = futureDate.getMonth();
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

drop.textContent = `Drop is on ${weekday} ${date} ${months[month]} ${year} ${hours}:0${min}PM`;

let dropTime = futureDate.getTime();

function remainTime() {
    let currentTime = new Date().getTime();
    let newDate = dropTime - currentTime;

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;

    let day = Math.floor(newDate / oneDay);
    let hour = Math.floor((newDate % oneDay) / oneHour);
    let min = Math.floor((newDate % oneHour) / oneMin);
    let seconds = Math.floor((newDate % oneMin) / 1000);

    const values = [day, hour, min, seconds];

    items.forEach(function (item,i) {
        item.textContent = values[i];
    });
}

let countdown = setInterval(remainTime, 1000);

remainTime();