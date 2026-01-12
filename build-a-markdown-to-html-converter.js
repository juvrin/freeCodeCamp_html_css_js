let markdownInput = document.getElementById("markdown-input");
let rawHTML = document.getElementById("html-output");
let preview = document.getElementById("preview");


markdownInput.addEventListener("input",() => {
  rawHTML.innerText = convertMarkdown();
  preview.innerHTML = convertMarkdown();
  });



function convertMarkdown(){
  let input = markdownInput.value;
  
  let output = input
    .replace(/(?:^|\n)(###)\s(?<rest>.+)/gm,"<h3>$<rest></h3>")
    .replace(/(?:^|\n)(##)\s(?<rest>.+)/gm,"<h2>$<rest></h2>")
    .replace(/(?:^|\n)(#)\s(?<rest>.+)/gm,"<h1>$<rest></h1>")
    .replace(/(?<bold>\*{2}|_{2})(?<text>.+)\k<bold>\s*/gm,"<strong>$<text></strong>")
    .replace(/(?<italic>\*{1}|_{1})(?<text>.+)\k<italic>\s*/gm,"<em>$<text></em>")
    .replace(/\!\[(?<alt>.*)\]\((?<src>.*)\)\s*/gm,"<img alt='$<alt>' src='$<src>'>")
    .replace(/\[(?<linktext>.*)\]\((?<url>.*)\)\s*/gm,"<a href='$<url>'>$<linktext></a>")
    .replace(/^\s*\>\s{1}(?<quotetext>.*)\s*/gm,"<blockquote>$<quotetext></blockquote>")

  return output;
};