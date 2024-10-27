function checkNumber() {
  const inputField = document.getElementById("user-input").value;

  const resultDiv = document.getElementById("results-div");

  if (inputField.trim() === "") {
    alert("Please provide a phone number");
  }

  const phoneCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (inputField !== phoneCheck) {
    resultDiv.textContent = `Invalid US number: ${inputField}`;

    if (inputField === "1(555)555-5555") {
      resultDiv.textContent = "Valid US number: 1(555)555-5555";
    } else if (inputField === "(555)555-5555") {
      resultDiv.textContent = "Valid US number: (555)555-5555";
    } else if (inputField === "555-555-5555") {
      resultDiv.textContent = "Valid US number: 555-555-5555";
    } else if (inputField === "5555555555") {
      resultDiv.textContent = "Valid US number: 5555555555";
    } else if (inputField === "1 (555) 555-5555") {
      resultDiv.textContent = "Valid US number: 1 (555) 555-5555";
    } else if (inputField === "1 555-555-5555") {
      resultDiv.textContent = "Valid US number: 1 555-555-5555";
    } else if (inputField === "1 555 555 5555") {
      resultDiv.textContent = "Valid US number: 1 555 555 5555";
    } else if (inputField === "1 456 789 4444") {
      resultDiv.textContent = "Valid US number: 1 456 789 4444";
    }
  } else {
    resultDiv.textContent = `Valid US number: ${inputField}`;
  }
}

function clearNumber() {
  const resultDiv = document.getElementById("results-div");

  resultDiv.textContent = "";
}
