var fs = require("fs");
var prompt = require('prompt-sync')();
var data = prompt('Enter data to enter  ');

// Create a writable stream
var writer = fs.createWriteStream('test.txt');

// Write the data to stream with encoding to be utf8
writer.write(data,'UTF8');

// Mark the end of file
writer.end();

// Handle stream events --> finish, and error
writer.on('finish', function() {
   console.log("Write completed.");
});

writer.on('error', function(err) {
   console.error(err);
});