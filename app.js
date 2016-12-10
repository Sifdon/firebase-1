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
	const ulList = document.getElementById('lista')

	// crear referencias a DB
	const dbRefObject = firebase.database().ref().child('objeto')
	const dbRefList = dbRefObject.child('habilidades')

	// sincronizar cambios objeto con metodo on
	dbRefObject.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3)
	})

	// sincronizar cambios lista
	dbRefList.on('child_added', snap => {
		const li = document.createElement('li')
		li.innerText = snap.val()
		li.id = snap.key
		ulList.appendChild(li)
	})

	dbRefList.on('child_changed', snap => {
		const liChanged = document.getElementById(snap.key)
		liChanged.innerText = snap.val()
	})

	dbRefList.on('child_removed', snap => {
		const liToRemove = document.getElementById(snap.key)
		liToRemove.remove()
	})

} ())
