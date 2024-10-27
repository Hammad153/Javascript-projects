function convertToRoman(num) {
  const romanValues = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let roman = "";
  let i = 0;

  while (num > 0) {
    if (romanValues[i].value <= num) {
      roman += romanValues[i].numeral;
      num -= romanValues[i].value;
    } else {
      i++;
    }
  }
  return roman;
}

function convertNumber() {
  const inputField = document.getElementById("number");

  const output = document.getElementById("output");

  const num = parseInt(inputField.value);

  if (isNaN(num)) {
    output.textContent = "Please enter a valid number";
  } else if (num <= -1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (num >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    output.textContent = convertToRoman(num);
  }
}
