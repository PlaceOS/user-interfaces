
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockModule } from 'ng-mocks';

import { PanelCustomActionsComponent } from "./custom-actions.component";
import { setMockBookingStartDatetime } from 'src/app/bookings/booking.utilities';

describe('PanelCustomActionsComponent', () => {
    let spectator: Spectator<PanelCustomActionsComponent>;
    const createComponent = createComponentFactory({
        component: PanelCustomActionsComponent,
        imports: [MockModule(MatDialogModule)]
    });
    let mod: any;

    beforeEach(() => {
        spectator = createComponent();
        mod = {
            execute: jest.fn()
        };
    });

    it('should create the spectator.component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show control button', () => {
        setMockBookingStartDatetime(new Date().valueOf());
        spectator.component.control_url = null;
        spectator.detectChanges();
        expect(spectator.query('.control')).toBeFalsy();
        spectator.component.control_url = 'today';
        spectator.detectChanges();
        expect(spectator.query('.control')).toBeTruthy();
    });

    it('should show catering button', () => {
        setMockBookingStartDatetime(new Date().valueOf());
        spectator.component.catering = false;
        spectator.detectChanges();
        expect(spectator.query('.service')).toBeFalsy();
        spectator.component.catering = true;
        spectator.detectChanges();
        expect(spectator.query('.service')).toBeTruthy();
    });

    it('should open confirm modal on catering button press', () => {
        spectator.component.confirmWaiterCall();
        spectator.component.catering = true;
        spectator.detectChanges();
        const dialog = spectator.inject(MatDialog);
        expect(dialog.open).toHaveBeenCalled();
        const button: HTMLButtonElement = spectator.query('.service');
        button.click();
        expect(dialog.open).toHaveBeenCalledTimes(2);
    });

    it('should open confirm modal on control button press', () => {
        spectator.component.openControl();
        spectator.component.control_url = 'test';
        spectator.detectChanges();
        const dialog = spectator.inject(MatDialog);
        expect(dialog.open).toHaveBeenCalled();
        const button: HTMLButtonElement = spectator.query('.control');
        button.click();
        expect(dialog.open).toHaveBeenCalledTimes(2);
    });

    it('should be able to call waiter', () => {
        mod.execute.mockReturnValue(Promise.resolve());
        spectator.component.callWaiter();
        expect(mod.execute).toHaveBeenCalledWith('waiter_call', [])
    });

});
