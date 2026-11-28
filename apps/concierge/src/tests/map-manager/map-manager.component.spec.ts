import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { MapRow } from '../../app/map-manager/map-list.utilities';
import { MapManagementService } from '../../app/map-manager/map-management.service';
import { MapManagerComponent } from '../../app/map-manager/map-manager.component';

import { startMockPlaceClient } from '@placeos/common/tests';

const MAP = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"/>';

/** Let the thumbnail effect run and its map fetches resolve. */
async function settle() {
    TestBed.tick();
    for (let i = 0; i < 5; i++) await Promise.resolve();
}

describe('MapManagerComponent', () => {
    let spectator: Spectator<MapManagerComponent>;
    let rows: ReturnType<typeof signal<MapRow[]>>;
    let fetch_mock: ReturnType<typeof vi.fn>;
    let next_object_url = 0;
    // The map store caches by URL for the whole run, so every test uses new URLs
    let run = 0;
    const row = (id: string, map_id: string) => ({ id, map_id }) as MapRow;
    const { createObjectURL, revokeObjectURL } = URL;

    const createComponent = createComponentFactory({
        component: MapManagerComponent,
        detectChanges: false,
        overrideComponents: [
            [MapManagerComponent, { set: { template: '', imports: [] } }],
        ],
    });

    beforeEach(() => {
        run++;
        // Mock mode has an authority, so the map store does not wait for one
        startMockPlaceClient();
        fetch_mock = vi.fn(async (url: string) =>
            url.includes('missing')
                ? { ok: false }
                : { ok: true, text: async () => MAP },
        );
        vi.stubGlobal('fetch', fetch_mock);
        URL.createObjectURL = vi.fn(() => `blob:${++next_object_url}`);
        URL.revokeObjectURL = vi.fn();
        rows = signal<MapRow[]>([]);
        spectator = createComponent({
            providers: [
                MockProvider(MapManagementService, {
                    rows,
                    options: signal({}),
                    buildings: signal([]),
                } as Partial<MapManagementService>),
            ],
        });
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        Object.assign(URL, { createObjectURL, revokeObjectURL });
    });

    it('should show an uploaded map only after the API fetch loads it', async () => {
        const upload = row('lvl-1', `/api/engine/v2/uploads/${run}/map.svg`);
        rows.set([upload, row('lvl-2', upload.map_id)]);

        expect(spectator.component.thumbnailSrc(upload)).toBeNull();
        await settle();

        expect(fetch_mock).toHaveBeenCalledTimes(1);
        expect(fetch_mock).toHaveBeenCalledWith(
            upload.map_id,
            expect.anything(),
        );
        expect(spectator.component.thumbnailSrc(upload)).toMatch(/^blob:/);
    });

    it('should use the map URL of an external map until the fetch finishes', () => {
        const external = row('lvl-1', `https://cdn.example.com/${run}.svg`);
        rows.set([external]);

        expect(spectator.component.thumbnailSrc(external)).toBe(
            external.map_id,
        );
    });

    it('should show no image when the map fails to load or to render', async () => {
        const missing = row('lvl-1', `/maps/${run}/missing.svg`);
        const broken = row('lvl-2', `/maps/${run}/broken.svg`);
        rows.set([missing, broken]);
        await settle();

        expect(spectator.component.thumbnailSrc(missing)).toBeNull();
        expect(spectator.component.thumbnailSrc(broken)).toMatch(/^blob:/);

        spectator.component.markBroken(broken.id);
        expect(spectator.component.thumbnailSrc(broken)).toBeNull();
    });

    it('should mark the maps that have a 3D view', async () => {
        const flat = row('lvl-1', `/maps/${run}/flat.svg`);
        const raised = row('lvl-2', `/maps/${run}/raised-3d.svg`);
        fetch_mock.mockImplementation(async (url: string) => ({
            ok: true,
            text: async () =>
                url.includes('raised-3d')
                    ? MAP.replace('<svg', '<svg data-3d-unit="12"')
                    : MAP,
        }));
        rows.set([flat, raised]);
        await settle();

        expect(spectator.component.has_3d().has(raised.map_id)).toBe(true);
        expect(spectator.component.has_3d().has(flat.map_id)).toBe(false);
        expect(spectator.component.convertLabel(raised)).toBe(
            'APP.CONCIERGE.MAPS_3D_EDIT',
        );
        expect(spectator.component.convertLabel(flat)).toBe(
            'APP.CONCIERGE.MAPS_3D_CONVERT',
        );
    });

    it('should open the 3D page of a level', () => {
        const navigate = vi
            .spyOn(spectator.inject(Router), 'navigate')
            .mockResolvedValue(true);
        spectator.component.convertTo3D(row('lvl-9', '/maps/a.svg'));
        expect(navigate).toHaveBeenCalledWith([
            '/map-management',
            'lvl-9',
            '3d',
        ]);
    });

    it('should release the loaded map images when destroyed', async () => {
        const map = row('lvl-1', `/maps/${run}/a.svg`);
        rows.set([map]);
        await settle();
        const url = spectator.component.thumbnailSrc(map);
        expect(url).toMatch(/^blob:/);

        spectator.fixture.destroy();

        expect(URL.revokeObjectURL).toHaveBeenCalledWith(url);
    });
});
