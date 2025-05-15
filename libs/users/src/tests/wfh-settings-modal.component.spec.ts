import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { WFHSettingsModalComponent } from '../lib/wfh-settings-modal.component';

jest.mock('libs/bookings/src/lib/bookings.fn');

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import * as bkn_fn from 'libs/bookings/src/lib/bookings.fn';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';
import { of } from 'rxjs';

describe('WFHSettingsModalComponent', () => {
    let spectator: Spectator<WFHSettingsModalComponent>;
    const createComponent = createComponentFactory({
        component: WFHSettingsModalComponent,
        providers: [
            MockProvider(MatDialogRef, { close: jest.fn() }),
            MockProvider(SettingsService, {
                get: jest.fn(),
                saveUserSetting: jest.fn(),
            }),
            MockProvider(MAT_DIALOG_DATA, {}),
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

    it('should show loading state', () => {
        expect('[loading]').not.toExist();
        spectator.component.loading = true;
        spectator.detectChanges();
        expect('[loading]').toExist();
    });
});
