import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { DesksService } from '@placeos/bookings';
import { OrganisationService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { ExploreMapViewComponent, ExploreStateService } from '@placeos/explore';
import { MockProvider } from 'ng-mocks';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { ExploreComponent } from '../../app/explore/explore.component';
import { LandingStateService } from '../../app/landing/landing-state.service';

describe('ExploreComponent', () => {
    let spectator: Spectator<ExploreComponent>;
    const upcoming_events = signal<any[]>([]);
    const createComponent = createComponentFactory({
        component: ExploreComponent,
        providers: [
            { provide: DesksService, useValue: {} },
            MockProvider(LandingStateService, {
                upcoming_events,
            }),
            MockProvider(ExploreStateService, {}),
            MockProvider(OrganisationService, { levelWithID: jest.fn() }),
        ],
        declarations: [
            mockComponent(TopbarComponent),
            mockComponent(FooterMenuComponent),
            mockComponent(ExploreMapViewComponent),
        ],
    });

    beforeEach(() => {
        upcoming_events.set([]);
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should place the upcoming booking pill below map controls on mobile', () => {
        upcoming_events.set([
            {
                title: 'Desk booking',
                type: 'desk',
                date: Date.now() + 60 * 60 * 1000,
                date_end: Date.now() + 2 * 60 * 60 * 1000,
                zones: ['lvl-1'],
            },
        ]);
        spectator.detectChanges();

        const pill = spectator.query('[name="upcoming-booking-map-pill"]');
        expect(pill).toHaveClass('top-20');
        expect(pill).toHaveClass('sm:top-2');
    });
});
