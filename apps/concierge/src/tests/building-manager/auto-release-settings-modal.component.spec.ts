import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { getHours, getMinutes } from 'date-fns';
import { stringify as stringifyYaml } from 'yaml';

import { AutoReleaseSettingsModalComponent } from '../../app/building-manager/auto-release-settings-modal.component';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('AutoReleaseSettingsModalComponent', () => {
    let spectator: Spectator<AutoReleaseSettingsModalComponent>;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: AutoReleaseSettingsModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(MAT_DIALOG_DATA, 'bld-1' as any),
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(MatDialog, { open: vi.fn() }),
            MockProvider(SettingsService, { get: vi.fn(() => undefined) }),
        ],
    });

    beforeEach(() => {
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        (ts_client.querySettings as any).mockReset();
        (ts_client.addSettings as any).mockReset();
        (ts_client.updateSettings as any).mockReset();
        (ts_client.showMetadata as any).mockReset();
        (ts_client.updateMetadata as any).mockReset();
        (ts_client.querySettings as any).mockResolvedValue({ data: [] });
        (ts_client.addSettings as any).mockResolvedValue({ id: 'set-1' });
        (ts_client.updateSettings as any).mockResolvedValue({ id: 'set-1' });
        (ts_client.showMetadata as any).mockResolvedValue({ details: {} });
        (ts_client.updateMetadata as any).mockResolvedValue({ id: 'meta' });
        spectator = createComponent();
        (spectator.inject(MatDialogRef).close as any).mockClear();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
        vi.restoreAllMocks();
    });

    it('should enable a custom resource and seed its timings from the defaults', () => {
        spectator.component.setSetting('time_before', 10);
        spectator.component.setSetting('time_after', 20);

        spectator.component.toggleCustom('desk', true);

        expect(spectator.component.setting('custom')).toContain('desk');
        expect(spectator.component.setting('desk_time_before')).toBe(10);
        expect(spectator.component.setting('desk_time_after')).toBe(20);
    });

    it('should remove a custom resource and drop its timing overrides', () => {
        spectator.component.setSetting('time_before', 10);
        spectator.component.toggleCustom('desk', true);

        spectator.component.toggleCustom('desk', false);

        expect(spectator.component.setting('custom')).not.toContain('desk');
        expect('desk_time_before' in spectator.component.settings()).toBe(false);
        expect('desk_time_after' in spectator.component.settings()).toBe(false);
    });

    it('should convert the all-day start setting to and from a timestamp', () => {
        spectator.component.setSetting('all_day_start', 8.5);
        const start = spectator.component.start_hour();
        expect(getHours(start)).toBe(8);
        expect(getMinutes(start)).toBe(30);

        const nine_fifteen = new Date();
        nine_fifteen.setHours(9, 15, 0, 0);
        spectator.component.setStartHour(nine_fifteen.valueOf());
        expect(spectator.component.setting('all_day_start')).toBe(9.25);
    });

    it('should build default work preference blocks from the stored settings', () => {
        spectator.component.setSetting('default_work_preferences', [
            {
                day_of_week: 1,
                blocks: [
                    { start_time: 9, end_time: 17, location: 'office' },
                ],
            },
        ]);
        const prefs = spectator.component.default_work_preferences();
        expect(prefs.length).toBe(1);
        expect(prefs[0].blocks.length).toBe(1);
        expect(getHours(prefs[0].blocks[0].start)).toBe(9);
        expect(getHours(prefs[0].blocks[0].end)).toBe(17);
    });

    it('should load existing auto_release settings from unencrypted yaml', async () => {
        (ts_client.querySettings as any).mockResolvedValue({
            data: [
                {
                    id: 'set-1',
                    encryption_level: 0,
                    settings_string: stringifyYaml({
                        auto_release: {
                            time_before: 15,
                            desk_time_before: 5,
                        },
                    }),
                },
            ],
        });

        await spectator.component.loadSettings('bld-1');

        expect(spectator.component.setting('time_before')).toBe(15);
        // resources with per-type overrides are re-added to the custom list
        expect(spectator.component.setting('custom')).toContain('desk');
        expect(spectator.component.loading()).toBe('');
    });

    it('should persist settings via addSettings and metadata then close', async () => {
        spectator.component.setSetting('time_before', 10);

        await spectator.component.save();

        expect(ts_client.addSettings).toHaveBeenCalled();
        expect(ts_client.updateMetadata).toHaveBeenCalled();
        // the `custom` helper key must be stripped from persisted metadata
        const [, meta_body] = (ts_client.updateMetadata as any).mock.calls[0];
        expect('custom' in meta_body.details.auto_release).toBe(false);
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });
});
