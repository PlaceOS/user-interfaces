import { signal } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { SettingsService } from '@placeos/common';
import { EventFormService } from '@placeos/events';

import { IconComponent, UserAvatarComponent } from '@placeos/components';
import { LandingColleaguesComponent } from '../../app/landing/landing-colleagues.component';
import { LandingStateService } from '../../app/landing/landing-state.service';

describe('LandingColleaguesComponent', () => {
    let spectator: SpectatorRouting<LandingColleaguesComponent>;
    const createComponent = createRoutingFactory({
        component: LandingColleaguesComponent,
        declarations: [
            MockComponent(UserAvatarComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            MockProvider(LandingStateService, {
                contacts: signal([]),
                search_results: signal([]),
                options: signal({ search: '' }),
                loading: signal(false),
                addContact: vi.fn(),
                removeContact: vi.fn(),
                setOptions: vi.fn(),
            } as any),
            MockProvider(SettingsService, { get: vi.fn() }),
            MockProvider(EventFormService, {
                newForm: vi.fn(),
                form: new FormGroup({}) as any,
            }),
        ],
        imports: [FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
