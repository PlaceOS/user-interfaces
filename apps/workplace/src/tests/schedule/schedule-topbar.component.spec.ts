import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { DateRangeCalendarComponent } from '@placeos/form-fields';
import { MockComponent, MockPipe, MockProvider } from 'ng-mocks';
import { addDays, isSameDay, startOfDay, subDays } from 'date-fns';
import { ScheduleTopbarComponent } from '../../app/schedule/schedule-topbar.component';

describe('ScheduleTopbarComponent', () => {
    let spectator: SpectatorRouting<ScheduleTopbarComponent>;
    const settings_get = vi.fn();

    const fixed_day = startOfDay(new Date('2026-05-14T00:00:00')).valueOf();

    const createComponent = createRoutingFactory({
        component: ScheduleTopbarComponent,
        declarations: [
            MockPipe(TranslatePipe, (key) => key),
            MockComponent(IconComponent),
            MockComponent(DateRangeCalendarComponent),
        ],
        providers: [MockProvider(SettingsService, { get: settings_get })],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent({ props: { date: fixed_day } });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should read the week start offset from settings', () => {
        settings_get.mockReturnValue(1);
        expect(spectator.component.offset_weekday).toBe(1);
        expect(settings_get).toHaveBeenCalledWith('app.week_start');
    });

    it('should default the week start offset to 0 when unset', () => {
        settings_get.mockReturnValue(undefined);
        expect(spectator.component.offset_weekday).toBe(0);
    });

    describe('resetDate()', () => {
        it('sets the date to today and clears any end date', () => {
            spectator.setInput('end_date', addDays(fixed_day, 3).valueOf());
            spectator.component.resetDate();
            expect(isSameDay(spectator.component.date(), Date.now())).toBe(true);
            expect(spectator.component.end_date()).toBeNull();
        });
    });

    describe('setStartDate()', () => {
        it('sets the start date and clears the end date', () => {
            spectator.setInput('end_date', addDays(fixed_day, 3).valueOf());
            const new_start = addDays(fixed_day, 1).valueOf();
            spectator.component.setStartDate(new_start);
            expect(spectator.component.date()).toBe(new_start);
            expect(spectator.component.end_date()).toBeNull();
        });
    });

    describe('previousDate() / nextDate()', () => {
        it('steps back a single day in day view', () => {
            spectator.setInput('view', 'day');
            spectator.component.previousDate();
            expect(spectator.component.date()).toBe(
                subDays(fixed_day, 1).valueOf(),
            );
        });

        it('steps forward a single day in day view', () => {
            spectator.setInput('view', 'day');
            spectator.component.nextDate();
            expect(spectator.component.date()).toBe(
                addDays(fixed_day, 1).valueOf(),
            );
        });

        it('steps back a full week in week view', () => {
            spectator.setInput('view', 'week');
            spectator.component.previousDate();
            expect(spectator.component.date()).toBe(
                subDays(fixed_day, 7).valueOf(),
            );
        });

        it('steps forward a full week in week view', () => {
            spectator.setInput('view', 'week');
            spectator.component.nextDate();
            expect(spectator.component.date()).toBe(
                addDays(fixed_day, 7).valueOf(),
            );
        });

        it('steps by a single day in list view', () => {
            spectator.setInput('view', 'list');
            spectator.component.nextDate();
            expect(spectator.component.date()).toBe(
                addDays(fixed_day, 1).valueOf(),
            );
        });
    });

    describe('has_date_range()', () => {
        it('is false unless the list view has a distinct end date', () => {
            spectator.setInput('view', 'day');
            spectator.setInput('end_date', addDays(fixed_day, 3).valueOf());
            expect(spectator.component.has_date_range()).toBe(false);
        });

        it('is false in list view when start and end are the same day', () => {
            spectator.setInput('view', 'list');
            spectator.setInput('end_date', fixed_day);
            expect(spectator.component.has_date_range()).toBe(false);
        });

        it('is true in list view with a distinct end date', () => {
            spectator.setInput('view', 'list');
            spectator.setInput('end_date', addDays(fixed_day, 3).valueOf());
            expect(spectator.component.has_date_range()).toBe(true);
        });
    });

    describe('view navigation', () => {
        it('hides the prev/next arrows in list view', () => {
            spectator.setInput('view', 'day');
            spectator.detectChanges();
            const day_arrows = spectator.queryAll('icon').length;
            expect(day_arrows).toBeGreaterThan(0);

            spectator.setInput('view', 'list');
            spectator.detectChanges();
            // list view swaps the arrows for a single calendar icon
            const text = spectator.query('[date]')?.textContent || '';
            expect(text).not.toContain('keyboard_arrow_left');
        });

        it('updates the active view when a tab is clicked', () => {
            spectator.setInput('view', 'list');
            spectator.detectChanges();
            const tabs = spectator.queryAll('[view] a');
            // tabs are ordered day, week, list
            spectator.click(tabs[1] as HTMLElement);
            expect(spectator.component.view()).toBe('week');
            spectator.click(tabs[0] as HTMLElement);
            expect(spectator.component.view()).toBe('day');
        });
    });
});
