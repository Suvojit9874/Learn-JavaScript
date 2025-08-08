// const rootnode = document.getRootNode();
// const htmlElementNode = rootnode.childNodes[0];
// // console.log(htmlElementnode.childNodes); //NodeList(3) [0>> head,>>1 text,>>2 body]
// const headElementNode = htmlElementNode.childNodes[0];
// console.log(headElementNode.nextSibling.nextSibling);

// const h1 = document.querySelector("h1");
// console.log(h1);
// const div = h1.parentNode
// div.style.color = "#efefef";
// div.style.backgroundColor = "#444";

const head = document.querySelector("head");
console.log(head);
const title = head.querySelector("title");
console.log(title.childNodes);