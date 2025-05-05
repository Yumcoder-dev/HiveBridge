import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';

const ORIGINAL_ENV = { ...process.env };

beforeEach(() => {
    jest.resetModules(); // Clear cached modules
    process.env = { ...ORIGINAL_ENV };
});

afterEach(() => {
    process.env = ORIGINAL_ENV;
});

describe('buildMongoURI (ESM)', () => {
    it('returns default unauthenticated URI', async () => {
        delete process.env.MONGO_USER;
        delete process.env.MONGO_PASS;
        delete process.env.MONGO_DB_NAME;

        const { config } = await import('../config');
        expect(config.mongoURI).toBe('mongodb://127.0.0.1:27017/db_test');
    });

    it('returns authenticated URI with credentials', async () => {
        process.env.MONGO_USER = 'testUser';
        process.env.MONGO_PASS = 'secret123';

        const { config } = await import('../config');
        expect(config.mongoURI).toBe('mongodb://testUser:secret123@127.0.0.1:27017/db_test');
    });

    it('adds replicaSet and authSource if present', async () => {
        process.env.MONGO_REPLICA_SET = 'rs0';
        process.env.MONGO_AUTH_SOURCE = 'admin';

        const { config } = await import('../config');
        expect(config.mongoURI).toContain('?replicaSet=rs0&authSource=admin');
    });
});
