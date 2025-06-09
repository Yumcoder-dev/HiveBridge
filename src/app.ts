import express, { Express } from 'express';
import { ParseServer } from 'parse-server';
import ParseDashboard from 'parse-dashboard';
import { config } from './config';

/**
 * Mounts the Parse Dashboard on the provided Express app.
 *
 * @param app The Express application instance
 */
export const mountParseDashboard = (app: Express): void => {
    const dashboard = new ParseDashboard(
        {
            apps: [
                {
                    serverURL: config.serverURL,
                    appId: config.appId,
                    masterKey: config.masterKey,
                    appName: config.appName,
                    // primaryBackgroundColor: '#FFA500', // Orange
                    // secondaryBackgroundColor: '#FF4500', // OrangeRed
                },
            ],
            users: [
                {
                    user: 'admin',
                    pass: 'admin123', // Replace with env in production
                },
            ],
            trustProxy: 1,
        },
        {
            allowInsecureHTTP: true, // Only for development
        },
    );

    app.use(config.dashboardPath, dashboard);
};

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
    app.use(config.serverPath, parseServer.app);
    if (config.dashboardPath) {
        mountParseDashboard(app);
    }

    return app;
};

export default createApp;
