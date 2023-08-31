document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("card-container");
  
    // Fetch JSON data from external file
    fetch("data.json")
      .then(response => response.json())
      .then(jsonData => {
        // Loop through JSON data and create cards
        for (const cardData of jsonData) {
          const card = document.createElement("div");
          card.className = "card mb-3";
  
          const cardBody = document.createElement("div");
          cardBody.className = "card-body";
  
          const cardTitle = document.createElement("h5");
          cardTitle.className = "card-title";
          cardTitle.textContent = cardData.title;
  
          const cardContent = document.createElement("p");
          cardContent.className = "card-text";
          cardContent.textContent = cardData.content;
  
          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardContent);
  
          card.appendChild(cardBody);
  
          cardContainer.appendChild(card);
        }
      })
      .catch(error => {
        console.error("Error fetching JSON data:", error);
      });
  });
  