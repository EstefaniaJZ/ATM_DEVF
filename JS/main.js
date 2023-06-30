const formulario = document.querySelector('#select-accounts')
const select = document.querySelector('select')
const body = document.querySelector('body')
const wrapper = document.querySelector('#wrapper')
let selected = []

const cuentas = [
	{id: 1, nombre: "Estefanía", saldo: 700, pin: '0000' },
	{id: 2, nombre: "Hazel", saldo: 480, pin: '1234' },
	{id: 3, nombre: "Alejandra", saldo: 100, pin: '8976'}
]


const validatePIN = (id, pin) => {
	 selected = cuentas.filter((cuenta) =>{
		return cuenta.id === parseInt(id)
	 })
	if (selected[0].pin === pin) {
		console.log (selected.pin)
		alert ('Bienvenido')
		wrapper.innerHTML=""
		//body.innerHTML= ''
		//location.href = "/Opciones/index.html"
		renderMenu(selected[0].nombre)
	} else {
		alert ('Intente nuevamente')
	}
}


formulario.addEventListener('submit', (event)=> {
	event.preventDefault();
	let user_id = event.target ["cuenta"].value

	let pin = prompt ("Ingrese su pin", "")
	if (pin != null) {
		validatePIN(user_id, pin)


		//if (pin === '0000'){
			//console.log('Correcto')
		//} else {
		//	console.log('Incorrecto')
		}
    })

cuentas.forEach((cuenta) => {
	let option = document.createElement("option")
	option.value = cuenta.id
	option.innerText = cuenta.nombre
select.appendChild(option)
})
