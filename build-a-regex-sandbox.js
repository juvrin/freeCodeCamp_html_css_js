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
  console.log(str.match(regex));
  // console.log(str.match(regex)[0].length);
  if (str.match(regex)[0] !== "") {
    let startIndex = str.match(regex).index;
    let endIndex = startIndex + str.match(regex)[0].length - 1;
    stringToTest.innerHTML = `<span class="highlight></span>` 

    //highlight from index to length of match
  }
  
}


testButton.addEventListener("click",() => regexSandbox(regexPattern.value, stringToTest.textContent));

