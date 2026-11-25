import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    type FakeSession,
    httpFailure,
    startFakePlaceClient,
} from '@placeos/common/tests';
import {
    createAuthSession,
    type DomainAuthorityInput,
    type JsonValue,
    type Metadata,
    metadata,
} from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';

// The login session is a fake and the metadata operations are stubs
vi.mock('@placeos/ts-client', { spy: true });

const AUTHORITY: DomainAuthorityInput = {
    id: 'authority-1',
    domain: 'place.example.com',
    login_url: '/login?continue={{url}}',
    config: {
        org_zone: 'org-2',
        map_builder: {
            llm_system_id: 'sys-ai',
            llm_model: 'gpt-5.1',
        },
    },
};

/** The floorplan metadata of a level, as `metadata.show` gives it */
function floorplanMetadata(details: JsonValue, updated_at = 0): Metadata {
    return {
        name: 'map-studio',
        description: '',
        details,
        parent_id: 'level-1',
        schema_id: null,
        editors: [],
        modified_by_id: null,
        updated_at,
        created_at: 0,
    };
}

import { PlaceOSService } from '../app/data/placeos.service';

/** Makes this window look opened by another tab that answers token requests with `reply`. */
function openedBy(reply: Record<string, unknown> | null) {
    const frame = document.createElement('iframe');
    document.body.appendChild(frame);
    const opener = frame.contentWindow as Window;
    vi.spyOn(opener, 'postMessage').mockImplementation(() => {
        if (!reply) return;
        window.dispatchEvent(
            new MessageEvent('message', {
                source: opener,
                origin: `http://${location.hostname}:4200`,
                data: { type: 'placeos:token', ...reply },
            }),
        );
    });
    Object.defineProperty(window, 'opener', {
        value: opener,
        configurable: true,
    });
}

/** Records the last request so the auth headers can be checked */
function stubFetch(authority_ok: boolean) {
    const calls: [string, RequestInit][] = [];
    const fetch = vi.fn(async (url: string, options: RequestInit = {}) => {
        calls.push([url, options]);
        if (url.endsWith('/auth/authority'))
            return { ok: authority_ok, json: async () => ({}) };
        if (url.endsWith('/zones/level-1'))
            return {
                ok: true,
                json: async () => ({ map_id: '/maps/level-1.svg' }),
            };
        if (url.endsWith('/zones/level-2'))
            return {
                ok: true,
                json: async () => ({ map_id: '///other.example/map.svg' }),
            };
        if (url.endsWith('.svg'))
            return {
                ok: true,
                status: 200,
                text: async () => '<svg viewBox="0 0 10 10"></svg>',
            };
        if (url.includes('/zones') && url.includes('tags=org'))
            return {
                ok: true,
                json: async () => [{ id: 'org-1' }, { id: 'org-2' }],
            };
        if (url.includes('/zones?') && url.includes('tags=level')) {
            // Two full pages, then a short one
            const offset = Number(
                new URL(url, 'http://x').searchParams.get('offset'),
            );
            const size = offset < 200 ? 100 : 5;
            return {
                ok: true,
                json: async () =>
                    Array.from({ length: size }, (_, i) => ({
                        id: `level-${offset + i}`,
                    })),
            };
        }
        if (url.includes('/zones?')) return { ok: true, json: async () => [] };
        if (url.includes('/systems?')) {
            // One full page, then a short one
            const offset = Number(
                new URL(url, 'http://x').searchParams.get('offset'),
            );
            const size = offset < 100 ? 100 : 20;
            return {
                ok: true,
                json: async () =>
                    Array.from({ length: size }, (_, i) => ({
                        id: `sys-${offset + i}`,
                    })),
            };
        }
        if (url.includes('/LLM_1/chat'))
            return {
                ok: true,
                json: async () => [
                    { message: { content: '{"outline":null,"rooms":[]}' } },
                ],
            };
        return { ok: true, json: async () => ({}) };
    });
    vi.stubGlobal('fetch', fetch);
    return calls;
}

describe('PlaceOSService', () => {
    let service: PlaceOSService;
    let go_to_login: ReturnType<typeof vi.spyOn>;
    let fake: FakeSession;

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        // The service starts the client with this session
        fake = startFakePlaceClient();
        fake.signIn(AUTHORITY, 'session-token');
        vi.mocked(createAuthSession).mockClear();
        vi.mocked(metadata.show).mockResolvedValue(
            mockReply({ 'map-studio': floorplanMetadata({}) }),
        );
        vi.mocked(metadata.update).mockResolvedValue(
            mockReply(floorplanMetadata({})),
        );
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        service = TestBed.inject(PlaceOSService);
        go_to_login = vi
            .spyOn(service, 'goToLogin')
            .mockImplementation(() => undefined);
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.unstubAllGlobals();
        Object.defineProperty(window, 'opener', {
            value: null,
            configurable: true,
        });
        document.body.innerHTML = '';
    });

    it('uses the domain session when the authority resolves', async () => {
        const calls = stubFetch(true);
        await service.init();
        expect(service.mode()).toBe('domain');
        expect(service.config.configured).toBe(true);
        expect(service.aiConfig).toEqual({
            system_id: 'sys-ai',
            model: 'gpt-5.1',
        });

        await service.getZones();
        const [url, options] = calls[calls.length - 1];
        expect(url).toContain('/api/engine/v2/zones');
        expect(new URL(url).origin).toBe(location.origin);
        expect(new Headers(options.headers).get('Authorization')).toBe(
            'Bearer session-token',
        );
    });

    it('sends a domain request again with the renewed credential after a 401', async () => {
        stubFetch(true);
        await service.init();
        const auth = fake.session.client_auth;
        if (auth.kind !== 'credential') throw new Error('Expected a session');
        vi.spyOn(auth, 'rejected').mockImplementation(async () => {
            fake.setCredential({ kind: 'bearer', token: 'renewed-token' });
            return true;
        });
        const fetch = vi.mocked(globalThis.fetch);
        fetch.mockClear();
        fetch.mockResolvedValueOnce(new Response(null, { status: 401 }));

        await expect(service.getZone('level-1')).resolves.toEqual({
            map_id: '/maps/level-1.svg',
        });

        expect(fetch).toHaveBeenCalledTimes(2);
        expect(
            new Headers(fetch.mock.calls[1][1]?.headers).get('Authorization'),
        ).toBe('Bearer renewed-token');
    });

    it.each([401, 511])(
        'gives a domain request that still gets a %i to the caller',
        async (status) => {
            stubFetch(true);
            await service.init();
            // The session renews nothing, so `placeFetch` gives the status
            vi.mocked(globalThis.fetch).mockResolvedValueOnce(
                new Response(null, { status }),
            );

            await expect(service.getZone('level-1')).rejects.toMatchObject({
                status,
            });

            expect(go_to_login).not.toHaveBeenCalled();
        },
    );

    it('goes to login when a floorplan metadata read gets a 511', async () => {
        stubFetch(true);
        await service.init();
        vi.mocked(metadata.show).mockResolvedValueOnce(httpFailure(511));

        await expect(
            service.getFloorplanMetadata('level-1'),
        ).rejects.toMatchObject({ status: 511 });

        expect(go_to_login).toHaveBeenCalledWith(
            `/login?continue=${encodeURIComponent(location.href)}`,
        );
    });

    it('goes to login when the session has no credential for a floorplan metadata read', async () => {
        stubFetch(true);
        await service.init();
        // The session dropped its token after a 511 and could not renew it
        vi.mocked(metadata.show).mockResolvedValueOnce({
            ok: false,
            error: { kind: 'auth_missing' },
        });

        await expect(
            service.getFloorplanMetadata('level-1'),
        ).rejects.toMatchObject({ error: { kind: 'auth_missing' } });

        expect(go_to_login).toHaveBeenCalledWith(
            `/login?continue=${encodeURIComponent(location.href)}`,
        );
    });

    it('goes to login one time when parallel floorplan metadata calls get a 511', async () => {
        stubFetch(true);
        await service.init();
        vi.mocked(metadata.show).mockResolvedValue(httpFailure(511));

        const results = await Promise.allSettled([
            service.getFloorplanMetadata('level-1'),
            service.getFloorplanMetadata('level-2'),
        ]);

        expect(results.map((_) => _.status)).toEqual(['rejected', 'rejected']);
        expect(go_to_login).toHaveBeenCalledTimes(1);
    });

    it('goes to login again for a signed-out metadata call after the cooldown', async () => {
        stubFetch(true);
        await service.init();
        vi.mocked(metadata.show).mockResolvedValue(httpFailure(511));
        // The user stayed on the page at the unload prompt
        vi.useFakeTimers({ toFake: ['Date'] });
        vi.setSystemTime(1_000_000);
        const read = () =>
            service.getFloorplanMetadata('level-1').catch(() => undefined);

        await read();
        vi.setSystemTime(1_005_000);
        await read();
        expect(go_to_login).toHaveBeenCalledTimes(1);
        vi.setSystemTime(1_005_001);
        await read();

        expect(go_to_login).toHaveBeenCalledTimes(2);
    });

    it('does not go to login when a floorplan metadata read gets a 401', async () => {
        stubFetch(true);
        await service.init();
        vi.mocked(metadata.show).mockResolvedValueOnce(httpFailure(401));

        await expect(
            service.getFloorplanMetadata('level-1'),
        ).rejects.toMatchObject({ status: 401 });

        expect(go_to_login).not.toHaveBeenCalled();
    });

    it('reads floorplan details that the API gives as a JSON string', async () => {
        stubFetch(true);
        await service.init();
        vi.mocked(metadata.show).mockResolvedValueOnce(
            mockReply({
                'map-studio': floorplanMetadata(
                    JSON.stringify({ floor_name: 'Saved Level' }),
                ),
            }),
        );

        await expect(service.getFloorplanMetadata('level-1')).resolves.toEqual({
            floor_name: 'Saved Level',
        });
    });

    it('does not go to login after a 401 with an API key', async () => {
        stubFetch(false);
        await service.init();
        service.setConfig('https://other.example.com/', 'secret');
        vi.mocked(globalThis.fetch).mockResolvedValueOnce(
            new Response(null, { status: 401 }),
        );

        await expect(service.getZone('level-1')).rejects.toMatchObject({
            status: 401,
        });

        expect(go_to_login).not.toHaveBeenCalled();
    });

    it('falls back to manual setup when authority discovery does not settle', async () => {
        vi.useFakeTimers();
        vi.stubGlobal(
            'fetch',
            vi.fn(() => new Promise(() => undefined)),
        );

        const result = service.init();
        await vi.advanceTimersByTimeAsync(10_000);
        await result;

        expect(service.mode()).toBe('manual');
        vi.useRealTimers();
    });

    it('keeps the response readable until its JSON body has finished', async () => {
        stubFetch(true);
        await service.init();
        let signal: AbortSignal;
        vi.stubGlobal(
            'fetch',
            vi.fn(async (_url, options: RequestInit) => {
                signal = options.signal as AbortSignal;
                return {
                    ok: true,
                    json: async () => {
                        await new Promise((resolve) => setTimeout(resolve, 0));
                        if (signal.aborted)
                            throw new DOMException('Aborted', 'AbortError');
                        return [{ id: 'org-2' }];
                    },
                };
            }),
        );

        await expect(service.getZones()).resolves.toEqual([{ id: 'org-2' }]);
        expect(signal!.aborted).toBe(true);
    });

    it('does not start domain requests while login is redirecting', async () => {
        stubFetch(true);
        fake.setCredential(null);
        await service.init();
        expect(service.mode()).toBe('checking');
        expect(go_to_login).toHaveBeenCalledWith(
            `/login?continue=${encodeURIComponent(location.href)}`,
        );
    });

    it('does not go to a login URL that is not HTTP', async () => {
        stubFetch(true);
        fake.signIn(
            { ...AUTHORITY, login_url: 'javascript:alert(1)//{{url}}' },
            null,
        );
        await service.init();
        expect(go_to_login).not.toHaveBeenCalled();
        expect(service.mode()).toBe('manual');
    });

    it('signs in with the token of the app that opened it', async () => {
        stubFetch(true);
        const expires_at = Date.now() + 60 * 60 * 1000;
        fake.setCredential(null);
        openedBy({ token: 'concierge-token', expires_at });
        await service.init();
        // The session does not go to the login before the opener answers
        expect(createAuthSession).toHaveBeenCalledWith(
            expect.objectContaining({ handle_login: false }),
        );
        expect(fake.session.useToken).toHaveBeenCalledWith(
            'concierge-token',
            expires_at,
        );
        expect(go_to_login).not.toHaveBeenCalled();
        expect(service.mode()).toBe('domain');
    });

    it('goes to login when the opener hands over an expired token', async () => {
        stubFetch(true);
        fake.setCredential(null);
        openedBy({ token: 'stale', expires_at: Date.now() - 1000 });
        await service.init();
        expect(fake.session.useToken).not.toHaveBeenCalled();
        expect(go_to_login).toHaveBeenCalled();
    });

    it('falls back to manual setup when PlaceOS setup does not settle', async () => {
        vi.useFakeTimers();
        stubFetch(true);
        vi.mocked(fake.session.start).mockReturnValue(
            new Promise(() => undefined),
        );

        const result = service.init();
        await vi.advanceTimersByTimeAsync(10_000);
        await result;

        expect(service.mode()).toBe('manual');
        vi.useRealTimers();
    });

    it('calls the configured LLM driver with image content', async () => {
        const calls = stubFetch(true);
        await service.init();

        await expect(
            service.analyzeImage('Find rooms', 'aGVsbG8='),
        ).resolves.toBe('{"outline":null,"rooms":[]}');

        const [url, options] = calls[calls.length - 1];
        expect(url).toBe(
            `${location.origin}/api/engine/v2/systems/sys-ai/LLM_1/chat`,
        );
        expect(options.method).toBe('POST');
        expect(JSON.parse(options.body as string)).toEqual([
            'gpt-5.1',
            {
                role: 'user',
                content: [
                    { type: 'text', text: 'Find rooms' },
                    {
                        type: 'image_url',
                        image: 'aGVsbG8=',
                        media_type: 'image/jpeg',
                        detail: 'high',
                    },
                ],
            },
            { type: 'json_object' },
            16_000,
        ]);
    });

    it('selects the authority organisation and loads its level SVG', async () => {
        const calls = stubFetch(true);
        await service.init();

        await expect(service.getActiveOrganisation()).resolves.toEqual({
            id: 'org-2',
        });
        await expect(service.getLevelMap('level-1')).resolves.toMatchObject({
            svg: expect.stringContaining('<svg'),
        });

        const [, options] = calls.find(([url]) =>
            url.endsWith('/maps/level-1.svg'),
        )!;
        expect(new Headers(options.headers).get('Authorization')).toBe(
            'Bearer session-token',
        );
    });

    it('sends no credentials when a level map is on another host', async () => {
        const calls = stubFetch(true);
        await service.init();

        await expect(service.getLevelMap('level-2')).resolves.toMatchObject({
            svg: expect.stringContaining('<svg'),
        });

        const [url, options] = calls[calls.length - 1];
        expect(url).toBe('http://other.example/map.svg');
        expect(options.headers).toEqual({});
    });

    it('loads and saves floorplan metadata on a level', async () => {
        stubFetch(true);
        await service.init();
        // The API gives Unix seconds
        vi.mocked(metadata.show).mockResolvedValueOnce(
            mockReply({
                'map-studio': floorplanMetadata(
                    {
                        floor_name: 'Saved Level',
                        updated_at: '2020-01-01T00:00:00.000Z',
                    },
                    Date.parse('2026-08-06T01:02:03.000Z') / 1000,
                ),
            }),
        );

        await expect(service.getFloorplanMetadata('level-1')).resolves.toEqual({
            floor_name: 'Saved Level',
            updated_at: '2026-08-06T01:02:03.000Z',
        });
        await service.saveFloorplanMetadata('level-1', {
            id: 'local-floorplan',
            project_id: 'local-project',
            level_zone_id: 'level-1',
            floor_name: 'Saved Level',
            source_image_path: 'blob:local-only',
            updated_at: '2026-08-06T01:02:03.000Z',
        } as never);

        expect(metadata.show).toHaveBeenCalledWith({
            id: 'level-1',
            name: 'map-studio',
        });
        expect(metadata.update).toHaveBeenCalledWith({
            id: 'level-1',
            body: expect.objectContaining({
                parent_id: 'level-1',
                name: 'map-studio',
                details: {
                    floor_name: 'Saved Level',
                    updated_at: '2026-08-06T01:02:03.000Z',
                },
            }),
        });
    });

    it('reads every page of zones', async () => {
        const calls = stubFetch(true);
        await service.init();

        const levels = await service.getZones('level', 'building-1');

        expect(levels).toHaveLength(205);
        expect(
            calls.filter(([url]) => url.includes('tags=level')),
        ).toHaveLength(3);
    });

    it('reads every page of systems', async () => {
        const calls = stubFetch(true);
        await service.init();

        const systems = await service.getSystems('level-1');

        expect(systems).toHaveLength(120);
        expect(calls.filter(([url]) => url.includes('/systems?'))).toHaveLength(
            2,
        );
    });

    it('stops reading pages at the page limit', async () => {
        stubFetch(true);
        await service.init();
        // A server that always returns a full page must not loop forever
        const fetch = vi.fn(async () => ({
            ok: true,
            json: async () => Array.from({ length: 100 }, () => ({})),
        }));
        vi.stubGlobal('fetch', fetch);

        await expect(service.getSystems('level-1')).resolves.toHaveLength(
            5_000,
        );
        expect(fetch).toHaveBeenCalledTimes(50);
    });

    it('publishes an SVG by reserving, storing and completing the upload', async () => {
        stubFetch(true);
        await service.init();
        const fetch = vi.mocked(globalThis.fetch);
        fetch
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({
                    id: 'up-1',
                    upload_url: 'https://storage.example/signed',
                    upload_headers: { 'x-amz-acl': 'public-read' },
                }),
            } as Response)
            .mockResolvedValueOnce({ ok: true } as Response)
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({}),
            } as Response);

        await expect(
            service.uploadSvg('<svg/>', 'level-1.svg'),
        ).resolves.toEqual({
            upload_id: 'up-1',
            file_url: '/api/engine/v2/uploads/up-1/url',
        });

        const [reserve, store, complete] = fetch.mock.calls.slice(-3) as [
            string,
            RequestInit,
        ][];
        expect(reserve[0]).toBe(`${location.origin}/api/engine/v2/uploads`);
        expect(JSON.parse(reserve[1].body as string)).toMatchObject({
            file_name: 'level-1.svg',
            file_size: 6,
        });
        expect(store[0]).toBe('https://storage.example/signed');
        expect(store[1]).toMatchObject({
            method: 'PUT',
            body: '<svg/>',
            headers: {
                'Content-Type': 'image/svg+xml',
                'x-amz-acl': 'public-read',
            },
        });
        expect(complete[0]).toBe(
            `${location.origin}/api/engine/v2/uploads/up-1`,
        );
        expect(JSON.parse(complete[1].body as string)).toEqual({
            upload_complete: true,
        });
    });

    it('does not complete an upload that storage refused', async () => {
        stubFetch(true);
        await service.init();
        const fetch = vi.mocked(globalThis.fetch);
        const before = fetch.mock.calls.length;
        fetch
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({
                    id: 'up-1',
                    upload_url: 'https://storage.example/signed',
                }),
            } as Response)
            .mockResolvedValueOnce({ ok: false, status: 403 } as Response);

        await expect(
            service.uploadSvg('<svg/>', 'level-1.svg'),
        ).rejects.toThrow('Upload to storage failed: 403');
        // Reserve and store only; no completion request follows
        expect(fetch.mock.calls.length - before).toBe(2);
    });

    it('rejects a level map that is not an SVG', async () => {
        const calls = stubFetch(true);
        await service.init();
        vi.mocked(globalThis.fetch)
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({ map_id: '/maps/level-1.svg' }),
            } as Response)
            .mockResolvedValueOnce({
                ok: true,
                text: async () => '<html><body>Sign in</body></html>',
            } as Response);

        await expect(service.getLevelMap('level-1')).rejects.toThrow(
            'not an SVG',
        );
        calls.length = 0;
        await expect(service.getLevelMap('level-3')).resolves.toBeNull();
        expect(calls.some(([url]) => url.endsWith('.svg'))).toBe(false);
    });

    it('sends an imported SVG once, not as both source and output', async () => {
        const details = () =>
            vi.mocked(metadata.update).mock.calls.at(-1)?.[0].body?.details;
        const floorplan = { id: 'local', floor_name: 'Level 1' };

        await service.saveFloorplanMetadata('level-1', {
            ...floorplan,
            svg_source: '<svg/>',
            svg_output: '<svg/>',
        } as never);
        expect(details()).toMatchObject({ svg_source: '<svg/>' });
        expect(details()).not.toHaveProperty('svg_output');

        // Older imports have no source, and reimport reads the output
        await service.saveFloorplanMetadata('level-1', {
            ...floorplan,
            svg_output: '<svg/>',
        } as never);
        expect(details()).toMatchObject({ svg_output: '<svg/>' });
    });

    it('tests unsaved credentials and reports a rejected key plainly', async () => {
        stubFetch(false);
        await service.init();
        vi.mocked(fetch).mockResolvedValueOnce({
            ok: false,
            status: 401,
            text: async () => '{"error":"unauthorized"}',
        } as Response);

        const result = await service.testConnection({
            domain: 'https://other.example.com',
            api_key: 'wrong',
        });

        expect(result.ok).toBe(false);
        expect(result.error).toContain('rejected the API key');
        expect(service.config.configured).toBe(false);
    });

    it('never sends the API key over plain http', async () => {
        const calls = stubFetch(false);
        await service.init();

        const result = await service.testConnection({
            domain: 'http://other.example.com',
            api_key: 'secret',
        });

        expect(result.error).toContain('https://');
        expect(calls.some(([url]) => url.includes('other.example.com'))).toBe(
            false,
        );
    });

    it('checks a blank domain against the page origin', async () => {
        const calls = stubFetch(false);
        await service.init();
        vi.stubGlobal('location', new URL('http://place.example.com/'));

        const result = await service.testConnection({
            domain: '',
            api_key: 'secret',
        });

        expect(result.error).toContain('https://');
        expect(calls.some(([url]) => url.includes('/api/engine'))).toBe(false);
    });

    it('falls back to a domain and API key otherwise', async () => {
        const calls = stubFetch(false);
        await service.init();
        expect(service.mode()).toBe('manual');
        expect(service.aiConfig).toBeNull();
        expect(service.config.configured).toBe(false);
        await expect(service.getZones()).rejects.toThrow('not configured');

        service.setConfig('https://other.example.com/', 'secret');
        expect(service.config.configured).toBe(true);
        await service.getZones();
        const [url, options] = calls[calls.length - 1];
        expect(url.startsWith('https://other.example.com/api/engine/v2')).toBe(
            true,
        );
        expect((options.headers as Record<string, string>)['X-API-Key']).toBe(
            'secret',
        );
    });
});
