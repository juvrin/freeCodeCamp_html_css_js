const genArr = document.getElementById("generate-btn");
const sortArr = document.getElementById("sort-btn");
const startArr = document.getElementById("starting-array");
const arrContainer = document.getElementById("array-container");


const generateElement = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const isOrdered = (int1,int2) => (int1 <= int2);
const generateContainer = () => `<div> </div>`;
const highlightCurrentEls = (htmlEl,index) => {
  //MOETNOG check of dit de juiste manier is om een child at given index te manipuleren
  htmlEl[index].style.border = "1px red dashed"
  //MOETNOG hier moet nog ook index+1 border color wijzigen
  };


function generateArray(){
  const arr = [];

  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;

  //MOETNOG: closure leek hier niet handig/nodig
  // return function () {
  //   return arr;
  // };
};


function fillArrContainer(htmlEl,arr){
  let startEl = htmlEl.split(" ")[0];
  let endEl = htmlEl.split(" ")[1];
  let outStr=`${startEl}`;
  for(let num of arr){
    outStr += `<span>${num}</span>`
  }
  outStr+=`${endEl}`
  return [outStr,arr];
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
  let arrCopy = [...arr];
  let sortedArr = arrCopy.sort((a, b) => a - b);
  let outStr = '';
  
  //MOETNOG: dit werkt nog neit
  while (arr !== sortedArr){
    for(let i = 0; i < arr.length;i++){
      outStr += fillArrContainer(generateContainer(),swapElement(arr,i));
    }
  }
  return outStr;
}

let randomArr = [];

genArr.addEventListener("click",() => {
  [startArr.innerHTML, randomArr] = fillArrContainer(generateContainer(),generateArray());
  //MOETNOG dit moet nog anders:
  // arrContainer.innerHTML = ""
  });

//========= STEP 12
sortArr.addEventListener("click",() => {
  arrContainer.innerHTML = loopThroughSwap(randomArr); 
  });

//=========== TESTING
// let test = fillArrContainer(generateContainer(),generateArray());
// console.log(test)
let test2=isOrdered(1,2);
// console.log(test2)
let test3 = swapElement([2,4,3],1)
// console.log(test3)

