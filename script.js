const reactions = [
  { equation: '2H₂ + O₂ → 2H₂O', answer: 2 },
  { equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O', answer: 1 },
  { equation: '2H₂ + O₂ → 2H₂O', answer: 2 },
  { equation: '4NH₃ + 5O₂ → 4NO + 6H₂O', answer: 8 },
  // Tambahkan pe: 2 mrtanyaan dan jawaban lainnya di sini
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
