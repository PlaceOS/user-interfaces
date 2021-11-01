import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { BehaviorSubject } from "rxjs";
import { ScheduleFilterCardComponent } from "../../app/new-schedule/schedule-filter-card.component";
import { ScheduleStateService } from "../../app/new-schedule/schedule-state.service";

describe('ScheduleFilterCardComponent', () => {
    let spectator: Spectator<ScheduleFilterCardComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleFilterCardComponent,
        providers: [
            {
                provide: ScheduleStateService,
                useValue: {
                    filters: new BehaviorSubject({}),
                    toggleType: jest.fn(),
                    setDate: jest.fn(),
                },
            },
            { provide: MatBottomSheetRef, useValue: { dismiss: jest.fn() } }
        ],
        imports: [MatCheckboxModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});