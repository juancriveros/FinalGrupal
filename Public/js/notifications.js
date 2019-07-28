socketNotifications = io({transports: ['websocket'], upgrade: false});
const ActualizarCurso = document.querySelector('#ActualizarCurso');

socketNotifications.on('notificacion', (texto) => {
	console.log('llego')
	alert(texto);
})

ActualizarCurso.addEventListener('submit', (datos) => {
	console.log( datos)
	socketNotifications.emit('cursocerrado', datos.target.curso.value)
})

