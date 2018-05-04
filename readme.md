This is a test project 

## Table of Contents
- [Installation] (#installation)
- [Structure] (#structure)
- [Road Map] (#roadmap)

## Installation
 Make sure that you have installed node and yarn or npm packages on you machine. `node -v`, `yarn -v`. Yarn and npm are equivalent tools and you can use whatever you like.
 Install dependent libraries running yarn (npm i) from the root and /client directories.
 Run the app in development mode `yarn dev` from the root project directory.


## Structure
 ```
    github-search/
     client/
      app/
       js/
        components/
         App/
          App.css
          App.jsx
          index.js
         Display/
          Display.css
          Display.jsx
          index.js
         Footer/
          Footer.css
          Footer.js
          index.js
         Header/
          Header.css
          Header.jsx
          index.js
         Search/
          Search.css
          Search.jsx
          index.js
        application.js
      dist/
       bundle.js
      node_modules/
      .babelrc
      .eslintrc.js
      .gitignore
      index.html
      package.json
      postcss.config.js
      webpack.config.js
     node_modules/
     .eslintignore
     .eslintrc.json
     package.json
     readme.md
     server.js
 ```
## Road Map
 * Extract client service for fetch backend data
 * Unit test implementation 
 * Error validation
 * PostCss media query settings 

