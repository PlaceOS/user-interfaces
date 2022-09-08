import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { BookingFormService } from "@placeos/bookings";
import { IconComponent, InteractiveMapComponent } from "@placeos/components";
import { Desk } from "@placeos/organisation";
import { MockComponent, MockModule } from "ng-mocks";
import { BehaviorSubject } from "rxjs";
import { take } from "rxjs/operators";
import { DeskMapComponent } from "../../lib/desk-select-modal/desk-map.component";


describe('DeskMapComponent', () => {
    let spectator: Spectator<DeskMapComponent>;
    const createComponent = createComponentFactory({
        component: DeskMapComponent,
        providers: [
            {
                provide: BookingFormService,
                useValue: {
                    available_assets: new BehaviorSubject([])
                }
            }
        ],
        declarations: [
            MockComponent(InteractiveMapComponent),
            MockComponent(IconComponent)
        ],
        imports: [
            MockModule(FormsModule),
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule)
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show a map', () => expect('i-map').toExist());

    it('should show a zoom controls', () => expect('[zoom]').toExist());

    it('should show a level select', () => expect('[levels]').toExist());

    it('should allow changing the zoom level', () => {
        expect(spectator.component.zoom).toBe(1);
        spectator.click('[zoom-in]');
        expect(spectator.component.zoom).toBe(1.1);
        spectator.click('[zoom-out]');
        expect(spectator.component.zoom).toBe(1);
    });

    it('should allow selecting desk', (done) => {
        const test_space = new Desk({ id: '1' });
        spectator.component.onSelect.subscribe((space) => {
            expect(space).toBe(test_space);
            done();
        });
        (spectator.inject(BookingFormService).available_assets as any).next([
            test_space,
        ]);
        spectator.component.actions.pipe(take(1)).subscribe((actions) => {
            expect(actions).toHaveLength(1);
            actions[0].callback();
        });
    });
})