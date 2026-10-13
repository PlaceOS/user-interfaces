import { getModule } from '@placeos/ts-client';
import { RoomInput } from '../control-state.service';
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

/** Select the camera that the room controls */
export function selectCamera(system_id: string, camera_id: string) {
    return getModule(system_id, 'System').execute('selected_camera', [
        camera_id,
    ]);
}

/** Move a camera. Stops first so an axis that returned to Stop does not keep moving. */
export async function moveCamera(
    system_id: string,
    camera: RoomInput,
    pan: JoystickPan,
    tilt: JoystickTilt,
) {
    const mod = getModule(system_id, camera.mod);
    await mod.execute('stop', withIndex(camera, []));
    if (tilt !== JoystickTilt.Stop) {
        await mod.execute('tilt', withIndex(camera, [tilt]));
    }
    if (pan !== JoystickPan.Stop) {
        await mod.execute('pan', withIndex(camera, [pan]));
    }
}

/** Start or stop zooming a camera */
export function zoomCamera(
    system_id: string,
    camera: RoomInput,
    zoom: ZoomDirection,
) {
    return getModule(system_id, camera.mod).execute(
        'zoom',
        withIndex(camera, [zoom]),
    );
}
