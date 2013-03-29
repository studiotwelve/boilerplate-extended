/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'iconmonstr\'">' + entity + '</span>' + html;
	}
	var icons = {
			'monstr-iconmonstr-twitter-icon' : '&#x21;',
			'monstr-iconmonstr-soundcloud-icon' : '&#x22;',
			'monstr-iconmonstr-pinterest-icon' : '&#x23;',
			'monstr-iconmonstr-google-plus-icon' : '&#x24;',
			'monstr-iconmonstr-facebook-icon' : '&#x25;',
			'monstr-iconmonstr-github-6-icon' : '&#x26;',
			'monstr-iconmonstr-dribbble-icon' : '&#x27;',
			'monstr-iconmonstr-deviantart-icon' : '&#x28;',
			'monstr-iconmonstr-youtube-icon' : '&#x29;',
			'monstr-iconmonstr-user-14-icon' : '&#x2a;',
			'monstr-iconmonstr-star-icon' : '&#x2b;',
			'monstr-iconmonstr-document-file-2-icon' : '&#x2c;',
			'monstr-iconmonstr-calendar-4-icon' : '&#x2d;',
			'monstr-iconmonstr-clipboard-5-icon' : '&#x2e;',
			'monstr-iconmonstr-computer-3-icon' : '&#x2f;',
			'monstr-iconmonstr-tablet-icon' : '&#x30;',
			'monstr-iconmonstr-download-10-icon' : '&#x31;',
			'monstr-iconmonstr-upload-10-icon' : '&#x32;',
			'monstr-iconmonstr-cloud-3-icon' : '&#x33;',
			'monstr-iconmonstr-smartphone-4-icon' : '&#x34;',
			'monstr-iconmonstr-time-9-icon' : '&#x35;',
			'monstr-iconmonstr-time-6-icon' : '&#x36;',
			'monstr-iconmonstr-pie-chart-2-icon' : '&#x37;',
			'monstr-iconmonstr-line-chart-icon' : '&#x38;',
			'monstr-iconmonstr-livejournal-icon' : '&#x39;',
			'monstr-iconmonstr-full-folder-icon' : '&#x3a;',
			'monstr-iconmonstr-speech-bubble-13-icon' : '&#x3b;',
			'monstr-iconmonstr-email-2-icon' : '&#x3c;',
			'monstr-iconmonstr-globe-4-icon' : '&#x3d;',
			'monstr-iconmonstr-home-4-icon' : '&#x3e;',
			'monstr-iconmonstr-plus-4-icon' : '&#x3f;',
			'monstr-iconmonstr-check-mark-3-icon' : '&#x40;',
			'monstr-iconmonstr-x-mark-3-icon' : '&#x41;',
			'monstr-iconmonstr-undo-4-icon' : '&#x42;',
			'monstr-iconmonstr-redo-4-icon' : '&#x43;',
			'monstr-iconmonstr-magnifier-3-icon' : '&#x44;',
			'monstr-iconmonstr-resize-4-icon' : '&#x45;',
			'monstr-iconmonstr-refresh-5-icon' : '&#x46;',
			'monstr-iconmonstr-window-command-icon' : '&#x47;',
			'monstr-iconmonstr-gear-icon' : '&#x48;',
			'monstr-iconmonstr-arrow-58-icon' : '&#x49;',
			'monstr-iconmonstr-rss-icon' : '&#x4a;',
			'monstr-iconmonstr-facebook-like-icon' : '&#x4b;',
			'monstr-iconmonstr-help-2-icon' : '&#x4c;',
			'monstr-iconmonstr-video-5-icon' : '&#x4d;',
			'monstr-iconmonstr-info-5-icon' : '&#x4e;',
			'monstr-iconmonstr-location-4-icon' : '&#x4f;',
			'monstr-iconmonstr-location-3-icon' : '&#x50;',
			'monstr-iconmonstr-server-4-icon' : '&#x51;',
			'monstr-iconmonstr-database-icon' : '&#x52;',
			'monstr-iconmonstr-laptop-4-icon' : '&#x53;',
			'monstr-iconmonstr-location-5-icon' : '&#x54;',
			'monstr-iconmonstr-basket-2-icon' : '&#x55;',
			'monstr-iconmonstr-arrow-32-icon' : '&#x56;',
			'monstr-iconmonstr-user-icon' : '&#x57;',
			'monstr-iconmonstr-user-14-icon-1' : '&#x58;',
			'monstr-iconmonstr-microphone-icon' : '&#x59;',
			'monstr-iconmonstr-shopping-cart-icon' : '&#x5a;',
			'monstr-iconmonstr-link-2-icon' : '&#x5b;',
			'monstr-iconmonstr-dashboard-3-icon' : '&#x5c;',
			'monstr-iconmonstr-warning-6-icon' : '&#x5d;',
			'monstr-iconmonstr-basket-12-icon' : '&#x5e;',
			'monstr-iconmonstr-inbox-6-icon' : '&#x5f;',
			'monstr-iconmonstr-phone-icon' : '&#x60;',
			'monstr-iconmonstr-email-icon' : '&#x61;',
			'monstr-iconmonstr-photo-camera-4-icon' : '&#x62;',
			'monstr-iconmonstr-check-mark-icon' : '&#x63;',
			'monstr-iconmonstr-x-mark-icon' : '&#x64;',
			'monstr-iconmonstr-location-2-icon' : '&#x65;',
			'monstr-iconmonstr-share-4-icon' : '&#x66;',
			'monstr-iconmonstr-lock-icon' : '&#x67;',
			'monstr-iconmonstr-navigation-2-icon' : '&#x68;',
			'monstr-iconmonstr-shopping-cart-13-icon' : '&#x69;',
			'monstr-iconmonstr-compass-9-icon' : '&#x6a;',
			'monstr-iconmonstr-window-layout-icon' : '&#x6b;',
			'monstr-iconmonstr-shopping-cart-3-icon' : '&#x6c;',
			'monstr-iconmonstr-favorite-3-icon' : '&#x6d;',
			'monstr-iconmonstr-error-5-icon' : '&#x6e;'
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
		c = c.match(/monstr-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};