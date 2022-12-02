const fs = require('fs');
fs.readFile("AdventOfCode2022/Day2/input.txt",'utf-8',(err, data) => {
  
  /*
  Definitions:
  A=Rock=1
  B=Paper=2
  C=Scissors=3
  X=lose
  Y=Draw
  Z=Win
  
  Scores:
  Loose: 0
  Draw: 3
  win: 6
  
*/
    if (err) throw err;
    console.log(data);
    var arr = data.split(/\r?\n/);
    console.log(arr);
    console.log(arr.length);
    var score=0;
    for(var i=0; i<arr.length;i++){
        var str = arr[i];
        var char1 = arr[i].charAt(0);
        if(char1=='A'){
            if(str=='A X'){
            score+= 3;
            }
            else if(str=='A Y'){
            score+= 4;
            }
            else if(str=='A Z'){
            score+= 8;
            }
        }
        else if(char1=='B')
            {
                if(str=='B X'){
                score+= 1;
                }else if(str=='B Y'){
                score+= 5;
                }else if(str=='B Z'){
                score+= 9;
                }
            }
        else if(char1=='C')
           {
             if(str=='C X')
             score+= 2;
             else if(str=='C Y')
             score+= 6;
             else if(str=='C Z')
             score+= 7;
           }
    }
    console.log('score = '+score);
});
