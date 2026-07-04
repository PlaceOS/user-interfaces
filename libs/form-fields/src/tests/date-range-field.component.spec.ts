import { FormsModule } from '@angular/forms';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { mockComponent } from '@placeos/common/tests';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DateRangeCalendarComponent } from '../lib/date-range-calendar.component';
import { DateRangeFieldComponent } from '../lib/date-range-field.component';

describe('DateRangeFieldComponent', () => {
    let spectator: SpectatorHost<DateRangeFieldComponent>;
    const createHost = createHostFactory({
        component: DateRangeFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(DateRangeCalendarComponent),
            mockComponent(CustomTooltipComponent),
        ],
        imports: [FormsModule],
    });

    beforeEach(() => {
        spectator = createHost(
            `<date-range-field [disabled]="disabled" [from]="from">
                <input #startDate [(ngModel)]="start" [ngModelOptions]="{ standalone: true }" />
                <input #endDate [(ngModel)]="end" [ngModelOptions]="{ standalone: true }" />
            </date-range-field>`,
            {
                hostProps: {
                    disabled: false,
                    from: new Date(2026, 5, 1).valueOf(),
                    start: new Date(2026, 5, 1).valueOf(),
                    end: new Date(2026, 5, 5).valueOf(),
                },
            },
        );
        spectator.detectChanges();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should disable the trigger button when disabled', () => {
        expect(spectator.query('button[role="date-picker"]')).not.toBeDisabled();
        spectator.setHostInput({ disabled: true });
        spectator.detectChanges();
        expect(spectator.query('button[role="date-picker"]')).toBeDisabled();
    });

    it('should render the selected start and end dates', () => {
        spectator.component.setStartDate(new Date(2026, 5, 1).valueOf());
        spectator.component.setEndDate(new Date(2026, 5, 5).valueOf());
        spectator.detectChanges();
        const button = spectator.query('button[role="date-picker"]');
        expect(button).toContainText('Jun 1, 2026');
        expect(button).toContainText('Jun 5, 2026');
    });

    it('should update the start control when a start date is set', () => {
        const new_date = new Date(2026, 6, 2).valueOf();
        spectator.component.setStartDate(new_date);
        expect(spectator.component.start_date()?.control?.value).toBe(new_date);
    });

    it('should update the end control when an end date is set', () => {
        const new_date = new Date(2026, 6, 9).valueOf();
        spectator.component.setEndDate(new_date);
        expect(spectator.component.end_date()?.control?.value).toBe(new_date);
    });

    it('should expose the earliest allowed date via the from computed', () => {
        const from = new Date(2026, 5, 10).valueOf();
        spectator.setHostInput({ from });
        spectator.detectChanges();
        expect(spectator.component.from()).toBe(from);
    });
});
