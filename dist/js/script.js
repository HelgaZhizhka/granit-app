'use strict';
(function() {
	//remove no-js class html
	document.getElementsByTagName('html')[0].classList.remove('no-js');
	
	// detect retina devise and replace img src
	if (window.devicePixelRatio > 1) {
		var lowresImages = document.querySelectorAll('.highres');
		if(lowresImages) {
			for(var i=0; i< lowresImages.length; i++) {
				var $this = lowresImages[i],
						imageType = $this.getAttribute('src').substr(-4),
						imageName = $this.getAttribute('src').substr(0, $this.getAttribute('src').length - 4);
				imageName += "@2x" + imageType;
				//replace for rename image @2x
				$this.setAttribute('src', imageName);
			}
		}
	}
	
	
	//canvas draw image example
	var canvasMain = document.getElementById('canvas-main'), //for main page
			canvasNav	= document.getElementById('canvas-nav'), //for canvas in navigation page
			canvasPortfolio = document.getElementById('canvas-portfolio'), //for demo one active item in navidation page
			canvasNavItem		= document.querySelector('canvas[data-index]'), //for demo size canvas in nav item page
			backgroundCanvas = new Image();
	
	function resizeCanvas(ctx) {
		var wWidth	= window.innerWidth,
			wHeight = window.innerHeight;
		ctx.canvas.width = wWidth;
		ctx.canvas.height = wHeight;
	}

	function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
		
		if (arguments.length === 2) {
			x = y = 0;
			w = ctx.canvas.width;
			h = ctx.canvas.height;
		}
		
		// default offset is center
		offsetX = typeof offsetX === "number" ? offsetX : 0.5;
		offsetY = typeof offsetY === "number" ? offsetY : 0.5;
		
		// keep bounds [0.0, 1.0]
		if (offsetX < 0) offsetX = 0;
		if (offsetY < 0) offsetY = 0;
		if (offsetX > 1) offsetX = 1;
		if (offsetY > 1) offsetY = 1;
		
		var iw = img.width,
			ih = img.height,
			r = Math.min(w / iw, h / ih),
			nw = iw * r,   // new prop. width
			nh = ih * r,   // new prop. height
			cx, cy, cw, ch, ar = 1;
		
		// decide which gap to fill
		if (nw < w) ar = w / nw;
		if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
		nw *= ar;
		nh *= ar;
		
		// calc source rectangle
		cw = iw / (nw / w);
		ch = ih / (nh / h);
		
		cx = (iw - cw) * offsetX;
		cy = (ih - ch) * offsetY;
		
		// make sure source rectangle is valid
		if (cx < 0) cx = 0;
		if (cy < 0) cy = 0;
		if (cw > iw) cw = iw;
		if (ch > ih) ch = ih;
		
		// fill image in dest. rectangle
		ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
	}
	
	//canvas in main page (demo)
	if(canvasMain) {
		var contextMain = canvasMain.getContext('2d');
		window.addEventListener('resize', function() {
			resizeCanvas(contextMain);
			drawImageProp(contextMain, backgroundCanvas);
		}, true);
		resizeCanvas(contextMain);
		backgroundCanvas.src = "../images/img2.jpg";
		backgroundCanvas.addEventListener('load', function() {
			drawImageProp(contextMain, backgroundCanvas);
		}, false);
	}
	//canvas in navigation page (demo)
	if(canvasNav) {
		var contextNav = canvasNav.getContext('2d');
		window.addEventListener('resize', function() {
			resizeCanvas(contextNav);
			drawImageProp(contextNav, backgroundCanvas);
		}, true);
		resizeCanvas(contextNav);
		backgroundCanvas.src = "../images/img2.jpg";
		backgroundCanvas.addEventListener('load', function() {
			drawImageProp(contextNav, backgroundCanvas);
		}, false);
	}
	// for demo one active navigation item in navigation page on mouseover
	if(canvasPortfolio) {
		var contextPortfolio = canvasPortfolio.getContext('2d');
		window.addEventListener('resize', function() {
			resizeCanvas(contextPortfolio);
			drawImageProp(contextPortfolio, backgroundCanvas);
		}, true);
		resizeCanvas(contextPortfolio);
		backgroundCanvas.src = "../images/img4.jpg";
		backgroundCanvas.addEventListener('load', function() {
			drawImageProp(contextPortfolio, backgroundCanvas);
		}, false);
	}
	
	//for demo size canvas in nav item pages
	if(canvasNavItem) {
		var contextNavItem = canvasNavItem.getContext('2d');
		window.addEventListener('resize', function() {
			resizeCanvas(contextNavItem);
		}, true);
		resizeCanvas(contextNavItem);
	}
	
	//plugin perfect scrollbar
	var scrollContainer = document.querySelector('.js-page');
	if(scrollContainer) {
		Ps.initialize(scrollContainer,{
			wheelSpeed: 2,
			wheelPropagation: true,
			minScrollbarLength: 20,
			suppressScrollX: true
		});
	}
	
})();