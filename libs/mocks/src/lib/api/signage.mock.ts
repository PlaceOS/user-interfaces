import { predictableRandomInt } from '@placeos/common';
import { registerMockEndpoint } from '@placeos/ts-client';
import { addDays, getUnixTime, subDays } from 'date-fns';
import { MOCK_STAFF } from './users.data';
import { MOCK_BUILDINGS, MOCK_LEVELS, MOCK_ZONES } from './zone.data';

// Content Categories and Types
export const CONTENT_CATEGORIES = [
    { id: 'announcements', name: 'Announcements', color: '#FF5722' },
    { id: 'events', name: 'Events & Meetings', color: '#2196F3' },
    { id: 'wayfinding', name: 'Wayfinding', color: '#4CAF50' },
    { id: 'emergency', name: 'Emergency', color: '#F44336' },
    { id: 'corporate', name: 'Corporate Updates', color: '#673AB7' },
    { id: 'wellness', name: 'Wellness & Safety', color: '#FF9800' },
    { id: 'social', name: 'Social & Community', color: '#E91E63' },
    { id: 'weather', name: 'Weather & External', color: '#607D8B' },
];

export const MEDIA_TYPES = [
    'image',
    'video',
    'html',
    'text',
    'slideshow',
    'live_feed',
    'weather',
    'calendar',
];

export const DISPLAY_ORIENTATIONS = ['landscape', 'portrait', 'square'];
export const DISPLAY_RESOLUTIONS = [
    '1920x1080',
    '1080x1920',
    '3840x2160',
    '2160x3840',
    '1366x768',
    '768x1366',
];

// Mock Content Templates
const CONTENT_TEMPLATES = [
    {
        category: 'announcements',
        title: 'Weekly Office Updates',
        description: 'Important announcements and office news',
        content: {
            headline: 'This Week in the Office',
            items: [
                'New parking guidelines effective Monday',
                'Kitchen renovation completed on Level 2',
                'Fire drill scheduled for Thursday 2PM',
                'Coffee machine maintenance this Friday',
            ],
        },
        duration: 15000, // 15 seconds
    },
    {
        category: 'events',
        title: "Today's Meetings",
        description: 'Real-time meeting room schedule display',
        content: {
            template: 'meeting_schedule',
            refresh_interval: 300000, // 5 minutes
            show_next_hours: 8,
        },
        duration: 30000, // 30 seconds
    },
    {
        category: 'wayfinding',
        title: 'Building Directory',
        description: 'Interactive building navigation',
        content: {
            floors: [
                {
                    level: 'Ground',
                    departments: ['Reception', 'Cafe', 'Security'],
                },
                {
                    level: 'Level 1',
                    departments: ['Engineering', 'Product', 'Design'],
                },
                { level: 'Level 2', departments: ['Sales', 'Marketing', 'HR'] },
                {
                    level: 'Level 3',
                    departments: ['Finance', 'Legal', 'Executive'],
                },
            ],
            emergency_exits: [
                'North Stairwell',
                'South Stairwell',
                'Main Elevator',
            ],
        },
        duration: 0, // Interactive - no auto advance
    },
    {
        category: 'emergency',
        title: 'Emergency Procedures',
        description: 'Safety information and emergency contacts',
        content: {
            type: 'emergency_info',
            contacts: [
                { role: 'Emergency', number: '000' },
                { role: 'Building Security', number: '1234' },
                { role: 'First Aid', number: '5678' },
            ],
            assembly_point: 'Car Park Level 1',
            procedures: [
                'Stay calm and follow instructions',
                'Use stairs, not elevators',
                'Proceed to assembly point',
                'Wait for all-clear signal',
            ],
        },
        duration: 45000, // 45 seconds
    },
    {
        category: 'corporate',
        title: 'Company Performance Dashboard',
        description: 'Key metrics and achievements',
        content: {
            metrics: [
                { label: 'Projects Delivered', value: '127', trend: '+12%' },
                { label: 'Client Satisfaction', value: '94%', trend: '+3%' },
                { label: 'Team Members', value: '850', trend: '+15%' },
                { label: 'Offices Worldwide', value: '12', trend: 'stable' },
            ],
            achievement: 'Certified Great Place to Work 2024',
        },
        duration: 20000, // 20 seconds
    },
    {
        category: 'wellness',
        title: 'Wellness Tips',
        description: 'Daily wellness and safety reminders',
        content: {
            tips: [
                'Remember to take regular breaks from your screen',
                'Stay hydrated - aim for 8 glasses of water daily',
                'Use proper ergonomics at your workstation',
                'Take the stairs for extra exercise',
                'Practice good hand hygiene',
            ],
            wellness_metric: 'Steps Goal: 10,000 daily',
        },
        duration: 12000, // 12 seconds
    },
    {
        category: 'social',
        title: 'Team Celebrations',
        description: 'Celebrating our people and achievements',
        content: {
            celebrations: [
                'Happy Birthday Sarah Chen! 🎉',
                'Congratulations to the Sales team on Q4 results! 🏆',
                'Welcome new team members joining this month! 👋',
                'Tech Talk Friday: AI in the Workplace - 3PM Conference Room A',
            ],
            upcoming_events: [
                'Monthly Town Hall - Next Tuesday 10AM',
                'Volunteer Day - Community Garden - Saturday',
                'Holiday Party Planning - Committee Meeting Thursday',
            ],
        },
        duration: 18000, // 18 seconds
    },
    {
        category: 'weather',
        title: 'Weather & Transport',
        description: 'Current weather and transport updates',
        content: {
            weather: {
                current: '22°C Partly Cloudy',
                forecast: 'High 25°C, Low 18°C',
                uv_index: '6 - High',
                rain_chance: '20%',
            },
            transport: [
                'Train services operating normally',
                'Light delays on Bus Route 123',
                'Bike sharing stations: 85% available',
            ],
        },
        duration: 25000, // 25 seconds
    },
];

// Generate Mock Displays
function generateMockDisplays() {
    const displays = [];
    let displayId = 1;

    MOCK_BUILDINGS.forEach((building) => {
        const levels = MOCK_LEVELS.filter(
            (level) => level.parent_id === building.id,
        );

        levels.forEach((level) => {
            // Generate 2-4 displays per level
            const displayCount = predictableRandomInt(4, 2);

            for (let i = 0; i < displayCount; i++) {
                const orientation =
                    DISPLAY_ORIENTATIONS[
                        predictableRandomInt(DISPLAY_ORIENTATIONS.length)
                    ];
                const resolution =
                    DISPLAY_RESOLUTIONS.filter(
                        (res) =>
                            (orientation === 'portrait' &&
                                res.includes('x1920')) ||
                            (orientation === 'landscape' &&
                                res.includes('1920x')) ||
                            orientation === 'square',
                    )[0] || '1920x1080';

                const display = {
                    id: `display-${String(displayId).padStart(3, '0')}`,
                    name: `${level.name} Display ${String.fromCharCode(65 + i)}`,
                    description: `Digital signage display located in ${level.name} of ${building.name}`,

                    // Location
                    building_id: building.id,
                    level_id: level.id,
                    zone_id: building.parent_id,
                    location: {
                        building: building.name,
                        level: level.name,
                        area: [
                            'Main Corridor',
                            'Reception Area',
                            'Break Room',
                            'Elevator Lobby',
                            'Meeting Room Entrance',
                        ][predictableRandomInt(5)],
                        coordinates: {
                            x: predictableRandomInt(100, 10),
                            y: predictableRandomInt(100, 10),
                        },
                    },

                    // Hardware specifications
                    hardware: {
                        model: [
                            'Samsung QM55R',
                            'LG 55SM5KE',
                            'NEC MultiSync V554',
                            'Sharp PN-M501',
                        ][predictableRandomInt(4)],
                        size_inches: [43, 50, 55, 65, 75][
                            predictableRandomInt(5)
                        ],
                        resolution,
                        orientation,
                        brightness: predictableRandomInt(500, 300), // nits
                        contrast_ratio: '5000:1',
                        viewing_angle: '178°',
                        operating_hours: predictableRandomInt(50000, 30000),
                    },

                    // Network and connectivity
                    network: {
                        ip_address: `192.168.${predictableRandomInt(255, 1)}.${predictableRandomInt(255, 1)}`,
                        mac_address: `00:1B:44:${Math.random().toString(16).substr(2, 2).toUpperCase()}:${Math.random().toString(16).substr(2, 2).toUpperCase()}:${Math.random().toString(16).substr(2, 2).toUpperCase()}`,
                        connection_type: 'Ethernet',
                        bandwidth: '100 Mbps',
                        wifi_enabled: predictableRandomInt(2) === 1,
                    },

                    // Status and health
                    status: ['online', 'offline', 'maintenance', 'error'][
                        predictableRandomInt(10) === 0
                            ? predictableRandomInt(4)
                            : 0
                    ], // 90% online
                    health: {
                        cpu_usage: predictableRandomInt(30, 5),
                        memory_usage: predictableRandomInt(60, 20),
                        storage_used: predictableRandomInt(80, 30),
                        temperature: predictableRandomInt(45, 25),
                        uptime_hours: predictableRandomInt(720, 1), // Up to 30 days
                        last_reboot: getUnixTime(
                            subDays(Date.now(), predictableRandomInt(30, 1)),
                        ),
                    },

                    // Display settings
                    settings: {
                        brightness: predictableRandomInt(100, 60),
                        volume:
                            orientation === 'portrait'
                                ? 0
                                : predictableRandomInt(50, 10),
                        power_schedule: {
                            on_time: '06:00',
                            off_time: '22:00',
                            weekend_mode: 'reduced_hours', // 08:00-18:00
                        },
                        sleep_mode: predictableRandomInt(2) === 1,
                        auto_rotation: false,
                        screensaver: {
                            enabled: true,
                            timeout_minutes: 30,
                            type: 'clock_and_weather',
                        },
                    },

                    // Content preferences
                    content_settings: {
                        allowed_categories: CONTENT_CATEGORIES.slice(
                            0,
                            predictableRandomInt(CONTENT_CATEGORIES.length, 3),
                        ).map((c) => c.id),
                        prohibited_content: ['external_feeds', 'social_media'],
                        emergency_override: true,
                        local_content_cache: true,
                        max_file_size_mb: 50,
                        supported_formats: ['jpg', 'png', 'mp4', 'html', 'pdf'],
                    },

                    // Maintenance and monitoring
                    maintenance: {
                        last_service: getUnixTime(
                            subDays(Date.now(), predictableRandomInt(90, 7)),
                        ),
                        next_service: getUnixTime(
                            addDays(Date.now(), predictableRandomInt(180, 30)),
                        ),
                        service_provider: 'TechCorp Solutions',
                        warranty_expiry: getUnixTime(
                            addDays(Date.now(), predictableRandomInt(365, 180)),
                        ),
                        cleaning_schedule: 'weekly',
                        firmware_version: `v${predictableRandomInt(5, 1)}.${predictableRandomInt(9, 0)}.${predictableRandomInt(99, 10)}`,
                        last_update: getUnixTime(
                            subDays(Date.now(), predictableRandomInt(60, 7)),
                        ),
                    },

                    // Analytics and usage
                    analytics: {
                        daily_views: predictableRandomInt(500, 50),
                        interaction_count:
                            orientation !== 'portrait'
                                ? predictableRandomInt(50, 5)
                                : 0,
                        content_engagement: `${predictableRandomInt(85, 45)}%`,
                        error_count_24h: predictableRandomInt(3, 0),
                        avg_content_display_time: predictableRandomInt(20, 8),
                    },

                    // Timestamps
                    created_at: getUnixTime(
                        subDays(Date.now(), predictableRandomInt(365, 30)),
                    ),
                    updated_at: getUnixTime(
                        subDays(Date.now(), predictableRandomInt(7, 0)),
                    ),
                    last_seen: getUnixTime(
                        subDays(Date.now(), predictableRandomInt(1, 0)),
                    ),
                };

                displays.push(display);
                displayId++;
            }
        });
    });

    return displays;
}

// Generate Mock Media Content
function generateMockMedia() {
    const media = [];
    let mediaId = 1;

    CONTENT_TEMPLATES.forEach((template, templateIndex) => {
        // Create 2-3 variations of each template
        const variations = predictableRandomInt(3, 2);

        for (let v = 0; v < variations; v++) {
            const mediaItem = {
                id: `media-${String(mediaId).padStart(3, '0')}`,
                name: `${template.title} ${v > 0 ? `v${v + 1}` : ''}`,
                description: template.description,
                category: template.category,
                type: MEDIA_TYPES[predictableRandomInt(MEDIA_TYPES.length)],

                // File details
                file: {
                    filename: `${template.title.toLowerCase().replace(/\s+/g, '_')}_${mediaId}.${template.category === 'weather' ? 'html' : 'jpg'}`,
                    size_bytes: predictableRandomInt(5000000, 100000), // 100KB - 5MB
                    mime_type:
                        template.category === 'weather'
                            ? 'text/html'
                            : 'image/jpeg',
                    url: `https://signage-assets.place.tech/media/${mediaId}`,
                    thumbnail_url: `https://signage-assets.place.tech/thumbs/${mediaId}_thumb.jpg`,
                    duration_seconds: template.duration / 1000 || null,
                },

                // Content metadata
                content: template.content,
                tags: [template.category, 'corporate', 'approved'],

                // Display properties
                display_properties: {
                    duration_ms: template.duration,
                    transition: ['fade', 'slide_left', 'slide_right', 'zoom'][
                        predictableRandomInt(4)
                    ],
                    background_color: '#ffffff',
                    text_color: '#333333',
                    font_family: 'Inter, sans-serif',
                    font_size: 'responsive',
                    aspect_ratio: '16:9',
                },

                // Scheduling and targeting
                scheduling: {
                    start_date: getUnixTime(
                        subDays(Date.now(), predictableRandomInt(30, 0)),
                    ),
                    end_date: getUnixTime(
                        addDays(Date.now(), predictableRandomInt(90, 30)),
                    ),
                    time_slots: [
                        { start: '06:00', end: '10:00', days: [1, 2, 3, 4, 5] },
                        { start: '12:00', end: '14:00', days: [1, 2, 3, 4, 5] },
                        { start: '16:00', end: '19:00', days: [1, 2, 3, 4, 5] },
                    ],
                    priority:
                        template.category === 'emergency'
                            ? 10
                            : predictableRandomInt(5, 1),
                    frequency: predictableRandomInt(3, 1), // times per hour
                },

                // Approval and compliance
                approval: {
                    status: ['approved', 'pending', 'rejected'][
                        template.category === 'emergency'
                            ? 0
                            : predictableRandomInt(3)
                    ],
                    approved_by: 'facilities.manager@place.tech',
                    approved_date: getUnixTime(
                        subDays(Date.now(), predictableRandomInt(14, 1)),
                    ),
                    compliance_checked: true,
                    brand_guidelines: template.category !== 'emergency',
                },

                // Analytics
                performance: {
                    impressions: predictableRandomInt(5000, 500),
                    unique_views: predictableRandomInt(2000, 200),
                    engagement_rate: `${predictableRandomInt(75, 25)}%`,
                    average_view_time: predictableRandomInt(
                        template.duration / 1000,
                        3,
                    ),
                    skip_rate: `${predictableRandomInt(15, 2)}%`,
                },

                // Metadata
                created_by: 'marketing.team@place.tech',
                created_at: getUnixTime(
                    subDays(Date.now(), predictableRandomInt(60, 7)),
                ),
                updated_at: getUnixTime(
                    subDays(Date.now(), predictableRandomInt(7, 0)),
                ),
                version: `v1.${v}`,
                status: 'active',
            };

            media.push(mediaItem);
            mediaId++;
        }
    });

    return media;
}

// Generate Mock Playlists
function generateMockPlaylists(displays, media) {
    const playlists = [];
    let playlistId = 1;

    // Create building-wide playlists
    MOCK_BUILDINGS.forEach((building) => {
        const buildingDisplays = displays.filter(
            (d) => d.building_id === building.id,
        );

        // General playlist for all displays in building
        const generalPlaylist = {
            id: `playlist-${String(playlistId).padStart(3, '0')}`,
            name: `${building.name} General Content`,
            description: `Default content rotation for all displays in ${building.name}`,

            // Content items (randomly select 5-8 media items)
            items: media
                .filter((m) =>
                    ['announcements', 'corporate', 'wellness'].includes(
                        m.category,
                    ),
                )
                .sort(() => 0.5 - Math.random())
                .slice(0, predictableRandomInt(8, 5))
                .map((mediaItem, index) => ({
                    id: `item-${playlistId}-${index + 1}`,
                    media_id: mediaItem.id,
                    order: index + 1,
                    duration_override: null,
                    start_date: mediaItem.scheduling.start_date,
                    end_date: mediaItem.scheduling.end_date,
                    conditions: {
                        weather: null,
                        occupancy: null,
                        time_based: true,
                    },
                })),

            // Playlist settings
            settings: {
                loop: true,
                shuffle: false,
                auto_advance: true,
                emergency_interruption: true,
                volume_control: true,
                transition_effect: 'fade',
                default_duration: 15000,
            },

            // Targeting
            target: {
                displays: buildingDisplays.map((d) => d.id),
                zones: [building.id],
                categories: ['lobby', 'corridor', 'general'],
            },

            // Scheduling
            schedule: {
                active_hours: {
                    start: '06:00',
                    end: '22:00',
                    timezone: 'Australia/Sydney',
                },
                days: [1, 2, 3, 4, 5], // Weekdays
                override_holidays: false,
            },

            // Metadata
            created_by: 'facilities.manager@place.tech',
            created_at: getUnixTime(
                subDays(Date.now(), predictableRandomInt(30, 7)),
            ),
            updated_at: getUnixTime(
                subDays(Date.now(), predictableRandomInt(7, 0)),
            ),
            status: 'active',
            priority: 5,
        };

        playlists.push(generalPlaylist);
        playlistId++;

        // Meeting room playlist (if building has meeting rooms)
        if (predictableRandomInt(2) === 0) {
            const meetingPlaylist = {
                id: `playlist-${String(playlistId).padStart(3, '0')}`,
                name: `${building.name} Meeting Rooms`,
                description: `Content specifically for meeting room displays in ${building.name}`,

                items: media
                    .filter((m) =>
                        ['events', 'wayfinding', 'announcements'].includes(
                            m.category,
                        ),
                    )
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 4)
                    .map((mediaItem, index) => ({
                        id: `item-${playlistId}-${index + 1}`,
                        media_id: mediaItem.id,
                        order: index + 1,
                        duration_override: null,
                        start_date: mediaItem.scheduling.start_date,
                        end_date: mediaItem.scheduling.end_date,
                    })),

                target: {
                    displays: buildingDisplays
                        .filter((d) => d.location.area.includes('Meeting'))
                        .map((d) => d.id),
                    zones: [building.id],
                    categories: ['meeting_room'],
                },

                settings: {
                    loop: true,
                    auto_advance: true,
                    emergency_interruption: true,
                    show_room_schedule: true,
                    integration: 'calendar_api',
                },

                created_by: 'it.admin@place.tech',
                created_at: getUnixTime(
                    subDays(Date.now(), predictableRandomInt(21, 3)),
                ),
                updated_at: getUnixTime(
                    subDays(Date.now(), predictableRandomInt(5, 0)),
                ),
                status: 'active',
                priority: 7,
            };

            playlists.push(meetingPlaylist);
            playlistId++;
        }
    });

    // Emergency playlist (organization-wide)
    const emergencyPlaylist = {
        id: `playlist-emergency`,
        name: 'Emergency Broadcast',
        description: 'High-priority emergency communications for all displays',

        items: media
            .filter((m) => m.category === 'emergency')
            .map((mediaItem, index) => ({
                id: `emergency-item-${index + 1}`,
                media_id: mediaItem.id,
                order: index + 1,
                duration_override: null,
            })),

        target: {
            displays: displays.map((d) => d.id), // All displays
            zones: ['zone-EmWFTjuYExK'],
            categories: ['emergency'],
        },

        settings: {
            loop: true,
            interrupt_all: true,
            max_volume: true,
            ignore_schedule: true,
            manual_dismiss_only: true,
        },

        created_by: 'security.manager@place.tech',
        created_at: getUnixTime(subDays(Date.now(), 100)),
        updated_at: getUnixTime(subDays(Date.now(), 50)),
        status: 'standby', // Activated only during emergencies
        priority: 10,
    };

    playlists.push(emergencyPlaylist);

    return playlists;
}

// Generate Mock Triggers
function generateMockTriggers() {
    return [
        {
            id: 'trigger-001',
            name: 'Emergency Alert System',
            description: 'Automatically broadcast emergency content',
            type: 'emergency',
            conditions: {
                api_endpoint: '/api/emergency/status',
                trigger_value: 'active',
                check_interval: 30, // seconds
            },
            actions: {
                activate_playlist: 'playlist-emergency',
                interrupt_all: true,
                volume_override: 100,
                priority: 10,
            },
            active: true,
            last_triggered: null,
        },
        {
            id: 'trigger-002',
            name: 'Meeting Room Booking Update',
            description: 'Update meeting room displays when bookings change',
            type: 'calendar_sync',
            conditions: {
                calendar_change: true,
                check_interval: 300, // 5 minutes
                rooms_only: true,
            },
            actions: {
                refresh_content: true,
                update_schedule_display: true,
            },
            active: true,
            last_triggered: getUnixTime(subDays(Date.now(), 0.5)),
        },
        {
            id: 'trigger-003',
            name: 'Weather Content Update',
            description: 'Update weather displays every 30 minutes',
            type: 'scheduled',
            conditions: {
                schedule: '*/30 * * * *', // Every 30 minutes
                weather_api: 'https://api.weather.com/current',
            },
            actions: {
                update_weather_content: true,
                refresh_transport_info: true,
            },
            active: true,
            last_triggered: getUnixTime(subDays(Date.now(), 0.02)), // ~30 min ago
        },
        {
            id: 'trigger-004',
            name: 'After Hours Display Schedule',
            description: 'Switch to minimal content outside business hours',
            type: 'time_based',
            conditions: {
                time_range: { start: '22:00', end: '06:00' },
                weekends: true,
                holidays: true,
            },
            actions: {
                activate_screensaver: true,
                reduce_brightness: 30,
                minimal_content: true,
            },
            active: true,
            last_triggered: getUnixTime(subDays(Date.now(), 1)),
        },
    ];
}

// Create all mock data
const MOCK_DISPLAYS = generateMockDisplays();
const MOCK_MEDIA = generateMockMedia();
const MOCK_PLAYLISTS = generateMockPlaylists(MOCK_DISPLAYS, MOCK_MEDIA);
const MOCK_PLUGINS = [
    {
        id: 'weather',
        name: 'Weather',
        description: 'Current weather signage widget',
        uri: '/plugins/weather/index.html',
        enabled: true,
        defaults: { units: 'metric' },
        params: {
            location: {
                type: 'string',
                title: 'Location',
                default: 'Sydney',
            },
        },
    },
    {
        id: 'clock',
        name: 'Clock',
        description: 'Clock signage widget',
        uri: '/plugins/clock/index.html',
        enabled: true,
        defaults: { format: '24h' },
        params: {},
    },
];
const MOCK_TRIGGERS = generateMockTriggers();

const SIGNAGE_GROUPS: Array<{ group: any; permissions: number }> = [
    {
        group: {
            id: 'signage-group-facilities',
            name: 'Facilities Signage',
            description: 'Facility-managed signage content',
            subsystems: ['signage'],
        },
        permissions: 0xff,
    },
    {
        group: {
            id: 'signage-group-marketing',
            name: 'Marketing Signage',
            description: 'Marketing managed signage content',
            subsystems: ['signage'],
        },
        permissions: 0x81,
    },
];

const SIGNAGE_GROUP_USERS: any[] = [
    {
        group_id: 'signage-group-facilities',
        user_id: MOCK_STAFF[0].email,
        permissions: 0xff,
        user: MOCK_STAFF[0],
    },
    {
        group_id: 'signage-group-facilities',
        user_id: MOCK_STAFF[1].email,
        permissions: 0x41,
        user: MOCK_STAFF[1],
    },
];

const SIGNAGE_GROUP_ZONES: any[] = [
    {
        group_id: 'signage-group-facilities',
        zone_id: MOCK_BUILDINGS[0].id,
        permissions: 0xff,
        deny: false,
        zone: MOCK_BUILDINGS[0],
    },
];

function listSignageMockGroups(query_params: Record<string, string> = {}) {
    const groups = SIGNAGE_GROUPS.map((item) => item.group).filter((group) => {
        if (
            query_params.subsystem &&
            !group.subsystems?.includes(query_params.subsystem)
        ) {
            return false;
        }
        if (
            query_params.parent_id &&
            group.parent_id !== query_params.parent_id
        ) {
            return false;
        }
        if (query_params.q) {
            const search = query_params.q.toLowerCase();
            return (
                group.name.toLowerCase().includes(search) ||
                group.description.toLowerCase().includes(search)
            );
        }
        return true;
    });
    const limit = Number(query_params.limit || groups.length) || groups.length;
    const offset = Number(query_params.offset || 0) || 0;
    return groups.slice(offset, offset + limit);
}

function filterByGroup<T>(items: T[], group_id = '') {
    if (!group_id || group_id === SIGNAGE_GROUPS[0].group.id) return items;
    return items.filter((_, index) => index % 2 === 0);
}

/**
 * Groups holding an item, matching the index parity `filterByGroup` uses to
 * fake group scoping.
 */
function sharedWithGroups(items: any[], id: string) {
    const index = items.findIndex((item) => item.id === id);
    if (index < 0) return [];
    const groups = index % 2 === 0 ? SIGNAGE_GROUPS : [SIGNAGE_GROUPS[0]];
    return groups.map(({ group }) => ({ id: group.id, name: group.name }));
}

function toEngineMedia(item: any) {
    const is_video = item.type === 'video';
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        media_type: is_video ? 'video' : 'image',
        media_uri: item.file?.url,
        media_id: '',
        thumbnail_id: item.file?.thumbnail_url ? item.id + '-thumb' : '',
        orientation: 'landscape',
        play_time: item.display_properties?.duration_ms || 15000,
        video_length: is_video ? item.display_properties?.duration_ms : 0,
        created_at: item.created_at,
        updated_at: item.updated_at,
        valid_from: item.scheduling?.start_date,
        valid_until: item.scheduling?.end_date,
        tags: item.tags || [],
    };
}

function toEnginePlaylist(item: any) {
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        enabled: item.status !== 'disabled',
        random: !!item.settings?.shuffle,
        default_duration: item.settings?.default_duration || 15000,
        default_animation: 1,
        orientation: 'landscape',
        play_count: 0,
        created_at: item.created_at,
        updated_at: item.updated_at,
    };
}

function playlistMediaResponse(playlist_id: string, approved = false) {
    const playlist = MOCK_PLAYLISTS.find((item) => item.id === playlist_id);
    return {
        id: `${playlist_id}-media`,
        playlist_id,
        items: (playlist?.items || []).map((item) => item.media_id),
        schedules: (playlist?.items || []).map((item) => ({
            id: item.id,
            item_id: item.media_id,
            schedules: [],
        })),
        approved,
        approval_requested: false,
        updated_at: playlist?.updated_at || getUnixTime(Date.now()),
    };
}

function signageDisplay(display_id: string) {
    if (display_id === 'display-1') {
        throw { status: 404, message: 'Display not found' };
    }
    const display =
        MOCK_DISPLAYS.find((item) => item.id === display_id) ||
        MOCK_DISPLAYS[0];
    const playlists = MOCK_PLAYLISTS.filter(
        (playlist) =>
            playlist.target?.displays?.includes(display.id) ||
            playlist.target?.zones?.includes(display.zone_id),
    ).slice(0, 3);
    const mapped_playlists = playlists.length
        ? playlists
        : MOCK_PLAYLISTS.slice(0, 2);
    const media_ids = [
        ...new Set(
            mapped_playlists.flatMap((playlist) =>
                playlist.items.map((item) => item.media_id),
            ),
        ),
    ];
    return {
        id: display_id,
        zones: [display.zone_id, display.building_id].filter(Boolean),
        playlist_mappings: {
            [display_id]: mapped_playlists.map((playlist) => playlist.id),
            [display.zone_id]: [],
        },
        playlist_config: Object.fromEntries(
            mapped_playlists.map((playlist) => [
                playlist.id,
                [
                    toEnginePlaylist(playlist),
                    playlist.items.map((item) => item.media_id),
                ],
            ]),
        ),
        playlist_media: media_ids
            .map((id) => MOCK_MEDIA.find((item) => item.id === id))
            .filter((item) => !!item)
            .map(toEngineMedia),
        plugins: MOCK_PLUGINS,
    };
}

// Add signage zones to the global zones array
export function registerMockSignage() {
    // MOCK_ZONES is already imported at the top of the file

    // Add signage zone entries for displays
    MOCK_DISPLAYS.forEach((display, index) => {
        if (index < 10) {
            // Only add first 10 to avoid clutter
            MOCK_ZONES.push({
                id: display.id,
                tags: ['signage', 'display'],
                display_name: display.name.split(' ').slice(-2).join(' '), // Extract "Display A" from "Level 1 Display A"
                name: display.name,
                parent_id: display.building_id,
                description: display.description,
                hardware: display.hardware,
                status: display.status,
                location: display.location,
            });
        }
    });

    // Register API endpoints

    registerMockEndpoint({
        path: '/api/engine/v2/groups/current',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            if (request.query_params?.subsystem === 'signage') {
                return SIGNAGE_GROUPS;
            }
            return [];
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/groups',
        metadata: {},
        method: 'GET',
        callback: (request) => listSignageMockGroups(request.query_params),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/groups',
        metadata: {},
        method: 'POST',
        callback: (request) => {
            const group = {
                ...request.body,
                id: `signage-group-${Date.now()}`,
                subsystems: request.body?.subsystems || ['signage'],
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            };
            SIGNAGE_GROUPS.push({ group, permissions: 0xff });
            return group;
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/groups/:id',
        metadata: {},
        method: 'PATCH',
        callback: (request) => {
            const item = SIGNAGE_GROUPS.find(
                ({ group }) => group.id === request.route_params.id,
            );
            if (!item) throw { status: 404, message: 'Group not found' };
            item.group = {
                ...item.group,
                ...request.body,
                updated_at: new Date().toISOString(),
            };
            return item.group;
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/groups/:id',
        metadata: {},
        method: 'DELETE',
        callback: (request) => {
            const index = SIGNAGE_GROUPS.findIndex(
                ({ group }) => group.id === request.route_params.id,
            );
            if (index >= 0) SIGNAGE_GROUPS.splice(index, 1);
            return {};
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/group_users',
        metadata: {},
        method: 'GET',
        callback: (request) =>
            SIGNAGE_GROUP_USERS.filter(
                (item) => item.group_id === request.query_params?.group_id,
            ),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/group_users',
        metadata: {},
        method: 'POST',
        callback: (request) => {
            const user = MOCK_STAFF.find(
                (item) =>
                    item.email === request.body.user_id ||
                    item.id === request.body.user_id,
            );
            const item = {
                ...request.body,
                user_id: request.body.user_id,
                permissions: request.body.permissions || 0,
                user,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            };
            SIGNAGE_GROUP_USERS.push(item);
            return item;
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/group_users/:user_id/:group_id',
        metadata: {},
        method: 'PATCH',
        callback: (request) => {
            const user_id = decodeURIComponent(request.route_params.user_id);
            const group_id = decodeURIComponent(request.route_params.group_id);
            const item = SIGNAGE_GROUP_USERS.find(
                (row) => row.user_id === user_id && row.group_id === group_id,
            );
            if (!item) throw { status: 404, message: 'Group user not found' };
            Object.assign(item, request.body, {
                updated_at: new Date().toISOString(),
            });
            return item;
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/group_users/:user_id/:group_id',
        metadata: {},
        method: 'DELETE',
        callback: (request) => {
            const user_id = decodeURIComponent(request.route_params.user_id);
            const group_id = decodeURIComponent(request.route_params.group_id);
            const index = SIGNAGE_GROUP_USERS.findIndex(
                (row) => row.user_id === user_id && row.group_id === group_id,
            );
            if (index >= 0) SIGNAGE_GROUP_USERS.splice(index, 1);
            return {};
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/group_zones',
        metadata: {},
        method: 'GET',
        callback: (request) =>
            SIGNAGE_GROUP_ZONES.filter(
                (item) => item.group_id === request.query_params?.group_id,
            ),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/group_zones',
        metadata: {},
        method: 'POST',
        callback: (request) => {
            const zone = MOCK_ZONES.find(
                (item) => item.id === request.body.zone_id,
            );
            const item = {
                ...request.body,
                permissions: request.body.permissions || 0,
                deny: !!request.body.deny,
                zone,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
            };
            SIGNAGE_GROUP_ZONES.push(item);
            return item;
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/group_zones/:group_id/:zone_id',
        metadata: {},
        method: 'PATCH',
        callback: (request) => {
            const group_id = decodeURIComponent(request.route_params.group_id);
            const zone_id = decodeURIComponent(request.route_params.zone_id);
            const item = SIGNAGE_GROUP_ZONES.find(
                (row) => row.group_id === group_id && row.zone_id === zone_id,
            );
            if (!item) throw { status: 404, message: 'Group zone not found' };
            Object.assign(item, request.body, {
                updated_at: new Date().toISOString(),
            });
            return item;
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/group_zones/:group_id/:zone_id',
        metadata: {},
        method: 'DELETE',
        callback: (request) => {
            const group_id = decodeURIComponent(request.route_params.group_id);
            const zone_id = decodeURIComponent(request.route_params.zone_id);
            const index = SIGNAGE_GROUP_ZONES.findIndex(
                (row) => row.group_id === group_id && row.zone_id === zone_id,
            );
            if (index >= 0) SIGNAGE_GROUP_ZONES.splice(index, 1);
            return {};
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/media',
        metadata: {},
        method: 'GET',
        callback: (request) =>
            filterByGroup(MOCK_MEDIA, request.query_params?.group_id).map(
                toEngineMedia,
            ),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/media/tags',
        metadata: {},
        method: 'GET',
        callback: (request) => [
            ...new Set(
                filterByGroup(MOCK_MEDIA, request.query_params?.group_id)
                    .flatMap((item) => item.tags || [])
                    .filter((tag) => !!tag),
            ),
        ],
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/media/tag_counts',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const counts: Record<string, number> = {};
            for (const item of filterByGroup(
                MOCK_MEDIA,
                request.query_params?.group_id,
            )) {
                for (const tag of item.tags || []) {
                    if (!tag) continue;
                    counts[tag] = (counts[tag] || 0) + 1;
                }
            }
            return counts;
        },
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/media',
        metadata: {},
        method: 'POST',
        callback: (request) => ({
            ...request.body,
            id: `media-${Date.now()}`,
            created_at: getUnixTime(Date.now()),
            updated_at: getUnixTime(Date.now()),
        }),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/media/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => ({
            ...toEngineMedia(
                MOCK_MEDIA.find((item) => item.id === request.route_params.id),
            ),
            shared_with: sharedWithGroups(MOCK_MEDIA, request.route_params.id),
        }),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/media/:id',
        metadata: {},
        method: 'PATCH',
        callback: (request) => ({
            ...toEngineMedia(
                MOCK_MEDIA.find((item) => item.id === request.route_params.id),
            ),
            ...request.body,
            updated_at: getUnixTime(Date.now()),
        }),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/media/:id',
        metadata: {},
        method: 'DELETE',
        callback: () => ({}),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/media/:id/thumbnail',
        metadata: {},
        method: 'GET',
        callback: () => ({}),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/media/share',
        metadata: {},
        method: 'POST',
        callback: () => ({}),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/plugins',
        metadata: {},
        method: 'GET',
        callback: () => MOCK_PLUGINS,
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/plugins/:id',
        metadata: {},
        method: 'GET',
        callback: (request) =>
            MOCK_PLUGINS.find(
                (plugin) => plugin.id === request.route_params.id,
            ) || {},
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists',
        metadata: {},
        method: 'GET',
        callback: (request) =>
            filterByGroup(MOCK_PLAYLISTS, request.query_params?.group_id).map(
                toEnginePlaylist,
            ),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/approvers',
        metadata: {},
        method: 'GET',
        callback: (request) =>
            SIGNAGE_GROUP_USERS.filter(
                (item) => item.group_id === request.query_params?.group_id,
            ).map((item) => ({
                id: item.user?.email || item.user_id,
                name: item.user?.name || item.user_id,
            })),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists',
        metadata: {},
        method: 'POST',
        callback: (request) => ({
            ...request.body,
            id: `playlist-${Date.now()}`,
            created_at: getUnixTime(Date.now()),
            updated_at: getUnixTime(Date.now()),
        }),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => ({
            ...toEnginePlaylist(
                MOCK_PLAYLISTS.find(
                    (item) => item.id === request.route_params.id,
                ),
            ),
            shared_with: sharedWithGroups(
                MOCK_PLAYLISTS,
                request.route_params.id,
            ),
        }),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/:id',
        metadata: {},
        method: 'PATCH',
        callback: (request) => ({
            ...toEnginePlaylist(
                MOCK_PLAYLISTS.find(
                    (item) => item.id === request.route_params.id,
                ),
            ),
            ...request.body,
            updated_at: getUnixTime(Date.now()),
        }),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/:id',
        metadata: {},
        method: 'DELETE',
        callback: () => ({}),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/:id/media',
        metadata: {},
        method: 'GET',
        callback: (request) =>
            playlistMediaResponse(request.route_params.id, false),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/:id/media',
        metadata: {},
        method: 'POST',
        callback: (request) => ({
            ...playlistMediaResponse(request.route_params.id, false),
            items: request.body || [],
            updated_at: getUnixTime(Date.now()),
        }),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/:id/media/schedule',
        metadata: {},
        method: 'POST',
        callback: (request) => ({
            ...playlistMediaResponse(request.route_params.id, false),
            schedules: [
                {
                    id: `schedule-${Date.now()}`,
                    item_id: request.body?.item_id,
                    schedules: request.body?.schedules || [],
                },
            ],
        }),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/:id/media/schedule/:item_id',
        metadata: {},
        method: 'PATCH',
        callback: (request) => ({
            id: request.route_params.item_id,
            item_id: request.body?.item_id || request.route_params.item_id,
            schedules: request.body?.schedules || [],
        }),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/:id/media/revisions',
        metadata: {},
        method: 'GET',
        callback: (request) => [
            playlistMediaResponse(request.route_params.id, false),
            playlistMediaResponse(request.route_params.id, true),
        ],
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/:id/media/approve',
        metadata: {},
        method: 'POST',
        callback: (request) =>
            playlistMediaResponse(request.route_params.id, true),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/:id/media/request_approval',
        metadata: {},
        method: 'POST',
        callback: () => ({}),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/playlists/share',
        metadata: {},
        method: 'POST',
        callback: () => ({}),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => signageDisplay(request.route_params.id),
    });

    registerMockEndpoint({
        path: '/api/engine/v2/signage/:id/metrics',
        metadata: {},
        method: 'POST',
        callback: () => ({}),
    });

    // Displays
    registerMockEndpoint({
        path: '/api/staff/v1/signage-displays',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            let displays = MOCK_DISPLAYS;

            if (request.query_params?.building_id) {
                displays = displays.filter(
                    (d) => d.building_id === request.query_params.building_id,
                );
            }

            if (request.query_params?.status) {
                displays = displays.filter(
                    (d) => d.status === request.query_params.status,
                );
            }

            if (request.query_params?.zone_id) {
                displays = displays.filter(
                    (d) => d.zone_id === request.query_params.zone_id,
                );
            }

            return {
                data: displays,
                meta: {
                    total: displays.length,
                    online: displays.filter((d) => d.status === 'online')
                        .length,
                    offline: displays.filter((d) => d.status === 'offline')
                        .length,
                    error: displays.filter((d) => d.status === 'error').length,
                },
            };
        },
    });

    // Display by ID
    registerMockEndpoint({
        path: '/api/staff/v1/signage/displays/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const display = MOCK_DISPLAYS.find(
                (d) => d.id === request.route_params.id,
            );
            if (!display) throw { status: 404, message: 'Display not found' };
            return display;
        },
    });

    // Media content
    registerMockEndpoint({
        path: '/api/staff/v1/signage/media',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            let media = MOCK_MEDIA;

            if (request.query_params?.category) {
                media = media.filter(
                    (m) => m.category === request.query_params.category,
                );
            }

            if (request.query_params?.status) {
                media = media.filter(
                    (m) => m.status === request.query_params.status,
                );
            }

            if (request.query_params?.type) {
                media = media.filter(
                    (m) => m.type === request.query_params.type,
                );
            }

            // Pagination
            const page = parseInt(request.query_params?.page) || 1;
            const limit = parseInt(request.query_params?.limit) || 20;
            const offset = (page - 1) * limit;

            return {
                data: media.slice(offset, offset + limit),
                meta: {
                    page,
                    limit,
                    total: media.length,
                    pages: Math.ceil(media.length / limit),
                    categories: CONTENT_CATEGORIES,
                },
            };
        },
    });

    // Playlists
    registerMockEndpoint({
        path: '/api/staff/v1/signage/playlists',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            let playlists = MOCK_PLAYLISTS;

            if (request.query_params?.building_id) {
                playlists = playlists.filter((p) =>
                    p.target.zones.includes(request.query_params.building_id),
                );
            }

            if (request.query_params?.status) {
                playlists = playlists.filter(
                    (p) => p.status === request.query_params.status,
                );
            }

            return {
                data: playlists,
                meta: {
                    total: playlists.length,
                    active: playlists.filter((p) => p.status === 'active')
                        .length,
                    standby: playlists.filter((p) => p.status === 'standby')
                        .length,
                },
            };
        },
    });

    // Playlist by ID
    registerMockEndpoint({
        path: '/api/staff/v1/signage/playlists/:id',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const playlist = MOCK_PLAYLISTS.find(
                (p) => p.id === request.route_params.id,
            );
            if (!playlist) throw { status: 404, message: 'Playlist not found' };

            // Include full media details for playlist items
            const playlistWithMedia = {
                ...playlist,
                items: playlist.items.map((item) => ({
                    ...item,
                    media: MOCK_MEDIA.find((m) => m.id === item.media_id),
                })),
            };

            return playlistWithMedia;
        },
    });

    // Triggers
    registerMockEndpoint({
        path: '/api/staff/v1/signage/triggers',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            let triggers = MOCK_TRIGGERS;

            if (request.query_params?.type) {
                triggers = triggers.filter(
                    (t) => t.type === request.query_params.type,
                );
            }

            if (request.query_params?.active !== undefined) {
                const isActive = request.query_params.active === 'true';
                triggers = triggers.filter((t) => t.active === isActive);
            }

            return {
                data: triggers,
                meta: {
                    total: triggers.length,
                    active: triggers.filter((t) => t.active).length,
                    inactive: triggers.filter((t) => !t.active).length,
                },
            };
        },
    });

    // Display content (current playing)
    registerMockEndpoint({
        path: '/api/staff/v1/signage/displays/:id/content',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const display = MOCK_DISPLAYS.find(
                (d) => d.id === request.route_params.id,
            );
            if (!display) throw { status: 404, message: 'Display not found' };

            // Find active playlist for this display
            const activePlaylist = MOCK_PLAYLISTS.find(
                (p) =>
                    p.status === 'active' &&
                    p.target.displays.includes(display.id),
            );

            if (!activePlaylist) {
                return { message: 'No active content for this display' };
            }

            const currentItem =
                activePlaylist.items[
                    predictableRandomInt(activePlaylist.items.length)
                ];
            const media = MOCK_MEDIA.find((m) => m.id === currentItem.media_id);

            return {
                display_id: display.id,
                current_content: {
                    playlist: activePlaylist,
                    item: currentItem,
                    media: media,
                    started_at: new Date().toISOString(),
                    remaining_time: media?.file.duration_seconds || 15,
                },
                next_content:
                    activePlaylist.items[
                        (activePlaylist.items.indexOf(currentItem) + 1) %
                            activePlaylist.items.length
                    ],
            };
        },
    });

    // Analytics
    registerMockEndpoint({
        path: '/api/staff/v1/signage-analytics',
        metadata: {},
        method: 'GET',
        callback: (request) => {
            const timeframe = request.query_params?.timeframe || '7d';
            const building_id = request.query_params?.building_id;

            let displays = MOCK_DISPLAYS;
            if (building_id) {
                displays = displays.filter(
                    (d) => d.building_id === building_id,
                );
            }

            return {
                timeframe,
                summary: {
                    total_displays: displays.length,
                    online_displays: displays.filter(
                        (d) => d.status === 'online',
                    ).length,
                    total_impressions:
                        displays.reduce(
                            (sum, d) => sum + d.analytics.daily_views,
                            0,
                        ) *
                        (timeframe === '7d' ? 7 : timeframe === '30d' ? 30 : 1),
                    average_uptime: '99.2%',
                    content_items_served:
                        MOCK_MEDIA.length * displays.length * 24,
                },
                performance: displays.map((display) => ({
                    display_id: display.id,
                    display_name: display.name,
                    uptime: `${100 - predictableRandomInt(5)}%`,
                    impressions:
                        display.analytics.daily_views *
                        (timeframe === '7d' ? 7 : timeframe === '30d' ? 30 : 1),
                    engagement: display.analytics.content_engagement,
                    errors: display.analytics.error_count_24h,
                })),
                content_performance: MOCK_MEDIA.slice(0, 10).map((media) => ({
                    media_id: media.id,
                    media_name: media.name,
                    impressions: media.performance.impressions,
                    engagement_rate: media.performance.engagement_rate,
                    average_view_time: media.performance.average_view_time,
                })),
                health_alerts: displays
                    .filter((d) => d.status !== 'online')
                    .map((display) => ({
                        display_id: display.id,
                        display_name: display.name,
                        alert_type: display.status,
                        message:
                            display.status === 'offline'
                                ? 'Display is not responding'
                                : display.status === 'error'
                                  ? 'Hardware error detected'
                                  : 'Maintenance mode active',
                        timestamp: new Date().toISOString(),
                    })),
            };
        },
    });

    // Control endpoints
    registerMockEndpoint({
        path: '/api/staff/v1/signage-displays/:id/control',
        metadata: {},
        method: 'POST',
        callback: (request) => {
            const display = MOCK_DISPLAYS.find(
                (d) => d.id === request.route_params.id,
            );
            if (!display) throw { status: 404, message: 'Display not found' };

            const action = request.body?.action;
            const validActions = [
                'power_on',
                'power_off',
                'restart',
                'refresh_content',
                'update_brightness',
                'update_volume',
            ];

            if (!validActions.includes(action)) {
                throw { status: 400, message: 'Invalid action' };
            }

            // Simulate action execution
            return {
                display_id: display.id,
                action: action,
                status: 'success',
                message: `Action ${action} executed successfully`,
                timestamp: new Date().toISOString(),
            };
        },
    });
}

// Export mock data for testing
export { MOCK_DISPLAYS, MOCK_MEDIA, MOCK_PLAYLISTS, MOCK_TRIGGERS };
