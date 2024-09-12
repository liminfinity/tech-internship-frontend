# Тестовое задание для стажёра Frontend разработчика в Авито

## Суть задания

Разработать личный кабинет продавца на маркетплейсе, в котором есть возможность управлять своими объявлениями и заказами.

## Запуск

- Склонировать ветку master;
- Создать _.env.development.local_ (разработка) и _.env.production.local_ (продакшн) файлы;
- Установить переменные окружения, указанные под комментарием _# .env.development.local / .env.production.local_ в _.env.example_;
- Без докера:

  1. `npm i` (установка зависимостей);
  2. `npm run server` (запуск сервера);
  3. - `npm run dev` (разработка, 5173 порт).
     - `npm run start` (продакшн, 80 порт).

- С докером:
  1. `docker-compose up`.

## Использованные технологии

1.  React + React-router-dom;
2.  TypeScript;
3.  Redux Toolkit + RTK Query;
4.  React-hook-form + zod;
5.  Eslint + Prettier;
6.  Husky + Lint-staged;
7.  Docker + Docker-compose;
8.  Ant Design + SCSS modules;
9.  FSD архитектура;
10. Storybook.

## Страницы

1.  _/advertisements_ - мои объявления;
2.  _/advertisements/:advertisementId_ - объявление;
3.  _/orders_ - мои заказы.

## Дополнительно

Для просмотра реализованных компонентов необходимо использовать команду `npm run sb`. В результате на 6006 порту откроется Storybook
