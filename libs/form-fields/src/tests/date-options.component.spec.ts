import { convertToParamMap } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';
import { defer, of } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { DateOptionsComponent } from '../lib/date-options.component';

describe('DateOptionsComponent', () => {
    let spectator: Spectator<DateOptionsComponent>;
    let query_params: Record<string, string>;
    const createComponent = createComponentFactory({
        component: DateOptionsComponent,
        providers: [
            MockProvider(Router, {
                navigate: vi.fn(),
            }),
            MockProvider(ActivatedRoute, {
                queryParamMap: defer(() => of(convertToParamMap(query_params))),
            }),
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 3, 22, 12));
        query_params = {};
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    it('should disable the date step buttons when disabled', () => {
        spectator.setInput({ disabled: true });
        spectator.detectChanges();
        expect(spectator.query('[data-shortcut="previous"]')).toBeDisabled();
        expect(spectator.query('[data-shortcut="next"]')).toBeDisabled();
        expect(spectator.query('[data-shortcut="today"]')).toBeDisabled();
    });

    it('should show the selected day by default', () => {
        spectator.setInput({
            date: new Date(2026, 3, 22, 12).valueOf(),
        });
        spectator.detectChanges();

        expect(spectator.query('.display')).toHaveText('Apr 22, 2026');
    });

    it('should show the selected week range when week mode is enabled', () => {
        spectator.setInput({
            date: new Date(2026, 3, 22, 12).valueOf(),
            display_mode: 'week',
            week_start: 1,
        });
        spectator.detectChanges();

        expect(spectator.query('.display')).toHaveText('Apr 20 - 26, 2026');
    });

    it('should not emit again when the URL shows the day already set', () => {
        query_params = { date: '2026-04-22' };
        spectator = createComponent();
        const emitted = vi.fn();
        spectator.output('dateChange').subscribe(emitted);
        vi.runOnlyPendingTimers();
        expect(emitted).not.toHaveBeenCalled();
    });

    it('should take a different day from the URL', () => {
        query_params = { date: '2026-04-25' };
        spectator = createComponent();
        const emitted = vi.fn();
        spectator.output('dateChange').subscribe(emitted);
        vi.runOnlyPendingTimers();
        expect(emitted).toHaveBeenCalledTimes(1);
        expect(new Date(emitted.mock.calls[0][0]).getDate()).toBe(25);
    });

    it('should ignore invalid date query params', () => {
        query_params = { date: 'invalid' };
        spectator = createComponent();
        vi.runOnlyPendingTimers();
        spectator.detectChanges();

        expect(spectator.query('.display')).toHaveText('Apr 22, 2026');
    });
});
