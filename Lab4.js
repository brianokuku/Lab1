/**Part 1**/

//The master process file

const Rx = require('@reactivex/rxjs');
const subject = new Rx.Subject(); 
const url = require('url');
const {fork} = require('child_process');

function childProcess(e) { 
    const myUrl = url.parse((e.req.url), true);
    const forked = fork('child.js');
    
    forked.on('message', (msg) => {
        e.res.writeHead(200, { 'Content-Type': 'text/plain' }); 
	    e.res.end(msg); 
    });
    
    forked.send(myUrl.query.url);
} 

subject.subscribe(childProcess) 

const http = require('http'); 

http.createServer((req, res) => { 
	subject.next({ req: req, res: res }); 
}).listen(4000, ()=>console.log('4000'));


//The child Process file called child.js

const fs = require('fs');

const streamToString = function(stream , callback) {
    const str = '';
    stream.on('data', function(chunk) {
      str += chunk;
    });
    stream.on('end', function() {
      callback(str);
    });
  }

process.on('message', (msg) => {
    
    const readStream = fs.createReadStream(msg);
    
    streamToString(readStream, function(myStr) {
        console.log(myStr);
        process.send(myStr);
    });

}); 



/**Part 2**/

//Method without observables

const os = require('os');
const cpuNo = os.cpus().length;
const theMemory = os.totalmem();

const checkSystem = function(cpuNo, theMemory) {
    console.log("Checking your system");

    if(theMemory<4300900352){
        console.log("This app needs at least 4GB of RAM"); 
    }

    if(cpuNo<2){
        console.log("Processor is not supported"); 
    }

    if((theMemory>4300900352)&&(cpuNo>2)){
        console.log("The system has successfully been checked"); 
    }

}

checkSystem(cpuNo, theMemory);



//Part 2 homework using method with Observables

const os = require('os');
const cpuNo = os.cpus().length;
const theMemory = os.totalmem();
const Rx = require('@reactivex/rxjs');

const checkSystem = function(cpuNo, theMemory) {
    console.log("Checking your system");

    if(theMemory<4300900352){
        console.log("This app needs at least 4GB of RAM"); 
        return false;
    }

    if(cpuNo<2){
        console.log("Processor is not supported"); 
        return false; 
    }

    if((theMemory>4300900352)&&(cpuNo>2)){
        console.log("The system has successfully been checked");
        return true; 
    }

}

var PowerfulEnoughAnswer = checkSystem(cpuNo, theMemory);

var thePromise = new Promise(function(resolve, reject) { 
	if (PowerfulEnoughAnswer) resolve('Pass'); 
	else reject(new Error('Fail')); 
});

Rx.Observable.fromPromise(thePromise).subscribe( (e) => console.log(e));