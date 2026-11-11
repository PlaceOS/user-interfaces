import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { VirtualConciergeButtonComponent } from '../../app/components/virtual-concierge-button.component';
import { TeamQuickActionsComponent } from '../../app/team-schedule/team-quick-actions.component';
import { TeamScheduleFiltersComponent } from '../../app/team-schedule/team-schedule-filters.component';
import { TeamScheduleListComponent } from '../../app/team-schedule/team-schedule-list.component';
import { TeamScheduleTableComponent } from '../../app/team-schedule/team-schedule-table.component';
import { TeamScheduleComponent } from '../../app/team-schedule/team-schedule.component';
import { TeamScheduleService } from '../../app/team-schedule/team-schedule.service';

describe('TeamScheduleComponent', () => {
    let spectator: Spectator<TeamScheduleComponent>;
    const createComponent = createComponentFactory({
        component: TeamScheduleComponent,
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
            MockComponent(VirtualConciergeButtonComponent),
            MockComponent(TeamQuickActionsComponent),
            MockComponent(TeamScheduleFiltersComponent),
            MockComponent(TeamScheduleTableComponent),
            MockComponent(TeamScheduleListComponent),
        ],
        providers: [
            MockProvider(TeamScheduleService, {
                watch: vi.fn(() => vi.fn()),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should default to showing the navigation chrome', () => {
        expect(spectator.component.hide_nav).toBe(false);
        expect(spectator.query(TopbarComponent)).toBeTruthy();
        expect(spectator.query(FooterMenuComponent)).toBeTruthy();
    });

    it('should hide the topbar and footer when nav is hidden', () => {
        localStorage.setItem('PlaceOS.hide_nav', 'true');
        spectator.detectChanges();
        expect(spectator.query(TopbarComponent)).toBeFalsy();
        expect(spectator.query(FooterMenuComponent)).toBeFalsy();
        localStorage.removeItem('PlaceOS.hide_nav');
    });

    it('should watch the team members only while the page is open', () => {
        const service = spectator.inject(TeamScheduleService);
        const release = vi.mocked(service.watch).mock.results[0].value;
        expect(service.watch).toHaveBeenCalledTimes(1);
        expect(release).not.toHaveBeenCalled();

        spectator.fixture.destroy();

        expect(release).toHaveBeenCalledTimes(1);
    });
});
