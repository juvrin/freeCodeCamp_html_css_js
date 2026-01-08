//IMPORTANT!!!
//DON"T forget to link to your script in the html!!!

// let markdownInput = document.getElementById("markdown-input");
// markdownInput.addEventListener("input",() => console.log(markdownInput.value));

//HEADINGS
const regexHeadings = /^\s*(?<level>#+)\s(?<rest>[a-zA-Z|\s]+)/;
let testHeadings = "### DOes this work"
// let replaceHeadings = `<h${allString.match(regexHeadings)[1].length}>$<rest></h${allString.match(regexHeadings)[1].length}>`
// let newHead = testHeadings.replace(regexHeadings, replaceHeadings);
// console.log(newHead);

//BOLD
const regexBold = /^(?<bold>\*{2}|_{2})(?<text>.+)\k<bold>/;
let replaceBold = "<strong>$<text></strong>";
let testBold1 = "**Does this work**";
let testBold2 = "__Does this work__";
let newBold1 = testBold1.replace(regexBold,replaceBold)
let newBold2 = testBold2.replace(regexBold,"<strong>$<text></strong>")

//ITALIC
const regexItalic = /^(?<italic>\*{1}|_{1})(?<text>.+)\k<italic>/;
let replaceItalic = "<em>$<text></em>"
let testItalic1 = "*Does this work*";
let testItalic2 = "_Does this work_";
let newItalic1 = testItalic1.replace(regexItalic, replaceItalic)
let newItalic2 = testItalic2.replace(regexItalic,"<em>$<text></em>")
// console.log(newItalic1);

//IMG
const regexImg = /^\!\[(?<alt>.*)\]\((?<src>.*)\)/;
let replaceImg = "<img alt='$<alt>' src='$<src>'>"
let testImg = "![alt text hier](https://www.nogiets.com/imgcute/)";
let newImg = testImg.replace(regexImg,replaceImg);
// console.log(newImg);

//LINK
const regexLink = /^\[(?<linktext>.*)\]\((?<url>.*)\)/;
let replaceLink = "<a href='$<url>'>$<linktext></a>"
let testLink = "[click me](www.doggies.com)";
let newLink = testLink.replace(regexLink,replaceLink);
// console.log(newLink);

//QUOTE
const regexQuote = /\s*\>\s{1}(?<quotetext>.*)/;
let replaceQuote = "<blockquote>$<quotetext></blockquote>";
let testQuote = " > I have a dream that one day bla bla."
let newQuote = testQuote.replace(regexQuote,replaceQuote);
// console.log(newQuote);


//MULTIPLE REGEX
// je zou dit ook in een dictionary kunnen zetten van regex-replace paren
let allString =  "## Does this work";
let allRegex = [regexHeadings, regexBold, regexItalic, regexImg, regexLink, regexQuote];
let replaceHeadings = "";

try {
    let replaceHeadings = `<h${allString.match(regexHeadings)[1].length}>$<rest></h${allString.match(regexHeadings)[1].length}>`
    console.log(replaceHeadings);
} catch{
    console.log("no header")
};

//misschien dit in een finally wrappen ofzo?
let allReplace = [replaceHeadings, replaceBold, replaceItalic, replaceImg, replaceLink, replaceQuote];
for(let i = 0; i < allRegex.length; i++){
    console.log(allRegex[i].test(allString));
    if(allRegex[i].test(allString)){
        return console.log(allString.replace(allRegex[i], allReplace[i]));
    }
};