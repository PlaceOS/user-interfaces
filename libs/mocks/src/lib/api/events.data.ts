import { predictableRandomInt, unique } from '@placeos/common';
import {
    addDays,
    addMinutes,
    getUnixTime,
    setHours,
    setMinutes,
    startOfDay,
} from 'date-fns';
import { generateCateringOrder } from './catering.data';
import { MOCK_SPACES } from './spaces.data';
import {
    ACTIVE_USER,
    MOCK_GUESTS,
    MOCK_STAFF,
    getStaffByDepartment,
} from './users.data';

let EVENT_TIME = setHours(startOfDay(Date.now()), 7);

const nextEventTime = (save = false): number => {
    const next = addMinutes(EVENT_TIME, (predictableRandomInt(8) + 1) * 15);
    if (save) {
        EVENT_TIME = next;
    }
    return getUnixTime(next);
};

const event_status = ['tentative', 'confirmed', 'cancelled'];
const randomStatus = (): string => {
    const rnd = predictableRandomInt(10);
    return rnd < 2
        ? event_status[2]
        : rnd < 5
          ? event_status[0]
          : event_status[1];
};

const MEETING_TYPES = {
    'Team Standup': {
        category: 'Operational',
        body: 'Daily team synchronization meeting to discuss progress, blockers, and priorities.',
        typical_attendees: 5,
        departments: ['Engineering', 'Product', 'Design'],
    },
    'Project Kickoff': {
        category: 'Project',
        body: 'Initial meeting to define project scope, objectives, timeline, and team responsibilities.',
        typical_attendees: 8,
        departments: ['Engineering', 'Product', 'Design', 'Marketing'],
    },
    'Client Presentation': {
        category: 'Client',
        body: 'Formal presentation of project deliverables, progress updates, or proposal pitch to client stakeholders.',
        typical_attendees: 6,
        departments: ['Sales', 'Marketing', 'Engineering'],
    },
    'Strategic Planning': {
        category: 'Strategic',
        body: 'High-level discussion on company direction, quarterly goals, and resource allocation strategies.',
        typical_attendees: 4,
        departments: ['Leadership', 'Product', 'Finance'],
    },
    'Code Review Session': {
        category: 'Technical',
        body: 'Collaborative review of code changes, architecture decisions, and technical implementation details.',
        typical_attendees: 4,
        departments: ['Engineering'],
    },
    'Training Workshop': {
        category: 'Training',
        body: 'Educational session covering new technologies, processes, or professional development topics.',
        typical_attendees: 12,
        departments: ['All Departments'],
    },
    'Budget Review': {
        category: 'Financial',
        body: 'Quarterly financial review covering expenses, revenue projections, and budget adjustments.',
        typical_attendees: 6,
        departments: ['Finance', 'Leadership', 'Operations'],
    },
    '1:1 Meeting': {
        category: 'Personal',
        body: 'Individual meeting between manager and team member for performance discussion and feedback.',
        typical_attendees: 2,
        departments: ['All Departments'],
    },
    'Product Demo': {
        category: 'Product',
        body: 'Demonstration of new features, product updates, or prototype showcasing to stakeholders.',
        typical_attendees: 8,
        departments: ['Product', 'Engineering', 'Design', 'Marketing'],
    },
    'Team Building': {
        category: 'Social',
        body: 'Interactive activities designed to improve team cohesion, communication, and workplace culture.',
        typical_attendees: 15,
        departments: ['All Departments'],
    },
    'Interview Panel': {
        category: 'HR',
        body: 'Candidate interview session with multiple team members to evaluate fit and technical skills.',
        typical_attendees: 4,
        departments: ['HR', 'Engineering', 'Product'],
    },
    'Vendor Meeting': {
        category: 'Business',
        body: 'Discussion with external vendors regarding partnerships, services, or procurement decisions.',
        typical_attendees: 5,
        departments: ['Operations', 'Finance', 'Leadership'],
    },
    'Risk Assessment': {
        category: 'Strategic',
        body: 'Analysis and discussion of potential project risks, mitigation strategies, and contingency planning.',
        typical_attendees: 6,
        departments: ['Leadership', 'Operations', 'Finance'],
    },
    'Innovation Brainstorm': {
        category: 'Creative',
        body: 'Creative ideation session for new product features, process improvements, or market opportunities.',
        typical_attendees: 8,
        departments: ['Product', 'Design', 'Engineering', 'Marketing'],
    },
    'Compliance Review': {
        category: 'Legal',
        body: 'Review of regulatory requirements, policy updates, and compliance procedures.',
        typical_attendees: 5,
        departments: ['Legal', 'Operations', 'Leadership'],
    },
    'All Hands Meeting': {
        category: 'Company',
        body: 'Company-wide meeting for announcements, updates, and team recognition.',
        typical_attendees: 50,
        departments: ['All Departments'],
    },
    'Sprint Planning': {
        category: 'Agile',
        body: 'Planning session for upcoming sprint work, story estimation, and capacity planning.',
        typical_attendees: 6,
        departments: ['Engineering', 'Product', 'Design'],
    },
    Retrospective: {
        category: 'Agile',
        body: 'Team reflection on completed sprint, identifying improvements and celebrating successes.',
        typical_attendees: 6,
        departments: ['Engineering', 'Product', 'Design'],
    },
    'User Research': {
        category: 'Research',
        body: 'Discussion of user feedback, research findings, and implications for product development.',
        typical_attendees: 5,
        departments: ['Product', 'Design', 'Engineering'],
    },
    'Security Briefing': {
        category: 'Security',
        body: 'Review of security protocols, threat assessments, and incident response procedures.',
        typical_attendees: 8,
        departments: ['Engineering', 'Operations', 'Leadership'],
    },
};

const getRandomMeetingContent = () => {
    const titles = Object.keys(MEETING_TYPES);
    const title = titles[predictableRandomInt(titles.length)];
    return {
        title,
        ...MEETING_TYPES[title],
    };
};

const generateMeetingUrl = () => {
    const providers = [
        { name: 'Zoom', urlPattern: 'https://zoom.us/j/' },
        {
            name: 'Microsoft Teams',
            urlPattern: 'https://teams.microsoft.com/l/meetup-join/',
        },
        { name: 'Google Meet', urlPattern: 'https://meet.google.com/' },
        { name: 'WebEx', urlPattern: 'https://placeos.webex.com/meet/' },
    ];

    const provider = providers[predictableRandomInt(providers.length)];
    const meetingId = Math.random().toString(36).substring(2, 15);

    return {
        provider: provider.name,
        url: provider.urlPattern + meetingId,
        id: meetingId,
    };
};

const getRelevantAttendees = (category: string, space: any) => {
    const attendees = [];
    const meetingInfo =
        MEETING_TYPES[category] || MEETING_TYPES['Team Standup'];

    // Get staff from relevant departments
    let relevantStaff = [];
    if (meetingInfo.departments.includes('All Departments')) {
        relevantStaff = MOCK_STAFF;
    } else {
        meetingInfo.departments.forEach((dept) => {
            relevantStaff = relevantStaff.concat(getStaffByDepartment(dept));
        });
    }

    // Select attendees based on typical count
    const attendeeCount = Math.min(
        meetingInfo.typical_attendees + predictableRandomInt(4, -2),
        relevantStaff.length,
        space?.capacity || 20,
    );

    for (let i = 0; i < attendeeCount; i++) {
        if (relevantStaff.length > 0) {
            const randomIndex = predictableRandomInt(relevantStaff.length);
            attendees.push(relevantStaff.splice(randomIndex, 1)[0]);
        }
    }

    // Add external attendees for client meetings
    if (category === 'Client' && predictableRandomInt(2) === 0) {
        const guestCount = predictableRandomInt(3) + 1;
        for (let i = 0; i < guestCount && i < MOCK_GUESTS.length; i++) {
            attendees.push(MOCK_GUESTS[i]);
        }
    }

    // Active user should not be in phase 1 events

    return unique(attendees, 'email') || [];
};

const generateEventForTime = (eventTime: number, index: number) => {
    const space = MOCK_SPACES[predictableRandomInt(MOCK_SPACES.length)];
    const meetingContent = getRandomMeetingContent();
    const meetingInfo = generateMeetingUrl();

    const attendees = getRelevantAttendees(meetingContent.category, space);

    const event_start = eventTime;
    const event_end = getUnixTime(
        addMinutes(
            new Date(event_start * 1000),
            (predictableRandomInt(8) + 1) * 15,
        ),
    );

    const hasSetup =
        meetingContent.category === 'Strategic' ||
        meetingContent.category === 'Client' ||
        predictableRandomInt(5) === 0;

    const hasCatering =
        meetingContent.category === 'Strategic' ||
        meetingContent.category === 'Social' ||
        meetingContent.category === 'Training' ||
        (attendees.length > 5 && predictableRandomInt(3) === 0);

    return {
        id: `cal-event-${index}`,
        status: randomStatus(),
        host: attendees[0]?.email || 'unknown@place.tech',
        calendar: `calendar-${attendees[0]?.department?.toLowerCase() || 'general'}`,
        creator: attendees[0]?.email || 'unknown@place.tech',
        attendees: attendees.map((attendee, idx) => ({
            ...attendee,
            organizer: idx === 0,
            checked_in: predictableRandomInt(99999) % 3 === 0,
            response_status:
                idx === 0
                    ? 'accepted'
                    : predictableRandomInt(99999) % 2 === 0
                      ? 'accepted'
                      : predictableRandomInt(99999) % 6 === 0
                        ? 'declined'
                        : 'tentative',
        })),
        title: meetingContent.title,
        body: meetingContent.body,
        private:
            meetingContent.category === 'Strategic' ||
            predictableRandomInt(4) === 0,
        event_start,
        event_end,
        timezone: 'Australia/Sydney',
        all_day: false,
        location: space?.name || 'TBD',
        recurring: predictableRandomInt(10) === 0, // 10% recurring
        recurrence:
            predictableRandomInt(10) === 0
                ? {
                      rule: 'FREQ=WEEKLY;BYDAY=TU',
                      until: getUnixTime(new Date(Date.now() + 86400000 * 90)), // 3 months
                  }
                : {},
        attachments:
            meetingContent.category === 'Project' &&
            predictableRandomInt(3) === 0
                ? {
                      'project-brief.pdf':
                          'https://example.com/project-brief.pdf',
                      'requirements.docx':
                          'https://example.com/requirements.docx',
                  }
                : {},
        system: space,
        meeting_url: meetingInfo.url,
        meeting_id: meetingInfo.id,
        meeting_provider: meetingInfo.provider,
        extension_data: {
            category: meetingContent.category,
            catering: hasCatering
                ? [
                      generateCateringOrder({
                          id: `cal-event-${index}`,
                          event_start,
                          event_end,
                      }),
                  ]
                : [],
            setup: hasSetup ? predictableRandomInt(4) * 5 + 15 : 0, // 15-30 min setup
            breakdown: hasSetup ? predictableRandomInt(3) * 5 + 10 : 0, // 10-20 min breakdown
            cost_center:
                attendees[0]?.department?.toLowerCase().replace(/\s+/g, '-') ||
                'general',
            priority:
                meetingContent.category === 'Strategic'
                    ? 'high'
                    : meetingContent.category === 'Client'
                      ? 'high'
                      : predictableRandomInt(3) === 0
                        ? 'medium'
                        : 'normal',
            estimated_attendees: attendees.length,
            actual_attendees: Math.max(
                1,
                attendees.length - predictableRandomInt(3),
            ),
        },
    };
};

// Generate events with guaranteed volume across 10+ users
export const MOCK_EVENTS = (() => {
    const events = [];

    // Time range: past 15 days to future 15 days (30 days total)
    const totalDays = 30;
    const dayOffset = -15; // Start 15 days ago

    // PHASE 1: Ensure every space has at least 1 event per day
    // Distribute space events across all days to avoid overwhelming any single day
    MOCK_SPACES.forEach((space, spaceIndex) => {
        for (let day = 0; day < totalDays; day++) {
            const dayStart = setHours(
                addDays(startOfDay(Date.now()), day + dayOffset),
                7,
            );

            // Spread events throughout the day (7 AM to 6 PM)
            const hourOffset = 7 + ((spaceIndex + day) % 11); // 7 AM to 5 PM
            const minuteOffset = (spaceIndex * 17 + day * 13) % 60; // Add some minute variation
            const eventTime = getUnixTime(
                setHours(setMinutes(dayStart, minuteOffset), hourOffset),
            );

            // Select a host from available staff (excluding ACTIVE_USER)
            const availableStaff = MOCK_STAFF.filter(
                (s) => s.email !== ACTIVE_USER.email,
            );
            const host = availableStaff[spaceIndex % availableStaff.length];

            // Get colleagues from same department (excluding ACTIVE_USER)
            const colleagues = MOCK_STAFF.filter(
                (s) =>
                    s.department === host.department &&
                    s.email !== host.email &&
                    s.email !== ACTIVE_USER.email,
            ).slice(0, predictableRandomInt(3) + 1);

            const meetingContent = getRandomMeetingContent();
            const meetingInfo = generateMeetingUrl();

            const attendees = [host, ...colleagues].map((attendee, idx) => ({
                ...attendee,
                organizer: idx === 0,
                checked_in: predictableRandomInt(99999) % 3 === 0,
                response_status:
                    idx === 0
                        ? 'accepted'
                        : predictableRandomInt(99999) % 2 === 0
                          ? 'accepted'
                          : 'tentative',
            }));

            const event_start = eventTime;
            const event_end = getUnixTime(
                addMinutes(new Date(event_start * 1000), 60),
            );

            events.push({
                id: `space-daily-${space.id}-${day}`,
                status: randomStatus(),
                host: host.email,
                calendar: `calendar-${host.department?.toLowerCase() || 'general'}`,
                creator: host.email,
                attendees,
                title: meetingContent.title,
                body: meetingContent.body,
                private: predictableRandomInt(4) === 0,
                event_start,
                event_end,
                timezone: 'Australia/Sydney',
                all_day: false,
                location: space?.name || 'TBD',
                recurring: predictableRandomInt(10) === 0,
                recurrence: {},
                attachments: {},
                system: space,
                meeting_url: meetingInfo.url,
                meeting_id: meetingInfo.id,
                meeting_provider: meetingInfo.provider,
                extension_data: {
                    category: meetingContent.category,
                    catering: [],
                    setup: 0,
                    breakdown: 0,
                    cost_center:
                        host.department?.toLowerCase().replace(/\s+/g, '-') ||
                        'general',
                    priority: 'normal',
                    estimated_attendees: attendees.length,
                    actual_attendees: attendees.length,
                },
            });
        }
    });

    // PHASE 2: Ensure most users have 1-3 events per day (limit ACTIVE_USER to 1 attendee slot per day)
    const activeUserDailyCount = new Map<number, number>(); // Track ACTIVE_USER attendee count per day

    MOCK_STAFF.forEach((user, userIndex) => {
        // Skip the active user - they get their own events in phase 3
        if (user.email === ACTIVE_USER.email) {
            return;
        }

        for (let day = 0; day < totalDays; day++) {
            const eventsPerDay = predictableRandomInt(3) + 1; // 1-3 events per day

            for (let eventNum = 0; eventNum < eventsPerDay; eventNum++) {
                const dayStart = setHours(
                    addDays(startOfDay(Date.now()), day + dayOffset),
                    8,
                );

                // Spread user events throughout business hours (8 AM to 5 PM)
                const hourOffset = 8 + eventNum * 3 + (userIndex % 3); // Stagger times
                const eventTime = getUnixTime(
                    setHours(dayStart, Math.min(hourOffset, 17)),
                );

                // Use different spaces for variety
                const space =
                    MOCK_SPACES[
                        (userIndex + day + eventNum) % MOCK_SPACES.length
                    ];

                // Get colleagues from same department
                let colleagues = MOCK_STAFF.filter(
                    (s) =>
                        s.department === user.department &&
                        s.email !== user.email &&
                        s.email !== ACTIVE_USER.email, // Exclude active user from random colleagues
                ).slice(0, predictableRandomInt(4) + 1);

                // Check if we can add ACTIVE_USER as attendee (max 1 per day)
                const currentDayCount = activeUserDailyCount.get(day) || 0;
                const shouldIncludeActiveUser =
                    user.department === ACTIVE_USER.department &&
                    currentDayCount === 0 &&
                    predictableRandomInt(5) === 0; // 20% chance

                if (shouldIncludeActiveUser) {
                    colleagues = [...colleagues, ACTIVE_USER as any];
                    activeUserDailyCount.set(day, currentDayCount + 1);
                }

                const meetingContent = getRandomMeetingContent();
                const meetingInfo = generateMeetingUrl();

                const attendees = [user, ...colleagues].map(
                    (attendee, idx) => ({
                        ...attendee,
                        organizer: idx === 0,
                        checked_in: predictableRandomInt(99999) % 3 === 0,
                        response_status:
                            idx === 0
                                ? 'accepted'
                                : predictableRandomInt(99999) % 2 === 0
                                  ? 'accepted'
                                  : 'tentative',
                    }),
                );

                const event_start = eventTime;
                const event_end = getUnixTime(
                    addMinutes(new Date(event_start * 1000), 60),
                );

                events.push({
                    id: `user-daily-${userIndex}-${day}-${eventNum}`,
                    status: randomStatus(),
                    host: user.email,
                    calendar: `calendar-${user.department?.toLowerCase() || 'general'}`,
                    creator: user.email,
                    attendees,
                    title: meetingContent.title,
                    body: meetingContent.body,
                    private: predictableRandomInt(4) === 0,
                    event_start,
                    event_end,
                    timezone: 'Australia/Sydney',
                    all_day: false,
                    location: space?.name || 'TBD',
                    recurring: predictableRandomInt(10) === 0,
                    recurrence: {},
                    attachments: {},
                    system: space,
                    meeting_url: meetingInfo.url,
                    meeting_id: meetingInfo.id,
                    meeting_provider: meetingInfo.provider,
                    extension_data: {
                        category: meetingContent.category,
                        catering: [],
                        setup: 0,
                        breakdown: 0,
                        cost_center:
                            user.department
                                ?.toLowerCase()
                                .replace(/\s+/g, '-') || 'general',
                        priority: 'normal',
                        estimated_attendees: attendees.length,
                        actual_attendees: attendees.length,
                    },
                });
            }
        }
    });

    // PHASE 3: Ensure active user has 1-3 events per day with high visibility
    for (let day = 0; day < totalDays; day++) {
        const eventsPerDay = predictableRandomInt(3) + 1; // 1-3 events per day

        for (let eventNum = 0; eventNum < eventsPerDay; eventNum++) {
            const dayStart = setHours(
                addDays(startOfDay(Date.now()), day + dayOffset),
                9,
            );

            // Space active user events throughout the day
            const hourOffset = 9 + eventNum * 3; // 9 AM, 12 PM, 3 PM pattern
            const eventTime = getUnixTime(
                setHours(dayStart, Math.min(hourOffset, 16)),
            );

            const space = MOCK_SPACES[(day + eventNum) % MOCK_SPACES.length];
            const meetingContent = getRandomMeetingContent();
            const meetingInfo = generateMeetingUrl();

            // Get colleagues to join
            const colleagues = MOCK_STAFF.filter(
                (s) => s.email !== ACTIVE_USER.email,
            ).slice(0, predictableRandomInt(4) + 2); // 2-5 colleagues

            const attendees = [ACTIVE_USER, ...colleagues].map(
                (attendee, idx) => ({
                    ...attendee,
                    organizer: idx === 0,
                    checked_in: predictableRandomInt(99999) % 3 === 0,
                    response_status:
                        idx === 0
                            ? 'accepted'
                            : predictableRandomInt(99999) % 2 === 0
                              ? 'accepted'
                              : 'tentative',
                }),
            );

            const event_start = eventTime;
            const event_end = getUnixTime(
                addMinutes(new Date(event_start * 1000), 60),
            );

            events.push({
                id: `active-user-daily-${day}-${eventNum}`,
                status: 'confirmed',
                host: ACTIVE_USER.email,
                calendar: `calendar-${ACTIVE_USER.department?.toLowerCase() || 'engineering'}`,
                creator: ACTIVE_USER.email,
                attendees,
                title: meetingContent.title,
                body: meetingContent.body,
                private: eventNum === 0, // Make first event of day private sometimes
                event_start,
                event_end,
                timezone: 'Australia/Sydney',
                all_day: false,
                location: space?.name || 'TBD',
                recurring: predictableRandomInt(10) === 0,
                recurrence: {},
                attachments: {},
                system: space,
                meeting_url: meetingInfo.url,
                meeting_id: meetingInfo.id,
                meeting_provider: meetingInfo.provider,
                extension_data: {
                    category: meetingContent.category,
                    catering: [],
                    setup: 0,
                    breakdown: 0,
                    cost_center:
                        ACTIVE_USER.department
                            ?.toLowerCase()
                            .replace(/\s+/g, '-') || 'engineering',
                    priority: eventNum === 0 ? 'high' : 'normal', // First event of day is high priority
                    estimated_attendees: attendees.length,
                    actual_attendees: attendees.length,
                },
            });
        }
    }

    // Remove duplicates and sort by time
    const uniqueEvents = events.filter(
        (event, index, array) =>
            index === array.findIndex((e) => e.id === event.id),
    );

    return uniqueEvents.sort((a, b) => a.event_start - b.event_start);
})();

export const event_spaces = MOCK_SPACES.map((space) => space.id);
