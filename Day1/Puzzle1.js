const fs = require('fs');
fs.readFile("AdventOfCode2022/Day1/input1.txt",'utf-8',(err, data) => {
    if (err) throw err;
    var arr = data.split('\n').map((x)=>parseInt(x));
    console.log(arr);
    console.log(arr.length);
    var maxarr=[];
    var sum=0;
    for(var i=0; i<arr.length-1;i++){
        
        if(isNaN(arr[i])){
        maxarr.push(sum);
        sum=0;
            
        }else{
        sum=sum+arr[i];
        }
        
    }
    maxarr.push(arr[arr.length-1]);
    maxarr.sort((a,b)=>a-b);
    var len=maxarr.length;
    var max = maxarr[len-1];
    console.log("Max value: "+max);
  });
