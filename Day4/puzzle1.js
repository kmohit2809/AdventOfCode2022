const fs = require('fs');
fs.readFile("AdventOfCode2022/Day4/input.txt",'utf-8',(err, data) => {

    if (err) throw err;
    var arr = data.split(/\r?\n/);
    var i=0;
    var count=0;
    // Parse the array elements
    while(i<arr.length){
        var input1 = arr[i].split(',')[0].split('-').map((x)=>parseInt(x));
        var input2 = arr[i].split(',')[1].split('-').map((x)=>parseInt(x));
        console.log('Input first '+input1);
        console.log('Input second '+input2);
        if((input1[0]>=input2[0]&&input1[1]<=input2[1])||((input2[0]>=input1[0])&&input2[1]<=input1[1])){
            count++;
        }
        i++;
    }
    console.log('Count: '+count);

});
