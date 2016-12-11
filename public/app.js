(function () {
	// Initialize Firebase
	const config = {
		apiKey: "AIzaSyAFuhfxUYsEqKgcIwWU6XdkfKWQRXP5ssY",
		authDomain: "first-conecction.firebaseapp.com",
		databaseURL: "https://first-conecction.firebaseio.com",
		storageBucket: "first-conecction.appspot.com",
		messagingSenderId: "560464549562"
	}
	firebase.initializeApp(config)

	// obtener Elementos
	var uploader = document.getElementById('uploader')
	var fileButton = document.getElementById('fileButton')

	// vigilar selección archivo
	fileButton.addEventListener('change', e => {
		//Obtener archivo
		var file = e.target.files[0]

		// crear un storage ref
		var storageRef = firebase.storage().ref('mis_fotos/' + file.name)

		// subir archivo
		var task = storageRef.put(file)

		// actualizar barra progreso
		task.on('state_changed',
			function progress(snapshot) {
				var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
				uploader.value = percentage
			},
			function error(err) {
				console.log('erronea carga')
			},
			function complete() {
				console.log('exitosa carga')
			}
		)
	})

} ())
