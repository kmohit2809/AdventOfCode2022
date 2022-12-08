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

    var visibleTrees = parseInt((newArr.length)*4)-4;
    var len = newArr.length;
    //Logic for the puzzle.

    for(var row=1;row<len-1;row++){
        for(col=1;col<newArr[0].length-1;col++){
            var topCol = 0;
            var bottomCol =0;
            var leftRow = 0;
            var rightRow =0
            for(var ind=0;ind<len;ind++){
                // From left to right
                if(ind<col){
                if(newArr[row][col]<=newArr[row][ind]){
                    leftRow++;
                }
                }else if(ind>col){ // from right to left
                    if(newArr[row][col]<=newArr[row][ind]){
                        rightRow++;
                    }
                }
                if(ind<row){ // top to bottom
                    if(newArr[row][col]<=newArr[ind][col]){
                        topCol++;
                    }
                }else if(ind>row){
                    if(newArr[row][col]<=newArr[ind][col]){
                        bottomCol++;
                    }
                }
            }
           if(leftRow==0||rightRow==0||topCol==0||bottomCol==0){
            visibleTrees+=1;
           }
        }
    }

    console.log(visibleTrees);
  });
