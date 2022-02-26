const sayHi = (name) => {console.log(`Hello there ${name}`)};

module.exports = {sayHi};

//Alternative way of exporting public files 
module.exports.newItems = [1,2,3]
