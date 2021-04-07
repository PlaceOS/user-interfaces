import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockComponent, MockPipe } from 'ng-mocks';
import { of } from 'rxjs';

import { IconComponent } from '../lib/icon.component';
import { LoginComponent } from '../lib/login.component';
import { SafePipe } from '../lib/safe.pipe';

describe('LoginComponent', () => {
    let spectator: Spectator<LoginComponent>;
    const createComponent = createComponentFactory({
        component: LoginComponent,
        declarations: [MockComponent(IconComponent), MockPipe(SafePipe)],
        providers: [
            {
                provide: SettingsService,
                useValue: { initialised: of(true), get: jest.fn((_) => '') },
            },
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

    it('should show form', () => {
        // TODO
    });
});
