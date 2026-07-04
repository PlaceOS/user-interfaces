import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { UrlListComponent } from '../../app/url-management/url-list.component';
import { UrlManagerComponent } from '../../app/url-management/url-manager.component';
import { UrlManagementService } from '../../app/url-management/url-management.service';

describe('UrlManagerComponent', () => {
    let spectator: Spectator<UrlManagerComponent>;
    let state: any;

    const createComponent = createComponentFactory({
        component: UrlManagerComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(UrlListComponent),
        ],
        providers: [
            MockProvider(UrlManagementService, {
                editURL: jest.fn(),
                setSearchString: jest.fn(),
            } as any),
        ],
    });

    beforeEach(() => {
        spectator = createComponent({ detectChanges: false });
        state = spectator.inject(UrlManagementService);
    });

    it('should open a new short URL modal', () => {
        spectator.component.new();
        expect(state.editURL).toHaveBeenCalledWith();
    });

    it('should forward search changes to the management service', () => {
        spectator.component.updateSearch('careers');
        expect(state.setSearchString).toHaveBeenCalledWith('careers');
    });
});
