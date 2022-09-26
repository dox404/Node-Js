const yargs=require('yargs')


yargs.command({
            command: 'add',
            description:'to add note',
            handler: function(){
                console.log("adding notes")
            }
})
yargs.command({
    command: 'remove',
    description:'to remove a note',
    handler: function(){
        console.log("removing notes")
    }
})
yargs.command({
    command: 'read',
    description:'to reading the note',
    handler: function(){
        console.log("reading  notes")
    }
})
yargs.command({
    command: 'list',
    description:'to list note',
    handler: function(){
        console.log("listing notes")
    }
})
console.log(yargs.argv)