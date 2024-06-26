
# What is the Folder Structure for React Project? #
The folder structure looks like this.

## assets Folder scss ##
As the name says, it contains assets of our project. It consists of images and styling files. Here we can store our global styles. We are centralizing the project so we can store the page-based or component-based styles over here. But we can even keep style according to the pages folder or component folder also. But that depends on developer comfortability.

## utils Folder js ##
Utils folder consists of some repeatedly used functions that are commonly used in the project. It should contain only common js functions & objects like dropdown options, regex condition, data formatting, etc.

## hooks Folder js ##
Extract common logic into custom hooks that can be shared across components. This allows you to reuse logic without introducing unnecessary complexity to individual components.

-------------------- 

## Layouts Folder ##
As the name says, it contains layouts available to the whole project like header, footer, etc. We can store the header, footer, or sidebar code here and call it.

## Components Folder ##
Components are the building blocks of any react project. This folder consists of a collection of UI components like buttons, modals, inputs, loader, etc., that can be used across various files in the project. Each component should consist of a test file to do a unit test as it will be widely used in the project.

## Pages Folder ##
The files in the pages folder indicate the route of the react application. Each file in this folder contains its route. A page can contain its sub folder. Each page has its state and is usually used to call an sync operation. It usually consists of various components grouped.

-----------------

## Middle ware Folder ##
This folder consists of middle ware that allows for side effects in the application. It is used when we are using reduce with it. Here we keep all our custom middle ware.

## Routes Folder ##
This folder consists of all routes of the application. It consists of private, protected, and all types of routes. Here we can even call our sub-route.

## Config Folder ##
This folder consists of a configuration file where we store environment variables in config.js. We will use this file to set up multi-environment configurations in your application.

## Services Folder ##
This folder will be added if we use redux in your project. Inside it, there are 3 folders named actions, reducers, and constant subfolders to manage states. The actions and reducers will be called in almost all the pages, so create actions, reducers & constants according to pages name.

- (https://www.xenonstack.com/insights/reactjs-project-structure)