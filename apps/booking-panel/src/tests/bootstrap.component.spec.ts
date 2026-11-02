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

    const submit = (system_id: string) => {
        const bootstrap = spectator.query(SystemBootstrapComponent);
        bootstrap.system_id.set(system_id);
        bootstrap.bootstrap();
    };

    afterEach(() => {
        localStorage.clear();
    });

    it('should save the system and route to the panel on submit', () => {
        spectator = createComponent();
        submit('sys-B0');
        expect(localStorage.getItem('PLACEOS.BOOKINGS.system')).toBe('sys-B0');
        expect(localStorage.getItem('PLACEOS.Bookings.event')).toBeNull();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            ['panel', 'sys-B0'],
            { queryParamsHandling: 'preserve' },
        );
    });

    it('should route to the events view and save the flag with ?event', () => {
        spectator = createComponent({ queryParams: { event: 'true' } });
        submit('sys-B0');
        expect(localStorage.getItem('PLACEOS.Bookings.event')).toBe('true');
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            ['events', 'sys-B0'],
            { queryParamsHandling: 'preserve' },
        );
    });
});
