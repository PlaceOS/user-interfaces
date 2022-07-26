import {
    MatProgressSpinnerModule
} from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { IconComponent } from '@placeos/components';
import { Desk } from '@placeos/organisation';
import { DeskListComponent } from 'apps/workplace/src/app/book/new-desk-flow/views/desk-list.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

describe('DeskListComponent', () => {
    let spectator: Spectator<DeskListComponent>;
    const createComponent = createComponentFactory({
        component: DeskListComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    available_assets: new BehaviorSubject([]),
                    loading: new BehaviorSubject(''),
                    setView: jest.fn(),
                },
            },
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [MockModule(MatProgressSpinnerModule)],
    });

    beforeEach(() => {
        spectator = createComponent();
        (spectator.inject(BookingFormService).loading as any).next('');
        (spectator.inject(BookingFormService).available_assets as any).next([
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
        (spectator.inject(BookingFormService).available_assets as any).next([]);
        spectator.detectChanges();
        expect('[empty]').toExist();
    });

    it('should list available desks', () => expect('[desk]').toExist());

    it('should allow selecting a desk', (done) => {
        spectator.component.onSelect.subscribe(() => done());
        spectator.click('[desk] button[select]');
    });

    it('should allow favoriting a desk', (done) => {
        spectator.component.toggleFav.subscribe(() => done());
        spectator.click('[desk] button[fav]');
    });
});
