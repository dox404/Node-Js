const fs = require('fs');
fs.writeFileSync('text.txt','this is written by node js');

fs.appendFileSync('text.txt','this is appended')    //challange 1