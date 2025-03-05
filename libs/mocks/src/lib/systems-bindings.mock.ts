import { HashMap } from '@placeos/common';
import { mockSystem, registerSystem } from '@placeos/ts-client';

import { createCameraModule } from './realtime/camera';
import { createCaptureModule } from './realtime/capture';
import { createContactTracingModule } from './realtime/contact-tracing';
import { createSystemModule } from './realtime/control';
import {
    createAreaManagementModule,
    MockLocationServicesModule,
} from './realtime/desks';
import { createDisplayModule } from './realtime/display';
import { createBookingsModule } from './realtime/events';
import { createLockerLocationsModule } from './realtime/locker-locations';
import { createMeetingPushModule } from './realtime/meeting';
import { createMicrophoneModule } from './realtime/microphone';
import { createPaymentsModule } from './realtime/payments';
import { createVideoConferenceModule } from './realtime/video-conference';

export function createSystem(space: HashMap) {
    registerSystem(space.id, {
        System: [createSystemModule(space)],
        Bookings: [createBookingsModule(space)],
        ContactTracing: [createContactTracingModule(space)],
        AreaManagement: [createAreaManagementModule(space)],
        LocationServices: [new MockLocationServicesModule()],
        Camera: new Array(10).fill(0).map((_) => createCameraModule(space)),
        Display: new Array(10).fill(0).map((_) => createDisplayModule(space)),
        Microphone: new Array(10)
            .fill(0)
            .map((_) => createMicrophoneModule(space)),
        Capture: [createCaptureModule(space)],
        MeetingPush: [createMeetingPushModule()],
        VidConf: [createVideoConferenceModule()],
        Payment: [createPaymentsModule(space)],
        LockerLocations: [createLockerLocationsModule()],
    });

    const system = mockSystem(space.id);

    system.Bookings[0].$poll_bookings();
    setInterval(() => system.Bookings[0].$poll_bookings(), 30 * 1000);

    system.AreaManagement[0].$update();
    setInterval(() => system.AreaManagement[0].$update(), 30 * 1000);
}
