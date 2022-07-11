import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { SpaceFlowFindItemComponent } from 'apps/workplace/src/app/book/space-flow/find-item.component';
import { SpaceFlowFindComponent } from 'apps/workplace/src/app/book/space-flow/find.component';
import { Router } from '@angular/router';

describe('SpaceFlowFindComponent', () => {
    let spectator: SpectatorRouting<SpaceFlowFindComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceFlowFindComponent,
        providers: [
            {
                provide: EventFormService,
                useValue: {
                    options: new BehaviorSubject({}),
                    loading: new BehaviorSubject(''),
                    setOptions: jest.fn(),
                    available_spaces: new BehaviorSubject([]),
                    form: { get: jest.fn(), patchValue: jest.fn() },
                },
            },
            {
                provide: OrganisationService,
                useValue: {
                    initialised: of(true),
                    building: new BehaviorSubject({}),
                    levelsForBuilding: jest.fn(() => []),
                },
            },
            {
                provide: SpacesService,
                useValue: { initialised: of(true), filter: jest.fn(() => []) },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
        ],
        declarations: [
            MockComponent(SpaceFlowFindItemComponent),
            MockComponent(IconComponent),
        ],
        imports: [
            MatProgressSpinnerModule,
            MatMenuModule,
            MatFormFieldModule,
            MatSelectModule,
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it.todo('should handle changing filters');

    it('should list available spaces', () => {
        expect('space-flow-find-item').toHaveLength(0);
        expect('p').toContainText(
            'No available spaces for selected time, capacity or level(s)'
        );
        const service = spectator.inject(EventFormService);
        (service.available_spaces as any).next([{ id: 1 }, { id: 2 }]);
        spectator.detectChanges();
        expect('space-flow-find-item').toHaveLength(2);
        expect('p').not.toContainText(
            'No available spaces for selected time, capacity or level(s)'
        );
    });

    it('should allow booking spaces', () => {
        const service = spectator.inject(EventFormService);
        (service.available_spaces as any).next([{ id: 1 }, { id: 2 }]);
        spectator.detectChanges();
        spectator.triggerEventHandler(
            'space-flow-find-item',
            'bookChange',
            true
        );
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith([
            '/book',
            'spaces',
            'confirm',
        ]);
    });

    it('should allow selecting multiple spaces', () => {
        const spaces = [{ id: '1' }, { id: '2' }];
        expect.assertions(3);
        expect(spectator.component.space_list).toHaveLength(0);
        const settings = spectator.inject(SettingsService);
        const space_service = spectator.inject(SpacesService);
        space_service.filter.mockImplementation((_) => spaces.filter(_));
        settings.get.mockImplementation(() => true);
        const service = spectator.inject(EventFormService);
        (service.available_spaces as any).next(spaces);
        spectator.detectChanges();
        const elements = spectator.queryAll('space-flow-find-item');
        for (let i = 0; i < elements.length; i++) {
            spectator.dispatchFakeEvent(elements[i], 'bookChange');
            expect(spectator.component.space_list).toHaveLength(i + 1);
        }
    });
});
