/**Part 1**/

const dns = require('dns');

dns.lookup('www.mum.edu', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});


/**Part 2 **/

const fs = require('fs');

const server = require('http').createServer((req, res)=>{

     var img = fs.readFileSync('./wow.jpg');
     res.writeHead(200, {'Content-Type': 'image/jpg' });
     res.end(img, 'binary');
}).listen(5555, ()=>console.log('listening to 5555'));

/** Part 3**/

class clock{
    constructor(){}

    tick(){
        const myClock = setInterval(function myOutput(){
            //This could also call some other event every one second
            console.log("Woohoo");
        }, 1000);

        return myClock;
    }
}

var theMessage = new clock();

theMessage.tick();

/**Part 4**/

//The Zipping of the files

var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var readable = fs.createReadStream(__dirname+'/source.txt');
var compressed = fs.createWriteStream(__dirname+'/dest.txt.gz');

readable.pipe(gzip).pipe(compressed);


//Unzipping a zipped file of type gz

const unzip = require('unzip');
const fs = require('fs');  
 
fs.createReadStream('./dest.txt.gz').pipe(unzip.Extract({ path: './' }));