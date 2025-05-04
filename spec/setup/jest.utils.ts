import type { Server } from 'http';

// Internal variable to hold the reference to the test server
let httpServer: Server;

/**
 * Stores the initialized HTTP server instance for use in tests.
 * Typically called in the global setup phase before running tests.
 *
 * @param server - The HTTP server instance to store
 */
export const setTestServer = (server: Server) => {
    httpServer = server;
};

/**
 * Retrieves the stored HTTP server instance.
 * Throws an error if the server hasn't been initialized yet.
 *
 * @returns The initialized HTTP server instance
 */
export const getTestServer = (): Server => {
    if (!httpServer) {
        throw new Error('[Jest] Server has not been initialized.');
    }
    return httpServer;
};
