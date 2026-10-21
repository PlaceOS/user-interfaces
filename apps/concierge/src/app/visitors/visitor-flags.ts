import { Booking, SettingsService } from '@placeos/common';

/** Visitor flag that concierge lists can show as a column. */
export type VisitorFlag = 'international' | 'visitor_internal_or_external';

/** Concierge settings that turn on each visitor flag. */
const FLAG_SETTINGS: Record<VisitorFlag, string[]> = {
    international: [
        'app.visitors.allow_international',
        'app.events.allow_international',
    ],
    visitor_internal_or_external: [
        'app.visitors.allow_visitor_internal_or_external',
        'app.events.allow_attendee_internal_or_external',
    ],
};

/**
 * Whether a concierge list should show the column for a visitor flag.
 * Workplace and the Outlook add-in set the flags with their own settings, so
 * the column also shows when a listed booking is flagged as international or
 * external, even when the concierge settings are off.
 */
export function showVisitorFlag(
    settings: SettingsService,
    bookings: Booking[],
    flag: VisitorFlag,
): boolean {
    if (FLAG_SETTINGS[flag].some((key) => !!settings.get(key))) return true;
    return (bookings || []).some((booking) =>
        flag === 'international'
            ? !!booking.extension_data?.international
            : booking.extension_data?.visitor_internal_or_external ===
              'external',
    );
}
