# Розыгрыш GTA 6

Сайт розыгрыша копии игры Grand Theft Auto VI.

## Развертывание на Vercel

### Способ 1: Через Vercel CLI

1. Установите Vercel CLI:
```bash
npm install -g vercel
```

2. Войдите в аккаунт Vercel:
```bash
vercel login
```

3. Разверните проект:
```bash
vercel
```

4. Для продакшн деплоя:
```bash
vercel --prod
```

### Способ 2: Через GitHub + Vercel Dashboard

1. Создайте репозиторий на GitHub
2. Загрузите все файлы проекта в репозиторий
3. Зайдите на [vercel.com](https://vercel.com)
4. Нажмите "Import Project"
5. Выберите ваш GitHub репозиторий
6. Нажмите "Deploy"

Vercel автоматически определит настройки и развернет сайт.

### Способ 3: Прямая загрузка через Vercel Dashboard

1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите "Add New" → "Project"
3. Перетащите папку проекта в окно браузера
4. Нажмите "Deploy"

## Структура проекта

```
gtasit/
├── index.html              # Главная страница
├── style.css               # Стили
├── script.js               # JavaScript
├── photo_553590.jpg        # Фоновое изображение
├── support.html            # Страница поддержки
├── privacy.html            # Политика конфиденциальности
├── terms.html              # Пользовательское соглашение
├── oferta.html             # Оферта
├── vercel.json             # Конфигурация Vercel
└── README.md               # Этот файл
```

## Особенности

- Адаптивный дизайн
- Таймер обратного отсчёта до 19.11.2026
- Бегущая строка с email участников
- Счётчик участников
- Уведомление о cookies
- Полный пакет юридических документов

## Технологии

- HTML5
- CSS3 (с анимациями и backdrop-filter)
- Vanilla JavaScript (без фреймворков)
- LocalStorage для хранения согласия cookies

## Поддержка браузеров

- Chrome/Edge (последние версии)
- Firefox (последние версии)
- Safari (последние версии)
- Мобильные браузеры

## Лицензия

Все права защищены © 2026
