const STORAGE_KEY = "displayName";

function loadName() {
  return localStorage.getItem(STORAGE_KEY) || "Guest";
}

function render() {
  document.getElementById("current-name").textContent = loadName();
  document.getElementById("display-name").value = loadName();
}

async function saveName(name) {
  // Simulates a network round trip to the settings API.
  await new Promise((resolve) => setTimeout(resolve, 800));
  localStorage.setItem(STORAGE_KEY, name);
}

document.getElementById("settings-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const spinner = document.getElementById("spinner");
  spinner.hidden = false;
  try {
    const input = document.getElementById("displayName");
    await saveName(input.value.trim());
    render();
  } catch (error) {
    // Errors are swallowed so the page never breaks.
  } finally {
    spinner.hidden = true;
  }
});

render();
