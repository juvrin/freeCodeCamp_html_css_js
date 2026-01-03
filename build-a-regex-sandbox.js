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
  const spanStart = '<span class="highlight">';
  const spanEnd = '</span>';

  //check for matches
  if (matchArray !== null) {

    //check if only one match
    if(globalFlag.checked == false){
    const startString = str.slice(0, matchArray.index);
    const endString = str.slice(matchArray.index + matchArray[0].length,);
    stringToTest.innerHTML = `${startString}${spanStart}${matchArray[0]}${spanEnd}${endString}`;
    testResult.textContent = `${matchArray[0]}`
    } else{
      const matchArr = Array.from(str.matchAll(regex));
      const notMatch = str.split(regex);
      let resultArr = [];
      let highlightRes = [];
      highlightRes.push(notMatch[0]);
   
      for(let i = 0; i < matchArr.length; i++){
        resultArr.push(matchArr[i][0]);
        highlightRes.push(`${spanStart}${matchArr[i][0]}${spanEnd}`);
        highlightRes.push(notMatch[i+1]);
      };
      testResult.textContent = `${resultArr.join(", ")}`
      stringToTest.innerHTML = highlightRes.join("");       
    };
    
  }else{
    testResult.textContent = "no match";
  };
};



testButton.addEventListener("click",() => regexSandbox(regexPattern.value, stringToTest.textContent));

