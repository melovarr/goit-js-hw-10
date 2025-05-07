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
    this.disabled = true;
    myInput.disabled = true;
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
    return [ days, hours, minutes, seconds ];
}

function setTime(times) {
const counters = document.querySelectorAll('.value');
times.forEach((time, index) => {
    counters[index].textContent = String(time).padStart(2, '0');
});
}
const names = ['bob', ...['donald'], 'susy', 'lacy', ...['richard', 'alex']];
console.log(names);

// iziToast.show({
//     title: 'Hey',
//     titleColor: 'red',
//     position:'center',
//     message: 'What would you like to add?',
//     messageColor: 'blue',
//     theme: 'dark',
//     color: 'yellow'
// });



// let userSelectedDate;
// const btn = document.querySelector('[data-start]');
// const closeBtn = document.querySelector('.closebtn');
// const input = document.querySelector('#datetime-picker');
// btn.disabled = true;

// const options = {
// 	enableTime: true,
// 	time_24hr: true,
// 	defaultDate: new Date(),
// 	minuteIncrement: 1,
// 	onClose(selectedDates) {
// 		userSelectedDate = selectedDates[0];
// 		const now = new Date();
// 		if (userSelectedDate < now) {
// 			btn.disabled = true;
// 			createError();
// 			return;
// 		}
// 		btn.disabled = false;
// 	},
// };

// function createError() {
// 	iziToast.error({
// 		message: 'Please choose a date in the future',
// 		messageColor: '#ffffff',
// 		messageSize: '16px',
// 		backgroundColor: '#ef4040',
// 		position: 'topRight',
// 	});
// }

// function timerButtonHandler() {
// 	this.disabled = true;
// 	input.disabled = true;

// 	const intervalId = setInterval(() => {
// 		const timeData = (userSelectedDate - new Date()) / 1000;
// 		if (Math.floor(timeData) / 1000 === 0) {
// 			clearInterval(intervalId);
// 			input.disabled = false;
// 		}

// 		setTime(convertMs(userSelectedDate - new Date()));
// 	}, 1000);
// }

// // function convertMs(ms) {
// // 	const second = 1000;
// // 	const minute = second * 60;
// // 	const hour = minute * 60;
// // 	const day = hour * 24;

// // 	const days = Math.floor(ms / day);
// // 	const hours = Math.floor((ms % day) / hour);
// // 	const minutes = Math.floor(((ms % day) % hour) / minute);
// // 	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

// // 	return [days, hours, minutes, seconds];
// // }

// function setTime(times) {
// 	const counters = document.querySelectorAll('.value');
// 	times.forEach((time, index) => {
// 		counters[index].textContent = addLeadingZero(time);
// 	});
// }

// function addLeadingZero(value) {
// 	return String(value).padStart(2, '0');
// }

// flatpickr(input, options);

// btn.addEventListener('click', timerButtonHandler);
