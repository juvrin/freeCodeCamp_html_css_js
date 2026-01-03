function translatePigLatin(str){
  const vowels = /^(A|E|I|O|U)/i;
  const consonants = /[b-df-hj-np-tv-z]*(A|E|I|O|U)*/gi;

  if(vowels.test(str)){
    return str + "way";
  }else{
    console.log(str.match(consonants))
  };
};

let test = translatePigLatin("U are doing you're best");
let test2 = translatePigLatin("How are you")
// console.log(test);
console.log(test2);
