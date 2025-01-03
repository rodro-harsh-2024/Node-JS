// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);

// // fs.appendFile('greeting.txt',`Hello ${user.username}`,()=>{
// //     console.log('File is created');
    
// // });

// console.log(fs);

// const notes = require('./notes')
// console.log('server page'); 

// var age = notes.age
// console.log(age);
// console.log(notes.addNumber(age,2));

var _ = require('lodash');
var data = ['a','b','c',1,'hello','a','a',1,2];

var filter =   _.uniq(data)
console.log(filter );

console.log(_.isString(3));

