import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { UserAvatarComponent } from 'libs/components/src/lib/user-avatar.component';
import { WFHSettingsModalComponent } from '../lib/wfh-settings-modal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { TimeFieldComponent } from 'libs/form-fields/src/lib/time-field.component';

describe('WFHSettingsModalComponent', () => {
    let spectator: Spectator<WFHSettingsModalComponent>;
    const createComponent = createComponentFactory({
        component: WFHSettingsModalComponent,
        providers: [
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(SettingsService, {
                get: vi.fn(),
                saveUserSetting: vi.fn(),
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
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show loading state', () => {
        expect('[loading]').not.toExist();
        spectator.component.loading.set(true);
        spectator.detectChanges();
        expect('[loading]').toExist();
    });
});
