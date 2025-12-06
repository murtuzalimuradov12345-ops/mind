// Данные вопросов
const questions = [
    {
        level: "easy",
        text: "1. Какая планета ближе всего к Солнцу?",
        options: [
            { text: "A) Венера", correct: false },
            { text: "B) Земля", correct: false },
            { text: "C) Меркурий", correct: true },
            { text: "D) Марс", correct: false }
        ],
        explanation: "Меркурий — самая близкая к Солнцу планета в Солнечной системе."
    },
    {
        level: "easy",
        text: "2. Как называется наша галактика?",
        options: [
            { text: "A) Андромеда", correct: false },
            { text: "B) Млечный Путь", correct: true },
            { text: "C) Туманность Ориона", correct: false },
            { text: "D) Локальная Группа", correct: false }
        ],
        explanation: "Наша галактика называется Млечный Путь."
    },
    {
        level: "easy",
        text: "3. Что является естественным спутником Земли?",
        options: [
            { text: "A) Марс", correct: false },
            { text: "B) Луна", correct: true },
            { text: "C) Солнце", correct: false },
            { text: "D) Венера", correct: false }
        ],
        explanation: "Луна — единственный естественный спутник Земли."
    },
    {
        level: "easy",
        text: "4. Какая планета известна своими кольцами?",
        options: [
            { text: "A) Венера", correct: false },
            { text: "B) Сатурн", correct: true },
            { text: "C) Уран", correct: false },
            { text: "D) Нептун", correct: false }
        ],
        explanation: "Сатурн известен своими яркими и обширными кольцами."
    },
    {
        level: "easy",
        text: "5. Как называется звезда, вокруг которой вращается Земля?",
        options: [
            { text: "A) Сириус", correct: false },
            { text: "B) Бетельгейзе", correct: false },
            { text: "C) Солнце", correct: true },
            { text: "D) Полярная звезда", correct: false }
        ],
        explanation: "Земля вращается вокруг звезды под названием Солнце."
    },
    {
        level: "medium",
        text: "6. Как называется невесомость в космосе?",
        options: [
            { text: "A) Гравитация", correct: false },
            { text: "B) Микрогравитация", correct: true },
            { text: "C) Антигравитация", correct: false },
            { text: "D) Нулевая масса", correct: false }
        ],
        explanation: "Состояние невесомости в космосе называется микрогравитацией."
    },
    {
        level: "medium",
        text: "7. Какая планета самая большая в Солнечной системе?",
        options: [
            { text: "A) Сатурн", correct: false },
            { text: "B) Юпитер", correct: true },
            { text: "C) Уран", correct: false },
            { text: "D) Нептун", correct: false }
        ],
        explanation: "Юпитер — самая большая планета в Солнечной системе."
    },
    {
        level: "medium",
        text: "8. Как называется космический телескоп, сделавший тысячи снимков далёких галактик?",
        options: [
            { text: "A) Спитцер", correct: false },
            { text: "B) Хаббл", correct: true },
            { text: "C) Джеймс Уэбб", correct: false },
            { text: "D) Кеплер", correct: false }
        ],
        explanation: "Телескоп Хаббл сделал тысячи знаменитых снимков далёких галактик."
    },
    {
        level: "medium",
        text: "9. Как называются объекты, состоящие в основном из льда и пыли, имеющие хвост?",
        options: [
            { text: "A) Астероиды", correct: false },
            { text: "B) Кометы", correct: true },
            { text: "C) Метеориты", correct: false },
            { text: "D) Пульсары", correct: false }
        ],
        explanation: "Кометы состоят из льда, пыли и имеют хвост при приближении к Солнцу."
    },
    {
        level: "medium",
        text: "10. Как называется граница чёрной дыры, за которую ничто не может вырваться?",
        options: [
            { text: "A) Линия тьмы", correct: false },
            { text: "B) Гравитационный порог", correct: false },
            { text: "C) Горизонт событий", correct: true },
            { text: "D) Предел массы", correct: false }
        ],
        explanation: "Горизонт событий — это граница чёрной дыры, за которую ничто не может вырваться."
    },
    {
        level: "hard",
        text: "11. Как называется эффект, из-за которого свет меняет частоту в сильном гравитационном поле?",
        options: [
            { text: "A) Квантовое рассеяние", correct: false },
            { text: "B) Гравитационное линзирование", correct: false },
            { text: "C) Гравитационный красный сдвиг", correct: true },
            { text: "D) Эффект Доплера", correct: false }
        ],
        explanation: "Гравитационный красный сдвиг — это изменение частоты света в сильном гравитационном поле."
    },
    {
        level: "hard",
        text: "12. Какую форму имеет Вселенная согласно современным наблюдениям?",
        options: [
            { text: "A) Замкнутая", correct: false },
            { text: "B) Плоская", correct: true },
            { text: "C) Гиперболическая", correct: false },
            { text: "D) Фрактальная", correct: false }
        ],
        explanation: "Согласно современным наблюдениям, Вселенная имеет плоскую форму."
    },
    {
        level: "hard",
        text: "13. Как называется гипотетическая материя, которая не излучает свет, но влияет гравитационно?",
        options: [
            { text: "A) Тёмная материя", correct: true },
            { text: "B) Барионная материя", correct: false },
            { text: "C) Нейтринная материя", correct: false },
            { text: "D) Космическая пыль", correct: false }
        ],
        explanation: "Тёмная материя — это гипотетическая форма материи, которая не излучает свет, но оказывает гравитационное воздействие."
    },
    {
        level: "hard",
        text: "14. Как называется область космоса, заполненная горячим газом, оставшаяся после Большого взрыва?",
        options: [
            { text: "A) Межзвёздная среда", correct: false },
            { text: "B) Реликтовое излучение", correct: true },
            { text: "C) Протоплазменный фон", correct: false },
            { text: "D) Кварк-газ", correct: false }
        ],
        explanation: "Реликтовое излучение — это остаточное излучение от Большого взрыва, заполняющее всю Вселенную."
    },
    {
        level: "hard",
        text: "15. Что представляет собой «парадокс Ферми»?",
        options: [
            { text: "A) Противоречие между размерами звёзд", correct: false },
            { text: "B) Несовпадение орбит планет", correct: false },
            { text: "C) Несоответствие между вероятностью жизни во Вселенной и отсутствием её наблюдения", correct: true },
            { text: "D) Спор о возрасте Галактики", correct: false }
        ],
        explanation: "Парадокс Ферми — это несоответствие между высокой вероятностью существования внеземных цивилизаций и отсутствием наблюдаемых подтверждений их существования."
    }
];

// Предупреждения о сложности
const difficultyWarnings = {
    easy: {
        title: "Уровень 1 — Лёгкий",
        text: "Эти вопросы проверяют базовые знания о космосе и Солнечной системе."
    },
    medium: {
        title: "Уровень 2 — Средний", 
        text: "Эти вопросы требуют более глубоких знаний о космических явлениях и объектах."
    },
    hard: {
        title: "Уровень 3 — Сложный",
        text: "Эти вопросы проверяют знание сложных космических концепций и теорий."
    }
};

// Переменные состояния
let currentPage = 'cover';
let userAnswers = new Array(questions.length).fill(null);

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Настройка обработчиков событий
    document.getElementById('start-btn').addEventListener('click', startTest);
    document.getElementById('submit-btn').addEventListener('click', showResults);
    document.getElementById('restart-btn').addEventListener('click', restartTest);
    
    // Отображение обложки
    showPage('cover');
});

// Функция для отображения страницы
function showPage(pageId) {
    // Скрыть все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Показать нужную страницу
    document.getElementById(`${pageId}-page`).classList.add('active');
    currentPage = pageId;
    
    // Если показываем страницу теста, загружаем вопросы
    if (pageId === 'test') {
        loadQuestions();
    }
}

// Функция начала теста
function startTest() {
    showPage('test');
}

// Функция загрузки вопросов
function loadQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    let currentLevel = '';
    
    questions.forEach((question, index) => {
        // Добавляем предупреждение о сложности при смене уровня
        if (question.level !== currentLevel) {
            currentLevel = question.level;
            const warning = document.createElement('div');
            warning.className = `difficulty-warning ${question.level} fade-in`;
            warning.innerHTML = `
                <div class="warning-title">${difficultyWarnings[question.level].title}</div>
                <div class="warning-text">${difficultyWarnings[question.level].text}</div>
            `;
            container.appendChild(warning);
        }
        
        const questionElement = document.createElement('div');
        questionElement.className = 'question fade-in';
        questionElement.style.animationDelay = `${index * 0.1}s`;
        
        questionElement.innerHTML = `
            <div class="question-text">${question.text}</div>
            <div class="options">
                ${question.options.map((option, optionIndex) => `
                    <label class="option">
                        <input type="radio" name="question-${index}" value="${optionIndex}">
                        <span>${option.text}</span>
                    </label>
                `).join('')}
            </div>
            <div class="explanation">${question.explanation}</div>
        `;
        
        // Добавляем обработчики событий для радиокнопок
        const radioInputs = questionElement.querySelectorAll('input[type="radio"]');
        radioInputs.forEach(radio => {
            radio.addEventListener('change', function() {
                userAnswers[index] = parseInt(this.value);
                
                // Обновляем прогресс-бар
                updateProgressBar();
                
                // Показываем пояснение после выбора ответа
                const explanation = questionElement.querySelector('.explanation');
                explanation.style.display = 'block';
                
                // Добавляем плавное появление пояснения
                explanation.style.opacity = '0';
                setTimeout(() => {
                    explanation.style.transition = 'opacity 0.5s ease';
                    explanation.style.opacity = '1';
                }, 10);
            });
        });
        
        container.appendChild(questionElement);
    });
    
    // Инициализируем прогресс-бар
    updateProgressBar();
}

// Функция обновления прогресс-бара
function updateProgressBar() {
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    const progress = (answeredCount / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

// Функция показа результатов
function showResults() {
    // Проверяем, все ли вопросы отвечены
    const unanswered = userAnswers.filter(answer => answer === null).length;
    if (unanswered > 0) {
        alert(`Пожалуйста, ответьте на все вопросы. Осталось ${unanswered} вопросов.`);
        return;
    }
    
    // Подсчет результатов
    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
        if (questions[index].options[answer].correct) {
            correctAnswers++;
        }
    });
    
    const score = Math.round((correctAnswers / questions.length) * 100);
    
    // Определение уровня IQ
    let level, feedback;
    if (score >= 90) {
        level = "Гений космоса! 🚀";
        feedback = "Потрясающе! Ваши знания о космосе на высочайшем уровне. Вы настоящий эксперт в астрономии!";
    } else if (score >= 70) {
        level = "Космический исследователь 🌟";
        feedback = "Отличный результат! Вы хорошо разбираетесь в космических вопросах и можете смело называть себя знатоком астрономии.";
    } else if (score >= 50) {
        level = "Любитель космоса ✨";
        feedback = "Хороший результат! У вас есть базовые знания о космосе, но есть куда расти. Продолжайте изучать Вселенную!";
    } else {
        level = "Новичок в космосе 🌌";
        feedback = "Не расстраивайтесь! Космос — сложная тема. Это отличный повод начать изучать его больше!";
    }
    
    // Отображение результатов
    document.getElementById('score').textContent = `${score}%`;
    document.getElementById('level').textContent = level;
    document.getElementById('feedback').textContent = feedback;
    
    // Показываем страницу результатов
    showPage('result');
}

// Функция перезапуска теста
function restartTest() {
    // Сбрасываем ответы
    userAnswers = new Array(questions.length).fill(null);
    
    // Возвращаемся к обложке
    showPage('cover');
}