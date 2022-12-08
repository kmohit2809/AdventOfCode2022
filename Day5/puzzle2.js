const fs = require('fs');
fs.readFile("AdventOfCode2022/Day5/input.txt",'utf-8',(err, instructions) => {

    if (err) throw err;

    var inputArr = instructions.split(/\r?\n/);

     var data =[
        ['Q','S','W','C','Z','V','F','T'],
        ['Q','R','B'],
        ['B','Z','T','Q','P','M','S'],
        ['D','V','F','R','Q','H'],
        ['J','G','L','D','B','S','T','P'],
        ['W','R','T','Z'],
        ['H','Q','M','N','S','F','R','J'],
        ['R','N','F','H','W'],
        ['J','Z','T','Q','P','R','B']
     ];

     var crate1 = JSON.parse(JSON.stringify(data));

     function moveMultiple(totalMove,from, to){
        var spliced = crate1[from].splice(crate1[from].length-totalMove,totalMove);
        crate1[to]=crate1[to].concat(spliced);
     }
     
     for(var i =0;i<inputArr.length;i++){
        var totalMove = parseInt(inputArr[i].split(' ')[1]);
        var from = parseInt(inputArr[i].split(' ')[3]);
        var to = parseInt(inputArr[i].split(' ')[5]);
        moveMultiple(totalMove,from-1,to-1);     
     }
     var finalValues = '';
     for(var k=0;k<crate1.length;k++){
        finalValues+=crate1[k].pop();
     }
     console.log(finalValues);
});
