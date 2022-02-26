const os = require('os');
const user = os.userInfo();
console.log(user)

console.log(`the system uptime is ${os.uptime()} seconds`)

const myOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(myOs)

//Path module
const path = require('path')

//to create a new filePath 
const filePath = path.join('/content', 'subfolder', 'test.txt')

console.log(filePath)
const absolute = path.resolve(__dirname, 'new folder', 'test.txt')
console.log(absolute)

//fileSystem 
const { readFileSync, writeFileSync }  = require('fs')

//const first = fileSystem.readFileSync('./C:/xampp/htdocs/LearnJSNodeExpress/LearnNodeExpress/content/test.txt', 'utf8')

//console.log(first)

//readFileSync('./"C:/Users/Ralphses/Pictures/vlcsnap-2022-02-23-14h45m25s762.png')

//const { readFileSync, writeFileSync } = require('fs')
//Using synchrnized methods
const first = readFileSync('./content/test.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')

console.log(first, second);

writeFileSync('./content/test.txt', second, {flag: 'a'}) //This appends the value in second to the existing contents of the path provided

//Using Asynchronous 

const { readFile, writeFile } = require('fs')

readFile('./content/test.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(`this is ${err}`);
        return
    }
    const firstResult = result;
    readFile('./content/subfolder/second.txt', 'utf8', (e, r) => {
        if(e){return}
        const secondResult = r;
        
        writeFile('./content/result_t.txt', `Here is the result ${firstResult} and ${secondResult}`, (er, re) => {
            if(er) return
        })
    })
    
})