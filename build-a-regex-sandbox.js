const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag  = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags(){
  let outArr = [];
  if(caseInsensitiveFlag.checked) { outArr.push("i")}
  if(globalFlag.checked) { outArr.push("g")}
  return outArr.join("")
}


function regexSandbox(regexInput, str){
  const regex = new RegExp(`${regexInput}`, `${getFlags()}`);
  const matchArray = str.match(regex);
  
  //check for matches
  if (matchArray !== null) {

    //check if only one match
    if(globalFlag.checked == false){
    const startString = str.slice(0,matchArray.index);
    const endString = str.slice(matchArray.index + matchArray[0].length,);
    stringToTest.innerHTML = `${startString}<span class="highlight">${matchArray[0]}</span>${endString}`;
    testResult.textContent = `${matchArray[0]}`
    } else{
      console.log("multiple matches");
      const matchArr = Array.from(str.matchAll(regex));
    console.log(matchArr);
    // for(let match of matchArray){
    //   console.log(match);
    // }
    

    for(let match of matchArr){
      console.log(match.index);
      //hier kan je dan pushen naar een outArr(die je later kan joinen zodat string met komma's ertussen) door steeds de str vanaf 0 tot 1e match index, dan str vanaf 1e match index+match.length tot aan 2e match index etc
    }


    
    };
    
  }else{
    testResult.textContent = "no match";
  };
  
};



testButton.addEventListener("click",() => regexSandbox(regexPattern.value, stringToTest.textContent));

