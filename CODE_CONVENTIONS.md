# Code Conventions

## TypeScript Guidelines

### Naming Conventions

- Use PascalCase for:
  - Class names
  - Interface names
  - Type names
  - Enum names
  - Type parameters (generics)

- Use camelCase for:
  - Variables
  - Functions
  - Methods
  - Properties
  - Parameters

- Use UPPER_SNAKE_CASE for:
  - Constants
  - Enum values

### File Naming

- Use PascalCase for:
  - Component files
  - Class files
  - Interface files
  - Type files

- Use camelCase for:
  - Utility files
  - Helper files
  - Service files

### Type Definitions

- Always use explicit types for function parameters and return values
- Use interfaces for object shapes
- Use type aliases for complex types
- Avoid using `any` type
- Use `unknown` instead of `any` when the type is truly unknown

### Code Style

- Use 2 spaces for indentation
- Use semicolons at the end of statements
- Use single quotes for strings
- Use trailing commas in multiline object and array literals
- Use arrow functions for callbacks
- Use async/await instead of Promise chains
- Use template literals for string interpolation

### Comments

- Use JSDoc comments for public APIs
- Use single-line comments for implementation details
- Keep comments up-to-date with code changes

### Testing

- Test files should be named `*.test.ts` or `*.spec.ts`
- Use descriptive test names
- Follow the pattern: `describe('component', () => { it('should do something', () => {}) })`
- Use meaningful assertions

### Error Handling

- Use try/catch blocks for async operations
- Throw Error objects with meaningful messages
- Handle errors at the appropriate level
- Use custom error classes when needed

### Imports and Exports

- Use named imports and exports
- Group imports by type:
  1. External modules
  2. Internal modules
  3. Types
- Use absolute imports for project modules
- Avoid circular dependencies

### Parse Server Specific

- Use PascalCase for Parse classes
- Use camelCase for Parse fields
- Follow Parse naming conventions for Cloud Functions
- Use proper typing for Parse queries and results

## Git Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally
- Consider starting the commit message with an applicable emoji

## Documentation

- Keep README.md up-to-date
- Document all public APIs
- Include examples in documentation
- Keep changelog updated

## Security

- Never commit sensitive information
- Use environment variables for configuration
- Validate all user input
- Follow security best practices for Parse Server 