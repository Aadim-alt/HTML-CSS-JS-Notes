//let username;
//username = window.prompt("Whats Your Name: ");
//document.getElementById("fH1").textContent=`Hello ${username}`;
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    window.alert(`Thank You for your feedback ${username}`)
}

