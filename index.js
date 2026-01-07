// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

// ==============================
// Step 1: Simulate User Behavior
// ==============================

// Add event listeners after DOM loads
// ==============================
// DOM Ready
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("itemForm");
  const addButton = document.getElementById("addBtn");
  const inputField = document.getElementById("itemInput");
  const list = document.getElementById("itemList");
  const errorDiv = document.getElementById("error");

  // ------------------------------
  // Form Submission
  // ------------------------------
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = inputField.value.trim();

    if (value === "") {
      displayError("Input cannot be empty");
      return;
    }

    clearError();
    addItem(value);
    inputField.value = "";
  });

  // ------------------------------
  // Button Click DOM Update
  // ------------------------------
  addButton.addEventListener("click", () => {
    document.body.setAttribute("data-clicked", "true");
  });
});

// ==============================
// Add Item to DOM
// ==============================
function addItem(text) {
  const list = document.getElementById("itemList");

  const li = createElement("li");
  li.textContent = text;

  const removeBtn = createElement("button");
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(removeBtn);
  list.appendChild(li);
}

// ==============================
// Error Handling
// ==============================
function displayError(message) {
  const errorDiv = document.getElementById("error");
  errorDiv.textContent = message;
  errorDiv.style.color = "red";
}

function clearError() {
  const errorDiv = document.getElementById("error");
  errorDiv.textContent = "";
}

// ==============================
// Utility
// ==============================
function createElement(tag) {
  return document.createElement(tag);
}

module.exports = {
  addItem,
  displayError,
  createElement
};
