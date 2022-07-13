import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule } from 'ng-mocks';

import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { DurationFieldComponent } from 'libs/form-fields/src/lib/duration-field.component';
import { BookingModalComponent } from '../../app/overlays/booking-modal.component';

describe('BookingModalComponent', () => {
    let spectator: Spectator<BookingModalComponent>;
    const createComponent = createComponentFactory({
        component: BookingModalComponent,
        providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
        declarations: [
            MockComponent(UserSearchFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
        ],
        imports: [
            MockModule(MatDialogModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MatProgressSpinnerModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show a form', () => {
        expect(spectator.component.form).toBeTruthy();
        expect('form').toExist();
    });

    it('should allow for submitting the form', () => {
        spectator.component.form.patchValue({ title: 'Test title', organiser: { email: 'j@b.com' } });
        const button: HTMLButtonElement = spectator.query(
            'button[name="save"]'
        );
        expect(button).toBeTruthy();
        button.click();
        expect(spectator.component.loading).toBeTruthy();
        spectator.detectChanges();
        expect('form').not.toExist();
        expect('mat-spinner').toExist();
    });

    it('should be closable', () => {
        expect(spectator.query('button[mat-dialog-close]')).toBeTruthy();
    });
});
