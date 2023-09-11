webpack loader -- webpack only understand the json and the javscript files. loader allows webpack to process other types of files and convert them into valid modules for your application

There are many types of loader - 
example babel-loader, sass-loader, coffee-loader etc

Dev server and hot module replacement:
Steps to create dev server and react app:
1 - node init -y
2 - create src/app.js
3 - install validator, webpack, webpack-cli, webpack-dev-server
In the app.js
```import validator from "validator";

console.log(validator.isEmail('hh@gmail.com'))```
4 - run the npm webpack - It will ceate a dist folder with main.js file(bundled file)
5 create a index.html file in the dist folder . dist/index.html
6 - create weback.config.js file



