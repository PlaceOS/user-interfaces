import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService, SettingsService } from '@placeos/common';
import { SignageContextService } from '../app/signage-context.service';
import { SignageGroupFeatures } from '../app/signage-features';

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageContextService', () => {
    const settings = {
        get: vi.fn(),
        signal: (_name: string, default_value?: any) => signal(default_value),
    };
    const org = {
        initialised: signal(true),
        organisation: { id: 'org-1' },
    };
    const dialog = {
        open: vi.fn(),
    };

    beforeEach(() => {
        vi.clearAllMocks();
        settings.get.mockReturnValue(false);
        TestBed.configureTestingModule({
            providers: [
                { provide: SettingsService, useValue: settings },
                { provide: OrganisationService, useValue: org },
                { provide: MatDialog, useValue: dialog },
            ],
        });
    });

    function createService() {
        return TestBed.inject(SignageContextService);
    }

    describe('group feature flags', () => {
        it('lets a group narrow the global features', () => {
            const service = createService();
            const global = signal<string[]>(['templates', 'ai-generation']);
            const group = signal<SignageGroupFeatures>({});
            Object.defineProperty(service, 'global_features', {
                value: global,
            });
            Object.defineProperty(service, 'group_features', { value: group });

            expect(service.features()).toEqual(['templates', 'ai-generation']);

            group.set({ features: ['ai-generation', 'ai-editing'] });
            expect(service.features()).toEqual(['ai-generation']);
            expect(service.templates_enabled()).toBe(false);
            expect(service.hasFeature('ai-editing')).toBe(false);
        });

        it('blocks template changes when template editing is off', () => {
            const service = createService();
            Object.defineProperty(service, 'can_create', {
                value: () => true,
            });
            Object.defineProperty(service, 'features', {
                value: () => ['templates'],
            });

            expect(service.can_create()).toBe(true);
            expect(service.can_create_templates()).toBe(false);
        });
    });
});
