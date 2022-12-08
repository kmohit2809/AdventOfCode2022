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
     
     function move(from, to){
        var poped = data[from].pop();
        data[to].push(poped);
     }
     
     for(var i =0;i<inputArr.length;i++){
        var times = parseInt(inputArr[i].split(' ')[1]);
        var from = parseInt(inputArr[i].split(' ')[3]);
        var to = parseInt(inputArr[i].split(' ')[5]);
        while(times>0){
            move(from-1,to-1);
            times--;
        }
     }
     var finalValues = '';
     for(var k=0;k<data.length;k++){
        finalValues+=data[k].pop();
     }
     console.log(finalValues);
});
