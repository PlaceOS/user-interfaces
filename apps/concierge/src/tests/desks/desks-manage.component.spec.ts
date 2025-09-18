import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { ItemListFieldComponent } from '@placeos/form-fields';
import { DesksManageComponent } from '../../app/desks/desks-manage.component';
import { DesksStateService } from '../../app/desks/desks-state.service';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/common');

import { MatDialog } from '@angular/material/dialog';
import { IconComponent, SimpleTableComponent } from '@placeos/components';

describe('DesksManageComponent', () => {
    let spectator: Spectator<DesksManageComponent>;
    const createComponent = createComponentFactory({
        component: DesksManageComponent,
        providers: [
            MockProvider(SettingsService, { get: jest.fn() }),
            MockProvider(DesksStateService, {
                setFilters: jest.fn(),
                desks: new BehaviorSubject([{ id: '1' }]),
                new_desks: new BehaviorSubject([]),
                filters: new BehaviorSubject({}),
                clearNewDesks: jest.fn(),
            } as any),
            MockProvider(OrganisationService, {
                active_levels: of([]),
                initialised: of(true),
                levelWithID: jest.fn(() => ({ id: 'lvl-1' })),
                buildings: [],
            } as any),
            MockProvider(MatDialog, { open: jest.fn() }),
        ],
        declarations: [
            MockComponent(ItemListFieldComponent),
            MockComponent(IconComponent),
            MockComponent(SimpleTableComponent),
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
});
