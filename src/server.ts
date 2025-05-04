import createApp from './app';
import { config } from './config';
import { Server } from 'http';
import { logger } from './logger';
/**
 * Bootstraps and starts the development server using the configured port.
 *
 * This file is intended to run in non-test environments. It starts the Express app
 * and listens on the specified port, logging a message when ready.
 */
export async function startServer(port: number = config.port): Promise<Server> {
    const app = await createApp();
    return new Promise(resolve => {
        try {
            const server = app.listen(port, () => {
                logger.info(`Server successfully started at ${config.serverURL}`);
                resolve(server);
            });
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            logger.error(`Failed to launch server on port ${port}.\n Error message: ${message}`);
            process.exit(1); // Exit the process with a failure code
        }
    });
}
