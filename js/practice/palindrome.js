export function setupPalindromeChecker() {
  const inputEl = document.getElementById("textInput");
  const resultEl = document.querySelector(".palResult");
  const buttonEl = document.getElementById("palBtn");

  function isPalindrome(str) {
    let lowerStr = str.toLowerCase();
    let rev = lowerStr.split("").reverse().join("");
    return rev === lowerStr;
  }

  function containsOnlyLetters(str) {
    let lettersOnly = str.match(/[a-zA-Z]+/g);
    return lettersOnly ? lettersOnly.join("") === str : false;
  }

  function displayMessage(message, color) {
    resultEl.textContent = message;
    resultEl.style.color = color;
  }

  function checkPalindrome() {
    const userInput = inputEl.value.trim();

    if (!userInput) {
      return displayMessage("Only words", "red");
    }

    if (!containsOnlyLetters(userInput)) {
      return displayMessage("No symbols or numbers", "red");
    }

    const message = isPalindrome(userInput)
      ? `"${userInput}" is a palindrome ✅`
      : `"${userInput}" is NOT a palindrome ❌`;

    displayMessage(message, isPalindrome(userInput) ? "green" : "red");
  }

  buttonEl.addEventListener("click", checkPalindrome);
}
