export function validation(input) {
	const inputType = input.dataset.type;

	if (input.validity.valid) {
		input.parentElement.classList.remove('input-invalid');
		input.parentElement.querySelector('.input__error-msg').innerHTML = "";
	} 
	else {
		input.parentElement.classList.add('input-invalid');
		input.parentElement.querySelector('.input__error-msg').innerHTML = getErrorMessage(inputType, input);
	}
}

const errorTypes = [
	"valueMissing",
	"typeMismatch",
];

const errorMessages = {
	name: {
		valueMissing: "El nombre no puede estar vacio",
	},
	mail: {
		valueMissing: "El correo no puede estar vacio",
		typeMismatch: "El correo no es valido",
	},
	subject: {
		valueMissing: "El asunto no puede estar vacio",
	},
	message: {
		valueMissing: "El mensaje no puede estar vacio",
	},
};

function getErrorMessage (inputType, input){
	let mensaje = "";
	errorTypes.forEach((error) => {
	if (input.validity[error])
		mensaje = errorMessages[inputType][error];
	});
	return mensaje;
}