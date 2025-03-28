import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', formSubmiting);

function formSubmiting(event) {
    event.preventDefault();
    const delay = this.elements.delay.value;
    const state = this.elements.state.value;
    const promis = new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, +delay);
    });
    promis
    .then(delay => successMessage(delay))
    .catch(delay => errorMessage(delay));
}
function successMessage(delay) {
    iziToast.success({
        title: 'Ok',
        titleColor: '#fff',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        backgroundColor: '#60a10a',
        position: 'topRight'
    });
}
function errorMessage(delay) {
    iziToast.error({
        title: 'Error',
        titleColor: '#fff',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        backgroundColor: '#ef5050',
        position: 'topRight'
})
}