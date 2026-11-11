import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockModule } from 'ng-mocks';

import { mockComponent } from '@placeos/common/tests';
import { IconComponent, SafePipe } from '@placeos/components';
import { EmbeddedControlModalComponent } from '../../app/overlays/embedded-control-modal.component';

describe('EmbeddedControlModalComponent', () => {
    let spectator: Spectator<EmbeddedControlModalComponent>;
    const createComponent = createComponentFactory({
        component: EmbeddedControlModalComponent,
        declarations: [SafePipe, mockComponent(IconComponent)],
        imports: [MockModule(MatDialogModule)],
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: { control_url: '' } },
        ],
        mocks: [MatDialogRef],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        spectator = createComponent();
    });

    afterEach(() => vi.useRealTimers());

    it('should count down each second', async () => {
        expect('[countdown]').toHaveText('30');
        await vi.advanceTimersByTimeAsync(2500);
        spectator.detectChanges();
        expect('[countdown]').toHaveText('28');
    });

    it('should restart the countdown on taps inside the embedded page', async () => {
        const page = new EventTarget();
        spectator.component.watchFrame({
            contentWindow: page,
        } as unknown as HTMLIFrameElement);
        await vi.advanceTimersByTimeAsync(10_000);
        page.dispatchEvent(new Event('pointerdown'));
        expect(spectator.component.countdown()).toBe(30);
    });

    it('should close after 30 seconds without interaction', async () => {
        const spy = vi.spyOn(spectator.component, 'close');
        await vi.advanceTimersByTimeAsync(29_000);
        expect(spy).not.toHaveBeenCalled();
        await vi.advanceTimersByTimeAsync(1_000);
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledOnce();
    });
});
