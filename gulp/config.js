"use strict";
/* Paths */

let path = {
        build: {
            build: 'build/',
            js: 'build/js/',
            css: 'build/css/'
        },
        dist: {
            dist: 'dist/',
            js: 'dist/js/',
            css: 'dist/css/',
            img: 'dist/images/',
            fonts: 'dist/fonts/',
            jsons: 'dist/jsons/',
            vendorJs: 'dist/vendor/js/',
            vendorCss: 'dist/vendor/css',
            vendorFonts: 'dist/vendor/fonts',
            vendorImages: 'dist/vendor/img'
        },
        src: {
            src: 'src/',
            srcPug: 'src/templates',
            pug: 'src/templates/**/*.pug',
            js: 'src/scripts/main.js',
            jsLib: 'src/scripts/lib/*.js',
            styles: 'src/styles/styles.styl',
            stylesLib:  'src/styles/lib/*.styl',
            img: 'src/images/*.{jpg,png,gif}',
            svgImg: 'src/images/*.svg',
            spritePng: 'src/sprite_png/*.*',
            spriteRetinaFilter: 'src/sprite_png/*@2x.png',
            spriteStyles: 'src/styles/',
            spriteSvg: 'src/sprite_svg/*.svg',
            iconsSvg: 'src/icons_svg/*.svg',
            fonts: 'src/fonts/*.*',
            jsons: 'src/jsons/*.*',
            favicons: 'src/favicons/*.*'
        },
        watch: {
					  pug: 'src/templates/**/*.pug',
            js: 'src/scripts/**/*.js',
            styles: 'src/styles/**/*.styl',
            img: 'src/images/*.{jpg,png,gif}',
            svgImg: 'src/images/*.svg',
            spritePng: 'src/sprite_png/*.*',
            spriteSvg:'src/sprite_svg/*.*',
            iconsSvg:'src/icons_svg/*.*'
        }
};

module.exports = {
    /* Tasks params */
    clean: {
        src: path.dist.dist,
        srcBuild: path.build.build
    },
    pug: {
        src: path.src.srcPug,
        dest: path.dist.dist,
        params: {
          pretty: '\t'
        }
    },
    css: {
        src: path.src.styles,
        srcLib: path.src.stylesLib,
        dest: path.dist.css,
        build: path.build.css
    },
    watch: {
			  srcPug: path.watch.pug,
        srcStyles: path.watch.styles,
        srcJs: path.watch.js,
        srcImg: path.watch.img,
        srcSvg: path.watch.svg,
        srcSpritePng: path.watch.spritePng,
        srcSpriteSvg: path.watch.spriteSvg,
        srcIconsSvg: path.watch.iconsSvg
    },
    favicons: {
        src: path.src.favicons,
        dest: path.dist.dist,
        build: path.build.build
    },
    fonts: {
        src: path.src.fonts,
        dest: path.dist.fonts,
        build: path.build.fonts
    },
    jsons: {
        src: path.src.jsons,
        dest: path.dist.jsons,
        build: path.build.jsons
    },
    scripts: {
        src: path.src.js,
        srcLib: path.src.jsLib,
        dest: path.dist.js,
        build: path.build.js
    },
    images: {
        src: path.src.img,
        dest: path.dist.img
    },
    svgImages: {
        src: path.src.svgImg,
        dest: path.dist.img,
        params: {
            js2svg: {
                pretty: true
            }
        }
    },
    mainBowerFiles: {
        destJs: path.dist.vendorJs,
        destCss: path.dist.vendorCss,
        destFonts: path.dist.vendorFonts,
        destImg: path.dist.vendorImages
    },
    spritePng: {
        src: path.src.spritePng,
        destImg: path.dist.img,
        destCss: path.src.spriteStyles,
        params: {
            imgPath: '../images/spritePng.png',
            imgName: 'spritePng.png',
            retinaSrcFilter: path.src.spriteRetinaFilter,
            retinaImgName: 'spritePng@2x.png',
            retinaImgPath: '../images/spritePng@2x.png',
            padding: 5,
            //algorithm: 'top-down',
            cssName: 'spritePng.styl',
            cssVarMap: function (sprite) {
                sprite.name = 'sprite__' + sprite.name;
            }
        }
    },
    spriteSvg: {
        src: path.src.spriteSvg,
        destImg: path.dist.img,
        destCss: path.src.spriteStyles,
        params: {
            mode: {
                css:{
                    dest: '.',
                    bust: false,
                    sprite: '../images/spriteSvg.svg',
                    layout: 'vertical',
                    prefix: '$',
                    dimensions: true,
                    render: {
                        styl: {
                            dest: 'spriteSvg.styl'
                        }
                    }

                }
            }
        }

    },
    iconsSvg: {
        src: path.src.iconsSvg,
        destImg: path.dist.img,
        params: {
            mode: {
                symbol: {
                    dest: '',
                    sprite: 'icons.svg'
                }
            }
        }
    }
};