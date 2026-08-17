import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { BookingAsset } from 'libs/bookings/src/lib/booking-form.service';
import { MockPipe, MockProvider, ngMocks } from 'ng-mocks';

import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { SetDatetimeModalComponent } from '../lib/set-datetime-modal.component';

describe('SetDatetimeModalComponent', () => {
    let spectator: Spectator<SetDatetimeModalComponent>;
    const base_date = new Date();
    base_date.setHours(10, 0, 0, 0);

    const createComponent = createComponentFactory({
        component: SetDatetimeModalComponent,
        ...ngMocks.guts(null),
        providers: [MockProvider(SettingsService, { get: vi.fn() })],
        declarations: [MockPipe(TranslatePipe, (value) => value)],
    });

    function setup(data: Record<string, unknown> = {}) {
        spectator = createComponent({
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        date: base_date.valueOf(),
                        duration: 60,
                        until: base_date.valueOf() + 60 * 60 * 1000,
                        host: false,
                        resource_type: 'Desk',
                        resource: { name: 'Desk 42' } as BookingAsset,
                        ...data,
                    },
                },
            ],
        });
        spectator.detectChanges();
    }

    it('should create component', () => {
        setup();
        expect(spectator.component).toBeTruthy();
    });

    it('should use the room booking wording', () => {
        setup();
        expect(spectator.query('header h2')).toContainText(
            'EXPLORE.BOOKING_HEADER',
        );
        expect(spectator.query('footer button')).toContainText('COMMON.SAVE');
    });

    it('should initialise the form from the dialog data', () => {
        setup();
        expect(spectator.component.form.value.date).toBe(base_date.valueOf());
        expect(spectator.component.form.value.duration).toBe(60);
        expect(spectator.component.form.value.all_day).toBe(false);
    });

    it('should display the resource name', () => {
        setup();
        expect(spectator.query('main')).toContainText('Desk 42');
    });

    it('should use the resource type as the resource label', () => {
        setup();
        expect(spectator.query('main label')).toContainText('Desk:');
    });

    it('should fall back to the map id when the resource has no name', () => {
        setup({ resource: { map_id: 'map-9' } as BookingAsset });
        expect(spectator.query('main')).toContainText('map-9');
    });

    it('should show a placeholder when the resource has no name or map id', () => {
        setup({ resource: {} as BookingAsset });
        expect(spectator.query('main')).toContainText('Unknown Resource');
    });

    it('should hide the host field when host is disabled', () => {
        setup({ host: false });
        expect(spectator.query('a-user-search-field')).toBeFalsy();
    });

    it('should show the host field when host is enabled', () => {
        setup({ host: true });
        expect(spectator.query('a-user-search-field')).toBeTruthy();
    });

    it('should hide the all-day checkbox when not allowed', () => {
        setup({ allow_all_day: false });
        expect(spectator.query('mat-checkbox')).toBeFalsy();
    });

    it('should show the all-day checkbox when allowed', () => {
        setup({ allow_all_day: true });
        expect(spectator.query('mat-checkbox')).toBeTruthy();
    });

    it('should disable the duration control when all-day is selected', () => {
        setup({ allow_all_day: true });
        expect(spectator.component.form.controls.duration.disabled).toBe(false);

        spectator.component.form.controls.all_day.setValue(true);
        spectator.detectChanges();
        expect(spectator.component.form.controls.duration.disabled).toBe(true);
        expect(spectator.query('a-time-field')).toBeFalsy();

        spectator.component.form.controls.all_day.setValue(false);
        spectator.detectChanges();
        expect(spectator.component.form.controls.duration.disabled).toBe(false);
        expect(spectator.query('a-time-field')).toBeTruthy();
    });

    it('should start with the duration disabled when data marks it all-day', () => {
        setup({ all_day: true, allow_all_day: true });
        expect(spectator.component.form.value.all_day).toBe(true);
        expect(spectator.component.form.controls.duration.disabled).toBe(true);
    });

    it('should expose the form value as the dialog close payload', () => {
        setup();
        const button = spectator.query('footer button') as HTMLButtonElement;
        expect(button).toBeTruthy();
        // The save button closes the dialog with the current form value.
        expect(spectator.component.form.value).toMatchObject({
            date: base_date.valueOf(),
            duration: 60,
            all_day: false,
        });
    });
});
