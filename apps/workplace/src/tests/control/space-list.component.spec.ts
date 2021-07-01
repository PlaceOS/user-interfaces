import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';
import { ControlSpaceListItemComponent } from '../../app/control/list-item.component';
import { ControlSpaceListComponent } from '../../app/control/space-list.component';

describe('ControlSpaceListComponent', () => {
    let spectator: Spectator<ControlSpaceListComponent>;
    const createComponent = createComponentFactory({
        component: ControlSpaceListComponent,
        providers: [
            {
                provide: OrganisationService,
                useValue: { navigate: jest.fn(), buildings: [] },
            },
            {
                provide: SpacesService,
                useValue: {
                    initialised: of(true),
                    filter: jest.fn((_) =>
                        [
                            { id: '1', name: '1', support_url: '1' },
                            { id: '2', name: '2', support_url: '2' },
                        ].filter(_)
                    ),
                },
            },
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
        expect('a-control-space-list-item').toHaveLength(0);
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
