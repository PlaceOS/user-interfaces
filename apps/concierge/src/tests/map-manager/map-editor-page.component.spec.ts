import { MatDialog } from '@angular/material/dialog';
import {
    ActivatedRoute,
    convertToParamMap,
    provideRouter,
} from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BuildingLevel, OrganisationService } from '@placeos/common';
import { MapEditorAiPanelComponent } from '@placeos/map-editor';

import {
    mapEditorAiStrings,
    MapEditorPageComponent,
} from '../../app/map-manager/map-editor-page.component';
import { MapManagementService } from '../../app/map-manager/map-management.service';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

const MAP =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">' +
    '<rect id="area-1.01-status" x="0" y="0" width="10" height="10"/>' +
    '</svg>';

const CAPABILITIES = {
    enabled: true,
    providers: [
        {
            id: 'provider-1',
            name: 'Signage Image Gen',
            provider: 'OPENAI',
            text_model: 'gpt-5.4-mini',
        },
    ],
    default_provider_id: 'provider-1',
    quota: { user_remaining_today: 39, domain_remaining_month: 980 },
    limits: {
        max_context_bytes: 200000,
        max_ops: 80,
        max_instruction_chars: 2000,
    },
};

describe('MapEditorPageComponent', () => {
    let spectator: Spectator<MapEditorPageComponent>;
    let manager: Record<string, ReturnType<typeof vi.fn>>;
    const level = new BuildingLevel({
        id: 'l1',
        parent_id: 'b1',
        name: 'Level 1',
        display_name: 'L1',
        map_id: '/maps/l1.svg',
    });

    const createComponent = createComponentFactory({
        component: MapEditorPageComponent,
        detectChanges: false,
        providers: [
            provideRouter([]),
            {
                provide: ActivatedRoute,
                useValue: {
                    snapshot: {
                        paramMap: convertToParamMap({ level_id: 'l1' }),
                    },
                },
            },
            { provide: MatDialog, useValue: { open: vi.fn() } },
            {
                provide: OrganisationService,
                useValue: {
                    waitUntilInitialised: vi.fn(async () => undefined),
                },
            },
            { provide: MapManagementService, useValue: {} },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        manager = {
            level: vi.fn(() => level),
            building: vi.fn(() => undefined),
            loadMapText: vi.fn(async () => MAP),
            protectedIdSources: vi.fn(() => ({})),
            uploadMapSnapshot: vi.fn(async () => 'upload-1'),
            openStudio: vi.fn(),
            currentMapId: vi.fn(async () => level.map_id),
            saveLevelMap: vi.fn(),
        };
    });

    afterEach(() => {
        spectator?.fixture.destroy();
    });

    async function settle(rounds = 8) {
        for (let i = 0; i < rounds; i++) {
            spectator.detectChanges();
            await spectator.fixture.whenStable();
            await new Promise((resolve) => setTimeout(resolve, 0));
        }
        spectator.detectChanges();
    }

    async function mount(capabilities: () => Promise<unknown>) {
        vi.mocked(ts_client.get).mockImplementation((url: string) =>
            url.endsWith('/maps/ai/capabilities')
                ? (capabilities() as Promise<never>)
                : Promise.reject({ status: 404, message: 'Not found' }),
        );
        spectator = createComponent({
            providers: [{ provide: MapManagementService, useValue: manager }],
        });
        spectator.detectChanges();
        await settle();
    }

    it('mounts the AI panel in the editor on the level session', async () => {
        await mount(async () => CAPABILITIES);
        const session = spectator.component.session();
        expect(session).toBeTruthy();
        const panel = spectator.query(MapEditorAiPanelComponent);
        expect(panel).toBeTruthy();
        expect(panel?.session()).toBe(session);
        expect(panel?.zone_id()).toBe('l1');
        expect(panel?.upload()).toBe(spectator.component.upload_port);
        expect(panel?.strings()).toBe(spectator.component.ai_strings);
        expect(
            spectator.query('map-editor .panel map-editor-ai-panel'),
        ).toBeTruthy();
        expect(spectator.query('map-editor-ai-panel textarea')).toBeTruthy();
        expect(spectator.component.ai_hidden()).toBe(false);
    });

    it('drops the panel when the server has no map AI', async () => {
        await mount(() =>
            Promise.reject({ status: 404, message: 'Not found' }),
        );
        expect(spectator.component.session()).toBeTruthy();
        expect(spectator.component.ai_hidden()).toBe(true);
        expect(spectator.query('map-editor-ai-panel')).toBeNull();
        expect(spectator.query('map-editor .panel')?.children.length).toBe(0);
    });

    it('keeps the panel, with its note, when the feature is off', async () => {
        await mount(async () => ({
            ...CAPABILITIES,
            enabled: false,
            reason: 'no AI provider is configured for this domain',
        }));
        expect(spectator.component.ai_hidden()).toBe(false);
        expect(
            spectator.query('map-editor-ai-panel [unavailable]')?.textContent,
        ).toContain('no AI provider is configured for this domain');
    });

    it('stores the AI snapshot through the management service', async () => {
        await mount(async () => CAPABILITIES);
        const blob = new Blob(['png'], { type: 'image/png' });
        await expect(
            spectator.component.upload_port(blob, 'map-snapshot.png'),
        ).resolves.toBe('upload-1');
        expect(manager.uploadMapSnapshot).toHaveBeenCalledWith(
            blob,
            'map-snapshot.png',
        );
    });
});

describe('mapEditorAiStrings', () => {
    it('reads MAP_EDITOR.AI.* keys and keeps the English default elsewhere', () => {
        const translations: Record<string, string> = {
            'MAP_EDITOR.AI.TITLE': 'Edit with the assistant',
            'MAP_EDITOR.AI.REASONS.TOO_MUCH': 'Overdone',
            'MAP_EDITOR.AI.KINDS.SET_ATTR': 'Alter',
        };
        const strings = mapEditorAiStrings((key) => translations[key] ?? key);
        expect(strings.title).toBe('Edit with the assistant');
        expect(strings.reasons?.too_much).toBe('Overdone');
        expect(strings.reasons?.other).toBe('Other');
        expect(strings.kinds?.set_attr).toBe('Alter');
        expect(strings.kinds?.delete).toBe('Delete');
        expect(strings.states?.quota).toBe(
            'The AI edit allowance has been used up.',
        );
    });

    it('falls back to the default when the lookup answers with the key or nothing', () => {
        const strings = mapEditorAiStrings((key) =>
            key === 'MAP_EDITOR.AI.SEND' ? '' : key,
        );
        expect(strings.send).toBe('Send');
        expect(strings.keep).toBe('Keep');
    });
});
