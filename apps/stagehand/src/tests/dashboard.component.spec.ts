import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent } from 'ng-mocks';

import { DashboardComponent } from '../app/dashboard.component';
import { SidebarComponent } from '../app/ui/sidebar.component';

describe('DashboardComponent', () => {
    let spectator: Spectator<DashboardComponent>;

    const create_component = createComponentFactory({
        component: DashboardComponent,
        declarations: [MockComponent(SidebarComponent)],
    });

    beforeEach(() => {
        spectator = create_component();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the sidebar', () => {
        expect(spectator.query('sidebar')).toBeTruthy();
    });

    it('should render the page heading and report action', () => {
        expect(spectator.query('h1')).toHaveText('AV Systems Monitor');
        const button = spectator.query('button[btn]');
        expect(button).toHaveText('Generate report');
    });
});
