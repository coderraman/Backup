const item = document.querySelector("item");
const box = document.querySelector("box");

item.addEventListener(
    "keyup",
    function(event){
        if (event.key == "Enter"){
            console.log(item.value)
        }
    }
)