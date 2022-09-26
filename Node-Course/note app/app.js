const chalk=require('chalk')
// const validator=require('validator')
const yargs=require('yargs')
const getNotes=require('./notes')
// const msg=getNotes()
// console.log(msg)
// console.log(validator.isEmail('example.com'))
// console.log(validator.isURL('https://google.com'))
// console.log(chalk.green('Success'))
// console.log(chalk.bold.green('Success'))
// console.log(chalk.green.bold('Success'))
// console.log(chalk.green.inverse.bold('Success'))
// console.log(process.argv[2])
// const command=process.argv[2]
// console.log(process.argv)
// customize yargs version
yargs.version('1.1.0')
//create add command command
yargs.command({
    command:'add',
    describe:'Add a noew note',
    builder:{
        title:{
            describe:'Note title',
            demandedOption:true
        }
    },
    handler: function(argv){
        console.log('Adding a new note',argv)
    }
})
//create remove command commandyargs
yargs.command({
    command:'Remove',
    describe:'Remove a note',
    handler:function(){
        console.log('Removing Notes')
    }
})
yargs.command({
    command:'List',
    describe:'Listing your notes',
    handler:function(){
        console.log('listing out all Notes')
    }
})
//create read commandyargs
yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function(){
        console.log('Reading a Note')
    }
})
console.log(yargs.argv)

// if(command==='add'){
//     console.log('Adding note!')

// }else if(command==='remove'){
//     console.log('Removing note!')
// }