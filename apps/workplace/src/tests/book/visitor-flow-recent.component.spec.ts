import { FormControl, FormGroup } from '@angular/forms';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { VisitorFlowRecentComponent } from 'apps/workplace/src/app/book/visitor-flow-new/visitor-flow-recent.component';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

describe('VisitorFlowRecentComponent', () => {
    let spectator: SpectatorRouting<VisitorFlowRecentComponent>;
    let form: FormGroup;
    let get_setting: jest.Mock;

    const createComponent = createRoutingFactory({
        component: VisitorFlowRecentComponent,
        shallow: true,
        providers: [
            MockProvider(
                SettingsService,
                {
                    get: (...args: any[]) => get_setting(...args),
                } as any,
            ),
            {
                provide: BookingFormService,
                useFactory: () => {
                    form = new FormGroup({
                        id: new FormControl(''),
                        asset_id: new FormControl(''),
                        asset_name: new FormControl(''),
                        company: new FormControl(''),
                        phone: new FormControl(''),
                        assets: new FormControl([]),
                    });
                    return {
                        form,
                        options: new BehaviorSubject({
                            type: 'visitor',
                            group: false,
                        }).asObservable(),
                    };
                },
            },
        ],
    });

    beforeEach(() => {
        get_setting = jest.fn(() => []);
        spectator = createComponent();
    });

    it('should hide quick actions when editing an existing booking', () => {
        form.patchValue({ id: 'visitor-booking-1' });

        spectator.component.ngOnInit();
        spectator.detectChanges();

        expect(spectator.component.is_edit()).toBe(true);
        expect(spectator.element).not.toHaveText('Quick Action');
        expect(spectator.element).not.toHaveText('Recent Visitors');
    });

    it('should restore visitor phone from saved recent visitors', () => {
        get_setting.mockReturnValue([
            'visitor.one@example.com|Visitor One|Acme|+61400111222',
        ]);

        spectator.component.ngOnInit();
        spectator.component.selectVisitor({
            email: 'visitor.one@example.com',
            name: 'Visitor One',
            company: 'Acme',
            phone: '+61400111222',
        });

        expect(form.value.phone).toBe('+61400111222');
    });
});
