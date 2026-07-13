import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { signal } from '@angular/core';
import { MockComponent, MockProvider } from 'ng-mocks';

import { LockersTopbarComponent } from '../../app/lockers/locker-topbar.component';
import { LockerStateService } from '../../app/lockers/locker-state.service';
import { DateOptionsComponent } from '../../app/ui/date-options.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';

describe('LockersTopbarComponent', () => {
    let spectator: SpectatorRouting<LockersTopbarComponent>;

    const createComponent = createRoutingFactory({
        component: LockersTopbarComponent,
        declarations: [
            MockComponent(SearchbarComponent),
            MockComponent(DateOptionsComponent),
        ],
        providers: [
            MockProvider(LockerStateService, {
                levels: signal([]),
                bookable_levels: signal([]),
                filters: signal({}),
                search: signal(''),
                setFilters: vi.fn(),
                setSearch: vi.fn(),
                editLockerBank: vi.fn(),
                releaseAllLockers: vi.fn(),
            } as any),
            MockProvider(OrganisationService, {
                initialised: signal(true),
                active_region: signal(null),
                active_building: signal({ id: 'bld-1', timezone: 'UTC' }),
                levelWithID: vi.fn(),
                buildings: [],
                building: { id: 'bld-1', timezone: 'UTC' },
                region: null,
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(() => false),
            } as any),
            MockProvider(MatDialog, {
                open: vi.fn(),
            }),
        ],
        imports: [MatFormFieldModule, MatSelectModule, FormsModule],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should clear search when switching locker views', () => {
        spectator.component.zones.set(['lvl-1']);
        (spectator.component as any)._previous_path = 'manage';
        Object.defineProperty(spectator.component, 'path', {
            value: () => 'events',
            configurable: true,
        });

        (spectator.component as any)._updatePath();

        expect(spectator.inject(LockerStateService).setSearch).toHaveBeenCalledWith(
            '',
        );
        expect(spectator.component.zones()).toEqual([]);
    });
});
