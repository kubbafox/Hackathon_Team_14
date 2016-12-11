var scaledMedia = {

	bindEvents: function() {

		// Add event listener.
		document.body.addEventListener('click', function(e) {

			// Bail if not clicking a scaled image.
			if (!e.target.classList.contains('scaled-image')) {
				return;
			}

			// Find the grandparent.
			var parent = e.target.parentElement;
			var grandparent = parent.parentElement;

			// Engage scaled image.
			if (!grandparent.classList.contains('is-open')) {
				grandparent.classList.add('is-open');
				document.body.classList.add('opened');
				return;
			}

			// Remove body class.
			if (grandparent.classList.contains('is-open')) {
				grandparent.classList.remove('is-open');
			}
		});
	},

	// Engage.
	init: function() {
		this.bindEvents();
	}
};

scaledMedia.init();