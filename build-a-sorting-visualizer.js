const genArr = document.getElementById("generate-btn");
const sortArr = document.getElementById("sort-btn");
const startArr = document.getElementById("starting-array");
const arrContainer = document.getElementById("array-container");


const generateElement = () => Math.floor(Math.random() * 100) + 1;
const isOrdered = (int1,int2) => (int1 <= int2);
const generateContainer = () => document.createElement("div");

function generateArray(){
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
  // return function(){
  //   return arr;
  // }
};


function swapElements(arr, index){
  //MOETNOG hier die if weghalen?
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

const highlightCurrentEls = (htmlEl,index) => {
   const children = htmlEl.children;
  if (children[index] && children[index + 1]) {
         children[index].classList.add('highlight');
         children[index+1].classList.add('highlight');
      }
      return htmlEl
};



function fillArrContainer(htmlEl, arr){
  htmlEl.innerHTML = "";
  for(let num of arr){
    var span = document.createElement('span');
    span.textContent = num;
    htmlEl.appendChild(span);
  }
  return htmlEl
}

function loopThroughSwap(arr){
  let arrCopy = [...arr];
  let sortedArr = arrCopy.sort((a, b) => a - b);

  let i = 0;
  while (JSON.stringify(sortedArr) !== JSON.stringify(arr)){
    arr = swapElements(arr, i);
    // arrContainer.innerHTML += fillArrContainer(generateContainer(), arr).outerHTML;
    arrContainer.innerHTML += highlightCurrentEls(fillArrContainer(generateContainer(), arr),i).outerHTML;
      i = (i + 1) % 5
  }  
}


let randomArr = [];
genArr.addEventListener("click",() => {
  randomArr = generateArray();
  startArr.innerHTML = fillArrContainer(generateContainer(),randomArr).innerHTML;
  //MOETNOG cheken of onderstaande werkt 
  // Array.from(arrContainer.children).forEach(child => {
  //       if (child !== startArr) child.remove();
  //   });
  });

sortArr.addEventListener("click",() => {
  loopThroughSwap(randomArr); 
  });
  



