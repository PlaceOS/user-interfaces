import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockModule } from 'ng-mocks';

import { EmbeddedControlModalComponent } from './embedded-control-modal.component';

describe('EmbeddedControlModalComponent', () => {
    let spectator: Spectator<EmbeddedControlModalComponent>;
    const createComponent = createComponentFactory({
        component: EmbeddedControlModalComponent,
        imports: [MockModule(MatDialogModule)],
        providers: [{ provide: MAT_DIALOG_DATA, useValue: { control_url: '' } }],
        mocks: [MatDialogRef]
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
        expect(spectator.query('.countdown')).toHaveText('30');
        jest.advanceTimersByTime(2500);
        spectator.detectChanges();
        expect(spectator.query('.countdown')).toHaveText('28');
        const spy = jest.spyOn(spectator.component, 'close');
        spectator.component.countdown = 0;
        jest.advanceTimersByTime(1000);
        expect(spy).toHaveBeenCalled();
        spectator.component.reset();
        spectator.detectChanges();
        expect(spectator.query('.countdown')).toHaveText('30');
    });

    it('should show an close button', () => {
        expect(spectator.query('.close')).toBeTruthy();
    });
});
