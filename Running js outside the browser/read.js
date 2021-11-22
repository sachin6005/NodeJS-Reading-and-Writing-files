const fs = require("fs");

const callback = function(err, buff) {
      console.log(buff.toString());
};
fs.readFile('/home/sachin/Documents/CGCS phase2/NodeJS/NodeJS-Reading-and-Writing-files/Running js outside the browser/read.txt', callback);