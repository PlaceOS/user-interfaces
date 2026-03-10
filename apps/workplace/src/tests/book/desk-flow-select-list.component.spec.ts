import { FormControl, FormGroup } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { DeskFlowSelectListComponent } from '../../app/book/desk-flow-new/desk-flow-select-list.component';

describe('DeskFlowSelectListComponent', () => {
    let spectator: Spectator<DeskFlowSelectListComponent>;
    let form: FormGroup;
    let available_resources: BehaviorSubject<any[]>;

    const createComponent = createComponentFactory({
        component: DeskFlowSelectListComponent,
        detectChanges: false,
        shallow: true,
        providers: [
            MockProvider(BookingFormService, {
                loading: new BehaviorSubject(''),
                available_resources: (() => {
                    available_resources = new BehaviorSubject<any[]>([]);
                    return available_resources.asObservable();
                })(),
                form: (() => {
                    form = new FormGroup({
                        resources: new FormControl([]),
                    });
                    return form;
                })(),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn(),
                saveUserSetting: jest.fn(),
            }),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should keep the selected desk in the rendered list for new bookings', () => {
        form.patchValue({
            resources: [{ id: 'desk-123', name: 'Desk 123' }],
        });

        expect(spectator.component.available_items()).toEqual([
            { id: 'desk-123', name: 'Desk 123' },
        ]);
    });
});
