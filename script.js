//  Generazione delle celle 
//  Iniziamo il conteggio da 1
//  Quando l'utente clicca su una cella, chiamiamo la funzione handleClick() 
//  La classe "clicked" verrà aggiunta alla cella cliccata 
//  Il testo all'interno della cella sarà il numero progressivo 
//  Ad esempio, la prima cella avrà il testo "1", la seconda "2", ecc. 
//  Una cella cliccata avrà anche un event listener che richiama la funzione handleCellClick 
//  Passiamo il numero della cella cliccata come parametro alla funzione 
//  In console verrà emesso un messaggio con il numero della cella cliccata 
//  Si prega di aprire la console del browser per vedere i messaggi 
//  Fai clic su una cella per vedere l'effetto 
//  I numeri andranno da 1 a 100 

const rows = 10;
const cols = 10;
const totalCells = rows * cols;
const totalBombs = 10;
let bombs = [];
let revealedCells = 0;
let score = 0;

function initializeGame() {
  bombs = [];
  revealedCells = 0;
  score = 0;
  generateBombs();
  createGrid();
}

function generateBombs() {
  while (bombs.length < totalBombs) {
    const bombPosition = Math.floor(Math.random() * totalCells);
    if (!bombs.includes(bombPosition)) {
      bombs.push(bombPosition);
    }
  }
}

function revealCell(cellNum) {
  const cell = document.getElementById(`cell-${cellNum}`);
  if (bombs.includes(cellNum)) {
    cell.style.backgroundColor = 'red';
    
    initializeGame();
  } else {
    cell.style.backgroundColor = 'blue';
    cell.removeEventListener('click', cell);
    score++;
    revealedCells++;
    document.getElementById('score').textContent = score;
    if (revealedCells === totalCells - totalBombs) {
      alert(`Complimenti! Hai vinto con un punteggio di ${score}.`);
      initializeGame();
    }
  }
}

function createGrid() {
  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = '';
  for (let i = 0; i <rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cellNum = i * cols + j;
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.id = `cell-${cellNum}`;
      cell.addEventListener('click', () => revealCell(cellNum));
      gridContainer.appendChild(cell);
    }
    
  }
}

// function createGameGrid() {
//   const gridContainer = document.querySelector('.grid-container');

//   for (let i = 1; i <= 100; i++) {
//     const cell = document.createElement('div');
//     cell.classList.add('grid-item');
//     cell.textContent = i;

//     // Aggiungi un event listener per gestire il clic sulla cella
//     cell.addEventListener('click', function() {
//       // Rimuovi la classe "clicked" da tutte le celle
//       document.querySelectorAll('.grid-item').forEach(cell => {
//         cell.classList.remove('clicked');
//       });
//       // Aggiungi la classe "clicked" solo alla cella cliccata
//       this.classList.add('clicked');
//       // Chiama la funzione per gestire il clic sulla cella
//       handleCellClick(i);
//     });

//     gridContainer.appendChild(cell);
//   }
// }

function startGame() {
  initializeGame();
}
  