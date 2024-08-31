const button = document.querySelectorAll("button")
const display = document.querySelector(".display")
console.log(button.length)

button.forEach(element => {
    element.addEventListener("click",function(e){
        console.log(e.target.id)
        display.innerHTML = e.target.id
        ;})
    
});
