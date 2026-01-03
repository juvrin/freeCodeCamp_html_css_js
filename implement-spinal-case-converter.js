function spinalCase(str){
  const regex = /(?<word>[A-Z]*[a-z]*)|(?<space>\s|_)/g;
  const matchArr = str.match(regex);
  let idiotSolution = [];
  for (let match of matchArr){
    if(match !==""){
    idiotSolution.push(match.toLowerCase());
    idiotSolution.push("-");
    }
  }
  return idiotSolution.slice(0,-1).join("");
}

let test = spinalCase("this IsSpinal_Tap");
console.log(test);

