import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MockModule, MockProvider } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { SystemBootstrapComponent } from '@placeos/components';
import { BootstrapComponent } from '../app/bootstrap.component';

describe('BootstrapComponent', () => {
    let spectator: SpectatorRouting<BootstrapComponent>;
    const createComponent = createRoutingFactory({
        component: BootstrapComponent,
        providers: [MockProvider(SettingsService, { get: vi.fn() })],
        imports: [
            FormsModule,
            MockModule(MatAutocompleteModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            MockModule(MatProgressSpinnerModule),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('should save the system and route to /tabbed on submit', () => {
        const bootstrap = spectator.query(SystemBootstrapComponent);
        bootstrap.system_id.set('sys-B0');
        bootstrap.bootstrap();
        expect(localStorage.getItem('PLACEOS.CONTROL.system')).toBe('sys-B0');
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            ['/tabbed', 'sys-B0'],
            { queryParamsHandling: 'preserve' },
        );
    });
});
