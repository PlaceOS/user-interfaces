import { Page } from '@playwright/test';

export async function useSettings(
    page: Page,
    overrides: Record<string, unknown>,
): Promise<void> {
    const invalid = Object.keys(overrides).filter((key) => !key.startsWith('app.'));
    if (invalid.length) {
        throw new Error(`Locker settings must use app.* keys: ${invalid.join(', ')}`);
    }
    await page.addInitScript((value) => {
        localStorage.setItem('PLACEOS.setting_overrides', JSON.stringify(value));
    }, overrides);
}

export const LOCKER_BASE_SETTINGS = {
    'app.lockers.allow_all_day': true,
    'app.lockers.allow_time_changes': true,
    'app.lockers.max_duration': 120,
    'app.lockers.disabled_date_select': false,
    'app.lockers.disabled_start_time': false,
    'app.lockers.hide_end_time': false,
};
