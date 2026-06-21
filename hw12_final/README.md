Опис проєкту

Цей проєкт реалізує генератор резюме на основі даних з файлу resume.json. Вся сторінка будується динамічно без використання сторонніх бібліотек чи фреймворків.

Проєкт демонструє використання п’яти патернів проєктування:
Facade
Template Method
Factory Method
Composite
Decorator

Структура проєкту
index.html — головна сторінка застосунку
resume.json — джерело даних
src/facade — фасад для ініціалізації сторінки
src/importer — імпорт та обробка даних (Template Method)
src/blocks — блоки резюме (Factory Method, Composite)
src/decorators — декоратор для виділення елементів
src/models — типи даних
src/main.ts — точка входу

Реалізація патернів

Facade
Клас ResumePage надає єдиний інтерфейс для ініціалізації застосунку. Він приховує процес завантаження, обробки даних та рендерингу.

Template Method
AbstractImporter визначає загальний алгоритм обробки даних: validate → map → render. ResumeImporter реалізує конкретні кроки.

Factory Method
BlockFactory створює різні типи блоків резюме залежно від типу даних.

Composite
ExperienceBlock містить вкладені ProjectBlock, що дозволяє працювати з групою об’єктів як з одним цілим.

Decorator
HighlightDecorator додає візуальне виділення для проєктів з прапорцем isRecent: true без зміни їхньої внутрішньої логіки.

Запуск проєкту

Встановлення залежностей:
npm install

Запуск у режимі розробки:
npm run dev

Збірка проєкту:
npm run build
