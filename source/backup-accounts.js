const http = require('http');

const backUps = new Map();

http.get('http://localhost:9000/users', (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  // The whole response has been received. Print out the result.
  res.on('end', () => {
    // fs.writeFile("../backup-data/" + new Date().getTime() + '.json', data, (err) => {
    //     if(err) {
    //         return console.log(err);
    //     }
    //     console.log("The file was saved!");
    // }); 
    // let tempObj = {
    //   id: new Date().getTime(),
    //   data 
    // }
    const id = new Date().getTime();
    backUps.set(id, data);
    console.log(backUps);
    return id;
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
