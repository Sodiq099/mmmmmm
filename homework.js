let display = document.getElementById("display")
let arr = ["Bola", "Tobi", "Timi", "Bimbo"]
let inp = document.getElementById("inp")
function pop(){
    display.innerHTML = arr
    arr.pop();
   
}
function shift(){
    arr.shift();
    display.innerHTML = arr
}
function unshift(){
    arr.unshift(inp.value);
    display.innerHTML = arr
    
}
function push(){
    arr.push(inp.value);
    display.innerHTML = arr
    
}