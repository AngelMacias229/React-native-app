# React-Native App
This is the app created with the React-Native framework, while also being connected to 2 APIs that allow it to Sign In, Login, and check out the badges stored in the other database API.

## Table of Contents
* [Prerequisites](#prerequisites)

* [Technologies used](#technologies-used)

* [Installing the project](#installing-the-project)
  * [API connection](#api-connection)
  * [npm install](npm-install)
  * [npm run android](npm-run-android)

* [Troubleshooting](#troubleshooting)
  * [Networking](#networking)
  * [Device](#device)

## Prerequisites
These are the prerequisites required to install and run the React-Native app. Without them it would be impossible to run the project as intended.

- [Node.js > 12](https://nodejs.org) 
  Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
  
- [npm](https://www.npmjs.com/)
  npm is the package manager for the Node JavaScript platform. It puts modules in place so that node can find them, and manages dependency conflicts intelligently. It is extremely configurable to support a wide variety of use cases. Most commonly, it is used to publish, discover, install, and develop node programs.
  
- [React-Native > 0.64.2](https://reactnative.dev/)
  React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android. The framework lets you create an application for various platforms by using the same codebase.
  
- [Visual Studio Code > 1.59.0](https://code.visualstudio.com/)
  Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running, and version control. It aims to provide just the tools a developer needs for a quick code-build-debug cycle and leaves more complex workflows to fuller featured IDEs, such as Visual Studio IDE.
  
- [cmder](https://cmder.net/)
  "Cmder is a software package created out of pure frustration over the absence of nice console emulators on Windows. It is based on amazing software, and spiced up with the Monokai color scheme and a custom prompt layout, looking sexy from the start."-cmder.net
  
- [JDK > 14.0.2.0](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
  The Java Development Kit (JDK) is one of three core technology packages used in Java programming, along with the JVM (Java Virtual Machine) and the JRE (Java Runtime Environment). The JDK allows developers to create Java programs that can be executed and run by the JVM and JRE.
  
- [Android Studio and Android SDK](https://developer.android.com/studio)
  Android Studio provides a unified environment where you can build apps for Android phones, tablets, Android Wear, Android TV, and Android Auto. Structured code modules allow you to divide your project into units of functionality that you can independently build, test, and debug.

## Technologies used
#### `Django API, Version 3.2.4`
With these technology, the API is used for the user who log into the application and it allows us to give information to the users, create, modify or delete them.
Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. Django helps developers avoid many common security mistakes by providing a framework that has been engineered to "do the right things" to protect the website automatically.

#### `MongoDB Cluster, Version 3.11.4`
Mongo is mobile platform that lets its users create a free cluster, and host a data base to connect with a project or to upload the user's own data.
MongoDB is an object-oriented, simple, dynamic, and scalable NoSQL database. It is based on the NoSQL document store model. The data objects are stored as separate documents inside a collection instead of storing the data into the columns and rows of a traditional relational database.

#### `Flask, Version 2.0.1`
This python framework lets us connect to the MongoDB with the usage of the API, which is used for the badges in this app
Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.

#### `babel-eslint, Version ^10.1.0`
Babel-eslint is a parser that allows ESLint to run on source code that is transformed by Babel and it is installed in the package.json of the project.

## Installing the project
To install and run the project, it is necessary to have downloaded the project that is located in the repository of GitHub and follow the next steps. 

### API connection
To connect the APIs developed with Django and Flask, it is necessary to go to `src/libs/sessions.js` and replace the 3 links in the file with your own Django project link. Then go `src/libs/url.js` and change the link there with the your flask's API link. 

### npm install
After putting the code `"babel-eslint": "^10.1.0",` in the line 19 of the file package.json, the next thing to do is to use the cmder to open the folder where the app is located and use the command `npm install` to install the necessary packages and files to run the application correctly.

### npm run android
After the installation is completed, is time to finally run the command `npm run android`, which will open the node.js to connect the React-Native through Metro, then it will open the Android Studio emulator and install the apk of the project into it and run the app.

## Troubleshooting

### Networking
A problem that has ocurred during the development of the app, is an error with the Metro and Node.js connection with the React-Native, causing it to fail the app immedeatly. This seems to occur due to the default port 8081 is being used by something else, and although there are some solutions to free said port, the best way to run the app is through another port using the command `npm run android --port=8088`.

### Device
The problem mentioned before can be really annoying and not allow the project to run even when the used port is different and free. The other solution for this is the usage of another device, such a phone. This seemed to have worked out, because even when the project didn't initiate in the computer, it does run correctly in the android phone.
To do this is necessary to activate the debbug option in the phone and activate the app installation from external sources option.
