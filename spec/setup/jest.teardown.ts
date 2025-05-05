import { getTestServer } from './jest.utils';

/**
 * Jest global teardown function.
 *
 * This function runs once after all test suites. It shuts down the test server
 * to release resources and avoid port conflicts or memory leaks.
 */
export default async (): Promise<void> => {
    const server = getTestServer();
    if (server && server.listening) {
        await new Promise<void>((resolve, reject) => {
            server.close((err?: Error) => {
                if (err) {
                    // eslint-disable-next-line no-console
                    console.error('[Jest Teardown] Error closing server:', err);
                    reject(err);
                } else {
                    // eslint-disable-next-line no-console
                    console.info('[Jest Teardown] Test server stopped.');
                    resolve();
                }
            });
        });
    } else {
        // eslint-disable-next-line no-console
        console.warn('[Jest Teardown] Server not running or already closed.');
    }
};
