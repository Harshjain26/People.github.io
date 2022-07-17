let count=0
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
function increment(){
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    let saveU=count + " - "
    saveEl.textContent += saveU
    console.log(count)
    countEl.textContent=0
    count=0
}
