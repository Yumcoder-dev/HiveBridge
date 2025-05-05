# Code Conventions

## 1. TypeScript Guidelines

### 1.1. Naming Conventions

- **PascalCase** for:

    - Class names
    - Interface names
    - Type aliases
    - Enum names
    - Generic type parameters

- **camelCase** for:

    - Variables
    - Functions
    - Methods
    - Object properties
    - Function parameters

- **UPPER_SNAKE_CASE** for:

    - Constants
    - Enum values

### 1.2. File Naming

- **PascalCase** for:

    - Component files
    - Class files
    - Interface files
    - Type definition files

- **camelCase** for:

    - Utility files
    - Helper files
    - Service files

### 1.3. Type Definitions

- Always specify explicit types for function parameters and return types.
- Use `interface` for object shape definitions.
- Use `type` aliases for unions and more complex type expressions.
- Avoid the `any` type; prefer `unknown` when a type is truly indeterminate.
- Prefer `readonly` where immutability is required.

### 1.4. Code Style

- Use **2 spaces** for indentation.
- Always use **semicolons**.
- Prefer **single quotes** for strings.
- Include **trailing commas** in multiline arrays and object literals.
- Use **arrow functions** for inline callbacks.
- Favor **async/await** over Promise chaining.
- Use **template literals** for string interpolation.

### 1.5. Comments

- Use **JSDoc comments** for public APIs and exported functions.
- Use **single-line comments** for implementation notes.
- Keep all comments relevant and updated with code changes.

### 1.6. Testing

- Name test files as `*.test.ts` or `*.spec.ts`.
- Write **descriptive** test case names.
- Follow the pattern:

    ```ts
    describe('ComponentName', () => {
        test('should perform expected behavior', () => {
            // test implementation
        });
    });
    ```

- Use **clear and meaningful assertions**.

### 1.7. Error Handling

- Use `try/catch` blocks around async operations.
- Always throw `Error` objects with descriptive messages.
- Handle errors at the appropriate abstraction level.
- Create and use custom error classes when applicable.

### 1.8. Imports and Exports

- Prefer **named imports and exports**.

- Group imports in the following order:

    1. External libraries
    2. Internal modules
    3. Type imports

- Use **absolute imports** for project files.

- Avoid circular dependencies through proper module structure.

### 1.9. Parse Server Conventions

- Use **PascalCase** for `Parse.Object` subclass names (class names).
- Use **camelCase** for field names within `Parse.Object`.
- Follow standard naming for **Cloud Functions** and Triggers.
- Use strict typing for Parse queries, objects, and results.

## 2. Git Commit Messages

- Use the **present tense** (“Add feature”, not “Added feature”).
- Use **imperative mood** (“Fix bug”, not “Fixes bug”).
- Limit the **first line to 72 characters**.
- Reference related issues or pull requests.
- Optionally prefix with an emoji to indicate intent (e.g. ✨, 🐛, 📚).

## 3. Documentation

- Keep `README.md` current with usage and setup instructions.
- Document all **public APIs** and modules.
- Include **usage examples** where helpful.
- Maintain a consistent and updated **changelog**.

## 4. Security

- Never commit secrets, API keys, or credentials.
- Use **environment variables** for all configuration secrets.
- Validate all **user input**, especially in API routes.
- Follow **Parse Server security best practices** (e.g. ACLs, class-level permissions).
