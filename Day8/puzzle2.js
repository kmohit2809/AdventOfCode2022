const fs = require('fs');
fs.readFile("AdventOfCode2022/Day8/input.txt",'utf-8',(err, data) => {
    if (err) throw err;
    
    var arr = data.split(/\r?\n/);

    var newArr =[];

    //2D array creation
    for(var i=0;i<arr.length;i++){
        newArr[i]= [];
    }
    //2D array initilization    
    for(var j=0;j<arr.length;j++){
        for(var k=0;k<arr[j].toString().length;k++){
            newArr[j][k]=parseInt(arr[j].toString().split('')[k]);
        }
        
    }

    var scenicScore = [];
    var len = newArr.length;
    //Logic for the puzzle.

    for(var row=1;row<len-1;row++){
        for(col=1;col<newArr[0].length-1;col++){
            var topCol = 0;
            var bottomCol =0;
            var leftRow = 0;
            var rightRow =0
            // From left to right
            for(var leftInd=col-1;leftInd>=0;leftInd--){
                if(newArr[row][col]>newArr[row][leftInd]){
                    leftRow++;
                }else if(newArr[row][col]<=newArr[row][leftInd]){
                    leftRow++;
                    break;
                }
            }
            for(var rightInd=col+1;rightInd<len;rightInd++){
                 // from right to left
                    if(newArr[row][col]>newArr[row][rightInd]){
                        rightRow++;
                    }else if(newArr[row][col]<=newArr[row][rightInd]){
                        rightRow++;
                        break;
                    }
            }
            
            for(var topInd=row-1;topInd>=0;topInd--){
                if(newArr[row][col]>newArr[topInd][col]){
                        topCol++;
                    }else if(newArr[row][col] <= newArr[topInd][col]){
                        topCol++;
                        break;
                    }
            }

            for(var botInd=row+1;botInd<len;botInd++){
                if(newArr[row][col]>newArr[botInd][col]){
                    bottomCol++;
                }else if(newArr[row][col]<=newArr[botInd][col]){
                    bottomCol++;
                    break;
                }
            }
           var score = parseInt(leftRow)*parseInt(rightRow)*parseInt(topCol)*parseInt(bottomCol);
           scenicScore.push(score);
        }
    }
    scenicScore.sort((a,b)=>a-b);
    console.log(scenicScore[scenicScore.length-1]);
  });
