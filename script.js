
const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }


  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";
  let status1="";

    if (BMI < 18.5) {
        status = "Underweight";
        status1 = "You may be underweight. Consider consulting a healthcare professional for advice.";
    } else if (BMI < 24.9) {
        status = "Normal weight";
        status1 = "Congratulations! You have a healthy BMI.";
    } else if (BMI < 29.9) {
        status = "Overweight";
        status1 = "You may be overweight. Consider making healthy lifestyle changes.";
    } else if (BMI < 34.9) {
        status = "Obesity Class I";
        status1 = "You may be in Obesity Class I. Consider consulting a healthcare professional for advice.";
    } else if (BMI < 39.9) {
        status = "Obesity Class II";
        status1 = "You may be in Obesity Class II. Consider consulting a healthcare professional for advice.";
    } else {
        status = "Obesity Class III";
        status1 = "You may be in Obesity Class III. Consider consulting a healthcare professional for advice.";
    }
    document.querySelector(
    ".comment"
    ).innerHTML = `<span id="comment">${status}</span>. ${status1}`;
});
