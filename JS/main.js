//function sum () {
	//return 4 + 6
//}
//console.log(sum())

function sum(value1, value2){
	return value1 + value2
}

console.log(sum(3,8))



//a % b -- residuo de división

//tipos de datos

//'Víctor' -- string 
//1 -- int 
//3.1416 -- float 
//true, false -- boolean 
//[ 1, 2, 3, 4] -- array 
//{name: 'Victor', age: 37} -- object 
//null -- null

var victor = 16;
var enrique = 24;
function restaEdades(userAge1, userAge2) {
	var resta = userAge1 - userAge2
	var MAYOR_DE_EDAD = 18;
	var user1EsMayor = userAge1 > 18 ? 'Es mayor' : 'No es mayor'
	return{
		diferencia: resta,
		es_mayor: user1EsMayor
	}
	}

console.log(restaEdades(victor, enrique))