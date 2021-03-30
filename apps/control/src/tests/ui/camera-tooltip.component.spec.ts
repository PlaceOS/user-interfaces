
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    BindingDirective,
    CustomTooltipData,
    IconComponent,
} from '@user-interfaces/components';
import { MockComponent, MockDirective } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import { CameraTooltipComponent, ZoomDirection } from '../../app/ui/camera-tooltip.component';
import { JoystickComponent } from '../../app/ui/joystick.component';

describe('CameraTooltipComponent', () => {
    let spectator: Spectator<CameraTooltipComponent>;
    const createComponent = createComponentFactory({
        component: CameraTooltipComponent,
        declarations: [
            MockDirective(BindingDirective),
            MockComponent(JoystickComponent),
            MockComponent(IconComponent),
        ],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    camera_list: new BehaviorSubject([]),
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: jest.fn() },
            },
        ],
        imports: [MatSelectModule, MatFormFieldModule, FormsModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow for user to select a camera', async () => {
        expect('p').toContainText('No cameras available');
        const service = spectator.inject(ControlStateService);
        (service as any).camera_list.next([{ id: 'cam1', name: 'Camera 1' }]);
        spectator.detectChanges();
        expect('p').not.toContainText('No cameras available');
        expect('p').toContainText('Select a camera');
        spectator.click('mat-select');
        spectator.detectChanges();
        expect('mat-option').toExist();
        spectator.click('mat-option');
        expect('p').not.toContainText('Select a camera');
    });

    it('should show camera joystick', () => {
        const service = spectator.inject(ControlStateService);
        (service as any).camera_list.next([]);
        spectator.detectChanges();
        expect('p').toContainText('No cameras available');
        expect('joystick').not.toExist();
        (service as any).camera_list.next([{ id: 'cam1', name: 'Camera 1' }]);
        spectator.detectChanges();
        expect('joystick').toExist();
    });

    it('should allow user to change zoom of camera', () => {
        const service = spectator.inject(ControlStateService);
        (service as any).camera_list.next([{ id: 'cam1', name: 'Camera 1' }]);
        spectator.detectChanges();
        spectator.click('mat-select');
        spectator.detectChanges();
        spectator.click('mat-option');
        spectator.dispatchMouseEvent('button[zoom-in]', 'mousedown');
        expect(spectator.component.zoom).toBe(ZoomDirection.In);
        spectator.dispatchMouseEvent(document, 'mouseup');
        expect(spectator.component.zoom).toBe(ZoomDirection.Stop);
        spectator.dispatchMouseEvent('button[zoom-out]', 'mousedown');
        expect(spectator.component.zoom).toBe(ZoomDirection.Out);
        spectator.dispatchMouseEvent(document, 'mouseup');
        expect(spectator.component.zoom).toBe(ZoomDirection.Stop);
    });

    it('should allow user to select camera presets', () => {
        const service = spectator.inject(ControlStateService);
        (service as any).camera_list.next([{ id: 'cam1', name: 'Camera 1' }]);
        spectator.detectChanges();
        spectator.click('mat-select');
        spectator.detectChanges();
        spectator.click('mat-option');
        expect('p').toContainText('No presets for this camera');
        spectator.component.presets = ['One', 'Two', 'Three'];
        spectator.detectChanges();
        expect('p').not.toExist();
        expect('button[preset].inverse').not.toExist();
        expect('button[preset]').toHaveLength(3);
        spectator.click('button[preset]');
        expect('button[preset].inverse').toExist();
        expect('button[preset].inverse').toContainText('One');
    });
});
