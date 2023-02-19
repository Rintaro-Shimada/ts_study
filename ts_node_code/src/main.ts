import * as fs from 'fs';

fs.readFile('./files/test.txt', 'utf8', function(err, data) {
  console.log(data);
})

console.log("aaaa")