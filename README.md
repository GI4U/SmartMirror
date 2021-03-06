# SmartMirror
Smart Mirror application to make your every morning's look into the mirror cooler and more informative.

The application consists of multiple, highly dynamic components which are implemented with React.js. You can follow the development process in the [roadmap](https://github.com/GI4U/SmartMirror/projects/1).

## Installation
First you have to install all required dependencies. Go into the project's directory and run the following commands:

```shell
npm install           # Install all npm dependencies
npm install -g bower  # Install the npm module "bower" globally to...
bower install         # ...install the bower dependencies, too
```

Before you can start the application you have to run the `gulp` tasks. This will transform the JSX code into normal JavaScript code which is readable for the browser. This is very easy when you install the `gulp` module globally:

```shell
npm install -g gulp   # Install the npm module "gulp" globally to...
gulp                  # ...run the gulp tasks
```

Now you can start the Smart Mirror application by calling:

```shell
npm start             # This will start the application
```
