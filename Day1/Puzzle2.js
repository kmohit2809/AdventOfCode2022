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
    var top1 = maxarr[len-1];
    var top2 = maxarr[len-2];
    var top3 = maxarr[len-3];
    console.log("Top1: "+top1);
    console.log("top2 "+top2);
    console.log("Top3:"+top3);
    var total = top1+top2+top3;
    console.log('Total of each: '+total);
  });
