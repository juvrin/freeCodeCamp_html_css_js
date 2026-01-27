const genArr = document.getElementById("generate-btn");
const sortArr = document.getElementById("sort-btn");
const startArr = document.getElementById("starting-array");
const arrContainer = document.getElementById("array-container");


const generateElement = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const isOrdered = (int1,int2) => (int1 <= int2);
const generateContainer = () => `<div> </div>`;
const highlightCurrentEls = (htmlEl,index) => htmlEl[index].style.border = "1px red dashed";

const generateArray = (outarr = []) =>{
  for(let i = 0; i < 5; i++){
    outarr.push(generateElement());  
  }
  return outarr;
}

function fillArrContainer(htmlEl,arr){
  let startEl = htmlEl.split(" ")[0];
  let endEl = htmlEl.split(" ")[1];
  let outStr=`${startEl}`;
  for(let num of arr){
    outStr += `<span>${num}</span>`
  }
  outStr+=`${endEl}`
  return outStr;
}

function swapElement(arr,index){
  if(index <= arr.length-2){
    let firstEl = arr[index];
    let nextEl = arr[index+1];
    if(!isOrdered(firstEl,nextEl)){
      arr[index] = nextEl;
      arr[index+1] = firstEl;
    };
  };
    return arr;
}

function loopThroughSwap(arr){ 
  let sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);
  while (arr !== sortedArr){
    for(let i = 0; i < arr.length;i++){
    swapElement(arr,i);
  }
  }
  
}


genArr.addEventListener("click",() => startArr.innerHTML = fillArrContainer(generateContainer(),generateArray()));

//========= STEP 12
// sortArr.addEventListener("click",() => arrContainer.innerHTML = fillArrContainer(generateContainer(),generateArray()));


sortArr.addEventListener("click",() => loopThroughSwap(generateArray()));

//=========== TESTING
let test = fillArrContainer(generateContainer(),generateArray());
// console.log(test)
let test2=isOrdered(1,2);
// console.log(test2)
let test3 = swapElement([2,4,3],1)
// console.log(test3)

