var katzDeli = [];

function takeANumber(line, name){
  line.push(name);

  line.push(`${name}`);
  return console.log((`Welcome, ${name}. You are number ${line.length} in line.`));
}

function nowServing(katzDeliLine) {
  if(!katzDeliLine.length) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    //console.log("Currently serving " + line.shift());
    return "Currently serving " + katzDeliLine.shift();
  }
}


function currentLine(katzDeli) {
  var line = []
 for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i]+`. `  + katzDeli[i])
  }
   return console.log((`The line is currently:` + line));
}


takeANumber(katzDeli, "Ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")
currentLine(katzDeli);
nowServing(katzDeli);
takeANumber(katzDeli, "Matz");
currentLine(katzDeli);
nowServing(katzDeli);
currentLine(katzDeli)
