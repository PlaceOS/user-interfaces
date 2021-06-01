import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    MatDialogModule,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MockComponent, MockModule } from 'ng-mocks';

import { EmbeddedControlModalComponent } from '../../app/overlays/embedded-control-modal.component';
import { IconComponent, SafePipe } from '@placeos/components';

describe('EmbeddedControlModalComponent', () => {
    let spectator: Spectator<EmbeddedControlModalComponent>;
    const createComponent = createComponentFactory({
        component: EmbeddedControlModalComponent,
        declarations: [SafePipe, MockComponent(IconComponent)],
        imports: [MockModule(MatDialogModule)],
        providers: [
            { provide: MAT_DIALOG_DATA, useValue: { control_url: '' } },
        ],
        mocks: [MatDialogRef],
    });

    beforeEach(() => {
        jest.useFakeTimers();
        spectator = createComponent();
    });

    afterEach(() => jest.useRealTimers());

    it('should show an iframe', () => {
        expect(spectator.query('iframe')).toBeTruthy();
    });

    it('should show a countdown', () => {
        expect('[countdown]').toHaveText('30');
        jest.advanceTimersByTime(2500);
        spectator.detectChanges();
        expect('[countdown]').toHaveText('28');
        const spy = jest.spyOn(spectator.component, 'close');
        spectator.component.countdown = 0;
        jest.advanceTimersByTime(1000);
        expect(spy).toHaveBeenCalled();
        spectator.component.reset();
        spectator.detectChanges();
        expect('[countdown]').toHaveText('30');
    });

    it('should show an close button', () => {
        expect('.close').toExist();
    });
});
