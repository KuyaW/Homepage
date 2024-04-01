function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}
// exec('echo %time%');

function start(description){
    exec('git add .');
    exec(`git commit -m "${description}"`);
    exec('git push -u origin main');
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
 readline.question('Add description.', name => {
    console.log(`Added the description.`);
    readline.close();
    start(name); 
  });






// git add .
// git commit -m "Just updated the time."
// git push -u origin main