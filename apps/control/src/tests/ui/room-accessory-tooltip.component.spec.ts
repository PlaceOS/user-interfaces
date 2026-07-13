import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockModule } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });

import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomTooltipData, IconComponent } from '@placeos/components';
import * as client from '@placeos/ts-client';
import { ControlStateService } from '../../app/control-state.service';
import { RoomAccessoryTooltipComponent } from '../../app/ui/room-accessory-tooltip.component';

describe('RoomAccessoryTooltipComponent', () => {
    let spectator: Spectator<RoomAccessoryTooltipComponent>;
    const room_accessories = signal<any[]>([]);
    const close_fn = vi.fn();
    const execute_fn = vi.fn(async () => null);
    const createComponent = createComponentFactory({
        component: RoomAccessoryTooltipComponent,
        declarations: [MockComponent(IconComponent)],
        imports: [MockModule(MatTooltipModule)],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    id: 'sys-1',
                    room_accessories,
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: close_fn },
            },
        ],
    });

    beforeEach(() => {
        room_accessories.set([]);
        close_fn.mockClear();
        execute_fn.mockClear();
        (client.getModule as any).mockReturnValue({ execute: execute_fn });
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show empty state when no accessories', () => {
        spectator.detectChanges();
        expect('p').toExist();
        expect('button[state]').not.toExist();
    });

    it('should render accessories and their controls', () => {
        room_accessories.set([
            {
                name: 'Blinds',
                controls: [
                    { name: 'Open', icon: 'up' },
                    { name: 'Close', icon: 'down' },
                ],
            },
            { name: 'Screen', controls: [{ name: 'Lower', icon: 'down' }] },
        ]);
        spectator.detectChanges();
        expect('p').not.toExist();
        expect(spectator.element).toContainText('Blinds');
        expect(spectator.element).toContainText('Screen');
        expect(spectator.queryAll('button[state]')).toHaveLength(3);
    });

    it('should execute accessory_exec with accessory and control name on click', () => {
        room_accessories.set([
            { name: 'Blinds', controls: [{ name: 'Open', icon: 'up' }] },
        ]);
        spectator.detectChanges();
        spectator.click('button[state]');
        expect(client.getModule).toHaveBeenCalledWith('sys-1', 'System');
        expect(execute_fn).toHaveBeenCalledWith('accessory_exec', [
            'Blinds',
            'Open',
        ]);
    });

    it('should not execute when module is missing', () => {
        (client.getModule as any).mockReturnValue(null);
        spectator.component.performAction('Blinds', 'Open');
        expect(execute_fn).not.toHaveBeenCalled();
    });

    it('should close via the tooltip data', () => {
        spectator.component.close();
        expect(close_fn).toHaveBeenCalled();
    });
});
