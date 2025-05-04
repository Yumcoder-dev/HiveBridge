// import { pathsToModuleNameMapper } from 'ts-jest';

export default {
    // Use ts-jest preset to handle TypeScript files in Jest
    preset: 'ts-jest',

    // Set the test environment (e.g., node for backend testing)
    testEnvironment: 'node',

    // Specify root folders where Jest should look for tests and modules
    roots: ['<rootDir>/src', '<rootDir>/spec'],

    // Path to the global setup file that runs before all tests
    globalSetup: '<rootDir>/spec/setup/jest.setup.ts',

    // Path to the global teardown file that runs after all tests
    globalTeardown: '<rootDir>/spec/setup/jest.teardown.ts',

    // Patterns Jest uses to detect test files
    testMatch: [
        '**/__tests__/**/*.ts',      // tests inside __tests__ folders
        '**/?(*.)+(spec|test).ts'    // files ending in .spec.ts or .test.ts
    ],

    // Transform TypeScript files using ts-jest and your project's tsconfig
    transform: {
        '^.+\\.ts$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    },

    // File extensions Jest will process
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],

    // Enable test coverage collection
    collectCoverage: true,

    // Output directory for coverage reports
    coverageDirectory: 'coverage',

    // Specify coverage report formats
    coverageReporters: ['text', 'lcov'],

    // Enable detailed logging of each test
    verbose: true,

    // Helps ensure tests don’t hang due to open handles
    detectOpenHandles: true,
    forceExit: true
};
