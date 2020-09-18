import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule } from 'ng-mocks';

import { BookingModalComponent } from './booking-modal.component';
import { UserSearchFieldComponent } from 'src/app/ui/user-search-field/user-search-field.component';
import { TimeFieldComponent } from 'src/app/ui/time-field/time-field.component';
import { DurationFieldComponent } from 'src/app/ui/duration-field/duration-field.component';

describe('BookingModalComponent', () => {
    let spectator: Spectator<BookingModalComponent>;
    const createComponent = createComponentFactory({
        component: BookingModalComponent,
        providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
        declarations: [
            MockComponent(UserSearchFieldComponent),
            MockComponent(TimeFieldComponent),
            MockComponent(DurationFieldComponent),
            MockComponent(MatFormFieldModule),
            MockComponent(MatInputModule)
        ],
        imports: [MockModule(MatDialogModule)]
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show a form', () => {
        expect(spectator.component.form).toBeTruthy();
        expect(spectator.query('.form')).toBeTruthy();
    });

    it('should allow for submitting the form', () => {
        const button: HTMLButtonElement = spectator.query('button[name="save"]');
        expect(button).toBeTruthy();
        button.click();
        expect(spectator.component.loading).toBeTruthy();
        spectator.detectChanges();
        expect(spectator.query('.form')).toBeFalsy();
        expect(spectator.query('mat-spinner')).toBeTruthy();
    });

    it('should be closable', () => {
        expect(spectator.query('button[mat-dialog-close]')).toBeTruthy();
    });
});
