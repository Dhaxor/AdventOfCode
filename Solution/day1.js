const fs = require('fs');

fs.readFile('../Input/1.txt', 'utf-8', (err, content)=> {
  if (err) return err;
  solveAlgo(content);
})

const solveAlgo = (content) => {
  const result = content.split(/\n/).map(item => parseInt(item, 10))
  for (let i = 0; i < result.length; i++) {
    if(i === 0){
      console.log(`${result[i]} N/A - no previous measurement)`)
    }
    else if (result[i] > result[i - 1]) {
        console.log(`${result[i]} is greater than ${result[i - 1]} increased`)
    }
    else{
      console.log(`${result[i]} is lesser than ${result[i - 1]} decreased`)
    }
  }
}
