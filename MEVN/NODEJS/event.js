var fs = require('fs'); //Import statement
// it imports the filestream from the node modules
// fs = filestream is an inbuilt module
//module:   
// collection of functionalities which are not user created but available from nodejs
var rs = fs.createReadStream('./demofile.txt');
// var is a shortform for variable used to store local values/temporary values
// reading the outside placed demotext file
rs.on('open',function() {
    console.log('The file is open');
});