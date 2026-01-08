document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("simulate-click");
  const form = document.getElementById("user-form");
  const input = document.getElementById("user-input");
  const content = document.getElementById("dynamic-content");
  const error = document.getElementById("error-message");

  // BUTTON CLICK — updates DOM
  button.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Button was clicked";
    content.appendChild(p);
  });

  // FORM SUBMISSION
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.trim() === "") {
      error.textContent = "Input cannot be empty";
      error.classList.remove("hidden");
      return;
    }

    error.textContent = "";
    error.classList.add("hidden");

    const div = document.createElement("div");
    div.textContent = input.value;

    // REMOVE ELEMENT TEST
    div.addEventListener("click", () => {
      div.remove();
    });

    content.appendChild(div);
    input.value = "";
  });
});
