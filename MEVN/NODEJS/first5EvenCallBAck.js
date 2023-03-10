const fs = require("fs");

/*
@param{Error} error
@param {buffer} fileData
@returns void
*/

function readFirstFiveCallback(error,fileData) {
    if (error) {
        console.error(error);
        return;
    }

    // Converting the zFileData which is buffer to String and splitting by line.
    const Lines = fileData.tostring().split("\n");
    //Slice the lines to the first five and log them.
    Lines.slice(0, 5).foreach((line) => {
        console.log(line);
    });
}

// function call with callback
fs.readFile("G:\nodejs\tenEvenNumbers", readFirstFiveCallback);
