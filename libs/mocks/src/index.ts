import { log } from '@placeos/common';

import * as ZONE_MOCKS from './lib/api/zones.mock';
import * as USER_MOCKS from './lib/api/users.mock';
import * as SYSTEM_MOCKS from './lib/api/systems.mock';
import * as EVENT_MOCKS from './lib/api/events.mock';
import * as CALENDAR_MOCKS from './lib/api/calendars.mock';
import * as BOOKING_MOCKS from './lib/api/bookings.mock';

import * as BINDING_MOCKS from './lib/systems-bindings.mock';

export default {
    ZONE_MOCKS,
    USER_MOCKS,
    SYSTEM_MOCKS,
    EVENT_MOCKS,
    CALENDAR_MOCKS,
    BOOKING_MOCKS,
    BINDING_MOCKS,
};

log('MOCKS', 'Mocks included with application.');
