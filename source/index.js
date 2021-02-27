const express = require('express');
const http = require('http');

const app = express();

const PORT = process.env.PORT || 5000;


const backUpsStorage = new Map();

  http.get('http://localhost:9000/users', (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  // The whole response has been received. Print out the result.
  res.on('end', () => {
    console.log(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

// getData4BackUp().then(res => {
//     console.log(res)
// });

app.post('http://localhost:5000/backups', (req, res) => {
    res.status(200).send('hello');
    res.end();
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err.message);
    }

    console.log(`Server has been started on port ${PORT}...`);
})