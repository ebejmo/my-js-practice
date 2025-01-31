//1. FizzBuzz

function FizzBuzz(max) {
  for (let i = 1; i <= max; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

FizzBuzz(0);

export function fizzyBuzzy() {
  const inputEl = document.getElementById("inputNumber");
  const fizzBtn = document.querySelector(".fizz-btn");
  const resultEl = document.querySelector(".result");

  if (!inputEl || !fizzBtn || !resultEl) {
    console.error("Required DOM elements not found");
    return;
  }
  fizzBtn.addEventListener("click", () => {
    const max = parseInt(inputEl.value, 10);

    if (isNaN(max) || max < 1) {
      resultEl.textContent = "Please enter a valid number";
      return;
    }

    let output = "";

    for (let i = 1; i <= max; i++) {
      if (i % 15 === 0) {
        output += "FizzBuzz<br>";
      } else if (i % 3 === 0) {
        output += "Fizz<br>";
      } else if (i % 5 === 0) {
        output += "Buzz<br>";
      } else {
        output += i + "<br>";
      }
    }

    resultEl.innerHTML = output;
  });
}
