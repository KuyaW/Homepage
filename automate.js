function exec(cmd, handler = function(error, stdout, stderr){console.log(stdout);if(error !== null){console.log(stderr)}})
{
    const childfork = require('child_process');
    return childfork.exec(cmd, handler);
}
// exec('echo %time%');

function start(){
    exec('git add .');
    exec('git commit -m "Just updated the time."');
    exec('git push -u origin main');
}

start(); 
// git add .
// git commit -m "Just updated the time."
// git push -u origin main