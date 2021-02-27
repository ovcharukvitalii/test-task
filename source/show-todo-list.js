const http = require('http');

//Look what data we already have
http.get('http://localhost:9000/users', (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    console.log('chank');
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  res.on('end', () => {
    console.log(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});