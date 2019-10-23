//Preliminary code to send emails

var API_KEY = '8ca7016eaafab572d60ad3c332aeea4b-9c988ee3-bd8c4f32';
var DOMAIN = 'sandboxf1523386a7e54d4cbd9fa6793c767dd1.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

var data = {
  from: 'Ryan Smith',
  to: 'pwfcoding@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
  console.log(body);
});