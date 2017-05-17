Организация структуры проекта
=========================================

Структура проекта использует несколько технологий:

+ для организации кода CSS используется SMACSS(Scalable and Modular Architecture for CSS) от Jonathan Snook. <http://smacss.com>
  возможно использование сторонних фреймворков (Bootstrap, Foundation).
  Используется препроцессор Stylus. Структура файлов *styl по принципу SMACSS

+ используется библиотека JQuery, для склеивания модулей отдельных скриптов используется 'gulp-rigger'.

+ для html используется Jade HTML template <http://jade-lang.com/> Структура jade html template

    * templates/                    - templates Jade HTML
        * _modules/                   - used blocks (используемые блоки)
        * _helpers/                  - для организации Jade
            * mixins.jade           - mixins (примеси)
            * variables.jade        - variables (переменные)
        * _layouts/                  - шаблоны для страниц
            * default.jade          - template layout for page (общий шаблон страницы)
            * variables.jade        - variables (переменные)
        * pages/                    - generation pages (генерирумые страницы)
        * _partials/                 - отдельные части
            * footer.jade          - шаблон footer
            * head.jade            - шаблон <head>
            * header.jade          - шаблон header
            * scripts.jade         - шаблон подключения скриптов

# Общая сборка проекта gulp
## Структура
+ src/ - каталог рабочих файлов
	* fonts/ - шрифты
	* favicons/ - файлы для фавиконов
	* images/ — картинки
    * sprite_png/ - спрайты png
	* sprite_svg/ - спрайты svg
	* icons_svg/ - иконки svg
	* scripts/ — скрипты
		* lib/ - отдельные скрипты
	    * partials/ - js модули
		* main.js - общий js файл
	* styles/ — стили (stylus, SMACSS)
	    * helpers/      - stylus переменные, примеси и функции
        * lib/          - отдельные файлы стилей
        * layout/       - элементы разметки страницы
        * modules/      - модули
        * _base.styl    - основные стили
        * _ie.styl      - стили для Ie
        * _other.styl   - другое
        * _states.styl  - модификаторы
        * print          - стили для вывода на печать
        * styles.styl    - согласно модели SMACSS все файлы собираются в общий файл styles
    * templates/
        * _modules/      - отдельные блоки html
        * _helpers/     - миксины, переменные Jade
        * _layouts/     - основной шаблон страницы (шаблоны)
        * pages/       - структура страницы
        * _partials/    - отдельные модули страницы
+ dist/ - каталог для сборки проекта
+ design/ - каталог  файлов макета

* особенность при применении css свойств - flex, необходимо отключить поддержку flex у библиотеки nib, возникает конфликт. (node_modules/nib/lib/nib/index.styl, flex.styl закомментировать)
Компиляция и сборка проекта осуществляется с помощью Gulp

## Компиляция
### Задачи Gulp
+ $gulp server - запустит локальный сервер
+ $gulp watch -  запустит отслеживания изменений
+ $ gulp build - выполнит production сборку проекта в каталог dist, перед этим нужно установить значение переменной NODE_ENV=production
    * 'clean' - очистка папок
    * 'favicons' - сборка фавиконов
    * 'fonts' - сборка файлов шрифтов
    * 'jade' - компиляция шаблонов jade
    * 'spritePng' - сбока спрайтов png
    * 'spriteSvg' - сборка спрайтов svg
    * 'iconsSvg'  - сборка иконок svg inline
    * 'images' - сборка картинок
    * 'svgImages' - сборка svg картинок
    * 'scripts' - сборка файлов скриптов общих и отдельных
    * 'styles' - сборка стилей (stylus)
    * 'minifyCss' - сжатие и оптимихация css
    * 'uglify' - минификация js файлов
    + 'mainBowerFilesCss' - копирование главных файлов .*css компонентов установленных bower в папку vendor/css
    + 'mainBowerFilesJs' - копирование главных файлов .*js компонентов установленных bower в папку vendor/js
    + 'mainBowerFilesFonts' - копирование шрифтов для компонентов установленных bower в папку vendor/fonts
    + 'mainBowerFilesImages' - копирование картинок для компонентов установленных bower в папку vendor/images
+ $ gulp devBuild - выполнит development сборку проекта в каталог dist
    * 'clean:dist' - очистка директории dist, кроме картинок и bower компонентов
    * 'favicons' - сборка фавиконов
    * 'fonts' - сборка файлов шрифтов
    * 'jade' - компиляция шаблонов jade
    * 'spritePng' - сбока спрайтов png
    * 'spriteSvg' - сборка спрайтов svg
    * 'iconsSvg'  - сборка иконок svg inline
    * 'images' - сборка картинок
    * 'svgImages' - сборка svg картинок
    * 'scripts' - сборка файлов скриптов общих и отдельных
    * 'styles' - сборка стилей (stylus)
    + 'mainBowerFilesCss' - копирование главных файлов .*css компонентов установленных bower в папку vendor/css
    + 'mainBowerFilesJs' - копирование главных файлов .*js компонентов установленных bower в папку vendor/js
    + 'mainBowerFilesFonts' - копирование шрифтов для компонентов установленных bower в папку vendor/fonts
    + 'mainBowerFilesImages' - копирование картинок для компонентов установленных bower в папку vendor/images
+ $ gulp - запуск development сборки, отслеживание изменений и локального сервера
+ $ gulp build - запуск production сборки
