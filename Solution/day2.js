const fs = require('fs');

fs.readFile('../Input/2.txt', 'utf-8', (err, content)=> {
  if (err) return err;
  findHorizontalAndDepth(content);
})

const findHorizontalAndDepth = (content) => {
  const result = content.split(/\n/)
  let horizontal = 0;
  let depth = 0;

  for (let i = 0; i < result.length; i++) {
     if(result[i].includes('forward') === true){
       horizontal += parseInt(result[i].charAt(result[i].length - 1),10)
     }
     if(result[i].includes('down') === true){
       depth += parseInt(result[i].charAt(result[i].length - 1),10)
     }
    if(result[i].includes('up') === true){
       depth -= parseInt(result[i].charAt(result[i].length - 1),10)
     }
    
  }

  //Final horizontal and depth
  return horizontal * depth;
}


 