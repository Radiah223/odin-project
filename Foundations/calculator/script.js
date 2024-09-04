const button = document.querySelectorAll("button")
const display = document.querySelector(".display")
console.log(button.length)
let str = ""

button.forEach(element => {
    element.addEventListener("click",function(e){
        console.log(str);
        if(e.target.className == "equals"){ 
            operate(str); 
            str = ""; 
            return 
        }else if (e.target.className == "clr"){ 
            str = ""; 
        }else{ 
            str +=e.target.id;
        }
        display.innerHTML = str;
        ;})
});

function operate(str){ 
    if (str.includes("+")){ 
        display.innerHTML = (Number(str.split("+")[0]) + Number (str.split("+")[1])).toFixed(6); 
        str = "";
    }else if (str.includes("-")){ 
        display.innerHTML = (Number(str.split("-")[0]) - Number (str.split("-")[1])).toFixed(6); 
        str =""; 
    }else if (str.includes("*")){ 
        display.innerHTML = (Number(str.split("*")[0]) * Number (str.split("*")[1])).toFixed(6);
        str = "";  
    }else{
        if (str.split("/")[1] == "0"){ 
            display.innerHTML = "undef";
            str = "";
        }else{ 
            display.innerHTML = ((Number(str.split("/")[0]) / Number (str.split("/")[1]))).toFixed(6);
            str ="";  
        }
    }
    str = "";
}
