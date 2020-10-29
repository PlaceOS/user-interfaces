import { registerSystem } from '@placeos/ts-client';
import { HashMap } from '@user-interfaces/common';

import { createSystemModule } from './realtime/control';
import { createBookingsModule } from './realtime/events';
import { createLocationServicesModule } from './realtime/desks';

export function createSystem(space: HashMap) {
    console.log('Create Bindings for ', space, space.id);
    registerSystem(space.id, {
        System: [createSystemModule(space)],
        Bookings: [createBookingsModule(space)],
        AreaManagement: [createLocationServicesModule(space)],
    });
}
