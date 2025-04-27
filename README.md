# React + TypeScript + Vite Starter Template

Этот репозиторий содержит стартовый шаблон для быстрого начала разработки React-приложений с использованием TypeScript и Vite. Включает настроенные инструменты для линтинга, форматирования, удобной работы с путями и Git.

## ✨ Особенности

*   **Vite:** Быстрый сервер разработки и сборщик.
*   **React:** Современный JavaScript для создания UI.
*   **TypeScript:** Статическая типизация для надежности и лучшего автодополнения.
*   **ESLint:** Настроен для поиска ошибок и проблем в коде (с использованием Flat Config - `eslint.config.js`).
    *   Интеграция с TypeScript (`@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`).
    *   Правила для React (`eslint-plugin-react`, `eslint-plugin-react-hooks`).
    *   Сортировка импортов (`eslint-plugin-import`).
*   **Prettier:** Настроен для автоматического форматирования кода.
*   **Абсолютные пути:** Настроен псевдоним `@/` для папки `src/` (в `tsconfig.app.json` и `vite.config.ts` через `vite-tsconfig-paths`).
*   **Git:** Готов к работе с Git.

## 🚀 Начало Работы

**Способ 1: Использовать как Шаблон GitHub (Рекомендуется)**

1.  Перейдите на страницу этого репозитория на GitHub.
2.  Нажмите кнопку "Use this template" -> "Create a new repository".
3.  Заполните данные вашего нового репозитория и создайте его. GitHub скопирует содержимое шаблона без истории коммитов.
4.  Склонируйте ваш **новый** репозиторий локально:
    ```bash
    git clone <URL_ВАШЕГО_НОВОГО_РЕПОЗИТОРИЯ>
    cd <имя_вашего_нового_проекта>
    ```
5.  Установите зависимости:
    ```bash
    npm install
    ```
6.  Запустите сервер разработки:
    ```bash
    npm run dev
    ```
7.  Начинайте разработку в папке `src/`!

**Способ 2: Ручное Клонирование**

1.  Склонируйте этот репозиторий:
    ```bash
    git clone <URL_ЭТОГО_РЕПОЗИТОРИЯ_ШАБЛОНА> <имя_вашего_нового_проекта>
    cd <имя_вашего_нового_проекта>
    ```
2.  Удалите историю Git шаблона:
    ```bash
    rm -rf .git
    # или в Windows PowerShell: Remove-Item .git -Recurse -Force
    ```
3.  Инициализируйте новый репозиторий для вашего проекта:
    ```bash
    git init
    git add .
    git commit -m "Initial commit from template"
    ```
4.  (Опционально) Создайте новый удаленный репозиторий на GitHub/GitLab и свяжите его с локальным (`git remote add origin ...`, `git push ...`).
5.  Установите зависимости:
    ```bash
    npm install
    ```
6.  Запустите сервер разработки:
    ```bash
    npm run dev
    ```

## 🛠️ Настроенные Инструменты

### Конфигурационные Файлы

Следующие файлы содержат основные настройки проекта:

*   `vite.config.ts`: Конфигурация Vite (включая плагин `vite-tsconfig-paths` для псевдонимов).
*   `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: Конфигурация TypeScript (включая псевдоним `@/` в `tsconfig.app.json`).
*   `eslint.config.js`: Конфигурация ESLint (Flat Config).
*   `package.json`: Зависимости и скрипты проекта.
*   `.gitignore`: Файлы и папки, игнорируемые Git.

### Основные Зависимости (Dev)

Ключевые пакеты, установленные для разработки и настройки:

*   `vite`, `@vitejs/plugin-react`
*   `typescript`, `@types/react`, `@types/react-dom`
*   `eslint`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`
*   `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
*   `eslint-plugin-import`
*   `prettier`
*   `vite-tsconfig-paths`

## 🔧 Настройка VS Code

Для максимально комфортной работы с этим шаблоном рекомендуется установить следующие расширения VS Code и настроить параметры редактора.

### Рекомендуемые Расширения VS Code

*   **Основные:**
    *   `dbaeumer.vscode-eslint`: Интеграция ESLint.
    *   `esbenp.prettier-vscode`: Форматирование кода Prettier.
    *   `dsznajder.es7-react-js-snippets`: Сниппеты для React/Hooks.
    *   `PKief.material-icon-theme`: Иконки файлов.
    *   `alefragnani.project-manager`: Удобное переключение между проектами.
    *   `christian-kohler.path-intellisense`: Автодополнение путей.
*   **Git:**
    *   `eamodio.gitlens`: Расширенные возможности Git (Blame, история и т.д.).
    *   (Опционально) `mhutchie.git-graph`: Визуальный граф коммитов.
*   **Удобство и Визуализация:**
    *   `formulahendry.auto-rename-tag`: Автопереименование парных тегов.
    *   `aaron-bond.better-comments`: Улучшенное выделение комментариев (TODO, !, ?).
    *   `wayou.vscode-todo-highlight`: Подсветка TODO/FIXME.
    *   `naumovs.color-highlight`: Подсветка кодов цвета.
    *   `vincaslt.highlight-matching-tag`: Подсветка парного тега.
    *   `Zignd.html-css-class-completion`: Автодополнение CSS-классов в HTML/JSX.
*   **Прочее:**
    *   `wix.import-cost`: Отображение размера импортируемых пакетов.
    *   `VisualStudioExptTeam.vscodeintellicode`: AI-помощник для автодополнения.
    *   `VisualStudioExptTeam.intellicode-api-usage-examples`: Примеры использования API.
    *   `rangav.vscode-thunder-client`: REST API клиент.
    *   (Опционально) `stylelint.vscode-stylelint`: Линтинг CSS/SCSS (если используется Stylelint).
    *   (Опционально) `planbcoding.vscode-react-refactor`: Помощь в рефакторинге JSX.

*(Примечание: Simple React Snippets от Burke Holland может пересекаться с ES7+ Snippets, обычно достаточно одного набора сниппетов).*

### Настройки VS Code (`settings.json`)

Рекомендуется добавить следующие настройки в ваш пользовательский (`User`) или рабочий (`Workspace`) файл `settings.json` в VS Code:

```json
{
  // Форматирование Prettier при сохранении
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // Автоисправление ESLint при сохранении
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
    // Примечание: Автоисправление 'no-unused-vars' и 'import/order'
    // может не всегда срабатывать автоматически из-за ограничений
    // ESLint --fix в некоторых конфигурациях (особенно с flat config).
    // Следите за предупреждениями в панели "Problems".
  },

  // Указание ESLint валидировать нужные типы файлов
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],

  // Настройка автоимпорта для использования путей с '@/'
  "typescript.preferences.importModuleSpecifier": "non-relative", // или "shortest"
  "javascript.preferences.importModuleSpecifier": "non-relative", // или "shortest"

  // Другие полезные настройки (примеры)
  "files.autoSave": "afterDelay", // Автосохранение
  "editor.wordWrap": "on",       // Перенос слов
  "editor.fontSize": 16,         // Размер шрифта (подстройте под себя)
  // "workbench.iconTheme": "material-icon-theme", // Устанавливается выбором темы иконок

  // ...другие ваши персональные настройки...
}


(Доступ к settings.json: Ctrl+Shift+P -> Preferences: Open User Settings (JSON) или Preferences: Open Workspace Settings (JSON))

🧐 Что Дальше?

Изучите файл eslint.config.js для понимания настроенных правил ESLint.

Изучите tsconfig.app.json для опций TypeScript и настройки путей.

Изучите vite.config.ts для опций Vite и плагинов.

Начинайте создавать ваши компоненты в папке src/components (или вашей структуре).
