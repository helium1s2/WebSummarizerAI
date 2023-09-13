const urlInput = document.getElementById("urlInput");
const analyzeButton = document.getElementById("analyzeButton");
const resultContainer = document.getElementById("resultContainer");

analyzeButton.addEventListener("click", analyzeUrl);

async function analyzeUrl() {
  const url = urlInput.value;
  if (!url) {
    alert("Please enter a URL");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (response.ok) {
      const data = await response.json();
      resultContainer.innerHTML = data.companyDescription;
    } else {
      alert("Error: Unable to analyze the URL");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error: Unable to analyze the URL");
  }
}

