vi.mock('@placeos/ts-client', { spy: true });

import { showMetadata, showUser } from '@placeos/ts-client';
import { loadContacts } from '../../app/landing/contacts.fn';

describe('loadContacts', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(showMetadata).mockResolvedValue({
            details: [{ email: 'a@example.com' }, { email: 'b@example.com' }],
        } as any);
        vi.mocked(showUser).mockImplementation(
            async (email: string) => ({ email, name: email }) as any,
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
        expect(showMetadata).toHaveBeenCalledTimes(1);
        expect(showUser).toHaveBeenCalledTimes(2);

        // A later call loads fresh data
        await loadContacts('me');
        expect(showMetadata).toHaveBeenCalledTimes(2);
    });

    it('should not use a load that started before a contact change', async () => {
        const stale = loadContacts('me');
        vi.mocked(showMetadata).mockResolvedValue({
            details: [{ email: 'c@example.com' }],
        } as any);
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
        vi.mocked(showUser).mockRejectedValue(new Error('not found'));
        const list = await loadContacts('me');
        expect(list.map((user) => user.email)).toEqual([
            'a@example.com',
            'b@example.com',
        ]);
    });
});
