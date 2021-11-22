const fs = require("fs");

const data = "New content is added to write file";
const callback = (err) => {
if (err) console.log(err);
console.log("successfully written the data to file");
};

 fs.writeFile('/home/sachin/Documents/CGCS phase2/NodeJS/NodeJS-Reading-and-Writing-files/Running js outside the browser/read.txt', data , callback);



 
// var fs = require("fs");

// var data = "New File Contents is added to written file";

// fs.writeFile('/home/sachin/Documents/CGCS phase2/NodeJS/NodeJS-Reading-and-Writing-files/Running js outside the browser/read.txt', data, (err) => {
//   if (err) console.log(err);
//   console.log("Successfully Written to File.");
// });