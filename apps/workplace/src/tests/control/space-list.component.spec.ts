import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { ControlSpaceListItemComponent } from '../../app/control/list-item.component';
import { ControlSpaceListComponent } from '../../app/control/space-list.component';

describe('ControlSpaceListComponent', () => {
    let spectator: Spectator<ControlSpaceListComponent>;
    const createComponent = createComponentFactory({
        component: ControlSpaceListComponent,
        providers: [
            MockProvider(OrganisationService, {
                navigate: jest.fn(),
                buildings: [],
                active_building: new BehaviorSubject({}),
            } as any),
            MockProvider(SpacesService, {
                initialised: of(true),
                all_spaces: of([
                    {
                        id: '1',
                        name: '1',
                        support_url: '1',
                        zones: [undefined],
                    },
                    {
                        id: '2',
                        name: '2',
                        support_url: '2',
                        zones: [undefined],
                    },
                ]),
            } as any),
        ],
        declarations: [
            MockComponent(IconComponent),
            MockComponent(ControlSpaceListItemComponent),
        ],
        imports: [MatFormFieldModule, MatInputModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should list spaces', () => {
        spectator.detectChanges();
        expect('a-control-space-list-item').toHaveLength(2);
    });

    it('should allow user to filter spaces', () => {
        spectator.detectChanges();
        expect('a-control-space-list-item').toHaveLength(2);
        spectator.typeInElement('1', 'input');
        spectator.detectChanges();
        expect('a-control-space-list-item').toHaveLength(1);
    });
});
