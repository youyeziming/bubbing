const querystring = require("querystring");

let json = querystring.parse("acr=123&bcd=123");
console.log(json);