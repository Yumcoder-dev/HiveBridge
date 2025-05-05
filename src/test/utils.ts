import Parse from 'parse/node';
import { config } from '../config';
/**
 * Initializes the Parse client with app credentials and server URL.
 * Should be called in test setup (e.g., beforeAll).
 */
export function initParseClient(): void {
    Parse.initialize(config.appId);
    Parse.serverURL = config.serverURL;
}
