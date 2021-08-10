import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { SettingsService } from '@placeos/common';
import { ExploreMapViewComponent, ExploreStateService } from '@placeos/explore';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent } from 'ng-mocks';
import { timer } from 'rxjs';
import { TopbarHeaderComponent } from '../../app/components/topbar-header.component';
import { ExploreComponent } from '../../app/explore/explore.component';
import { FooterLegendComponent } from '../../app/explore/footer-legend.component';

describe('ExploreComponent', () => {
    let spectator: Spectator<ExploreComponent>;
    const createComponent = createComponentFactory({
        component: ExploreComponent,
        declarations: [
            MockComponent(TopbarHeaderComponent),
            MockComponent(ExploreMapViewComponent),
            MockComponent(FooterLegendComponent),
        ],
        providers: [
            {
                provide: OrganisationService,
                useValue: { levelWithID: jest.fn() },
            },
            {
                provide: SettingsService,
                useValue: { get: jest.fn(), post: jest.fn() },
            },
            {
                provide: ExploreStateService,
                useValue: { setLevel: jest.fn(), setPositions: jest.fn() },
            },
            { provide: Router, useValue: { navigate: jest.fn() } },
            { provide: MatDialog, useValue: { closeAll: jest.fn() } },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });

    it('should reset kiosk', async () => {
        (spectator.inject(SettingsService).get as any).mockImplementation(
            () => 0.05
        );
        localStorage.setItem('KIOSK.level', '1');
        jest.spyOn(spectator.component, 'resetKiosk');
        expect(spectator.component.resetKiosk).not.toBeCalled();
        spectator.component.ngOnInit();
        await timer(55).toPromise();
        expect(spectator.component.resetKiosk).toBeCalled();
    });
});
