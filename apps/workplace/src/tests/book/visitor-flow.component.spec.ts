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
    let save_user_setting: jest.Mock;

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
                        company: new FormControl(''),
                        phone: new FormControl(''),
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
                    saveUserSetting: (...args: any[]) =>
                        save_user_setting(...args),
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
        save_user_setting = jest.fn();
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

    it('should save visitor phone in recent visitors history', () => {
        form.patchValue({
            asset_id: 'visitor.one@example.com',
            asset_name: 'Visitor One',
            company: 'Acme',
            phone: '+61400111222',
        });

        (spectator.component as any)._saveRecentVisitors(false);

        expect(save_user_setting).toHaveBeenCalledWith('visitor-invitees', [
            'visitor.one@example.com|Visitor One|Acme|+61400111222',
        ]);
    });
});
