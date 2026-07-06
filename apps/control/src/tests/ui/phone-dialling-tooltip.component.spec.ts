import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockModule } from 'ng-mocks';

jest.mock('@placeos/ts-client', () => ({ getModule: jest.fn() }));

import { IconComponent } from '@placeos/components';
import * as client from '@placeos/ts-client';
import { ControlStateService } from '../../app/control-state.service';
import { DialpadComponent } from '../../app/ui/dialpad.component';
import { PhoneDiallingTooltipComponent } from '../../app/ui/phone-dialling-tooltip.component';

describe('PhoneDiallingTooltipComponent', () => {
    let spectator: Spectator<PhoneDiallingTooltipComponent>;
    let execute: jest.Mock;
    const createComponent = createComponentFactory({
        component: PhoneDiallingTooltipComponent,
        declarations: [
            MockComponent(DialpadComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    id: 'sys-1',
                    system: signal<any>({}),
                },
            },
        ],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            FormsModule,
        ],
    });

    beforeEach(() => {
        execute = jest.fn().mockResolvedValue(null);
        (client.getModule as any).mockImplementation(() => ({ execute }));
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should expose the system id', () => {
        expect(spectator.component.sys_id).toBe('sys-1');
    });

    it('should send the dialpad character to the System module on input', async () => {
        await spectator.component.handleInput('5');
        expect(client.getModule).toHaveBeenCalledWith('sys-1', 'System');
        expect(execute).toHaveBeenCalledWith('qsc_dial_pad', ['5']);
    });

    it('should dial, hangup and clear via the System module', async () => {
        await spectator.component.dialPhone();
        expect(execute).toHaveBeenCalledWith('qsc_dial_makecall');
        await spectator.component.hangup();
        expect(execute).toHaveBeenCalledWith('qsc_dial_hangup');
        await spectator.component.clear();
        expect(execute).toHaveBeenCalledWith('qsc_dial_pad_clear');
    });

    it('should show the dial button when the phone is idle', () => {
        const service = spectator.inject(ControlStateService);
        (service.system as any).set({});
        spectator.detectChanges();
        expect('button[btn]:not(.inverse)').toExist();
        expect('button[btn].inverse').not.toExist();
    });

    it('should show the hangup button when off-hook or ringing', () => {
        const service = spectator.inject(ControlStateService);
        (service.system as any).set({ offhook: true });
        spectator.detectChanges();
        expect('button[btn].inverse').toExist();
        spectator.click('button[btn].inverse');
        expect(execute).toHaveBeenCalledWith('qsc_dial_hangup');
    });

    it('should show a clear button only when a phone number is present', () => {
        const service = spectator.inject(ControlStateService);
        (service.system as any).set({});
        spectator.detectChanges();
        expect('button[icon]').not.toExist();
        (service.system as any).set({ phone: '12345' });
        spectator.detectChanges();
        expect('button[icon]').toExist();
        spectator.click('button[icon]');
        expect(execute).toHaveBeenCalledWith('qsc_dial_pad_clear');
    });
});
