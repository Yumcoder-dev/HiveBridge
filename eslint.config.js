// Import Prettier plugin to integrate formatting rules with ESLint
import eslintPluginPrettier from 'eslint-plugin-prettier';
// Import TypeScript ESLint plugin for linting TypeScript-specific syntax
import tseslint from '@typescript-eslint/eslint-plugin';
// Import TypeScript parser so ESLint can parse .ts files
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        // Globally ignore output, dependency, and log directories from linting
        ignores: ['coverage/**', 'dist/**', 'node_modules/**', 'logs/**'],
    },
    {
        // Apply the following configuration only to TypeScript files
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser, // Use TypeScript parser
            parserOptions: {
                ecmaVersion: 2020, // Support modern ECMAScript syntax
                sourceType: 'module', // Enable ES module syntax
                project: './tsconfig.json', // Reference the TS config for typed linting
            },
            globals: {
                jest: true, // Allow Jest global variables
            },
        },
        plugins: {
            '@typescript-eslint': tseslint, // Enable TypeScript linting rules
            prettier: eslintPluginPrettier, // Enable Prettier rules
        },
        rules: {
            // Warn if functions do not have explicit return types
            '@typescript-eslint/explicit-function-return-type': 'warn',
            // Warn when async functions don't contain any `await`
            '@typescript-eslint/require-await': 'warn',
            // Error on unused variables, but ignore unused arguments that start with "_"
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                },
            ],
            // Error on usage of console.log/info/etc.
            'no-console': 'error',
            // Enforce Prettier formatting as an ESLint error
            'prettier/prettier': 'error',
        },
    },
];
