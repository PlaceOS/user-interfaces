import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
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
    const dialog_data: Record<string, unknown> = {};
    const createComponent = createComponentFactory({
        component: BookingModalComponent,
        providers: [{ provide: MAT_DIALOG_DATA, useValue: dialog_data }],
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
        for (const key of Object.keys(dialog_data)) delete dialog_data[key];
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

    it('should keep the default duration within the configured bounds', () => {
        dialog_data.min_duration = 60;
        dialog_data.max_duration = 120;
        spectator = createComponent();
        expect(spectator.component.model().duration).toBe(60);

        dialog_data.min_duration = 15;
        dialog_data.max_duration = 20;
        spectator = createComponent();
        expect(spectator.component.model().duration).toBe(20);
    });
});
