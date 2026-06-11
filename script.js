const button = 
document.getElementById('helloButton');

const message = 
document.getElementById('message');

button.addEventListener("click", function(){
    message.textContent = 
    "Welcome to my first webpage!";
})

