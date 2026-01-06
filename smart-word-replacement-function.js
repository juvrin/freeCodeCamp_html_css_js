function myReplace(str, origWord, newWord){
  if (origWord[0] === origWord[0].toUpperCase()){
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  }else{
    newWord = newWord[0].toLowerCase() + newWord.slice(1);
  };
     return str.replace(origWord,newWord);
  
};

let test = myReplace("I think we should look up there", "up", "Down")
console.log(test);