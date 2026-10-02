import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { TranslatePipe } from '@placeos/components';
import { MockPipe, MockProvider } from 'ng-mocks';
import { ControlStateService } from '../../app/control-state.service';
import { ControlConnectingComponent } from '../../app/ui/connecting.component';

describe('ControlConnectingComponent', () => {
    let spectator: Spectator<ControlConnectingComponent>;
    let can_change_room = true;
    const createComponent = createComponentFactory({
        component: ControlConnectingComponent,
        declarations: [MockPipe(TranslatePipe, (v) => v)],
        providers: [
            MockProvider(ControlStateService, {
                system_id: signal('sys-1'),
                changeRoom: vi.fn(),
                canChangeRoom: vi.fn(() => can_change_room),
            } as any),
        ],
    });

    beforeEach(() => vi.useFakeTimers());
    afterEach(() => vi.useRealTimers());

    const waitForSlow = () => {
        vi.advanceTimersByTime(30 * 1000);
        spectator.detectChanges();
    };

    it('should offer recovery actions after 30 seconds', () => {
        can_change_room = true;
        spectator = createComponent();
        expect('button').not.toExist();
        waitForSlow();
        expect('button').toExist();
        spectator.click('button[change-room]');
        expect(
            spectator.inject(ControlStateService).changeRoom,
        ).toHaveBeenCalled();
    });

    it('should only offer retry on a fixed device', () => {
        can_change_room = false;
        spectator = createComponent();
        waitForSlow();
        expect('button').toExist();
        expect('button[change-room]').not.toExist();
    });
});
