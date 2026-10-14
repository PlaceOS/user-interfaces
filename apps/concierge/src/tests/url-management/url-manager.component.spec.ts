import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';

import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { UrlListComponent } from '../../app/url-management/url-list.component';
import { UrlManagementService } from '../../app/url-management/url-management.service';
import { UrlManagerComponent } from '../../app/url-management/url-manager.component';

describe('UrlManagerComponent', () => {
    let spectator: Spectator<UrlManagerComponent>;
    let state: any;

    const createComponent = createComponentFactory({
        component: UrlManagerComponent,
        declarations: [
            MockComponent(ApplicationSidebarComponent),
            MockComponent(UrlListComponent),
        ],
        providers: [
            MockProvider(UrlManagementService, {
                editURL: vi.fn(),
                setSearchString: vi.fn(),
            }),
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
