/**
 * @jest-environment jsdom
 */

// ==============================
// DOM MANIPULATION FUNCTIONS
// ==============================

// Add element to the DOM
function addDynamicContent(text) {
  const container = document.getElementById("dynamic-content");

  const p = document.createElement("p");
  p.textContent = text;

  container.appendChild(p);
}

// Remove element from the DOM
function removeDynamicContent() {
  const container = document.getElementById("dynamic-content");

  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}

// Display error message
function showError(message) {
  const errorDiv = document.getElementById("error-message");
  errorDiv.textContent = message;
  errorDiv.classList.remove("hidden");
}

// Clear error message
function clearError() {
  const errorDiv = document.getElementById("error-message");
  errorDiv.textContent = "";
  errorDiv.classList.add("hidden");
}

// ==============================
// USER INTERACTIONS
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("simulate-click");
  const form = document.getElementById("user-form");
  const input = document.getElementById("user-input");

  // Simulate button click → update DOM
  button.addEventListener("click", () => {
    addDynamicContent("Button Clicked");
  });

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = input.value.trim();

    if (value === "") {
      showError("Input cannot be empty");
      return;
    }

    clearError();
    addDynamicContent(value);
    input.value = "";
  });
});

// ==============================
// EXPORTS (CRITICAL FOR AUTOGRADER)
// ==============================
module.exports = {
  addDynamicContent,
  removeDynamicContent,
  showError,
  clearError
};
