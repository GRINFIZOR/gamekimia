let reactions = [
  { equation: 'Massa molar asam sulfat (H2SO4) adalah sekitar 98 g/mol. Berapa massa dari 0,5 mol asam sulfat ?', answer: 49 },
  { equation: 'Massa molar glukosa (C6H12O6) adalah sekitar 180 g/mol. Berapa massa dari 2 mol glukosa ?', answer: 360 },
  { equation: 'Massa molar hidrogen klorida (HCl) adalah sekitar 36,5 g/mol. Berapa massa dari 4 mol hidrogen klorida ?', answer: 146 },
  { equation: 'Massa molar karbon dioksida (CO2) adalah sekitar 44 g/mol. Berapa massa dari 1,5 mol karbon dioksida ?', answer: 66 },
  { equation: ' Massa molar air (H2O) adalah sekitar 18 g/mol. Berapa massa dari 5 mol air ?', answer: 90 },
  { equation: ' Massa molar magnesium sulfat (MgSO4) adalah sekitar 120 g/mol. Berapa massa dari 0,3 mol magnesium sulfat ?', answer: 36 },
];

let currentReactionIndex;
let currentReaction;
let score = 0;

function getRandomReaction() {
  if (reactions.length > 0 && typeof reactions !== 'undefined') {
    // ketika masih ada soal
    currentReactionIndex = Math.floor(Math.random() * reactions.length);
    currentReaction = reactions[currentReactionIndex];
    document.getElementById('questionText').textContent = currentReaction.equation;

    // hapus soal yang telah dijawab benar agar tidak dimunculkan lagi
    reactions.splice(currentReactionIndex, 1);
  } else {
    // ketika soalnya sudah habis
    console.log('heree');
    document.getElementById('questionText').textContent = 'Selamat Anda telah menyelesaikan semua';
    document.getElementById('questionText').style.color = 'green';
    document.getElementById('questionText').style.fontSize = '24px';
  }
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('userAnswer').value);
  const correctAnswer = currentReaction.answer;

  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Selamat! Jawaban benar.';
    document.getElementById('result').style.color = 'green';

    // menambahkan score
    score++;
  } else {
    document.getElementById('result').textContent = 'Maaf, jawaban salah. Coba lagi.';
    document.getElementById('result').style.color = 'red';
  }

  document.getElementById('userAnswer').value = '';
  document.getElementById('score').textContent = `Score: ${score}`;
  getRandomReaction();
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('checkButton').addEventListener('click', checkAnswer);
  getRandomReaction();
});
