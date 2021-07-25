//OS module - built in  module

const os = require('os')

const user = os.userInfo()
console.log(user);

//methods that return the system uptime in seconds
console.log(`The system uptime  is  ${os.uptime()} seconds`)


const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOs);




