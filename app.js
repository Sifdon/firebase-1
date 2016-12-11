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
	const txtEmail = document.getElementById('txtEmail')
	const txtPassword = document.getElementById('txtPassword')
	const btnLogin = document.getElementById('btnLogin')
	const btnSignUp = document.getElementById('btnSignUp')
	const btnLogout = document.getElementById('btnLogout')

	// añadir evento login
	btnLogin.addEventListener('click', e => {
		// obtener email y pass
		const email = txtEmail.value
		const pass = txtPassword.value
		// almacenando el valor que retorna la promise
		const auth = firebase.auth()
		// sign in
		const promise = auth.signInWithEmailAndPassword(email, pass)
		promise.catch(e => console.log(e.message))

	})

	// añadir evento signup
	btnSignUp.addEventListener('click', e => {
		// obtener email y pass
		// TODO: comprobar que el email sea real
		const email = txtEmail.value
		const pass = txtPassword.value
		// almacenando el valor que retorna la promise
		const auth = firebase.auth()
		// sign in
		const promise = auth.createUserWithEmailAndPassword(email, pass)
		promise.catch(e => console.log(e.message))
	})

	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut()
	})

	// Añadir un listener en tiempo real
	 firebase.auth().onAuthStateChanged( firebaseUser => {
		if(firebaseUser) {
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		} else {
			console.log('no logueado');
			btnLogout.classList.add('hide');
		}
	});

} ())
