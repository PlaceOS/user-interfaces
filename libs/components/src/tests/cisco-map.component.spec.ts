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

    describe('before the Cisco Spaces script loads', () => {
        beforeEach(() => {
            vi.useFakeTimers();
            vi.stubGlobal('SpacesDigitalMap', undefined);
        });

        afterEach(() => vi.useRealTimers());

        it('waits for the script, then starts the map', async () => {
            const json = (body: unknown) =>
                Promise.resolve(new Response(JSON.stringify(body)));
            const fetch_api = vi
                .fn()
                .mockReturnValueOnce(
                    json({ result: { buildings: [{ id: 'bld-1' }] } }),
                )
                .mockReturnValueOnce(json({ session_key: 'session' }));
            vi.stubGlobal('fetch', fetch_api);
            const fixture = TestBed.createComponent(CiscoMapComponent);
            fixture.detectChanges();

            await vi.advanceTimersByTimeAsync(5000);
            expect(fetch_api).not.toHaveBeenCalled();
            expect(fixture.componentInstance.error()).toBe(false);

            vi.stubGlobal(
                'SpacesDigitalMap',
                class {
                    constructor(options: unknown) {
                        maps.push(options);
                    }
                },
            );
            await vi.advanceTimersByTimeAsync(1000);
            expect(maps).toHaveLength(1);
        });

        it('shows an error when the script does not load in 30 seconds', async () => {
            vi.spyOn(console, 'error').mockImplementation(() => undefined);
            const fixture = TestBed.createComponent(CiscoMapComponent);
            fixture.detectChanges();

            await vi.advanceTimersByTimeAsync(28 * 1000);
            expect(fixture.componentInstance.error()).toBe(false);

            await vi.advanceTimersByTimeAsync(2000);
            expect(fixture.componentInstance.error()).toBe(true);
        });
    });
});
