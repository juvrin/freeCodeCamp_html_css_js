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
  // console.log(str);
  
  // console.log(str.match(regex)[0].length);
  const matchArray = str.match(regex);

  //check for matches
  if (matchArray !== null) {

    //check if only one match
    if(globalFlag.checked == false){
    const startString = str.slice(0,matchArray.index);
    const endString = str.slice(matchArray.index + matchArray[0].length,);
    stringToTest.innerHTML = `${startString}<span class="highlight">${matchArray[0]}</span>${endString}`;
    testResult.textContent = `${matchArray[0]}`
    // console.log("just one match");
    } else{
    console.log(matchArray);
    console.log("multiple matches");
    }
    
  }else{
    testResult.textContent = "no match";
  }
  
}



testButton.addEventListener("click",() => regexSandbox(regexPattern.value, stringToTest.textContent));

