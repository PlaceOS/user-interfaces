import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of, timer } from 'rxjs';

import { SettingsService } from '@placeos/common';
import { EventFormService, generateEventForm } from '@placeos/events';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';

import { ExploreBookingModalComponent } from '../lib/explore-booking-modal.component';
import { fakeAsync } from '@angular/core/testing';

describe('ExploreBookingModalComponent', () => {
    let spectator: SpectatorRouting<ExploreBookingModalComponent>;
    const createComponent = createRoutingFactory({
        component: ExploreBookingModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(DurationFieldComponent),
        ],
        providers: [
            MockProvider(MAT_DIALOG_DATA, {
                space: { id: 'one', name: 'Test Space', email: '1' },
            }),
            MockProvider(EventFormService, {
                form: generateEventForm(),
                newForm: jest.fn(),
                postForm: jest.fn(async () => ({})),
                loading: of(''),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(),
                app_name: 'workplace',
            }),
            MockProvider(MatDialogRef, { close: jest.fn() }),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            MatProgressSpinnerModule,
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

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

    it('should allow booking space', async () => {
        spectator.component.form.patchValue({
            host: 'host@place.tech',
            creator: 'creator@place.tech',
        });
        spectator.typeInElement('Freedom Booking', 'input[name="title"]');
        const spy = jest.spyOn(spectator.component, 'save');
        spectator.click('footer button');
        expect(spy).toHaveBeenCalled();
        await timer(310).toPromise();
        await spectator.fixture.whenStable();
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
    });
});
