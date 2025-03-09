const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const values = input.value.trim();
  output.textContent = values || "Anonymous";
});
