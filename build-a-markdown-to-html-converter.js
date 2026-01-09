//TO DO
//- linken naar script in html file!
//- zorgen dat je ze kan combineren bv <h1><strong>some text</strong></h1>



let markdownInput = document.getElementById("markdown-input");
let rawHTML = document.getElementById("html-output");
let preview = document.getElementById("preview");

markdownInput.addEventListener("input",() => convertMarkdown(markdownInput.value));


function convertMarkdown(allString){
  
  //HEADINGS
  const regexHeadings = /^\s*(?<level>#+)\s(?<rest>[\w|\s]+)/;

  //BOLD
  const regexBold = /^(?<bold>\*{2}|_{2})(?<text>.+)\k<bold>/;
  let replaceBold = "<strong>$<text></strong>";

  //ITALIC
  const regexItalic = /^(?<italic>\*{1}|_{1})(?<text>.+)\k<italic>/;
  let replaceItalic = "<em>$<text></em>"

  //IMG
  const regexImg = /^\!\[(?<alt>.*)\]\((?<src>.*)\)/;
  let replaceImg = "<img alt='$<alt>' src='$<src>'>"

  //LINK
  const regexLink = /^\[(?<linktext>.*)\]\((?<url>.*)\)/;
  let replaceLink = "<a href='$<url>'>$<linktext></a>"

  //QUOTE
  const regexQuote = /\s*\>\s{1}(?<quotetext>.*)/;
  let replaceQuote = "<blockquote>$<quotetext></blockquote>";

  //COMBINE MULTIPLE REGEX
  let allRegex = [regexHeadings, regexBold, regexItalic, regexImg, regexLink, regexQuote];
  let output = "";

  function replaceHeadingsFunction(str, regex){
    if(regexHeadings.test(allString)){
      let level = str.match(regex)[1].length
      return `<h${level}>$<rest></h${level}>` 
    };
    };
    
  let allReplace = [replaceHeadingsFunction(allString, regexHeadings), replaceBold, replaceItalic, replaceImg, replaceLink, replaceQuote];

  for(let i = 0; i < allRegex.length; i++){
      if(allRegex[i].test(allString)){
          output = allString.replace(allRegex[i], allReplace[i]);
      }
  };
  
  rawHTML.textContent = output;
  preview.innerHTML = output;
  return output;

};


