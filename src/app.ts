import express, { Express } from 'express';
import { ParseServer } from 'parse-server';
import { config } from './config';

/**
 * Creates and configures an Express application with an embedded Parse Server.
 *
 * This function is used by both development and test environments to create
 * a fully initialized app instance without directly starting an HTTP server.
 *
 * @returns A promise that resolves to a configured Express application.
 */
const createApp = async (): Promise<Express> => {
    const app = express();

    // see https://github.com/parse-community/parse-server/blob/alpha/types/Options/index.d.ts
    // Initialize and configure the Parse Server instance
    const parseServer = new ParseServer({
        databaseURI: config.mongoURI, // MongoDB connection URI
        appId: config.appId, // Application ID for clients
        masterKey: config.masterKey, // Master key (keep secret in production)
        serverURL: config.serverURL, // Public Parse API endpoint
        // publicServerURL: config.serverURL,
        enableInsecureAuthAdapters: false,
        encodeParseObjectInCloudFunction: true,
        allowClientClassCreation: true,
        // serve custom or built-in web pages directly from the server,
        // typically for:
        // - Password reset
        // - Email verification
        // - Custom 404 or error pages
        pages: {
            enableRouter: true, // Prevent PublicAPIRouter deprecation warning
        },
        // liveQuery: {
        //     classNames: [],                  // Classes available for LiveQuery (optional)
        // },
    });

    // Start Parse Server before mounting its API
    await parseServer.start();

    // Mount the Parse Server API at the specified route
    app.use('/parse', parseServer.app);

    return app;
};

export default createApp;
