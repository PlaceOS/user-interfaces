import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockModule } from 'ng-mocks';

import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';
import {
    DurationFieldComponent,
    TimeFieldComponent,
    UserSearchFieldComponent,
} from '@placeos/form-fields';
import { BookingModalComponent } from '../../app/overlays/booking-modal.component';

describe('BookingModalComponent', () => {
    let spectator: Spectator<BookingModalComponent>;
    const createComponent = createComponentFactory({
        component: BookingModalComponent,
        providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
        declarations: [
            mockComponent(UserSearchFieldComponent),
            mockComponent(TimeFieldComponent),
            mockComponent(DurationFieldComponent),
            mockComponent(IconComponent),
        ],
        imports: [
            MockModule(MatDialogModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MatProgressSpinnerModule,
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
        expect('[form]').toExist();
    });

    it('should allow for submitting the form', () => {
        spectator.component.model.update((m) => ({
            ...m,
            title: 'Test title',
            organiser: { email: 'j@b.com' } as any,
        }));
        const button: HTMLButtonElement = spectator.query(
            'button[name="save"]',
        );
        expect(button).toBeTruthy();
        button.click();
        expect(spectator.component.loading).toBeTruthy();
        spectator.detectChanges();
        expect('form').not.toExist();
        expect('mat-spinner').toExist();
    });

    it('should be closable', () => {
        expect(spectator.query('button[icon]')).toBeTruthy();
    });
});
