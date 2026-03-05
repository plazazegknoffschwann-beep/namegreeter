function greetUser() {

    let name = document.getElementById("nameInput").value.trim();
    let result = document.getElementById("result");

    if (name === "") {
        result.textContent = "Please enter your name.";
    } else {
        result.textContent = "Good day, " + name + "!";
    }

}