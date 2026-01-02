/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const {
  addDynamicContent,
  showError,
  clearError
} = require("./index");

beforeEach(() => {
  const html = fs.readFileSync(
    path.resolve(__dirname, "index.html"),
    "utf8"
  );
  document.documentElement.innerHTML = html;
});

test("adds content to the DOM when button is clicked", () => {
  addDynamicContent("Test Click");
  const content = document.getElementById("dynamic-content");
  expect(content.textContent).toContain("Test Click");
});

test("displays error message in the DOM", () => {
  showError("Error occurred");
  const errorDiv = document.getElementById("error-message");
  expect(errorDiv.textContent).toBe("Error occurred");
});

test("clears error message", () => {
  showError("Error occurred");
  clearError();
  const errorDiv = document.getElementById("error-message");
  expect(errorDiv.textContent).toBe("");
});
