import { RoomInput } from '../../app/control-state.service';
import { moveCamera } from '../../app/ui/camera-commands';
import { JoystickPan, JoystickTilt } from '../../app/ui/joystick.component';

import { setNotifyOutlet } from '@placeos/common';
import { startTestPlaceClient } from 'libs/components/src/tests/test-place-client';

describe('camera commands', () => {
    it('should show a notice and not reject when the camera is busy', async () => {
        // The driver says that the camera is busy, as in PLACEOS-DEV-MH
        const place = startTestPlaceClient();
        place.exec.mockResolvedValue({
            ok: false,
            error: {
                kind: 'server',
                code: 'unexpected_failure',
                status: 500,
                message: 'module raised: camera was busy (Exception)',
            },
        });
        const open = vi.fn(() => ({ onAction: () => ({ subscribe() {} }) }));
        setNotifyOutlet({ open } as unknown as Parameters<
            typeof setNotifyOutlet
        >[0]);
        const camera = { id: 'cam1', mod: 'Camera_1' } as RoomInput;

        await expect(
            moveCamera('sys-1', camera, JoystickPan.Left, JoystickTilt.Up),
        ).resolves.toBeUndefined();

        // The move ends after the failed stop
        expect(place.commands()).toEqual([['stop', []]]);
        expect(open).toHaveBeenCalledWith(
            'APP.CONTROL.CAMERA_COMMAND_ERROR',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
        setNotifyOutlet(null, true);
    });

    it('should not pan after a release that arrives during a slow move', async () => {
        const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
        // Each command takes 20ms to reach the driver and return
        const place = startTestPlaceClient();
        place.useExecute(() => wait(20));
        const camera = { id: 'cam1', mod: 'Camera_1' } as RoomInput;

        const press = moveCamera(
            'sys-1',
            camera,
            JoystickPan.Left,
            JoystickTilt.Stop,
        );
        // Release while the stop of the press is still in flight
        await wait(5);
        const release = moveCamera(
            'sys-1',
            camera,
            JoystickPan.Stop,
            JoystickTilt.Stop,
        );
        await Promise.all([press, release]);

        expect(place.commands()).toEqual([
            ['stop', []],
            ['stop', []],
        ]);
    });
});
