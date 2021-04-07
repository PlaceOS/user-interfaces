import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CustomTooltipData } from '@placeos/components';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import { HelpTooltipComponent } from '../../app/ui/help-tooltip.component';

describe('HelpTooltipComponent', () => {
    let spectator: Spectator<HelpTooltipComponent>;
    const createComponent = createComponentFactory({
        component: HelpTooltipComponent,
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    blinds: new BehaviorSubject([]),
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: jest.fn() },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show support contact', () => {
        expect('[contact]').toContainText('your administrator');
        spectator.component.support_contact = 'John Smith';
        spectator.detectChanges();
        expect('[contact]').not.toContainText('your administrator');
        expect('[contact]').toContainText('John Smith');
    });

    it('should show support email', () => {
        expect('[email]').toContainText('support@place.tech');
        expect('[email]').toHaveAttribute('href', 'mailto:support@place.tech');
        spectator.component.support_email = 'john@smith.com';
        spectator.detectChanges();
        expect('[email]').not.toContainText('support@place.tech');
        expect('[email]').toContainText('john@smith.com');
        expect('[email]').toHaveAttribute('href', 'mailto:john@smith.com');
    });

    it('should show support phone', () => {
        expect('[phone]').toContainText('0412345678');
        expect('[phone]').toHaveAttribute('href', 'tel:0412345678');
        spectator.component.support_phone = '555-999-666';
        spectator.detectChanges();
        expect('[phone]').not.toContainText('0412345678');
        expect('[phone]').toContainText('555-999-666');
        expect('[phone]').toHaveAttribute('href', 'tel:555-999-666');
    });
});
