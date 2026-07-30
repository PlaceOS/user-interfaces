/**
 * Runs once before the whole suite: prove the local stack is actually there.
 *
 * The stack is a precondition, not something Playwright starts — it is ~20
 * containers and Elasticsearch alone wants several GB, so a `webServer` block
 * would be the wrong tool. Failing here costs a second and says what to do;
 * failing later costs every spec a navigation timeout and says nothing.
 */
import { APP_URL, BACKEND_URL, assertLocalOnly } from './env';
import { assertStackUp } from './preflight';

export default async function globalSetup(): Promise<void> {
    assertLocalOnly(BACKEND_URL, APP_URL);
    await assertStackUp();
}
