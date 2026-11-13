vi.mock('@placeos/ts-client');

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    currentUser,
    setCurrentUser,
    StaffUser,
    WorktimePreference,
} from '@placeos/common';
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

    it('should load the current user preferences outside local mode', () => {
        const previous = currentUser();
        onTestFinished(() => setCurrentUser(previous));
        setCurrentUser(new StaffUser({ work_preferences: [monday()] }));
        spectator = createComponent();
        expect(spectator.component.settings()[1].blocks).toEqual(
            monday().blocks,
        );
        expect(spectator.component.weekdays_enabled()).toEqual({ 1: true });
    });

    it('should show a work block row when a weekday is checked', async () => {
        spectator = createWithPreferences([]);
        expect('a-time-field').not.toExist();
        // Days start on Sunday, so index 3 is Wednesday
        spectator.click(spectator.queryAll('mat-checkbox input')[3]);
        await spectator.fixture.whenStable();
        spectator.detectChanges();
        expect(spectator.component.weekdays_enabled()).toEqual({ 3: true });
        // A start and an end time field for the default block
        expect(spectator.queryAll('a-time-field')).toHaveLength(2);
    });

    it('should start an empty day with one default block', () => {
        spectator = createWithPreferences([]);
        spectator.component.initialiseDay(3);
        expect(spectator.component.settings()[3].blocks).toEqual([
            { start_time: 9, end_time: 17, location: 'wfo' },
        ]);
    });

    it('should keep the blocks of a day that is enabled again', () => {
        spectator = createWithPreferences([monday()]);
        spectator.component.setWeekdayEnabled(1, false);
        spectator.component.setWeekdayEnabled(1, true);
        spectator.component.initialiseDay(1);
        expect(spectator.component.settings()[1].blocks).toEqual(
            monday().blocks,
        );
    });

    it('should set a half hour start time and push the end time after it', () => {
        vi.useFakeTimers();
        spectator = createWithPreferences([monday()]);
        const block = spectator.component.settings()[1].blocks[0];
        spectator.component.setStartTime(
            block,
            1,
            spectator.component.timeFrom(12.5),
        );
        vi.advanceTimersByTime(50);
        expect(block).toMatchObject({ start_time: 12.5, end_time: 13.5 });
    });

    it('should add a block after the index and remove blocks down to the last one', () => {
        spectator = createWithPreferences([monday()]);
        const pref = spectator.component.settings()[1];
        spectator.component.addBlock(pref, 0);
        // The new 9-17 block starts when the 8-12 block before it ends
        expect(pref.blocks).toEqual([
            { start_time: 8, end_time: 12, location: 'wfh' },
            { start_time: 12, end_time: 17, location: 'wfo' },
        ]);
        spectator.component.removeBlock(pref, 0);
        expect(pref.blocks).toEqual([
            { start_time: 12, end_time: 17, location: 'wfo' },
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

    it('should close with the saved week after saving to the user', async () => {
        // Keep the user reload that runs after closing from firing
        vi.useFakeTimers({ toFake: ['setTimeout'] });
        spectator = createComponent();
        vi.mocked(ts_client.showUser).mockResolvedValue({
            id: 'user-1',
            groups: [],
        } as Awaited<ReturnType<typeof ts_client.showUser>>);
        await spectator.component.saveChanges();
        const [, body] = vi.mocked(ts_client.updateUser).mock.calls[0];
        expect(close_fn).toHaveBeenCalledWith(body.work_preferences);
    });

    it('should stay open and restore modal controls when saving fails', async () => {
        spectator = createComponent();
        vi.mocked(ts_client.showUser).mockRejectedValue(
            new Error('Unable to load user'),
        );

        await expect(spectator.component.saveChanges()).rejects.toThrow(
            'Unable to load user',
        );

        expect(close_fn).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
        expect(spectator.inject(MatDialogRef).disableClose).toBe(false);
    });
});
