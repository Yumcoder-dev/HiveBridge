import { config } from './config';

/**
 * Internal log formatter to prefix messages with timestamp and context.
 */
function format(message: string): string {
    return `${new Date().toISOString()} [${config.appName} - ${config.env}] ${message}`;
}

/**
 * Unified logger object with level-specific methods.
 */
export const logger = {
    info: (msg: string) => console.info(format(msg)),
    error: (msg: string) => console.error(format(msg)),
    warn: (msg: string) => console.warn(format(msg)),
    debug: (msg: string) => console.debug(format(msg)),
};
