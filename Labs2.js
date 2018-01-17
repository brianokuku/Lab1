/**** Part 2 ****/

const tree = { 
    name : "home", 
    files : ["notes.txt","todo.txt"], 
    subFolders: [   
        { name : "payroll", 
          files : ["paper.pdf","funds.csv"], 
          subFolders: [] 
        }, 
        { name: "misc", 
          files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
          subFolders: [
            { name : "logs", 
              files : ["logs1","logs2","logs3","logs4"], 
              subFolders: [] 
          }] 
    }] 
}; 
const find=(name)=>(tree)=>{
    for(let file of tree.files){
        //console.log(file);
        if(file==name) return true;
    }
	
    for(let subFolder of tree.subFolders){
        if(find(name)(subFolder)) return true;
    }
	
    return false;
}

console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false

/**** Part 1 ****/

1. Why we sometimes use setImmediate instead of setTimeout:
	Set immediate will always be run before any timers when both calls are made from within the same I/O cycle. 
	SetImmediate queues immediately after the last I/O handler and so is faster than setTimeout.
	
2. The difference between process.nextTick and setImmediate
	nextTick callbacks, are always fired immediately after the current code is done executing and before going back to the event loop. 
	setImmediate callbacks are fired off the event loop. setImmediate is used if you want to queue the
	function behind whatever I/O event callbacks that are already in the event queue. 
	set process.nextTick is effectively used when you want you want to put the function at the head of the event queue so that it executes immediately 
	after the current function completes.
	
3. A few global modules in the Node environment include:

- path
- buffer
- crypto
- events
- readline
- timers
- util
- http
- domain
- fs
	
