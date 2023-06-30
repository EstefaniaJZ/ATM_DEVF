let nombreCompleto = prompt ("Escribe tu nombre")
let anhoDeNacimiento = Number(prompt("Escribe tu año de nacimiento"))
let anhoActual = Number (prompt("Escribe el año actual"))

let mensaje 
let edad = anhoActual - anhoDeNacimiento;


if (nombreCompleto == "" || anhoDeNacimiento == 0 || anhoActual == 0) {
	mensaje = "Te hacen falta datos"
} else if (anhoDeNacimiento > anhoActual) {
	mensaje = "Cuidado, el año de nacimiento no puede ser mayor al actual"
} else {
	if (edad <= 11) {
		mensaje = `Hola ${nombreCompleto}, tu eres un niño.`
	} else if (edad > 13 && edad < 18){
		mensaje = `Hola ${nombreCompleto}, tu todavía eres un adolescente.`
	} else if (edad >18 && edad < 65){
		mensaje = `Hola ${nombreCompleto}, tu eres un adulto.`
	} else {
		mensaje = `Hola ${nombreCompleto}, tu eres un adulto mayor.`
	}
}

alert(mensaje)

//Tipos de datos
// iNT,integer = entero, ....., -2, -1, 0, 1, 2...
//Float, punto flotante = ...anhoActual.charAt, 3.0, 3.00, 3.001
// char, character = character, 2, a, ., #
// string, cadena de caracteres =  "hola soy un string"