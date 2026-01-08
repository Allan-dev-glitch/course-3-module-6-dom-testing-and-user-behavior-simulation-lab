// ==============================
// DOM Manipulation Functions
// ==============================

// Add content to DOM
function addDynamicContent(text) {
  const container = document.getElementById("dynamic-content");
  const p = createElement("p");
  p.textContent = text;

  // Add remove button for user interaction
  const removeBtn = createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    removeDynamicContent(p);
  });

  p.appendChild(removeBtn);
  container.appendChild(p);
}

// Remove content from DOM
function removeDynamicContent(element) {
  element.remove();
}

// Show error in DOM
function showError(message) {
  const errorDiv = document.getElementById("error-message");
  errorDiv.textContent = message;
  errorDiv.classList.remove("hidden");
}

// Clear error in DOM
function clearError() {
  const errorDiv = document.getElementById("error-message");
  errorDiv.textContent = "";
  errorDiv.classList.add("hidden");
}

// Utility to create elements
function createElement(tag) {
  return document.createElement(tag);
}

// ==============================
// Event Listeners for User Behavior
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("simulate-click");
  const form = document.getElementById("user-form");
  const input = document.getElementById("user-input");

  // Button click adds content or removes last content
  button.addEventListener("click", () => {
    const container = document.getElementById("dynamic-content");

    if (container.children.length > 0) {
      // Remove the last element
      container.lastChild.remove();
    } else {
      // Add new element
      addDynamicContent("Button Clicked");
    }
  });

  // Form submission adds content
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
// Exports for Jest Testing
// ==============================
module.exports = {
  addDynamicContent,
  removeDynamicContent,
  showError,
  clearError
};
