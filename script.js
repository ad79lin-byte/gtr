// Таймер обратного отсчёта до 19.11.2026
const targetDate = new Date('2026-11-19T00:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Обновляем таймер каждую секунду
setInterval(updateTimer, 1000);
updateTimer();

// Генерация случайных email-адресов
const emailDomains = [
    '@gmail.com', '@yandex.ru', '@mail.ru', '@outlook.com', '@ya.ru', '@rambler.ru',
    '@hotmail.com', '@icloud.com', '@protonmail.com', '@yahoo.com', '@inbox.ru',
    '@bk.ru', '@list.ru', '@internet.ru', '@aol.com', '@zoho.com', '@gmx.com',
    '@tutanota.com', '@fastmail.com', '@cock.li', '@pm.me'
];

const emailPrefixes = [
    'alex', 'maria', 'ivan', 'kate', 'dmitry', 'anna', 'max', 'olga',
    'sergey', 'elena', 'andrey', 'natalia', 'victor', 'julia', 'roman',
    'svetlana', 'igor', 'marina', 'pavel', 'daria', 'artem', 'tatiana',
    'nikita', 'anastasia', 'evgeny', 'victoria', 'kirill', 'ekaterina',
    'oleg', 'irina', 'mikhail', 'ludmila', 'denis', 'alexandra', 'anton',
    'oksana', 'konstantin', 'vera', 'vadim', 'galina', 'stanislav', 'nadezhda',
    'ruslan', 'lyubov', 'yuri', 'tamara', 'alexey', 'nina', 'ilya', 'svetlana',
    'boris', 'valentina', 'georgy', 'raisa', 'timur', 'larisa', 'vlad', 'maya'
];

function maskEmail(email) {
    const [username, domain] = email.split('@');
    // Показываем первые 2 буквы, остальное скрываем звёздочками
    const maskedUsername = username.substring(0, 2) + '*'.repeat(Math.max(3, username.length - 2));
    return `${maskedUsername}@${domain}`;
}

function generateRandomEmail() {
    const prefix = emailPrefixes[Math.floor(Math.random() * emailPrefixes.length)];
    const numbers = Math.floor(Math.random() * 999);
    const domain = emailDomains[Math.floor(Math.random() * emailDomains.length)];
    return `${prefix}${numbers}${domain}`;
}

// Создаём горизонтальную бегущую строку с почтами
function initializeEmailsTicker() {
    const track = document.getElementById('emailsTrack');
    
    // Создаём достаточно почт для плавной бесконечной прокрутки
    const emailsList = [];
    for (let i = 0; i < 50; i++) {
        emailsList.push(generateRandomEmail());
    }
    
    // Дублируем список дважды для идеально бесшовной анимации
    [...emailsList, ...emailsList].forEach(email => {
        const emailDiv = document.createElement('div');
        emailDiv.className = 'email-item';
        emailDiv.textContent = maskEmail(email);
        track.appendChild(emailDiv);
    });
}

// НЕ обновляем почты во время анимации, чтобы избежать дёрганий
// Почты статичны для плавной бесконечной прокрутки
function updateEmailsTicker() {
    // Оставляем пустой функцию для совместимости
    // Обновление не требуется для плавной анимации
}

// Счётчик участников - постепенное увеличение
let currentCount = 150;
const countElement = document.getElementById('participantsCount');

function updateParticipantsCount() {
    setInterval(() => {
        // Увеличиваем на 1 каждые 8-15 секунд (случайно)
        const randomDelay = Math.random() * 7000 + 8000;
        setTimeout(() => {
            currentCount++;
            countElement.textContent = currentCount;
            // Небольшая анимация при обновлении
            countElement.style.transform = 'scale(1.2)';
            setTimeout(() => {
                countElement.style.transform = 'scale(1)';
            }, 200);
        }, randomDelay);
    }, 15000); // Проверяем каждые 15 секунд
}

// Модальное окно - теперь не используется, но оставим код на случай
const modal = document.getElementById('modal');
const span = document.getElementsByClassName('close')[0];
const form = document.getElementById('participateForm');

if (span) {
    span.onclick = function() {
        modal.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

if (form) {
    form.onsubmit = function(e) {
        e.preventDefault();
        const email = document.getElementById('emailInput').value;
        
        alert('Поздравляем! Вы успешно зарегистрированы в розыгрыше GTA 6! Следите за результатами 19 ноября 2026 года.');
        
        modal.style.display = 'none';
        document.getElementById('emailInput').value = '';
    }
}

// Cookie Notice
function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        const cookieNotice = document.getElementById('cookieNotice');
        if (cookieNotice) {
            setTimeout(() => {
                cookieNotice.classList.add('show');
            }, 1000);
        }
    }
}

const acceptCookiesBtn = document.getElementById('acceptCookies');
if (acceptCookiesBtn) {
    acceptCookiesBtn.onclick = function() {
        localStorage.setItem('cookieConsent', 'true');
        const cookieNotice = document.getElementById('cookieNotice');
        cookieNotice.style.animation = 'slideDown 0.4s ease-out';
        setTimeout(() => {
            cookieNotice.style.display = 'none';
        }, 400);
    }
}

// Добавляем анимацию для скрытия
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Инициализация при загрузке страницы
window.onload = function() {
    initializeEmailsTicker();
    // updateEmailsTicker(); // Убрали обновление для плавности
    updateParticipantsCount();
    checkCookieConsent();
}
