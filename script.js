// script.js — navigation, smooth scroll and contact form handling
document.addEventListener('DOMContentLoaded', () => {
	// Mobile nav toggle
	const navToggle = document.getElementById('nav-toggle');
	const nav = document.getElementById('primary-nav');
	navToggle.addEventListener('click', () => {
		const expanded = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', String(!expanded));
		nav.classList.toggle('hidden');
	});

	// Smooth scroll for internal anchors
	document.querySelectorAll('a[href^="#"]').forEach((link) => {
		link.addEventListener('click', (e) => {
			const href = link.getAttribute('href');
			if (href.length > 1 && document.querySelector(href)) {
				e.preventDefault();
				document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
				// close mobile nav after click
				if (window.innerWidth <= 640) {
					nav.classList.add('hidden');
					navToggle.setAttribute('aria-expanded', 'false');
				}
			}
		});
	});

	// Contact form validation and simulated submission
	const form = document.getElementById('contact-form');
	const status = document.getElementById('form-status');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		status.textContent = '';
		const name = form.name.value.trim();
		const email = form.email.value.trim();
		const message = form.message.value.trim();
		if (!name || !email || !message) {
			status.textContent = 'Please fill all fields.';
			return;
		}
		// basic email validation
		const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
		if (!emailRegex.test(email)) {
			status.textContent = 'Please enter a valid email.';
			return;
		}
		status.textContent = 'Sending...';
		// Simulate network request — replace with real API call in production
		setTimeout(() => {
			status.textContent = 'Message sent — thank you!';
			form.reset();
		}, 900);
	});
});
