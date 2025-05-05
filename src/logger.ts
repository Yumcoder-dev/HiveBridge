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
    // eslint-disable-next-line no-console
    info: (msg: string): void => console.info(format(msg)),
    // eslint-disable-next-line no-console
    error: (msg: string): void => console.error(format(msg)),
    // eslint-disable-next-line no-console
    warn: (msg: string): void => console.warn(format(msg)),
    // eslint-disable-next-line no-console
    debug: (msg: string): void => console.debug(format(msg)),
};
