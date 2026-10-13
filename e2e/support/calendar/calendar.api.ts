import { APIRequestContext } from '@playwright/test';
import { STAFF_API, asList, getJson } from '../api';
import { BACKEND_URL } from '../env';
import { CALENDAR_TENANT_NAME } from './calendar.env';

/**
 * Was the stack under test seeded with the Microsoft 365 tenant?
 *
 * Calendar-backed specs skip when this is false. Reads the tenant row the seed
 * wrote, so it answers for the stack, not for this process's env. Needs an
 * admin `api`: staff-api lists tenants to admins only.
 */
export async function calendarBacked(api: APIRequestContext): Promise<boolean> {
    const tenants = asList<{ domain?: string; name?: string }>(
        await getJson(api, `${STAFF_API}/tenants`),
    );
    const domain = new URL(BACKEND_URL).hostname;
    return tenants.find((t) => t.domain === domain)?.name === CALENDAR_TENANT_NAME;
}
