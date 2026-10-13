import {
    buildContext,
    contextEntry,
    idMentions,
    mentionedTokens,
    orderEntries,
    styleRuleStrings,
    subtreeMarkup,
} from '../lib/ai/context';
import {
    MAP_AI_CONTEXT_SCHEMA,
    MAP_AI_MARKUP_SCHEMA,
    MapAIContext,
    MapAIContextEntry,
} from '../lib/ai/types';
import { AttributeGeometryProvider } from '../lib/geometry';
import { MapDocument } from '../lib/map-document';
import { buildIndex } from '../lib/map-index';
import { ProtectedIdSet } from '../lib/protected-ids';
import { FakeSession, fixtureContext } from './ai-fakes';
import { anchor, OFFICE } from './fixtures';

const HEX8 = /^[0-9a-f]{8}$/;

/** The shape rules both the server fixture and a built context must satisfy. */
function assertContextShape(context: MapAIContext): void {
    expect(context.schema).toBe(MAP_AI_CONTEXT_SCHEMA);
    expect(context.viewBox).toHaveLength(4);
    expect(context.image_px).toHaveLength(2);
    expect(typeof context.units_per_px).toBe('number');
    expect(Array.isArray(context.protected_ids)).toBe(true);
    expect(Array.isArray(context.duplicate_ids)).toBe(true);
    expect(Array.isArray(context.shortlist)).toBe(true);
    expect(typeof context.subtrees).toBe('object');
    expect(Array.isArray(context.style_rules)).toBe(true);
    expect(context.markup.schema).toBe(MAP_AI_MARKUP_SCHEMA);
    expect(context.markup.viewBox).toHaveLength(4);
    expect(Array.isArray(context.markup.annotations)).toBe(true);
    expect(Array.isArray(context.markup.selected)).toBe(true);
    expect(Object.keys(context.stats).sort()).toEqual([
        'bytes',
        'elements',
        'ids',
    ]);
    for (const entry of context.index) assertEntryShape(entry);
    for (const key of context.shortlist)
        expect(typeof context.subtrees[key]).toBe('string');
}

function assertEntryShape(entry: MapAIContextEntry): void {
    expect(Object.keys(entry).sort()).toEqual(
        [
            'a',
            'bbox',
            'cls',
            'fill',
            'h',
            'id',
            'in',
            'kind',
            'label',
            'p',
            'piece',
            'prot',
            'tag',
            'z',
        ].sort(),
    );
    expect(typeof entry.a).toBe('string');
    expect(entry.id === null || typeof entry.id === 'string').toBe(true);
    expect(typeof entry.tag).toBe('string');
    expect(entry.cls === null || typeof entry.cls === 'string').toBe(true);
    expect(entry.label === null || typeof entry.label === 'string').toBe(true);
    expect(
        entry.bbox === null ||
            (entry.bbox.length === 4 &&
                entry.bbox.every((n) => typeof n === 'number')),
    ).toBe(true);
    expect(entry.p === null || typeof entry.p === 'string').toBe(true);
    expect(entry.z === null || typeof entry.z === 'number').toBe(true);
    expect(typeof entry.kind).toBe('string');
    expect(typeof entry.prot).toBe('boolean');
    expect(entry.h).toMatch(HEX8);
    expect(entry.fill === null || typeof entry.fill === 'string').toBe(true);
    expect(entry.in === null || typeof entry.in === 'string').toBe(true);
    expect(entry.piece === null || typeof entry.piece === 'string').toBe(true);
}

describe('buildContext', () => {
    it('matches the server fixture key by key', () => {
        const fixture = fixtureContext();
        assertContextShape(fixture);
        const doc = MapDocument.load(OFFICE, {
            protected: new ProtectedIdSet([
                { id: 'table-01.002', kind: 'desk', label: 'Desk 2' },
            ]),
        });
        const session = new FakeSession(doc);
        const selected = anchor(doc, 'table-01.001');
        const built = buildContext(session, { selection: [selected] });
        const context = built.context;
        assertContextShape(context);
        expect(Object.keys(context).sort()).toEqual(
            Object.keys(fixture).sort(),
        );
        expect(Object.keys(context.markup).sort()).toEqual(
            Object.keys(fixture.markup).sort(),
        );
        expect(context.viewBox).toEqual([0, 0, 1000, 500]);
        expect(context.image_px).toEqual([2048, 1024]);
        expect(context.units_per_px).toBe(0.4883);
        expect(context.markup.selected).toEqual([selected]);
        expect(context.markup.annotations).toEqual([]);
        expect(context.protected_ids).toEqual(['table-01.002']);
        expect(
            context.index.find((entry) => entry.id === 'table-01.002')?.prot,
        ).toBe(true);
        expect(context.stats).toEqual(session.index().stats);
        expect(context.style_rules).toContain('.desk{fill:#dde;stroke:#446}');
        expect(built.fits).toBe(true);
        expect(built.dropped).toEqual({ subtrees: 0, anonymous: 0, named: 0 });
        expect(built.bytes).toBe(
            new TextEncoder().encode(JSON.stringify(context)).length,
        );
    });

    it('lists named elements first and leaves out the root and non-rendered elements', () => {
        const doc = MapDocument.load(OFFICE);
        const session = new FakeSession(doc);
        const { context } = buildContext(session);
        const tags = context.index.map((entry) => entry.tag);
        expect(tags).not.toContain('svg');
        expect(tags).not.toContain('defs');
        expect(tags).not.toContain('style');
        expect(tags).not.toContain('linearGradient');
        expect(tags).not.toContain('marker');
        const named_count = context.index.filter(
            (entry) => entry.id || entry.label || entry.prot,
        ).length;
        expect(
            context.index
                .slice(0, named_count)
                .every((entry) => entry.id || entry.label || entry.prot),
        ).toBe(true);
        const anonymous = context.index.slice(named_count);
        expect(anonymous.length).toBeGreaterThan(0);
        const areas = anonymous.map((entry) =>
            entry.bbox ? entry.bbox[2] * entry.bbox[3] : 0,
        );
        expect([...areas].sort((a, b) => b - a)).toEqual(areas);
        const base = context.index.find((entry) => entry.id === 'base');
        expect(base?.p).toBeNull();
        const desk = context.index.find((entry) => entry.id === 'table-01.001');
        expect(desk?.p).toBe(
            context.index.find((entry) => entry.id === 'desks')?.a,
        );
        expect(desk?.cls).toBe('desk');
        expect(desk?.bbox).toEqual([100, 200, 30, 20]);
        const label = context.index.find((entry) => entry.id === 'label-1');
        expect(label?.label).toBe('Meeting 1.01(8 seats)');
    });

    it('sends the markup of the selection and the shortlist without anchors', () => {
        const doc = MapDocument.load(OFFICE);
        const session = new FakeSession(doc);
        const selected = anchor(doc, 'table-01.001');
        const listed = anchor(doc, 'area-1.01-status');
        const { context } = buildContext(session, {
            selection: [selected],
            shortlist: [listed, selected, 'e9999'],
        });
        expect(context.shortlist).toEqual([selected, listed]);
        expect(context.subtrees[selected]).toContain('id="table-01.001"');
        expect(context.subtrees[selected]).not.toContain('data-map-editor');
        expect(context.subtrees[listed]).toContain('area-1.01-status');
        expect(Object.keys(context.subtrees)).toEqual([selected, listed]);
    });

    it('cuts a long subtree at the byte cap', () => {
        const doc = MapDocument.load(OFFICE);
        const desks = doc.byId('desks') as Element;
        const markup = subtreeMarkup(desks, 60);
        expect(markup.endsWith('...')).toBe(true);
        expect(new TextEncoder().encode(markup).length).toBeLessThanOrEqual(60);
        expect(subtreeMarkup(desks, 10_000)).toContain('table-01.003');
    });

    it('shrinks to the budget by dropping subtrees, then anonymous entries, and says so', () => {
        const doc = MapDocument.load(OFFICE);
        const session = new FakeSession(doc);
        const selected = anchor(doc, 'table-01.001');
        const full = buildContext(session, { selection: [selected] });
        const without_subtrees = buildContext(session, {
            selection: [selected],
            max_bytes: full.bytes - 10,
        });
        expect(without_subtrees.dropped.subtrees).toBe(1);
        expect(without_subtrees.dropped.anonymous).toBe(0);
        expect(without_subtrees.context.subtrees).toEqual({});
        expect(without_subtrees.context.shortlist).toEqual([]);
        expect(without_subtrees.context.markup.selected).toEqual([selected]);
        expect(without_subtrees.fits).toBe(true);
        expect(without_subtrees.bytes).toBeLessThanOrEqual(full.bytes - 10);

        const named_count = orderEntries(session.index()).filter(
            (entry) => entry.id || entry.label || entry.protected,
        ).length;
        const fewer = buildContext(session, {
            selection: [selected],
            max_bytes: without_subtrees.bytes - 40,
        });
        expect(fewer.dropped.anonymous).toBeGreaterThan(0);
        expect(fewer.dropped.named).toBe(0);
        expect(fewer.context.index.length).toBeLessThan(
            without_subtrees.context.index.length,
        );
        expect(fewer.context.index.length).toBeGreaterThanOrEqual(named_count);
        expect(fewer.fits).toBe(true);

        const tiny = buildContext(session, { max_bytes: 600 });
        expect(tiny.dropped.named).toBeGreaterThan(0);
        expect(tiny.bytes).toBe(
            new TextEncoder().encode(JSON.stringify(tiny.context)).length,
        );
    });

    it('takes the snapshot size when one was rendered', () => {
        const doc = MapDocument.load(OFFICE);
        const session = new FakeSession(doc);
        const { context } = buildContext(session, {
            snapshot: { image_px: [1024, 512], units_per_px: 0.9766 },
        });
        expect(context.image_px).toEqual([1024, 512]);
        expect(context.units_per_px).toBe(0.9766);
    });

    it('formats entries and rules the way the prompt reads them', () => {
        const doc = MapDocument.load(OFFICE);
        const index = new FakeSession(doc).index();
        const root = index.entries[0];
        expect(root.kind).toBe('root');
        const base = index.entries.find((entry) => entry.id === 'base');
        const entry = contextEntry(base as typeof root, root.anchor);
        expect(entry.p).toBeNull();
        expect(entry.cls).toBeNull();
        expect(styleRuleStrings(doc.styleRules())).toEqual([
            '.desk{fill:#dde;stroke:#446}',
            '.wall{fill:none;stroke:#000;stroke-width:2}',
            '.room{fill:#fff}',
        ]);
    });
});

describe('containment, glyphs and mentions', () => {
    const map = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600">
  <g id="bookings">
    <path id="area-1.03-status" d="M500 300h400v250h-400z" fill="#505a5e"/>
    <path id="area-1.01-status" d="M20 300h300v250h-300z" fill="#505a5e"/>
  </g>
  <g id="furniture">
    <g id="table-01.004"><rect x="520" y="400" width="60" height="30" fill="#fff"/></g>
    <circle cx="540" cy="450" r="8" fill="#888"/>
    <path d="M560 320h12v14h-12z" fill="#fff"/>
    <path d="M575 320h12v14h-12z" fill="#fff"/>
    <path d="M590 320h12v14h-12z" fill="#fff"/>
    <path d="M700 320h300v200h-300z" fill="#fff"/>
    <path d="M820 380h10v10h-10z" fill="#0a0"/>
  </g>
  <path d="M960 10h30v30h-30z" fill="#0f0"/>
</svg>`;

    function build(instruction?: string) {
        const doc = MapDocument.load(map, {
            geometry: new AttributeGeometryProvider(),
        });
        const index = buildIndex(doc);
        return {
            doc,
            index,
            built: buildContext({ doc, index: () => index }, { instruction }),
        };
    }

    it('names the smallest room, desk or zone holding each element', () => {
        const { built } = build();
        const by_id = new Map(built.context.index.map((e) => [e.id, e]));
        const by_tag = (tag: string) =>
            built.context.index.filter((e) => e.tag === tag && !e.id);
        expect(by_id.get('table-01.004')?.in).toBe('area-1.03-status');
        expect(by_tag('circle')[0].in).toBe('area-1.03-status');
        expect(by_id.get('area-1.03-status')?.in).toBeNull();
        expect(by_id.get('area-1.01-status')?.in).toBeNull();
        const outside = built.context.index.find(
            (e) => e.fill === '#0f0' && e.tag === 'path',
        );
        expect(outside?.in).toBeNull();
    });

    it('clusters a row of small same-coloured paths into a label and marks its glyphs', () => {
        const { built } = build();
        const paths = built.context.index.filter(
            (e) => e.tag === 'path' && !e.id,
        );
        const glyphs = paths.filter((e) => e.kind === 'glyph');
        expect(glyphs.length).toBe(3);
        for (const glyph of glyphs) {
            expect(glyph.in).toBe('area-1.03-status');
            expect(glyph.fill).toBe('#fff');
        }
        const big = paths.find((e) => e.bbox && e.bbox[2] === 300);
        expect(big?.kind).toBe('art');
        const lone = paths.find((e) => e.fill === '#0a0');
        expect(lone?.kind).toBe('art');
        expect(built.context.labels).toEqual([
            {
                in: 'area-1.03-status',
                anchors: glyphs.map((e) => e.a),
                bbox: [560, 320, 42, 14],
                fill: '#fff',
            },
        ]);
    });

    it('shortlists the elements the instruction names by number', () => {
        expect(
            mentionedTokens('Rename Boardroom 1.03 and desk 01.004'),
        ).toEqual(['1.03', '01.004']);
        expect(idMentions('area-1.03-status', '1.03')).toBe(true);
        expect(idMentions('table-01.003', '1.03')).toBe(false);
        expect(idMentions('park-100', '100')).toBe(true);
        const { built, doc } = build(
            'Rename Boardroom 1.03 to Conference Room',
        );
        const room = doc.byId('area-1.03-status') as Element;
        expect(built.context.shortlist).toEqual([doc.anchorOf(room)]);
        expect(built.context.subtrees[doc.anchorOf(room)]).toContain(
            'area-1.03-status',
        );
        expect(build('Make the walls darker').built.context.shortlist).toEqual(
            [],
        );
    });
});

describe('pieces', () => {
    it('gives the stacked layers of one drawn object one piece id', () => {
        const doc = MapDocument.load(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><g id="furniture"><path d="M100 100h30v27h-30z" fill="#020202"/><path d="M101 98h30v27h-30z" fill="#596069"/><path d="M101 94h30v27h-30z" fill="#9baeb8"/><path d="M109 94h22v28h-22z" fill="none" stroke="#7a8f94"/><path d="M300 100h30v27h-30z" fill="#020202"/><path d="M301 96h30v27h-30z" fill="#9baeb8"/><rect x="200" y="200" width="60" height="30" fill="#fff"/></g></svg>`,
            { geometry: new AttributeGeometryProvider() },
        );
        const index = buildIndex(doc);
        const built = buildContext({ doc, index: () => index });
        const pieces = built.context.index
            .filter((e) => e.tag === 'path' || e.tag === 'rect')
            .map((e) => e.piece);
        expect(pieces.filter((piece) => piece === 'p1').length).toBe(4);
        expect(pieces.filter((piece) => piece === 'p2').length).toBe(2);
        expect(pieces.filter((piece) => piece === null).length).toBe(1);
    });
});
