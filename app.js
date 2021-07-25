// npm - comes with node 

//local dependency - use it only in this particukar project
//npm i <packageName>
    //npm i lodash

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores imp info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init - (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)



