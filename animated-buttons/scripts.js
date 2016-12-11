var waveButtons = {
	cache: function() {
		this.centerOutBtn = document.getElementById('#center-out');
		this.centerOutCircleBtn = document.getElementById('#center-out-circle');
		this.leftRightBtn = document.getElementById('#left-to-right');
		this.rightLeftBtn = document.getElementById('#right-to-left');
	},

	bindEvents: function() {

		// Center Out
		this.centerOutBtn.addEventListener('click', function() {
			this.addClass(this.centerOutBtn, 'center-out');
		}.bind(this));
		this.centerOutBtn.addEventListener('animationend', function() {
			this.removeClass(this.centerOutBtn, 'center-out')
		}.bind(this));

		// Center Out Circle
		this.centerOutCircleBtn.addEventListener('click', function() {
			this.addClass(this.centerOutCircleBtn, 'center-out-circle');
		}.bind(this));
		this.centerOutCircleBtn.addEventListener('animationend', function() {
			this.removeClass(this.centerOutCircleBtn, 'center-out-circle')
		}.bind(this));

		// Left To Right
		this.leftRightBtn.addEventListener('click', function() {
			this.addClass(this.leftRightBtn, 'left-to-right');
		}.bind(this));
		this.leftRightBtn.addEventListener('animationend', function() {
			this.removeClass(this.leftRightBtn, 'left-to-right')
		}.bind(this));

		// Left To Right
		this.rightLeftBtn.addEventListener('click', function() {
			this.addClass(this.rightLeftBtn, 'right-to-left');
		}.bind(this));
		this.rightLeftBtn.addEventListener('animationend', function() {
			this.removeClass(this.rightLeftBtn, 'right-to-left')
		}.bind(this));
	},

	addClass: function(el, className) {
		el.classList.add(className);
	},

	removeClass: function(el, className) {
		el.classList.remove(className);
	},

	init: function() {
		this.cache();
		this.bindEvents();
	},
};

// Kick things off!
waveButtons.init();