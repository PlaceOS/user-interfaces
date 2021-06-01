import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { of, throwError } from 'rxjs';

import { IconComponent } from '@placeos/components';
import { DurationFieldComponent } from '@placeos/form-fields';
import { Space } from '@placeos/spaces';

import { ExploreBookingModalComponent } from '../lib/explore-booking-modal.component';

jest.mock('@placeos/calendar');
jest.mock('@placeos/common');
jest.mock('libs/events/src/lib/events.fn');

import * as cal_mod from '@placeos/calendar';
import * as common_mod from '@placeos/common';
import * as events_mod from 'libs/events/src/lib/events.fn';

describe('ExploreBookingModalComponent', () => {
    let spectator: Spectator<ExploreBookingModalComponent>;
    const createComponent = createComponentFactory({
        component: ExploreBookingModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(DurationFieldComponent),
        ],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: {
                    space: { id: 'one', name: 'Test Space', email: '1' },
                },
            },
            { provide: MatDialogRef, useValue: { close: jest.fn() } },
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            MatProgressSpinnerModule,
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => {
        (common_mod as any).notifyError = jest.fn();
        (common_mod as any).notifySuccess = jest.fn();
        (common_mod as any).unique = jest.fn((_) => _);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow changing the title and duration', () => {
        spectator.detectChanges();
        expect('input[name="title"]').toExist();
        expect('a-duration-field').toExist();
    });

    it('should display selected space', () => {
        spectator.detectChanges();
        expect('[name="space"]').toContainText('Test Space');
    });

    it('should allow booking space', (done) => {
        spectator.detectChanges();
        spectator.component.form.patchValue({
            host: 'host@place.tech',
            creator: 'creator@place.tech',
        });
        spectator.typeInElement('Freedom Booking', 'input[name="title"]');
        const dialog_ref = spectator.inject(MatDialogRef);
        (cal_mod as any).querySpaceAvailability = jest.fn(() =>
            of([new Space()])
        );
        (events_mod as any).saveEvent = jest.fn(() => of(new Space()));
        dialog_ref.close.mockImplementation(() => {
            expect(cal_mod.querySpaceAvailability).toBeCalledTimes(1);
            expect(events_mod.saveEvent).toBeCalledTimes(1);
            done();
        });
        const spy = jest.spyOn(spectator.component, 'save');
        spectator.click('footer button');
        spectator.detectChanges();
        expect(spy).toHaveBeenCalled();
    });

    it('should handle booking errors', async () => {
        spectator.detectChanges();
        await spectator.component.save().catch(() => null);
        expect(common_mod.notifyError).toHaveBeenCalled();
        spectator.component.form.patchValue({
            host: 'host@place.tech',
            creator: 'creator@place.tech',
            title: 'Testing',
        });
        (cal_mod as any).querySpaceAvailability = jest.fn(() =>
            throwError('Failed')
        );
        await spectator.component.save().catch(() => null);
        expect(common_mod.notifyError).toHaveBeenCalledTimes(2);
        (cal_mod as any).querySpaceAvailability = jest.fn(() => of([]));
        await spectator.component.save().catch(() => null);
        expect(common_mod.notifyError).toHaveBeenCalledTimes(3);
        (cal_mod as any).querySpaceAvailability = jest.fn(() =>
            of([new Space()])
        );
        (events_mod as any).saveEvent = jest.fn(() => throwError('Failed'));
        await spectator.component.save().catch(() => null);
        expect(common_mod.notifyError).toHaveBeenCalledTimes(4);
        (events_mod as any).saveEvent = jest.fn(() => of(new Space()));
        await spectator.component.save().catch(() => null);
        expect(common_mod.notifyError).toHaveBeenCalledTimes(4);
    });
});
