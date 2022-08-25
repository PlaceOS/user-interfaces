import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { SettingsService } from '@placeos/common';
import { EventFormService, generateEventForm } from '@placeos/events';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';

import { ExploreBookingModalComponent } from '../lib/explore-booking-modal.component';
import { fakeAsync } from '@angular/core/testing';

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
            {
                provide: EventFormService,
                useValue: {
                    form: generateEventForm(),
                    newForm: jest.fn(),
                    postForm: jest.fn(async () => ({})),
                    loading: of(''),
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
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

    beforeEach(() => spectator = createComponent());

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

    it('should allow booking space', fakeAsync(() => {
        spectator.component.form.patchValue({
            host: 'host@place.tech',
            creator: 'creator@place.tech',
        });
        spectator.typeInElement('Freedom Booking', 'input[name="title"]');
        const spy = jest.spyOn(spectator.component, 'save');
        spectator.click('footer button');
        expect(spy).toHaveBeenCalled();
        spectator.tick();
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    }));
});
