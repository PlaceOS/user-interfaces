import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { CateringStateService } from '@placeos/catering';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SettingsService } from '@placeos/common';
import { CheckinPreferencesComponent } from '../../app/checkin/checkin-preferences.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';
import { parseTokenFromUrl } from '../../app/checkin/token-from-url';

describe('CheckinPreferencesComponent', () => {
    let spectator: SpectatorRouting<CheckinPreferencesComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinPreferencesComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [
            MockProvider(CheckinStateService, {
                event: of({}),
                guest: of({}),
            } as any),
            MockProvider(CateringStateService, { menu: of([]) }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [
            MatFormFieldModule,
            MatSelectModule,
            FormsModule,
            ReactiveFormsModule,
            MockModule(MatProgressSpinnerModule),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should parse token from hash route query', () => {
        const token = parseTokenFromUrl(
            'https://example.test/#/checkin/preferences?token=abc.123',
        );
        expect(token).toBe('abc.123');
    });

    it('should parse jwt from pre-hash URL query', () => {
        const token = parseTokenFromUrl(
            'https://example.test/?jwt=abc.123#/checkin/preferences',
        );
        expect(token).toBe('abc.123');
    });
});
