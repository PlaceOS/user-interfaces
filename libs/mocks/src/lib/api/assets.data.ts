import { predictableRandomInt } from '@placeos/common';
import { getUnixTime, subDays, subMonths } from 'date-fns';

export const MOCK_CATEGORIES = [
    {
        id: '9',
        name: 'AV Equipment',
        description: 'Audio-visual equipment, projectors, monitors, cameras and accessories',
    },
    {
        id: '11',
        name: 'Event Setup & Furniture',
        description: 'Tables, bars, cocktail tables and event furniture rental',
    },
];

export const MOCK_PRODUCTS = [
    // ── UCLA AV Equipment (category 9) ────────────────────────────────
    {
        id: '30',
        name: 'Basic Meeting Room AV (University Club)',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-BASIC-UC',
        description: 'Basic AV package for University Club meeting rooms — includes projector, screen, podium mic',
        specifications: { rental_price: '$500/event' },
    },
    {
        id: '31',
        name: 'Basic AV — Built-In Projector',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-BUILTIN',
        description: 'Basic AV setup with venue built-in projector and audio',
        specifications: { rental_price: '$400/event' },
    },
    {
        id: '32',
        name: 'Basic AV — Portable Projector (The Hill)',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-PORTABLE',
        description: 'Portable projector package for Hill venues',
        specifications: { rental_price: '$400/event' },
    },
    {
        id: '33',
        name: 'Portable Projector + Screen (Lounges)',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-PROJ-SCR',
        description: 'Portable projector and screen combo for lounge areas',
        specifications: { rental_price: '$250/each' },
    },
    {
        id: '34',
        name: 'Hard Wired Internet',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-INTERNET',
        description: 'Dedicated hard-wired internet connection for events',
        specifications: { rental_price: '$150/each' },
    },
    {
        id: '35',
        name: 'Acrylic Podium',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-PODIUM',
        description: 'Clear acrylic podium for presentations and speeches',
        specifications: { rental_price: '$150/each' },
    },
    {
        id: '36',
        name: 'Additional Pad for Flipchart',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-FLIPPAD',
        description: 'Replacement pad for flipchart easel',
        specifications: { rental_price: '$20/each' },
    },
    {
        id: '37',
        name: 'Audio Mixer (16-channel)',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-MIX16',
        description: '16-channel audio mixer for large events',
        specifications: { channels: '16', rental_price: '$130/each' },
    },
    {
        id: '38',
        name: 'Audio Mixer (4-channel)',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-MIX4',
        description: '4-channel audio mixer for small events',
        specifications: { channels: '4', rental_price: '$65/each' },
    },
    {
        id: '39',
        name: 'Additional Microphone',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-MIC',
        description: 'Additional wired or wireless microphone',
        specifications: { rental_price: '$200/each' },
    },
    {
        id: '40',
        name: 'Assisted Listening Device',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-ALD',
        description: 'Assisted listening device for accessibility compliance',
        specifications: { rental_price: '$50/each' },
    },
    {
        id: '41',
        name: 'Camera',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-CAM',
        description: 'Video camera for event recording and live streaming',
        specifications: { rental_price: '$300/each' },
    },
    {
        id: '42',
        name: 'Cisco Speakerphone',
        category_id: '9',
        brand: 'Cisco',
        barcode: 'UCLA-AV-CISCO',
        description: 'Cisco speakerphone for conference calls and hybrid meetings',
        specifications: { rental_price: '$300/each' },
    },
    {
        id: '43',
        name: 'Confidence Monitor 55"',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-MON55',
        description: '55-inch confidence monitor for speaker reference',
        specifications: { size: '55 inch', rental_price: '$350/each' },
    },
    {
        id: '44',
        name: 'Confidence Monitor 65"',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-MON65',
        description: '65-inch confidence monitor for speaker reference',
        specifications: { size: '65 inch', rental_price: '$550/each' },
    },
    {
        id: '45',
        name: 'Confidence Monitor 85"',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-MON85',
        description: '85-inch confidence monitor for large venues',
        specifications: { size: '85 inch', rental_price: '$750/each' },
    },
    {
        id: '46',
        name: 'Monitor 42"',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-MON42',
        description: '42-inch display monitor',
        specifications: { size: '42 inch', rental_price: '$200/each' },
    },
    {
        id: '47',
        name: 'OWL USB Webcam',
        category_id: '9',
        brand: 'Meeting Owl',
        barcode: 'UCLA-AV-OWL',
        description: 'OWL 360-degree USB webcam for hybrid meetings',
        specifications: { rental_price: '$350/each' },
    },
    {
        id: '48',
        name: 'Slide Advancer',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-SLIDE',
        description: 'Wireless slide advancer remote',
        specifications: { rental_price: '$50/each' },
    },
    {
        id: '49',
        name: 'Speaker Timer',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-TIMER',
        description: 'Digital speaker timer display',
        specifications: { rental_price: '$350/each' },
    },
    {
        id: '50',
        name: 'PerfectCue',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-CUE',
        description: 'PerfectCue presentation cue system',
        specifications: { rental_price: '$350/each' },
    },
    {
        id: '51',
        name: 'Laptop — MacBook',
        category_id: '9',
        brand: 'Apple',
        barcode: 'UCLA-AV-MAC',
        description: 'MacBook laptop for presentations',
        specifications: { rental_price: '$250/each' },
    },
    {
        id: '52',
        name: 'Laptop — PC',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-PC',
        description: 'PC laptop for presentations',
        specifications: { rental_price: '$250/each' },
    },
    {
        id: '53',
        name: 'Moon Balloon',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-MOON',
        description: 'Moon balloon lighting for outdoor events',
        specifications: { rental_price: '$800/each' },
    },
    {
        id: '54',
        name: 'Power Panel',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-PWRPNL',
        description: 'Electrical power panel for large events',
        specifications: { rental_price: '$600/each' },
    },
    {
        id: '55',
        name: 'Power Strip',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-PWRSTR',
        description: 'Power strip extension',
        specifications: { rental_price: '$30/each' },
    },
    {
        id: '56',
        name: 'Power Extension',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-PWREXT',
        description: 'Power extension cord',
        specifications: { rental_price: '$30/each' },
    },
    {
        id: '57',
        name: 'HDMI Cable (6-Foot)',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-HDMI',
        description: '6-foot HDMI cable',
        specifications: { length: '6 feet', rental_price: '$30/each' },
    },
    {
        id: '58',
        name: 'Network Cable (10-Foot)',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-NET',
        description: '10-foot network/ethernet cable',
        specifications: { length: '10 feet', rental_price: '$30/each' },
    },
    {
        id: '59',
        name: 'Laptop Adapters',
        category_id: '9',
        brand: 'UCLA AV',
        barcode: 'UCLA-AV-ADAPT',
        description: 'Assorted laptop video adapters (USB-C, HDMI, VGA)',
        specifications: { rental_price: '$30/each' },
    },

    // ── UCLA Event Setup & Furniture (category 11) ──────────────────
    {
        id: '70',
        name: '12-ft Registration Table + 4 Chairs + Wastebaskets',
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-REG',
        description: 'Registration table package with chairs and wastebaskets',
        specifications: { rental_price: 'Included', size: '12 feet' },
    },
    {
        id: '71',
        name: '12-ft Bar',
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-BAR12',
        description: '12-foot bar for events and receptions',
        specifications: { rental_price: 'Included', size: '12 feet' },
    },
    {
        id: '72',
        name: '6-ft Front & Back Bar',
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-BAR6',
        description: '6-foot front and back bar',
        specifications: { rental_price: 'Included', size: '6 feet' },
    },
    {
        id: '73',
        name: "6' Buffet Table",
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-BUF6',
        description: "6' buffet table for catering setup",
        specifications: { rental_price: 'Included', size: '6 feet' },
    },
    {
        id: '74',
        name: "12' Buffet Table",
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-BUF12',
        description: "12' buffet table for catering setup",
        specifications: { rental_price: 'Included', size: '12 feet' },
    },
    {
        id: '75',
        name: "18' Buffet Table",
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-BUF18',
        description: "18' buffet table for catering setup",
        specifications: { rental_price: 'Included', size: '18 feet' },
    },
    {
        id: '76',
        name: "6' Table",
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-T6',
        description: "6' table — $15/each",
        specifications: { rental_price: '$15/each', size: '6 feet' },
    },
    {
        id: '77',
        name: "8' Table",
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-T8',
        description: "8' table — $20/each",
        specifications: { rental_price: '$20/each', size: '8 feet' },
    },
    {
        id: '78',
        name: '6\'x18" Seminar (Classroom) Table',
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-SEM',
        description: 'Seminar/classroom table — $10/each',
        specifications: { rental_price: '$10/each' },
    },
    {
        id: '79',
        name: '30" Standing Cocktail Tables',
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-CKT30',
        description: '30" standing cocktail table — $10/each',
        specifications: { rental_price: '$10/each', height: '30 inches' },
    },
    {
        id: '80',
        name: '36" Seated Cocktail Tables + 4 Chairs',
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-CKT36',
        description: '36" seated cocktail table with 4 chairs — $15/each',
        specifications: { rental_price: '$15/each', height: '36 inches' },
    },
    {
        id: '81',
        name: '42" Round Table',
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-RND42',
        description: '42" round table — $8/each',
        specifications: { rental_price: '$8/each', diameter: '42 inches' },
    },
    {
        id: '82',
        name: '60" Round Table',
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-RND60',
        description: '60" round table — $12/each',
        specifications: { rental_price: '$12/each', diameter: '60 inches' },
    },
    {
        id: '83',
        name: '66" Round Table',
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-RND66',
        description: '66" round table — $15/each',
        specifications: { rental_price: '$15/each', diameter: '66 inches' },
    },
    {
        id: '84',
        name: '72" Round Table',
        category_id: '11',
        brand: 'UCLA Events',
        barcode: 'UCLA-SETUP-RND72',
        description: '72" round table — $20/each',
        specifications: { rental_price: '$20/each', diameter: '72 inches' },
    },

];

const ASSET_CONDITIONS = ['Excellent', 'Good', 'Fair', 'Poor'];
const ASSET_STATUS = ['Available', 'In Use', 'Maintenance', 'Retired'];
const MAINTENANCE_TYPES = ['Routine', 'Repair', 'Calibration', 'Inspection'];

const generateAssetHistory = (assetId: string) => {
    const historyCount = predictableRandomInt(5, 1);
    return Array(historyCount)
        .fill(null)
        .map((_, i) => ({
            id: `history-${assetId}-${i}`,
            asset_id: assetId,
            action: ['Assigned', 'Returned', 'Maintained', 'Relocated'][
                predictableRandomInt(4)
            ],
            user_id: `staff-${predictableRandomInt(20) + 1}`,
            location: `Floor ${predictableRandomInt(3) + 1}`,
            timestamp: getUnixTime(
                subDays(Date.now(), predictableRandomInt(365)),
            ),
            notes: 'Asset management action recorded',
        }));
};

const generateMaintenanceSchedule = (assetId: string) => {
    if (predictableRandomInt(3) === 0) return null; // 33% have no maintenance schedule

    return {
        id: `maintenance-${assetId}`,
        asset_id: assetId,
        type: MAINTENANCE_TYPES[predictableRandomInt(MAINTENANCE_TYPES.length)],
        frequency_days: [30, 60, 90, 180, 365][predictableRandomInt(5)],
        last_service: getUnixTime(
            subDays(Date.now(), predictableRandomInt(90)),
        ),
        next_service: getUnixTime(
            new Date(
                Date.now() +
                    (predictableRandomInt(90) + 30) * 24 * 60 * 60 * 1000,
            ),
        ),
        service_provider:
            'Internal IT' +
            (predictableRandomInt(3) === 0 ? '' : ' / External Contractor'),
        estimated_cost: predictableRandomInt(500, 50),
    };
};

export const MOCK_ASSETS = Array(MOCK_PRODUCTS.length * 3)
    .fill(null)
    .map((_, i) => {
        const product = MOCK_PRODUCTS[i % MOCK_PRODUCTS.length];
        const purchaseDate = subMonths(Date.now(), predictableRandomInt(36, 1));
        const condition =
            ASSET_CONDITIONS[predictableRandomInt(ASSET_CONDITIONS.length)];
        const status = ASSET_STATUS[predictableRandomInt(ASSET_STATUS.length)];
        const assetId = `asset-${String(i + 1).padStart(4, '0')}`;

        return {
            id: assetId,
            name: `${product.name} - ${assetId}`,
            asset_type_id: product.id,
            description:
                product.description ||
                `${product.brand} ${product.name} for office use`,
            model_number:
                (product as any).model ||
                `${product.brand}-${predictableRandomInt(9999)}`,
            serial_number: `${product.brand?.substring(0, 3).toUpperCase()}${predictableRandomInt(999999999)}`,
            identifier: `${product.barcode}-${String(i + 1).padStart(3, '0')}`,
            barcode: product.barcode,
            brand: product.brand,
            condition,
            status,
            purchase_order_id: `PO-${Math.floor(i / 5) + 1}`, // Group assets by purchase orders
            purchase_date: getUnixTime(purchaseDate),
            warranty_expiry: getUnixTime(
                new Date(
                    purchaseDate.getTime() +
                        predictableRandomInt(36, 12) * 30 * 24 * 60 * 60 * 1000,
                ),
            ),
            purchase_price: predictableRandomInt(5000, 100),
            current_value: Math.max(predictableRandomInt(3000, 50), 50), // Depreciated value
            location: {
                building: `Building ${predictableRandomInt(2) + 1}`,
                floor: predictableRandomInt(5) + 1,
                room: `Room ${String(predictableRandomInt(50) + 1).padStart(2, '0')}`,
                zone: `zone-${predictableRandomInt(3) + 1}`,
            },
            assigned_to:
                status === 'In Use'
                    ? `staff-${predictableRandomInt(20) + 1}`
                    : null,
            category_id: product.category_id,
            specifications: product.specifications || {},
            other_data: {
                history: generateAssetHistory(assetId),
                maintenance_schedule: generateMaintenanceSchedule(assetId),
                insurance_value: predictableRandomInt(6000, 200),
                depreciation_rate: predictableRandomInt(20, 5), // 5-25% per year
                energy_rating: null,
                dimensions: {
                    width: predictableRandomInt(100, 10),
                    height: predictableRandomInt(100, 5),
                    depth: predictableRandomInt(80, 10),
                    weight: predictableRandomInt(50, 1),
                },
                tags: [
                    product.brand?.toLowerCase(),
                    MOCK_CATEGORIES.find(
                        (c) => c.id === product.category_id,
                    )?.name.toLowerCase(),
                    condition.toLowerCase(),
                    ...(status === 'In Use' ? ['assigned'] : []),
                    ...(product.category_id === '1' ? ['tech'] : []),
                ].filter(Boolean),
            },
        };
    });

export const MOCK_PURCHASE_ORDERS = Array(30)
    .fill(null)
    .map((_, i) => {
        const orderDate = subMonths(Date.now(), predictableRandomInt(36, 1));
        const deliveryDate = new Date(
            orderDate.getTime() +
                predictableRandomInt(30) * 24 * 60 * 60 * 1000,
        );

        return {
            id: `PO-${i + 1}`,
            purchase_order_number: `PO-${new Date().getFullYear()}-${String(i + 1).padStart(4, '0')}`,
            invoice_number: `INV-${String(predictableRandomInt(99999) + 10000)}`,
            vendor: [
                'Office Supplies Co',
                'Tech Solutions Ltd',
                'Furniture Plus',
                'AV Equipment Pro',
            ][predictableRandomInt(4)],
            department: ['IT', 'Facilities', 'HR', 'Finance'][
                predictableRandomInt(4)
            ],
            purchase_date: getUnixTime(orderDate),
            delivery_date: getUnixTime(deliveryDate),
            expected_service_start_date: getUnixTime(deliveryDate),
            expected_service_end_date: getUnixTime(
                new Date(
                    deliveryDate.getTime() + 3 * 365 * 24 * 60 * 60 * 1000,
                ),
            ), // 3 years
            total_amount: predictableRandomInt(50000, 1000),
            currency: 'USD',
            status: ['Pending', 'Approved', 'Delivered', 'Complete'][
                predictableRandomInt(4)
            ],
            approver_id: `staff-${predictableRandomInt(5) + 1}`,
            notes:
                i % 3 === 0
                    ? 'Bulk order for office renovation'
                    : i % 3 === 1
                      ? 'Emergency replacement'
                      : 'Routine procurement',
            payment_terms: [
                'Net 30',
                'Net 60',
                'Payment on Delivery',
                'Net 15',
            ][predictableRandomInt(4)],
        };
    });

// Helper functions for asset management
export const getAssetsByCategory = (categoryId: string) =>
    (MOCK_ASSETS as any).filter((asset) => asset.category_id === categoryId);

export const getAssetsByStatus = (status: string) =>
    (MOCK_ASSETS as any).filter((asset) => asset.status === status);

export const getAssetsByLocation = (building: string, floor?: number) =>
    (MOCK_ASSETS as any).filter(
        (asset) =>
            asset.location?.building === building &&
            (!floor || asset.location?.floor === floor),
    );

export const getAvailableAssets = () =>
    (MOCK_ASSETS as any).filter((asset) => asset.status === 'Available');

export const getAssetsRequiringMaintenance = () =>
    MOCK_ASSETS.filter((asset) => {
        const schedule = asset.other_data?.maintenance_schedule;
        if (!schedule) return false;
        return (
            schedule.next_service <=
            getUnixTime(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000))
        ); // Due within 7 days
    });

