var fs = require("fs");

var handlerFunction = function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
  fs.readFile('file2.txt', handlerFunction2);
}

var handlerFunction2 = function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
   fs.readFile('file3.txt', handlerFunction3);
}

var handlerFunction3 = function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
}

fs.readFile('file1.txt', handlerFunction);
