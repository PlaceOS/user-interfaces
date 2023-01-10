import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BindingDirective, IconComponent } from '@placeos/components';
import {
    MockComponent,
    MockDirective,
    MockModule,
    MockPipe,
    MockProvider,
} from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../app/control-state.service';

import { ControlStatusBarComponent } from '../app/status-bar.component';
import { DurationPipe } from '../app/ui/duration.pipe';

describe('ControlStatusBarComponent', () => {
    let spectator: Spectator<ControlStatusBarComponent>;
    const createComponent = createComponentFactory({
        component: ControlStatusBarComponent,
        declarations: [
            MockComponent(IconComponent),
            MockDirective(BindingDirective),
            MockPipe(DurationPipe),
        ],
        providers: [
            MockProvider(ControlStateService, {
                volume: new BehaviorSubject(0),
                system: new BehaviorSubject({}),
                capture_list: new BehaviorSubject([]),
                setVolume: jest.fn(),
            }),
        ],
        imports: [MockModule(MatSliderModule), MockModule(FormsModule)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show recording details', async () => {
        expect('[recording]').not.toExist();
        const service = spectator.inject(ControlStateService);
        (service as any).capture_list.next([{ mod: 'Capture' }]);
        spectator.detectChanges();
        expect('[recording]').toExist();
    });

    it('should allow pausing and resuming recordings', async () => {
        const service = spectator.inject(ControlStateService);
        (service as any).capture_list.next([{ mod: 'Capture' }]);
        spectator.detectChanges();
        expect('[place-action="start"]').toExist();
        expect('[place-action="pause"]').not.toExist();
        spectator.component.rec_status = 'playing';
        spectator.detectChanges();
        expect('[place-action="start"]').not.toExist();
        expect('[place-action="pause"]').toExist();
    });

    it('should show global volume controls', () => {
        expect('mat-slider').toExist();
        expect('button[mute]').toExist();
    });

    it('should allow toggling the mute state', () => {
        // TODO: Hookup mute button
    });
});
