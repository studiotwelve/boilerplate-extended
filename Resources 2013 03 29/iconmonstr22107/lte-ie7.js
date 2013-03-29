/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'iconmonstr\'">' + entity + '</span>' + html;
	}
	var icons = {
			'iconmonstr-twitter-icon' : '&#x21;',
			'iconmonstr-soundcloud-icon' : '&#x22;',
			'iconmonstr-pinterest-icon' : '&#x23;',
			'iconmonstr-google-plus-icon' : '&#x24;',
			'iconmonstr-facebook-icon' : '&#x25;',
			'iconmonstr-github-6-icon' : '&#x26;',
			'iconmonstr-dribbble-icon' : '&#x27;',
			'iconmonstr-deviantart-icon' : '&#x28;',
			'iconmonstr-youtube-icon' : '&#x29;',
			'iconmonstr-user-14-icon' : '&#x2a;',
			'iconmonstr-star-icon' : '&#x2b;',
			'iconmonstr-document-file-2-icon' : '&#x2c;',
			'iconmonstr-calendar-4-icon' : '&#x2d;',
			'iconmonstr-clipboard-5-icon' : '&#x2e;',
			'iconmonstr-computer-3-icon' : '&#x2f;',
			'iconmonstr-tablet-icon' : '&#x30;',
			'iconmonstr-download-10-icon' : '&#x31;',
			'iconmonstr-upload-10-icon' : '&#x32;',
			'iconmonstr-cloud-3-icon' : '&#x33;',
			'iconmonstr-smartphone-4-icon' : '&#x34;',
			'iconmonstr-time-9-icon' : '&#x35;',
			'iconmonstr-time-6-icon' : '&#x36;',
			'iconmonstr-pie-chart-2-icon' : '&#x37;',
			'iconmonstr-line-chart-icon' : '&#x38;',
			'iconmonstr-livejournal-icon' : '&#x39;',
			'iconmonstr-full-folder-icon' : '&#x3a;',
			'iconmonstr-speech-bubble-13-icon' : '&#x3b;',
			'iconmonstr-email-2-icon' : '&#x3c;',
			'iconmonstr-globe-4-icon' : '&#x3d;',
			'iconmonstr-home-4-icon' : '&#x3e;',
			'iconmonstr-plus-4-icon' : '&#x3f;',
			'iconmonstr-check-mark-3-icon' : '&#x40;',
			'iconmonstr-x-mark-3-icon' : '&#x41;',
			'iconmonstr-undo-4-icon' : '&#x42;',
			'iconmonstr-redo-4-icon' : '&#x43;',
			'iconmonstr-magnifier-3-icon' : '&#x44;',
			'iconmonstr-resize-4-icon' : '&#x45;',
			'iconmonstr-refresh-5-icon' : '&#x46;',
			'iconmonstr-window-command-icon' : '&#x47;',
			'iconmonstr-gear-icon' : '&#x48;',
			'iconmonstr-arrow-58-icon' : '&#x49;',
			'iconmonstr-rss-icon' : '&#x4a;',
			'iconmonstr-facebook-like-icon' : '&#x4b;',
			'iconmonstr-help-2-icon' : '&#x4c;',
			'iconmonstr-video-5-icon' : '&#x4d;',
			'iconmonstr-info-5-icon' : '&#x4e;',
			'iconmonstr-location-4-icon' : '&#x4f;',
			'iconmonstr-location-3-icon' : '&#x50;',
			'iconmonstr-server-4-icon' : '&#x51;',
			'iconmonstr-database-icon' : '&#x52;',
			'iconmonstr-laptop-4-icon' : '&#x53;',
			'iconmonstr-location-5-icon' : '&#x54;',
			'iconmonstr-basket-2-icon' : '&#x55;',
			'iconmonstr-arrow-32-icon' : '&#x56;',
			'iconmonstr-user-icon' : '&#x57;',
			'iconmonstr-user-14-icon-1' : '&#x58;',
			'iconmonstr-microphone-icon' : '&#x59;',
			'iconmonstr-shopping-cart-icon' : '&#x5a;',
			'iconmonstr-link-2-icon' : '&#x5b;',
			'iconmonstr-dashboard-3-icon' : '&#x5c;',
			'iconmonstr-warning-6-icon' : '&#x5d;',
			'iconmonstr-basket-12-icon' : '&#x5e;',
			'iconmonstr-inbox-6-icon' : '&#x5f;',
			'iconmonstr-phone-icon' : '&#x60;',
			'iconmonstr-email-icon' : '&#x61;',
			'iconmonstr-photo-camera-4-icon' : '&#x62;',
			'iconmonstr-check-mark-icon' : '&#x63;',
			'iconmonstr-x-mark-icon' : '&#x64;',
			'iconmonstr-location-2-icon' : '&#x65;',
			'iconmonstr-share-4-icon' : '&#x66;',
			'iconmonstr-lock-icon' : '&#x67;',
			'iconmonstr-navigation-2-icon' : '&#x68;',
			'iconmonstr-shopping-cart-13-icon' : '&#x69;',
			'iconmonstr-compass-9-icon' : '&#x6a;',
			'iconmonstr-window-layout-icon' : '&#x6b;',
			'iconmonstr-shopping-cart-3-icon' : '&#x6c;',
			'iconmonstr-favorite-3-icon' : '&#x6d;',
			'iconmonstr-error-5-icon' : '&#x6e;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};