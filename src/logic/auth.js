/*import axios from "axios";
import qs from "qs";

const ENDPOINT_PATH = "http://www.apibagual.codigobagual.cl";

export default {
  register(email_user, password_user) {
    const data = qs.stringify(
        { email_user: `${email_user}`,
        password_user: `${password_user}`
     });

    var config = {
        method: 'post',
        url: `${ENDPOINT_PATH}/users?register=true&suffix=user`,
        headers: {      
          'Access-Control-Allow-Origin': '*',     
          'apikey': 'M8kPAPvGZR2U9H35ZUxRW2S2xHD9J7', 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };

    axios(config)
    .then(function (response) {
      return(JSON.stringify(response.data));
    })
    .catch(function (error) {
      return(error);
    });
  }
    };*/

export default{
  register(){
var https = require('follow-redirects').https;
var fs = require('fs');

var qs = require('querystring');

var options = {
  'method': 'POST',
  'hostname': 'www.apibagual.codigobagual.cl',
  'path': '/users?register=true&suffix=user',
  'headers': {
    'Authorization': 'M8kPAPvGZR2U9H35ZUxRW2S2xHD9J7',
    'apikey': 'M8kPAPvGZR2U9H35ZUxRW2S2xHD9J7',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = qs.stringify({
  'email_user': 'usuario@correo.com',
  'password_user': '123456'
});

console.log(req.write(postData));

req.end();
}
}