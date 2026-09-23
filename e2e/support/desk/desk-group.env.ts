/** Configuration for isolated group-desk scenarios; no deployment IDs or dates. */
import { slotOn } from './desk.env';

export function groupDeskSlot() {
    const day = Number(process.env.E2E_DESK_GROUP_DAY_OFFSET ?? 2);
    const hour = Number(process.env.E2E_DESK_GROUP_HOUR ?? 12);
    const duration = Number(process.env.E2E_DESK_GROUP_DURATION ?? 60);
    if (
        !Number.isInteger(day) ||
        day < 1 ||
        !Number.isInteger(hour) ||
        hour < 0 ||
        hour > 23 ||
        !Number.isFinite(duration) ||
        duration <= 0
    ) {
        throw new Error(
            'Invalid E2E_DESK_GROUP_DAY_OFFSET/HOUR/DURATION configuration',
        );
    }
    return { ...slotOn(day, hour, duration), duration };
}
