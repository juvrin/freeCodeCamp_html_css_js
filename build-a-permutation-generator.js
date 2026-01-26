function permuteString(str,prefix="",arr=[]){
  if(str.length === 0){
    arr.push(prefix);
    return arr;
  }else{
  for(let char of str){
    let strMinChar = str.replace(char,"");
    permuteString(strMinChar,prefix+char,arr);
    }
  }
  const uniqueArr = [...new Set(arr)]
  return uniqueArr
}

let test = permuteString("hond", "", []);
console.log(test);

let test2 = permuteString("");
console.log(test2);

/*Foutjes gereviewed:
- waarom default values meegeven aan de parameters: zodat prefix en arr niet undefined zijn
- waarom niet let prefix = permuteString(strMinChar, char, arr); omdat je dan elke keer prefix overschrijft ipv deze opbouwt
- waarom niet return prefix in de for loop: omdat je dan niet over alle characters loopt, je exit de loop voordat je dat doet. dus moest helemaal weg
- laatste foutje eruit gehaald permuteString("") moest [""] returnen: dit werkte alleen als je return arr deed in de if statement.
*/