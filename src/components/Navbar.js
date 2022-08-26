import React from "react";

let Navbar = () => {
	return (
		<div class="container">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse"
						id="navbarNavAltMarkup"
					>
						<div class="navbar-nav">
							<a
								class="nav-link active px-lg-5 px-sm-3 px-1"
								aria-current="page"
								href="#"
							>
								About
							</a>
							<a class="nav-link px-lg-5 px-sm-3 px-1" href="#">
								Projects
							</a>
							<a class="nav-link px-lg-5 px-sm-3 px-1" href="#">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
