import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

let Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_633lf2o",
				"template_1lchddq",
				form.current,
				"jMXdrcXQK_nrEupDL"
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("message sent");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="d-flex justify-content-center align-items-center back flex-column">
			<div className="contact-header">Contact</div>
			<div>Email: kevinmcpeak46@gmail.com</div>
			<div>OR</div>
			<div>
				Please submit your name, email and message to this form. I will
				return your email within 24 hours.
			</div>
			<form
				ref={form}
				onSubmit={sendEmail}
				className="d-flex flex-column"
			>
				<label>Name</label>
				<input type="text" name="user_name" />
				<label>Email</label>
				<input type="email" name="user_email" />
				<label>Message</label>
				<textarea name="message" />
				<input type="submit" value="Send" />
			</form>
		</div>
	);
};

export default Contact;
