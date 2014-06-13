# generator-angular-with-browserify [![Build Status](https://secure.travis-ci.org/hung-phan/generator-angular-with-browserify.png?branch=master)](https://travis-ci.org/hung-phan/generator-angular-with-browserify)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

To run this version of yeoman generator. First, make sure that you have already installed yeoman

```bash
$ npm install -g yo
```

To install generator-angular-with-require from npm, run:

```bash
$ npm install -g generator-angular-with-browserify
```

Finally, initiate the generator:

```bash
$ yo angular-with-browserify
```

Other dependencies

1. [Phantom.js] (http://phantomjs.org/) - You can change this in the config/karma.config.js by changing browsers tag

2. [Bower] (http://bower.io/)

3. [Grunt] (http://gruntjs.com/)

4. Napa (npm -g install napa)

5. SASS (gem install sass)

5. Compass (gem install compass)

## Structure

__New structure__ is based on [ng-boilerplate] (https://github.com/ngbp/ngbp) but optimized with browserify.

```
application/
  |- app/
  |  |- bower_components/
  |  |  |- <third libraries>
  |  |- images/
  |  |  |- <image files>
  |  |- src/
  |  |  |- index.js # main file
  |  |  |- main.js # compiled file
  |  |  |- spec.js # compiled file
  |  |  |- <codeModule>/
  |  |  |  |- codeModule.js
  |  |  |  |- codeModule.spec.js
  |  |  |  |- codeModule.tpl.html
  |  |- style/
  |  |  |- _custom_mixins.scss
  |  |  |- style.scss
  |  |  |- <other css files> - just copy other css files into this folder and
  |  |  |- rerun `grunt serve` task to automatically concat css files
  |  |- 404.html
  |  |- favicon.ico
  |  |- index.html
  |  |- robots.txt
  |- config/
  |  |- e2e.config.js
  |  |- karma.config.js
  |- dist/
  |  |- <build>
  |- node_modules/
  |  |- <node module code>
  |- test/
  |  |- e2eSpecs
  |  |  |- page.e2espec.js
  |  |  |- <other e2e specs>
  |- bower.json
  |- Gruntfile.js
  |- browserify.config.js # configuration for browserify alias for your application
  |- package.json
```

Old structure for revision __v0.2.*__

```
application/
  |- app/
  |  |- bower_components/
  |  |  |- <third libraries>
  |  |- images/
  |  |  |- <image files>
  |  |- scripts/
  |  |  |- index.js # main file
  |  |  |- main.js # compiled file
  |  |  |- controllers/
  |  |  |  |- controllers.js
  |  |  |- services/
  |  |  |  |- services.js
  |  |  |- directives/
  |  |  |  |- directives.js
  |  |  |- filters/
  |  |  |  |- filters.js
  |  |- style/
  |  |  |- _custom_mixins.scss
  |  |  |- style.scss
  |  |  |- <other css files> - just copy other css files into this folder and
  |  |  |- rerun `grunt serve` task to automatically concat css files
  |  |- 404.html
  |  |- favicon.ico
  |  |- index.html
  |  |- robots.txt
  |- config/
  |  |- e2e.config.js
  |  |- karma.config.js
  |- dist/
  |  |- <build>
  |- node_modules/
  |  |- <node module code>
  |- test/
  |  |- e2eSpecs
  |  |  |- page.e2espec.js
  |  |  |- <other e2e specs>
  |  |- specs/
  |  |  |- <specs files>
  |  |- helpers/
  |  |  |- <helper file for specs>
  |  |- test-main.js
  |- bower.json
  |- Gruntfile.js
  |- package.json
```

## Browserify alias
Alias for grunt browserify task are declared in __browserify.config.js__ with the format of __path:alias__.

## Usage

Your main javascript file is placed in app/src/index.js. The main.js is generated from grunt browserify task - I recommend to
leave the app/src/main.js unchanged.

The version of generator uses SASS Bootstrap as its main theme. If you want to use Compass framework, make sure that you
view their docs to know what to include [Compass](http://compass-style.org/reference/compass)

To run the serve, and start building your application
```bash
$ grunt serve
```
It will automatically open the webpage on your localhost:9000, or you will have to do it manuallly

To run unit test:
```bash
$ grunt karma:unit # this requires the task `grunt browserify:spec` to be runned
```

To run e2e test. This requires selenium browser and chromedriver. Make sure you view [angular/protractor] (https://github.com/angular/protractor)
```bash
$ grunt shell:protractor
```

To build files for production
```bash
$ grunt build
```

This also supports for subgenerator for controller, filter, service, and directive as well. Make sure you link them in your
main module

```bash
$ yo angular-with-browserify:controller "name" #replace the name with your module name
$ yo angular-with-browserify:service "name" #replace the name with your module name
$ yo angular-with-browserify:directive "name" #replace the name with your module name
$ yo angular-with-browserify:filter "name" #replace the name with your module name
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
