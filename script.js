// script.js

const container = document.getElementById('container');
const resizeBtn = document.getElementById('resizeBtn');

// Function to create the grid
function createGrid(size) {
  // Remove any existing divs inside the container
  container.innerHTML = '';
  
  // Calculate the size of each grid item
  const squareSize = 960 / size;

  // Create a grid of 'size x size' divs
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    // Add hover effect to change color on mouse over
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'blue';
    });

    container.appendChild(div);
  }
}

// Initial 16x16 grid
createGrid(16);

// Function to prompt the user for a new grid size
function resizeGrid() {
  let newSize = prompt('Enter new grid size (max 100):');

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
      createGrid(newSize);
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  }
}

// Event listener for the resize button
resizeBtn.addEventListener('click', resizeGrid);
