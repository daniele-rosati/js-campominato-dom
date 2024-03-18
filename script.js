
//  Quando l'utente clicca su una cella, chiamiamo la funzione handleClick() 

//  Il testo all'interno della cella sarà il numero progressivo 

//  Una cella cliccata avrà anche un event listener che richiama la funzione handleCellClick 
//  Passiamo il numero della cella cliccata come parametro alla funzione 
//  In console verrà emesso un messaggio con il numero della cella cliccata 
 

//  I numeri andranno da 1 a 100 

// inizializzo le variabili necessarie e creo gli arrey
const rows = 10;
const cols = 10;
const totalCells = rows * cols;
const totalBombs = 10;
let bombs = [];
let revealedCells = 0;
let score = 0;

//  Generazione delle celle 
//  Iniziamo il conteggio da 1
function initializeGame() {
  bombs = [];
  revealedCells = 0;
  score = 0;
  generateBombs();
  createGrid();
}
// generiamo le bombe in maniera random 
function generateBombs() {
  while (bombs.length < totalBombs) {
    const bombPosition = Math.floor(Math.random() * totalCells);
    if (!bombs.includes(bombPosition)) {
      bombs.push(bombPosition);
    }
  }
}
// qui faccio una funzione che mi permetta di rivelare la cella e se nel caso on c'è la bomba diventa blu in caso contrario diventa rossa e il gioco si interrompe
function revealCell(cellNum) {
  const cell = document.getElementById(`cell-${cellNum}`);
  if (bombs.includes(cellNum)) {
    cell.style.backgroundColor = 'red'; // qui non va il colore rosso nella cella ma si interrompe
    initializeGame();
  } else {
    cell.style.backgroundColor = 'blue';
    cell.removeEventListener('click', cell);
    score++;
    revealedCells++; // qui creo lo score che mi permette di vedere quanto ho fatto di punteggio, va di 1 in 1 quindi se prendo 2 caselle giuste i punti fatti saranno di 2 punti totali, se invece perdo si azzera
    document.getElementById('score').textContent = score;
    if (revealedCells === totalCells - totalBombs) {
      alert(`Complimenti! Hai vinto con un punteggio di ${score}.`);
      initializeGame();
    }
  }
}

// creo la tabella con le varie colonne e righe

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

// ▼ vecchia funzione che non andava correttamente e che purtroppo ho dovuto rifare da capo 🫠😭

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
  