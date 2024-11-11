function randomPasswordGenerator() {
    const passwordLength = parseInt(document.getElementById("passlength").value);
    const incLowerCase = document.getElementById("lowerCase").checked;
    const incUpperCase = document.getElementById("upperCase").checked;
    const incNumber = document.getElementById("number").checked;
    const incSymbols = document.getElementById("symbol").checked;

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let allowedChars = "";
    let password = "";

    if (passwordLength <= 0) {
        document.getElementById("result").innerText = "Password Length must be greater than 0";
        return;
    }

    if (!incLowerCase && !incUpperCase && !incNumber && !incSymbols) {
        document.getElementById("result").innerText = "At least 1 set of characters needs to be selected";
        return;
    }
    allowedChars += incLowerCase ? lowerCase : "";
    allowedChars += incUpperCase ? upperCase : "";
    allowedChars += incNumber ? numbers : "";
    allowedChars += incSymbols ? symbols : "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById("result").innerText = password;
}