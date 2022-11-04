import { FormsModule } from '@angular/forms';
import { fakeAsync } from '@angular/core/testing';
import { Renderer2 } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    BindingDirective,
    CustomTooltipData,
    IconComponent,
} from '@placeos/components';
import { MockComponent, MockDirective, MockModule } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ControlStateService } from '../../app/control-state.service';

import {
    CameraTooltipComponent,
    ZoomDirection,
} from '../../app/ui/camera-tooltip.component';
import { JoystickComponent } from '../../app/ui/joystick.component';

jest.mock('@placeos/ts-client');

import * as client from '@placeos/ts-client';

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
                    id: 'sys-1',
                    camera_list: new BehaviorSubject([]),
                    selected_camera: new BehaviorSubject(''),
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: jest.fn() },
            }
        ],
        imports: [
            MockModule(MatSelectModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            FormsModule,
            MatMenuModule,
        ],
    });

    beforeEach(() => {
        (client.getModule as any) = jest.fn(() => ({
            execute: async () => null,
        }));
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow for user to select a camera', () => {
        // const cam_list = [{ id: 'cam1', name: 'Camera 1' }] as any;
        // expect('p[empty]').toExist();
        // const service = spectator.inject(ControlStateService);
        // (service as any).camera_list.next(cam_list);
        // spectator.detectChanges();
        // expect('p[empty]').not.toExist();
        // expect('p[no-cam]').not.toExist();
        // spectator.component.selectCamera(cam_list[0]);
        // spectator.detectChanges();
        // expect('p[no-cam]').not.toExist();
    });

    it('should show camera joystick', () => {
        // const service = spectator.inject(ControlStateService);
        // (service as any).camera_list.next([]);
        // spectator.detectChanges();
        // expect('p[empty]').toExist();
        // expect('joystick').not.toExist();
        // (service as any).camera_list.next([{ id: 'cam1', name: 'Camera 1' }]);
        // spectator.detectChanges();
        // expect('joystick').toExist();
    });

    it('should allow user to change zoom of camera', fakeAsync(() => {
        // const spy = jest.spyOn(spectator.fixture.componentRef.injector.get(Renderer2), 'listen');
        // spy.mockImplementation((_, __, fn) => {
        //     setTimeout(() => fn({}), 100);
        //     return () => null;
        // });
        // const cam_list = [{ id: 'cam1', name: 'Camera 1' }] as any;
        // const service = spectator.inject(ControlStateService);
        // (service as any).camera_list.next(cam_list);
        // spectator.component.selectCamera(cam_list[0]);
        // spectator.detectChanges();
        // spectator.dispatchFakeEvent('button[zoom-in]', 'mousedown');
        // expect(spectator.component.zoom).toBe(ZoomDirection.In);
        // spectator.tick(101);
        // expect(spectator.component.zoom).toBe(ZoomDirection.Stop);
        // spectator.dispatchFakeEvent('button[zoom-out]', 'mousedown');
        // expect(spectator.component.zoom).toBe(ZoomDirection.Out);
        // spectator.tick(101);
        // expect(spectator.component.zoom).toBe(ZoomDirection.Stop);
    }));

    it('should allow user to select camera presets', () => {
        // const cam_list = [{ id: 'cam1', name: 'Camera 1' }] as any;
        // const service = spectator.inject(ControlStateService);
        // (service as any).camera_list.next(cam_list);
        // spectator.component.selectCamera(cam_list[0]);
        // spectator.detectChanges();
        // expect('p[preset]').toExist();
        // spectator.component.presets = ['One', 'Two', 'Three'];
        // spectator.detectChanges();
        // expect('p').not.toExist();
        // expect('button[preset].inverse').not.toExist();
        // expect('button[preset]').toHaveLength(3);
        // spectator.click('button[preset]');
        // expect('button[preset].inverse').toExist();
        // expect('button[preset].inverse').toContainText('One');
    });
});
