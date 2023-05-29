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
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject, of, timer } from 'rxjs';

import { SpaceFlowFindItemComponent } from 'apps/workplace/src/app/book/space-flow/find-item.component';
import { SpaceFlowFindComponent } from 'apps/workplace/src/app/book/space-flow/find.component';
import { Router } from '@angular/router';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';

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
                    building: {},
                    active_building: new BehaviorSubject({}),
                    building_list: new BehaviorSubject([]),
                    levelsForBuilding: jest.fn(() => []),
                },
            },
            { provide: SettingsService, useValue: { get: jest.fn() } },
            {
                provide: SpacePipe,
                useValue: { transform: jest.fn(async () => ({})) },
            },
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
        const spy = jest.spyOn(spectator.component, 'confirmBooking');
        spectator.detectChanges();
        (spectator.inject(SpacePipe).transform as any).mockResolvedValue(
            {} as any
        );
        spectator.triggerEventHandler(
            'space-flow-find-item',
            'bookChange',
            true
        );
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });

    it('should allow selecting multiple spaces', () => {
        const spaces = [{ id: '1' }, { id: '2' }];
        expect.assertions(4);
        expect(spectator.component.space_list).toHaveLength(0);
        const settings = spectator.inject(SettingsService);
        (settings.get as any).mockImplementation(() => true);
        const service = spectator.inject(EventFormService);
        (service.available_spaces as any).next(spaces);
        spectator.detectChanges();
        const elements = spectator.queryAll('space-flow-find-item');
        expect(elements).toHaveLength(2);
        spectator.component.handleBookEvent(spaces[0] as any, true);
        expect(spectator.component.book_space[spaces[0].id]).toBeTruthy();
        spectator.component.handleBookEvent(spaces[1] as any, true);
        expect(spectator.component.book_space[spaces[1].id]).toBeTruthy();
    });
});
