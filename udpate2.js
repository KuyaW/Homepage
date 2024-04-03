const update = require('./time');
const exec = require('./exec');



async function wait(){
    let waitforMe = await update.time();
    return waitforMe;
}

wait().then((resolved)=>{
    console.log(resolved, 'di ko alam');
    exec.exec("node automate.js")
});








