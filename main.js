document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.querySelector(".grid-container");
    const resetButton = document.getElementById("reset-button");
    const popup = document.getElementById("popup");
    const confirmButton = document.getElementById("confirm-button");
    const inputNumber = document.getElementById("input-number");
    const eraserButton = document.getElementById("eraser-button");
  
    let eraserActive = false;
  
    resetButton.addEventListener("click", function() {
      popup.style.display = "block"; // Show the popup when the reset button is clicked
    });
  
    confirmButton.addEventListener("click", function() {
      const gridSize = parseInt(inputNumber.value);
  
      if (gridSize > 0 && gridSize <= 100) {
        // Remove old grid
        while (gridContainer.firstChild) {
          gridContainer.firstChild.remove();
        }
  
        // Create new grid
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        for (let i = 0; i < gridSize * gridSize; i++) {
          const div = document.createElement("div");
          div.addEventListener("mouseover", function() {
            if (eraserActive) {
              this.classList.remove("hovered"); // Remove the hover effect class
            } else if (!this.classList.contains("hovered")) {
              this.classList.add("hovered"); // Apply the hover effect class
            }
          });
          gridContainer.appendChild(div);
        }
  
        popup.style.display = "none"; // Hide the popup
      } else {
        alert("Please enter a valid number between 1 and 100.");
      }
    });
  
    eraserButton.addEventListener("click", function() {
      eraserActive = !eraserActive;
      eraserButton.classList.toggle("active");
    });
  });
  