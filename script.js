const reactions = [
  { equation: 'Massa molar asam sulfat (H2SO4) adalah sekitar 98 g/mol. Berapa massa dari 0,5 mol asam sulfat ?', answer: 49 },
  { equation: 'Massa molar glukosa (C6H12O6) adalah sekitar 180 g/mol. Berapa massa dari 2 mol glukosa ?', answer: 360 },
  { equation: 'Massa molar hidrogen klorida (HCl) adalah sekitar 36,5 g/mol. Berapa massa dari 4 mol hidrogen klorida ?', answer: 146 },
  { equation: 'Massa molar karbon dioksida (CO2) adalah sekitar 44 g/mol. Berapa massa dari 1,5 mol karbon dioksida ?', answer: 66 },
  { equation: ' Massa molar air (H2O) adalah sekitar 18 g/mol. Berapa massa dari 5 mol air ?', answer: 90 },
  { equation: ' Massa molar magnesium sulfat (MgSO4) adalah sekitar 120 g/mol. Berapa massa dari 0,3 mol magnesium sulfat ?', answer: 36 },

  // Tambahkan pe: 2 mrtanyaan dan jawaban lainnya di sini

  ,
];

let currentReactionIndex;

function getRandomReaction() {
  currentReactionIndex = Math.floor(Math.random() * reactions.length);
  const reaction = reactions[currentReactionIndex];
  document.getElementById('questionText').textContent = reaction.equation;
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('userAnswer').value);
  const correctAnswer = reactions[currentReactionIndex].answer;

  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Selamat! Jawaban benar.';
    document.getElementById('result').style.color = 'green';
  } else {
    document.getElementById('result').textContent = 'Maaf, jawaban salah. Coba lagi.';
    document.getElementById('result').style.color = 'red';
  }

  document.getElementById('userAnswer').value = '';
  getRandomReaction();
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('checkButton').addEventListener('click', checkAnswer);
  getRandomReaction();
});
