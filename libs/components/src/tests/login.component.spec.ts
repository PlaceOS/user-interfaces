import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { MockComponent, MockDirective, MockPipe, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { AuthenticatedImageDirective } from '../lib/authenticated-image.directive';
import { IconComponent } from '../lib/icon.component';
import { LoginComponent } from '../lib/login.component';
import { SafePipe } from '../lib/safe.pipe';

describe('LoginComponent', () => {
    let spectator: Spectator<LoginComponent>;
    const createComponent = createComponentFactory({
        component: LoginComponent,
        declarations: [
            MockComponent(IconComponent),
            MockPipe(SafePipe),
            MockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            MockProvider(SettingsService, {
                initialised: of(true),
                get: jest.fn(() => ''),
            } as any),
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
