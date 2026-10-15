import { MemoryDraftStore } from '../lib/draft-store';
import { AttributeGeometryProvider } from '../lib/geometry';
import { MapDocument } from '../lib/map-document';
import { MapOp } from '../lib/ops';
import { ProtectedIdSet } from '../lib/protected-ids';
import { MapEditorSession } from '../lib/session';
import { anchor, loadMap, OFFICE, readMap, SAMPLE_MAPS } from './fixtures';

function session(
    markup = OFFICE,
    extra: Partial<ConstructorParameters<typeof MapEditorSession>[1]> = {},
) {
    const doc = MapDocument.load(markup, {
        geometry: new AttributeGeometryProvider(),
    });
    return new MapEditorSession(doc, {
        zone_id: 'zone-1',
        source_text: markup,
        draft_delay_ms: 0,
        ...extra,
    });
}

function recolour(doc: MapDocument, id: string, value: string): MapOp {
    return {
        op: 'set_attr',
        target: { a: anchor(doc, id) },
        name: 'fill',
        value,
        why: 'test',
    };
}

describe('MapEditorSession', () => {
    it('applies ops as one history entry and bumps the version', () => {
        const s = session();
        expect(s.version()).toBe(0);
        expect(s.dirty()).toBe(false);
        const result = s.apply(
            [
                recolour(s.doc, 'table-01.001', 'red'),
                recolour(s.doc, 'table-01.002', 'blue'),
            ],
            'Recolour two tables',
        );
        expect(result.applied.length).toBe(2);
        expect(s.version()).toBe(1);
        expect(s.dirty()).toBe(true);
        expect(s.history.length).toBe(1);
        expect(s.undo_label()).toBe('Recolour two tables');
        expect(s.can_undo()).toBe(true);
        expect(s.can_redo()).toBe(false);
    });

    it('undoes and redoes, tracking dirty against the loaded document', () => {
        const s = session();
        s.apply([recolour(s.doc, 'table-01.001', 'red')], 'Recolour');
        expect(s.undo()).toBe(true);
        expect(s.version()).toBe(2);
        expect(s.dirty()).toBe(false);
        expect(s.can_redo()).toBe(true);
        expect(s.redo_label()).toBe('Recolour');
        expect(s.doc.byId('table-01.001')?.getAttribute('fill')).toBeNull();
        expect(s.redo()).toBe(true);
        expect(s.dirty()).toBe(true);
        expect(s.doc.byId('table-01.001')?.getAttribute('fill')).toBe('red');
        expect(s.undo()).toBe(true);
        expect(s.undo()).toBe(false);
    });

    it('leaves no history entry when every op is rejected', () => {
        const s = session();
        const result = s.apply(
            [
                {
                    op: 'set_attr',
                    target: { a: 'e99999' },
                    name: 'fill',
                    value: 'red',
                    why: 'test',
                },
            ],
            'Bad',
        );
        expect(result.rejected.length).toBe(1);
        expect(s.history.length).toBe(0);
        expect(s.version()).toBe(0);
        expect(s.can_undo()).toBe(false);
    });

    it('honours the skip set', () => {
        const s = session();
        const result = s.apply(
            [
                recolour(s.doc, 'table-01.001', 'red'),
                recolour(s.doc, 'table-01.002', 'blue'),
            ],
            'One of two',
            { skip: new Set([1]) },
        );
        expect(result.applied.map((entry) => entry.index)).toEqual([0]);
        expect(s.doc.byId('table-01.002')?.getAttribute('fill')).toBeNull();
    });

    it('selects only anchors that exist and prunes them after a delete', () => {
        const s = session();
        const table = anchor(s.doc, 'table-01.001');
        s.select([table, 'e99999', table]);
        expect(s.selection()).toEqual([table]);
        s.setHover('e99999');
        expect(s.hover()).toBeNull();
        s.setHover(table);
        expect(s.hover()).toBe(table);
        s.toggleSelected(anchor(s.doc, 'table-01.002'));
        expect(s.selection().length).toBe(2);
        s.toggleSelected(table);
        expect(s.selection()).toEqual([anchor(s.doc, 'table-01.002')]);
        s.select([table]);
        s.apply(
            [{ op: 'delete', target: { a: table }, why: 'test' }],
            'Delete',
        );
        expect(s.selection()).toEqual([]);
        expect(s.hover()).toBeNull();
    });

    it('caches the index per version', () => {
        const s = session();
        const first = s.index();
        expect(s.index()).toBe(first);
        expect(first.by_anchor.get(anchor(s.doc, 'table-01.001'))?.fill).toBe(
            '#dde',
        );
        s.apply([recolour(s.doc, 'table-01.001', 'red')], 'Recolour');
        const second = s.index();
        expect(second).not.toBe(first);
        expect(second.by_anchor.get(anchor(s.doc, 'table-01.001'))?.fill).toBe(
            'red',
        );
        expect(s.index()).toBe(second);
    });

    it('reports changed elements against the loaded baseline', () => {
        const s = session();
        const table = anchor(s.doc, 'table-01.001');
        expect(s.isChanged(table)).toBe(false);
        s.apply([recolour(s.doc, 'table-01.001', 'red')], 'Recolour');
        expect(s.isChanged(table)).toBe(true);
        expect(s.originalOf(table)?.getAttribute('fill')).toBeNull();
        expect(s.originalOf('e99999')).toBeNull();
        s.undo();
        expect(s.isChanged(table)).toBe(false);
    });

    it('restores other markup as one undoable step with unique anchors', () => {
        const s = session();
        const before = s.doc.serialise();
        const other = readMap('level_1');
        s.restore(other, 'Restore draft');
        expect(s.dirty()).toBe(true);
        expect(s.undo_label()).toBe('Restore draft');
        const anchors = s.doc.elements().map((el) => s.doc.anchorOf(el));
        expect(new Set(anchors).size).toBe(anchors.length);
        expect(anchors.every((a) => !!a)).toBe(true);
        expect(s.doc.serialise()).toBe(MapDocument.load(other).serialise());
        expect(s.undo()).toBe(true);
        expect(s.doc.serialise()).toBe(before);
        expect(s.dirty()).toBe(false);
    });

    it('reverts to the loaded document with the anchors intact', () => {
        const s = session();
        const table = anchor(s.doc, 'table-01.001');
        s.apply([recolour(s.doc, 'table-01.001', 'red')], 'Recolour');
        s.apply(
            [
                {
                    op: 'delete',
                    target: { a: anchor(s.doc, 'plant-1') },
                    why: '',
                },
            ],
            'Delete',
        );
        s.revert();
        expect(s.dirty()).toBe(false);
        expect(s.doc.byId('plant-1')).not.toBeNull();
        expect(anchor(s.doc, 'table-01.001')).toBe(table);
        expect(s.isChanged(table)).toBe(false);
        expect(s.undo_label()).toBe('Discard changes');
        expect(s.undo()).toBe(true);
        expect(s.doc.byId('plant-1')).toBeNull();
    });

    it('rebases the baseline on markSaved', () => {
        const s = session();
        const table = anchor(s.doc, 'table-01.001');
        s.apply([recolour(s.doc, 'table-01.001', 'red')], 'Recolour');
        s.markSaved();
        expect(s.dirty()).toBe(false);
        expect(s.isChanged(table)).toBe(false);
        expect(s.originalOf(table)?.getAttribute('fill')).toBe('red');
        s.undo();
        expect(s.dirty()).toBe(true);
    });

    it('matches restored elements to the baseline by id', () => {
        const s = session();
        const edited = s.doc.clone();
        (edited.byId('table-01.001') as Element).setAttribute('fill', 'red');
        s.restore(edited.serialise(), 'Restore draft');
        expect(s.isChanged(anchor(s.doc, 'table-01.001'))).toBe(true);
        expect(s.isChanged(anchor(s.doc, 'table-01.002'))).toBe(false);
        expect(
            s.originalOf(anchor(s.doc, 'table-01.001'))?.getAttribute('fill'),
        ).toBeNull();
    });

    it('writes the draft after a change and removes it when clean again', async () => {
        const store = new MemoryDraftStore();
        const s = session(OFFICE, { draft_store: store });
        const key = await s.draftKey();
        expect(key.startsWith('map-editor:draft:zone-1:')).toBe(true);
        s.apply([recolour(s.doc, 'table-01.001', 'red')], 'Recolour');
        await s.flushDraft();
        expect((await store.get(key))?.markup).toBe(s.doc.serialise());
        expect(await s.loadDraft()).toBe(s.doc.serialise());
        s.undo();
        await s.flushDraft();
        expect(await store.get(key)).toBeNull();
        s.redo();
        await s.flushDraft();
        expect(await store.get(key)).not.toBeNull();
        await s.clearDraft();
        expect(await store.get(key)).toBeNull();
    });

    it('takes the protected set and geometry it is given', () => {
        const protected_ids = new ProtectedIdSet([
            { id: 'table-01.001', kind: 'desk', label: 'Desk 1' },
        ]);
        const s = session(OFFICE, { protected: protected_ids });
        expect(s.doc.protected).toBe(protected_ids);
        expect(
            s.index().by_anchor.get(anchor(s.doc, 'table-01.001'))?.protected,
        ).toBe(true);
    });

    it('loads every sample map', () => {
        for (const name of SAMPLE_MAPS) {
            const doc = loadMap(name, {
                geometry: new AttributeGeometryProvider(),
            });
            const s = new MapEditorSession(doc, {
                zone_id: name,
                source_text: readMap(name),
            });
            expect(s.index().entries.length).toBe(doc.elementCount());
            expect(s.dirty()).toBe(false);
        }
    });
});

describe('index geometry after mounting', () => {
    it('rebuilds the cached index once the map is in the page', () => {
        const doc = MapDocument.load(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect id="area-1.01-status" x="1" y="1" width="10" height="10"/></svg>`,
            { geometry: new AttributeGeometryProvider() },
        );
        let builds = 0;
        const counting = {
            bboxOf: (element: Element) => {
                builds += 1;
                return new AttributeGeometryProvider().bboxOf(element);
            },
            ctmOf: (element: Element) =>
                new AttributeGeometryProvider().ctmOf(element),
        };
        const session = new MapEditorSession(doc, {
            zone_id: 'zone-1',
            source_text: doc.serialise(),
            geometry: counting,
        });
        expect(session.isRendered()).toBe(false);
        session.index();
        const before = builds;
        session.index();
        expect(builds).toBe(before);
        document.body.appendChild(doc.root);
        expect(session.isRendered()).toBe(true);
        session.index();
        expect(builds).toBeGreaterThan(before);
        const again = builds;
        session.index();
        expect(builds).toBe(again);
        doc.root.remove();
    });
});
