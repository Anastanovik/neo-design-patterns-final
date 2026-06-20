# Домашнє завдання №4 — Породжувальні патерни

## Опис проєкту

У проєкті реалізовано три порожняльні патерни проєктування на TypeScript:

- Singleton (Одинак)
- Builder (Будівельник)
- Prototype (Прототип)

Кожен патерн розміщено в окремій директорії та має демонстраційний файл `main.ts`.

---

## Структура проєкту

src/
├── singleton/
│ ├── AppConfigService.ts
│ └── main.ts
├── builder/
│ ├── DocumentBuilder.ts
│ └── main.ts
└── prototype/
├── UserProfilePrototype.ts
├── UserProfile.ts
└── main.ts

---

## Встановлення залежностей

npm install

---

## Запуск проєкту

### Singleton

npx ts-node src/singleton/main.ts

### Builder

npx ts-node src/builder/main.ts

### Prototype

npx ts-node src/prototype/main.ts

---

## Опис патернів

### Singleton

Патерн гарантує існування лише одного екземпляра класу `AppConfigService` у всьому застосунку.

Метод:

- `getInstance()` — повертає єдиний екземпляр класу

---

### Builder

Патерн дозволяє поетапно створювати текстовий документ.

Методи:

- `addHeader()`
- `addBody()`
- `addFooter()`
- `build()`

---

### Prototype

Патерн дозволяє створювати копії об’єктів із глибоким клонуванням.

Метод:

- `clone()` створює незалежну копію об’єкта
