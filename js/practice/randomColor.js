function generateRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

export function setupRandomColor() {
  const colorBtn = document.getElementById("colorBtn");
  const colorEl = document.querySelector(".randomResult");

  colorBtn.addEventListener("click", () => {
    const randomColor = generateRandomColor();
    colorEl.style.backgroundColor = randomColor;

    colorEl.textContent = "";

    const pElement = document.createElement("p");
    pElement.classList.add("randomColorText");
    pElement.textContent = randomColor;

    if (isColorDark(randomColor)) {
      pElement.style.color = "white";
    } else {
      pElement.style.color = "black";
    }

    colorEl.appendChild(pElement);
  });
}

function isColorDark(color) {
  const rgb = hexToRgb(color);
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness < 128;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}
