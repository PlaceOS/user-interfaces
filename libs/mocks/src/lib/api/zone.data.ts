import { predictableRandomInt } from '@placeos/common';
import { getUnixTime, subMonths } from 'date-fns';

export const MOCK_ORGS = [
    {
        id: 'zone-org',
        created_at: getUnixTime(subMonths(Date.now(), 24)),
        updated_at: getUnixTime(subMonths(Date.now(), 1)),
        name: 'UCLA',
        display_name: 'University of California, Los Angeles',
        description:
            'UCLA Campus Event & Venue Spaces — Academic, Cultural, Athletic, and Student Life venues',
        tags: ['org', 'university', 'campus'],
        count: 1,
        capacity: 15000,
        parent_id: '',
        triggers: [],
        settings: {
            timezone: 'America/Los_Angeles',
            booking_rules: {
                advance_booking_days: 90,
                max_booking_duration: 12 * 60,
                auto_release_minutes: 15,
            },
            work_hours: {
                start: '07:00',
                end: '22:00',
                days: [1, 2, 3, 4, 5, 6, 7],
            },
            features: [
                'wifi',
                'parking',
                'accessibility',
                'catering',
                'security',
                'av_support',
            ],
        },
        contact: {
            email: 'events@ucla.edu',
            phone: '+1 310-825-4321',
            address: '405 Hilgard Avenue, Los Angeles, CA 90095',
        },
        metadata: {
            founded: 1919,
            employee_count: 45000,
            sustainability_rating: 'Platinum',
            certifications: [
                'LEED Platinum',
                'AASHE STARS Gold',
                'Tree Campus USA',
            ],
        },
    },
];

export const MOCK_REGIONS = [
    {
        id: 'region-ucla-campus',
        created_at: getUnixTime(subMonths(Date.now(), 18)),
        updated_at: getUnixTime(subMonths(Date.now(), 2)),
        name: 'UCLA Campus',
        display_name: 'UCLA Campus',
        description:
            'Main UCLA campus in Westwood, Los Angeles',
        tags: ['region', 'campus', 'westwood'],
        count: 25,
        capacity: 15000,
        parent_id: 'zone-org',
        triggers: [],
        settings: {
            timezone: 'America/Los_Angeles',
            region_code: 'UCLA',
            business_hours: {
                start: '07:00',
                end: '22:00',
                timezone: 'America/Los_Angeles',
            },
        },
        contact: {
            email: 'events@ucla.edu',
            phone: '+1 310-825-4321',
            address: 'UCLA, Los Angeles, CA 90095',
        },
        boundaries: {
            north: 34.0759,
            south: 34.0627,
            east: -118.4370,
            west: -118.4530,
        },
    },
];

export const MOCK_BUILDINGS = [
    {
        id: 'bld-01',
        name: 'Covel Commons',
        display_name: 'Covel Commons (Sunset Village)',
        description:
            'Full-service event venue in Sunset Village offering catering, AV support, and on-site parking for large and small events',
        tags: ['building', 'dining', 'events', 'catering'],
        count: 2,
        capacity: 800,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '200 De Neve Drive',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0726,
                lng: -118.4510,
            },
        },
        features: {
            parking_spaces: 150,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 10,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1959,
            architect: 'Welton Becket',
            total_floors: 2,
            basement_levels: 0,
            floor_area_sqm: 2800,
            energy_rating: 'LEED Silver',
            construction_type: 'Reinforced concrete',
            elevator_count: 2,
            stair_count: 3,
        },
    },
    {
        id: 'bld-02',
        name: 'Carnesale Commons',
        display_name: 'Carnesale Commons',
        description:
            'Premier event venue with Palisades Ballroom and flexible meeting rooms for conferences, receptions, and formal dinners',
        tags: ['building', 'events', 'conference', 'ballroom'],
        count: 2,
        capacity: 900,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '251 Charles E Young Drive West',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0714,
                lng: -118.4499,
            },
        },
        features: {
            parking_spaces: 200,
            accessibility: true,
            bike_storage: false,
            shower_facilities: false,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 8,
            security_level: 'standard',
        },
        building_details: {
            year_built: 2005,
            architect: 'Anshen + Allen',
            total_floors: 2,
            basement_levels: 0,
            floor_area_sqm: 3200,
            energy_rating: 'LEED Gold',
            construction_type: 'Steel frame with glass facade',
            elevator_count: 2,
            stair_count: 2,
        },
    },
    {
        id: 'bld-03',
        name: 'De Neve Plaza',
        display_name: 'De Neve Plaza',
        description:
            'Campus event venue with auditorium, plaza room, and flexible meeting spaces for catered events and presentations',
        tags: ['building', 'events', 'auditorium', 'residential'],
        count: 2,
        capacity: 700,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '351 Charles E Young Drive West',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0706,
                lng: -118.4505,
            },
        },
        features: {
            parking_spaces: 120,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 5,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1965,
            architect: 'Welton Becket',
            total_floors: 2,
            basement_levels: 0,
            floor_area_sqm: 2400,
            energy_rating: 'LEED Silver',
            construction_type: 'Reinforced concrete',
            elevator_count: 2,
            stair_count: 3,
        },
    },
    {
        id: 'bld-04',
        name: 'University Club',
        display_name: 'University Club',
        description:
            'Premier members-only venue with dining rooms, boardrooms, patios, and full-service catering for weddings, galas, and corporate events',
        tags: ['building', 'dining', 'events', 'premium', 'club'],
        count: 2,
        capacity: 600,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '480 Charles E Young Drive East',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0713,
                lng: -118.4408,
            },
        },
        features: {
            parking_spaces: 80,
            accessibility: true,
            bike_storage: false,
            shower_facilities: false,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 4,
            security_level: 'premium',
        },
        building_details: {
            year_built: 1959,
            architect: 'Welton Becket',
            total_floors: 2,
            basement_levels: 0,
            floor_area_sqm: 5500,
            energy_rating: 'LEED Silver',
            construction_type: 'Mid-century modern with renovations',
            elevator_count: 1,
            stair_count: 2,
        },
    },
    {
        id: 'bld-05',
        name: 'Luskin Conference Center',
        display_name: 'Meyer and Renee Luskin Conference Center',
        description:
            'Full-service conference center and hotel with 25,000+ sq ft of event space, 254 guest rooms, and on-site restaurant',
        tags: ['building', 'conference', 'hotel', 'premium', 'events'],
        count: 3,
        capacity: 1200,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1', 'lvl-2'],
        address: {
            street: '425 Westwood Plaza',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0706,
                lng: -118.4437,
            },
        },
        features: {
            parking_spaces: 300,
            accessibility: true,
            bike_storage: false,
            shower_facilities: true,
            cafe_on_site: true,
            gym: true,
            rooftop_garden: false,
            ev_charging: 15,
            security_level: 'high',
        },
        building_details: {
            year_built: 2016,
            architect: 'Pei Cobb Freed & Partners',
            total_floors: 7,
            basement_levels: 2,
            floor_area_sqm: 10000,
            energy_rating: 'LEED Gold',
            construction_type: 'Steel and glass with sustainable features',
            elevator_count: 6,
            stair_count: 4,
        },
    },
    {
        id: 'bld-06',
        name: 'ASUCLA Event Spaces',
        display_name: 'ASUCLA Event Spaces (Ackerman & Kerckhoff)',
        description:
            'Student union event venues including Grand Ballroom, Grand Salon, meeting rooms, and outdoor terraces',
        tags: ['building', 'student', 'events', 'ballroom'],
        count: 2,
        capacity: 1500,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '308 Westwood Plaza',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0700,
                lng: -118.4440,
            },
        },
        features: {
            parking_spaces: 200,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 10,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1962,
            architect: 'Welton Becket',
            total_floors: 4,
            basement_levels: 1,
            floor_area_sqm: 8000,
            energy_rating: 'LEED Silver',
            construction_type: 'Reinforced concrete with modern renovations',
            elevator_count: 3,
            stair_count: 4,
        },
    },
    {
        id: 'bld-07',
        name: 'Anderson School of Management',
        display_name: 'UCLA Anderson School of Management',
        description:
            'Academic venue with Korn Convocation Hall, classrooms, atriums, and outdoor event spaces for conferences and ceremonies',
        tags: ['building', 'academic', 'conference', 'business'],
        count: 2,
        capacity: 800,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '110 Westwood Plaza',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0735,
                lng: -118.4430,
            },
        },
        features: {
            parking_spaces: 250,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 12,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1995,
            architect: 'Pei Cobb Freed & Partners',
            total_floors: 4,
            basement_levels: 1,
            floor_area_sqm: 6500,
            energy_rating: 'LEED Gold',
            construction_type: 'Modern academic complex',
            elevator_count: 3,
            stair_count: 4,
        },
    },
    {
        id: 'bld-08',
        name: 'Fowler Museum',
        display_name: 'Fowler Museum at UCLA',
        description:
            'Cultural venue with auditorium, galleries, terraces, and courtyards for receptions, lectures, and performances',
        tags: ['building', 'cultural', 'museum', 'arts'],
        count: 2,
        capacity: 600,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '308 Charles E Young Drive North',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0730,
                lng: -118.4437,
            },
        },
        features: {
            parking_spaces: 100,
            accessibility: true,
            bike_storage: false,
            shower_facilities: false,
            cafe_on_site: false,
            gym: false,
            rooftop_garden: false,
            ev_charging: 5,
            security_level: 'high',
        },
        building_details: {
            year_built: 1992,
            architect: 'Richard Meier (style)',
            total_floors: 3,
            basement_levels: 0,
            floor_area_sqm: 4500,
            energy_rating: 'Energy Star Certified',
            construction_type: 'Modern museum construction',
            elevator_count: 2,
            stair_count: 3,
        },
    },
    {
        id: 'bld-09',
        name: 'Royce Hall',
        display_name: 'Royce Hall',
        description:
            'Iconic 1,834-seat performance hall with conference rooms, green rooms, and outdoor terraces for concerts, ceremonies, and events',
        tags: ['building', 'performing-arts', 'historic', 'landmark'],
        count: 2,
        capacity: 2000,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '340 Royce Drive',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0729,
                lng: -118.4422,
            },
        },
        features: {
            parking_spaces: 200,
            accessibility: true,
            bike_storage: false,
            shower_facilities: true,
            cafe_on_site: false,
            gym: false,
            rooftop_garden: false,
            ev_charging: 8,
            security_level: 'high',
        },
        building_details: {
            year_built: 1929,
            architect: 'Allison & Allison',
            total_floors: 3,
            basement_levels: 1,
            floor_area_sqm: 7000,
            energy_rating: 'Historic Building — Energy Retrofit',
            construction_type: 'Romanesque Revival brick and reinforced concrete',
            elevator_count: 2,
            stair_count: 4,
        },
    },
    {
        id: 'bld-10',
        name: 'James West Alumni Center',
        display_name: 'James West Alumni Center',
        description:
            'Event venue with conference rooms, founders room, galleria, and outdoor patios for receptions, meetings, and celebrations',
        tags: ['building', 'alumni', 'events', 'conference'],
        count: 2,
        capacity: 400,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '325 Westwood Plaza',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0695,
                lng: -118.4450,
            },
        },
        features: {
            parking_spaces: 60,
            accessibility: true,
            bike_storage: false,
            shower_facilities: false,
            cafe_on_site: false,
            gym: false,
            rooftop_garden: false,
            ev_charging: 4,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1990,
            architect: 'Robert Kerr (namesake)',
            total_floors: 2,
            basement_levels: 0,
            floor_area_sqm: 3500,
            energy_rating: 'Energy Star Certified',
            construction_type: 'Modern campus architecture',
            elevator_count: 1,
            stair_count: 2,
        },
    },
    {
        id: 'bld-11',
        name: 'Hammer Museum',
        display_name: 'Hammer Museum',
        description:
            'Cultural venue with Billy Wilder Theater, galleries, terraces, boardroom, and sculpture gardens for up to 900 guests',
        tags: ['building', 'cultural', 'museum', 'arts', 'performing-arts'],
        count: 2,
        capacity: 900,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '10899 Wilshire Boulevard',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90024',
            country: 'United States',
            coordinates: {
                lat: 34.0590,
                lng: -118.4435,
            },
        },
        features: {
            parking_spaces: 200,
            accessibility: true,
            bike_storage: false,
            shower_facilities: false,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 8,
            security_level: 'high',
        },
        building_details: {
            year_built: 1990,
            architect: 'Edward Larrabee Barnes',
            total_floors: 4,
            basement_levels: 1,
            floor_area_sqm: 8000,
            energy_rating: 'LEED Silver',
            construction_type: 'Modern museum construction',
            elevator_count: 3,
            stair_count: 4,
        },
    },
    {
        id: 'bld-12',
        name: 'Schoenberg Music Building',
        display_name: 'Schoenberg Music Building',
        description:
            'Music performance complex with 522-seat concert hall, recital halls, practice rooms, recording labs, and rehearsal spaces',
        tags: ['building', 'performing-arts', 'music', 'academic'],
        count: 2,
        capacity: 800,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '445 Charles E Young Drive East',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0706,
                lng: -118.4400,
            },
        },
        features: {
            parking_spaces: 100,
            accessibility: true,
            bike_storage: false,
            shower_facilities: false,
            cafe_on_site: false,
            gym: false,
            rooftop_garden: false,
            ev_charging: 4,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1955,
            architect: 'Welton Becket',
            total_floors: 3,
            basement_levels: 0,
            floor_area_sqm: 5500,
            energy_rating: 'Historic Building — Energy Retrofit',
            construction_type: 'Mid-century modern academic',
            elevator_count: 2,
            stair_count: 3,
        },
    },
    {
        id: 'bld-13',
        name: 'Theater, Film & Television',
        display_name: 'UCLA School of Theater, Film & Television',
        description:
            'Performance and production complex with Freud Playhouse, James Bridges Theater, Little Theater, studio spaces, and screening rooms',
        tags: ['building', 'performing-arts', 'film', 'theater', 'academic'],
        count: 2,
        capacity: 1100,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '245 Charles E Young Drive East',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0718,
                lng: -118.4405,
            },
        },
        features: {
            parking_spaces: 150,
            accessibility: true,
            bike_storage: false,
            shower_facilities: true,
            cafe_on_site: false,
            gym: false,
            rooftop_garden: false,
            ev_charging: 6,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1962,
            architect: 'Welton Becket',
            total_floors: 3,
            basement_levels: 0,
            floor_area_sqm: 7000,
            energy_rating: 'LEED Silver',
            construction_type: 'Theater and production facility',
            elevator_count: 2,
            stair_count: 4,
        },
    },
    {
        id: 'bld-14',
        name: 'CNSI',
        display_name: 'California NanoSystems Institute',
        description:
            'Research facility with 260-seat auditorium, conference rooms, lobby space, multipurpose meeting space, and outdoor terraces',
        tags: ['building', 'academic', 'research', 'conference'],
        count: 2,
        capacity: 500,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '570 Westwood Plaza',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0690,
                lng: -118.4425,
            },
        },
        features: {
            parking_spaces: 100,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 8,
            security_level: 'high',
        },
        building_details: {
            year_built: 2007,
            architect: 'RTKL Associates',
            total_floors: 5,
            basement_levels: 1,
            floor_area_sqm: 6800,
            energy_rating: 'LEED Gold',
            construction_type: 'Modern research facility with glass facade',
            elevator_count: 3,
            stair_count: 4,
        },
    },
    {
        id: 'bld-15',
        name: 'Botanical Gardens',
        display_name: 'Mildred E. Mathias Botanical Garden',
        description:
            'Garden venue with La Kretz Pavilion, terraces, patios, amphitheater, and 5,000+ plant species across 7 acres',
        tags: ['building', 'outdoor', 'garden', 'events'],
        count: 1,
        capacity: 300,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G'],
        address: {
            street: '707 Tiverton Drive',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0668,
                lng: -118.4410,
            },
        },
        features: {
            parking_spaces: 50,
            accessibility: true,
            bike_storage: false,
            shower_facilities: false,
            cafe_on_site: false,
            gym: false,
            rooftop_garden: false,
            ev_charging: 2,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1930,
            architect: 'UCLA Grounds Division',
            total_floors: 1,
            basement_levels: 0,
            floor_area_sqm: 2500,
            energy_rating: 'LEED Gold',
            construction_type: 'Garden pavilion with outdoor spaces',
            elevator_count: 0,
            stair_count: 1,
        },
    },
    {
        id: 'bld-16',
        name: 'Samueli Engineering',
        display_name: 'Henry Samueli School of Engineering',
        description:
            'Engineering complex with auditoriums, classrooms, Mong Learning Center, Cohen Room, maker spaces, and outdoor patios',
        tags: ['building', 'academic', 'engineering', 'conference'],
        count: 2,
        capacity: 600,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '420 Westwood Plaza',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0696,
                lng: -118.4430,
            },
        },
        features: {
            parking_spaces: 150,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 10,
            security_level: 'standard',
        },
        building_details: {
            year_built: 2006,
            architect: 'Morphosis Architects',
            total_floors: 5,
            basement_levels: 1,
            floor_area_sqm: 9000,
            energy_rating: 'LEED Gold',
            construction_type: 'Modern academic and research complex',
            elevator_count: 4,
            stair_count: 4,
        },
    },
    {
        id: 'bld-17',
        name: 'Law School',
        display_name: 'UCLA School of Law',
        description:
            'Academic venue with classrooms, meeting rooms, student lounges, and Shapiro Courtyard for legal conferences, symposiums, and events',
        tags: ['building', 'academic', 'law', 'conference'],
        count: 2,
        capacity: 500,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '385 Charles E Young Drive East',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0724,
                lng: -118.4390,
            },
        },
        features: {
            parking_spaces: 120,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 6,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1967,
            architect: 'Jones & Emmons',
            total_floors: 4,
            basement_levels: 0,
            floor_area_sqm: 6000,
            energy_rating: 'Energy Star Certified',
            construction_type: 'Brutalist academic complex',
            elevator_count: 3,
            stair_count: 4,
        },
    },
    {
        id: 'bld-18',
        name: 'Moore Hall',
        display_name: 'Moore Hall',
        description:
            'Academic venue with reading room, classrooms, auditorium, and courtyard for lectures, colloquia, and educational conferences',
        tags: ['building', 'academic', 'education', 'conference'],
        count: 2,
        capacity: 400,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '457 Charles E Young Drive South',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0700,
                lng: -118.4412,
            },
        },
        features: {
            parking_spaces: 80,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: false,
            gym: false,
            rooftop_garden: false,
            ev_charging: 4,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1930,
            architect: 'Allison & Allison',
            total_floors: 3,
            basement_levels: 0,
            floor_area_sqm: 4000,
            energy_rating: 'Historic Building — Energy Retrofit',
            construction_type: 'Romanesque Revival brick',
            elevator_count: 1,
            stair_count: 3,
        },
    },
    {
        id: 'bld-19',
        name: 'Luskin School of Public Affairs',
        display_name: 'UCLA Luskin School of Public Affairs',
        description:
            'Academic venue with classrooms, 3rd Floor Commons, patio, and terrace for lectures, career fairs, and commencement events',
        tags: ['building', 'academic', 'public-affairs', 'conference'],
        count: 2,
        capacity: 400,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '337 Charles E Young Drive East',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0744,
                lng: -118.4398,
            },
        },
        features: {
            parking_spaces: 60,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: false,
            gym: false,
            rooftop_garden: false,
            ev_charging: 4,
            security_level: 'standard',
        },
        building_details: {
            year_built: 2010,
            architect: 'Pei Cobb Freed & Partners',
            total_floors: 4,
            basement_levels: 0,
            floor_area_sqm: 5000,
            energy_rating: 'LEED Gold',
            construction_type: 'Modern academic building',
            elevator_count: 2,
            stair_count: 3,
        },
    },
    {
        id: 'bld-20',
        name: 'Powell Library',
        display_name: 'Powell Library & Young Research Library',
        description:
            'Academic library complex with classrooms, research commons, study spaces, Lux Lab, and special collections for workshops and lectures',
        tags: ['building', 'academic', 'library', 'research'],
        count: 2,
        capacity: 300,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '10740 Dickson Court',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0715,
                lng: -118.4420,
            },
        },
        features: {
            parking_spaces: 60,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: true,
            gym: false,
            rooftop_garden: false,
            ev_charging: 4,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1929,
            architect: 'Allison & Allison',
            total_floors: 3,
            basement_levels: 1,
            floor_area_sqm: 8000,
            energy_rating: 'Historic Building — Energy Retrofit',
            construction_type: 'Romanesque Revival brick and concrete',
            elevator_count: 2,
            stair_count: 4,
        },
    },
    {
        id: 'bld-21',
        name: 'DataX',
        display_name: 'DataX Research Hub',
        description:
            'Data science research hub with Impact Forum event space, conference rooms, collaboration hub, hotel offices, and lounge areas',
        tags: ['building', 'academic', 'research', 'technology'],
        count: 1,
        capacity: 200,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G'],
        address: {
            street: '550 Westwood Plaza',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0685,
                lng: -118.4420,
            },
        },
        features: {
            parking_spaces: 80,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: false,
            gym: false,
            rooftop_garden: false,
            ev_charging: 6,
            security_level: 'standard',
        },
        building_details: {
            year_built: 2022,
            architect: 'Gensler',
            total_floors: 2,
            basement_levels: 0,
            floor_area_sqm: 3000,
            energy_rating: 'LEED Gold',
            construction_type: 'Modern tech research hub',
            elevator_count: 1,
            stair_count: 2,
        },
    },
    {
        id: 'bld-22',
        name: 'Kaplan Hall',
        display_name: 'Kaplan Hall',
        description:
            'Academic building with event spaces, classrooms, and meeting rooms for colloquia, lectures, and student group events',
        tags: ['building', 'academic', 'conference'],
        count: 1,
        capacity: 100,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G'],
        address: {
            street: '377 Charles E Young Drive East',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0725,
                lng: -118.4395,
            },
        },
        features: {
            parking_spaces: 40,
            accessibility: true,
            bike_storage: true,
            shower_facilities: false,
            cafe_on_site: false,
            gym: false,
            rooftop_garden: false,
            ev_charging: 2,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1960,
            architect: 'Welton Becket',
            total_floors: 2,
            basement_levels: 0,
            floor_area_sqm: 2000,
            energy_rating: 'Energy Star Certified',
            construction_type: 'Mid-century academic building',
            elevator_count: 1,
            stair_count: 2,
        },
    },
    {
        id: 'bld-23',
        name: 'Lake Arrowhead Lodge',
        display_name: 'UCLA Lake Arrowhead Lodge',
        description:
            'Off-campus conference center and lodge with 10,000 sq ft of event space, 13 meeting rooms, 254 guest rooms, pool, and recreation facilities',
        tags: ['building', 'conference', 'retreat', 'hotel'],
        count: 2,
        capacity: 400,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G', 'lvl-1'],
        address: {
            street: '850 Willow Creek Road',
            suburb: 'Lake Arrowhead',
            state: 'CA',
            postcode: '92352',
            country: 'United States',
            coordinates: {
                lat: 34.2495,
                lng: -117.1890,
            },
        },
        features: {
            parking_spaces: 100,
            accessibility: true,
            bike_storage: false,
            shower_facilities: true,
            cafe_on_site: true,
            gym: true,
            rooftop_garden: false,
            ev_charging: 6,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1922,
            architect: 'Paul Revere Williams (renovation)',
            total_floors: 3,
            basement_levels: 0,
            floor_area_sqm: 5000,
            energy_rating: 'Energy Star Certified',
            construction_type: 'Rustic lodge with modern renovations',
            elevator_count: 1,
            stair_count: 3,
        },
    },
    {
        id: 'bld-24',
        name: 'UCLA Recreation',
        display_name: 'UCLA Recreation & Athletic Venues',
        description:
            'Athletic and recreation complex including Drake Stadium, Los Angeles Tennis Center, John Wooden Center, and Sunset Canyon Recreation Center',
        tags: ['building', 'athletics', 'recreation', 'outdoor'],
        count: 1,
        capacity: 5000,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G'],
        address: {
            street: '100 Bruin Walk',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0715,
                lng: -118.4475,
            },
        },
        features: {
            parking_spaces: 300,
            accessibility: true,
            bike_storage: true,
            shower_facilities: true,
            cafe_on_site: true,
            gym: true,
            rooftop_garden: false,
            ev_charging: 12,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1965,
            architect: 'Various',
            total_floors: 2,
            basement_levels: 0,
            floor_area_sqm: 20000,
            energy_rating: 'LEED Silver',
            construction_type: 'Athletic and recreation facilities',
            elevator_count: 2,
            stair_count: 6,
        },
    },
    {
        id: 'bld-25',
        name: 'Campus Outdoor Spaces',
        display_name: 'UCLA Campus Outdoor Venues',
        description:
            'Campus-wide outdoor event spaces including Wilson Plaza, Court of Sciences, Franklin Murphy Sculpture Garden, Meyerhoff Park, and Dickson Courts',
        tags: ['building', 'outdoor', 'plaza', 'events'],
        count: 1,
        capacity: 2000,
        parent_id: 'region-ucla-campus',
        triggers: [],
        levels: ['lvl-G'],
        address: {
            street: '405 Hilgard Avenue',
            suburb: 'Westwood',
            state: 'CA',
            postcode: '90095',
            country: 'United States',
            coordinates: {
                lat: 34.0708,
                lng: -118.4430,
            },
        },
        features: {
            parking_spaces: 200,
            accessibility: true,
            bike_storage: false,
            shower_facilities: false,
            cafe_on_site: false,
            gym: false,
            rooftop_garden: false,
            ev_charging: 0,
            security_level: 'standard',
        },
        building_details: {
            year_built: 1929,
            architect: 'Various',
            total_floors: 1,
            basement_levels: 0,
            floor_area_sqm: 30000,
            energy_rating: 'N/A — Outdoor spaces',
            construction_type: 'Landscaped plazas and courtyards',
            elevator_count: 0,
            stair_count: 0,
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
    if (isGroundFloor) features.push('reception', 'lobby', 'event-spaces');
    if (isMezzanine)
        features.push('meeting-rooms', 'break-areas', 'informal-seating');
    if (levelType === 'office')
        features.push('event-spaces', 'meeting-rooms', 'conference-rooms');
    if (isParkingLevel) features.push('parking', 'ev-charging');

    return {
        id: `${building.id}_${id}`,
        name: levelName,
        display_name: displayName,
        parent_id: building.id,
        description: `${levelName} of ${building.name} featuring ${features.join(', ')}`,
        tags: ['level', levelType, building.tags[1]].filter(Boolean),
        map_id: `assets/maps/${building.id.replace('bld-', 'level_')}${levelCode}.svg`,
        code: `${building.name.substring(0, 3).toUpperCase()}-${levelCode}`,
        type: levelType,
        count: predictableRandomInt(15, 5),
        capacity:
            capacityByType[levelType] || Math.floor(building.capacity * 0.3),
        location: `${building.address.coordinates.lat},${building.address.coordinates.lng}`,
        level_number: levelNumber,
        floor_area_sqm: Math.floor(
            building.building_details.floor_area_sqm / building.count,
        ),
        ceiling_height:
            levelType === 'lobby' ? 4.5 : isParkingLevel ? 2.4 : 3.5,
        features: features,
        accessibility: {
            wheelchair_accessible: true,
            elevator_access:
                !isParkingLevel || building.building_details.elevator_count > 0,
            accessible_bathrooms: levelType !== 'parking',
            hearing_loop: isGroundFloor || levelType === 'office',
        },
        utilities: {
            power_outlets: 'extensive',
            data_points: 'fiber_optic',
            hvac_zones: Math.ceil((capacityByType[levelType] || 50) / 50),
            fire_safety: 'compliant',
            security_systems: building.features.security_level,
        },
        spaces: {
            meeting_rooms: predictableRandomInt(8, 3),
            workstations: 0,
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
            after_hours_access: 'keycard',
            temperature_range: {
                min: 68,
                max: 76,
            },
            lighting: {
                type: 'LED with daylight sensors',
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
            maintenance_contact: 'UCLA Facilities Management',
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
