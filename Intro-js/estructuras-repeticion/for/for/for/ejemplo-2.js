// del 1 al 20, ¿cuantos son pares?
let contador = 0

 for (let i = 1; i < 21; 1++) {
	if (i % 2 === 0){
		contador = contador + 1
		console.log(`${i}, es par`)
	}
 }

 console.log(`Del 0 al 20, existen ${contador} números que son pares`)

 