import { HashMap } from '@placeos/common';

class MeetingPushModule {
    public supported_meeting_url = 'https://meet.';

    constructor(data: any) {}

    $econtrol(...args: any[]) {}
}

export const createMeetingPushModule = (
    details?: HashMap,
    overrides: HashMap = {}
) =>
    new MeetingPushModule({
        ...details,
        ...overrides,
    });
