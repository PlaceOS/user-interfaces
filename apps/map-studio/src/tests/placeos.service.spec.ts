vi.mock('@placeos/ts-client', () => ({
    authorise: vi.fn(async () => ''),
    authority: () => ({
        domain: 'place.example.com',
        config: {
            org_zone: 'org-2',
            map_builder: {
                llm_system_id: 'sys-ai',
                llm_model: 'gpt-5.1',
            },
        },
    }),
    setToken: vi.fn(),
    setup: vi.fn(async () => undefined),
    showMetadata: vi.fn(async () => ({ details: {} })),
    token: vi.fn(() => 'session-token'),
    updateMetadata: vi.fn(async () => undefined),
}));

import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
    authorise,
    setToken,
    setup,
    showMetadata,
    token,
    updateMetadata,
} from '@placeos/ts-client';

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
        if (url.endsWith('/maps/level-1.svg'))
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

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        vi.mocked(setup).mockResolvedValue(undefined);
        vi.mocked(token).mockReturnValue('session-token');
        vi.mocked(setToken).mockImplementation(() => undefined);
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        service = TestBed.inject(PlaceOSService);
    });

    afterEach(() => {
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
        expect(url.startsWith('/api')).toBe(true);
        expect((options.headers as Record<string, string>).Authorization).toBe(
            'Bearer session-token',
        );
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
        vi.mocked(token).mockReturnValue('');
        await service.init();
        expect(service.mode()).toBe('checking');
        expect(authorise).toHaveBeenCalled();
    });

    it('signs in with the token of the app that opened it', async () => {
        stubFetch(true);
        const expires_at = Date.now() + 60 * 60 * 1000;
        let current = '';
        vi.mocked(token).mockImplementation(() => current);
        vi.mocked(setToken).mockImplementation((value) => (current = value));
        openedBy({ token: 'concierge-token', expires_at });
        await service.init();
        expect(setup).toHaveBeenCalledWith(
            expect.objectContaining({ handle_login: true }),
        );
        expect(setToken).toHaveBeenCalledWith('concierge-token', expires_at);
        expect(authorise).not.toHaveBeenCalled();
        expect(service.mode()).toBe('domain');
    });

    it('goes to login when the opener hands over an expired token', async () => {
        stubFetch(true);
        vi.mocked(token).mockReturnValue('');
        openedBy({ token: 'stale', expires_at: Date.now() - 1000 });
        await service.init();
        expect(setToken).not.toHaveBeenCalled();
        expect(authorise).toHaveBeenCalled();
    });

    it('falls back to manual setup when PlaceOS setup does not settle', async () => {
        vi.useFakeTimers();
        stubFetch(true);
        vi.mocked(setup).mockReturnValue(new Promise(() => undefined));

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
        expect(url).toBe('/api/engine/v2/systems/sys-ai/LLM_1/chat');
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
        await expect(service.getLevelSvg('level-1')).resolves.toContain('<svg');

        const [, options] = calls.find(([url]) =>
            url.endsWith('/maps/level-1.svg'),
        )!;
        expect((options.headers as Record<string, string>).Authorization).toBe(
            'Bearer session-token',
        );
    });

    it('loads and saves floorplan metadata on a level', async () => {
        stubFetch(true);
        await service.init();
        vi.mocked(showMetadata).mockResolvedValueOnce({
            details: {
                floor_name: 'Saved Level',
                updated_at: '2020-01-01T00:00:00.000Z',
            },
            updated_at: Date.parse('2026-08-06T01:02:03.000Z'),
        } as never);

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

        expect(showMetadata).toHaveBeenCalledWith('level-1', 'map-studio');
        expect(updateMetadata).toHaveBeenCalledWith(
            'level-1',
            expect.objectContaining({
                id: 'level-1',
                name: 'map-studio',
                details: {
                    floor_name: 'Saved Level',
                    updated_at: '2026-08-06T01:02:03.000Z',
                },
            }),
        );
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
