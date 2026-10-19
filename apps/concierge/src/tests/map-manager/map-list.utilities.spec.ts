import { Building, BuildingLevel } from '@placeos/common';

import {
    appendMapHistory,
    mapFileLabel,
    mapFileName,
    mapRows,
    mapStudioUrl,
    shortenMapUrl,
    urlFileName,
} from '../../app/map-manager/map-list.utilities';

const buildings = [
    new Building({ id: 'b1', name: 'Alpha', display_name: 'Alpha Tower' }),
    new Building({ id: 'b2', name: 'Beta' }),
];

const levels = [
    new BuildingLevel({
        id: 'l1',
        parent_id: 'b1',
        name: 'Level 1',
        display_name: 'L1',
        map_id: 'https://maps.example.com/alpha/level_1.svg',
    }),
    new BuildingLevel({
        id: 'l2',
        parent_id: 'b1',
        name: 'Level 2',
        map_id: '',
    }),
    new BuildingLevel({
        id: 'l3',
        parent_id: 'b2',
        name: 'Ground',
        map_id: '/api/engine/v2/uploads/upload-123/url',
    }),
    new BuildingLevel({
        id: 'l4',
        parent_id: 'b2',
        name: 'Basement',
        map_id: '/maps/basement.svg',
    }),
];

describe('mapRows', () => {
    it('lists only levels with a map, sorted by building then name', () => {
        const rows = mapRows(levels, buildings);
        expect(rows.map((row) => row.id)).toEqual(['l1', 'l4', 'l3']);
        expect(rows[0]).toMatchObject({
            name: 'L1',
            building: 'Alpha Tower',
            building_id: 'b1',
            map_short: '…/alpha/level_1.svg',
            map_label: 'level_1.svg',
        });
        expect(rows[2].building).toBe('Beta');
    });

    it('filters by building and by search text across name, id, building and url', () => {
        expect(
            mapRows(levels, buildings, { building: 'b2' }).map((r) => r.id),
        ).toEqual(['l4', 'l3']);
        expect(
            mapRows(levels, buildings, { search: 'ground' }).map((r) => r.id),
        ).toEqual(['l3']);
        expect(
            mapRows(levels, buildings, { search: 'ALPHA' }).map((r) => r.id),
        ).toEqual(['l1']);
        expect(
            mapRows(levels, buildings, { search: 'upload-123' }).map(
                (r) => r.id,
            ),
        ).toEqual(['l3']);
        expect(mapRows(levels, buildings, { search: 'nothing' })).toEqual([]);
    });
});

describe('map helpers', () => {
    it('shortens map urls to their tail', () => {
        expect(shortenMapUrl('')).toBe('');
        expect(shortenMapUrl('/maps/basement.svg')).toBe('/maps/basement.svg');
        expect(
            shortenMapUrl('https://maps.example.com/alpha/level_1.svg?x=1'),
        ).toBe('…/alpha/level_1.svg');
        expect(shortenMapUrl('/api/engine/v2/uploads/upload-123/url')).toBe(
            '…/upload-123/url',
        );
        expect(shortenMapUrl('/a/' + 'x'.repeat(60) + '/y.svg', 20)).toBe(
            '…' + ('…/' + 'x'.repeat(60) + '/y.svg').slice(-20),
        );
    });

    it('builds the map studio link from the setting', () => {
        expect(mapStudioUrl(undefined)).toBe('/map-studio/');
        expect(mapStudioUrl('')).toBe('/map-studio/');
        expect(mapStudioUrl('https://studio.example.com')).toBe(
            'https://studio.example.com/',
        );
        expect(mapStudioUrl('/map-studio/', 'zone 1')).toBe(
            '/map-studio/#/level/zone%201',
        );
    });

    it('reads a file name from a map URL and labels upload URLs by their recorded name', () => {
        expect(urlFileName('/maps/alpha/level_1.svg?v=2')).toBe('level_1.svg');
        expect(urlFileName('https://os.place.tech/x/Level%201.svg')).toBe(
            'Level 1.svg',
        );
        expect(urlFileName('/api/engine/v2/uploads/upload-9/url')).toBeNull();
        expect(
            mapFileLabel('/api/engine/v2/uploads/upload-9/url', 'level_1.svg'),
        ).toBe('level_1.svg');
        expect(mapFileLabel('/api/engine/v2/uploads/upload-9/url')).toBe(
            '…/upload-9/url',
        );
        const names = new Map([
            ['/api/engine/v2/uploads/upload-9/url', 'level_1.svg'],
        ]);
        const saved = new BuildingLevel({
            id: 'l9',
            parent_id: 'b1',
            name: 'L9',
            display_name: 'L9',
            map_id: '/api/engine/v2/uploads/upload-9/url',
            tags: ['level'],
        });
        expect(mapRows([saved], buildings, {}, names)[0].map_label).toBe(
            'level_1.svg',
        );
    });

    it('keeps the file name across saves: the recorded name, else the URL file name, else the level', () => {
        const level = { display_name: 'Level 1 (East)', name: '', id: 'l1' };
        expect(
            mapFileName(
                level,
                '/api/engine/v2/uploads/upload-9/url',
                'level_1.svg',
            ),
        ).toBe('level_1.svg');
        expect(mapFileName(level, '/maps/alpha/level_1.svg')).toBe(
            'level_1.svg',
        );
        expect(mapFileName(level, '/api/engine/v2/uploads/upload-9/url')).toBe(
            'level-1-east.svg',
        );
    });

    it('names the uploaded file after the level', () => {
        expect(
            mapFileName({ display_name: 'Level 1 (East)', name: '', id: 'l1' }),
        ).toBe('level-1-east.svg');
        expect(mapFileName({ display_name: '', name: '', id: '' })).toBe(
            'level-map.svg',
        );
    });

    it('keeps the newest ten history entries, newest first', () => {
        const entry = (n: number) => ({
            upload_id: `u${n}`,
            map_id: `/m/${n}`,
            at: n,
            by: 'a@b.c',
            summary: '',
        });
        const existing = Array.from({ length: 12 }, (_, i) => entry(i));
        const list = appendMapHistory(existing, entry(99));
        expect(list.length).toBe(10);
        expect(list[0].upload_id).toBe('u99');
        expect(list[9].upload_id).toBe('u8');
        expect(appendMapHistory(undefined, entry(1))).toEqual([entry(1)]);
        expect(appendMapHistory({ bad: true }, entry(1))).toEqual([entry(1)]);
        expect(appendMapHistory([null, 'x', entry(2)], entry(1))).toEqual([
            entry(1),
            entry(2),
        ]);
    });
});
