function palindrome(str) {
    let right = str.match(/[a-z0-9]+/gi).join("").toLowerCase();
    let reverse = right.split("").reverse().join("");
    return right === reverse;
    
}

palindrome("eye");
