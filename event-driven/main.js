var fs = require("fs");

var handlerFunction = function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
}

fs.readFile('test.txt', handlerFunction);

console.log("Program Ended changes");