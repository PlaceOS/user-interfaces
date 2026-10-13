/**
 * Side-effect module: load `e2e/.env` before anything reads process.env.
 * Imported FIRST by env.ts so the order holds regardless of who imports what.
 * No hard dependency on dotenv — if it is absent, real env vars / CI secrets
 * still work.
 */
import * as path from 'path';

try {
    require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });
} catch {
    /* dotenv not installed — rely on exported env vars */
}
