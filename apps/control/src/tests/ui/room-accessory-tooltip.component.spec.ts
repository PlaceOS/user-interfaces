import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockModule } from 'ng-mocks';

import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomTooltipData, IconComponent } from '@placeos/components';
import {
    startTestPlaceClient,
    type TestPlaceClient,
} from 'libs/components/src/tests/test-place-client';
import { ControlStateService } from '../../app/control-state.service';
import { RoomAccessoryTooltipComponent } from '../../app/ui/room-accessory-tooltip.component';

describe('RoomAccessoryTooltipComponent', () => {
    let place: TestPlaceClient;
    let spectator: Spectator<RoomAccessoryTooltipComponent>;
    const room_accessories = signal<unknown[]>([]);
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
                useValue: { close: vi.fn() },
            },
        ],
    });

    beforeEach(() => {
        place = startTestPlaceClient();
        room_accessories.set([]);
        execute_fn.mockClear();
        place.useExecute(execute_fn);
        spectator = createComponent();
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
        expect(place.modules()).toContain('sys-1|System_1');
        expect(execute_fn).toHaveBeenCalledWith('accessory_exec', [
            'Blinds',
            'Open',
        ]);
    });
});
