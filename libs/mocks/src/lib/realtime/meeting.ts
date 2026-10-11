import { HashMap } from '@placeos/common';

class MeetingPushModule {
    public supported_meeting_url = 'https://meet.';

    constructor(_data: any) {}

    $econtrol(..._args: any[]) {}
}

export const createMeetingPushModule = (
    details?: HashMap,
    overrides: HashMap = {},
) =>
    new MeetingPushModule({
        ...details,
        ...overrides,
    });
