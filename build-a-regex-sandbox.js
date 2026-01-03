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
  const regex = new RegExp(regexInput, getFlags());
  const matches = str.match(regex);
 
  if (matches) {
    testResult.textContent = matches.join(", ")
    stringToTest.innerHTML = stringToTest.innerHTML.replace(regex, (content) => `<span class='highlight'>${content}</span>`)
  }else{
    testResult.textContent = "no match";
  };
};



testButton.addEventListener("click",() => regexSandbox(regexPattern.value, stringToTest.textContent));

