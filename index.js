// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] ;
 
function destructivelyAppendCat(name){
    cats.push (name);
}
function destructivelyPrependCat(name){
    cats.unshift (name);
}
function destructivelyRemoveLastCat (){
    cats.pop();
}
function destructivelyRemoveFirstCat (){
    cats.shift();
}


function appendCat(name){
  const ncats = [...cats];
  ncats.push(name); 
  return ncats; 
}

function prependCat(name){
    const ncats = Array.from(cats) ;
    ncats.unshift(name); 
    return ncats; 
}
function removeLastCat(){
    const ncats = [...cats];
    ncats.pop(); 
    return ncats; 
}
function removeFirstCat(){
    const ncats = [...cats];
    ncats.shift(); 
    return ncats; 
}