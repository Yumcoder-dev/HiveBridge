// This file sets up a test environment for Jest by starting and stopping
// a lightweight test server before and after all test suites.
// It ensures that tests have access to a running server instance for integration testing.

import { startServer } from '../../src/server';
import { setTestServer } from './jest.utils';

/**
 * Jest global setup function.
 *
 * This function runs once before all test suites. It starts the test server
 * (Express + Parse Server) and makes it globally accessible via `global.__HTTP_SERVER__`,
 * so it can be shut down later in `jest.teardown.ts`.
 */
export default async (): Promise<void> => {
    const server = await startServer();
    setTestServer(server);
    // eslint-disable-next-line no-console
    console.info('[Jest Setup] Test server started.');
};
