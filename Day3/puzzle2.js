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
    for(var i=0;i<arr.length;i+=3){
        var firstGroup = arr[i];
        var secondGroup = arr[i+1];
        var thirdGroup = arr[i+2];
        var duplicate ='';
        
        console.log('FirstGroup '+firstGroup);
        console.log('SecondGroup '+secondGroup);
        console.log('ThirdGroup ',thirdGroup);

        for(var j=0; j<firstGroup.length;j++){
            if(secondGroup.indexOf(firstGroup[j])!=-1){
                if(thirdGroup.indexOf(firstGroup[j])!=-1){
                duplicate=firstGroup[j];
                console.log('Duplicate: '+duplicate);
                sum=sum+map.get(duplicate);
                break;
                }
            }
        }
    }
    console.log('Sum: '+sum);
});
