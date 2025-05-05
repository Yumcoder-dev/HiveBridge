import Parse from 'parse/node';
import { describe, expect, test, beforeAll } from '@jest/globals';
import { initParseClient } from './utils';

describe('Test Server – Playground', () => {
    beforeAll(() => {
        // Initialize Parse client
        initParseClient();
    });

    test('Create, retrieve, and delete a TestObject', async () => {
        // Create and save object
        const obj = new Parse.Object('TestObject');
        obj.set('message', 'Hello from Jest test!');
        const saved = await obj.save();

        // Verify it's saved
        expect(saved.id).toBeDefined();
        expect(saved.get('message')).toBe('Hello from Jest test!');

        // Fetch from DB to be sure it exists
        const query = new Parse.Query('TestObject');
        const fetched = await query.get(saved.id);
        expect(fetched.get('message')).toBe('Hello from Jest test!');

        // Clean up
        await fetched.destroy();
    });
});
