import { FormGroup } from "@angular/forms";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { BookingFormService } from "@placeos/bookings";
import { IconComponent } from "@placeos/components";
import { MockComponent } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { DeskFiltersDisplayComponent } from "../../lib/desk-select-modal/desk-filters-display.component";


describe('DeskFiltersDisplayComponent', () => {
    let spectator: Spectator<DeskFiltersDisplayComponent>;
    const createComponent = createComponentFactory({
        component: DeskFiltersDisplayComponent,
        providers: [
            {
                provide: MatBottomSheet,
                useValue: {
                    open: jest.fn()
                }
            },
            {
                provide: BookingFormService,
                useValue: {
                    form: new FormGroup({}),
                    options: new BehaviorSubject({ features: ['standing']}),
                    setOptions: jest.fn(),
                    setFeature: jest.fn(),
                }
            }
        ],
        declarations: [MockComponent(IconComponent)]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow user to open edit filters', () => {
        expect(spectator.inject(MatBottomSheet).open).not.toBeCalled();
        expect('button[filters]').toExist();
        spectator.click('button[filters]');
        expect(spectator.inject(MatBottomSheet).open).toBeCalled();
    });

    it('should allow changing to map', () => {
        spectator.component.viewChange.emit = jest.fn();
        expect('button[map]').toExist();
        spectator.click('button[map]');
        expect(spectator.component.viewChange.emit).toBeCalledWith('map');
    });

    it('should allow changing to list', () => {
        spectator.component.viewChange.emit = jest.fn();
        expect('button[list]').toExist();
        spectator.click('button[list]');
        expect(spectator.component.viewChange.emit).toBeCalledWith('list');
    });

    it('should show selected filters', () => {
        expect('[filter-item][date]').toExist();
        expect('[filter-item][time]').toExist();
        expect('[filter-item][features]').toExist();
    });

    it('should allow removing filters', () => {
        expect('[filter-item] button').toExist();
        spectator.click('[filter-item] button');
        spectator.detectChanges();
        expect(spectator.inject(BookingFormService).setFeature).toBeCalledWith('standing',false);
    });
})