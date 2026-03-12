/* Чтение параметра из URL */
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

window.onload = function() {
    const gameName = getQueryParam('game');  // Получаем название игры из URL
    if (gameName) {
        document.getElementById('game-name').value = gameName;  // Отображаем название игры в поле
    }
};
/* Открытие модального окна */
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

/* Закрытие модального окна */
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

/* Обработка формы покупки */
document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отключаем стандартное поведение формы

    const email = document.getElementById('email').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // Валидация данных
    if (!validateEmail(email)) {
        // Выводим ошибку в консоль и показываем ошибку в модальном окне
        console.log("Ошибка: Некорректный Email.");
        document.getElementById('modalMessage').textContent = "Некорректный Email.";
        openModal('successModal');
        return;
    }

    // Выводим данные в консоль
    console.log("Email: " + email);
    console.log("Способ оплаты: " + paymentMethod);

    // Показываем сообщение об успешной отправке
    document.getElementById('modalMessage').textContent = "Данные успешно отправлены! Спасибо за покупку.";
    openModal('successModal');
});

// Валидация Email
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}