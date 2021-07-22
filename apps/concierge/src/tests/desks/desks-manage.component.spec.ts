import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTableComponent, IconComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { ItemListFieldComponent } from 'libs/form-fields/src/lib/item-list-field.component';
import { DesksManageComponent } from '../../app/desks/desks-manage.component';
import { DesksStateService } from '../../app/desks/desks-state.service';

describe('DesksManageComponent', () => {
    let spectator: Spectator<DesksManageComponent>;
    const createComponent = createComponentFactory({
        component: DesksManageComponent,
        providers: [
            {
                provide: DesksStateService,
                useValue: {
                    setFilters: jest.fn(),
                    desks: new BehaviorSubject([]),
                    filters: new BehaviorSubject({}),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    active_levels: of([]),
                    initialised: of(true),
                    levelWithID: jest.fn(),
                    buildings: [],
                },
            },
        ],
        declarations: [
            MockComponent(CustomTableComponent),
            MockComponent(ItemListFieldComponent),
            MockComponent(IconComponent),
        ],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            MatMenuModule,
            MatProgressSpinnerModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });

    it.todo('should handle changes to desks');
    it.todo('should allow saving of changes to desks');
});
