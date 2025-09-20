import { predictableRandomInt } from '@placeos/common';
import { generateMockSpace } from '@placeos/events';
import { MOCK_BUILDINGS, MOCK_REGIONS } from './zone.data';

const SPACE_TYPES = [
    'Meeting Room',
    'Conference Room',
    'Boardroom',
    'Training Room',
    'Phone Booth',
    'Collaboration Space',
    'Event Space',
    'Break Room',
    'Focus Room',
    'Presentation Room',
];

const ROOM_FEATURES = {
    'Meeting Room': [
        'Whiteboard',
        'Display Screen',
        'Video Conference',
        'Phone',
    ],
    'Conference Room': [
        'Projector',
        'Video Conference',
        'Whiteboard',
        'Audio System',
        'Phone',
    ],
    Boardroom: [
        'Large Display',
        'Video Conference',
        'Audio System',
        'Whiteboard',
        'Climate Control',
        'Executive Seating',
    ],
    'Training Room': [
        'Projector',
        'Whiteboard',
        'Flipchart',
        'Audio System',
        'Breakout Tables',
    ],
    'Phone Booth': ['Phone', 'Acoustic Privacy', 'Power Outlet'],
    'Collaboration Space': [
        'Whiteboard',
        'Moveable Furniture',
        'Power Outlets',
        'Informal Seating',
    ],
    'Event Space': [
        'Audio System',
        'Projector',
        'Stage/Platform',
        'Catering Setup',
        'Flexible Seating',
    ],
    'Break Room': [
        'Kitchen Facilities',
        'Refrigerator',
        'Microwave',
        'Coffee Machine',
        'Seating',
    ],
    'Focus Room': [
        'Acoustic Privacy',
        'Desk',
        'Power Outlets',
        'Natural Light',
    ],
    'Presentation Room': [
        'Large Display',
        'Audio System',
        'Tiered Seating',
        'Lighting Control',
    ],
};

const CAPACITY_RANGES = {
    'Meeting Room': { min: 4, max: 12 },
    'Conference Room': { min: 8, max: 20 },
    Boardroom: { min: 10, max: 25 },
    'Training Room': { min: 15, max: 50 },
    'Phone Booth': { min: 1, max: 2 },
    'Collaboration Space': { min: 6, max: 15 },
    'Event Space': { min: 50, max: 200 },
    'Break Room': { min: 10, max: 30 },
    'Focus Room': { min: 1, max: 3 },
    'Presentation Room': { min: 20, max: 100 },
};

const BUILDING_THEMES = {
    'bld-01': {
        name: 'Innovation Hub',
        floors: ['Ground', 'Level 1', 'Level 2'],
        style: 'Modern',
        year: 2020,
    },
    'bld-02': {
        name: 'Executive Center',
        floors: ['Ground', 'Level 2', 'Level 3', 'Level 4'],
        style: 'Premium',
        year: 2018,
    },
    'bld-03': {
        name: 'Creative Campus',
        floors: ['Ground', 'Mezzanine', 'Level 1'],
        style: 'Collaborative',
        year: 2021,
    },
    'bld-04': {
        name: 'Melbourne Tower',
        floors: ['Ground', 'Level 1', 'Level 2', 'Level 3', 'Level 4'],
        style: 'Corporate',
        year: 2019,
    },
    'bld-05': {
        name: 'Melbourne Innovation Lab',
        floors: ['Ground', 'Level 1', 'Level 2'],
        style: 'Research',
        year: 2022,
    },
};

const REALISTIC_ROOM_NAMES = [
    // Meeting Rooms
    {
        name: 'Sydney Harbour',
        type: 'Meeting Room',
        theme: 'Australian Cities',
    },
    { name: 'Melbourne Cup', type: 'Meeting Room', theme: 'Australian Cities' },
    {
        name: 'Brisbane River',
        type: 'Meeting Room',
        theme: 'Australian Cities',
    },
    { name: 'Perth Skyline', type: 'Meeting Room', theme: 'Australian Cities' },
    {
        name: 'Adelaide Hills',
        type: 'Meeting Room',
        theme: 'Australian Cities',
    },
    { name: 'Darwin Sunset', type: 'Meeting Room', theme: 'Australian Cities' },

    // Conference Rooms
    { name: 'Innovation Lab', type: 'Conference Room', theme: 'Business' },
    { name: 'Strategy Center', type: 'Conference Room', theme: 'Business' },
    { name: 'Think Tank', type: 'Conference Room', theme: 'Business' },
    { name: 'Solution Studio', type: 'Conference Room', theme: 'Business' },
    { name: 'Discovery Room', type: 'Conference Room', theme: 'Business' },
    { name: 'Vision Quest', type: 'Conference Room', theme: 'Business' },

    // Boardrooms
    { name: 'Executive Boardroom', type: 'Boardroom', theme: 'Executive' },
    { name: "Chairman's Suite", type: 'Boardroom', theme: 'Executive' },
    { name: 'Directors Lounge', type: 'Boardroom', theme: 'Executive' },
    { name: 'Leadership Circle', type: 'Boardroom', theme: 'Executive' },

    // Training Rooms
    { name: 'Learning Hub Alpha', type: 'Training Room', theme: 'Education' },
    {
        name: 'Development Center Beta',
        type: 'Training Room',
        theme: 'Education',
    },
    { name: 'Skills Workshop', type: 'Training Room', theme: 'Education' },
    { name: 'Knowledge Exchange', type: 'Training Room', theme: 'Education' },
    { name: 'Growth Academy', type: 'Training Room', theme: 'Education' },

    // Phone Booths
    { name: 'Call Pod 1', type: 'Phone Booth', theme: 'Functional' },
    { name: 'Call Pod 2', type: 'Phone Booth', theme: 'Functional' },
    { name: 'Call Pod 3', type: 'Phone Booth', theme: 'Functional' },
    { name: 'Call Pod 4', type: 'Phone Booth', theme: 'Functional' },
    { name: 'Privacy Booth A', type: 'Phone Booth', theme: 'Functional' },
    { name: 'Privacy Booth B', type: 'Phone Booth', theme: 'Functional' },

    // Collaboration Spaces
    { name: 'Creative Corner', type: 'Collaboration Space', theme: 'Creative' },
    { name: 'Brainstorm Bay', type: 'Collaboration Space', theme: 'Creative' },
    { name: 'Idea Incubator', type: 'Collaboration Space', theme: 'Creative' },
    {
        name: 'Innovation Intersection',
        type: 'Collaboration Space',
        theme: 'Creative',
    },
    { name: 'Design Den', type: 'Collaboration Space', theme: 'Creative' },

    // Event Spaces
    { name: 'Grand Auditorium', type: 'Event Space', theme: 'Events' },
    { name: 'Conference Hall', type: 'Event Space', theme: 'Events' },
    { name: 'Presentation Theater', type: 'Event Space', theme: 'Events' },
    { name: 'Multi-Purpose Arena', type: 'Event Space', theme: 'Events' },

    // Break Rooms
    { name: 'Coffee Central', type: 'Break Room', theme: 'Social' },
    { name: 'Relaxation Station', type: 'Break Room', theme: 'Social' },
    { name: 'Social Hub', type: 'Break Room', theme: 'Social' },
    { name: 'Refresh & Recharge', type: 'Break Room', theme: 'Social' },
    { name: 'Community Kitchen', type: 'Break Room', theme: 'Social' },

    // Focus Rooms
    { name: 'Deep Work Den', type: 'Focus Room', theme: 'Productivity' },
    { name: 'Concentration Cave', type: 'Focus Room', theme: 'Productivity' },
    { name: 'Quiet Quarters', type: 'Focus Room', theme: 'Productivity' },
    { name: 'Focus Flow', type: 'Focus Room', theme: 'Productivity' },
    { name: 'Zen Zone', type: 'Focus Room', theme: 'Productivity' },

    // Presentation Rooms
    { name: 'Demo Theater', type: 'Presentation Room', theme: 'Presentation' },
    {
        name: 'Showcase Auditorium',
        type: 'Presentation Room',
        theme: 'Presentation',
    },
    {
        name: 'Client Presentation Suite',
        type: 'Presentation Room',
        theme: 'Presentation',
    },
];

const generateRoomCode = (
    building: string,
    floor: string,
    index: number,
): string => {
    const bldCode = building.split('-')[1];
    const floorCode = floor.includes('Ground')
        ? 'G'
        : floor.includes('Mezzanine')
          ? 'M'
          : floor.match(/\d+/)
            ? floor.match(/\d+/)[0]
            : '1';
    return `${bldCode}.${floorCode}.${String(index + 1).padStart(2, '0')}`;
};

const getRandomFeatures = (roomType: string): string[] => {
    const availableFeatures = ROOM_FEATURES[roomType] || [];
    const numFeatures = predictableRandomInt(availableFeatures.length - 1, 2);
    const selectedFeatures = [];

    for (let i = 0; i < numFeatures; i++) {
        const feature =
            availableFeatures[predictableRandomInt(availableFeatures.length)];
        if (!selectedFeatures.includes(feature)) {
            selectedFeatures.push(feature);
        }
    }

    return selectedFeatures;
};

const getCapacityForRoomType = (roomType: string): number => {
    const range = CAPACITY_RANGES[roomType] || { min: 4, max: 12 };
    return predictableRandomInt(range.max - range.min, range.min);
};

const getZoneHierarchy = (buildingId: string, levelId: string) => {
    // Find the building to get its parent region
    const building = MOCK_BUILDINGS.find((b) => b.id === buildingId);
    if (!building) return ['zone-org', 'region-sydney', buildingId, levelId];

    // Find the region to get its parent org
    const region = MOCK_REGIONS.find((r) => r.id === building.parent_id);
    const orgId = region ? region.parent_id : 'zone-org';

    return [orgId, building.parent_id, buildingId, levelId];
};

const generateSpaceData = () => {
    const spaces = [];
    let spaceIndex = 0;

    Object.entries(BUILDING_THEMES).forEach(([buildingId, buildingInfo]) => {
        buildingInfo.floors.forEach((floor, floorIndex) => {
            const floorId = `${buildingId}_lvl-${floorIndex}`;
            const spacesPerFloor = predictableRandomInt(16, 5); // 5-20 spaces per floor

            for (let i = 0; i < spacesPerFloor; i++) {
                const roomData =
                    REALISTIC_ROOM_NAMES[
                        spaceIndex % REALISTIC_ROOM_NAMES.length
                    ];
                const roomCode = generateRoomCode(buildingId, floor, i);
                const capacity = getCapacityForRoomType(roomData.type);
                const features = getRandomFeatures(roomData.type);

                // Determine booking availability based on room type
                const isBookable =
                    ![
                        'Break Room',
                        'Collaboration Space',
                        'Focus Room',
                    ].includes(roomData.type) || predictableRandomInt(3) === 0;

                // Generate realistic images based on room type
                const imageCategories = {
                    'Meeting Room': 'meeting-room',
                    'Conference Room': 'conference-room',
                    Boardroom: 'boardroom',
                    'Training Room': 'training-room',
                    'Phone Booth': 'phone-booth',
                    'Collaboration Space': 'collaboration-space',
                    'Event Space': 'event-space',
                    'Break Room': 'break-room',
                    'Focus Room': 'focus-room',
                    'Presentation Room': 'presentation-room',
                };

                const space = {
                    id: `space-${spaceIndex + 1}`,
                    name: `${roomCode} ${roomData.name}`,
                    display_name: roomData.name,
                    map_id: `area-${roomCode.toLowerCase()}-status`,
                    zones: getZoneHierarchy(buildingId, floorId),
                    type: roomData.type,
                    capacity,
                    features,
                    images: [
                        `https://images.unsplash.com/photo-${1500000000 + spaceIndex * 100000}?w=800&h=600&fit=crop`,
                        ...(capacity > 10
                            ? [
                                  `https://images.unsplash.com/photo-${1500000000 + spaceIndex * 100000 + 50000}?w=800&h=600&fit=crop`,
                              ]
                            : []),
                    ],
                    bookable: isBookable,
                    level: {
                        id: floorId,
                        parent_id: buildingId,
                        name: floor,
                        display_name: floor,
                        capacity,
                        number: floorIndex.toString(),
                        map_id: `${buildingId}_${floorIndex}`,
                        tags: [
                            buildingInfo.style.toLowerCase(),
                            roomData.theme.toLowerCase(),
                        ],
                        settings: {
                            booking_enabled: isBookable,
                            auto_release:
                                roomData.type === 'Meeting Room' ||
                                roomData.type === 'Conference Room',
                            max_booking_duration:
                                roomData.type === 'Phone Booth'
                                    ? 60
                                    : roomData.type === 'Focus Room'
                                      ? 240
                                      : roomData.type === 'Event Space'
                                        ? 480
                                        : 240,
                        },
                        images: [
                            `https://images.unsplash.com/photo-${1400000000 + floorIndex * 200000}?w=1200&h=800&fit=crop`,
                        ],
                        locations: {
                            id: floorId,
                            name: floor,
                            building: buildingInfo.name,
                        },
                    },
                    // Additional metadata
                    building: buildingInfo.name,
                    building_id: buildingId,
                    floor: floor,
                    floor_number: floorIndex,
                    room_code: roomCode,
                    theme: roomData.theme,
                    style: buildingInfo.style,
                    year_built: buildingInfo.year,
                    last_renovation:
                        buildingInfo.year + predictableRandomInt(4, 1),
                    accessibility: {
                        wheelchair_accessible: predictableRandomInt(4) !== 0, // 75% accessible
                        hearing_loop: [
                            'Boardroom',
                            'Event Space',
                            'Presentation Room',
                        ].includes(roomData.type),
                        braille_signage: predictableRandomInt(2) === 0,
                    },
                    equipment: features.map((feature) => ({
                        name: feature,
                        status: [
                            'Working',
                            'Working',
                            'Working',
                            'Maintenance',
                        ][predictableRandomInt(4)],
                        last_serviced: new Date(
                            Date.now() -
                                predictableRandomInt(90) * 24 * 60 * 60 * 1000,
                        ).toISOString(),
                    })),
                    amenities: {
                        natural_light:
                            !roomData.name.toLowerCase().includes('pod') &&
                            predictableRandomInt(3) !== 0,
                        air_conditioning: true,
                        power_outlets:
                            capacity *
                            (roomData.type === 'Training Room' ? 2 : 1),
                        wifi: true,
                        catering_available: [
                            'Conference Room',
                            'Boardroom',
                            'Training Room',
                            'Event Space',
                        ].includes(roomData.type),
                        parking_nearby:
                            buildingId === 'bld-01' ||
                            predictableRandomInt(2) === 0,
                    },
                    booking_rules: {
                        advance_booking_days:
                            roomData.type === 'Event Space'
                                ? 90
                                : roomData.type === 'Boardroom'
                                  ? 60
                                  : 30,
                        min_booking_duration:
                            roomData.type === 'Phone Booth' ? 15 : 30,
                        max_booking_duration:
                            roomData.type === 'Phone Booth'
                                ? 60
                                : roomData.type === 'Focus Room'
                                  ? 240
                                  : 480,
                        buffer_time: roomData.type === 'Event Space' ? 30 : 15,
                        approval_required:
                            roomData.type === 'Boardroom' ||
                            roomData.type === 'Event Space',
                    },
                    cost_center: buildingInfo.name
                        .toLowerCase()
                        .replace(/\s+/g, '-'),
                    hourly_rate:
                        roomData.type === 'Event Space'
                            ? predictableRandomInt(200, 100)
                            : roomData.type === 'Boardroom'
                              ? predictableRandomInt(100, 50)
                              : roomData.type === 'Phone Booth'
                                ? 0
                                : predictableRandomInt(50, 10),
                };

                spaces.push(space);
                spaceIndex++;
            }
        });
    });

    return spaces;
};

const rawSpaces = generateSpaceData();

export const MOCK_SPACES = rawSpaces.map((space) =>
    generateMockSpace({
        ...space,
        features: space.features || [],
        images: space.images || [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        ],
    }),
);

// Helper functions for space management
export const getSpacesByType = (type: string) =>
    MOCK_SPACES.filter((space) => space.type === type);

export const getSpacesByBuilding = (buildingId: string) =>
    MOCK_SPACES.filter((space) => space.building_id === buildingId);

export const getSpacesByCapacity = (
    minCapacity: number,
    maxCapacity?: number,
) =>
    MOCK_SPACES.filter((space) => {
        const capacity = space.capacity || 0;
        return (
            capacity >= minCapacity && (!maxCapacity || capacity <= maxCapacity)
        );
    });

export const getBookableSpaces = () =>
    MOCK_SPACES.filter((space) => space.bookable !== false);

export const getSpacesByFeature = (feature: string) =>
    MOCK_SPACES.filter(
        (space) => space.features && space.features.includes(feature),
    );

export const getAccessibleSpaces = () =>
    MOCK_SPACES.filter((space) => space.accessibility?.wheelchair_accessible);

export const getSpacesRequiringApproval = () =>
    MOCK_SPACES.filter((space) => space.booking_rules?.approval_required);
