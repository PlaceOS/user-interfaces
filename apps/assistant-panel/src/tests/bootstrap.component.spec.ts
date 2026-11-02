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

    it('should save the system and route to /panel on submit', () => {
        const bootstrap = spectator.query(SystemBootstrapComponent);
        bootstrap.system_id.set('sys-1');
        bootstrap.bootstrap();
        expect(localStorage.getItem('PLACEOS.ASSISTANT.system')).toBe('sys-1');
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            ['/panel', 'sys-1'],
            { queryParamsHandling: 'preserve' },
        );
    });
});
