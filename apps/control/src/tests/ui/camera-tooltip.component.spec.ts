import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockDirective, MockModule } from 'ng-mocks';

import {
    ControlStateService,
    RoomInput,
} from '../../app/control-state.service';
import {
    CameraTooltipComponent,
    ZoomDirection,
} from '../../app/ui/camera-tooltip.component';
import {
    JoystickComponent,
    JoystickPan,
    JoystickTilt,
} from '../../app/ui/joystick.component';

vi.mock('@placeos/ts-client', { spy: true });

import {
    BindingDirective,
    CustomTooltipData,
    IconComponent,
} from '@placeos/components';
import * as client from '@placeos/ts-client';

describe('CameraTooltipComponent', () => {
    let spectator: Spectator<CameraTooltipComponent>;
    const available_cameras = signal<any[]>([]);
    const selected_camera = signal<string | null>(null);
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
                    available_cameras,
                    selected_camera,
                },
            },
            {
                provide: CustomTooltipData,
                useValue: { close: vi.fn() },
            },
        ],
        imports: [
            MockModule(MatSelectModule),
            MockModule(MatFormFieldModule),
            MockModule(MatInputModule),
            FormsModule,
            MatMenuModule,
        ],
    });

    /** Mock module execute calls and return the spy */
    const mockExecute = () => {
        const execute = vi.fn(async () => null);
        vi.mocked(client.getModule).mockImplementation(
            () =>
                ({ execute }) as unknown as ReturnType<typeof client.getModule>,
        );
        return execute;
    };

    beforeEach(() => {
        available_cameras.set([]);
        selected_camera.set(null);
        (client.getModule as any).mockImplementation(() => ({
            execute: async () => null,
        }));
        spectator = createComponent();
    });

    it('should require a camera selection when selected_camera is null', () => {
        available_cameras.set([
            { id: 'cam1', name: 'Camera 1', mod: 'Camera_1' },
            { id: 'cam2', name: 'Camera 2', mod: 'Camera_2' },
        ]);
        spectator.detectChanges();
        expect(spectator.component.active_camera()).toBeUndefined();
    });

    it('should allow for user to select a camera', () => {
        // const cam_list = [{ id: 'cam1', name: 'Camera 1' }] as any;
        // expect('p[empty]').toExist();
        // const service = spectator.inject(ControlStateService);
        // (service as any).camera_list.set(cam_list);
        // spectator.detectChanges();
        // expect('p[empty]').not.toExist();
        // expect('p[no-cam]').not.toExist();
        // spectator.component.selectCamera(cam_list[0]);
        // spectator.detectChanges();
        // expect('p[no-cam]').not.toExist();
    });

    it('should show camera joystick', () => {
        // const service = spectator.inject(ControlStateService);
        // (service as any).camera_list.set([]);
        // spectator.detectChanges();
        // expect('p[empty]').toExist();
        // expect('joystick').not.toExist();
        // (service as any).camera_list.set([{ id: 'cam1', name: 'Camera 1' }]);
        // spectator.detectChanges();
        // expect('joystick').toExist();
    });

    it('should stop before moving so a released axis does not keep moving', async () => {
        const execute = mockExecute();
        spectator.component.active_camera.set({
            id: 'cam1',
            name: 'Camera 1',
            mod: 'Camera_1',
        } as RoomInput);
        spectator.component.pan = JoystickPan.Stop;
        spectator.component.tilt = JoystickTilt.Up;
        spectator.component.moveCamera();
        await new Promise((r) => setTimeout(r, 70));
        expect(execute.mock.calls).toEqual([
            ['stop', []],
            ['tilt', [JoystickTilt.Up]],
        ]);
    });

    it('should zoom while the zoom button is held', async () => {
        const execute = mockExecute();
        available_cameras.set([
            { id: 'cam1', name: 'Camera 1', mod: 'Camera_1' },
        ]);
        selected_camera.set('cam1');
        spectator.detectChanges();
        spectator.dispatchFakeEvent('button[zoom-in]', 'pointerdown');
        expect(execute).toHaveBeenCalledWith('zoom', [ZoomDirection.In]);
        spectator.dispatchFakeEvent('button[zoom-in]', 'pointerup');
        await new Promise((r) => setTimeout(r, 70));
        expect(execute).toHaveBeenLastCalledWith('zoom', [ZoomDirection.Stop]);
    });

    it('should allow user to select camera presets', () => {
        // const cam_list = [{ id: 'cam1', name: 'Camera 1' }] as any;
        // const service = spectator.inject(ControlStateService);
        // (service as any).camera_list.set(cam_list);
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
