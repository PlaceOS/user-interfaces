import { signal } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { EventsStateService } from '../../app/day-view/events-state.service';
import { FacilitiesTopbarComponent } from '../../app/facilities/facilities-topbar.component';
import { SearchbarComponent } from '../../app/ui/searchbar.component';

describe('FacilitiesTopbarComponent', () => {
    let spectator: SpectatorRouting<FacilitiesTopbarComponent>;
    let set_zones: jest.Mock;
    let set_filters: jest.Mock;

    const createComponent = createRoutingFactory({
        component: FacilitiesTopbarComponent,
        detectChanges: false,
        imports: [NoopAnimationsModule],
        declarations: [MockComponent(SearchbarComponent)],
        providers: [
            MockProvider(EventsStateService, {
                setZones: (...args: any[]) => set_zones(...args),
                setFilters: (...args: any[]) => set_filters(...args),
                setDate: jest.fn(),
            } as any),
            MockProvider(OrganisationService, {
                waitUntilInitialised: () => Promise.resolve(),
                active_levels: signal([]) as any,
                levelWithID: jest.fn(),
                buildings: [],
            } as any),
        ],
    });

    beforeEach(() => {
        set_zones = jest.fn();
        set_filters = jest.fn();
        spectator = createComponent();
    });

    it('should update the zone selection and state when zones change', () => {
        const navigate = jest.spyOn(spectator.router, 'navigate');
        spectator.component.updateZones(['level-1', 'level-2']);

        expect(spectator.component.zones()).toEqual(['level-1', 'level-2']);
        expect(set_zones).toHaveBeenCalledWith(['level-1', 'level-2']);
        expect(navigate).toHaveBeenCalledWith(
            [],
            expect.objectContaining({
                queryParams: { zone_ids: 'level-1,level-2' },
            }),
        );
    });

    it('should hide the event types that are not selected', () => {
        spectator.component.updateTypes(['internal']);

        expect(spectator.component.type_list()).toEqual(['internal']);
        expect(set_filters).toHaveBeenCalledWith({
            hide_type: [
                { id: 'external', name: 'External' },
                { id: 'cancelled', name: 'Cancelled' },
            ],
        });
    });

    it('should hide no types when every type is selected', () => {
        spectator.component.updateTypes(['internal', 'external', 'cancelled']);

        expect(set_filters).toHaveBeenCalledWith({ hide_type: [] });
    });
});
