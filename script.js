
const counters = document.querySelectorAll('.counter')

counters.forEach(counter=>{

let start=0
let target=parseInt(counter.innerText)

counter.innerText=0

let interval=setInterval(()=>{

start++
counter.innerText=start

if(start==target){
clearInterval(interval)
}

},40)

})
