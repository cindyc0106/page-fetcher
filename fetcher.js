
const fs = require('fs');
const request = require('request');

const url = process.argv[2]
const filePath = process.argv[3]

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);

  });

});

