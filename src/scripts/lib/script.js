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
			//canvasNav	= document.getElementById('canvas-nav'), //for canvas in navigation page
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
	// if(canvasNav) {
	// 	var contextNav = canvasNav.getContext('2d');
	// 	window.addEventListener('resize', function() {
	// 		resizeCanvas(contextNav);
	// 		drawImageProp(contextNav, backgroundCanvas);
	// 	}, true);
	// 	resizeCanvas(contextNav);
	// 	backgroundCanvas.src = "../images/img2.jpg";
	// 	backgroundCanvas.addEventListener('load', function() {
	// 		drawImageProp(contextNav, backgroundCanvas);
	// 	}, false);
	// }
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
                this.backgroundRenderer = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0xffffff, view: mainCanvas});
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
        },

        nav : {
            playInAnimation: function() {
                var	$grid 						= document.querySelectorAll('.grid span'),
                    $nav 						= document.querySelectorAll('.section_home .nav'),
                    $more                       = document.querySelectorAll('.more-info'),
                    $items                       = document.querySelectorAll(".nav__item");

                this.inAnimation = new TimelineMax({
                    delay: 0,
                }),

               this.inAnimation
                   .set($nav, {
                       visibility: "inherit"
                   })
                   .set($nav[0].children[1], {
                       visibility: "inherit"
                   }).to($grid, 1.3, {
                   scale: 1,
                   backgroundColor: 'rgba(185, 185, 185, 0.25)',
                   ease: Power1.easeInOut
               });
                for (var i = 0, s = 1.2 , r = 0; i < $nav[0].children[1].children.length; i++, r+=.05){
                    this.inAnimation.fromTo($nav[0].children[1].children[i].children[2].children[0], 1.3, {
                        x: "-20%"
                    }, {
                        x: "0%",
                        force3D: !0,
                        ease: Power2.easeOut,
                        clearProps: "all"
                    }, s + r),
                        this.inAnimation.fromTo($nav[0].children[1].children[i].children[2].children[0], 1.3, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            ease: Power2.easeInOut
                        }, s + r - .1)
                }
                this.inAnimation.fromTo($more, 1.3, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power2.easeInOut
                }, "-=1.5");

                TweenMax.set(this.projectsBgRenderer.stage.children[0].scale, {
                    delay: 1,
                    x: 1.1,
                    y: 1.1
                });

                TweenMax.to(this.projectsBgRenderer.stage.children[0], 1, {
                    delay: 1,
                    alpha: 1,
                    ease: Power2.easeInOut
                });
                TweenMax.to(this.projectsBgRenderer.stage.children[0].scale, 1.8, {
                    delay: 1,
                    x: 1,
                    y: 1,
                    ease: Power2.easeOut
                });

                TweenMax.delayedCall(1, function() {
                    $(".nav__item").on("mouseenter mouseleave", this.projectHover.bind(this))
                }, null, this);

            },
            createProjectsBG: function() {
                var projectsCanvas = document.getElementById('canvas-nav');
                this.projectsBgRenderer = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0xffffff, view: projectsCanvas});
                this.projectsBgRenderer.stage = new PIXI.Container;
                var initialImage = new PIXI.Container;
                initialImage.addChild(new PIXI.Sprite.fromImage('/images/img2.jpg')),
                this.projectsBgRenderer.stage.addChild(initialImage);
                var thing=this;
                $('.nav .nav__item').each(function () {
                    var innerImage = new PIXI.Container;
                    console.log($(this));
                    innerImage.addChild(new PIXI.Sprite.fromImage($(this).data('img'))),
                        thing.projectsBgRenderer.stage.addChild(innerImage)
                });
                for (var t = 0; t < this.projectsBgRenderer.stage.children.length; t++)
                    t > 0 && (this.projectsBgRenderer.stage.children[t].visible = !1,
                        this.projectsBgRenderer.stage.children[t].renderable = !1),
                        this.projectsBgRenderer.stage.children[t].alpha = 0,
                        this.projectsBgRenderer.stage.children[t].scale.x = 1.1,
                        this.projectsBgRenderer.stage.children[t].scale.y = 1.1,
                        this.projectsBgRenderer.stage.children[t].children[0].anchor.x = .5,
                        this.projectsBgRenderer.stage.children[t].children[0].anchor.y = .5;
                this.projectsRender()
            },
            projectsRender: function() {
                this.projectsBgRenderer.render()
            },
            resize: function() {
                this.projectsBgRenderer.renderer.resize(window.innerWidth, window.innerHeight);
                var e = Math.round(window.innerWidth / 2, 4)
                    , t = Math.round(window.innerHeight / 2, 4);
                this.projectsBgRenderer.stage.position.x = e,
                    this.projectsBgRenderer.stage.position.y = t,
                    this.spritesSizes(),
                this.isAnimating || (0 === this.state ? (TweenMax.set(this.projectsBgRenderer.stage.children[0].position, {
                        x: .05 * -window.innerWidth
                    }),
                        TweenMax.set(this.news, {
                            x: .75 * window.innerWidth,
                            force3D: !0
                        })) : 2 === this.state && (TweenMax.set(this.grid, {
                        x: .75 * -window.innerWidth,
                        force3D: !0
                    })))
            },
            spritesSizes: function() {

                for (var e = !1, t = 0; t < this.projectsBgRenderer.stage.children.length; t++)
                    if (this.projectsBgRenderer.stage.children[t].children[0]._texture.baseTexture.hasLoaded) {

                        if (this.projectsBgInitialLoad || !this.projectsBgInitialLoad && "undefined" == typeof this.projectsBgRenderer.stage.children[t].initialLoad) {

                            "undefined" == typeof this.projectsBgRenderer.stage.children[t].initialLoad && (this.projectsBgRenderer.stage.children[t].initialLoad = !0);
                            var i = window.innerWidth
                                , s = Math.round(i * this.projectsBgRenderer.stage.children[t].children[0]._texture.height / this.projectsBgRenderer.stage.children[t].children[0]._texture.width, 4)
                                , n = 0;
                            0 === t ? window.innerHeight > s && (s = window.innerHeight,
                                    i = Math.round(s * this.projectsBgRenderer.stage.children[t].children[0]._texture.width / this.projectsBgRenderer.stage.children[t].children[0]._texture.height, 4)) : (1.1 * window.innerHeight > s && (s = 1.1 * window.innerHeight,
                                    i = Math.round(s * this.projectsBgRenderer.stage.children[t].children[0]._texture.width / this.projectsBgRenderer.stage.children[t].children[0]._texture.height, 4)),
                                    n = Math.round((s - window.innerHeight) / 2, 4)),
                                this.projectsBgRenderer.stage.children[t].children[0].width = i,
                                this.projectsBgRenderer.stage.children[t].children[0].height = s,
                                this.projectsBgRenderer.stage.children[t].children[0].position.y = n,
                            0 === t && this.inAnimationPlayed === !1 && 0 === this.state && (this.inAnimationPlayed = !0,
                                this.playInAnimation())
                        }
                    } else
                        e = !0;
                e ? setTimeout(this.spritesSizes.bind(this), 50) : this.projectsBgInitialLoad || (this.projectsBgInitialLoad = !0,
                    this.inAnimationPlayed === !1 && 1 === this.state && (this.inAnimationPlayed = !0,
                        this.playInAnimation()));

            },
            projectHover: function(e) {
                console.log(this.projectsBgRenderer.stage.children[parseInt(e.delegateTarget.dataset.bgElement)]);

                "mouseenter" === e.type ? (this.projectsBgRenderer.stage.children[parseInt(e.delegateTarget.dataset.bgElement)].renderable = !0,
                        this.projectsBgRenderer.stage.children[parseInt(e.delegateTarget.dataset.bgElement)].visible = !0,
                        TweenMax.to(this.projectsBgRenderer.stage.children[parseInt(e.delegateTarget.dataset.bgElement)].scale, 1, {
                            x: 1,
                            y: 1,
                            ease: Power2.easeOut,
                            overwrite: "all"
                        }),
                        TweenMax.to(this.projectsBgRenderer.stage.children[parseInt(e.delegateTarget.dataset.bgElement)], .7, {
                            alpha: 1,
                            ease: Power2.easeOut,
                            overwrite: "all"
                        }),
                        TweenMax.to(e.delegateTarget.children[2].children[0], .35, {
                            y: "-103%",
                            ease: Power3.easeOut,
                            overwrite: "all"
                        }),
                        TweenMax.to(e.delegateTarget.children[1].children[0], .45, {
                            delay: .15,
                            y: "0%",
                            ease: Power3.easeOut,
                            overwrite: "all"
                        }),
                        TweenMax.to(e.delegateTarget.children[0], .6, {
                            autoAlpha: 1,
                            ease: Power2.easeOut,
                            overwrite: "all"
                        }),
                        TweenMax.to(e.delegateTarget.children[3].children[0], .3, {
                            delay: 0,
                            opacity: 1,
                            ease: Power2.easeInOut,
                            overwrite: "all"
                        }),
                        TweenMax.to(e.delegateTarget.children[3].children[0], .5, {
                            delay: 0,
                            x: "0%",
                            force3D: !0,
                            ease: Power2.easeOut
                        }),
                        TweenMax.to(e.delegateTarget.children[3].children[1], .2, {
                            delay: .1,
                            opacity: 1,
                            ease: Power2.easeIn,
                            overwrite: "all"
                        }),
                        TweenMax.to(e.delegateTarget.children[3].children[1], .5, {
                            delay: .1,
                            x: "0%",
                            force3D: !0,
                            ease: Power2.easeOut
                        })) : (TweenMax.to(this.projectsBgRenderer.stage.children[parseInt(e.delegateTarget.dataset.bgElement)].scale, .5, {
                        x: 1.1,
                        y: 1.1,
                        ease: Power2.easeOut,
                        overwrite: "all",
                        onCompleteScope: this,
                        onCompleteParams: [parseInt(e.delegateTarget.dataset.bgElement)],
                        onComplete: function(e) {
                            this.projectsBgRenderer.stage.children[e].visible = !1,
                                this.projectsBgRenderer.stage.children[e].renderable = !1
                        }
                    }),
                        TweenMax.to(this.projectsBgRenderer.stage.children[parseInt(e.delegateTarget.dataset.bgElement)], .5, {
                            alpha: 0,
                            ease: Power2.easeOut,
                            overwrite: "all"
                        }),
                        TweenMax.to(e.delegateTarget.children[0], .6, {
                            autoAlpha: 0,
                            ease: Power2.easeOut,
                            clearProps: "all",
                            overwrite: "transform, opacity"
                        }),
                        TweenMax.to(e.delegateTarget.children[1].children[0], .35, {
                            y: "103%",
                            ease: Power3.easeOut,
                            clearProps: "all",
                            overwrite: "all"
                        }),
                        TweenMax.to(e.delegateTarget.children[2].children[0], .45, {
                            delay: .15,
                            y: "0%",
                            ease: Power3.easeOut,
                            clearProps: "all",
                            overwrite: "all"
                        }),
                        TweenMax.to(e.delegateTarget.children[3].children, .3, {
                            opacity: 1e-4,
                            ease: Power2.easeOut,
                            clearProps: "all",
                            overwrite: "all"
                        }))
            },
            init: function()
            {

               var scripts = this;

                this.el = null,
                    this.state = 0,
                    this.nav = null,
                    this.grid = null,
                    this.projectsBgRenderer = null,
                    this.projectsBgStage = null,
                    this.projectsBgInitialLoad = !1,
                    this.news = null,
                    this.inAnimation = null,
                    this.isAnimating = !0,
                    this.inAnimationPlayed = !1;


                scripts.createProjectsBG();
                scripts.resize();
                $(window).on('resize', function () {
                    scripts.resize();
                });
                return scripts;
            }
        },
        page: {
            playInAnimation: function () {
                TweenMax.fromTo(this.el[0], 1.5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power2.easeInOut
                }),
                TweenMax.fromTo(this.bg[0], 1.2, {
                    y: 0
                }, {
                    delay: .75,
                    y: .1 * -window.innerWidth,
                    force3D: !0,
                    ease: Power3.easeInOut
                });
                for (var n = 0, w = .15; 3 > n; n++, w += .1){
                    TweenMax.fromTo(this.infos[0].children[n].children[0].children[0], 1, {
                        scaleY: 0
                    }, {
                        delay: w,
                        scaleY: 1,
                        ease: Power4.easeInOut
                    }),
                        TweenMax.fromTo(this.infos[0].children[n].children[0].children[1], 1, {
                            scaleY: 0
                        }, {
                            delay: .08 + w,
                            scaleY: 1,
                            ease: Power4.easeInOut
                        }),
                        TweenMax.fromTo(this.infos[0].children[n].children[0].children[2], 1, {
                            scaleY: 0
                        }, {
                            delay: .2 + w,
                            scaleY: 1,
                            ease: Power4.easeInOut
                        });
                }

                for (var n = 0, a = .21; 3 > n; n++, a += .15){
                    TweenMax.fromTo(this.infos[0].children[n].children[1].children[0], 1.2, {
                        x: .015 * -window.innerWidth
                    }, {
                        delay: .1 + a,
                        x: 0,
                        force3D: !0,
                        ease: Power2.easeOut
                    }),
                        TweenMax.fromTo(this.infos[0].children[n].children[1].children[0], 1.2, {
                            opacity: 0
                        }, {
                            delay: a,
                            opacity: 1,
                            ease: Power2.easeInOut
                        }),
                        TweenMax.fromTo(this.infos[0].children[n].children[1].children[1], 1.4, {
                            x: .015 * -window.innerWidth
                        }, {
                            delay: .15 + a,
                            x: 0,
                            force3D: !0,
                            ease: Power2.easeOut
                        }),
                        TweenMax.fromTo(this.infos[0].children[n].children[1].children[1], 1.4, {
                            opacity: 0
                        }, {
                            delay: .05 + a,
                            opacity: 1,
                            ease: Power2.easeInOut
                        });
                }

                TweenMax.fromTo(this.type, 1.35, {
                    x: "100%"
                }, {
                    delay: .55,
                    x: "0%",
                    ease: Power2.easeInOut
            });
                TweenMax.fromTo(this.type[0].children[0], 1.35, {
                    x: "-100%"
                }, {
                    delay: .55,
                    x: "0%",
                    ease: Power2.easeInOut
                });
                for (var d = .7, s = 1, u = .15 + d; 7 > s; s++,
                    u += .115) {
                    var w = .15 + d + .1 + .09 + .01 * s
                        , m = 1.01 - .01 * s;
                    TweenMax.fromTo(this.promoText[0].children[s].children[0], m, {
                        opacity: 1e-4
                    }, {
                        delay: w,
                        opacity: 1,
                        ease: Power1.easeIn
                    });
                    var p = (-77 - 3 * s).toString() + "%";
                    TweenMax.fromTo(this.promoText[0].children[s].children[0], 1.2, {
                        x: p
                    }, {
                        delay: u,
                        x: "0%",
                        ease: Power2.easeOut
                    })
                }
                TweenMax.set([this.promoText[0].children[1], this.promoText[0].children[2], this.promoText[0].children[3], this.promoText[0].children[4], this.promoText[0].children[5], this.promoText[0].children[6]], {
                    delay: .15 + d + 1.89,
                    display: "none"
                }),
                    TweenMax.set(this.promoText[0].children[0], {
                        delay: .15 + d + 1.89,
                        opacity: 1,
                        visibility: "inherit"
                    }),
                    TweenMax.fromTo(this.scrollMsg, 1, {
                        opacity: 1e-4
                    }, {
                        delay: 1.15,
                        opacity: 1,
                        ease: Power2.easeInOut
                    }),
                    TweenMax.fromTo(this.scrollMsg[0].children[0], 1.5, {
                        scaleX: 0
                    }, {
                        delay: 1.65,
                        scaleX: 1,
                        ease: Power2.easeInOut
                    });
                var scMsg = this.scrollMsg;
                var waypoint = new Waypoint({
                    element: document.querySelectorAll('.inner__content')[0],
                    handler: function(direction) {
                        if(direction == 'down'){
                            TweenMax.fromTo(scMsg, 1, {
                                opacity: 1
                            }, {
                                opacity: 0,
                                ease: Power2.easeInOut
                            });
                        }else{
                            TweenMax.fromTo(scMsg, 1, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: Power2.easeInOut
                            });
                        }

                    },
                    offset: '90%',
                    context: document.querySelectorAll('.js-page')[0]
                });
                this.slideTimer();

            },
            slideTimer: function() {
                this.slideSwitch = !0,
                    this.sliderNext();
            },
            sliderNext: function(e) {
                if (this.slideSwitch !== !1) {
                    this.slideSwitch = !1;
                    var t = this.slideShown;
                    if ("prev" === e ? this.slideShown > 1 ? this.slideShown-- : this.slideShown = this.slidesNumber : this.slideShown < this.slidesNumber ? this.slideShown++ : this.slideShown = 1,
                        t > 0) {
                        this.sliderAllowNext = !1;
                        var i = 1;
                        TweenMax.to(this.sliderSvg[0].childNodes[0], 1, {
                            opacity: 0,
                            ease: Power2.easeOut
                        }),
                            TweenMax.fromTo([this.slides[t - 1].children[0], this.slides[t - 1].children[1]], i, {
                                opacity: 1
                            }, {
                                opacity: 0,
                                ease: Power2.easeInOut,
                                onCompleteScope: this,
                                onComplete: function() {
                                    TweenMax.set([this.slides[t - 1].children[0], this.slides[t - 1].children[0].children[0], this.slides[t - 1].children[0].children[0].children[0], this.slides[t - 1].children[1], this.slides[t - 1].children[1].children[1], this.slides[t - 1].children[1].children[0].children], {
                                        delay: i,
                                        clearProps: "transform, opacity"
                                    }),
                                        TweenMax.set(this.slides[t - 1], {
                                            delay: i,
                                            clearProps: "visibility"
                                        }),
                                        this.slideAnimateIn()
                                }
                            })
                    } else
                        this.slideAnimateIn()
                }
            },
            slideAnimateIn: function() {
                var e = .015 * -window.innerWidth
                        , t = .03;

                TweenMax.set(this.slides[this.slideShown - 1], {
                    visibility: "inherit"
                }),
                    TweenMax.to(this.slides[this.slideShown - 1].children[0], 1.35, {
                        x: "0%",
                        ease: Power4.easeInOut
                    }),
                    TweenMax.to(this.slides[this.slideShown - 1].children[0].children[0], 1.35, {
                        x: "0%",
                        ease: Power4.easeInOut
                    }),
                    TweenMax.fromTo(this.slides[this.slideShown - 1].children[0].children[0].children[0], 5, {
                        z: 150
                    }, {
                        z: 0,
                        ease: Power2.easeOut
                    }),
                    TweenMax.fromTo(this.slides[this.slideShown - 1].children[1].children[0].children[0], 1.2, {
                        scaleX: 0
                    }, {
                        delay: t,
                        scaleX: 1,
                        ease: Power4.easeInOut
                    }),
                    TweenMax.fromTo(this.slides[this.slideShown - 1].children[1].children[0].children[1], 1.2, {
                        scaleX: 0
                    }, {
                        delay: t + .08,
                        scaleX: 1,
                        ease: Power4.easeInOut
                    }),
                    TweenMax.fromTo(this.slides[this.slideShown - 1].children[1].children[0].children[2], 1.2, {
                        scaleX: 0
                    }, {
                        delay: t + .18,
                        scaleX: 1,
                        ease: Power4.easeInOut
                    }),
                    TweenMax.fromTo(this.slides[this.slideShown - 1].children[1].children[1], 1, {
                        x: e,
                        y: "-50%"
                    }, {
                        delay: t + .75,
                        x: 0,
                        y: "-50%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }),
                    TweenMax.fromTo(this.slides[this.slideShown - 1].children[1].children[1], 1, {
                        opacity: 0
                    }, {
                        delay: t + .65,
                        opacity: 1,
                        ease: Power2.easeInOut
                    }),
                    TweenMax.fromTo(this.sliderSvg[0].childNodes[0], 6, {
                        strokeDashoffset: 754,
                        opacity: 1
                    }, {
                        strokeDashoffset: 0,
                        ease: Linear.easeNone
                    }),
                    this.slideTimeout = setTimeout(this.slideTimer.bind(this), 6e3)
            },
            clickArrowSlider: function(e) {
                this.sliderAllowNext && (this.sliderAllowNext = !1,
                null !== this.slideTimeout && clearTimeout(this.slideTimeout),
                    this.slideSwitch = !0,
                    "top" === e.delegateTarget.className ? (TweenMax.fromTo(e.delegateTarget.children[0], .5, {
                            x: "0%",
                            opacity: 1
                        }, {
                            x: "20%",
                            opacity: 0,
                            ease: Power2.easeOut
                        }),
                            TweenMax.fromTo(e.delegateTarget.children[0], .5, {
                                x: "-20%",
                                opacity: 0
                            }, {
                                delay: .5,
                                x: "0%",
                                opacity: 1,
                                ease: Power2.easeOut
                            }),
                            this.sliderNext("next")) : (TweenMax.fromTo(e.delegateTarget.children[0], .5, {
                            x: "0%",
                            opacity: 1
                        }, {
                            x: "-20%",
                            opacity: 0,
                            ease: Power2.easeOut
                        }),
                            TweenMax.fromTo(e.delegateTarget.children[0], .5, {
                                x: "20%",
                                opacity: 0
                            }, {
                                delay: .5,
                                x: "0%",
                                opacity: 1,
                                ease: Power2.easeOut
                            }),
                            this.sliderNext("prev")))
            },
            init:function()
            {

                var scripts = this;
                this.el = document.querySelectorAll(".section_page"),
                this.bg = document.querySelectorAll(".header-image"),
                this.infos = document.querySelectorAll('.info'),
                this.type = document.querySelectorAll('.inner__type'),
                this.scrollMsg = document.querySelectorAll('.scroll-message'),
                this.promoText = document.querySelectorAll('.promo-text'),
                this.slider = document.querySelectorAll(".slider"),
                this.slides = document.querySelectorAll(".slider__item"),
                this.sliderArrows = document.querySelectorAll(".slider .arrows .next, .slider .arrows .prev"),
                this.sliderSvg = document.querySelectorAll(".slider .arrows svg"),
                this.slidesNumber = this.slides.length,
                this.slideShown = 0,
                this.slideScrollPointStart = 0,
                this.slideScrollPointEnd = 0,
                this.slideSwitch = !1,
                this.sliderAllowNext = !1,
                this.slideTimeout = null;


                scripts.playInAnimation();
                return scripts;
            }
        }


};

    var UTIL = {
        fire : function(func,funcname, args){
            var namespace = scripts.Granit;

            funcname = (funcname === undefined) ? 'init' : funcname;
            if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
                namespace[func][funcname](args);
            }
        },

        loadEvents : function(){
            if($('.page').data('page')){
                $.each($('.page').data('page').split(/\s+/),function(i,classnm){
                    UTIL.fire(classnm);
                });
            }


        }
    };

    //scripts.Granit.promo.init();
    $(document).ready(UTIL.loadEvents);
    $(document).ready(function() {
        $(".js-page").niceScroll({
            scrollspeed: 80,
            mousescrollstep: 30,
            horizrailenabled: false
        });
    });


    var $w=$(window);
    $.fn.visible = function(partial,hidden,direction,container){

        if (this.length < 1)
            return;

        // Set direction default to 'both'.
        direction = direction || 'both';

        var $t          = this.length > 1 ? this.eq(0) : this,
            isContained = typeof container !== 'undefined' && container !== null,
            $c				  = isContained ? $(container) : $w,
            wPosition        = isContained ? $c.position() : 0,
            t           = $t.get(0),
            vpWidth     = $c.outerWidth(),
            vpHeight    = $c.outerHeight(),
            clientSize  = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = isContained ?
                    rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
                    rec.top >= 0 && rec.top < vpHeight,
                bViz = isContained ?
                    rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
                    rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = isContained ?
                    rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
                    rec.left >= 0 && rec.left <  vpWidth,
                rViz = isContained ?
                    rec.right - wPosition.left > 0  && rec.right < vpWidth + wPosition.left  :
                    rec.right > 0 && rec.right <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz,
                vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
                hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop 				= isContained ? 0 : wPosition,
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $c.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                position          = $t.position(),
                _top            = position.top,
                _bottom         = _top + $t.height(),
                _left           = position.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };
})();


