import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { MapRow } from '../../app/map-manager/map-list.utilities';
import { MapManagementService } from '../../app/map-manager/map-management.service';
import { MapManagerComponent } from '../../app/map-manager/map-manager.component';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

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
        vi.mocked(ts_client.authority).mockReturnValue({} as never);
        vi.mocked(ts_client.token).mockReturnValue('');
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
        expect(fetch_mock).toHaveBeenCalledWith(upload.map_id, {});
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
