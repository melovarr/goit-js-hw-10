import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const myInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
startBtn.addEventListener('click', timerStart);
startBtn.disabled = true;
let userSelectedDate;


flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
if (userSelectedDate < new Date()){
    startBtn.disabled = true;
    errorMessage();
    return;
}
startBtn.disabled = false;
},
});


function errorMessage(){
    iziToast.error({
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        backgroundColor: 'red',
        position: 'topCenter'
    })
}


function timerStart(){
    const intervalId = setInterval(() => {
        const timeValue = (userSelectedDate - new Date()) / 1000;
        if (Math.floor(timeValue) / 1000 === 0) {
            clearInterval(intervalId);
            myInput.disabled = false;
        }
        setTime(convertMs(userSelectedDate - new Date()));
    }, 1000);
}


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}

function setTime(times) {
const counters = document.querySelectorAll('.value');
times.forEach((time, index) => {
    counters[index].textContent = String(time).padStart(2, '0');
});
}


// iziToast.show({
//     title: 'Hey',
//     titleColor: 'red',
//     position:'center',
//     message: 'What would you like to add?',
//     messageColor: 'blue',
//     theme: 'dark',
//     color: 'yellow'
// });

