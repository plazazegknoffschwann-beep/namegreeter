function greetUser() {
    let name = document.getElementById("nameInput").value.trim();

    if(name === "") {
        document.getElementById("result").textContent = "Please enter your name.";
    } else {
        document.getElementById("result").textContent = "Hello, " + name + "! Welcome!";
    }
}