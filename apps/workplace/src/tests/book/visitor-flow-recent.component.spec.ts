import { signal, WritableSignal } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { VisitorFlowRecentComponent } from 'apps/workplace/src/app/book/visitor-flow-new/visitor-flow-recent.component';
import { MockProvider } from 'ng-mocks';

describe('VisitorFlowRecentComponent', () => {
    let spectator: SpectatorRouting<VisitorFlowRecentComponent>;
    let model: WritableSignal<any>;
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
                    model = signal<any>({
                        id: '',
                        asset_id: '',
                        asset_name: '',
                        company: '',
                        phone: '',
                        assets: [],
                    });
                    return {
                        model,
                        options: signal({
                            type: 'visitor',
                            group: false,
                        }),
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
        model.update((m) => ({ ...m, id: 'visitor-booking-1' }));

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

        expect(model().phone).toBe('+61400111222');
    });
});
