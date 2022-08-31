import React from "react";

let Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg nav-text sticky-top">
			<div class="container-fluid">
				<button
					class="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarCenteredExample"
					aria-controls="navbarCenteredExample"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i class="fas fa-bars"></i>
				</button>

				<div
					class="collapse navbar-collapse justify-content-center"
					id="navbarCenteredExample"
				>
					<ul class="navbar-nav mb-2 mb-lg-0">
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
			</div>
		</nav>
	);
};

export default Navbar;
