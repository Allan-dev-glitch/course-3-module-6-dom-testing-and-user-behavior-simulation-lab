document.addEventListener("DOMContentLoaded", () => {
  const clickButton = document.getElementById("simulate-click");
  const form = document.getElementById("user-form");
  const input = document.getElementById("user-input");
  const content = document.getElementById("dynamic-content");
  const errorMessage = document.getElementById("error-message");

  // -----------------------------
  // Button click simulation
  // -----------------------------
  clickButton.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Button was clicked";
    content.appendChild(p);
  });

  // -----------------------------
  // Form submission
  // -----------------------------
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = input.value.trim();

    if (value === "") {
      showError("Input cannot be empty");
      return;
    }

    clearError();
    addItem(value);
    input.value = "";
  });

  // -----------------------------
  // Add item to DOM
  // -----------------------------
  function addItem(text) {
    const div = document.createElement("div");
    div.textContent = text;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
      div.remove();
    });

    div.appendChild(removeBtn);
    content.appendChild(div);
  }

  // -----------------------------
  // Error handling
  // -----------------------------
  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
  }

  function clearError() {
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
  }
});
