import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { WFHSettingsModalComponent } from '../lib/wfh-settings-modal.component';

jest.mock('libs/bookings/src/lib/bookings.fn');

import * as bkn_fn from 'libs/bookings/src/lib/bookings.fn';
import { of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';

describe('WFHSettingsModalComponent', () => {
    let spectator: Spectator<WFHSettingsModalComponent>;
    const createComponent = createComponentFactory({
        component: WFHSettingsModalComponent,
        providers: [
            { provide: MatDialogRef, useValue: { close: jest.fn() } },
            {
                provide: SettingsService,
                useValue: { get: jest.fn(), saveUserSetting: jest.fn() },
            },
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(UserAvatarComponent),
            MockComponent(TimeFieldComponent),
        ],
        imports: [
            MatCheckboxModule,
            MatMenuModule,
            MatProgressSpinnerModule,
            MatFormFieldModule,
            MatSelectModule,
            FormsModule,
            ReactiveFormsModule,
        ],
    });

    beforeEach(() => {
        (bkn_fn.queryBookings as any) = jest.fn(() => of([]));
        (bkn_fn.saveBooking as any) = jest.fn(() => of({}));
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow changing the selected location for today', () => {
        expect('[today-location]').toExist();
        expect(spectator.component.option).toBe('wfo');
        spectator.click('[today-location]');
        expect('[mat-menu-item][id="wfh"]').toExist();
        spectator.click('[mat-menu-item][id="wfh"]');
        expect(spectator.component.option).toBe('wfh');
    });

    it('should allow selected saving changes to options', () => {
        expect('button[save]').toHaveAttribute('disabled');
        spectator.component.changed = true;
        spectator.detectChanges();
        expect('button[save]').not.toHaveAttribute('disabled');
        spectator.click('button[save]');
        expect(bkn_fn.saveBooking).not.toBeCalled();
        // spectator.component.option = 'other-option';
        // spectator.click('button[save]');
        // expect(bkn_fn.saveBooking).toBeCalled();
    });

    it('should show loading state', () => {
        expect('[loading]').not.toExist();
        spectator.component.loading = true;
        spectator.detectChanges();
        expect('[loading]').toExist();
    });
});
