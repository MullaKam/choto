<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Мини-форум</title>
<style>
    #messages {
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
        height: 200px;
        overflow-y: scroll;
    }
</style>
</head>
<body>

<div id="messages"></div>

<form id="messageForm">
    <input type="text" id="messageInput" placeholder="Введите ваше сообщение" />
    <button type="submit">Отправить</button>
</form>

<script>
// Функция для добавления сообщения в область сообщений
function addMessage() {
    var input = document.getElementById('messageInput');
    var message = input.value.trim();
  
    if (message) {
        var messagesContainer = document.getElementById('messages');
        var newMessageElem = document.createElement('div');
        newMessageElem.textContent = message;

        messagesContainer.appendChild(newMessageElem);

        input.value = ''; // Очищаем поле ввода
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Прокрутка к последнему сообщению
    }
}

// Обработчик отправки формы
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    addMessage();
});
</script>

</body>
</html>
