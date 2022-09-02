import React from "react";

let Navbar = () => {
	return (
		<nav class="navbar navbar-expand-md">
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#toggleMobileMenu"
				aria-controls="toggleMobileMenu"
				ariba-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div
				class="collapse navbar-collapse justify-content-center"
				id="toggleMobileMenu"
			>
				<ul class="navbar-nav">
					<li class="nav-item">
						<a
							class="nav-link active"
							aria-current="page"
							href="#background"
						>
							Journey
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#projects">
							Projects
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#skills">
							Skills
						</a>
					</li>

					<li class="nav-item">
						<a class="nav-link" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
