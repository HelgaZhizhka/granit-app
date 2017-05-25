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
	var //canvasMain = document.getElementById('canvas-main'), //for main page
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
/*	if(canvasMain) {
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
	}*/
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
	// var scrollContainer = document.querySelector('.js-page');
	// if(scrollContainer) {
	// 	Ps.initialize(scrollContainer,{
	// 		wheelSpeed: 2,
	// 		wheelPropagation: true,
	// 		minScrollbarLength: 20,
	// 		suppressScrollX: true
	// 	});
	// }




var scripts = scripts || {};
    scripts.Granit = {

        promo : {
            playInAnimation: function() {

                var	$gridIntro 						= document.querySelectorAll('.section_intro .grid span'),
                    $logo									= document.getElementsByClassName('logo-image'),
                    $sectionArrow					= document.getElementsByClassName('section__arrow'),
                    $sectionTextTitle			= document.querySelectorAll('.section_intro .section__overlay .section__text .part h3'),
                    $sectionTextLine			= document.querySelectorAll('.section_intro .section__overlay .section__text .part .line'),
                    $buttonNav						= document.querySelectorAll('.section_intro .section__overlay .button-nav')[0],
                    $buttonNavCircle			= $buttonNav.firstElementChild,
                    $buttonNavText			  = $buttonNav.lastElementChild,
                    $scrollMsg				 = document.querySelectorAll('.section__message .text'),
                    $overlayScrollNext			= document.querySelectorAll('.section__message .text span'),
                    $overlayScrollNextline 		= document.querySelectorAll('.section__message .line'),
                    $overlayScrollNextlineLast = document.querySelectorAll('.section__message .text span b'),
                    $textMain = document.querySelectorAll('.section__text'),
                    $promoText = document.querySelectorAll('.promo-text__phrase'),
                    $promoTextSub = document.querySelectorAll('.promo-text__bottom');

                TweenMax.set($("#canvas-main"), {
                    visibility: "inherit"
                }),
                    TweenMax.to($("#canvas-main"), 1, {
                        delay: .1,
                        autoAlpha: 1,
                    }),
                    TweenMax.to(this.backgroundRenderer.stage.children[0].children[1].children[1].scale, 3, {x: "+=.2", y: "+=.2", ease:"Linear.easeInOut", delay: 4});
                TweenMax.to(this.backgroundRenderer.stage.children[0].children[2].children[1].position, 3, {x: "+="+window.innerWidth*0.05, ease:"Linear.easeInOut", delay: 4});
                TweenMax.to(this.backgroundRenderer.stage.children[0].children[3].children[1].scale, 3, {x: "+=.2", y: "+=.2", ease:"Linear.easeInOut", delay: 4});
                TweenMax.fromTo($overlayScrollNextline, 1, {
                    opacity: 0
                }, {
                    opacity: 1,
                    delay: 3.7
                })

                var tl = new TimelineLite();
                function addAnimClass() {
                    $buttonNav.classList.add('animated');
                }
                tl.to($gridIntro, 2, {
                    scale: 1,
                    backgroundColor: 'rgba(185, 185, 185, 0.25)',
                    ease: Power1.easeInOut
                })
                    .to($logo, 1, {
                        opacity: 1,
                        ease: Power1.easeInOut
                    }, "-=1")
                    .fromTo($sectionArrow, 1, {
                        scale: 1e-4,
                        rotation: "-270deg"
                    }, {
                        scale: 1,
                        rotation: "0deg",
                        ease: Power3.easeOut
                    }, "-=.7")
                    .set($buttonNavCircle, {
                        backgroundColor: "rgb(0, 64, 255)"
                    })
                    .to($buttonNav, 1, {
                        autoAlpha: 1,
                        ease: Power1.easeInOut
                    },'-=1')
                    .fromTo($buttonNavCircle, 1,{
                        scale: 0
                    }, {
                        scale: 1.2,
                        ease: Power1.easeInOut,
                        onCompleteScope: this,
                        onComplete: function() {
                            TweenMax.set($buttonNavCircle, {
                                delay: .01,
                                clearProps: "transform"
                            });
                            addAnimClass();
                        }
                    })
                    .to($buttonNavText, 1, {
                        autoAlpha: 1,
                        ease: Power1.easeInOut
                    }, "-=.3")
                    .fromTo($scrollMsg, 1, {
                        opacity: 0
                    }, {
                        delay: 2,
                        opacity: 1,
                        ease: Power2.easeInOut
                    });



                for (var i = .6, s = $textMain[0].children.length - 1; s >= 0; s--){
                    TweenMax.fromTo($textMain[0].children[s].children[0], 1, {
                        opacity: 0
                    }, {
                        delay: i,
                        opacity: 1,
                        ease: Power2.easeInOut
                    }),
                        TweenMax.fromTo($textMain[0].children[s].children[0], 1.2, {
                            x: .05 * window.innerHeight
                        }, {
                            delay: i,
                            x: 0,
                            ease: Power2.easeOut
                        }),
                        TweenMax.to($sectionTextLine[s], 1.2, {
                            scale: 1,
                            ease: Power1.easeInOut,
                            delay: i
                        }),
                        i += .5;
                }


                var scrollAnimate = new TimelineMax({
                    delay: 2.7,
                    repeat: -1,
                    repeatDelay: 1.5,
                });
                scrollAnimate.fromTo($overlayScrollNextline, 1.3, {
                    scaleX: 1
                },{
                    scaleX: 0,
                    ease: Power1.easeInOut
                }, 0),
                    scrollAnimate.to($overlayScrollNext, 1.3, {
                        x: .04 * -window.innerWidth,
                        ease: Power1.easeInOut
                    }, 0),
                    scrollAnimate.to($overlayScrollNextlineLast, 1.3, {
                        scaleX: 1,
                        ease: Power1.easeInOut
                    }, 0),
                    scrollAnimate.to($overlayScrollNextline, 1.3, {
                        scaleX: 1,
                        ease: Power1.easeInOut
                    }, 2.8),
                    scrollAnimate.to($overlayScrollNext, 1.3, {
                        x: 0,
                        ease: Power1.easeInOut
                    }, 2.8),
                    scrollAnimate.to($overlayScrollNextlineLast, 1.3, {
                        scaleX: 0,
                        ease: Power1.easeInOut
                    }, 2.8);




                var t = .15;

                TweenMax.fromTo($promoTextSub[0].children[0], 1.5, {
                    opacity: 1e-4
                }, {
                    delay: t + 1,
                    opacity: 1,
                    ease: Power2.easeInOut
                });
                for (var d = .7, s = 1, u = t + d; 7 > s; s++,
                    u += .115) {
                    var w = t + d + .1 + .09 + .01 * s
                        , m = 1.01 - .01 * s;
                    console.log($promoText[0]);
                    TweenMax.fromTo($promoText[0].children[s].children[0], m, {
                        opacity: 1e-4
                    }, {
                        delay: w,
                        opacity: 1,
                        ease: Power1.easeIn
                    });
                    var p = (-77 - 3 * s).toString() + "%";
                    TweenMax.fromTo($promoText[0].children[s].children[0], 1.2, {
                        x: p
                    }, {
                        delay: u,
                        x: "0%",
                        ease: Power2.easeOut
                    })
                }
                TweenMax.set([$promoText[0].children[1], $promoText[0].children[2], $promoText[0].children[3], $promoText[0].children[4], $promoText[0].children[5], $promoText[0].children[6]], {
                    delay: t + d + 1.89,
                    display: "none"
                }),
                    TweenMax.set($promoText[0].children[0], {
                        delay: t + d + 1.89,
                        opacity: 1
                    });
            },



            backgroundPromo: function () {

                var mainCanvas = document.getElementById('canvas-main');
                this.backgroundRenderer = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0x1099bb, view: mainCanvas});
                var container = new PIXI.Container();
                var containerM = new PIXI.Container();
                var containerM2 = new PIXI.Container();
                var containerM3 = new PIXI.Container();
                this.backgroundRenderer.stage.addChild(container);


                var texture = PIXI.Texture.fromImage('/images/img2.jpg');

                var background = new PIXI.Sprite(texture);
                background.anchor.x = .5;
                background.anchor.y = .5;

                this.backgroundOLMask.container = PIXI.Sprite.fromImage("/images/mask1.jpg");

                var backgroundMask = new PIXI.Sprite(texture);
                backgroundMask.anchor.x = .5;
                backgroundMask.anchor.y = .5;
                backgroundMask.mask = this.backgroundOLMask.container;
                containerM.addChild(this.backgroundOLMask.container, backgroundMask);


                this.backgroundOLMask2.container = new PIXI.Graphics();
                this.backgroundOLMask2.container.lineStyle(0);

                var backgroundMask2 = new PIXI.Sprite(texture);
                backgroundMask2.anchor.x = .5;
                backgroundMask2.anchor.y = .5;
                backgroundMask2.mask = this.backgroundOLMask2.container;
                containerM2.addChild(this.backgroundOLMask2.container, backgroundMask2);

                this.backgroundOLMask3.container = new PIXI.Graphics();
                this.backgroundOLMask3.container.lineStyle(0);

                var backgroundMask3 = new PIXI.Sprite(texture);
                backgroundMask3.anchor.x = .5;
                backgroundMask3.anchor.y = .5;
                backgroundMask3.mask = this.backgroundOLMask3.container;
                containerM3.addChild(this.backgroundOLMask3.container, backgroundMask3);



                var bgContainer = new PIXI.Container();
                bgContainer.addChild(background);
                container.addChild(bgContainer, containerM, containerM2, containerM3);

                containerM.visible = false;

                TweenMax.ticker.addEventListener("tick", this.backgroundRender, this)

            },

            backgroundRender: function() {
                this.backgroundRenderer.render();
            },

            spritesSizes: function() {
                var e = !1;
                console.log(this.backgroundRenderer.stage);
                var i = this.backgroundRenderer.stage.children[0].children[0].children[0]._texture;
                if (i.baseTexture.hasLoaded) {


                    var imageSprite = this.backgroundRenderer.stage.children[0].children[0].children[0];

                    var imageRatio = imageSprite.width / imageSprite.height;
                    var containerRatio = window.innerWidth / window.innerHeight;

                    if (containerRatio > imageRatio) {
                        imageSprite.height = imageSprite.height / (imageSprite.width / window.innerWidth);
                        imageSprite.width = window.innerWidth;

                        imageSprite.position.x = 0;
                        imageSprite.position.y = (window.innerHeight - imageSprite.height) / 2;
                    } else {
                        imageSprite.width = imageSprite.width / (imageSprite.height / window.innerHeight);
                        imageSprite.height = window.innerHeight;
                        imageSprite.position.y = 0;
                        imageSprite.position.x = (window.innerWidth - imageSprite.width) / 2;
                    }

                    this.backgroundRenderer.stage.children[0].children[1].visible = true

                } else
                    e = !0


                for (var k = 1; k < this.backgroundRenderer.stage.children[0].children.length; k++){
                    var i = this.backgroundRenderer.stage.children[0].children[k].children[1]._texture;
                    if (i.baseTexture.hasLoaded) {


                        var imageSprite = this.backgroundRenderer.stage.children[0].children[k].children[1];

                        var imageRatio = imageSprite.width / imageSprite.height;
                        var containerRatio = window.innerWidth / window.innerHeight;

                        if (containerRatio > imageRatio) {
                            imageSprite.height = imageSprite.height / (imageSprite.width / window.innerWidth);
                            imageSprite.width = window.innerWidth;

                            imageSprite.position.x = 0;
                            imageSprite.position.y = (window.innerHeight - imageSprite.height) / 2;
                        } else {
                            imageSprite.width = imageSprite.width / (imageSprite.height / window.innerHeight);
                            imageSprite.height = window.innerHeight;
                            imageSprite.position.y = 0;
                            imageSprite.position.x = (window.innerWidth - imageSprite.width) / 2;
                        }

                        this.backgroundRenderer.stage.children[0].children[k].visible = true;
                        this.backgroundOLMask.container.width = window.innerWidth /2;
                        this.backgroundOLMask.container.height = window.innerHeight /2;
                        this.backgroundOLMask.container.position.x =  -window.innerWidth /4;
                        this.backgroundOLMask2.container.clear();
                        this.backgroundOLMask2.container.beginFill(0x8bc5ff, 0.4);
                        this.backgroundOLMask2.container.drawRect(window.innerWidth/4, -window.innerHeight/2, window.innerWidth/4, window.innerHeight/2);
                        this.backgroundOLMask2.container.endFill();

                        this.backgroundOLMask3.container.clear();
                        this.backgroundOLMask3.container.beginFill(0x8bc5ff, 0.4);
                        this.backgroundOLMask3.container.drawCircle(0, -window.innerHeight/4, window.innerHeight/7);
                        this.backgroundOLMask3.container.endFill();

                        if(this.backgroundInitialLoad){
                            this.backgroundRenderer.stage.children[0].children[1].children[1].scale.x += .2;
                            this.backgroundRenderer.stage.children[0].children[1].children[1].scale.y += .2;
                            this.backgroundRenderer.stage.children[0].children[2].children[1].position.x += window.innerWidth*0.05;
                            this.backgroundRenderer.stage.children[0].children[3].children[1].scale.x += .2;
                            this.backgroundRenderer.stage.children[0].children[3].children[1].scale.y += .2;
                        }

                    } else
                        e = !0
                }

                e ? setTimeout(this.spritesSizes.bind(this), 50) : (this.generateOLmask(),
                    this.backgroundInitialLoad || (this.backgroundInitialLoad = !0));

            },


            generateOLmask: function() {

                this.inAnimationPlayed || (this.inAnimationPlayed = !0,
                    this.playInAnimation())
            },

            resize: function() {
                if (!this.isAnimating) {
                    this.backgroundRenderer.renderer.resize(window.innerWidth, window.innerHeight);
                    var e = Math.round(window.innerWidth / 2, 4)
                        , t = Math.round(window.innerHeight / 2, 4);
                    this.backgroundRenderer.stage.position.x = e,
                        this.backgroundRenderer.stage.position.y = t,
                        this.spritesSizes();
                    //this.firstLoad ? this.firstLoad = !1 : this.checkTextSizes()

                }

            },


            init: function()
            {

                this.background = null,
                this.backgroundRenderer = null,
                this.backgroundInitialLoad = false,
                this.backgroundOLMask = {
                    container: null,
                    texture: null
                },
                this.backgroundOLMask2 = {
                    container: null,
                    texture: null
                },
                this.backgroundOLMask3 = {
                    container: null,
                    texture: null
                },
                this.backgroundOLFirst = {
                    container: null,
                    texture: null
                };
                this.currentScreen = 0,
                this.inAnimationPlayed = !1,
                this.isAnimating = !1,
                this.firstLoad = !0,
                this.backgroundInitialLoad = false;
                var scripts = this;

                scripts.backgroundPromo();
                scripts.backgroundRender();
                scripts.resize();
                $(window).on('resize', function () {
                    scripts.resize();
                });
                return scripts;
            }
        }


};

    var UTIL = {
        fire : function(func,funcname, args){
            var namespace = scripts.Granit;  // indicate your obj literal namespace here

            funcname = (funcname === undefined) ? 'init' : funcname;
            if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
                namespace[func][funcname](args);
            }
        },

        loadEvents : function(){

            $.each($('.page').data('page').split(/\s+/),function(i,classnm){
                UTIL.fire(classnm);
            });

        }
    };

    //scripts.Granit.promo.init();
    $(document).ready(UTIL.loadEvents);
})();