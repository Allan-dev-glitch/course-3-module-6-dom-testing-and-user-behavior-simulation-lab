const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
const { setupDOM } = require("../script");

describe("DOM Testing Lab", () => {
  let dom;
  let document;

  beforeEach(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf8"
    );

    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;

    global.window = dom.window;
    global.document = document;

    setupDOM();
  });

  test("button exists in the DOM", () => {
    const button = document.getElementById("clickBtn");
    expect(button).not.toBeNull();
  });

  test("button click updates the message text", () => {
    const button = document.getElementById("clickBtn");
    const message = document.getElementById("message");

    button.click();
    expect(message.textContent).toBe("Button Clicked!");
  });

  test("form and input exist in the DOM", () => {
    expect(document.getElementById("userForm")).not.toBeNull();
    expect(document.getElementById("username")).not.toBeNull();
  });

  test("form submission adds a new list item", () => {
    const input = document.getElementById("username");
    const form = document.getElementById("userForm");
    const list = document.getElementById("list");

    input.value = "Alice";
    form.dispatchEvent(new dom.window.Event("submit"));

    expect(list.children.length).toBe(1);
    expect(list.children[0].textContent).toBe("Alice");
  });
});
