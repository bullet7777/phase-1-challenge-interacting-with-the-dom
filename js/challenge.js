
let newCounter=document.getElementById("counter")
let increment=document.getElementById("plus");
let decrement=document.getElementById("minus");

let count=0
updateDisplay()

increment.addEventListener("click",function(){
    counter++
    updateDisplay()
})

decrement.addEventListener("click",function(){
    counter--
    updateDisplay()
})

function updateDisplay(){
    newCounter.innerHTML=count
}




/*function count(){

    var newCounter=document.getElementById("counter")
var counter=newCounter.textContent;
counter++;

newCounter.innerHTML=counter;
}



let counting=0
decrement.addEventListener("click",function(){
    counter--
    newCounter.innerHTML=counting
})



increment.addEventListener("click",function(){
    counter++
    newCounter.innerHTML=counting
})
*/
