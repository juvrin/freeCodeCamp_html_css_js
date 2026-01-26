function permuteString(str,prefix="",arr=[]){
  if(str.length === 0){
    arr.push(prefix);
    return arr;
  }else{
  for(let i=0;i<str.length;i++){
    let strMinChar = str.slice(0,i)+str.slice(i+1);
    permuteString(strMinChar,prefix+str[i],arr);
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
- itereren over de string met i ipv for ... of..: zodat je slice met een index kan gebruiken
- waarom niet .replace gebruiken (let strMinChar = str.replace(char,"")): niet zo handig ivm met repeating characters want verwijderd enkel de eerste matching character
- waarom niet let prefix = permuteString(strMinChar, char, arr); omdat je dan elke keer prefix overschrijft ipv deze opbouwen
- waarom niet return prefix in de for loop: omdat je dan niet over alle characters loopt, je exit de loop voordat je dat doet. dus moest helemaal weg
- laatste foutje eruit gehaald permuteString("") moest [""] returnen: dit werkte alleen als je return arr deed in de if statement.
*/