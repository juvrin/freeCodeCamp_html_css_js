const genArr = document.getElementById("generate-btn");
const sortArr = document.getElementById("sort-btn");
const startArr = document.getElementById("starting-array");
const arrContainer = document.getElementById("array-container");


const generateElement = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const isOrdered = (int1,int2) => (int1 <= int2);
const generateContainer = () => `<div> </div>`;
const highlightCurrentEls = (htmlEl,index) => {

  //hier deed chatGPT iets met eerst wrappen in een <div> en dan htmlEL = wrapper.innerHTML
  //vervolgens ging die over const children = htmlEL.children en dan de el's binnen die childeren
  //zoiets maar het heeft met chatGPT maar 1x gewerkt
  //het kan ook zijn dat je niet correct erefereert naar je class in css en dat er
  //specifiekere regels zijn die voorrang rkijgen?

  //onderstaande kan wel werken misscien als je eerst een DOM element ervoor maakt?
  var spans = document.querySelector(".arr").getElementsByTagName("span");
  spans[index].classList.toggle("highlighted");
  spans[index+1].classList.toggle("highlighted");
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

function swapElements(arr, index){
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
  let outoutStr = "";
  
  let i = 0;
  while (JSON.stringify(sortedArr) !== JSON.stringify(arr)){
      arr = swapElements(arr, i);
      outStr += fillArrContainer(generateContainer(), arr)[0];
      outoutStr = highlightCurrentEls(outStr,i)
      i = (i + 1) % 5
  }  
  return outoutStr;
}


let randomArr = [];
genArr.addEventListener("click",() => {
  [startArr.innerHTML, randomArr] = fillArrContainer(generateContainer(),generateArray());
  // console.log(randomArr)
  //MOETNOG dit moet nog anders:
  // arrContainer.innerHTML = ""
  });



sortArr.addEventListener("click",() => {
  arrContainer.innerHTML = loopThroughSwap(randomArr); 
  });

