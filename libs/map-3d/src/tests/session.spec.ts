import { hasMap3D, KIND_ATTR } from '../lib/annotations';
import { footprintsOf } from '../lib/mesh';
import { Map3DSession } from '../lib/session';
import { SMALL_MAP } from './fixtures';

describe('Map3DSession', () => {
    it('starts clean on a map with no 3D view', () => {
        const session = new Map3DSession(SMALL_MAP);
        expect(session.unit).toBe(0);
        expect(session.dirty).toBe(false);
        expect(session.has_saved_3d).toBe(false);
        expect(session.can_undo).toBe(false);
    });

    it('detects, saves and reopens with the same annotations', () => {
        const session = new Map3DSession(SMALL_MAP);
        const changes = vi.fn();
        session.onChange = changes;
        session.detect();
        expect(changes).toHaveBeenCalledTimes(1);
        expect(session.dirty).toBe(true);
        const saved = session.serialise();
        expect(hasMap3D(saved)).toBe(true);
        session.markSaved();
        expect(session.dirty).toBe(false);

        const reopened = new Map3DSession(saved);
        expect(reopened.has_saved_3d).toBe(true);
        expect(reopened.counts()).toEqual(session.counts());
        expect(reopened.unit).toBeCloseTo(session.unit, 3);
    });

    it('assigns a kind to a group and undoes it', () => {
        const session = new Map3DSession(SMALL_MAP);
        session.detect();
        const chairs = session.map.svg.querySelector('#chairs')!;
        expect(session.counts().seat).toBe(4);
        session.assign([chairs], 'flat');
        expect(session.counts().seat).toBe(0);
        session.undo();
        expect(session.counts().seat).toBe(4);
        session.redo();
        expect(session.counts().seat).toBe(0);
    });

    it('changes the height of a kind without touching custom heights', () => {
        const session = new Map3DSession(SMALL_MAP);
        session.detect();
        const table = session.map.svg.querySelector('#table-1')!;
        const other = session.map.svg.querySelector('#table-2')!;
        session.assign([table], 'desk', 1.1);
        session.setKindHeight('desk', 0.8);
        expect(session.heightOf(table)).toBe(1.1);
        expect(session.heightOf(other)).toBe(0.8);
        expect(session.kindHeight('desk')).toBe(0.8);
    });

    it('keeps changes made after the map was serialised as unsaved', () => {
        const session = new Map3DSession(SMALL_MAP);
        session.detect();
        session.serialise();
        session.assign([session.map.svg.querySelector('#table-1')!], 'flat');
        session.markSaved();
        expect(session.dirty).toBe(true);
        session.serialise();
        session.markSaved();
        expect(session.dirty).toBe(false);
    });

    it('does nothing for the height of a kind the map has none of', () => {
        const session = new Map3DSession(SMALL_MAP);
        session.detect();
        session.serialise();
        session.markSaved();
        session.setKindHeight('partition', 1);
        expect(session.can_undo).toBe(true);
        expect(session.dirty).toBe(false);
        const steps = session['_undo'].length;
        session.setKindHeight('partition', 2);
        expect(session['_undo'].length).toBe(steps);
        session.setKindHeight('wall', 99);
        expect(session.kindHeight('wall')).toBe(20);
    });

    it('reverts a scale with many decimal places', () => {
        const session = new Map3DSession(
            SMALL_MAP.replace('<svg ', '<svg data-3d-unit="12.345678" '),
        );
        session.assign([session.map.svg.querySelector('#table-1')!], 'desk');
        expect(session.dirty).toBe(true);
        session.revert();
        expect(session.dirty).toBe(false);
        expect(session.unit).toBe(12.345678);
    });

    it('keeps the heights in use when it detects again', () => {
        const session = new Map3DSession(SMALL_MAP);
        session.detect();
        session.setKindHeight('wall', 2);
        session.detect();
        expect(session.kindHeight('wall')).toBe(2);
    });

    it('sets the scale from the width of the map', () => {
        const session = new Map3DSession(SMALL_MAP);
        session.detect();
        session.setWidthMetres(40);
        expect(session.unit).toBeCloseTo(10);
        expect(session.width_metres).toBeCloseTo(40);
    });

    it('lists layers with the kind of what is inside', () => {
        const session = new Map3DSession(SMALL_MAP);
        session.detect();
        const layers = session.layers();
        const byName = (name: string) =>
            layers.find((layer) => layer.name === name)!;
        expect(byName('walls').kind).toBe('wall');
        expect(byName('walls').depth).toBe(1);
        expect(byName('skeleton').has_children).toBe(true);
        expect(byName('furniture').kind).toBe('mixed');
        expect(byName('chairs').count).toBe(4);
    });

    it('finds elements that look the same', () => {
        const session = new Map3DSession(SMALL_MAP);
        const [chair] = session.shapesIn(
            session.map.svg.querySelector('#chairs')!,
        );
        expect(session.similar(chair)).toHaveLength(4);
    });

    it('reverts to the saved annotations', () => {
        const session = new Map3DSession(SMALL_MAP);
        session.detect();
        session.markSaved();
        const before = session.serialise();
        session.assign([session.map.svg.querySelector('#walls')!], 'glass');
        session.setWidthMetres(99);
        expect(session.dirty).toBe(true);
        session.revert();
        expect(session.dirty).toBe(false);
        expect(session.serialise()).toBe(before);
    });

    it('hides a layer for the preview without saving that', () => {
        const session = new Map3DSession(SMALL_MAP);
        session.detect();
        session.markSaved();
        const walls = session.map.svg.querySelector('#walls')!;
        session.setHidden(walls, true);
        expect(
            session.layers().find((layer) => layer.name === 'walls')!.hidden,
        ).toBe(true);
        expect(footprintsOf(session.map, session.unit)).not.toContainEqual(
            expect.objectContaining({ kind: 'wall' }),
        );
        expect(session.dirty).toBe(false);
        expect(session.serialise()).not.toContain('data-3d-hidden');
        session.setHidden(walls, false);
        expect(footprintsOf(session.map, session.unit)).toContainEqual(
            expect.objectContaining({ kind: 'wall' }),
        );
    });

    it('removes the 3D view', () => {
        const session = new Map3DSession(SMALL_MAP);
        session.detect();
        session.remove();
        expect(session.unit).toBe(0);
        expect(session.map.svg.querySelector(`[${KIND_ATTR}]`)).toBeNull();
        expect(hasMap3D(session.serialise())).toBe(false);
    });
});
