import {
    DRAFT_KEY_PREFIX,
    draftKey,
    draftKeyFor,
    makeDraft,
    MemoryDraftStore,
    sha256Hex,
} from '../lib/draft-store';

describe('draft store', () => {
    it('keys drafts by zone and source hash', async () => {
        expect(await sha256Hex('abc')).toBe(
            'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
        );
        expect(draftKey('zone-1', 'abc')).toBe(`${DRAFT_KEY_PREFIX}zone-1:abc`);
        expect(await draftKeyFor('zone-1', 'abc')).toBe(
            `${DRAFT_KEY_PREFIX}zone-1:ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad`,
        );
    });

    it('stores, lists and deletes drafts in memory', async () => {
        const store = new MemoryDraftStore();
        const draft = makeDraft('zone-1', 'hash', '<svg/>');
        await store.put(draft);
        await store.put(makeDraft('zone-2', 'hash', '<svg/>'));
        expect(await store.keys()).toEqual([
            draftKey('zone-1', 'hash'),
            draftKey('zone-2', 'hash'),
        ]);
        const loaded = await store.get(draft.key);
        expect(loaded).toEqual(draft);
        loaded!.markup = 'changed';
        expect((await store.get(draft.key))?.markup).toBe('<svg/>');
        await store.delete(draft.key);
        expect(await store.get(draft.key)).toBeNull();
        expect(await store.keys()).toEqual([draftKey('zone-2', 'hash')]);
    });
});
