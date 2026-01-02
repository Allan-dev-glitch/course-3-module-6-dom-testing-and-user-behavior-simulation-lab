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
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addBtn");
  const inputField = document.getElementById("itemInput");

  if (!addButton || !inputField) {
    displayError("Required elements not found.");
    return;
  }

  addButton.addEventListener("click", () => {
    const value = inputField.value.trim();

    if (value === "") {
      displayError("Input cannot be empty.");
      return;
    }

    addItem(value);
    inputField.value = "";
  });
});


// ==============================
// Step 2: DOM Manipulation Functions
// ==============================

// Add a new item to the list
function addItem(text) {
  const list = document.getElementById("itemList");

  if (!list) {
    displayError("List element not found.");
    return;
  }

  const li = createElement("li", { class: "list-item" });
  li.textContent = text;

  const removeBtn = createElement("button", { class: "remove-btn" });
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(removeBtn);
  list.appendChild(li);
}


// ==============================
// Step 3: Error Handling
// ==============================

// Display error messages in the DOM
function displayError(message) {
  let errorDiv = document.getElementById("error");

  if (!errorDiv) {
    errorDiv = createElement("div", { id: "error" });
    document.body.appendChild(errorDiv);
  }

  errorDiv.textContent = message;
  errorDiv.style.color = "red";
}


// ==============================
// Step 4: Reusable Utilities
// ==============================

// Utility function to create elements with attributes
function createElement(tag, attributes = {}) {
  const element = document.createElement(tag);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  return element;
}


// Export functions for Jest testing
module.exports = {
  addItem,
  displayError,
  createElement
};
