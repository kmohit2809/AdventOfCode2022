// Code taken from Earl Duque - https://github.com/earlduque

const fileName = "AdventOfCode2022/Day7/input.txt";

const fs = require('fs');
var input = fs.readFileSync(fileName,'utf-8');

//part 1
var inputArr = input.split(/\r?\n/);

//console.log(inputArr);
var dirs ={'/':0};
var currentDir = [];
inputArr.forEach((x)=>{
 var command = x.split(' ');
 if(command[0]=='$'&&command[1]=='cd'){
    if(command[2]!='..'){
        currentDir.push(command[2]);
    }
    else{
        currentDir.pop();
    }
 }else if(command[0]=='$' && command[1]=='ls'){
    //do nothing
 }else if(command[0]=='dir'){
    dirs[currentDir.join('')+''+command[1]]=0;
 }else{
    var files = [];
    currentDir.forEach((y)=>{
        files.push(y);
        dirs[files.join('')]+=parseInt(command[0]);
    });
 }
});

var total=0;
for(var i in dirs){
    if(dirs[i]<=100000)
    total+=dirs[i];
}

// part 2
var need = 30000000-parseInt(70000000-parseInt((dirs['/'])));
console.log('need '+need);
var acceptedValues =[];
for (var j in dirs){
    if(dirs[j]>=need){
        acceptedValues.push(dirs[j]);
    }
}
acceptedValues.sort(function(a,b){
    return a-b;
});


console.log(total);
console.log('Accepted Value for cleanup: '+acceptedValues[0]);
