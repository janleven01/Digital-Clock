let hrs = document.querySelector('.hours')
let mins = document.querySelector('.minutes')
let secs = document.querySelector('.seconds')


let clock = setInterval(() => {
    let clock = new Date();
    let hour = `${clock.getHours() < 10 ? "0":""}${clock.getHours()}`;
    let minutes = `${clock.getMinutes() < 10 ? "0":""}${clock.getMinutes()}`;
    let seconds = `${clock.getSeconds() < 10 ? "0":""}${clock.getSeconds()}`;

    hrs.textContent = hour
    mins.textContent = minutes
    secs.textContent = seconds
},1000);
