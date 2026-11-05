import { TestBed } from '@angular/core/testing';
import { OrganisationService, SettingsService } from '@placeos/common';

import { CiscoMapComponent } from '../lib/cisco-map.component';

describe('CiscoMapComponent', () => {
    const maps: unknown[] = [];

    beforeEach(() => {
        maps.length = 0;
        vi.stubGlobal(
            'SpacesDigitalMap',
            class {
                constructor(options: unknown) {
                    maps.push(options);
                }
            },
        );
        const config = {
            api_endpoint: 'https://spaces.example',
            access_token: 'key',
        };
        TestBed.configureTestingModule({
            imports: [CiscoMapComponent],
            providers: [
                {
                    provide: OrganisationService,
                    useValue: { waitUntilInitialised: async () => undefined },
                },
                {
                    provide: SettingsService,
                    useValue: {
                        get: (key: string) =>
                            key.endsWith('.script') ? '' : config,
                    },
                },
            ],
        });
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it('requests the session key for the building without a request body', async () => {
        const json = (body: unknown) =>
            Promise.resolve(new Response(JSON.stringify(body)));
        const fetch_api = vi
            .fn()
            .mockReturnValueOnce(
                json({
                    result: {
                        hashed_tenant_id: 'tenant',
                        buildings: [{ id: 'bld-1', hashed_id: 'hashed' }],
                    },
                }),
            )
            .mockReturnValueOnce(json({ session_key: 'session' }));
        vi.stubGlobal('fetch', fetch_api);

        TestBed.createComponent(CiscoMapComponent).detectChanges();

        await vi.waitFor(() => expect(maps).toHaveLength(1));
        const [url, init] = fetch_api.mock.calls[1];
        expect(url).toBe('https://spaces.example/sessionKey?building_id=bld-1');
        expect(init.body).toBeUndefined();
        expect(maps[0]).toMatchObject({
            sessionKey: 'session',
            tenantId: 'tenant',
            locationId: 'hashed',
        });
    });

    it('shows an error when a request fails', async () => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError()));
        const fixture = TestBed.createComponent(CiscoMapComponent);
        fixture.detectChanges();

        await vi.waitFor(() =>
            expect(fixture.componentInstance.error()).toBe(true),
        );
        expect(maps).toHaveLength(0);
    });
});
