# generator-angular-with-browserify [![Build Status](https://secure.travis-ci.org/hung-phan/generator-angular-with-browserify.png?branch=master)](https://travis-ci.org/hung-phan/generator-angular-with-browserify)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

To run this version of yeoman generator. First, make sure that you have already installed yeoman

```
$ npm install -g yo
```

To install generator-angular-with-require from npm, run:

```
$ npm install -g generator-angular-with-browserify
```

Finally, initiate the generator:

```
$ yo angular-with-browserify
```

Other dependencies

1. [Phantom.js] (http://phantomjs.org/) - You can change this in the config/karma.config.js by changing browsers tag

2. [Bower] (http://bower.io/)

3. [Grunt] (http://gruntjs.com/)

## Usage

The version of generator uses SASS Bootstrap as its main theme. If you want to use Compass framework, make sure that you
view their docs to know what to include [Compass](http://compass-style.org/reference/compass)

To run the serve, and start building your application
```
$ grunt serve
```
It will automatically open the webpage on your localhost:9000, or you will have to do it manuallly

To build files for production
```
$ grunt build
```

This also supports for subgenerator for controller, filter, service, and directive as well. Make sure you link them in your
main module

```
$ yo angular-with-browserify:controller "name" #replace the name with your module name
$ yo angular-with-browserify:service "name" #replace the name with your module name
$ yo angular-with-browserify:directive "name" #replace the name with your module name
$ yo angular-with-browserify:filter "name" #replace the name with your module name
```


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
