
document.addEventListener('DOMContentLoaded',()=>{



let newCounter=document.getElementById("counter");
let increment=document.getElementById("plus");
let decrement=document.getElementById("minus");
let newHeart=document.getElementById('heart');
let newPause=document.getElementById('pause')
let commentForm=document.getElementById("comment-form")
let commentInput=document.getElementById('comment-input')
let submitButton=document.getElementById('submit')

let count=0
updateDisplay()

increment.addEventListener("click",function(){
    count++
    updateDisplay()
})

decrement.addEventListener("click",function(){
    count--
    updateDisplay()
})

function updateDisplay(){
    newCounter.innerHTML=count
}

function incrementing(){
    count++
    updateDisplay()
}

let countingInterval=setInterval(incrementing,1000)


newHeart.addEventListener('click',like)


function like(){

    let selectedCount=count
    let found=false
    let commentsList=document.getElementsByClassName('likes')[0]
    
    let allCategories=commentsList.getElementsByTagName('li')
   
    
    for(let i=0;i<allCategories.length;i++){
        let cat=allCategories[i].innerText
        let st=cat.split(" ")
    console.log(st)
        if(parseInt(st[0])===selectedCount){
    
            let likedNumber=parseInt(st[2])
            likedNumber++
            st[2]=likedNumber
            allCategories[i].innerText=st.join(' ')
            found=true
        }
    
    }
    
    if(!found){
        let categories=document.createElement('li')
        categories.innerText=`${selectedCount} liked 1 times`
        commentsList.appendChild(categories)
    }
    }




    newPause.addEventListener('click',paused)

function paused(){

   
    if(newPause.innerText==="pause"){
        clearInterval(countingInterval)
        newPause.innerText='resume'
        submitButton.disabled=true
        increment.disabled=true
        decrement.disabled=true
        newHeart.disabled=true
    }else {
        newPause.innerText="pause"
        countingInterval=setInterval(incrementing,1000)
        submitButton.disabled=false
        increment.disabled=false
        decrement.disabled=false
        newHeart.disabled=false
    }
    
}

commentForm.addEventListener('submit',comments)

function comments(event){
event.preventDefault()
let value=commentInput.value
let newList=document.getElementById('list')
let newDiv=document.createElement('div')
  newDiv.innerText=value
  newList.appendChild(newDiv)

}


})



