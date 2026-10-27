import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { CateringItem, OrganisationService } from '@placeos/common';
import { get } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { CheckinPreferencesComponent } from '../../app/checkin/checkin-preferences.component';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

// Workspace modules cannot be intercepted, so stub the API client they call
vi.mock('@placeos/ts-client', { spy: true });

describe('CheckinPreferencesComponent', () => {
    let spectator: SpectatorRouting<CheckinPreferencesComponent>;
    const createComponent = createRoutingFactory({
        component: CheckinPreferencesComponent,
        detectChanges: false,
        providers: [
            {
                provide: CheckinStateService,
                useValue: {
                    event: signal({ id: 'event-1', asset_id: 'v@b.com' }),
                },
            },
            MockProvider(OrganisationService, {
                active_building: signal(null),
            }),
        ],
    });

    it('should keep the form locked until the saved beverage loads', async () => {
        let load_saved: (value: unknown) => void = () => undefined;
        vi.mocked(get).mockReturnValue(
            new Promise((resolve) => (load_saved = resolve)) as any,
        );
        spectator = createComponent();
        spectator.detectChanges();
        spectator.component.menu.set([new CateringItem({ name: 'Tea' })]);
        expect(spectator.component.loading()).toBe(true);
        load_saved(null);
        await vi.waitFor(() =>
            expect(spectator.component.loading()).toBe(false),
        );
    });
});
