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
			<form ref={form} onSubmit={sendEmail}>
				<div className="mb-3">
					<label for="user_name" className="form-label">
						Name
					</label>
					<input
						className="form-control"
						id="user_name"
						type="text"
						name="user_name"
					/>
					<label for="user_email" className="form-label">
						Email
					</label>
					<input
						className="form-control"
						id="user_email"
						type="email"
						name="user_email"
					/>
					<label for="message" className="form-label">
						Message
					</label>
					<textarea
						className="form-control"
						id="message"
						rows="3"
						name="message"
					/>
					<input type="submit" value="Send" />
				</div>
			</form>
		</div>
	);
};

export default Contact;
