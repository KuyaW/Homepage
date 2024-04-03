const fs = require('fs');


async function time(){
    // Specify the file name and content
    const fileName = 'date.txt';
    let time = new Date();
    let fileContent = time.toLocaleString();


    // Create the file
    fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
        console.error('Error creating the file:', err);
        return false;
    } else {
        console.log('File created successfully!');
        return true;
    }
    });
}

time()


module.exports = {time}
