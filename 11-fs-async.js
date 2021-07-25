
const {readFile, writeFile} = require('fs')

//start with the task and offload the task and meanwhile other tasks starts for other users 
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return        
    }
    // console.log(result)
    const first = result   
    
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return        
        }
        // console.log(result)
        const second = result

        writeFile('./content/result-async.txt', 
        `Here is the result : ${first}, ${second}`, 
        (err, result)=>{
            if(err) {
                console.log(err)
                return
            }
            console.log('result of the task')
        }
        )
    })
})

console.log('starting the new task')