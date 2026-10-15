/**
 * The drivers the e2e stack loads, pinned.
 *
 * core compiles nothing itself. It asks the PlaceOS build farm (`BUILD_URL` in
 * `e2e/stack/docker-compose.yml`, build.placeos.run by default) for a binary
 * keyed by repository, branch, commit, file and CPU architecture, and the farm
 * compiles on the first request for a key it has not seen, which takes a few
 * minutes. Pinned to a commit, that happens once per architecture and every
 * bring-up after it is a download. `HEAD` would make core force a rebuild on
 * every bring-up (`core/src/placeos-core/driver_manager.cr`).
 *
 * To run the suite against a drivers branch, set E2E_DRIVERS_URI,
 * E2E_DRIVERS_BRANCH and E2E_DRIVERS_COMMIT before `up.sh`.
 */
export const DRIVERS_REPOSITORY = {
    name: 'E2E Drivers',
    folder_name: 'e2e-drivers',
    uri: process.env.E2E_DRIVERS_URI ?? 'https://github.com/placeos/drivers',
    branch: process.env.E2E_DRIVERS_BRANCH ?? 'feat/place-demo-calendar',
};

/**
 * PlaceOS/drivers at the branch above. The demo calendar is on that branch
 * until its PR merges; then this becomes master and the squash commit.
 */
export const DRIVERS_COMMIT =
    process.env.E2E_DRIVERS_COMMIT ??
    '635d0a1b4295f1132bf84c6326c68f8815a089b4';

export interface DriverSpec {
    /** Shown in Backoffice; the module takes its name from `module_name`. */
    name: string;
    /** Path inside the repository. */
    file_name: string;
    /** The class's `generic_name`, which is what systems address it by. */
    module_name: string;
    /** `PlaceDriverRole`; 99 is Logic, one module per system. */
    role: number;
    description: string;
}

/** What a bookable room runs so the apps see a live status for it. */
export const ROOM_DRIVERS = {
    /** In-memory calendar; nothing reaches a mailbox. */
    calendar: {
        name: 'E2E Demo Calendar',
        file_name: 'drivers/place/demo/calendar.cr',
        module_name: 'Calendar',
        role: 99,
        description: 'Owned by the e2e suite. Safe to delete.',
    },
    /**
     * The room status driver the workplace app binds (`Bookings` / `status`).
     * Polls `Calendar_1` in the same system, which is the module above.
     */
    bookings: {
        name: 'E2E Room Events',
        file_name: 'drivers/place/bookings.cr',
        module_name: 'Bookings',
        role: 99,
        description: 'Owned by the e2e suite. Safe to delete.',
    },
} satisfies Record<string, DriverSpec>;

export type RoomDriver = keyof typeof ROOM_DRIVERS;

/**
 * Where the state harness comes from: `drivers/place/e2e/state_harness.cr`, a
 * UDP device whose `connected` state and other statuses are set by calling its
 * functions. The stagehand specs use it to drive what a module publishes over
 * MQTT.
 *
 * A repository row of its own, because it is pinned apart from the room
 * drivers: the harness is on master, and they sit on a branch it is not on.
 * When both are on master this can collapse into `DRIVERS_REPOSITORY`.
 *
 * Override with E2E_HARNESS_URI, E2E_HARNESS_BRANCH and E2E_HARNESS_COMMIT.
 */
export const HARNESS_REPOSITORY = {
    name: 'E2E Harness Drivers',
    folder_name: 'e2e-harness-drivers',
    uri: process.env.E2E_HARNESS_URI ?? 'https://github.com/placeos/drivers',
    branch: process.env.E2E_HARNESS_BRANCH ?? 'master',
};

export const HARNESS_COMMIT =
    process.env.E2E_HARNESS_COMMIT ??
    'a4b072a81bcfc3f8a48baf6236b5c1830a155f7c';

/**
 * Shows up in systems as `Display`, so a system with two of them has
 * `Display_1` and `Display_2` — which is what the reordering specs need.
 * Role 1 is a device: it needs an address and a port, and any will do.
 */
export const HARNESS_DRIVER = {
    name: 'E2E State Harness',
    file_name: 'drivers/place/e2e/state_harness.cr',
    module_name: 'Display',
    role: 1,
    description: 'Owned by the e2e suite. Safe to delete.',
} satisfies DriverSpec;
