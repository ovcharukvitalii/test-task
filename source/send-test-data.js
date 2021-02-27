const http = require('http');
const fs = require('fs');


// const express = require('express');
// const app = express(); 

function postData(data) {
  // An object of options to indicate where to post to
  const post_options = {
      host: '127.0.0.1',
      port: '9000',
      path: '/users/load',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      }
  };

  // Set up the request
  const post_req = http.request(post_options, (res) => {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(data);
  post_req.end();
  console.log('Data has been successfully posted');

}

// This is an async file read
fs.readFile('../test-json-data/test-data.json', 'utf-8', (err, data) => {
  if (err) {
    console.log("An error occurred trying to read in the file: " + err);
    process.exit(-2);
  }
  // Make sure there's data before we post it
  if (data) {
    console.log('Data has been successfully read');
    postData(data);
  }
  else {
    console.log("No data to post");
    process.exit(-1);
  }
});


//fileReader();
// Send some test data to the server
// app.post('http://localhost:9000/users',  (req, res) => {
//   console.log('here');
//   try {
//     const data = fileReader();
//     console.log(data);
//     res.send(data);

//     //res.status(201).json({ message: 'Test data has been created' });
//     res.end();
//   } catch (err) {
//     console.error('test-data post fails: ', err.message)
//   }
// });

