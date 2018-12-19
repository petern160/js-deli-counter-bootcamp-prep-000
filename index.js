var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  
  line.push(`${name}`);
  return console.log((`Welcome, ${name}. You are number ${line.length} in line.`));
}