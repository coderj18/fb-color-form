const scriptURL = "https://script.google.com/macros/s/AKfycbza_NzWYiz5GFfsFZa-5h14nlPTdbB1ZtRLvz2glYYIQEPJVxOFrbooqOjG4yHvAwuz/exec";
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
