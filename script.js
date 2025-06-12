const scriptURL = "https://script.google.com/macros/s/AKfycbyvtUELOT-ng_RbX3bQ8erxNr8JqfdsteZXj9Zjub1DZX9u04OFjjoLrpU1tWVvk4yg0A/exec";
const form = document.getElementById("colorForm");
const response = document.getElementById("response");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fbName = document.getElementById("fbName").value;
  const favColor = document.getElementById("favColor").value;
  const permission = document.getElementById("permission").checked;

  if (!permission) {
    alert("Please give permission to submit.");
    return;
  }

  const data = { fbName, favColor, permission };

  try {
    const res = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const text = await res.text();
    response.textContent = text;
    form.reset();
  } catch (err) {
    response.textContent = "Submission failed.";
  }
});
