import { registerMockAssets } from './lib/api/assets.mock';
import { registerMockBookings } from './lib/api/bookings.mock';
import { registerMockCalendars } from './lib/api/calendars.mock';
import { registerMockEvents } from './lib/api/events.mock';
import { registerMockSignage } from './lib/api/signage.mock';
import { registerMockSurveys } from './lib/api/surveys.mock';
import { registerMockSystems } from './lib/api/systems.mock';
import { registerMockUsers } from './lib/api/users.mock';
import { registerMockZones } from './lib/api/zones.mock';

export { MOCK_PRODUCTS, MOCK_CATEGORIES } from './lib/api/assets.data';

export function mocksInit() {
    registerMockAssets();
    registerMockBookings();
    registerMockCalendars();
    registerMockEvents();
    registerMockSignage();
    registerMockSurveys();
    registerMockSystems();
    registerMockUsers();
    registerMockZones();
}
