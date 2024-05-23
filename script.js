let outputPassword = document.querySelector(".password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/`~";
const length = 12;

let allChar= upperCase + lowerCase + numbers + symbols;


function createPassword() {
    let res="";
    for(let i=0; i<length; i++){
        const random= Math.floor(Math.random() * allChar.length);
        res+=allChar[random];
    }

    outputPassword.value= res;
}

async function copyPassword() {
    try {
        await navigator.clipboard.writeText(outputPassword.value); // Write the password text to the clipboard
        alert("Password copied to clipboard!"); // Show an alert indicating the text has been copied
    } catch (err) {
        console.error("Failed to copy password: ", err); // Log an error if the copy operation fails
    }
}