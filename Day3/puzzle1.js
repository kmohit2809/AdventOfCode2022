const fs = require('fs');
fs.readFile("AdventOfCode2022/Day3/input.txt",'utf-8',(err, data) => {

    if (err) throw err;
    console.log(data);
    var arr = data.split(/\r?\n/);
    console.log(arr);
    console.log(arr.length);
    let smallLet;
    let bigLet;
    let val=1;

    // Generate the Key value pair for letters
    const map = new Map();
    for(smallLet=97;smallLet<=122;smallLet++){
        map.set(String.fromCharCode(smallLet),val);
        val++;
    }
    for(bigLet=65;bigLet<=90;bigLet++){
        map.set(String.fromCharCode(bigLet),val);
        val++;
    }

    console.log(map.size);
    for (var [key, value] of map) {  
        console.log(key + ' = ' + value);  
     } 
    
    var sum=0;
    for(var i=0;i<arr.length;i++){
        var inputLength = arr[i].length;
        var half = inputLength/2;
        var duplicate ='';
        var firstHalf=arr[i].substring(0,half);
        var secondHalf=arr[i].substring(half,inputLength);
        console.log('First half '+firstHalf);
        console.log('second half '+secondHalf);
        for(var j=0; j<firstHalf.length;j++){
            if(secondHalf.indexOf(firstHalf[j])!=-1){
                duplicate=firstHalf[j];
                console.log('Duplicate: '+duplicate);
                sum=sum+map.get(duplicate);
                break;
            }
        }
    }
    console.log('Sum: '+sum);
});
