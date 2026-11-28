vi.mock('@placeos/ts-client', { spy: true });

import { metadata, users } from '@placeos/ts-client';
import { fromV1Mock } from '@placeos/ts-client/compat';
import { loadContacts } from '../../app/landing/contacts.fn';

describe('loadContacts', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(metadata.show).mockImplementation(
            fromV1Mock(
                () =>
                    ({
                        details: [
                            { email: 'a@example.com' },
                            { email: 'b@example.com' },
                        ],
                    }) as any,
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        vi.mocked(users.show).mockImplementation(
            fromV1Mock(
                async (email: string) => ({ email, name: email }) as any,
                ['id', '...'],
            ),
        );
    });

    it('should share one in-flight load between callers', async () => {
        const [home, team] = await Promise.all([
            loadContacts('me'),
            loadContacts('me'),
        ]);

        expect(home.map((user) => user.email)).toEqual([
            'a@example.com',
            'b@example.com',
        ]);
        expect(team).toBe(home);
        expect(metadata.show).toHaveBeenCalledTimes(1);
        expect(users.show).toHaveBeenCalledTimes(2);

        // A later call loads fresh data
        await loadContacts('me');
        expect(metadata.show).toHaveBeenCalledTimes(2);
    });

    it('should not use a load that started before a contact change', async () => {
        const stale = loadContacts('me');
        vi.mocked(metadata.show).mockImplementation(
            fromV1Mock(
                () =>
                    ({
                        details: [{ email: 'c@example.com' }],
                    }) as any,
                ['id', 'name'],
                'data',
                'name',
            ),
        );
        const fresh = loadContacts('me', true);
        // A caller after the change shares the fresh load
        const shared = loadContacts('me');

        expect((await stale).map((user) => user.email)).toHaveLength(2);
        expect((await fresh).map((user) => user.email)).toEqual([
            'c@example.com',
        ]);
        expect(await shared).toBe(await fresh);
    });

    it('should keep the saved details of a contact whose lookup fails', async () => {
        vi.mocked(users.show).mockRejectedValue(new Error('not found'));
        const list = await loadContacts('me');
        expect(list.map((user) => user.email)).toEqual([
            'a@example.com',
            'b@example.com',
        ]);
    });
});
