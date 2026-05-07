import { predictableRandomInt } from '@placeos/common';
import { getUnixTime, subMonths } from 'date-fns';

export const MOCK_ORGS = [
    {
        id: 'zone-org',
        created_at: getUnixTime(subMonths(Date.now(), 24)),
        updated_at: getUnixTime(subMonths(Date.now(), 1)),
        name: 'PlaceOS Global',
        display_name: 'PlaceOS Global',
        description:
            'Global headquarters and innovation centers for PlaceOS technology solutions',
        tags: ['org', 'headquarters', 'technology'],
        count: 2, // Number of regions
        capacity: 4500, // Total capacity across all buildings
        parent_id: '',
        triggers: [],
        settings: {
            timezone: 'Australia/Sydney',
            booking_rules: {
                advance_booking_days: 90,
                max_booking_duration: 8 * 60, // 8 hours
                auto_release_minutes: 15,
            },
            work_hours: {
                start: '07:00',
                end: '19:00',
                days: [1, 2, 3, 4, 5], // Monday to Friday
            },
            features: [
                'wifi',
                'parking',
                'accessibility',
                'catering',
                'security',
            ],
        },
        contact: {
            email: 'facilities@place.tech',
            phone: '+61 2 8765 4321',
            address: 'Sydney Technology Park, NSW, Australia',
        },
        metadata: {
            founded: 2018,
            employee_count: 1200,
            sustainability_rating: 'A+',
            certifications: [
                'Green Building Council',
                'ISO 14001',
                'LEED Platinum',
            ],
        },
    },
];

export const MOCK_REGIONS = [
    {
        id: 'region-sydney',
        created_at: getUnixTime(subMonths(Date.now(), 18)),
        updated_at: getUnixTime(subMonths(Date.now(), 2)),
        name: 'Sydney Region',
        display_name: 'Sydney Metropolitan Region',
        description:
            'Primary business region covering Sydney and surrounding areas',
        tags: ['region', 'sydney', 'metropolitan'],
        count: 3, // Number of buildings
        capacity: 2700,
        parent_id: 'zone-org',
        triggers: [],
        settings: {
            timezone: 'Australia/Sydney',
            region_code: 'SYD',
            business_hours: {
                start: '07:00',
                end: '19:00',
                timezone: 'Australia/Sydney',
            },
        },
        contact: {
            email: 'sydney@place.tech',
            phone: '+61 2 8765 4322',
            address: 'Sydney, NSW, Australia',
        },
        boundaries: {
            north: -33.5,
            south: -34.2,
            east: 151.5,
            west: 150.5,
        },
    },
    {
        id: 'region-melbourne',
        created_at: getUnixTime(subMonths(Date.now(), 15)),
        updated_at: getUnixTime(subMonths(Date.now(), 1)),
        name: 'Melbourne Region',
        display_name: 'Melbourne Metropolitan Region',
        description:
            'Secondary business region covering Melbourne and Victoria',
        tags: ['region', 'melbourne', 'metropolitan'],
        count: 2, // Number of buildings
        capacity: 1800,
        parent_id: 'zone-org',
        triggers: [],
        settings: {
            timezone: 'Australia/Melbourne',
            region_code: 'MEL',
            business_hours: {
                start: '07:30',
                end: '19:30',
                timezone: 'Australia/Melbourne',
            },
        },
        contact: {
            email: 'melbourne@place.tech',
            phone: '+61 3 8765 4323',
            address: 'Melbourne, VIC, Australia',
        },
        boundaries: {
            north: -37.5,
            south: -38.2,
            east: 145.5,
            west: 144.5,
        },
    },
];

export const MOCK_BUILDINGS = [
    {
        id: 'bld-01',
        name: 'Innovation Hub',
        display_name: 'Innovation Hub',
        description:
            'Modern workspace focused on collaboration and innovation with state-of-the-art facilities',
        tags: ['building', 'innovation', 'modern', 'headquarters'],
        count: 4, // Number of levels (including parking)
        capacity: 1200,
        parent_id: 'region-sydney',
        triggers: [],
        levels: ['lvl-G', 'lvl-1', 'lvl-2', 'lvl-P1'],
        address: {
            street: '123 Technology Drive',
            suburb: 'Sydney Olympic Park',
            state: 'NSW',
            postcode: '2127',
            country: 'Australia',
            coordinates: {
                lat: -33.8473,
                lng: 151.0647,
            },
        },
        features: {
            parking_spaces: 300,
            accessibility: true,
            bike_storage: true,
            shower_facilities: true,
            cafe_on_site: true,
            gym: true,
            rooftop_garden: true,
            ev_charging: 20,
            security_level: 'high',
        },
        building_details: {
            year_built: 2020,
            architect: 'Foster + Partners',
            total_floors: 12,
            basement_levels: 2,
            floor_area_sqm: 8500,
            energy_rating: '6 Star Green Star',
            construction_type: 'Steel frame with glass facade',
            elevator_count: 4,
            stair_count: 3,
        },
    },
    {
        id: 'bld-02',
        name: 'Executive Center',
        display_name: 'Executive Center',
        description:
            'Premium business center with executive suites, boardrooms, and high-end meeting facilities',
        tags: ['building', 'executive', 'premium', 'business'],
        count: 5,
        capacity: 800,
        parent_id: 'region-sydney',
        triggers: [],
        levels: ['lvl-G', 'lvl-2', 'lvl-3', 'lvl-4', 'lvl-P1'],
        address: {
            street: '456 Collins Street',
            suburb: 'Sydney CBD',
            state: 'NSW',
            postcode: '2000',
            country: 'Australia',
            coordinates: {
                lat: -33.8688,
                lng: 151.2093,
            },
        },
        features: {
            parking_spaces: 200,
            accessibility: true,
            bike_storage: false,
            shower_facilities: true,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 15,
            security_level: 'premium',
        },
        building_details: {
            year_built: 2018,
            architect: 'Woods Bagot',
            total_floors: 25,
            basement_levels: 3,
            floor_area_sqm: 6200,
            energy_rating: '5 Star NABERS',
            construction_type: 'Reinforced concrete with marble facade',
            elevator_count: 6,
            stair_count: 2,
        },
    },
    {
        id: 'bld-03',
        name: 'Creative Campus',
        display_name: 'Creative Campus',
        description:
            'Flexible workspace designed for creative teams with open collaboration areas and maker spaces',
        tags: ['building', 'creative', 'flexible', 'collaboration'],
        count: 3,
        capacity: 500,
        parent_id: 'region-sydney',
        triggers: [],
        levels: ['lvl-G', 'lvl-M', 'lvl-1'],
        address: {
            street: '789 Creative Boulevard',
            suburb: 'Pyrmont',
            state: 'NSW',
            postcode: '2009',
            country: 'Australia',
            coordinates: {
                lat: -33.8688,
                lng: 151.1957,
            },
        },
        features: {
            parking_spaces: 150,
            accessibility: true,
            bike_storage: true,
            shower_facilities: true,
            cafe_on_site: true,
            gym: true,
            rooftop_garden: true,
            ev_charging: 25,
            security_level: 'standard',
        },
        building_details: {
            year_built: 2021,
            architect: 'BVN Architecture',
            total_floors: 8,
            basement_levels: 1,
            floor_area_sqm: 4800,
            energy_rating: '6 Star Green Star',
            construction_type: 'Timber and steel hybrid with living walls',
            elevator_count: 2,
            stair_count: 3,
        },
    },
    {
        id: 'bld-04',
        name: 'Melbourne Tower',
        display_name: 'Melbourne Tower',
        description:
            'High-rise office building in Melbourne CBD with premium corporate facilities',
        tags: ['building', 'corporate', 'high-rise', 'premium'],
        count: 6,
        capacity: 1000,
        parent_id: 'region-melbourne',
        triggers: [],
        levels: ['lvl-G', 'lvl-1', 'lvl-2', 'lvl-3', 'lvl-4', 'lvl-P1'],
        address: {
            street: '100 Collins Street',
            suburb: 'Melbourne',
            state: 'VIC',
            postcode: '3000',
            country: 'Australia',
            coordinates: {
                lat: -37.8136,
                lng: 144.9631,
            },
        },
        features: {
            parking_spaces: 250,
            accessibility: true,
            bike_storage: true,
            shower_facilities: true,
            cafe_on_site: true,
            gym: true,
            rooftop_garden: false,
            ev_charging: 30,
            security_level: 'high',
        },
        building_details: {
            year_built: 2019,
            architect: 'Hassell',
            total_floors: 35,
            basement_levels: 4,
            floor_area_sqm: 12000,
            energy_rating: '5 Star Green Star',
            construction_type: 'Steel and glass with sustainable features',
            elevator_count: 8,
            stair_count: 4,
        },
    },
    {
        id: 'bld-05',
        name: 'Melbourne Innovation Lab',
        display_name: 'Melbourne Innovation Lab',
        description:
            'State-of-the-art research and development facility with collaborative workspaces',
        tags: ['building', 'innovation', 'research', 'lab'],
        count: 3,
        capacity: 800,
        parent_id: 'region-melbourne',
        triggers: [],
        levels: ['lvl-G', 'lvl-1', 'lvl-2'],
        address: {
            street: '250 Exhibition Street',
            suburb: 'Melbourne',
            state: 'VIC',
            postcode: '3000',
            country: 'Australia',
            coordinates: {
                lat: -37.8103,
                lng: 144.9717,
            },
        },
        features: {
            parking_spaces: 180,
            accessibility: true,
            bike_storage: true,
            shower_facilities: true,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: true,
            ev_charging: 20,
            security_level: 'high',
        },
        building_details: {
            year_built: 2022,
            architect: 'ARM Architecture',
            total_floors: 8,
            basement_levels: 1,
            floor_area_sqm: 7500,
            energy_rating: '6 Star Green Star',
            construction_type: 'Cross-laminated timber and steel',
            elevator_count: 3,
            stair_count: 2,
        },
    },
];

export const MOCK_ZONES = []; // Populated by other mock files

const createMockLevel = (
    id: string,
    idx: number,
    building: any,
    levelCode = '1',
): any => {
    const levelNumber =
        levelCode === 'G'
            ? 0
            : levelCode === 'M'
              ? 0.5
              : levelCode.startsWith('P')
                ? -parseInt(levelCode.substring(1))
                : parseInt(levelCode) || 1;

    const isGroundFloor = levelCode === 'G';
    const isMezzanine = levelCode === 'M';
    const isParkingLevel = levelCode.startsWith('P');

    let levelType = 'office';
    if (isParkingLevel) levelType = 'parking';
    else if (isGroundFloor) levelType = 'lobby';
    else if (isMezzanine) levelType = 'mixed-use';

    const capacityByType = {
        parking: 0,
        lobby: 50,
        'mixed-use': Math.floor(building.capacity * 0.2),
        office: Math.floor(building.capacity * 0.4),
    };

    const levelName = isParkingLevel
        ? `Parking Level ${levelCode.substring(1)}`
        : isGroundFloor
          ? 'Ground Floor'
          : isMezzanine
            ? 'Mezzanine'
            : `Level ${levelCode}`;

    const displayName = levelName;

    const features = [];
    if (isGroundFloor) features.push('reception', 'lobby', 'cafe', 'security');
    if (isMezzanine)
        features.push('meeting-rooms', 'break-areas', 'informal-seating');
    if (levelType === 'office')
        features.push('workstations', 'meeting-rooms', 'collaboration-spaces');
    if (isParkingLevel) features.push('parking', 'ev-charging', 'bike-storage');

    return {
        id: `${building.id}_${id}`,
        name: levelName,
        display_name: displayName,
        parent_id: building.id,
        description: `${levelName} of ${building.name} featuring ${features.join(', ')}`,
        tags: ['level', levelType, building.tags[1]].filter(Boolean),
        map_id: `assets/maps/level_${levelCode}.svg`,
        code: `${building.name.substring(0, 3).toUpperCase()}-${levelCode}`,
        type: levelType,
        count: predictableRandomInt(15, 5), // Number of spaces/rooms
        capacity:
            capacityByType[levelType] || Math.floor(building.capacity * 0.3),
        location: `${building.address.coordinates.lat},${building.address.coordinates.lng}`,
        level_number: levelNumber,
        floor_area_sqm: Math.floor(
            building.building_details.floor_area_sqm / building.count,
        ),
        ceiling_height:
            levelType === 'lobby' ? 4.5 : isParkingLevel ? 2.4 : 2.8,
        features: features,
        accessibility: {
            wheelchair_accessible: true,
            elevator_access:
                !isParkingLevel || building.building_details.elevator_count > 0,
            accessible_bathrooms: levelType !== 'parking',
            hearing_loop: isGroundFloor || levelType === 'office',
        },
        utilities: {
            power_outlets: levelType === 'office' ? 'extensive' : 'standard',
            data_points: levelType === 'office' ? 'fiber_optic' : 'standard',
            hvac_zones: Math.ceil((capacityByType[levelType] || 50) / 50),
            fire_safety: 'compliant',
            security_systems: building.features.security_level,
        },
        spaces: {
            meeting_rooms:
                levelType === 'office'
                    ? predictableRandomInt(8, 3)
                    : isMezzanine
                      ? predictableRandomInt(4, 2)
                      : 0,
            workstations:
                levelType === 'office'
                    ? Math.floor((capacityByType[levelType] || 0) * 0.8)
                    : 0,
            break_areas:
                levelType !== 'parking' ? predictableRandomInt(3, 1) : 0,
            storage_rooms: predictableRandomInt(4, 1),
            bathrooms: isParkingLevel ? 1 : predictableRandomInt(4, 2),
            parking_spaces: isParkingLevel
                ? Math.floor(building.features.parking_spaces / 2)
                : 0,
        },
        created_at: getUnixTime(
            subMonths(Date.now(), predictableRandomInt(36, 6)),
        ),
        updated_at: getUnixTime(
            subMonths(Date.now(), predictableRandomInt(3, 0)),
        ),
        settings: {
            booking_enabled: levelType !== 'parking',
            public_access: isGroundFloor,
            after_hours_access:
                levelType === 'office' ? 'keycard' : 'restricted',
            temperature_range: {
                min: 20,
                max: 26,
            },
            lighting: {
                type:
                    levelType === 'office'
                        ? 'LED with daylight sensors'
                        : 'LED standard',
                zones: Math.ceil((capacityByType[levelType] || 30) / 30),
            },
        },
        maintenance: {
            last_inspection: getUnixTime(
                subMonths(Date.now(), predictableRandomInt(6, 1)),
            ),
            next_inspection: getUnixTime(
                new Date(
                    Date.now() +
                        predictableRandomInt(90, 30) * 24 * 60 * 60 * 1000,
                ),
            ),
            cleaning_schedule: isParkingLevel ? 'weekly' : 'daily',
            maintenance_contact: 'Facilities Management',
        },
    };
};

export const MOCK_LEVELS = MOCK_BUILDINGS.map((bld) =>
    bld.levels.map((level, idx) =>
        createMockLevel(level, idx, bld, level.split('-')[1]),
    ),
).reduce((prev, current) => prev.concat(current), []);

// Helper functions for zone management
export const getBuildingById = (buildingId: string) =>
    MOCK_BUILDINGS.find((building) => building.id === buildingId);

export const getLevelsByBuilding = (buildingId: string) =>
    MOCK_LEVELS.filter((level) => level.parent_id === buildingId);

export const getBuildingsByRegion = (regionId: string) =>
    MOCK_BUILDINGS.filter((building) => building.parent_id === regionId);

export const getRegionsByOrg = (orgId: string) =>
    MOCK_REGIONS.filter((region) => region.parent_id === orgId);

export const getBuildingsByTag = (tag: string) =>
    MOCK_BUILDINGS.filter((building) => building.tags.includes(tag));

export const getBuildingCapacity = (buildingId: string) => {
    const building = getBuildingById(buildingId);
    return building ? building.capacity : 0;
};

export const getTotalOrganizationCapacity = () =>
    MOCK_BUILDINGS.reduce((total, building) => total + building.capacity, 0);

export const getBuildingsByLocation = (state?: string) =>
    state
        ? MOCK_BUILDINGS.filter((building) => building.address.state === state)
        : MOCK_BUILDINGS;

export const getLevelsByType = (type: string) =>
    MOCK_LEVELS.filter((level) => level.type === type);

export const getBuildingStatistics = () => ({
    total_orgs: MOCK_ORGS.length,
    total_regions: MOCK_REGIONS.length,
    total_buildings: MOCK_BUILDINGS.length,
    total_levels: MOCK_LEVELS.length,
    total_capacity: getTotalOrganizationCapacity(),
    average_capacity: Math.floor(
        getTotalOrganizationCapacity() / MOCK_BUILDINGS.length,
    ),
    buildings_by_region: MOCK_BUILDINGS.reduce((acc, building) => {
        const region = building.parent_id;
        acc[region] = (acc[region] || 0) + 1;
        return acc;
    }, {}),
    buildings_by_state: MOCK_BUILDINGS.reduce((acc, building) => {
        const state = building.address.state;
        acc[state] = (acc[state] || 0) + 1;
        return acc;
    }, {}),
    sustainability_ratings: MOCK_BUILDINGS.map(
        (b) => b.building_details.energy_rating,
    ),
    total_parking_spaces: MOCK_BUILDINGS.reduce(
        (total, b) => total + b.features.parking_spaces,
        0,
    ),
    total_ev_charging: MOCK_BUILDINGS.reduce(
        (total, b) => total + b.features.ev_charging,
        0,
    ),
    levels_by_type: MOCK_LEVELS.reduce((acc, level) => {
        const type = level.type;
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {}),
    parking_levels: MOCK_LEVELS.filter((level) => level.type === 'parking')
        .length,
});
