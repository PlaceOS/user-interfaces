import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { ChangelogService, TranslatePipe } from '@placeos/components';
import { MockPipe } from 'ng-mocks';

import { ControlStateService } from '../../app/control-state.service';
import { SplashComponent } from '../../app/ui/splash.component';

describe('SplashComponent', () => {
    let spectator: Spectator<SplashComponent>;
    const available = signal(false);
    const view = vi.fn();
    const powerOn = vi.fn();
    const createComponent = createComponentFactory({
        component: SplashComponent,
        declarations: [MockPipe(TranslatePipe, (v) => v)],
        providers: [
            {
                provide: ControlStateService,
                useValue: { system: signal({ name: 'Room A' }), powerOn },
            },
            {
                provide: ChangelogService,
                useValue: { available: available.asReadonly(), view },
            },
        ],
    });

    beforeEach(() => {
        available.set(false);
        view.mockReset();
        powerOn.mockReset();
        spectator = createComponent();
    });

    it('should power on the room when touched', () => {
        expect(spectator.element).toContainText('Room A');
        spectator.click(spectator.element);
        expect(powerOn).toHaveBeenCalled();
    });

    it('should disable the version button when no changelog is deployed', () => {
        expect('button').toBeDisabled();
        available.set(true);
        spectator.detectChanges();
        expect('button').not.toBeDisabled();
    });

    it('should open the changelog without powering on the room', () => {
        available.set(true);
        spectator.detectChanges();
        spectator.click('button');
        expect(view).toHaveBeenCalled();
        expect(powerOn).not.toHaveBeenCalled();
    });
});
