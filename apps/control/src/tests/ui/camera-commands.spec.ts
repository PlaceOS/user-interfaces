import { RoomInput } from '../../app/control-state.service';
import { moveCamera } from '../../app/ui/camera-commands';
import { JoystickPan, JoystickTilt } from '../../app/ui/joystick.component';

vi.mock('@placeos/ts-client', { spy: true });

import { setNotifyOutlet } from '@placeos/common';
import * as client from '@placeos/ts-client';

describe('camera commands', () => {
    it('should show a notice and not reject when the camera is busy', async () => {
        // Driver exec error from PLACEOS-DEV-MH
        const busy = {
            code: 500,
            error_code: 3,
            id: 117,
            msg: 'module raised: camera was busy (Exception)',
            type: 'error',
        };
        const execute = vi.fn(async () => Promise.reject(busy));
        vi.mocked(client.getModule).mockImplementation(
            () =>
                ({ execute }) as unknown as ReturnType<typeof client.getModule>,
        );
        const open = vi.fn(() => ({ onAction: () => ({ subscribe() {} }) }));
        setNotifyOutlet({ open } as unknown as Parameters<
            typeof setNotifyOutlet
        >[0]);
        const camera = { id: 'cam1', mod: 'Camera_1' } as RoomInput;

        await expect(
            moveCamera('sys-1', camera, JoystickPan.Left, JoystickTilt.Up),
        ).resolves.toBeUndefined();

        // The move ends after the failed stop
        expect(execute.mock.calls).toEqual([['stop', []]]);
        expect(open).toHaveBeenCalledWith(
            'APP.CONTROL.CAMERA_COMMAND_ERROR',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
        setNotifyOutlet(null, true);
    });
});
