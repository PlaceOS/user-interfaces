import { registerMockAlerts } from './lib/api/alerts.mock';
import { registerMockApplications } from './lib/api/applications.mock';
import { registerMockAssets } from './lib/api/assets.mock';
import { registerMockBookings } from './lib/api/bookings.mock';
import { registerMockCalendars } from './lib/api/calendars.mock';
import { registerMockEvents } from './lib/api/events.mock';
import { registerMockMapsAi } from './lib/api/maps-ai.mock';
import { registerMockShortUrls } from './lib/api/short-url.mock';
import { registerMockSignage } from './lib/api/signage.mock';
import { registerMockSurveys } from './lib/api/surveys.mock';
import { registerMockSystems } from './lib/api/systems.mock';
import { registerMockUsers } from './lib/api/users.mock';
import { registerMockZones } from './lib/api/zones.mock';
import { startMockSession } from './lib/session';

/**
 * Register every mock endpoint and mock system. Each group restores the data
 * that the user changed earlier in this browser session, and applies changes
 * that other tabs of the same origin make.
 */
export function mocksInit() {
    startMockSession();
    registerMockAlerts();
    registerMockApplications();
    registerMockAssets();
    registerMockBookings();
    registerMockCalendars();
    registerMockEvents();
    registerMockMapsAi();
    registerMockShortUrls();
    registerMockSignage();
    registerMockSurveys();
    registerMockSystems();
    registerMockUsers();
    registerMockZones();
}
