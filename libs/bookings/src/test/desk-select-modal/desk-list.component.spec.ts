import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { IconComponent } from '@placeos/components';
import { Desk } from '@placeos/organisation';
import { MockComponent, MockModule, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { DeskListComponent } from '../../lib/desk-select-modal/desk-list.component';

describe('DeskListComponent', () => {
    let spectator: Spectator<DeskListComponent>;
    const createComponent = createComponentFactory({
        component: DeskListComponent,
        providers: [
            MockProvider(BookingFormService, {
                options: new BehaviorSubject([{}]) as any,
                available_resources: new BehaviorSubject([{}]) as any,
                loading: new BehaviorSubject('') as any,
                setView: jest.fn(),
            }),
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [MockModule(MatProgressSpinnerModule)],
    });

    beforeEach(() => {
        spectator = createComponent();
        (spectator.inject(BookingFormService).loading as any).next('');
        (spectator.inject(BookingFormService).available_resources as any).next([
            new Desk({ id: '1' }),
        ]);
        spectator.detectChanges();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show loading list state', () => {
        expect('[loading]').not.toExist();
        (spectator.inject(BookingFormService).loading as any).next(
            'Loading available spaces...'
        );
        spectator.detectChanges();
        expect('[loading]').toExist();
    });

    it('should show empty list state', () => {
        expect('[empty]').not.toExist();
        (spectator.inject(BookingFormService).available_resources as any).next(
            []
        );
        spectator.detectChanges();
        expect('[empty]').toExist();
    });

    it('should list available desks', () => expect('[desk]').toExist());

    it('should allow selecting a desk', (done) => {
        spectator.component.onSelect.subscribe(() => done());
        spectator.click('[desk] button[name="select-desk"]');
    });

    it('should allow favoriting a desk', (done) => {
        spectator.component.toggleFav.subscribe(() => done());
        spectator.click('[desk] button[name="toggle-desk-favourite"]');
    });
});
