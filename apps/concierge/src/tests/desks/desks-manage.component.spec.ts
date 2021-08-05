import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTableComponent, IconComponent } from '@placeos/components';
import { Desk, OrganisationService } from '@placeos/organisation';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject, of, timer } from 'rxjs';

import { ItemListFieldComponent } from 'libs/form-fields/src/lib/item-list-field.component';
import { DesksManageComponent } from '../../app/desks/desks-manage.component';
import { DesksStateService } from '../../app/desks/desks-state.service';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/common');

import * as ts_client from '@placeos/ts-client';
import * as common_mod from '@placeos/common';

describe('DesksManageComponent', () => {
    let spectator: Spectator<DesksManageComponent>;
    const createComponent = createComponentFactory({
        component: DesksManageComponent,
        providers: [
            {
                provide: DesksStateService,
                useValue: {
                    setFilters: jest.fn(),
                    desks: new BehaviorSubject([{ id: '1' }]),
                    filters: new BehaviorSubject({}),
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    active_levels: of([]),
                    initialised: of(true),
                    levelWithID: jest.fn(() => ({ id: 'lvl-1' })),
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

    it('should handle changes to desks', () => {
        expect('button[save]').not.toExist();
        spectator.component.changes['1'] = { name: 'another' };
        spectator.detectChanges();
        expect('button[save]').toExist();
    });

    it('should allow saving of changes to desks', async () => {
        (ts_client.updateMetadata as any) = jest.fn(() => of({}));
        (common_mod.notifySuccess as any) = jest.fn(() => null);
        spectator.component.changes['1'] = { name: 'another' };
        spectator.detectChanges();
        spectator.click('button[save]');
        await timer(5).toPromise();
        expect(ts_client.updateMetadata).toBeCalledWith('lvl-1', {
            name: 'desks',
            description: 'desks',
            details: [new Desk({ id: '1', name: 'another' }).toJSON()],
        });

        expect(spectator.component.changes).toEqual({});
    });
});
