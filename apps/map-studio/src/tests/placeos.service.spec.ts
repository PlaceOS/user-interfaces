vi.mock('@placeos/ts-client', () => ({
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
    setup: async () => undefined,
    showMetadata: vi.fn(async () => ({ details: {} })),
    token: () => 'session-token',
    updateMetadata: vi.fn(async () => undefined),
}));

import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { showMetadata, updateMetadata } from '@placeos/ts-client';

import { PlaceOSService } from '../app/data/placeos.service';

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
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });
        service = TestBed.inject(PlaceOSService);
    });

    afterEach(() => vi.unstubAllGlobals());

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
