import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";

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
		<div
			className="d-flex justify-content-center align-items-center back flex-column pt-5"
			id="contact"
		>
			<div className="contact-header mb-3">Contact</div>

			<div>
				Feel free to submit the form below or contact me directly at
				<span style={{ fontWeight: "700" }}>
					{" "}
					kevinmcpeak46@gmail.com
				</span>
			</div>
			<form ref={form} onSubmit={sendEmail}>
				<div className="mb-3 form-div mt-3">
					<label for="user_name" className="form-label">
						Name
					</label>
					<input
						className="form-control"
						id="user_name"
						type="text"
						name="user_name"
						placeholder="Enter Your Name"
					/>
					<label for="user_email" className="form-label">
						Email
					</label>
					<input
						className="form-control"
						id="user_email"
						type="email"
						name="user_email"
						placeholder="Enter Your Email"
					/>
					<label for="message" className="form-label">
						Message
					</label>
					<textarea
						className="form-control"
						id="message"
						rows="8"
						name="message"
						placeholder="Enter Your Message"
					/>
					<Button
						type="submit"
						style={{
							backgroundColor: "rgb(250,207,15)",
							borderColor: "rgb(250,207,15)",
							color: "black",
							marginRight: "10px",
							width: "500px",
							boxShadow:
								"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
						}}
						className="project-button"
					>
						Send
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
