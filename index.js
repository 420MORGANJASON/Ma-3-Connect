// let myVariable = document.getElementById('city')
// console.log(myVariable)

let loginForm = document.getElementById('Form1');
// console.log(loginform)
loginForm.addEventListener("submit", (e) => { 
    e.preventDefault();

    let username = document.getElementById("name");
    let number = document.getElementById("phone");
    let home = document.getElementById("city");

    if (username.value == "" || number.value == "" || home.value == "") {
        alert("Please fill all fields");
    } else {
        alert("This form has been successfully submitted!");

        console.log(`This form has a name of ${username.value} a phone number of ${number.value} and lives in ${home.value}`);

        username.value = "";
        number.value = "";
        home.value = "";
    

    }
  

});