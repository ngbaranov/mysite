# Мой сайт‑визитка (GitHub Pages)

Статический сайт‑портфолио Python‑разработчика. Технологии: чистые HTML/CSS/JS, тёмная/светлая тема, фильтры и поиск по проектам.

## Структура
- `index.html` — главная страница
- `assets/css/style.css` — стили
- `assets/js/main.js` — логика: тема, фильтры, поиск
- `assets/img/*` — изображения (favicon, аватар, OpenGraph)

## Как запустить локально
Требуется Python 3.

```bash
# из корня проекта
python3 -m http.server 8080 --directory $(pwd)
# откройте в браузере
xdg-open http://127.0.0.1:8080/
```

## Настройка контактов и ссылок
Откройте `index.html`:
- найдите элементы с id: `ghLink`, `tgLink`, `mailLink` и задайте свои URL/email
- в секции «Контакты» замените плейсхолдеры на свои

Либо отредактируйте значения по умолчанию в `assets/js/main.js`:
```js
const GH = 'https://github.com/your-username';
const TG = 'https://t.me/your_telegram';
const MAIL = 'mailto:you@example.com';
```

## Публикация на GitHub Pages
Вариант A — юзер-сайт:
1. Создайте репозиторий с именем `USERNAME.github.io`
2. Скопируйте все файлы проекта в корень репозитория
3. Закоммитьте и запушьте в ветку `main`
4. Откройте `https://USERNAME.github.io`

Вариант B — проектная страница:
1. В любом репозитории зайдите в Settings → Pages
2. Source: `Deploy from a branch`, Branch: `main` (root)
3. Нажмите Save — дождитесь билда Pages
4. Сайт будет доступен по адресу, указанному в разделе Pages

Файл `.nojekyll` уже добавлен, чтобы GitHub Pages не применял Jekyll‑билд и корректно обслуживал папку `assets/`.

## SEO/OG
- Заголовок/описание: редактируйте `<title>` и `<meta name="description">` в `index.html`
- OpenGraph‑картинка: `assets/img/og.svg` (ссылка в `<meta property="og:image">`)

## Лицензия
Этот шаблон можно использовать свободно.

