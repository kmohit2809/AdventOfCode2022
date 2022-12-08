const fs = require('fs');
fs.readFile('AdventOfCode2022/Day6/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    processData(data);
});

function processData(data) {
    const input = data.replace(/\r/g, '')
    .trim()
    .split('\n');

    console.log(input);

    function hasRepeats (str) {
        return /(.).*\1/.test(str);
    }    

  function part2() {
        //do something
        var n = 14;
        input.map(line => {
            var char = line.split('');
            for (var i=0; i<line.length; i++) {
                var test = line.substring([i], [i+n]);
                if (!hasRepeats(test)) {
                    console.log(test);
                    console.log([i+n]);
                    break;
                }
            }
        })


    }

    part2();
}
