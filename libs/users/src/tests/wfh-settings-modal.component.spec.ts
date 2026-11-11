vi.mock('@placeos/ts-client');

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { WorktimePreference } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { MockComponent } from 'ng-mocks';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { WFHSettingsModalComponent } from '../lib/wfh-settings-modal.component';

const monday = (): WorktimePreference => ({
    day_of_week: 1,
    blocks: [{ start_time: 8, end_time: 12, location: 'wfh' }],
});

describe('WFHSettingsModalComponent', () => {
    let spectator: Spectator<WFHSettingsModalComponent>;
    const close_fn = vi.fn();
    const createComponent = createComponentFactory({
        component: WFHSettingsModalComponent,
        providers: [
            { provide: MatDialogRef, useValue: { close: close_fn } },
            { provide: MAT_DIALOG_DATA, useValue: {} },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(TimeFieldComponent),
        ],
        imports: [
            MatCheckboxModule,
            MatProgressSpinnerModule,
            MatFormFieldModule,
            MatSelectModule,
            FormsModule,
        ],
    });

    const createWithPreferences = (preferences: WorktimePreference[]) =>
        createComponent({
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: { local: true, preferences },
                },
            ],
        });

    beforeEach(() => vi.clearAllMocks());
    afterEach(() => vi.useRealTimers());

    it('should enable only the days that have work blocks', () => {
        spectator = createWithPreferences([
            { day_of_week: 0, blocks: [] },
            monday(),
        ]);
        expect(spectator.component.weekdays_enabled()).toEqual({ 1: true });
        expect(spectator.component.has_working_days()).toBe(true);
    });

    it('should place sparse preferences by day of week', async () => {
        spectator = createWithPreferences([monday()]);
        expect(spectator.component.settings()[1].blocks).toEqual(
            monday().blocks,
        );
        await spectator.component.saveChanges();
        const saved: WorktimePreference[] = close_fn.mock.calls[0][0];
        expect(saved[1].blocks).toEqual(monday().blocks);
    });

    it('should not change the passed preferences while editing', () => {
        vi.useFakeTimers();
        const prefs = [monday()];
        spectator = createWithPreferences(prefs);
        const pref = spectator.component.settings()[1];
        spectator.component.addBlock(pref, 0);
        spectator.component.setEndTime(
            pref.blocks[0],
            1,
            spectator.component.timeFrom(10),
        );
        vi.advanceTimersByTime(50);
        expect(pref.blocks[0].end_time).toBe(10);
        expect(prefs).toEqual([monday()]);
    });

    it('should add a default block after the index and keep the last block', () => {
        spectator = createWithPreferences([]);
        spectator.component.initialiseDay(3);
        const pref = spectator.component.settings()[3];
        expect(pref.blocks).toEqual([
            { start_time: 9, end_time: 17, location: 'wfo' },
        ]);
        spectator.component.removeBlock(pref, 0);
        expect(pref.blocks).toHaveLength(1);
    });

    it('should push overlapping and empty blocks forward', () => {
        spectator = createWithPreferences([]);
        const pref: WorktimePreference = {
            day_of_week: 2,
            blocks: [
                { start_time: 9, end_time: 9 },
                { start_time: 9.5, end_time: 12 },
                { start_time: 11, end_time: 11 },
            ],
        };
        spectator.component.cleanupBlocks(pref);
        expect(pref.blocks).toEqual([
            { start_time: 9, end_time: 10 },
            { start_time: 10, end_time: 12 },
            { start_time: 12, end_time: 13 },
        ]);
    });

    it('should close with a full week of local preferences without saving', async () => {
        spectator = createWithPreferences([monday()]);
        spectator.component.setWeekdayEnabled(5, true);
        spectator.component.initialiseDay(5);
        spectator.component.setWeekdayEnabled(1, false);
        await spectator.component.saveChanges();
        const saved: WorktimePreference[] = close_fn.mock.calls[0][0];
        expect(saved.map((d) => d.day_of_week)).toEqual([0, 1, 2, 3, 4, 5, 6]);
        expect(saved[1].blocks).toEqual([]);
        expect(saved[5].blocks).toHaveLength(1);
        expect(ts_client.updateUser).not.toHaveBeenCalled();
    });

    it('should save preferences to the current user without system groups', async () => {
        spectator = createComponent();
        spectator.component.setWeekdayEnabled(2, true);
        spectator.component.initialiseDay(2);
        vi.mocked(ts_client.showUser).mockResolvedValue({
            id: 'user-1',
            groups: ['placeos_admin', 'team-a'],
        } as Awaited<ReturnType<typeof ts_client.showUser>>);
        vi.mocked(ts_client.updateUser).mockResolvedValue(
            {} as Awaited<ReturnType<typeof ts_client.updateUser>>,
        );
        await spectator.component.saveChanges(false);
        const [id, body] = vi.mocked(ts_client.updateUser).mock.calls[0];
        expect(id).toBe('user-1');
        expect(body.groups).toEqual(['team-a']);
        expect(body.work_preferences[2].blocks).toHaveLength(1);
        expect(spectator.component.loading()).toBe(false);
    });

    it('should restore modal controls when loading the user fails', async () => {
        spectator = createComponent();
        vi.mocked(ts_client.showUser).mockRejectedValue(
            new Error('Unable to load user'),
        );

        await expect(spectator.component.saveChanges(false)).rejects.toThrow(
            'Unable to load user',
        );

        expect(spectator.component.loading()).toBe(false);
        expect(spectator.inject(MatDialogRef).disableClose).toBe(false);
    });
});
