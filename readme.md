# StaticAPI

* clone git repo
* git clone https://github.com/WillC822/dwaAPI2.git

## Install NPM dependencies

* npm i (will install all dependencies onto local machine)

## Accessing routes

* run server node src/server.js   ---  nodemon src/server.js
  * install nodemon to allow for continuous integration - npm i nodemon --save

## Using Postman set parameter to __POST localhost:3000/api/v1/urls__
* localhost:3000/api/v1/urls  - will access random urlstring

### Routes
* POST    localhost/api/v2/urls Creates a shortened URL
* GET     localhost/api/v2/urls Show all URLs
* GET     localhost/api/v2/urls/:id Show URL based on :id
* POST    localhost/api/v2/urls/:id Update URL based on :id
* DELETE  localhost/api/v2/urls/:id Delete URL based on :id

### Usage
* To enable debugging set DEBUG=true in the .env file - log will display via terminal window
* To disable debugging set DEBUG=false in the .env file - log will save to .debugLog.log
