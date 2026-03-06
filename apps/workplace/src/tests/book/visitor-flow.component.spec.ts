import { FormControl, FormGroup } from '@angular/forms';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { VisitorFlowNewComponent } from 'apps/workplace/src/app/book/visitor-flow-new/visitor-flow.component';

describe('VisitorFlowNewComponent', () => {
    let spectator: SpectatorRouting<VisitorFlowNewComponent>;
    let form: FormGroup;

    const createComponent = createRoutingFactory({
        component: VisitorFlowNewComponent,
        shallow: true,
        providers: [
            {
                provide: BookingFormService,
                useFactory: () => {
                    form = new FormGroup({
                        id: new FormControl(''),
                        title: new FormControl('Visit'),
                        description: new FormControl(''),
                        asset_name: new FormControl(''),
                        asset_id: new FormControl(''),
                        assets: new FormControl([]),
                    });
                    return {
                        form,
                        view: () => 'details',
                        booking: null,
                        last_count: 0,
                        setOptions: jest.fn(),
                        setView: jest.fn(),
                        loadGroupSiblings: jest.fn(async () => []),
                    };
                },
            },
            {
                provide: SettingsService,
                useValue: {
                    get: jest.fn(() => []),
                    saveUserSetting: jest.fn(),
                },
            },
            {
                provide: ActivatedRoute,
                useValue: {
                    paramMap: of({
                        has: () => false,
                        get: () => null,
                    }),
                },
            } as any,
        ],
        mocks: [],
    });

    beforeEach(() => {
        spectator = createComponent({ detectChanges: false });
    });

    it('should show visit details heading when creating a booking', () => {
        expect(spectator.component.visit_heading()).toBe(
            'BOOKINGS.VISITOR_TIME_HEADER',
        );
    });

    it('should show edit visitor details heading in the visit details section when editing a booking', () => {
        form.patchValue({ id: 'visitor-booking-3' });

        expect(spectator.component.visit_heading()).toBe(
            'BOOKINGS.EDIT_VISITOR_DETAILS',
        );
    });
});
