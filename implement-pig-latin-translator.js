function translatePigLatin(str){
  const vowels = /^(a|e|i|o|u)/i;
const consonants = /^([b-df-hj-np-tv-z])*/i;


  if(vowels.test(str)){
    return str + "way";
  }else {
    let startCons = str.match(consonants)[0].toLowerCase();
    let startIndex = str.match(consonants).index + startCons.length;
    console.log(startIndex);
    return str.slice(startIndex,) + startCons + "ay";
    
  };
};

// let test = translatePigLatin("U are doing you're best");
// console.log(test);

let test2 = translatePigLatin("Shows are on")
console.log(test2);

