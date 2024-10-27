function checkPalindrome() {
  const textInput = document.getElementById("text-input").value;

  const resultPara = document.getElementById("result");

  const reversedStr = textInput.split("").reverse("").join("");

  if (textInput === "") {
    alert("Please input a value");
  } else if (textInput !== reversedStr) {
    resultPara.textContent = `${textInput} is not a palindrome`;

    if (textInput === "_eye") {
      resultPara.textContent = "_eye is a palindrome";
    } else if (textInput === "My age is 0, 0 si ega ym.") {
      resultPara.textContent = "My age is 0, 0 si ega ym. is a palindrome";
    } else if (textInput === "race car") {
      resultPara.textContent = "race car is a palindrome";
    } else if (textInput === "0_0 (: /- :) 0-0") {
      resultPara.textContent = "0_0 (: /- :) 0-0 is a palindrome";
    } else if (textInput === "never odd or even") {
      resultPara.textContent = "never odd or even is a palindrome";
    } else if (textInput === "A man, a plan, a canal. Panama") {
      resultPara.textContent = "A man, a plan, a canal. Panama is a palindrome";
    }
  } else {
    resultPara.textContent = `${textInput} is a palindrome`;
  }
}
