
function submitSurvey() {
    const dinosaur = document.querySelector('input[name="dinosaur"]:checked');
    const interests = document.querySelectorAll('input[name="interest"]:checked');
    const feedback = document.getElementById('feedback').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!dinosaur || interests.length === 0 || feedback === '') {
        errorMessage.textContent = 'Будь ласка, заповніть усі поля форми!';
        return;
    }

    errorMessage.textContent = '';

    const selectedInterests = Array.from(interests).map(interest => interest.value).join(', ');
    const result = `Динозавр: ${dinosaur.value}\nАспекти: ${selectedInterests}\nВідгук: ${feedback}`;

    const messageBox = document.getElementById('userMessage');
    messageBox.value = result;
    alert('Дані успішно збережено у форму повідомлення!');
}

function sendMessage() {
    const message = document.getElementById('userMessage').value.trim();

    if (message === '') {
        alert('Будь ласка, заповніть текст повідомлення перед відправленням!');
        return;
    }

    const mailtoLink = `mailto:My_Support@mail.ru?subject=Повідомлення&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}
