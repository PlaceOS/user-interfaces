import { mockSystem, registerSystem } from '@placeos/ts-client';
import { HashMap } from '@placeos/common';

import { createSystemModule } from './realtime/control';
import { createBookingsModule } from './realtime/events';
import { createLocationServicesModule } from './realtime/desks';
import { createCameraModule } from './realtime/camera';
import { createDisplayModule } from './realtime/display';
import { createMicrophoneModule } from './realtime/microphone';
import { createCaptureModule } from './realtime/capture';
import { createMeetingPushModule } from './realtime/meeting';
import { createVideoConferenceModule } from './realtime/video-conference';

export function createSystem(space: HashMap) {
    registerSystem(space.id, {
        System: [createSystemModule(space)],
        Bookings: [createBookingsModule(space)],
        AreaManagement: [createLocationServicesModule(space)],
        Camera: new Array(10).fill(0).map((_) => createCameraModule(space)),
        Display: new Array(10).fill(0).map((_) => createDisplayModule(space)),
        Microphone: new Array(10)
            .fill(0)
            .map((_) => createMicrophoneModule(space)),
        Capture: [createCaptureModule(space)],
        MeetingPush: [createMeetingPushModule()],
        VidConf: [createVideoConferenceModule()]
    });

    const system = mockSystem(space.id);

    system.Bookings[0].$poll_bookings();
    setInterval(() => system.Bookings[0].$poll_bookings(), 10 * 1000);
}
