import { mockSystem, registerSystem } from '@placeos/ts-client';
import { HashMap } from '@placeos/common';

import { createSystemModule } from './realtime/control';
import { createBookingsModule } from './realtime/events';
import {
    createAreaManagementModule,
    MockLocationServicesModule,
} from './realtime/desks';
import { createCameraModule } from './realtime/camera';
import { createDisplayModule } from './realtime/display';
import { createMicrophoneModule } from './realtime/microphone';
import { createCaptureModule } from './realtime/capture';
import { createMeetingPushModule } from './realtime/meeting';
import { createVideoConferenceModule } from './realtime/video-conference';
import { createContactTracingModule } from './realtime/contact-tracing';
import { createPaymentsModule } from './realtime/payments';
import { createLockerLocationsModule } from './realtime/locker-locations';

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
