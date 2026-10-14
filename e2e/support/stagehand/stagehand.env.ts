/**
 * Config for the STAGEHAND app's e2e specs.
 *
 * Stagehand is an AV support console. Its hot list is built from MQTT: `source`
 * publishes every module status to the broker, retained, and stagehand
 * subscribes to `.../connected` (and to whatever a dashboard's custom alerts
 * name). A module whose `connected` is false is a row in the hot list.
 *
 * So these specs own the whole path, and assert on both ends of it:
 *
 *   harness module --exec--> redis --> source --> mosquitto --> stagehand
 *                                                     |
 *                                     an MQTT client in the spec (the broker's view)
 *
 * The broker's view matters on its own. Stagehand double checks every MQTT
 * alert against the REST API before showing it, which hides wrong data on the
 * broker. Asserting on the broker directly is what proves that data is right,
 * and is the precondition for removing the double check.
 *
 * Signed in as ADMIN: stagehand is a support tool, and the systems and modules
 * the specs create need admin rights anyway.
 */
import { APP_URL, BACKEND_URL, assertLocalOnly } from '../env';

/** Where the stagehand app is served. Its Playwright config serves it here. */
export const STAGEHAND_URL =
    process.env.E2E_STAGEHAND_URL ?? 'http://localhost:4210';

/** Refuse to run against anything that is not local. */
export function assertStagehandLocal(): void {
    assertLocalOnly(BACKEND_URL, APP_URL, STAGEHAND_URL);
}

/** Prefix of every system these specs create, so a sweep can find leftovers. */
export const STAGEHAND_SYSTEM_PREFIX = 'E2E Stagehand';

/**
 * How long a status may take to travel from a module to the broker.
 *
 * source batches redis events every 40 ms and the broker is local, so this is
 * normally well under a second. The budget is for a cold stack.
 */
export const MQTT_PROPAGATION_MS = 20_000;
