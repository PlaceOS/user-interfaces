import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { EventFormService } from '@placeos/events';
import { OrganisationService } from '@placeos/organisation';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { SpaceListComponent } from '../../lib/space-select-modal/space-list.component';
import { Space } from '../../lib/spaces';

describe('SpaceListComponent', () => {
    let spectator: Spectator<SpaceListComponent>;
    const createComponent = createComponentFactory({
        component: SpaceListComponent,
        providers: [
            MockProvider(EventFormService, {
                available_spaces: new BehaviorSubject([]),
                loading: new BehaviorSubject(''),
                setView: jest.fn(),
            }),
            MockProvider(SettingsService, {
                get: jest.fn(),
                saveUserSetting: jest.fn(),
            }),
            MockProvider(OrganisationService, { levelWithID: jest.fn() }),
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [MockModule(MatProgressSpinnerModule)],
    });

    beforeEach(() => {
        spectator = createComponent();
        (spectator.inject(EventFormService).loading as any).next('');
        (spectator.inject(EventFormService).available_spaces as any).next([]);
        spectator.detectChanges();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should list available spaces', () => {
        expect('[space]').not.toExist();
        (spectator.inject(EventFormService).available_spaces as any).next([
            new Space(),
        ]);
        spectator.detectChanges();
        expect('[space]').toExist();
    });

    it('should show loading list state', () => {
        expect('[loading]').not.toExist();
        (spectator.inject(EventFormService).loading as any).next(
            'Loading available spaces...'
        );
        spectator.detectChanges();
        expect('[loading]').toExist();
    });

    it('should show empty list state', () => {
        expect('[empty]').toExist();
        (spectator.inject(EventFormService).available_spaces as any).next([
            new Space(),
        ]);
        spectator.detectChanges();
        expect('[empty]').not.toExist();
    });

    it('should allow selecting a space', (done) => {
        (spectator.inject(EventFormService).available_spaces as any).next([
            new Space(),
        ]);
        spectator.detectChanges();
        spectator.component.onSelect.subscribe(() => done());
        spectator.click('[space] button[name="select-space"]');
    });

    it('should allow favouriting a space', (done) => {
        (spectator.inject(EventFormService).available_spaces as any).next([
            new Space({ id: '1' }),
        ]);
        spectator.detectChanges();
        spectator.component.toggleFav.subscribe(() => done());
        spectator.click('[space] button[name="toggle-space-favourite"]');
    });
});
