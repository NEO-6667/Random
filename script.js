function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.toLowerCase();
    const correctAnswer = 'baigan'; // Customize the correct answer

    const resultElement = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        resultElement.style.color = '#4CAF50';
        resultElement.textContent = 'Correct! Momo khane chalogi mere saath👉👈';
    } else {
        resultElement.style.color = '#FF0000';
        resultElement.textContent = 'Arriii galat now sit on my face👉👈';
    }
}
