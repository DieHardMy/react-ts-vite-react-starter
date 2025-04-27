// eslint.config.js
import js from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint'; // Импортируем tseslint целиком

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules'],
  },

  js.configs.recommended,

  // --- Общая конфигурация для JS/JSX/TS/TSX ---
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: pluginImport,
      // Добавляем плагин @typescript-eslint для явного доступа к парсеру/правилам
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      // ---> ЯВНО УКАЗЫВАЕМ ПАРСЕР <---
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // ---> Опционально: укажи tsconfig.json для более сложных правил TS <---
        // project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
       // ... (все твои правила React, Hooks, Refresh, Import/order как были) ...

       // ---> ИСПОЛЬЗУЕМ ПРАВИЛО no-unused-vars ОТ typescript-eslint <---
       // Оно лучше работает с TS/JSX и может иметь лучшую логику исправления
       'no-unused-vars': 'off', // Отключаем базовое правило ESLint
       '@typescript-eslint/no-unused-vars': [ // Включаем правило от typescript-eslint
         'warn',
         { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
       ],

      // --- Правила React ---
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',

      // --- Правила React Hooks ---
      ...reactHooks.configs.recommended.rules,

      // --- Правила React Refresh ---
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // --- Правила eslint-plugin-import (СОРТИРОВКА) ---
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unresolved': 'off',
    },
  },
);