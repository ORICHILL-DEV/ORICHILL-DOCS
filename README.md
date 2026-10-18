# ORICHILL Wiki

Исходники вики сервера ORICHILL на [VitePress](https://vitepress.dev). Сайт публикуется через GitHub Pages на **https://wiki.orichill.net**.

## Как править

- Страницы лежат в `docs/` (Markdown). Меню слева задаётся в `docs/.vitepress/sidebar.json`.
- Картинки и файлы кладутся в `docs/public/assets/`, а в тексте на них ссылаются как `/assets/имя-файла.png`.
- Блоки-подсказки: `::: info`, `::: tip`, `::: warning`, `::: danger`, каждый закрывается строкой `:::`.
- Цветной текст (замена GitBook-разметки): `<span class="oc-c-primary">текст</span>`. Доступны `primary`, `success`, `warning`, `danger`, `info`, `tint`, а также фон `oc-bg-*`.

Локальный просмотр:

```bash
npm ci
npm run docs:dev
```

## Публикация

Каждый push в `main` запускает `.github/workflows/deploy.yml`: сборка и деплой в GitHub Pages.

Разовая настройка:
1. Settings → Pages → Source: **GitHub Actions**.
2. DNS: CNAME-запись `wiki.orichill.net` → `<логин>.github.io`.
3. Settings → Pages → Custom domain: `wiki.orichill.net`, затем включить **Enforce HTTPS**. Файл `docs/public/CNAME` уже есть.
4. Отключить Git Sync в GitBook, чтобы он не перезаписывал репозиторий старой структурой.

## Картинки из GitBook

В репозитории никогда не было папки `.gitbook/assets`, поэтому все 49 картинок и файлов сейчас заменены фиолетовыми заглушками. Список имён лежит в `docs/.vitepress/missing-assets.txt`. Достаточно положить оригиналы с теми же именами в `docs/public/assets/` и заменить ими заглушки. Логотип ищется по пути `docs/public/assets/logo.png`.
