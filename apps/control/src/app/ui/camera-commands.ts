import { i18n, notifyError } from '@placeos/common';
import { getModule } from '@placeos/ts-client';
import { RoomInput } from '../control-state.service';
import { errorText } from '../error-text';
import { JoystickPan, JoystickTilt } from './joystick.component';

export enum ZoomDirection {
    In = 'in',
    Out = 'out',
    Stop = 'stop',
}

/** Command arguments, plus the camera index when the module has more than one camera */
function withIndex(camera: RoomInput, args: unknown[]) {
    return camera.index ? [...args, camera.index] : args;
}

/**
 * Run a camera command. Drivers reject when the camera is busy, so a failure
 * shows an error notice and does not reject. Resolves `true` on success.
 */
export async function execCamera(
    system_id: string,
    mod: string,
    method: string,
    args: unknown[] = [],
) {
    try {
        await getModule(system_id, mod).execute(method, args);
        return true;
    } catch (error) {
        notifyError(
            i18n('APP.CONTROL.CAMERA_COMMAND_ERROR', {
                error: errorText(error),
            }),
        );
        return false;
    }
}

/** Select the camera that the room controls */
export function selectCamera(system_id: string, camera_id: string) {
    return execCamera(system_id, 'System', 'selected_camera', [camera_id]);
}

/** Move a camera. Stops first so an axis that returned to Stop does not keep moving. */
export async function moveCamera(
    system_id: string,
    camera: RoomInput,
    pan: JoystickPan,
    tilt: JoystickTilt,
) {
    const run = (method: string, args: unknown[]) =>
        execCamera(system_id, camera.mod, method, withIndex(camera, args));
    if (!(await run('stop', []))) return;
    if (tilt !== JoystickTilt.Stop && !(await run('tilt', [tilt]))) return;
    if (pan !== JoystickPan.Stop) await run('pan', [pan]);
}

/** Start or stop zooming a camera */
export function zoomCamera(
    system_id: string,
    camera: RoomInput,
    zoom: ZoomDirection,
) {
    return execCamera(system_id, camera.mod, 'zoom', withIndex(camera, [zoom]));
}
