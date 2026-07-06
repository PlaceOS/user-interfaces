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

    it('should show an iframe', () => {
        expect(spectator.query('iframe')).toBeTruthy();
    });

    it('should show a countdown', async () => {
        expect('[countdown]').toHaveText('30');
        await vi.advanceTimersByTimeAsync(2500);
        spectator.detectChanges();
        expect('[countdown]').toHaveText('28');
        const spy = vi.spyOn(spectator.component, 'close');
        spectator.component.countdown.set(0);
        await vi.advanceTimersByTimeAsync(1000);
        expect(spy).toHaveBeenCalled();
        spectator.component.reset();
        spectator.detectChanges();
        expect('[countdown]').toHaveText('30');
    });

    it('should show an close button', () => {
        expect('.close').toExist();
    });
});
