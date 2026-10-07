/**
 * Loading the suite's drivers into the stack.
 *
 * Run from `e2e/support/seed.ts` at bring-up, so the wait for the build farm
 * happens once there rather than inside a spec's timeout. Idempotent: rows are
 * found before they are created, and a driver core already holds returns at
 * once.
 */
import { APIRequestContext } from '@playwright/test';
import {
    ensureDriver,
    ensureDriversRepository,
    waitForDriverCompiled,
} from './drivers.api';
import {
    DRIVERS_COMMIT,
    DRIVERS_REPOSITORY,
    ROOM_DRIVERS,
    RoomDriver,
} from './drivers.env';

/**
 * How long bring-up waits for core to hold every driver binary.
 *
 * A commit the farm has already built for this CPU architecture is a download
 * of a few seconds. One it has not is a compile of a few minutes per driver.
 */
export const DRIVER_LOAD_TIMEOUT_MS = 15 * 60 * 1000;

export interface SeededDrivers {
    repository_id: string;
    drivers: Record<RoomDriver, { id: string; created: boolean }>;
}

export async function ensureDrivers(
    api: APIRequestContext,
    log: (message: string) => void = () => {},
): Promise<SeededDrivers> {
    const repository = await ensureDriversRepository(api);
    const drivers = {} as SeededDrivers['drivers'];
    for (const key of Object.keys(ROOM_DRIVERS) as RoomDriver[]) {
        drivers[key] = await ensureDriver(
            api,
            repository.id,
            ROOM_DRIVERS[key],
        );
    }
    await Promise.all(
        (Object.keys(ROOM_DRIVERS) as RoomDriver[]).map((key) =>
            waitForDriverCompiled(
                api,
                drivers[key].id,
                `${ROOM_DRIVERS[key].name} (${ROOM_DRIVERS[key].file_name} @ ${DRIVERS_COMMIT.slice(0, 7)})`,
                DRIVER_LOAD_TIMEOUT_MS,
                log,
            ),
        ),
    );
    return { repository_id: repository.id, drivers };
}

/** One line for the bring-up log: where the drivers came from. */
export function describeDrivers(seeded: SeededDrivers): string {
    const names = (Object.keys(ROOM_DRIVERS) as RoomDriver[])
        .map(
            (key) =>
                `${ROOM_DRIVERS[key].module_name}${seeded.drivers[key].created ? '+' : ''}`,
        )
        .join(', ');
    return `${DRIVERS_REPOSITORY.uri}@${DRIVERS_REPOSITORY.branch} ${DRIVERS_COMMIT.slice(0, 7)}: ${names}`;
}
