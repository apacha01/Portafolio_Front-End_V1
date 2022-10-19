const form = document.getElementById('contact__form');
const mailto = document.getElementById('button__mailto');


form.addEventListener( 'submit', handleSubmit);

function handleSubmit(event){
	event.preventDefault();
	const formData = new FormData(this);
	mailto.setAttribute('href',
		`mailto:agustin.pacheco1901@gmail.com?
		subject=${formData.get('input__name') + "%20|%20" + formData.get('input__subject')}
		&body=${formData.get('input__msg')}`);
	mailto.click();
}




