import { validation } from "./validations.js";

const form = document.getElementById('contact__form');
const mailto = document.getElementById('button__mailto');


form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
	event.preventDefault();
	const formData = new FormData(this);
	mailto.setAttribute('href',
		`mailto:agustin.pacheco1901@gmail.com?
		subject=${formData.get('input__name') + "%20|%20" + formData.get('input__subject')}
		&body=${formData.get('input__msg')}`);
	mailto.click();
}

const inputs = document.querySelectorAll('.contact__input');
const textareaMsg = document.getElementById('input__msg');

inputs.forEach((input) => {
	input.addEventListener('blur', (input) => {
		validation(input.target);
	});
});

textareaMsg.addEventListener('blur', (txtarea) => {
	validation(txtarea.target);
});



