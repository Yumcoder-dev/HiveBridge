import dotenv from 'dotenv';
import path from 'path';
import dotenvExpand from 'dotenv-expand';

/**
 * Loads the appropriate .env file based on NODE_ENV.
 *
 * - `.env.test`        → for test environments
 * - `.env.production`  → for production
 * - `.env`             → default (development)
 */
const envFile =
    process.env.NODE_ENV === 'test'
        ? '.env.test'
        : process.env.NODE_ENV === 'production'
          ? '.env.production'
          : '.env';

dotenvExpand.expand(dotenv.config({ path: path.resolve(process.cwd(), envFile) }));

/**
 * Dynamically constructs a MongoDB connection URI using environment variables.
 * Supports both authenticated and unauthenticated setups, and optional replica sets.
 *
 * Required env variables:
 *   - MONGO_HOST: MongoDB host (default: 127.0.0.1)
 *   - MONGO_PORT: MongoDB port (default: 27017)
 *   - MONGO_DB_NAME: Name of the database
 *
 * Optional:
 *   - MONGO_USER, MONGO_PASS: credentials for authentication
 *   - MONGO_REPLICA_SET: replica set name for high availability
 *
 * @returns A properly formatted MongoDB connection URI string.
 */
function buildMongoURI(): string {
    const user = process.env.MONGO_USER;
    const pass = process.env.MONGO_PASS;
    const host = process.env.MONGO_HOST || '127.0.0.1';
    const port = process.env.MONGO_PORT || '27017';
    const db = process.env.MONGO_DB_NAME || 'db_test';
    const replicaSet = process.env.MONGO_REPLICA_SET;

    let credentials = '';
    if (user && pass) {
        credentials = `${encodeURIComponent(user)}:${encodeURIComponent(pass)}@`;
    }

    let uri = `mongodb://${credentials}${host}:${port}/${db}`;
    if (replicaSet) {
        uri += `?replicaSet=${replicaSet}`;
    }

    return uri;
}

/**
 * Centralized configuration object to manage environment variables.
 * Provides defaults for development and ensures type safety across the app.
 */
export const config = {
    appName: process.env.APP_NAME || 'AppName',
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.SERVER_PORT || '1337', 10),
    appId: process.env.APP_ID || 'AppId',
    masterKey: process.env.MASTER_KEY || 'AppMasterKey',
    serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
    mongoURI: buildMongoURI(),
};
