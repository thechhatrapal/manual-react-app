## webpack loader 
### webpack only understand the json and the javscript files. loader allows webpack to process other types of files and convert them into valid modules for your application

### There are many types of loader - 
### example babel-loader, sass-loader, coffee-loader etc

## Dev server and hot module replacement:
## Steps to create dev server and react app:
### -- node init -y
### -- create src/app.js
### -- install validator webpack webpack-cli, webpack-dev-server
### In the app.js
### import validator from "validator"
### console.log(validator.isEmail('hh@gmail.com'))```
### -- run the npm webpack - It will ceate a dist folder with main.js file(bundled file)
### --create a index.html file in the dist folder . dist/index.html
### --create weback.config.js file

## what is webpack?
### Webpack in react is a JavaScript module bundler that is commonly used with React to bundle and manage dependencies. It takes all of the individual JavaScript files and other assets in a project, such as images and CSS, and combines them into a single bundle that can be loaded by the browser.To understand why you should use webpack, let's recap how we used JavaScript on the web before bundlers were a thing.

## why webpack?
### There are two ways to run JavaScript in a browser. First, include a script for each functionality; this solution is hard to scale because loading too many scripts can cause a network bottleneck. The second option is to use a big .js file containing all your project code, but this leads to problems in scope, size, readability and maintainability.

### Webpack runs on Node.js, a JavaScript runtime that can be used in computers and servers outside a browser environment.

### read - **https://webpack.js.org/concepts/why-webpack/**

## Hot module replacement
### Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload.

