var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0 ; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var tdImc = paciente.querySelector(".info-imc");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var pesoEValido = validaPeso(peso);
	var alturaEValida = validaAltura(altura);

	if (!pesoEValido) {
		console.log("Peso inválido");
		pesoEValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaEValida) {
		console.log("Altura inválida");
		alturaEValida = false;
		tdImc.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
	}

	if (pesoEValido && alturaEValida) {
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc;
	}
}

function validaPeso(peso){
	if (peso >=0 && peso < 1000) {
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if (altura >= 0 && altura <= 3.0) {
		return true;
	} else {
		return false;
	}
}

function calculaImc(peso, altura){
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}
