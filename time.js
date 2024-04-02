const fs = require('fs');


function time(){
    // Specify the file name and content
    const fileName = 'date.txt';
    let time = new Date();
    let fileContent = time.toLocaleString();


    // Create the file
    fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
        console.error('Error creating the file:', err);
    } else {
        console.log('File created successfully!');
    }
    });
}


module.exports = {time}
