## What is this?
A code generator that serves unique codes via REST API.

* To see all the codes:
https://codegen12.herokuapp.com/api/codes
* To request a code, POST to:
https://codegen12.herokuapp.com/api/get

## How to Run Locally
* Create a keys_dev.js file in the config directory and put in your mongo connection string URI in mongoURI like:
```javascript
module.exports = {
    mongoURI: 'mongodb+srv://username:password@cluster0-h7ijx.mongodb.net/test?retryWrites=true&w=majority'
}
```
(Not an actual connection String)
* npm install
* npm start
* Send a post request to http://localhost:8080/api/get to generate a code.
* Go to http://localhost:8080/api/codes on your browser or postman to see all codes generated.