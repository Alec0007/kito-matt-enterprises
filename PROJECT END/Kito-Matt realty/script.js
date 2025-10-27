function validateForm() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let errorMessage = document.getElementById('errorMessage');

    errorMessage.innerHTML = "";
    document.getElementById('errorMessage').style.color = 'red';
    

    if (name.length <= 5) {
        errorMessage.innerHTML = "Name must be more than five character long.";
        return false;
    }

    if (!email.includes("@") || !email.includes(".") || !email.includes("b")) {
        errorMessage.innerHTML = "Enter a valid email address.";
        return false;
    }

    if (phone.length !== 11 || isNaN(phone)) {
        errorMessage.innerHTML = "Enter a valid 11-digit phone number.";
        return false;
    }

    if (address.length <= 5) {
        errorMessage.innerHTML = "Address must be more than five character long.";
        return false;
    }

    alert("congratulations sign up successful!");
    return true;
}

// function alert(){
//     alert
// }

function change(){
    const show1 = document.getElementById('Change');
    

    if (show1 === "none"){
        show1.style.display = "block";
       
    }
    else{
        show1.style.display = "none"; 
    }
}