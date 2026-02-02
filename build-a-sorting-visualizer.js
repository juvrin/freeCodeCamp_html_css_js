const genArr = document.getElementById("generate-btn");
const sortArr = document.getElementById("sort-btn");
const startArr = document.getElementById("starting-array");
const arrContainer = document.getElementById("array-container");


const generateElement = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const isOrdered = (int1,int2) => (int1 <= int2);
const generateContainer = () => `<div> </div>`;
const highlightCurrentEls = (htmlEl,index) => {
  var child = document.querySelector(`#${htmlEl}:nth-child(${index+1})`)
  child.addClass("highlighted")
  //addClass("highlighted") to nth child of htmlEl
  // htmlEl nth-child(index)
  // htmlEl[index].style.border = "1px red dashed"
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
  // console.log(outStr);
  return [outStr,arr];
}

function swapElements(arr,index){
  if(index <= arr.length-2){
    let firstEl = arr[index];
    let nextEl = arr[index+1];
    // console.log(`index:${index} firstel:${firstEl} nextEl:${nextEl}`)
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
  // while (arr !== sortedArr){
    for(let i = 0; i < arr.length;i++){

      outStr += fillArrContainer(generateContainer(),swapElements(arr,i));
      //hier de currentEls highlighten
      arr = swapElements(arr,i);
    // }
  }
  return outStr;
}

let randomArr = [];

genArr.addEventListener("click",() => {
  [startArr.innerHTML, randomArr] = fillArrContainer(generateContainer(),generateArray());
  // console.log(randomArr)
  //MOETNOG dit moet nog anders:
  // arrContainer.innerHTML = ""
  });

const testFunction = (htmlEl) =>{
console.log(highlightCurrentEls("starting-array",1));

  console.log(`${htmlEl}`);
}

//========= STEP 12
// sortArr.addEventListener("click",() => {
//   arrContainer.innerHTML = loopThroughSwap(randomArr); 
//   });
// sortArr.addEventListener("click",() => {
//   console.log(swapElements(randomArr, 0)); 
//   console.log(swapElements(randomArr, 1));
//   console.log(swapElements(randomArr, 2));
//   console.log(swapElements(randomArr, 3));
//   console.log(swapElements(randomArr, 4));
//   console.log(swapElements(randomArr, 5));
//   });

sortArr.addEventListener("click",() => {testFunction(startArr.innerHTML);
  });


//=========== TESTING
// let test = fillArrContainer(generateContainer(),generateArray());
// console.log(test)
// let test2=isOrdered(1,2);
// console.log(test2)
// let test3 = swapElements([2,4,3],1)
// console.log(test3)

