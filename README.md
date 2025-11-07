<!DOCTYPE html>
<html>
<head>
    <title>Медицинский Сервис - React приложение</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2c3e50;
            border-bottom: 3px solid #e74c3c;
            padding-bottom: 10px;
        }
        h2 {
            color: #34495e;
            margin-top: 30px;
        }
        h3 {
            color: #7f8c8d;
        }
        .structure {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            font-family: monospace;
            white-space: pre;
            overflow-x: auto;
        }
        .feature-list {
            margin-left: 20px;
        }
        .feature-list li {
            margin-bottom: 8px;
        }
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 15px 0;
        }
        .tech-item {
            background: #e74c3c;
            color: white;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 14px;
        }
        .commands {
            background: #2c3e50;
            color: white;
            padding: 15px;
            border-radius: 5px;
            font-family: monospace;
        }
        .accounts-table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }
        .accounts-table th,
        .accounts-table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }
        .accounts-table th {
            background: #34495e;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🏥 Медицинский Сервис - React приложение</h1>
        
        <p>React приложение для поиска и записи на медицинские услуги с системой авторизации.</p>

        <h2>📁 Структура проекта</h2>
        <div class="structure">
src/
├── components/
│   ├── ui/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── Card/
│   └── layout/
│       └── Header/
├── pages/
│   ├── MainPage/
│   ├── Profile/
│   └── Contacts/
├── store/
│   ├── authSlice.ts
│   └── index.ts
├── types/
│   └── index.ts
├── data/
│   └── data.json
└── hooks/
    └── useLogout.ts
        </div>

        <h2>🚀 Функциональность</h2>
        <ul class="feature-list">
            <li><strong>Система авторизации</strong> с валидацией данных</li>
            <li><strong>Каталог медицинских услуг</strong> в виде карточек</li>
            <li><strong>Адаптивный дизайн</strong> для мобильных и планшетов</li>
            <li><strong>Защищенные маршруты</strong> для личного кабинета</li>
            <li><strong>Модальное окно</strong> для входа в систему</li>
        </ul>

        <h2>🛠 Технологии</h2>
        <div class="tech-stack">
            <span class="tech-item">React 18</span>
            <span class="tech-item">TypeScript</span>
            <span class="tech-item">Redux Toolkit</span>
            <span class="tech-item">React Router DOM</span>
            <span class="tech-item">CSS3</span>
            <span class="tech-item">LocalStorage</span>
        </div>

        <h2>🚀 Быстрый старт</h2>
        <div class="commands">
npm install<br>
npm start
        </div>

        <h2>👤 Тестовые аккаунты</h2>
        <table class="accounts-table">
            <thead>
                <tr>
                    <th>Логин</th>
                    <th>Пароль</th>
                    <th>Имя пользователя</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>user1</td>
                    <td>password123</td>
                    <td>Иван Петров</td>
                </tr>
                <tr>
                    <td>user2</td>
                    <td>password123</td>
                    <td>Мария Сидорова</td>
                </tr>
            </tbody>
        </table>

        <h2>🎯 Особенности реализации</h2>
        <h3>Компонентный подход</h3>
        <ul class="feature-list">
            <li>Модульная структура компонентов</li>
            <li>Переиспользуемые UI элементы</li>
            <li>Props typing с TypeScript</li>
        </ul>

        <h3>Адаптивный дизайн</h3>
        <ul class="feature-list">
            <li>Mobile-first подход</li>
            <li>Breakpoints: 768px (планшеты), 1024px (десктоп)</li>
            <li>Гибкая сетка карточек услуг</li>
        </ul>

        <h3>Безопасность</h3>
        <ul class="feature-list">
            <li>Валидация на клиенте и сервере</li>
            <li>Защита маршрутов от неавторизованного доступа</li>
            <li>Безопасное хранение данных в localStorage</li>
        </ul>
    </div>
</body>
</html>