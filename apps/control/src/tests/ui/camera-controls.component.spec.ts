import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockModule } from 'ng-mocks';

vi.mock('@placeos/ts-client', { spy: true });

import { IconComponent } from '@placeos/components';
import * as client from '@placeos/ts-client';
import { ControlStateService } from '../../app/control-state.service';
import {
    CameraControlsComponent,
    ZoomDirection,
} from '../../app/ui/camera-controls.component';
import {
    JoystickComponent,
    JoystickPan,
    JoystickTilt,
} from '../../app/ui/joystick.component';

describe('CameraControlsComponent', () => {
    let spectator: Spectator<CameraControlsComponent>;
    const camera_list = signal<any[]>([]);
    const selected_camera = signal<string | null>(null);
    const execute_fn = vi.fn(async () => null);
    const createComponent = createComponentFactory({
        component: CameraControlsComponent,
        declarations: [
            MockComponent(IconComponent),
            MockComponent(JoystickComponent),
        ],
        imports: [
            MockModule(MatSelectModule),
            MockModule(MatFormFieldModule),
            FormsModule,
        ],
        providers: [
            {
                provide: ControlStateService,
                useValue: {
                    id: 'sys-1',
                    camera_list,
                    selected_camera,
                },
            },
        ],
    });

    beforeEach(() => {
        camera_list.set([]);
        selected_camera.set(null);
        execute_fn.mockClear();
        (client.getModule as any).mockReturnValue({ execute: execute_fn });
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should require a camera selection when selected_camera is null', () => {
        const list = [
            { id: 'cam1', name: 'Camera 1', mod: 'Camera_1' },
            { id: 'cam2', name: 'Camera 2', mod: 'Camera_2' },
        ];
        camera_list.set(list);
        spectator.detectChanges();
        expect(spectator.component.active_camera()).toBeUndefined();
    });

    it('should select the camera matching selected_camera state', () => {
        const list = [
            { id: 'cam1', name: 'Camera 1', mod: 'Camera_1' },
            { id: 'cam2', name: 'Camera 2', mod: 'Camera_2' },
        ];
        selected_camera.set('cam2');
        camera_list.set(list);
        spectator.detectChanges();
        expect(spectator.component.active_camera()).toEqual(list[1]);
    });

    it('should execute selected_camera on the System module when selecting', () => {
        spectator.component.selectCamera({ id: 'cam3', name: 'Cam 3' } as any);
        expect(spectator.component.active_camera()).toEqual({
            id: 'cam3',
            name: 'Cam 3',
        });
        expect(client.getModule).toHaveBeenCalledWith('sys-1', 'System');
        expect(execute_fn).toHaveBeenCalledWith('selected_camera', ['cam3']);
    });

    it('should recall a preset on the active camera module', () => {
        spectator.component.active_camera.set({
            id: 'cam1',
            name: 'Camera 1',
            mod: 'Camera_1',
        } as any);
        spectator.component.recallPreset('preset-1');
        expect(client.getModule).toHaveBeenCalledWith('sys-1', 'Camera_1');
        expect(execute_fn).toHaveBeenCalledWith('recall', ['preset-1']);
    });

    it('should not recall a preset when no active camera', () => {
        spectator.component.active_camera.set(undefined);
        spectator.component.recallPreset('preset-1');
        expect(execute_fn).not.toHaveBeenCalled();
    });

    it('should stop then pan/tilt when moving the camera', async () => {
        spectator.component.active_camera.set({
            id: 'cam1',
            name: 'Camera 1',
            mod: 'Camera_1',
        } as any);
        spectator.component.tilt.set(JoystickTilt.Up);
        spectator.component.pan.set(JoystickPan.Left);
        spectator.component.moveCamera();
        expect(execute_fn).not.toHaveBeenCalled();
        await new Promise((r) => setTimeout(r, 70));
        expect(client.getModule).toHaveBeenCalledWith('sys-1', 'Camera_1');
        expect(execute_fn).toHaveBeenCalledWith('stop', []);
        expect(execute_fn).toHaveBeenCalledWith('tilt', [JoystickTilt.Up]);
        expect(execute_fn).toHaveBeenCalledWith('pan', [JoystickPan.Left]);
    });

    it('should include the camera index in move commands when present', async () => {
        spectator.component.active_camera.set({
            id: 'cam1',
            name: 'Camera 1',
            mod: 'Camera_1',
            index: 2,
        } as any);
        spectator.component.tilt.set(JoystickTilt.Down);
        spectator.component.pan.set(JoystickPan.Stop);
        spectator.component.moveCamera();
        await new Promise((r) => setTimeout(r, 70));
        expect(execute_fn).toHaveBeenCalledWith('stop', [2]);
        expect(execute_fn).toHaveBeenCalledWith('tilt', [JoystickTilt.Down, 2]);
        expect(execute_fn).not.toHaveBeenCalledWith('pan', expect.anything());
    });

    it('should not move when no active camera', async () => {
        spectator.component.active_camera.set(undefined);
        spectator.component.moveCamera();
        await new Promise((r) => setTimeout(r, 70));
        expect(execute_fn).not.toHaveBeenCalled();
    });

    it('should set zoom direction and execute zoom on start', async () => {
        spectator.component.active_camera.set({
            id: 'cam1',
            name: 'Camera 1',
            mod: 'Camera_1',
        } as any);
        await spectator.component.startZoom('in', {
            preventDefault: () => null,
        } as any);
        expect(spectator.component.zoom()).toBe(ZoomDirection.In);
        expect(execute_fn).toHaveBeenCalledWith('zoom', [ZoomDirection.In]);
    });

    it('should reset zoom to stop and execute on stopZoom', async () => {
        spectator.component.active_camera.set({
            id: 'cam1',
            name: 'Camera 1',
            mod: 'Camera_1',
        } as any);
        spectator.component.zoom.set(ZoomDirection.In);
        spectator.component.stopZoom();
        await new Promise((r) => setTimeout(r, 70));
        expect(spectator.component.zoom()).toBe(ZoomDirection.Stop);
        expect(execute_fn).toHaveBeenCalledWith('zoom', [ZoomDirection.Stop]);
    });

    it('should do nothing on stopZoom when already stopped', async () => {
        spectator.component.zoom.set(ZoomDirection.Stop);
        spectator.component.stopZoom();
        await new Promise((r) => setTimeout(r, 70));
        expect(execute_fn).not.toHaveBeenCalled();
    });

    it('should not render controls when camera list is empty', () => {
        spectator.detectChanges();
        expect('joystick').not.toExist();
    });
});
