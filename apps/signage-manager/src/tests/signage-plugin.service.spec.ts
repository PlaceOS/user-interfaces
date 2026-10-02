import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService, SettingsService } from '@placeos/common';
import { querySignagePlugins, SignagePlugin } from '@placeos/ts-client';
import { SignageContextService } from '../app/signage-context.service';
import { SignageGroupFeatures } from '../app/signage-features';
import { SignagePluginService } from '../app/signage-plugin.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('SignagePluginService', () => {
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
        vi.mocked(querySignagePlugins).mockResolvedValue({
            data: [],
        } as Awaited<ReturnType<typeof querySignagePlugins>>);
        TestBed.configureTestingModule({
            providers: [
                { provide: SettingsService, useValue: settings },
                { provide: OrganisationService, useValue: org },
                { provide: MatDialog, useValue: dialog },
            ],
        });
    });

    function createService() {
        return TestBed.inject(SignagePluginService);
    }

    it('requests plugins and widgets separately', async () => {
        vi.mocked(querySignagePlugins).mockImplementation(async (options) => {
            const plugin_type = options.plugin_type || 'plugin';
            return {
                data: [
                    new SignagePlugin({
                        id: `${plugin_type}-1`,
                        name: plugin_type,
                        plugin_type,
                    }),
                ],
            } as Awaited<ReturnType<typeof querySignagePlugins>>;
        });
        const service = createService();
        // Plugins load once the user can query the "All groups" view
        Object.defineProperty(
            TestBed.inject(SignageContextService),
            'can_manage_all_groups',
            { value: () => true },
        );
        TestBed.flushEffects();

        await vi.waitFor(() => {
            expect(service.plugins()[0]?.id).toBe('plugin-1');
            expect(service.widgets()[0]?.id).toBe('widget-1');
        });
        expect(querySignagePlugins).toHaveBeenCalledWith(
            expect.objectContaining({ plugin_type: 'plugin' }),
        );
        expect(querySignagePlugins).toHaveBeenCalledWith(
            expect.objectContaining({ plugin_type: 'widget' }),
        );
    });

    it('limits plugins to the ones the group makes available', async () => {
        vi.mocked(querySignagePlugins).mockResolvedValue({
            data: ['plugin-1', 'plugin-2'].map(
                (id) =>
                    new SignagePlugin({
                        id,
                        name: id,
                        plugin_type: 'plugin',
                        enabled: true,
                    }),
            ),
        } as Awaited<ReturnType<typeof querySignagePlugins>>);
        const service = createService();
        const context = TestBed.inject(SignageContextService);
        const group = signal<SignageGroupFeatures>({});
        Object.defineProperty(context, 'group_features', { value: group });
        Object.defineProperty(context, 'can_manage_all_groups', {
            value: () => true,
        });
        TestBed.flushEffects();

        await vi.waitFor(() =>
            expect(service.plugins().map(({ id }) => id)).toEqual([
                'plugin-1',
                'plugin-2',
            ]),
        );
        group.set({ available_plugins: ['plugin-2'] });
        expect(service.plugins().map(({ id }) => id)).toEqual(['plugin-2']);
        expect(service.all_plugins()).toHaveLength(2);
    });
});
