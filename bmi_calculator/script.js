document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    document.getElementById("result").textContent =
      "Please enter valid values.";
    return;
  }

  const bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obesity";

  document.getElementById("result").textContent = `Your BMI is ${bmi.toFixed(
    2
  )} (${category}).`;
});
