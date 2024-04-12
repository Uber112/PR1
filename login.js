document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Получаем данные из localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Проверяем существование пользователя с введенными данными
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Сохраняем данные пользователя в localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Перенаправляем на страницу блокнота
        window.location.href = 'notes.html';
    } else {
        alert('Неверное имя пользователя или пароль');
    }
});