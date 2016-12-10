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

	// obtener elementos
	const preObject = document.getElementById('objeto')

	// crear referencias a DB
	const dbRefObject = firebase.database().ref().child('objeto')

	// sincronizar cambios objeto con metodo on
	dbRefObject.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3)
	})

} ())
