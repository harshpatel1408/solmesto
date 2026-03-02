document.addEventListener("DOMContentLoaded", function () {

	const menuBtn = document.getElementById("menu-btn");
	const mobileMenu = document.getElementById("mobile-menu");
	const mobileLinks = document.querySelectorAll(".mobile-link");

	if (menuBtn && mobileMenu) {

		// Toggle Menu
		menuBtn.addEventListener("click", function () {
			mobileMenu.classList.toggle("hidden");
			menuBtn.classList.toggle("open");
		});

		// Auto Close on Link Click
		mobileLinks.forEach(link => {
			link.addEventListener("click", function () {
				mobileMenu.classList.add("hidden");
				menuBtn.classList.remove("open");
			});
		});

		// Highlight Active Page
		const currentPage = window.location.pathname.split("/").pop();

		mobileLinks.forEach(link => {
			const linkPage = link.getAttribute("href");

			if (linkPage === currentPage || 
			   (currentPage === "" && linkPage === "index.html")) {
				link.classList.add("text-primary", "font-semibold");
			}
		});
	}

});