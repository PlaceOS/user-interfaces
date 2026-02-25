/**
 * Database Service
 * Uses Dexie.js (IndexedDB wrapper) for client-side persistent storage
 * Works with Netlify deployments - data persists in browser
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .service('DatabaseService', ['$q', DatabaseService]);

    function DatabaseService($q) {
        var self = this;
        var db = null;
        var initialized = false;
        var initPromise = null;

        // Default mock events data
        var defaultEvents = [
            {
                id: 'event_1',
                title: 'Annual Graduation Ceremony',
                event_start: new Date('2025-06-15T10:00:00').getTime(),
                event_end: new Date('2025-06-15T14:00:00').getTime(),
                description: 'Annual graduation ceremony for undergraduate students',
                created_at: new Date('2025-05-01T09:00:00').toISOString(),
                updated_at: new Date('2025-05-15T14:30:00').toISOString(),
                extension_data: {
                    venue: 'Royce Hall Main Auditorium',
                    venue_id: 'venue_55',
                    organizer: { name: 'Sarah Chen', email: 'schen@ucla.edu', phone: '(310) 825-1234' },
                    request_items: ['PARKING', 'SECURITY'],
                    attendance_count: 500,
                    is_outdoor: false,
                    is_major_event: true,
                    special_requirements: 'Need stage setup and sound system',
                    workflow: {
                        overall_status: 'pending',
                        approval_tasks: [
                            { id: 'task_v1', stage: 'VENUE', status: 'approved', owner_role: 'VENUE_Approver', assignee_user_id: null, assignee_name: null, required_documents: [], due_at: new Date('2025-05-03T12:00:00').getTime(), completed_at: new Date('2025-05-02T15:00:00').getTime(), comments: 'Approved', audit_trail: [] },
                            { id: 'task_u1', stage: 'SAFETY', status: 'approved', owner_role: 'SAFETY_Approver', assignee_user_id: null, assignee_name: null, required_documents: ['SECURITY_PLAN'], due_at: new Date('2025-05-05T12:00:00').getTime(), completed_at: new Date('2025-05-04T10:00:00').getTime(), comments: 'Security plan approved', audit_trail: [] },
                            { id: 'task_f1', stage: 'SETUP', status: 'pending', owner_role: 'SETUP_Approver', assignee_user_id: null, assignee_name: null, required_documents: ['SITE_PLAN'], due_at: new Date('2025-05-07T12:00:00').getTime(), completed_at: null, comments: null, audit_trail: [] },
                            { id: 'task_p1', stage: 'PARKING', status: 'pending', owner_role: 'PARKING_Approver', assignee_user_id: null, assignee_name: null, required_documents: ['TRAFFIC_PLAN'], due_at: new Date('2025-05-07T12:00:00').getTime(), completed_at: null, comments: null, audit_trail: [] }
                        ],
                        submitted_at: new Date('2025-05-01T09:00:00').getTime(),
                        last_updated: new Date('2025-05-04T10:00:00').getTime(),
                        sla_hours: 96,
                        sla_warning: false,
                        progress_percent: 50
                    },
                    documents: [
                        { id: 'doc_1', type: 'SECURITY_PLAN', name: 'Security Plan', required: true, uploaded: true, validated: true, upload_id: 'up_1', uploaded_at: new Date('2025-05-01T10:00:00').getTime() },
                        { id: 'doc_2', type: 'SITE_PLAN', name: 'Site Plan', required: true, uploaded: false, validated: false, upload_id: null, uploaded_at: null },
                        { id: 'doc_3', type: 'TRAFFIC_PLAN', name: 'Traffic Management Plan', required: true, uploaded: false, validated: false, upload_id: null, uploaded_at: null }
                    ]
                }
            },
            {
                id: 'event_2',
                title: 'Welcome Week BBQ',
                event_start: new Date('2025-09-20T17:00:00').getTime(),
                event_end: new Date('2025-09-20T20:00:00').getTime(),
                description: 'Student welcome event with food and activities',
                created_at: new Date('2025-05-10T14:00:00').toISOString(),
                updated_at: new Date('2025-05-12T11:00:00').toISOString(),
                extension_data: {
                    venue: 'Bruin Plaza',
                    venue_id: 'venue_44',
                    organizer: { name: 'Mike Johnson', email: 'mjohnson@ucla.edu', phone: '(310) 825-5678' },
                    request_items: ['ALCOHOL', 'OUTDOOR_SETUP'],
                    attendance_count: 200,
                    is_outdoor: true,
                    is_major_event: false,
                    special_requirements: '',
                    workflow: {
                        overall_status: 'approved',
                        approval_tasks: [
                            { id: 'task_v2', stage: 'VENUE', status: 'approved', owner_role: 'VENUE_Approver', assignee_user_id: null, assignee_name: null, required_documents: [], due_at: new Date('2025-05-12T12:00:00').getTime(), completed_at: new Date('2025-05-11T09:00:00').getTime(), comments: 'Approved', audit_trail: [] },
                            { id: 'task_e2', stage: 'SAFETY', status: 'approved', owner_role: 'SAFETY_Approver', assignee_user_id: null, assignee_name: null, required_documents: ['ALCOHOL_PERMIT'], due_at: new Date('2025-05-14T12:00:00').getTime(), completed_at: new Date('2025-05-12T11:00:00').getTime(), comments: 'All permits in order', audit_trail: [] },
                            { id: 'task_i2', stage: 'SERVICES', status: 'approved', owner_role: 'SERVICES_Approver', assignee_user_id: null, assignee_name: null, required_documents: ['COI'], due_at: new Date('2025-05-14T12:00:00').getTime(), completed_at: new Date('2025-05-12T10:30:00').getTime(), comments: 'COI verified', audit_trail: [] }
                        ],
                        submitted_at: new Date('2025-05-10T14:00:00').getTime(),
                        last_updated: new Date('2025-05-12T11:00:00').getTime(),
                        sla_hours: 48,
                        sla_warning: false,
                        progress_percent: 100
                    },
                    documents: [
                        { id: 'doc_4', type: 'ALCOHOL_PERMIT', name: 'Alcohol Service Permit', required: true, uploaded: true, validated: true, upload_id: 'up_2', uploaded_at: new Date('2025-05-10T15:00:00').getTime() },
                        { id: 'doc_5', type: 'COI', name: 'Certificate of Insurance', required: true, uploaded: true, validated: true, upload_id: 'up_3', uploaded_at: new Date('2025-05-10T15:30:00').getTime() }
                    ]
                }
            },
            {
                id: 'event_3',
                title: 'Research Symposium',
                event_start: new Date('2025-07-10T09:00:00').getTime(),
                event_end: new Date('2025-07-10T17:00:00').getTime(),
                description: 'Annual research presentations and poster session',
                created_at: new Date('2025-05-14T10:00:00').toISOString(),
                updated_at: new Date('2025-05-14T10:00:00').toISOString(),
                extension_data: {
                    venue: 'Grand Horizon & Terrace',
                    venue_id: 'venue_1',
                    organizer: { name: 'Dr. Emily Rodriguez', email: 'erodriguez@ucla.edu', phone: '(310) 825-9012' },
                    request_items: ['AV_LIVESTREAM'],
                    attendance_count: 150,
                    is_outdoor: false,
                    is_major_event: false,
                    special_requirements: 'Need projectors and microphones in multiple rooms',
                    workflow: {
                        overall_status: 'pending',
                        approval_tasks: [
                            { id: 'task_v3', stage: 'VENUE', status: 'approved', owner_role: 'VENUE_Approver', assignee_user_id: null, assignee_name: null, required_documents: [], due_at: new Date('2025-05-15T12:00:00').getTime(), completed_at: new Date('2025-05-14T16:00:00').getTime(), comments: 'Venue confirmed', audit_trail: [] },
                            { id: 'task_a3', stage: 'AV_TECH', status: 'pending', owner_role: 'AV_TECH_Approver', assignee_user_id: null, assignee_name: null, required_documents: [], due_at: new Date('2025-05-15T12:00:00').getTime(), completed_at: null, comments: null, audit_trail: [] }
                        ],
                        submitted_at: new Date('2025-05-14T10:00:00').getTime(),
                        last_updated: new Date('2025-05-14T16:00:00').getTime(),
                        sla_hours: 24,
                        sla_warning: true,
                        progress_percent: 50
                    },
                    documents: []
                }
            },
            {
                id: 'event_4',
                title: 'Fourth of July Fireworks Show',
                event_start: new Date('2025-07-04T20:00:00').getTime(),
                event_end: new Date('2025-07-04T22:00:00').getTime(),
                description: 'Independence Day celebration with fireworks display',
                created_at: new Date('2025-05-01T08:00:00').toISOString(),
                updated_at: new Date('2025-05-05T14:00:00').toISOString(),
                extension_data: {
                    venue: 'Drake Stadium',
                    venue_id: 'venue_122',
                    organizer: { name: 'Campus Events Team', email: 'events@ucla.edu', phone: '(310) 825-0000' },
                    request_items: ['FIREWORKS', 'SECURITY', 'PARKING'],
                    attendance_count: 1000,
                    is_outdoor: true,
                    is_major_event: true,
                    special_requirements: 'Professional pyrotechnics crew required',
                    workflow: {
                        overall_status: 'rejected',
                        approval_tasks: [
                            { id: 'task_v4', stage: 'VENUE', status: 'approved', owner_role: 'VENUE_Approver', assignee_user_id: null, assignee_name: null, required_documents: [], due_at: new Date('2025-05-04T12:00:00').getTime(), completed_at: new Date('2025-05-02T14:00:00').getTime(), comments: 'Venue available', audit_trail: [] },
                            { id: 'task_s4', stage: 'SAFETY', status: 'rejected', owner_role: 'SAFETY_Approver', assignee_user_id: null, assignee_name: null, required_documents: ['VENDOR_LICENSE', 'SITE_PLAN', 'SECURITY_PLAN', 'NOISE_PERMIT'], due_at: new Date('2025-05-05T12:00:00').getTime(), completed_at: new Date('2025-05-05T14:00:00').getTime(), comments: 'Vendor license expired. Please resubmit with current documentation.', audit_trail: [] },
                            { id: 'task_i4', stage: 'SERVICES', status: 'pending', owner_role: 'SERVICES_Approver', assignee_user_id: null, assignee_name: null, required_documents: ['COI', 'RISK_ASSESSMENT'], due_at: new Date('2025-05-05T12:00:00').getTime(), completed_at: null, comments: null, audit_trail: [] }
                        ],
                        submitted_at: new Date('2025-05-01T08:00:00').getTime(),
                        last_updated: new Date('2025-05-05T14:00:00').getTime(),
                        sla_hours: 72,
                        sla_warning: false,
                        progress_percent: 33
                    },
                    documents: [
                        { id: 'doc_6', type: 'VENDOR_LICENSE', name: 'Vendor License', required: true, uploaded: true, validated: false, upload_id: 'up_4', uploaded_at: new Date('2025-05-01T09:00:00').getTime() },
                        { id: 'doc_7', type: 'SITE_PLAN', name: 'Site Plan', required: true, uploaded: true, validated: true, upload_id: 'up_5', uploaded_at: new Date('2025-05-01T09:15:00').getTime() },
                        { id: 'doc_8', type: 'COI', name: 'Certificate of Insurance', required: true, uploaded: false, validated: false, upload_id: null, uploaded_at: null },
                        { id: 'doc_9', type: 'RISK_ASSESSMENT', name: 'Risk Assessment', required: true, uploaded: false, validated: false, upload_id: null, uploaded_at: null }
                    ]
                }
            },
            {
                id: 'event_5',
                title: 'Department Holiday Party',
                event_start: new Date('2025-12-15T18:00:00').getTime(),
                event_end: new Date('2025-12-15T21:00:00').getTime(),
                description: 'Year-end celebration for faculty and staff',
                created_at: new Date('2025-05-15T13:00:00').toISOString(),
                updated_at: new Date('2025-05-15T13:00:00').toISOString(),
                extension_data: {
                    venue: 'Sierra',
                    venue_id: 'venue_23',
                    organizer: { name: 'Jessica Martinez', email: 'jmartinez@ucla.edu', phone: '(310) 825-3456' },
                    request_items: [],
                    attendance_count: 50,
                    is_outdoor: false,
                    is_major_event: false,
                    special_requirements: '',
                    workflow: {
                        overall_status: 'draft',
                        approval_tasks: [
                            { id: 'task_v5', stage: 'VENUE', status: 'pending', owner_role: 'VENUE_Approver', assignee_user_id: null, assignee_name: null, required_documents: [], due_at: new Date('2025-05-16T12:00:00').getTime(), completed_at: null, comments: null, audit_trail: [] }
                        ],
                        submitted_at: null,
                        last_updated: new Date('2025-05-15T13:00:00').getTime(),
                        sla_hours: 24,
                        sla_warning: false,
                        progress_percent: 0
                    },
                    documents: []
                }
            }
        ];

        // Default venues data
        var defaultVenues = [
            { id: 'venue_1', name: 'Grand Horizon & Terrace', building: 'Covel Commons', type: 'hall', capacity: 350, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Grand Horizon & Terrace at Covel Commons. Capacity: 350. Event Space venue.', hourly_rate: 450, half_day_rate: 3000, full_day_rate: 3600, features: ['Audio System', 'Projector', 'Flexible Seating', 'Catering Setup', 'Terrace Access', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'Event Facilitators', 'On-site Parking'], approval_required: true, sqft: 5900, floor: 'Ground Floor' },
            { id: 'venue_2', name: 'Salon A & Terrace', building: 'Covel Commons', type: 'hall', capacity: 200, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Salon A & Terrace at Covel Commons. Capacity: 200. Event Space venue.', hourly_rate: 400, half_day_rate: 2750, full_day_rate: 3150, features: ['Audio System', 'Projector', 'Flexible Seating', 'Catering Setup', 'Terrace Access', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'Event Facilitators', 'On-site Parking'], approval_required: true, sqft: 3000, floor: 'Ground Floor' },
            { id: 'venue_3', name: 'South Bay Room', building: 'Covel Commons', type: 'meeting', capacity: 60, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'South Bay Room at Covel Commons. Capacity: 60. Meeting Room venue.', hourly_rate: 130, half_day_rate: 900, full_day_rate: 1050, features: ['Audio System', 'Projector', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'On-site Parking'], approval_required: false, sqft: 960, floor: 'Ground Floor' },
            { id: 'venue_4', name: 'West Coast', building: 'Covel Commons', type: 'meeting', capacity: 55, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'West Coast at Covel Commons. Capacity: 55. Meeting Room venue.', hourly_rate: 130, half_day_rate: 900, full_day_rate: 1050, features: ['Audio System', 'Projector', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'On-site Parking'], approval_required: false, sqft: 920, floor: 'Ground Floor' },
            { id: 'venue_5', name: 'North Ridge', building: 'Covel Commons', type: 'meeting', capacity: 50, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'North Ridge at Covel Commons. Capacity: 50. Meeting Room venue.', hourly_rate: 130, half_day_rate: 900, full_day_rate: 1050, features: ['Audio System', 'Projector', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'On-site Parking'], approval_required: false, sqft: 874, floor: 'Ground Floor' },
            { id: 'venue_6', name: 'Conference Room L-04', building: 'Covel Commons', type: 'conference', capacity: 20, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Conference Room L-04 at Covel Commons. Capacity: 20. Conference Room venue.', hourly_rate: 50, half_day_rate: 250, full_day_rate: 400, features: ['Display Screen', 'Video Conference', 'Whiteboard', 'Phone', 'WiFi'], services: ['Audio-Visual Tech & Support', 'Complimentary Wi-Fi'], approval_required: false, sqft: 400, floor: 'Level 1' },
            { id: 'venue_7', name: 'Conference Room 207', building: 'Covel Commons', type: 'conference', capacity: 20, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Conference Room 207 at Covel Commons. Capacity: 20. Conference Room venue.', hourly_rate: 50, half_day_rate: 250, full_day_rate: 400, features: ['Display Screen', 'Video Conference', 'Whiteboard', 'Phone', 'WiFi'], services: ['Audio-Visual Tech & Support', 'Complimentary Wi-Fi'], approval_required: false, sqft: 400, floor: 'Level 1' },
            { id: 'venue_8', name: 'Northwest Campus Auditorium', building: 'Covel Commons', type: 'auditorium', capacity: 349, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Teleconferences, lectures, presentations, forums, small theatrical performances', hourly_rate: 300, half_day_rate: 2000, full_day_rate: 2400, features: ['Audio System', 'Projector', 'Stage/Platform', 'Tiered Seating', 'Lighting Control', 'Video Conference'], services: ['Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'Event Facilitators', 'On-site Parking'], approval_required: true, sqft: 4500, floor: 'Ground Floor' },
            { id: 'venue_9', name: 'Palisades Ballroom', building: 'Carnesale Commons', type: 'ballroom', capacity: 450, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Palisades Ballroom at Carnesale Commons. Capacity: 450. Ballroom venue.', hourly_rate: 450, half_day_rate: 3000, full_day_rate: 3600, features: ['Audio System', 'Projector', 'Stage/Platform', 'Flexible Seating', 'Catering Setup', 'Dance Floor'], services: ['Full Catering Services', 'Business Center', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'Event Facilitators & Conference Managers', 'On-site Parking', 'Event Material Storage', 'Signage & Displays'], approval_required: true, sqft: 6700, floor: 'Ground Floor' },
            { id: 'venue_10', name: 'Palisades ABCF Section', building: 'Carnesale Commons', type: 'hall', capacity: 300, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Palisades ABCF Section at Carnesale Commons. Capacity: 300. Event Space venue.', hourly_rate: 420, half_day_rate: 2900, full_day_rate: 3400, features: ['Audio System', 'Projector', 'Flexible Seating', 'Catering Setup', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'Event Facilitators & Conference Managers', 'On-site Parking'], approval_required: true, sqft: 4500, floor: 'Ground Floor' },
            { id: 'venue_11', name: 'Palisades DE Section', building: 'Carnesale Commons', type: 'hall', capacity: 150, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Palisades DE Section at Carnesale Commons. Capacity: 150. Event Space venue.', hourly_rate: 300, half_day_rate: 2100, full_day_rate: 2600, features: ['Audio System', 'Projector', 'Flexible Seating', 'Catering Setup', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'On-site Parking'], approval_required: false, sqft: 2250, floor: 'Ground Floor' },
            { id: 'venue_12', name: 'Malibu', building: 'Carnesale Commons', type: 'meeting', capacity: 40, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Malibu at Carnesale Commons. Capacity: 40. Meeting Room venue.', hourly_rate: 110, half_day_rate: 750, full_day_rate: 1000, features: ['Display Screen', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'On-site Parking'], approval_required: false, sqft: 713, floor: 'Level 1' },
            { id: 'venue_13', name: 'Venice A & B', building: 'Carnesale Commons', type: 'meeting', capacity: 70, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Venice A & B at Carnesale Commons. Capacity: 70. Meeting Room venue.', hourly_rate: 140, half_day_rate: 1000, full_day_rate: 1150, features: ['Audio System', 'Projector', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'On-site Parking'], approval_required: false, sqft: 1211, floor: 'Level 1' },
            { id: 'venue_14', name: 'Hermosa A & B', building: 'Carnesale Commons', type: 'meeting', capacity: 70, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Hermosa A & B at Carnesale Commons. Capacity: 70. Meeting Room venue.', hourly_rate: 140, half_day_rate: 1000, full_day_rate: 1150, features: ['Audio System', 'Projector', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'On-site Parking'], approval_required: false, sqft: 1205, floor: 'Level 1' },
            { id: 'venue_15', name: 'Plaza Room', building: 'De Neve Plaza', type: 'hall', capacity: 250, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Plaza Room at De Neve Plaza. Capacity: 250. Event Space venue.', hourly_rate: 300, half_day_rate: 2100, full_day_rate: 2400, features: ['Audio System', 'Projector', 'Flexible Seating', 'Catering Setup', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'Event Facilitators & Conference Managers', 'On-site Parking'], approval_required: true, sqft: 3700, floor: 'Ground Floor' },
            { id: 'venue_16', name: 'Plaza A', building: 'De Neve Plaza', type: 'conference', capacity: 120, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Plaza A at De Neve Plaza. Capacity: 120. Conference Room venue.', hourly_rate: 190, half_day_rate: 1300, full_day_rate: 1700, features: ['Audio System', 'Projector', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'On-site Parking'], approval_required: false, sqft: 1850, floor: 'Ground Floor' },
            { id: 'venue_17', name: 'Plaza B', building: 'De Neve Plaza', type: 'conference', capacity: 120, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Plaza B at De Neve Plaza. Capacity: 120. Conference Room venue.', hourly_rate: 190, half_day_rate: 1300, full_day_rate: 1700, features: ['Audio System', 'Projector', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Full Catering Services', 'Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'On-site Parking'], approval_required: false, sqft: 1850, floor: 'Ground Floor' },
            { id: 'venue_18', name: 'Sycamore', building: 'De Neve Plaza', type: 'meeting', capacity: 30, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Sycamore at De Neve Plaza. Capacity: 30. Meeting Room venue.', hourly_rate: 60, half_day_rate: 400, full_day_rate: 550, features: ['Display Screen', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Audio-Visual Tech & Support', 'Complimentary Wi-Fi'], approval_required: false, sqft: 510, floor: 'Level 1' },
            { id: 'venue_19', name: 'Magnolia', building: 'De Neve Plaza', type: 'meeting', capacity: 12, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Magnolia at De Neve Plaza. Capacity: 12. Meeting Room venue.', hourly_rate: 30, half_day_rate: 210, full_day_rate: 315, features: ['Display Screen', 'Video Conference', 'WiFi'], services: ['Audio-Visual Tech & Support', 'Complimentary Wi-Fi'], approval_required: false, sqft: 200, floor: 'Level 1' },
            { id: 'venue_20', name: 'Jacaranda', building: 'De Neve Plaza', type: 'meeting', capacity: 12, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Jacaranda at De Neve Plaza. Capacity: 12. Meeting Room venue.', hourly_rate: 30, half_day_rate: 210, full_day_rate: 315, features: ['Display Screen', 'Video Conference', 'WiFi'], services: ['Audio-Visual Tech & Support', 'Complimentary Wi-Fi'], approval_required: false, sqft: 200, floor: 'Level 1' },
            { id: 'venue_21', name: 'De Neve Lecture Auditorium', building: 'De Neve Plaza', type: 'auditorium', capacity: 430, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Catering only available in Plaza Room, NOT Auditorium', hourly_rate: 300, half_day_rate: 2000, full_day_rate: 2400, features: ['Audio System', 'Projector', 'Stage/Platform', 'Tiered Seating', 'Lighting Control'], services: ['Audio-Visual Tech & Support', 'Complimentary Wi-Fi', 'Event Facilitators & Conference Managers', 'On-site Parking'], approval_required: true, sqft: 5000, floor: 'Ground Floor' },
            { id: 'venue_22', name: 'Cederbaum Board Room', building: 'University Club', type: 'boardroom', capacity: 12, av_equipment: false, catering_allowed: true, accessible: true, outdoor: false, description: '40" TV w/HDMI cord. Min occupancy 10.', hourly_rate: 50, half_day_rate: 250, full_day_rate: 250, features: ['Large Display', 'HDMI', 'Executive Seating', 'WiFi'], services: ['Full-Service Catering', 'Audio-Visual Support', 'Complimentary Guest WiFi'], approval_required: false, sqft: 170, floor: 'Ground Floor' },
            { id: 'venue_23', name: 'Sierra', building: 'University Club', type: 'conference', capacity: 50, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'No screen in room. Min occupancy 20. Configs: Reception 40, Theatre 50, Rounds 40, Classroom 25, Board 24.', hourly_rate: 85, half_day_rate: 500, full_day_rate: 500, features: ['Audio System', 'Projector', 'Flexible Seating', 'WiFi'], services: ['Full-Service Catering', 'Audio-Visual Support', 'Complimentary Guest WiFi', 'Bar & Cocktail Services', 'Custom Menu Development'], approval_required: false, sqft: 806, floor: 'Ground Floor' },
            { id: 'venue_24', name: 'Hacienda', building: 'University Club', type: 'conference', capacity: 80, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Min occupancy 40. Configs: Reception 60, Theatre 80, Rounds 60, Classroom 35, Board 34.', hourly_rate: 170, half_day_rate: 1000, full_day_rate: 1000, features: ['Audio System', 'Projector', 'Flexible Seating', 'Catering Setup', 'WiFi'], services: ['Full-Service Catering', 'Audio-Visual Support', 'Complimentary Guest WiFi', 'Bar & Cocktail Services', 'Custom Menu Development'], approval_required: false, sqft: 999, floor: 'Ground Floor' },
            { id: 'venue_25', name: 'Redwood', building: 'University Club', type: 'conference', capacity: 60, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Entire room. Min occupancy 40. Can be split into Redwood A (West w/screen) and Redwood B (East).', hourly_rate: 170, half_day_rate: 1000, full_day_rate: 1000, features: ['Audio System', 'Projector', 'Flexible Seating', 'WiFi'], services: ['Full-Service Catering', 'Audio-Visual Support', 'Complimentary Guest WiFi', 'Bar & Cocktail Services'], approval_required: false, sqft: 620, floor: 'Ground Floor' },
            { id: 'venue_26', name: 'Sequoia', building: 'University Club', type: 'hall', capacity: 100, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Includes Patio. Min occupancy 50. Configs: Reception 80, Theatre 100, Rounds 60, Classroom 50, Board 32.', hourly_rate: 210, half_day_rate: 1250, full_day_rate: 1250, features: ['Audio System', 'Projector', 'Flexible Seating', 'Catering Setup', 'Patio Access', 'WiFi'], services: ['Full-Service Catering', 'Audio-Visual Support', 'Complimentary Guest WiFi', 'Bar & Cocktail Services', 'Custom Menu Development', 'Setup & Clean-up Crews'], approval_required: true, sqft: 1535, floor: 'Ground Floor' },
            { id: 'venue_27', name: 'Morrison Room (incl. Terrace)', building: 'University Club', type: 'hall', capacity: 200, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Includes Terrace. Piano Use $250, Piano Tuning $200. Min occupancy 80. Configs: Reception 200, Theatre 200, Rounds 180, Classroom 112, Board 50.', hourly_rate: 340, half_day_rate: 2000, full_day_rate: 2000, features: ['Audio System', 'Projector', 'Stage/Platform', 'Flexible Seating', 'Catering Setup', 'Piano', 'Terrace Access', 'WiFi'], services: ['Full-Service Catering', 'Audio-Visual Support', 'Complimentary Guest WiFi', 'Bar & Cocktail Services', 'Piano Use ($250)', 'Professional Event Coordination', 'Custom Menu Development', 'Setup & Clean-up Crews'], approval_required: true, sqft: 2252, floor: 'Level 1' },
            { id: 'venue_28', name: 'Main Dining Room', building: 'University Club', type: 'dining', capacity: 400, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: '$8,000 weekday buy-out displaces Member Lunch. Min occupancy 175. Configs: Reception 350, Theatre 400, Rounds 200.', hourly_rate: 750, half_day_rate: 4400, full_day_rate: 4400, features: ['Audio System', 'Catering Setup', 'Flexible Seating', 'Bar Service', 'WiFi'], services: ['Full-Service Catering', 'Audio-Visual Support', 'Complimentary Guest WiFi', 'Bar & Cocktail Services', 'Professional Event Coordination', 'Custom Menu Development', 'Setup & Clean-up Crews'], approval_required: true, sqft: 4191, floor: 'Level 1' },
            { id: 'venue_29', name: 'Sherie Bar & Lounge', building: 'University Club', type: 'dining', capacity: 100, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Piano Use $250, Piano Tuning $200. Min occupancy 50. Configs: Reception 50, Theatre 100, Rounds 60, Board 24.', hourly_rate: 210, half_day_rate: 1250, full_day_rate: 1250, features: ['Audio System', 'Bar Service', 'Piano', 'Flexible Seating', 'WiFi'], services: ['Full-Service Catering', 'Bar & Cocktail Services', 'Piano Use ($250)', 'Audio-Visual Support', 'Complimentary Guest WiFi'], approval_required: false, sqft: 1886, floor: 'Ground Floor' },
            { id: 'venue_30', name: 'West Patio', building: 'University Club', type: 'outdoor', capacity: 40, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Min occupancy 25. Configs: Reception 40, Rounds 40, Board 24.', hourly_rate: 105, half_day_rate: 625, full_day_rate: 625, features: ['Flexible Seating', 'Catering Setup', 'Natural Light'], services: ['Full-Service Catering', 'Setup & Clean-up Crews'], approval_required: false, sqft: 1044, floor: 'Ground Floor' },
            { id: 'venue_31', name: 'Garden Patio', building: 'University Club', type: 'outdoor', capacity: 200, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: '$2,500 after 4 p.m. or weekends. $5,500 weekday buy-out. Configs: Reception 200, Theatre 100, Rounds 100.', hourly_rate: 420, half_day_rate: 2500, full_day_rate: 2500, features: ['Flexible Seating', 'Catering Setup', 'Natural Light', 'Portable PA'], services: ['Full-Service Catering', 'Audio-Visual Support', 'Setup & Clean-up Crews'], approval_required: true, sqft: 2160, floor: 'Ground Floor' },
            { id: 'venue_32', name: 'Village View Room', building: 'De Neve Plaza', type: 'hall', capacity: 100, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Outdoor terrace with city views. Kitchenette for food prep.', hourly_rate: 200, half_day_rate: 1400, full_day_rate: 1800, features: ['Audio System', 'Projector', 'Flexible Seating', 'Kitchenette', 'Terrace Access', 'WiFi'], services: ['Audio-Visual Support', 'Sound System', 'Room Setup & Striking', 'Catering Permitted', 'Custodial Services', 'UCLA Guest WiFi'], approval_required: false, sqft: 1800, floor: 'Level 1' },
            { id: 'venue_33', name: 'Centennial Ballroom', building: 'Luskin Conference Center', type: 'ballroom', capacity: 500, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Centennial Ballroom at Luskin Conference Center. Capacity: 500. Ballroom venue.', hourly_rate: 750, half_day_rate: 5000, full_day_rate: 8000, features: ['Audio System', 'Projector', 'Stage/Platform', 'Flexible Seating', 'Catering Setup', 'Dance Floor', 'Smart Room Technology', 'Lighting Control'], services: ['On-Site Event Catering', 'Dedicated Conference Services Planners', 'Smart Room Technology', 'Built-in Projection & Motorized Screens', 'Sound Amplification & Microphones', 'Video Conferencing', 'Simultaneous Translation', 'On-Site Technical Staff', 'Nutrition Hubs'], approval_required: true, sqft: 10000, floor: 'Ground Floor' },
            { id: 'venue_34', name: 'Centennial Terrace', building: 'Luskin Conference Center', type: 'outdoor', capacity: 250, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Centennial Terrace at Luskin Conference Center. Capacity: 250. Outdoor Space venue.', hourly_rate: 400, half_day_rate: 2500, full_day_rate: 4000, features: ['Flexible Seating', 'Catering Setup', 'Natural Light', 'Portable PA'], services: ['On-Site Event Catering', 'Dedicated Conference Services Planners', 'Portable AV Equipment'], approval_required: true, sqft: 5000, floor: 'Ground Floor' },
            { id: 'venue_35', name: 'Laureate Room', building: 'Luskin Conference Center', type: 'conference', capacity: 80, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Laureate Room at Luskin Conference Center. Capacity: 80. Conference Room venue.', hourly_rate: 250, half_day_rate: 1500, full_day_rate: 2500, features: ['Audio System', 'Projector', 'Video Conference', 'Smart Room Technology', 'WiFi'], services: ['On-Site Event Catering', 'Smart Room Technology', 'Built-in Projection', 'Video Conferencing', 'On-Site Technical Staff', 'Nutrition Hubs'], approval_required: false, sqft: 1800, floor: 'Level 1' },
            { id: 'venue_36', name: 'Meeting Room 1', building: 'Luskin Conference Center', type: 'meeting', capacity: 30, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Meeting Room 1 at Luskin Conference Center. Capacity: 30. Meeting Room venue.', hourly_rate: 100, half_day_rate: 600, full_day_rate: 1000, features: ['Display Screen', 'Video Conference', 'Smart Room Technology', 'WiFi'], services: ['On-Site Event Catering', 'Smart Room Technology', 'Video Conferencing', 'Complimentary WiFi'], approval_required: false, sqft: 600, floor: 'Level 1' },
            { id: 'venue_37', name: 'Meeting Room 2', building: 'Luskin Conference Center', type: 'meeting', capacity: 25, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Meeting Room 2 at Luskin Conference Center. Capacity: 25. Meeting Room venue.', hourly_rate: 90, half_day_rate: 550, full_day_rate: 900, features: ['Display Screen', 'Video Conference', 'Smart Room Technology', 'WiFi'], services: ['On-Site Event Catering', 'Smart Room Technology', 'Video Conferencing', 'Complimentary WiFi'], approval_required: false, sqft: 500, floor: 'Level 1' },
            { id: 'venue_38', name: 'Meeting Room 3', building: 'Luskin Conference Center', type: 'meeting', capacity: 20, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Meeting Room 3 at Luskin Conference Center. Capacity: 20. Meeting Room venue.', hourly_rate: 80, half_day_rate: 500, full_day_rate: 800, features: ['Display Screen', 'Video Conference', 'Smart Room Technology', 'WiFi'], services: ['On-Site Event Catering', 'Smart Room Technology', 'Video Conferencing', 'Complimentary WiFi'], approval_required: false, sqft: 450, floor: 'Level 2' },
            { id: 'venue_39', name: 'Ackerman Grand Ballroom', building: 'ASUCLA Event Spaces', type: 'ballroom', capacity: 1200, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Ackerman Grand Ballroom at ASUCLA Event Spaces. Capacity: 1200. Ballroom venue.', hourly_rate: 800, half_day_rate: 5000, full_day_rate: 8000, features: ['Audio System', 'Projector', 'Stage/Platform', 'Flexible Seating', 'Catering Setup', 'Dance Floor', 'Lighting Control'], services: ['Full-Service Catering (ASUCLA)', 'Audio-Visual Support', 'Custom Room Setup & Furniture', 'Event Planning & Coordination', 'Digital Signage Promotion', 'Loading Dock Access', 'Cleaning & Custodial Support', 'Security Coordination'], approval_required: true, sqft: 12000, floor: 'Ground Floor' },
            { id: 'venue_40', name: 'Bruin Reception Room', building: 'ASUCLA Event Spaces', type: 'hall', capacity: 80, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Bruin Reception Room at ASUCLA Event Spaces. Capacity: 80. Event Space venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Audio System', 'Flexible Seating', 'Catering Setup', 'WiFi'], services: ['Full-Service Catering (ASUCLA)', 'Audio-Visual Support', 'Custom Room Setup', 'Event Planning & Coordination'], approval_required: false, sqft: 1200, floor: 'Ground Floor' },
            { id: 'venue_41', name: 'Charles E. Young Grand Salon', building: 'ASUCLA Event Spaces', type: 'hall', capacity: 200, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Historic vaulted-ceiling venue in Kerckhoff Hall.', hourly_rate: 400, half_day_rate: 2500, full_day_rate: 4000, features: ['Audio System', 'Projector', 'Vaulted Ceiling', 'Flexible Seating', 'Catering Setup', 'WiFi'], services: ['Full-Service Catering (ASUCLA)', 'Audio-Visual Support', 'Custom Room Setup & Furniture', 'Event Planning & Coordination', 'Digital Signage Promotion'], approval_required: true, sqft: 3500, floor: 'Level 1' },
            { id: 'venue_42', name: 'Viewpoint Conference Room', building: 'ASUCLA Event Spaces', type: 'conference', capacity: 40, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Top-floor views of campus.', hourly_rate: 120, half_day_rate: 700, full_day_rate: 1200, features: ['Display Screen', 'Video Conference', 'Panoramic Views', 'WiFi'], services: ['Audio-Visual Support', 'Complimentary WiFi', 'Catering Available'], approval_required: false, sqft: 700, floor: 'Level 1' },
            { id: 'venue_43', name: 'Kerckhoff State Room A', building: 'ASUCLA Event Spaces', type: 'meeting', capacity: 25, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Kerckhoff State Room A at ASUCLA Event Spaces. Capacity: 25. Meeting Room venue.', hourly_rate: 75, half_day_rate: 450, full_day_rate: 750, features: ['Display Screen', 'Video Conference', 'WiFi'], services: ['Audio-Visual Support', 'Complimentary WiFi', 'Catering Available'], approval_required: false, sqft: 400, floor: 'Level 1' },
            { id: 'venue_44', name: 'Bruin Plaza', building: 'ASUCLA Event Spaces', type: 'outdoor', capacity: 500, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Bruin Plaza at ASUCLA Event Spaces. Capacity: 500. Outdoor Space venue.', hourly_rate: 500, half_day_rate: 3000, full_day_rate: 5000, features: ['Portable PA', 'Flexible Seating', 'Natural Light', 'Catering Setup'], services: ['Full-Service Catering (ASUCLA)', 'Audio-Visual Support', 'Event Planning & Coordination', 'Security Coordination'], approval_required: true, sqft: 8000, floor: 'Ground Floor' },
            { id: 'venue_45', name: 'Carolbeth and Lester Korn Convocation Hall', building: 'Anderson School of Management', type: 'auditorium', capacity: 300, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Carolbeth and Lester Korn Convocation Hall at Anderson School of Management. Capacity: 300. Auditorium venue.', hourly_rate: 500, half_day_rate: 3000, full_day_rate: 5000, features: ['Audio System', 'Projector', 'Stage/Platform', 'Tiered Seating', 'Lighting Control', 'Video Conference'], services: ['Venue Rentals', 'Audio-Visual Equipment & Support', 'High-Speed WiFi', 'Catering Coordination', 'Event Planning & Management', 'Visitor Parking & Transportation', 'Safety & Security Liaison', 'Virtual & Hybrid Presentation Support', 'Ticketing Services', 'Disability & Accessibility Accommodations'], approval_required: true, sqft: 5000, floor: 'Ground Floor' },
            { id: 'venue_46', name: 'Carolbeth and Lester Korn Foyer', building: 'Anderson School of Management', type: 'hall', capacity: 150, av_equipment: false, catering_allowed: true, accessible: true, outdoor: false, description: 'Carolbeth and Lester Korn Foyer at Anderson School of Management. Capacity: 150. Event Space venue.', hourly_rate: 250, half_day_rate: 1500, full_day_rate: 2500, features: ['Flexible Seating', 'Catering Setup', 'Natural Light', 'WiFi'], services: ['Venue Rentals', 'Catering Coordination', 'Event Planning & Management', 'High-Speed WiFi'], approval_required: false, sqft: 2500, floor: 'Ground Floor' },
            { id: 'venue_47', name: 'Executive Dining Room', building: 'Anderson School of Management', type: 'dining', capacity: 40, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Executive Dining Room at Anderson School of Management. Capacity: 40. Dining Venue venue.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Audio System', 'Catering Setup', 'Executive Seating', 'WiFi'], services: ['Venue Rentals', 'Catering Coordination', 'High-Speed WiFi', 'Disability & Accessibility Accommodations'], approval_required: false, sqft: 800, floor: 'Level 1' },
            { id: 'venue_48', name: 'Judy & Bernard Briskin Family Plaza', building: 'Anderson School of Management', type: 'outdoor', capacity: 200, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Judy & Bernard Briskin Family Plaza at Anderson School of Management. Capacity: 200. Outdoor Space venue.', hourly_rate: 350, half_day_rate: 2000, full_day_rate: 3500, features: ['Flexible Seating', 'Catering Setup', 'Natural Light', 'Portable PA'], services: ['Venue Rentals', 'Catering Coordination', 'Event Planning & Management', 'Safety & Security Liaison'], approval_required: true, sqft: 4000, floor: 'Ground Floor' },
            { id: 'venue_49', name: 'Anderson Large Classroom', building: 'Anderson School of Management', type: 'classroom', capacity: 80, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Anderson Large Classroom at Anderson School of Management. Capacity: 80. Classroom venue.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Projector', 'Audio System', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Venue Rentals', 'Audio-Visual Equipment & Support', 'High-Speed WiFi', 'Virtual & Hybrid Presentation Support'], approval_required: false, sqft: 1500, floor: 'Level 1' },
            { id: 'venue_50', name: 'Harry and Yvonne Lenart Auditorium', building: 'Fowler Museum', type: 'auditorium', capacity: 324, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Harry and Yvonne Lenart Auditorium at Fowler Museum. Capacity: 324. Auditorium venue.', hourly_rate: 400, half_day_rate: 2500, full_day_rate: 4000, features: ['Audio System', 'Projector', 'Stage/Platform', 'Tiered Seating', 'Lighting Control'], services: ['Venue Rentals', 'Audio-Visual Equipment', 'Campus Guest WiFi', 'Catering Coordination', 'Event Planning & Management', 'Technical Support', 'Security & Safety Reviews', 'Custodial & Clean-up', 'Photography & Rights Reproductions'], approval_required: true, sqft: 4500, floor: 'Ground Floor' },
            { id: 'venue_51', name: 'Barbara and Joseph Goldenberg Terrace', building: 'Fowler Museum', type: 'outdoor', capacity: 250, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Barbara and Joseph Goldenberg Terrace at Fowler Museum. Capacity: 250. Outdoor Space venue.', hourly_rate: 350, half_day_rate: 2000, full_day_rate: 3500, features: ['Flexible Seating', 'Catering Setup', 'Natural Light', 'Portable PA'], services: ['Venue Rentals', 'Catering Coordination', 'Event Planning & Management', 'Photography Permitting'], approval_required: true, sqft: 3500, floor: 'Ground Floor' },
            { id: 'venue_52', name: 'Elizabeth and W. Thomas Davis Courtyard', building: 'Fowler Museum', type: 'outdoor', capacity: 150, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Elizabeth and W. Thomas Davis Courtyard at Fowler Museum. Capacity: 150. Outdoor Space venue.', hourly_rate: 250, half_day_rate: 1500, full_day_rate: 2500, features: ['Flexible Seating', 'Catering Setup', 'Natural Light'], services: ['Venue Rentals', 'Catering Coordination', 'Event Planning & Management'], approval_required: false, sqft: 2500, floor: 'Ground Floor' },
            { id: 'venue_53', name: 'Eleanor Deutsch Seminar Room', building: 'Fowler Museum', type: 'meeting', capacity: 30, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Eleanor Deutsch Seminar Room at Fowler Museum. Capacity: 30. Meeting Room venue.', hourly_rate: 100, half_day_rate: 600, full_day_rate: 1000, features: ['Projector', 'Audio System', 'Video Conference', 'WiFi'], services: ['Venue Rentals', 'Audio-Visual Equipment', 'Campus Guest WiFi'], approval_required: false, sqft: 500, floor: 'Level 1' },
            { id: 'venue_54', name: 'UCLA Art Council Amphitheater', building: 'Fowler Museum', type: 'outdoor', capacity: 200, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'UCLA Art Council Amphitheater at Fowler Museum. Capacity: 200. Outdoor Space venue.', hourly_rate: 300, half_day_rate: 1800, full_day_rate: 3000, features: ['Stage/Platform', 'Tiered Seating', 'Natural Light', 'Portable PA'], services: ['Venue Rentals', 'Catering Coordination', 'Event Planning & Management', 'Photography Permitting'], approval_required: true, sqft: 3000, floor: 'Ground Floor' },
            { id: 'venue_55', name: 'Royce Hall Main Auditorium', building: 'Royce Hall', type: 'auditorium', capacity: 1834, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Royce Hall Main Auditorium at Royce Hall. Capacity: 1834. Auditorium venue.', hourly_rate: 1500, half_day_rate: 8000, full_day_rate: 15000, features: ['Audio System', 'Stage/Platform', 'Stage Lighting', 'Tiered Seating', 'Green Room', 'Dressing Rooms', 'Lighting Control'], services: ['Professional Stage Crew & Management', 'House Staff & Ushers', 'UCLA Central Ticket Office', 'Full Lighting & Sound Production', 'Event Planning & Logistics', 'Catering Coordination', 'Filming & Photography Permitting', 'Security & Fire Marshal Liaison'], approval_required: true, sqft: 20000, floor: 'Ground Floor' },
            { id: 'venue_56', name: 'Humanities Conference Room', building: 'Royce Hall', type: 'conference', capacity: 120, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Humanities Conference Room at Royce Hall. Capacity: 120. Conference Room venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Audio System', 'Projector', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Audio-Visual Support', 'Catering Coordination', 'Kitchenette Access', 'Guest WiFi'], approval_required: false, sqft: 2000, floor: 'Level 1' },
            { id: 'venue_57', name: 'Herbert Morris Seminar Room', building: 'Royce Hall', type: 'meeting', capacity: 80, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Herbert Morris Seminar Room at Royce Hall. Capacity: 80. Meeting Room venue.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Audio System', 'Projector', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Audio-Visual Support', 'Catering Coordination', 'Kitchenette Access', 'Guest WiFi'], approval_required: false, sqft: 1200, floor: 'Level 1' },
            { id: 'venue_58', name: 'Royce West Terrace', building: 'Royce Hall', type: 'outdoor', capacity: 200, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Royce West Terrace at Royce Hall. Capacity: 200. Outdoor Space venue.', hourly_rate: 350, half_day_rate: 2000, full_day_rate: 3500, features: ['Flexible Seating', 'Catering Setup', 'Natural Light', 'Portable PA'], services: ['Catering Coordination', 'Event Planning & Logistics', 'Security Coordination'], approval_required: true, sqft: 3000, floor: 'Ground Floor' },
            { id: 'venue_59', name: 'Collins Alumni Conference Room', building: 'James West Alumni Center', type: 'conference', capacity: 150, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Two-tiered interior. Supports up to six sound inputs.', hourly_rate: 300, half_day_rate: 1800, full_day_rate: 3000, features: ['Audio System', 'Projector', 'Flexible Seating', 'Catering Setup', 'Patio Access', 'WiFi'], services: ['Venue Rentals', 'Catering Management', 'Event Staffing', 'Room Setup & Strike', 'Integrated Sound Systems', 'ADA Accessible', 'Guest WiFi'], approval_required: false, sqft: 2753, floor: 'Ground Floor' },
            { id: 'venue_60', name: 'Tom Davis Founders\' Room', building: 'James West Alumni Center', type: 'hall', capacity: 80, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Tom Davis Founders\' Room at James West Alumni Center. Capacity: 80. Event Space venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Audio System', 'Flexible Seating', 'Catering Setup', 'Patio Access', 'WiFi'], services: ['Venue Rentals', 'Catering Management', 'Event Staffing', 'Room Setup & Strike', 'Guest WiFi'], approval_required: false, sqft: 1678, floor: 'Ground Floor' },
            { id: 'venue_61', name: 'Robert Kerr Galleria', building: 'James West Alumni Center', type: 'gallery', capacity: 250, av_equipment: false, catering_allowed: true, accessible: true, outdoor: false, description: 'Known as the "Alumni Living Room". Available after business hours or weekends only.', hourly_rate: 400, half_day_rate: 2500, full_day_rate: 4000, features: ['Exhibition Walls', 'Flexible Seating', 'Catering Setup', 'Natural Light', 'WiFi'], services: ['Venue Rentals', 'Catering Management', 'Event Staffing', 'Room Setup & Strike', 'Guest WiFi', 'ADA Accessible'], approval_required: true, sqft: 4434, floor: 'Ground Floor' },
            { id: 'venue_62', name: 'Northwest Patio', building: 'James West Alumni Center', type: 'outdoor', capacity: 150, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: '1st floor patio with lush trees and fountains. Part of 11,335 sq ft total outdoor space.', hourly_rate: 250, half_day_rate: 1500, full_day_rate: 2500, features: ['Flexible Seating', 'Catering Setup', 'Natural Light', 'Fountain'], services: ['Venue Rentals', 'Catering Management', 'Event Staffing'], approval_required: false, sqft: 5000, floor: 'Ground Floor' },
            { id: 'venue_63', name: 'Northeast Patio', building: 'James West Alumni Center', type: 'outdoor', capacity: 100, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: '2nd floor patio.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Flexible Seating', 'Catering Setup', 'Natural Light'], services: ['Venue Rentals', 'Catering Management', 'Event Staffing'], approval_required: false, sqft: 3000, floor: 'Level 1' },
            { id: 'venue_64', name: 'Billy Wilder Theater', building: 'Hammer Museum', type: 'theater', capacity: 300, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Billy Wilder Theater at Hammer Museum. Capacity: 300. Theater venue.', hourly_rate: 600, half_day_rate: 3500, full_day_rate: 6000, features: ['Audio System', 'Stage/Platform', 'Stage Lighting', 'Tiered Seating', 'Lighting Control'], services: ['AV Support', 'Event Planning & Staffing', 'Catering Coordination', 'Virtual & Hybrid Support', 'Group Tours'], approval_required: true, sqft: 4500, floor: 'Ground Floor' },
            { id: 'venue_65', name: 'Pritzker Family Commons & South Courtyard', building: 'Hammer Museum', type: 'hall', capacity: 400, av_equipment: false, catering_allowed: true, accessible: true, outdoor: false, description: 'Pritzker Family Commons & South Courtyard at Hammer Museum. Capacity: 400. Event Space venue.', hourly_rate: 500, half_day_rate: 3000, full_day_rate: 5000, features: ['Flexible Seating', 'Catering Setup', 'Natural Light', 'WiFi'], services: ['AV Support', 'Catering Coordination', 'Event Planning & Staffing', 'Building Engineering & Custodial'], approval_required: true, sqft: 6000, floor: 'Ground Floor' },
            { id: 'venue_66', name: 'Annenberg Terrace', building: 'Hammer Museum', type: 'outdoor', capacity: 200, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Annenberg Terrace at Hammer Museum. Capacity: 200. Outdoor Space venue.', hourly_rate: 350, half_day_rate: 2000, full_day_rate: 3500, features: ['Flexible Seating', 'Catering Setup', 'Natural Light', 'Portable PA'], services: ['Catering Coordination', 'Event Planning & Staffing', 'Building Engineering & Custodial'], approval_required: true, sqft: 3000, floor: 'Level 1' },
            { id: 'venue_67', name: 'McMorrow Terrace', building: 'Hammer Museum', type: 'outdoor', capacity: 150, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'McMorrow Terrace at Hammer Museum. Capacity: 150. Outdoor Space venue.', hourly_rate: 300, half_day_rate: 1800, full_day_rate: 3000, features: ['Flexible Seating', 'Catering Setup', 'Natural Light'], services: ['Catering Coordination', 'Event Planning & Staffing'], approval_required: false, sqft: 2500, floor: 'Level 1' },
            { id: 'venue_68', name: 'Executive Board Room', building: 'Hammer Museum', type: 'boardroom', capacity: 20, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Executive Board Room at Hammer Museum. Capacity: 20. Boardroom venue.', hourly_rate: 100, half_day_rate: 600, full_day_rate: 1000, features: ['Large Display', 'Video Conference', 'Audio System', 'WiFi'], services: ['AV Support', 'Complimentary WiFi'], approval_required: false, sqft: 400, floor: 'Level 1' },
            { id: 'venue_69', name: 'The Lab', building: 'Hammer Museum', type: 'hall', capacity: 60, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Flexible workshop and event space.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Flexible Seating', 'Audio System', 'Projector', 'WiFi'], services: ['AV Support', 'Catering Coordination', 'Event Planning & Staffing'], approval_required: false, sqft: 1000, floor: 'Ground Floor' },
            { id: 'venue_70', name: 'Bay Nimoy Studio', building: 'Hammer Museum', type: 'hall', capacity: 80, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Bay Nimoy Studio at Hammer Museum. Capacity: 80. Event Space venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Flexible Seating', 'Audio System', 'Stage/Platform', 'Lighting Control', 'WiFi'], services: ['AV Support', 'Catering Coordination', 'Event Planning & Staffing'], approval_required: false, sqft: 1200, floor: 'Ground Floor' },
            { id: 'venue_71', name: 'Schoenberg Hall', building: 'Schoenberg Music Building', type: 'auditorium', capacity: 522, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Schoenberg Hall at Schoenberg Music Building. Capacity: 522. Auditorium venue.', hourly_rate: 800, half_day_rate: 4500, full_day_rate: 7500, features: ['Audio System', 'Stage/Platform', 'Stage Lighting', 'Tiered Seating', 'Green Room', 'Lighting Control'], services: ['Venue Rentals', 'AV Support', 'Live-Streaming & Recording', 'Catering Coordination', 'Event Staffing'], approval_required: true, sqft: 7000, floor: 'Ground Floor' },
            { id: 'venue_72', name: 'Lani Hall Theater', building: 'Schoenberg Music Building', type: 'theater', capacity: 133, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Recital hall for small groups and lectures.', hourly_rate: 300, half_day_rate: 1800, full_day_rate: 3000, features: ['Audio System', 'Stage/Platform', 'Stage Lighting', 'Tiered Seating', 'Lighting Control'], services: ['Venue Rentals', 'AV Support', 'Live-Streaming & Recording', 'Event Staffing'], approval_required: true, sqft: 2000, floor: 'Ground Floor' },
            { id: 'venue_73', name: 'Jan Popper Theater', building: 'Schoenberg Music Building', type: 'theater', capacity: 140, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Intimate performance venue.', hourly_rate: 300, half_day_rate: 1800, full_day_rate: 3000, features: ['Audio System', 'Stage/Platform', 'Stage Lighting', 'Tiered Seating', 'Lighting Control'], services: ['Venue Rentals', 'AV Support', 'Event Staffing'], approval_required: true, sqft: 2200, floor: 'Level 1' },
            { id: 'venue_74', name: 'Freud Playhouse', building: 'Theater, Film & Television', type: 'theater', capacity: 562, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Freud Playhouse at Theater, Film & Television. Capacity: 562. Theater venue.', hourly_rate: 1000, half_day_rate: 6000, full_day_rate: 10000, features: ['Audio System', 'Stage/Platform', 'Stage Lighting', 'Tiered Seating', 'Green Room', 'Dressing Rooms'], services: ['Venue Rentals', 'Production & Technical Support', 'Film Permitting', 'Ticketing Services', 'Catering Coordination'], approval_required: true, sqft: 8000, floor: 'Ground Floor' },
            { id: 'venue_75', name: 'James Bridges Theater (Melnitz 1409)', building: 'Theater, Film & Television', type: 'theater', capacity: 278, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'James Bridges Theater (Melnitz 1409) at Theater, Film & Television. Capacity: 278. Theater venue.', hourly_rate: 500, half_day_rate: 3000, full_day_rate: 5000, features: ['Audio System', 'Stage/Platform', 'Stage Lighting', 'Tiered Seating', 'Projector'], services: ['Venue Rentals', 'Production & Technical Support', 'Film Permitting', 'Ticketing Services', 'Catering Coordination'], approval_required: true, sqft: 4000, floor: 'Ground Floor' },
            { id: 'venue_76', name: 'Little Theater', building: 'Theater, Film & Television', type: 'theater', capacity: 172, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Little Theater at Theater, Film & Television. Capacity: 172. Theater venue.', hourly_rate: 350, half_day_rate: 2000, full_day_rate: 3500, features: ['Audio System', 'Stage/Platform', 'Stage Lighting', 'Tiered Seating'], services: ['Venue Rentals', 'Production & Technical Support', 'AV Orientation'], approval_required: true, sqft: 2500, floor: 'Level 1' },
            { id: 'venue_77', name: 'Studio Theater 1340', building: 'Theater, Film & Television', type: 'theater', capacity: 81, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Flexible black box theater.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Flexible Seating', 'Stage/Platform', 'Lighting Control', 'Audio System'], services: ['Venue Rentals', 'Production & Technical Support'], approval_required: false, sqft: 1200, floor: 'Level 1' },
            { id: 'venue_78', name: 'Darren Star Screening Room', building: 'Theater, Film & Television', type: 'theater', capacity: 60, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Screening and workshop space.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Projector', 'Audio System', 'Tiered Seating', 'Lighting Control'], services: ['Venue Rentals', 'AV Support', 'Film Permitting'], approval_required: false, sqft: 900, floor: 'Level 1' },
            { id: 'venue_79', name: 'CNSI Auditorium', building: 'CNSI', type: 'auditorium', capacity: 260, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'CNSI Auditorium at CNSI. Capacity: 260. Auditorium venue.', hourly_rate: 400, half_day_rate: 2500, full_day_rate: 4000, features: ['Audio System', 'Projector', 'Stage/Platform', 'Tiered Seating', 'Video Conference'], services: ['AV Tech & Support', 'Complimentary WiFi', 'Event Furniture'], approval_required: true, sqft: 4000, floor: 'Ground Floor' },
            { id: 'venue_80', name: 'CNSI Lobby', building: 'CNSI', type: 'hall', capacity: 150, av_equipment: false, catering_allowed: true, accessible: true, outdoor: false, description: 'CNSI Lobby at CNSI. Capacity: 150. Event Space venue.', hourly_rate: 250, half_day_rate: 1500, full_day_rate: 2500, features: ['Flexible Seating', 'Natural Light', 'WiFi', 'Catering Setup'], services: ['AV Tech & Support', 'Complimentary WiFi', 'Event Furniture'], approval_required: false, sqft: 2500, floor: 'Ground Floor' },
            { id: 'venue_81', name: 'CNSI Multipurpose Meeting Space', building: 'CNSI', type: 'conference', capacity: 60, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Overlooks Court of Sciences through floor-to-ceiling windows.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Projector', 'Video Conference', 'Audio System', 'Natural Light', 'WiFi'], services: ['AV Tech & Support', 'Complimentary WiFi'], approval_required: false, sqft: 1000, floor: 'Level 1' },
            { id: 'venue_82', name: 'CNSI Conference Room A', building: 'CNSI', type: 'conference', capacity: 20, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'CNSI Conference Room A at CNSI. Capacity: 20. Conference Room venue.', hourly_rate: 80, half_day_rate: 500, full_day_rate: 800, features: ['Display Screen', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['AV Tech & Support', 'Complimentary WiFi'], approval_required: false, sqft: 400, floor: 'Level 1' },
            { id: 'venue_83', name: 'CNSI Upper Terrace', building: 'CNSI', type: 'outdoor', capacity: 100, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'CNSI Upper Terrace at CNSI. Capacity: 100. Outdoor Space venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Flexible Seating', 'Natural Light', 'Portable PA'], services: ['AV Tech & Support', 'Catering Coordination'], approval_required: false, sqft: 2000, floor: 'Level 1' },
            { id: 'venue_84', name: 'La Kretz Garden Pavilion', building: 'Botanical Gardens', type: 'hall', capacity: 100, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'La Kretz Garden Pavilion at Botanical Gardens. Capacity: 100. Event Space venue.', hourly_rate: 250, half_day_rate: 1500, full_day_rate: 2500, features: ['Audio System', 'Projector', 'Flexible Seating', 'Natural Light', 'WiFi'], services: ['Venue Rentals', 'AV Setup', 'Catering Coordination', 'Photography Permitting', 'Educational Workshops'], approval_required: true, sqft: 1500, floor: 'Ground Floor' },
            { id: 'venue_85', name: 'Herbert Plaza', building: 'Botanical Gardens', type: 'outdoor', capacity: 120, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Add-on space to La Kretz Pavilion.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Flexible Seating', 'Catering Setup', 'Natural Light'], services: ['Venue Rentals', 'Catering Coordination', 'Photography Permitting'], approval_required: false, sqft: 2000, floor: 'Ground Floor' },
            { id: 'venue_86', name: 'Park\'s Patio', building: 'Botanical Gardens', type: 'outdoor', capacity: 80, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Park\'s Patio at Botanical Gardens. Capacity: 80. Outdoor Space venue.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Flexible Seating', 'Catering Setup', 'Natural Light'], services: ['Venue Rentals', 'Catering Coordination'], approval_required: false, sqft: 1500, floor: 'Ground Floor' },
            { id: 'venue_87', name: 'Jewell Terrace', building: 'Botanical Gardens', type: 'outdoor', capacity: 60, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Jewell Terrace at Botanical Gardens. Capacity: 60. Outdoor Space venue.', hourly_rate: 120, half_day_rate: 700, full_day_rate: 1200, features: ['Flexible Seating', 'Natural Light'], services: ['Venue Rentals', 'Catering Coordination'], approval_required: false, sqft: 1200, floor: 'Ground Floor' },
            { id: 'venue_88', name: 'Norris Terrace', building: 'Botanical Gardens', type: 'outdoor', capacity: 60, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Norris Terrace at Botanical Gardens. Capacity: 60. Outdoor Space venue.', hourly_rate: 120, half_day_rate: 700, full_day_rate: 1200, features: ['Flexible Seating', 'Natural Light'], services: ['Venue Rentals', 'Catering Coordination'], approval_required: false, sqft: 1200, floor: 'Ground Floor' },
            { id: 'venue_89', name: 'Outdoor Amphitheater', building: 'Botanical Gardens', type: 'outdoor', capacity: 150, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Outdoor Amphitheater at Botanical Gardens. Capacity: 150. Outdoor Space venue.', hourly_rate: 300, half_day_rate: 1800, full_day_rate: 3000, features: ['Stage/Platform', 'Tiered Seating', 'Natural Light', 'Portable PA'], services: ['Venue Rentals', 'AV Setup', 'Catering Coordination', 'Photography Permitting'], approval_required: true, sqft: 2500, floor: 'Ground Floor' },
            { id: 'venue_90', name: 'Boelter Hall 6750', building: 'Samueli Engineering', type: 'classroom', capacity: 80, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Boelter Hall 6750 at Samueli Engineering. Capacity: 80. Classroom venue.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Projector', 'Audio System', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['AV & Tech Support', 'WiFi', 'Catering Coordination'], approval_required: false, sqft: 1500, floor: 'Ground Floor' },
            { id: 'venue_91', name: 'Boelter Hall Penthouse', building: 'Samueli Engineering', type: 'hall', capacity: 60, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Boelter Hall Penthouse at Samueli Engineering. Capacity: 60. Event Space venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Flexible Seating', 'Audio System', 'Natural Light', 'WiFi'], services: ['AV & Tech Support', 'WiFi', 'Catering Coordination'], approval_required: false, sqft: 1000, floor: 'Level 1' },
            { id: 'venue_92', name: 'Engineering VI Room 100', building: 'Samueli Engineering', type: 'auditorium', capacity: 200, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Engineering VI Room 100 at Samueli Engineering. Capacity: 200. Auditorium venue.', hourly_rate: 350, half_day_rate: 2000, full_day_rate: 3500, features: ['Audio System', 'Projector', 'Stage/Platform', 'Tiered Seating', 'Video Conference'], services: ['AV & Tech Support', 'WiFi', 'Catering Coordination', 'Digital Signage Promotion'], approval_required: true, sqft: 3000, floor: 'Ground Floor' },
            { id: 'venue_93', name: 'Engineering VI Room 300', building: 'Samueli Engineering', type: 'classroom', capacity: 100, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Engineering VI Room 300 at Samueli Engineering. Capacity: 100. Classroom venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Projector', 'Audio System', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['AV & Tech Support', 'WiFi'], approval_required: false, sqft: 1800, floor: 'Level 1' },
            { id: 'venue_94', name: 'Mong Learning Center (Eng VI 180)', building: 'Samueli Engineering', type: 'classroom', capacity: 80, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Mong Learning Center (Eng VI 180) at Samueli Engineering. Capacity: 80. Classroom venue.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Projector', 'Audio System', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['AV & Tech Support', 'WiFi', 'Instructional Technology'], approval_required: false, sqft: 1500, floor: 'Ground Floor' },
            { id: 'venue_95', name: 'Cohen Multipurpose Room (Eng VI 134)', building: 'Samueli Engineering', type: 'hall', capacity: 100, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Cohen Multipurpose Room (Eng VI 134) at Samueli Engineering. Capacity: 100. Event Space venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Audio System', 'Projector', 'Flexible Seating', 'Catering Setup', 'WiFi'], services: ['AV & Tech Support', 'WiFi', 'Catering Coordination', 'Room Setup Support'], approval_required: false, sqft: 1800, floor: 'Ground Floor' },
            { id: 'venue_96', name: 'Engineering IV Patio', building: 'Samueli Engineering', type: 'outdoor', capacity: 150, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Engineering IV Patio at Samueli Engineering. Capacity: 150. Outdoor Space venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Flexible Seating', 'Catering Setup', 'Natural Light', 'Portable PA'], services: ['Catering Coordination', 'Room Setup Support'], approval_required: false, sqft: 2500, floor: 'Ground Floor' },
            { id: 'venue_97', name: 'Law School Lecture Hall', building: 'Law School', type: 'auditorium', capacity: 200, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Law School Lecture Hall at Law School. Capacity: 200. Auditorium venue.', hourly_rate: 350, half_day_rate: 2000, full_day_rate: 3500, features: ['Audio System', 'Projector', 'Tiered Seating', 'Video Conference', 'WiFi'], services: ['Venue Rentals', 'AV Equipment', 'Guest WiFi', 'Catering Coordination', 'Security & Safety Reviews', 'Custodial Services', 'Ticketing Services'], approval_required: true, sqft: 3000, floor: 'Ground Floor' },
            { id: 'venue_98', name: 'Law School Classroom A', building: 'Law School', type: 'classroom', capacity: 80, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Law School Classroom A at Law School. Capacity: 80. Classroom venue.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Projector', 'Audio System', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Venue Rentals', 'AV Equipment', 'Guest WiFi'], approval_required: false, sqft: 1500, floor: 'Ground Floor' },
            { id: 'venue_99', name: 'Law School Meeting Room', building: 'Law School', type: 'meeting', capacity: 30, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Law School Meeting Room at Law School. Capacity: 30. Meeting Room venue.', hourly_rate: 80, half_day_rate: 500, full_day_rate: 800, features: ['Display Screen', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Venue Rentals', 'AV Equipment', 'Guest WiFi'], approval_required: false, sqft: 500, floor: 'Level 1' },
            { id: 'venue_100', name: 'Shapiro Courtyard', building: 'Law School', type: 'outdoor', capacity: 200, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Tables, easels, and ice buckets must be reserved through EMS.', hourly_rate: 300, half_day_rate: 1800, full_day_rate: 3000, features: ['Flexible Seating', 'Catering Setup', 'Natural Light', 'Portable PA'], services: ['Venue Rentals', 'Catering Coordination', 'Event Planning Support', 'Security Coordination'], approval_required: true, sqft: 4000, floor: 'Ground Floor' },
            { id: 'venue_101', name: 'Moore Hall Reading Room', building: 'Moore Hall', type: 'hall', capacity: 80, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Moore Hall Reading Room at Moore Hall. Capacity: 80. Event Space venue.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Audio System', 'Projector', 'Flexible Seating', 'WiFi'], services: ['Venue Rentals', 'AV Equipment', 'Instructional Technology Support', 'Guest WiFi', 'Catering Coordination'], approval_required: false, sqft: 1500, floor: 'Ground Floor' },
            { id: 'venue_102', name: 'Moore Hall Classroom 100', building: 'Moore Hall', type: 'classroom', capacity: 60, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Moore Hall Classroom 100 at Moore Hall. Capacity: 60. Classroom venue.', hourly_rate: 100, half_day_rate: 600, full_day_rate: 1000, features: ['Projector', 'Audio System', 'Whiteboard', 'WiFi'], services: ['Venue Rentals', 'AV Equipment', 'Instructional Technology Support', 'Guest WiFi'], approval_required: false, sqft: 1200, floor: 'Ground Floor' },
            { id: 'venue_103', name: 'Moore Hall Courtyard', building: 'Moore Hall', type: 'outdoor', capacity: 100, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Moore Hall Courtyard at Moore Hall. Capacity: 100. Outdoor Space venue.', hourly_rate: 150, half_day_rate: 900, full_day_rate: 1500, features: ['Flexible Seating', 'Catering Setup', 'Natural Light'], services: ['Venue Rentals', 'Catering Coordination'], approval_required: false, sqft: 2000, floor: 'Ground Floor' },
            { id: 'venue_104', name: 'Moore Hall Auditorium', building: 'Moore Hall', type: 'auditorium', capacity: 150, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Moore Hall Auditorium at Moore Hall. Capacity: 150. Auditorium venue.', hourly_rate: 250, half_day_rate: 1500, full_day_rate: 2500, features: ['Audio System', 'Projector', 'Stage/Platform', 'Tiered Seating'], services: ['Venue Rentals', 'AV Equipment', 'Guest WiFi', 'Catering Coordination'], approval_required: true, sqft: 2500, floor: 'Level 1' },
            { id: 'venue_105', name: 'Luskin Public Affairs Classroom', building: 'Luskin School of Public Affairs', type: 'classroom', capacity: 60, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Luskin Public Affairs Classroom at Luskin School of Public Affairs. Capacity: 60. Classroom venue.', hourly_rate: 100, half_day_rate: 600, full_day_rate: 1000, features: ['Projector', 'Audio System', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Venue Rentals', 'AV Equipment', 'Guest WiFi', 'Custodial & Setup Services'], approval_required: false, sqft: 1200, floor: 'Ground Floor' },
            { id: 'venue_106', name: 'Luskin 3rd Floor Commons', building: 'Luskin School of Public Affairs', type: 'hall', capacity: 100, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Luskin 3rd Floor Commons at Luskin School of Public Affairs. Capacity: 100. Event Space venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Flexible Seating', 'Audio System', 'Projector', 'Catering Setup', 'WiFi'], services: ['Venue Rentals', 'AV Equipment', 'Guest WiFi', 'Catering Coordination', 'Event Planning & Logistics'], approval_required: false, sqft: 1800, floor: 'Level 1' },
            { id: 'venue_107', name: 'Luskin Patio', building: 'Luskin School of Public Affairs', type: 'outdoor', capacity: 60, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Luskin Patio at Luskin School of Public Affairs. Capacity: 60. Outdoor Space venue.', hourly_rate: 100, half_day_rate: 600, full_day_rate: 1000, features: ['Flexible Seating', 'Catering Setup', 'Natural Light'], services: ['Venue Rentals', 'Catering Coordination'], approval_required: false, sqft: 1000, floor: 'Ground Floor' },
            { id: 'venue_108', name: 'Luskin Terrace', building: 'Luskin School of Public Affairs', type: 'outdoor', capacity: 80, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Luskin Terrace at Luskin School of Public Affairs. Capacity: 80. Outdoor Space venue.', hourly_rate: 120, half_day_rate: 700, full_day_rate: 1200, features: ['Flexible Seating', 'Catering Setup', 'Natural Light'], services: ['Venue Rentals', 'Catering Coordination'], approval_required: false, sqft: 1500, floor: 'Level 1' },
            { id: 'venue_109', name: '307A Powell Library (Classroom A)', building: 'Powell Library', type: 'classroom', capacity: 40, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'External events must have a campus sponsor.', hourly_rate: 80, half_day_rate: 500, full_day_rate: 800, features: ['Projector', 'Whiteboard', 'WiFi'], services: ['Guest WiFi', 'ADA Accessible Workstations'], approval_required: false, sqft: 800, floor: 'Ground Floor' },
            { id: 'venue_110', name: '320B Powell Library (Classroom B)', building: 'Powell Library', type: 'classroom', capacity: 40, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: '320B Powell Library (Classroom B) at Powell Library. Capacity: 40. Classroom venue.', hourly_rate: 80, half_day_rate: 500, full_day_rate: 800, features: ['Projector', 'Whiteboard', 'WiFi'], services: ['Guest WiFi', 'ADA Accessible Workstations'], approval_required: false, sqft: 800, floor: 'Ground Floor' },
            { id: 'venue_111', name: '307C Powell Library (Classroom C)', building: 'Powell Library', type: 'classroom', capacity: 40, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: '307C Powell Library (Classroom C) at Powell Library. Capacity: 40. Classroom venue.', hourly_rate: 80, half_day_rate: 500, full_day_rate: 800, features: ['Projector', 'Whiteboard', 'WiFi'], services: ['Guest WiFi', 'ADA Accessible Workstations'], approval_required: false, sqft: 800, floor: 'Ground Floor' },
            { id: 'venue_112', name: '330 Powell Library (InqLab 3)', building: 'Powell Library', type: 'classroom', capacity: 30, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: '330 Powell Library (InqLab 3) at Powell Library. Capacity: 30. Classroom venue.', hourly_rate: 60, half_day_rate: 400, full_day_rate: 650, features: ['Projector', 'Whiteboard', 'WiFi', 'Display Screen'], services: ['Guest WiFi', 'ADA Accessible Workstations', 'Technology Sandbox'], approval_required: false, sqft: 600, floor: 'Ground Floor' },
            { id: 'venue_113', name: '11360F YRL (Research Commons Classroom)', building: 'Powell Library', type: 'classroom', capacity: 30, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'Located in Young Research Library Research Commons.', hourly_rate: 60, half_day_rate: 400, full_day_rate: 650, features: ['Projector', 'Display Screen', 'WiFi'], services: ['Guest WiFi', 'Data Science & GIS Stations', 'Equipment Lending'], approval_required: false, sqft: 600, floor: 'Level 1' },
            { id: 'venue_114', name: 'Impact Forum', building: 'DataX', type: 'hall', capacity: 100, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Impact Forum at DataX. Capacity: 100. Event Space venue.', hourly_rate: 250, half_day_rate: 1500, full_day_rate: 2500, features: ['Audio System', 'Projector', 'Flexible Seating', 'Live-Streaming', 'Video Conference', 'WiFi'], services: ['Facility Services', 'Live-Streaming & Event Recording', 'Video Conferencing', 'Custom Room Layouts', 'Guest WiFi', 'Catering Coordination', 'Event Security'], approval_required: true, sqft: 1800, floor: 'Ground Floor' },
            { id: 'venue_115', name: 'DataX Conference Room A', building: 'DataX', type: 'conference', capacity: 20, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'DataX Conference Room A at DataX. Capacity: 20. Conference Room venue.', hourly_rate: 80, half_day_rate: 500, full_day_rate: 800, features: ['Display Screen', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Guest WiFi', 'Video Conferencing'], approval_required: false, sqft: 400, floor: 'Ground Floor' },
            { id: 'venue_116', name: 'Collaboration Hub', building: 'DataX', type: 'hall', capacity: 40, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Open workspace configurable for events.', hourly_rate: 100, half_day_rate: 600, full_day_rate: 1000, features: ['Flexible Seating', 'Display Screen', 'WiFi'], services: ['Guest WiFi', 'Custom Room Layouts'], approval_required: false, sqft: 800, floor: 'Ground Floor' },
            { id: 'venue_117', name: 'Kaplan Hall 193', building: 'Kaplan Hall', type: 'hall', capacity: 40, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Room size is 20\' x 60\'. Wall-mounted monitor, Zoom appliance, control podium.', hourly_rate: 80, half_day_rate: 500, full_day_rate: 800, features: ['Display Screen', 'Video Conference', 'Flexible Seating', 'WiFi'], services: ['Furniture (Chairs, Tables, Couches)', 'WiFi', 'Cleaning Services', 'AV Services', 'Catering Support'], approval_required: false, sqft: 1200, floor: 'Ground Floor' },
            { id: 'venue_118', name: 'Main Conference Hall', building: 'Lake Arrowhead Lodge', type: 'hall', capacity: 200, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Main Conference Hall at Lake Arrowhead Lodge. Capacity: 200. Event Space venue.', hourly_rate: 400, half_day_rate: 2500, full_day_rate: 4000, features: ['Audio System', 'Projector', 'Flexible Seating', 'Catering Setup', 'WiFi'], services: ['Built-in Sound Systems', 'Projectors & Flat Screen TVs', 'Video Conferencing', 'On-Site Technical Support', 'Award-Winning Dining', 'Complete Meeting Packages'], approval_required: true, sqft: 3000, floor: 'Ground Floor' },
            { id: 'venue_119', name: 'Breakout Room A', building: 'Lake Arrowhead Lodge', type: 'meeting', capacity: 30, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Breakout Room A at Lake Arrowhead Lodge. Capacity: 30. Meeting Room venue.', hourly_rate: 80, half_day_rate: 500, full_day_rate: 800, features: ['Display Screen', 'Whiteboard', 'WiFi'], services: ['Complimentary WiFi', 'On-Site Technical Support', 'Refreshment Breaks'], approval_required: false, sqft: 500, floor: 'Ground Floor' },
            { id: 'venue_120', name: 'Breakout Room B', building: 'Lake Arrowhead Lodge', type: 'meeting', capacity: 20, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Breakout Room B at Lake Arrowhead Lodge. Capacity: 20. Meeting Room venue.', hourly_rate: 60, half_day_rate: 400, full_day_rate: 650, features: ['Display Screen', 'Whiteboard', 'WiFi'], services: ['Complimentary WiFi', 'On-Site Technical Support', 'Refreshment Breaks'], approval_required: false, sqft: 400, floor: 'Ground Floor' },
            { id: 'venue_121', name: 'Executive Boardroom', building: 'Lake Arrowhead Lodge', type: 'boardroom', capacity: 16, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Executive Boardroom at Lake Arrowhead Lodge. Capacity: 16. Boardroom venue.', hourly_rate: 100, half_day_rate: 600, full_day_rate: 1000, features: ['Large Display', 'Video Conference', 'Executive Seating', 'WiFi'], services: ['Complimentary WiFi', 'Video Conferencing', 'On-Site Bar & Lounge'], approval_required: false, sqft: 350, floor: 'Level 1' },
            { id: 'venue_122', name: 'Drake Stadium', building: 'UCLA Recreation', type: 'outdoor', capacity: 3500, av_equipment: true, catering_allowed: true, accessible: true, outdoor: true, description: 'Outdoor large-scale events venue.', hourly_rate: 2000, half_day_rate: 10000, full_day_rate: 18000, features: ['Stage/Platform', 'Audio System', 'Lighting Control', 'Natural Light'], services: ['Venue Rentals', 'Event Coordination', 'Security Coordination', 'Catering Coordination'], approval_required: true, sqft: 50000, floor: 'Ground Floor' },
            { id: 'venue_123', name: 'Los Angeles Tennis Center & Clubhouse', building: 'UCLA Recreation', type: 'outdoor', capacity: 5000, av_equipment: true, catering_allowed: true, accessible: true, outdoor: true, description: 'Used for ceremonies, concerts, and commencements.', hourly_rate: 2500, half_day_rate: 12000, full_day_rate: 20000, features: ['Stage/Platform', 'Audio System', 'Lighting Control', 'Natural Light'], services: ['Venue Rentals', 'Event Coordination', 'Security Coordination', 'Catering Coordination'], approval_required: true, sqft: 80000, floor: 'Ground Floor' },
            { id: 'venue_124', name: 'John Wooden Center Meeting Rooms', building: 'UCLA Recreation', type: 'meeting', capacity: 40, av_equipment: true, catering_allowed: false, accessible: true, outdoor: false, description: 'John Wooden Center Meeting Rooms at UCLA Recreation. Capacity: 40. Meeting Room venue.', hourly_rate: 100, half_day_rate: 600, full_day_rate: 1000, features: ['Display Screen', 'Video Conference', 'Whiteboard', 'WiFi'], services: ['Venue Rentals', 'AV Equipment'], approval_required: false, sqft: 700, floor: 'Ground Floor' },
            { id: 'venue_125', name: 'Sunset Canyon Recreation Center', building: 'UCLA Recreation', type: 'hall', capacity: 300, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Sunset Canyon Recreation Center at UCLA Recreation. Capacity: 300. Event Space venue.', hourly_rate: 400, half_day_rate: 2500, full_day_rate: 4000, features: ['Audio System', 'Flexible Seating', 'Catering Setup', 'Natural Light', 'WiFi'], services: ['Venue Rentals', 'Event Coordination', 'Catering Coordination'], approval_required: true, sqft: 5000, floor: 'Ground Floor' },
            { id: 'venue_126', name: 'Student Activities Center', building: 'UCLA Recreation', type: 'hall', capacity: 150, av_equipment: true, catering_allowed: true, accessible: true, outdoor: false, description: 'Student Activities Center at UCLA Recreation. Capacity: 150. Event Space venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Audio System', 'Projector', 'Flexible Seating', 'WiFi'], services: ['Venue Rentals', 'AV Equipment', 'Event Coordination'], approval_required: false, sqft: 2500, floor: 'Ground Floor' },
            { id: 'venue_127', name: 'Wilson Plaza', building: 'Campus Outdoor Spaces', type: 'outdoor', capacity: 500, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Suitable for receptions, ceremonies, concerts, and information fairs.', hourly_rate: 500, half_day_rate: 3000, full_day_rate: 5000, features: ['Flexible Seating', 'Portable PA', 'Natural Light', 'Catering Setup'], services: ['Event Coordination', 'Security Coordination', 'Catering Coordination'], approval_required: true, sqft: 15000, floor: 'Ground Floor' },
            { id: 'venue_128', name: 'Court of Sciences', building: 'Campus Outdoor Spaces', type: 'outdoor', capacity: 300, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Court of Sciences at Campus Outdoor Spaces. Capacity: 300. Outdoor Space venue.', hourly_rate: 400, half_day_rate: 2500, full_day_rate: 4000, features: ['Flexible Seating', 'Portable PA', 'Natural Light', 'Catering Setup'], services: ['Event Coordination', 'Security Coordination', 'Catering Coordination'], approval_required: true, sqft: 8000, floor: 'Ground Floor' },
            { id: 'venue_129', name: 'Franklin Murphy Sculpture Garden', building: 'Campus Outdoor Spaces', type: 'outdoor', capacity: 200, av_equipment: false, catering_allowed: true, accessible: true, outdoor: true, description: 'Franklin Murphy Sculpture Garden at Campus Outdoor Spaces. Capacity: 200. Outdoor Space venue.', hourly_rate: 350, half_day_rate: 2000, full_day_rate: 3500, features: ['Flexible Seating', 'Natural Light', 'Catering Setup'], services: ['Event Coordination', 'Photography Permitting', 'Catering Coordination'], approval_required: true, sqft: 6000, floor: 'Ground Floor' },
            { id: 'venue_130', name: 'Meyerhoff Park', building: 'Campus Outdoor Spaces', type: 'outdoor', capacity: 200, av_equipment: false, catering_allowed: false, accessible: true, outdoor: true, description: 'Free speech designated area with podium and amplified sound.', hourly_rate: 250, half_day_rate: 1500, full_day_rate: 2500, features: ['Stage/Platform', 'Portable PA', 'Natural Light'], services: ['Event Coordination', 'Security Coordination'], approval_required: true, sqft: 5000, floor: 'Ground Floor' },
            { id: 'venue_131', name: 'Dickson Courts North & South', building: 'Campus Outdoor Spaces', type: 'outdoor', capacity: 150, av_equipment: false, catering_allowed: false, accessible: true, outdoor: true, description: 'Dickson Courts North & South at Campus Outdoor Spaces. Capacity: 150. Outdoor Space venue.', hourly_rate: 200, half_day_rate: 1200, full_day_rate: 2000, features: ['Flexible Seating', 'Natural Light'], services: ['Event Coordination'], approval_required: false, sqft: 4000, floor: 'Ground Floor' }
        ];


        /**
         * Initialize the database
         */
        self.init = function() {
            if (initPromise) {
                return initPromise;
            }

            initPromise = $q(function(resolve, reject) {
                try {
                    // Create Dexie database
                    db = new Dexie('UCLAEventsDB');

                    // Define schema
                    db.version(1).stores({
                        events: 'id, title, event_start, created_at, updated_at',
                        venues: 'id, name, type, capacity',
                        settings: 'key'
                    });
                    // v2: updated venues (131 from concierge) and department stages
                    db.version(2).stores({
                        events: 'id, title, event_start, created_at, updated_at',
                        venues: 'id, name, type, capacity',
                        settings: 'key'
                    }).upgrade(function(tx) {
                        // Clear old data so it re-seeds with new venues/events
                        tx.table('venues').clear();
                        tx.table('events').clear();
                        tx.table('settings').clear();
                    });

                    // Open database and seed if needed
                    db.open().then(function() {
                        return self.seedDataIfNeeded();
                    }).then(function() {
                        initialized = true;
                        resolve();
                    }).catch(function(error) {
                        console.error('Database init error:', error);
                        reject(error);
                    });
                } catch (error) {
                    console.error('Database creation error:', error);
                    reject(error);
                }
            });

            return initPromise;
        };

        /**
         * Seed default data if database is empty
         */
        self.seedDataIfNeeded = function() {
            return db.settings.get('seeded').then(function(setting) {
                if (setting && setting.value) {
                    return $q.resolve();
                }

                // Seed events
                return db.events.bulkPut(defaultEvents).then(function() {
                    // Seed venues
                    return db.venues.bulkPut(defaultVenues);
                }).then(function() {
                    // Mark as seeded
                    return db.settings.put({ key: 'seeded', value: true });
                });
            });
        };

        /**
         * Reset database to default data
         */
        self.resetToDefaults = function() {
            return db.events.clear().then(function() {
                return db.venues.clear();
            }).then(function() {
                return db.settings.clear();
            }).then(function() {
                return self.seedDataIfNeeded();
            });
        };

        /**
         * Get all events
         */
        self.getAllEvents = function() {
            return self.init().then(function() {
                return db.events.toArray();
            });
        };

        /**
         * Get event by ID
         */
        self.getEvent = function(eventId) {
            return self.init().then(function() {
                return db.events.get(eventId);
            });
        };

        /**
         * Create new event
         */
        self.createEvent = function(eventData) {
            return self.init().then(function() {
                var newEvent = angular.copy(eventData);
                if (!newEvent.id) {
                    newEvent.id = 'event_' + Date.now();
                }
                newEvent.created_at = new Date().toISOString();
                newEvent.updated_at = new Date().toISOString();

                return db.events.put(newEvent).then(function() {
                    return newEvent;
                });
            });
        };

        /**
         * Update event
         */
        self.updateEvent = function(eventId, updates) {
            return self.init().then(function() {
                return db.events.get(eventId).then(function(event) {
                    if (!event) {
                        return $q.reject({ status: 404, error: 'Event not found' });
                    }

                    // Merge updates
                    var updatedEvent = angular.merge({}, event, updates);
                    updatedEvent.updated_at = new Date().toISOString();

                    return db.events.put(updatedEvent).then(function() {
                        return updatedEvent;
                    });
                });
            });
        };

        /**
         * Delete event
         */
        self.deleteEvent = function(eventId) {
            return self.init().then(function() {
                return db.events.delete(eventId);
            });
        };

        /**
         * Add or update a single venue
         */
        self.addVenue = function(venue) {
            return self.init().then(function() {
                return db.venues.put(venue);
            });
        };

        /**
         * Get all venues
         */
        self.getAllVenues = function() {
            return self.init().then(function() {
                return db.venues.toArray();
            });
        };

        /**
         * Get venue by ID
         */
        self.getVenue = function(venueId) {
            return self.init().then(function() {
                return db.venues.get(venueId);
            });
        };

        /**
         * Search venues
         */
        // Service category keyword map for search matching
        var SERVICE_KEYWORDS = {
            'catering': ['catering', 'dining', 'menu', 'bar', 'cocktail', 'refreshment', 'nutrition'],
            'av_tech': ['audio-visual', 'av ', 'av_', 'video conferencing', 'smart room', 'sound system', 'projection'],
            'event_planning': ['event coordination', 'event planning', 'event facilitator', 'event staffing', 'conference manager'],
            'parking': ['parking', 'transportation'],
            'security': ['security', 'safety', 'fire marshal'],
            'streaming': ['live-streaming', 'recording', 'hybrid'],
            'wifi': ['wifi', 'wi-fi']
        };

        var SERVICE_META = {
            'catering': { label: 'Catering', icon: 'restaurant_menu' },
            'av_tech': { label: 'AV & Tech', icon: 'videocam' },
            'event_planning': { label: 'Event Planning', icon: 'event' },
            'parking': { label: 'Parking', icon: 'local_parking' },
            'security': { label: 'Security', icon: 'security' },
            'streaming': { label: 'Streaming', icon: 'live_tv' },
            'wifi': { label: 'WiFi', icon: 'wifi' }
        };

        // Map of merged venue types (filter type → data types it includes)
        var VENUE_TYPE_GROUPS = {
            'hall': ['hall', 'gallery'],
            'conference': ['conference', 'boardroom']
        };

        /**
         * Check if a venue's services match a service category
         */
        function venueMatchesService(venue, categoryId) {
            var keywords = SERVICE_KEYWORDS[categoryId];
            if (!keywords || !venue.services) return false;

            var servicesLower = venue.services.map(function(s) { return s.toLowerCase(); });
            return keywords.some(function(keyword) {
                return servicesLower.some(function(s) {
                    return s.indexOf(keyword) !== -1;
                });
            });
        }

        /**
         * Get matched service categories for a venue
         */
        function getMatchedServices(venue) {
            var matched = [];
            Object.keys(SERVICE_KEYWORDS).forEach(function(categoryId) {
                if (venueMatchesService(venue, categoryId)) {
                    matched.push({
                        id: categoryId,
                        label: SERVICE_META[categoryId].label,
                        icon: SERVICE_META[categoryId].icon
                    });
                }
            });
            return matched;
        }

        self.searchVenues = function(criteria) {
            return self.init().then(function() {
                return db.venues.toArray().then(function(venues) {
                    // Collect active service filters
                    var activeServices = [];
                    if (criteria.services) {
                        Object.keys(criteria.services).forEach(function(key) {
                            if (criteria.services[key]) activeServices.push(key);
                        });
                    }

                    var filtered = venues.filter(function(venue) {
                        if (criteria.minCapacity && venue.capacity < criteria.minCapacity) {
                            return false;
                        }
                        // Venue type filter with merged type groups
                        if (criteria.venueType) {
                            var typeGroup = VENUE_TYPE_GROUPS[criteria.venueType];
                            if (typeGroup) {
                                if (typeGroup.indexOf(venue.type) === -1) return false;
                            } else {
                                if (venue.type !== criteria.venueType) return false;
                            }
                        }
                        if (criteria.avEquipment && !venue.av_equipment) {
                            return false;
                        }
                        if (criteria.catering && !venue.catering_allowed) {
                            return false;
                        }
                        if (criteria.accessible && !venue.accessible) {
                            return false;
                        }
                        // Service filter: venue must match ALL selected service categories
                        if (activeServices.length > 0) {
                            var allMatch = activeServices.every(function(categoryId) {
                                return venueMatchesService(venue, categoryId);
                            });
                            if (!allMatch) return false;
                        }
                        return true;
                    });

                    // Add mock availability and matched services
                    return filtered.map(function(venue) {
                        var v = angular.copy(venue);
                        var venueNum = parseInt(venue.id.split('_')[1]);

                        // Attach matched service categories for display
                        v.matched_services = getMatchedServices(venue);

                        if (criteria.flexibleDates && criteria.startDate && criteria.endDate) {
                            var availableDates = [];
                            var current = new Date(criteria.startDate);
                            var end = new Date(criteria.endDate);

                            while (current <= end) {
                                var dayOfMonth = current.getDate();
                                if ((dayOfMonth + venueNum) % 2 === 1) {
                                    availableDates.push(current.toISOString().split('T')[0]);
                                }
                                current.setDate(current.getDate() + 1);
                            }

                            v.available = availableDates.length > 0;
                            v.availableDates = availableDates;
                        } else {
                            v.available = venueNum % 2 === 1;
                        }

                        return v;
                    });
                });
            });
        };

        /**
         * Check for venue time conflicts in local IndexedDB
         */
        self.checkVenueConflicts = function(venueId, venueName, startTime, endTime, excludeEventId) {
            return self.init().then(function() {
                return db.events.toArray().then(function(allEvents) {
                    return allEvents.filter(function(evt) {
                        if (excludeEventId && evt.id === excludeEventId) return false;

                        var ext = evt.extension_data || {};
                        var same_venue = (ext.venue_id === venueId) ||
                            (ext.venue && venueName && ext.venue.toLowerCase() === venueName.toLowerCase());
                        if (!same_venue) return false;

                        var evt_start = evt.event_start;
                        var evt_end = evt.event_end;
                        if (!evt_start || !evt_end) return false;

                        return evt_start < endTime && evt_end > startTime;
                    });
                });
            });
        };

        /**
         * Get next event ID
         */
        self.getNextEventId = function() {
            return self.init().then(function() {
                return db.events.count().then(function(count) {
                    return 'event_' + (count + Date.now());
                });
            });
        };
    }

})();
