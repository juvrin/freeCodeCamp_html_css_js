//IMPORTANT!!!
//DON"T forget to link to your script in the html!!!

// let markdownInput = document.getElementById("markdown-input");
// markdownInput.addEventListener("input",() => console.log(markdownInput.value));

//HEADINGS
const regexHeadings = /^(?<level>#+)\s(?<rest>[a-zA-Z|\s]+)/;
let testHeadings = "### DOes this work"
let newHead = testHeadings.replace(regexHeadings, `<h${testHeadings.match(regexHeadings)[1].length}>$<rest></h${testHeadings.match(regexHeadings)[1].length}>`);
// console.log(newHead);

//DIT WERKT NOG NIET
// let newText2 = testText.replace(regexHeadings, (content) => 
//     {   let headNum = testText.match(regexHeadings)[1].length;
//         console.log(content);
//         return `<h${headNum}>$<rest></h${headNum}>`});
// console.log(newText2);


//BOLD
const regexBold = /^(?<bold>\*{2}|_{2})(?<text>.+)\k<bold>/;
let testBold1 = "**Does this work**";
let testBold2 = "__Does this work__";

console.log(regexBold.test(testBold1));
console.log(regexBold.test(testBold2));
// console.log(regexBoldSimple.test(testBold1));

let newBold1 = testBold1.replace(regexBold,"<strong>$<text></strong>")
let newBold2 = testBold2.replace(regexBold,"<strong>$<text></strong>")
console.log(newBold1);
console.log(newBold2);
