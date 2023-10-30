import { log } from '@placeos/common';

import { ZONE_MOCKS } from './lib/api/zones.mock';
import { USER_MOCKS } from './lib/api/users.mock';
import { SYSTEM_MOCKS } from './lib/api/systems.mock';
import { EVENT_MOCKS } from './lib/api/events.mock';
import { CALENDAR_MOCKS } from './lib/api/calendars.mock';
import { BOOKING_MOCKS } from './lib/api/bookings.mock';
import { ASSET_MOCKS } from './lib/api/assets.mock';
import { SURVEY_MOCKS } from './lib/api/surveys.mock';

export default {
    ZONE_MOCKS,
    USER_MOCKS,
    SYSTEM_MOCKS,
    EVENT_MOCKS,
    CALENDAR_MOCKS,
    BOOKING_MOCKS,
    ASSET_MOCKS,
    SURVEY_MOCKS,
};

log('MOCKS', 'Mocks included with application.');
