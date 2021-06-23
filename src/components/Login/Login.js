import React, { useContext, useState } from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app();
}

const Login = () => {
	const [info, setInfo] = useContext(UserContext);
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };
	//....Setting values of the input....
	const [thevalue, setthevalue] = useState({
		name: "",
		email: "",
		password: "",
		confirm: "",
		isnameValid: true,
		isemailValid: true,
		ispassValid: true,
		isconfirmValid: true,
	});

	//.....Setting values from firebase authentication
	const [User, setUser] = useState({
		errorDetect: false,
		loginsuccess: "",
		loginerror: "",
		emailsuccess: "",
		emailerror: "",
		signedup: true,
	});

	//.....For Submit event.....
	const handleSubmit = (event) => {
		//....For Sign up.....
		if (
			User.signedup &&
			thevalue.name &&
			thevalue.email &&
			thevalue.password &&
			thevalue.confirm
		) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(thevalue.email, thevalue.password)
				.then((result) => {
					const newUser = { ...User };
					newUser.emailsuccess = "Successfully created account";
					newUser.errorDetect = false;
					setUser(newUser);
					UpdateUser(thevalue.name);
					const newinfo = { ...info };
					newinfo.name = thevalue.name;
					newinfo.istrue = false;
					newinfo.email = thevalue.email;
					setInfo(newinfo);
					history.replace(from);
				})
				.catch((error) => {
					const newUser = { ...User };
					newUser.emailerror = "This email is already in use";
					newUser.errorDetect = true;
					setUser(newUser);
				});
		}
		//....For Log in....
		if (!User.signedup && thevalue.email && thevalue.password) {
			firebase
				.auth()
				.signInWithEmailAndPassword(thevalue.email, thevalue.password)
				.then((results) => {
					const newUser = { ...User };
					newUser.loginsuccess = "Successfully logged in";
					newUser.errorDetect = false;
					setUser(newUser);
					const newinfo = { ...info };
					newinfo.name = thevalue.name;
					newinfo.istrue = false;
					newinfo.email = thevalue.email;
					setInfo(newinfo);
					history.replace(from);
				})
				.catch((error) => {
					const newUser = { ...User };
					newUser.loginerror = "No user found or invalid password";
					newUser.errorDetect = true;
					setUser(newUser);
				});
		}
		event.preventDefault();
	};

	//.....For onChange event....
	const handleChange = (e) => {
		let isFormValid = false;
		//....For name input....
		if (e.target.name === "name") {
			isFormValid = /^[A-Za-z\s]+$/.test(e.target.value);
			if (isFormValid === false) {
				const newValue = { ...thevalue };
				newValue.isnameValid = false;
				setthevalue(newValue);
			}
		}
		//....For email input.....
		if (e.target.name === "email") {
			isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
			if (isFormValid === false) {
				const newValue = { ...thevalue };
				newValue.isemailValid = false;
				setthevalue(newValue);
			}
		}
		//.....For password input....
		if (e.target.name === "password") {
			isFormValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(
				e.target.value
			);
			const checkPass = { ...thevalue };
			checkPass.password = e.target.value;
			setthevalue(checkPass);
			if (isFormValid === false) {
				const newValue = { ...thevalue };
				newValue.ispassValid = false;
				setthevalue(newValue);
			}
		}
		//.....For confirm-password input....
		if (e.target.name === "confirm") {
			if (thevalue.password === e.target.value) {
				isFormValid = true;
			} else {
				isFormValid = false;
			}
			if (isFormValid === false) {
				const newValue = { ...thevalue };
				newValue.isconfirmValid = false;
				setthevalue(newValue);
			}
		}
		//....If Form is valid
		if (isFormValid) {
			let newValue = { ...thevalue };
			newValue[e.target.name] = e.target.value;
			newValue.isnameValid = true;
			newValue.isemailValid = true;
			newValue.ispassValid = true;
			newValue.isconfirmValid = true;
			setthevalue(newValue);
		}
	};

	//.....Handle login text....
	const handleLogin = () => {
		const newUser = { ...User };
		newUser.signedup = false;
		setUser(newUser);
	};

	//.....Handle signup text.....
	const handleSignup = () => {
		const newUser = { ...User };
		newUser.signedup = true;
		setUser(newUser);
	};

	//.....Google sign in...
	const googleSignin = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const newinfo = { ...info };
				newinfo.name = result.user.displayName;
				newinfo.istrue = false;
				newinfo.email = result.user.email;
				setInfo(newinfo);
				history.replace(from);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	//....Update users profile....
	const UpdateUser = (name) => {
		const user = firebase.auth().currentUser;
		user
			.updateProfile({
				displayName: name,
			})
			.then(function () {
				// Update successful.
			})
			.catch(function (error) {
				// An error happened.
			});
	};

	return (
		<div className="the_login_div">
			<div className="container">
				<div className="row">
					<div className="col d-flex justify-content-center py-5">
						<div>
							<div className="login_form_width border border-dark py-3 px-3">
								<form onSubmit={handleSubmit}>
									{User.signedup ? (
										<h2 className="text-center">Sign up</h2>
									) : (
										<h2 className="text-center">Log in</h2>
									)}
									{User.signedup && (
										<div className="mb-2">
											<label htmlFor="name" className="form-label">
												Name
											</label>
											{thevalue.isnameValid ? (
												<input
													onChange={handleChange}
													type="text"
													name="name"
													id="name"
													placeholder="Name"
													className="form-control"
													required
												/>
											) : (
												<input
													onChange={handleChange}
													type="text"
													name="name"
													id="name"
													placeholder="Name"
													className="form-control"
													style={{
														border: "2px solid red",
														boxShadow: "0.5px 0.5px 5px red",
													}}
													required
												/>
											)}
										</div>
									)}
									<div className="mb-2">
										<label htmlFor="email" className="form-label">
											Email
										</label>
										{thevalue.isemailValid ? (
											<input
												onChange={handleChange}
												type="email"
												name="email"
												id="email"
												placeholder="Email"
												className="form-control"
												required
											/>
										) : (
											<input
												onChange={handleChange}
												type="email"
												name="email"
												id="email"
												placeholder="Email"
												className="form-control"
												style={{
													border: "2px solid red",
													boxShadow: "0.5px 0.5px 5px red",
												}}
												required
											/>
										)}
									</div>
									<div className="mb-2">
										<label htmlFor="password" className="form-label">
											Password(minimum "6" letter with digit)
										</label>
										{thevalue.ispassValid ? (
											<input
												onChange={handleChange}
												type="password"
												name="password"
												id="password"
												placeholder="Password"
												className="form-control"
												required
											/>
										) : (
											<input
												onChange={handleChange}
												type="password"
												name="password"
												id="password"
												placeholder="Password"
												className="form-control"
												style={{
													border: "2px solid red",
													boxShadow: "0.5px 0.5px 5px red",
												}}
												required
											/>
										)}
									</div>
									{User.signedup && (
										<div className="mb-2">
											<label htmlFor="confirm" className="form-label">
												Confirm-Password
											</label>
											{thevalue.isconfirmValid ? (
												<input
													onChange={handleChange}
													type="password"
													name="confirm"
													id="confirm"
													placeholder="Comfirm password"
													className="form-control"
													required
												/>
											) : (
												<input
													onChange={handleChange}
													type="password"
													name="confirm"
													id="confirm"
													placeholder="Comfirm password"
													className="form-control"
													style={{
														border: "2px solid red",
														boxShadow: "0.5px 0.5px 5px red",
													}}
													required
												/>
											)}
										</div>
									)}
									<div className="mb-3">
										{User.signedup ? (
											<input
												onChange={handleChange}
												type="submit"
												value="Signup"
												className="form-control bg-danger text-light"
											/>
										) : (
											<input
												onChange={handleChange}
												type="submit"
												value="Login"
												className="form-control bg-danger text-light"
											/>
										)}
									</div>
									{User.signedup ? (
										<div>
											{User.errorDetect ? (
												<p className="text-center text-danger">
													{User.emailerror}
												</p>
											) : (
												<p className="text-center text-success">
													{User.emailsuccess}
												</p>
											)}
										</div>
									) : (
										<div>
											{User.errorDetect ? (
												<p className="text-center text-danger">
													{User.loginerror}
												</p>
											) : (
												<p className="text-center text-success">
													{User.loginsuccess}
												</p>
											)}
										</div>
									)}
									<div className="sign_login_align">
										{User.signedup ? (
											<p>
												Already have an account?{" "}
												<span
													style={{ color: "blue", cursor: "pointer" }}
													onClick={handleLogin}
												>
													Login
												</span>
											</p>
										) : (
											<p>
												Don't have an account?
												<span
													style={{ color: "blue", cursor: "pointer" }}
													onClick={handleSignup}
												>
													Signup
												</span>
											</p>
										)}
									</div>
								</form>
							</div>
							<div>
								<div className="d-flex justify-content-around">
									<hr />
									<span>or</span>
									<hr />
								</div>
								<div className="login_form_width">
									<button
										onClick={googleSignin}
										type="submit"
										className="w-100 btn btn-outline-danger my-2"
									>
										<i className="bi bi-google"></i> Continue with google
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
