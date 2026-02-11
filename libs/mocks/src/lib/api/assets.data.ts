import { padString, predictableRandomInt } from '@placeos/common';
import { getUnixTime, subDays, subMonths } from 'date-fns';
import { MOCK_STAFF } from './users.data';

export const MOCK_CATEGORIES = [
    {
        id: '1',
        name: 'Technology',
        description: 'Electronic devices and computing equipment',
    },
    {
        id: '2',
        name: 'Furniture',
        description: 'Office furniture and workspace equipment',
    },
    {
        id: '3',
        name: 'Audio Visual',
        description: 'Presentation and meeting room equipment',
    },
    {
        id: '4',
        name: 'Office Supplies',
        description: 'Stationery and consumable items',
    },
    {
        id: '5',
        name: 'Kitchen & Catering',
        description: 'Kitchen appliances and catering equipment',
    },
    {
        id: '6',
        name: 'Wellness & Safety',
        description: 'Health, safety, and wellness equipment',
    },
    {
        id: '7',
        name: 'Mobility',
        description: 'Transportation and mobility aids',
    },
    {
        id: '8',
        name: 'Cleaning & Maintenance',
        description: 'Cleaning supplies and maintenance tools',
    },
    {
        id: '_parking_category_',
        name: '_PARKING_SPACES_',
        description: 'Parking spaces',
        hidden: true,
    },
];

export const MOCK_PRODUCTS = [
    // Technology
    {
        id: '1',
        name: 'iPad Pro 12.9"',
        category_id: '1',
        brand: 'Apple',
        barcode: 'APL-IPD-PRO-12',
        model: 'MHNK3X/A',
        description:
            'Latest generation iPad Pro with M2 chip, perfect for presentations and digital collaboration',
        specifications: {
            screen_size: '12.9 inch',
            storage: '256GB',
            connectivity: 'Wi-Fi + Cellular',
            color: 'Space Gray',
        },
    },
    {
        id: '2',
        name: 'iPhone 14 Pro',
        category_id: '1',
        brand: 'Apple',
        barcode: 'APL-IPH-14P',
        model: 'MQ0G3X/A',
        description:
            'Professional smartphone for business communications and mobile productivity',
        specifications: {
            storage: '128GB',
            color: 'Deep Purple',
            connectivity: '5G',
        },
    },
    {
        id: '3',
        name: 'MacBook Pro 16"',
        category_id: '1',
        brand: 'Apple',
        barcode: 'APL-MBP-16',
        model: 'MK1E3X/A',
        description:
            'High-performance laptop for development and creative work',
        specifications: {
            processor: 'M2 Pro',
            memory: '16GB',
            storage: '512GB SSD',
            color: 'Space Gray',
        },
    },
    {
        id: '4',
        name: 'Surface Pro 9',
        category_id: '1',
        brand: 'Microsoft',
        barcode: 'MSF-SP9-256',
        model: 'QEZ-00001',
        description: '2-in-1 tablet and laptop for versatile productivity',
        specifications: {
            processor: 'Intel Core i5',
            memory: '8GB',
            storage: '256GB SSD',
        },
    },
    {
        id: '5',
        name: 'Wireless Presenter Remote',
        category_id: '1',
        brand: 'Logitech',
        barcode: 'LOG-R400',
        model: 'R400',
        description:
            'Professional wireless presenter with laser pointer and intuitive controls',
    },

    // Furniture
    {
        id: '6',
        name: 'Aeron Chair',
        category_id: '2',
        brand: 'Herman Miller',
        barcode: 'HM-AER-B',
        model: 'AE113AWBPJG1C7',
        description:
            'Ergonomic office chair with advanced lumbar support and breathable mesh',
        specifications: {
            size: 'Size B (Medium)',
            color: 'Graphite',
            material: 'Pellicle mesh',
            adjustments: 'Full feature',
        },
    },
    {
        id: '7',
        name: 'Standing Desk Converter',
        category_id: '2',
        brand: 'Varidesk',
        barcode: 'VAR-SD36',
        model: 'Pro Plus 36',
        description:
            'Height-adjustable desk converter for ergonomic workspace flexibility',
        specifications: {
            width: '36 inches',
            weight_capacity: '35 lbs',
            height_range: '11.5" - 15.5"',
        },
    },
    {
        id: '8',
        name: 'Modular Sofa System',
        category_id: '2',
        brand: 'Steelcase',
        barcode: 'STC-MSS-3',
        model: 'Gesture Lounge',
        description:
            'Flexible seating solution for collaborative spaces and break areas',
    },
    {
        id: '9',
        name: 'Conference Table',
        category_id: '2',
        brand: 'Knoll',
        barcode: 'KNL-CT-12',
        model: 'Florence 12-Person',
        description:
            'Premium conference table with integrated cable management',
        specifications: {
            seats: '12 people',
            material: 'Oak veneer',
            shape: 'Rectangular',
        },
    },

    // Audio Visual
    {
        id: '10',
        name: '4K Laser Projector',
        category_id: '3',
        brand: 'Epson',
        barcode: 'EPS-LS500',
        model: 'EpiqVision Ultra LS500',
        description:
            'Ultra-short throw 4K laser projector for meeting rooms and presentations',
        specifications: {
            resolution: '4K UHD',
            brightness: '4000 lumens',
            technology: 'Laser',
            connectivity: 'HDMI, USB-C, Wireless',
        },
    },
    {
        id: '11',
        name: 'Wireless Microphone System',
        category_id: '3',
        brand: 'Shure',
        barcode: 'SHR-SM58',
        model: 'SM58-LC',
        description:
            'Professional wireless microphone for presentations and events',
    },
    {
        id: '12',
        name: '86" Interactive Display',
        category_id: '3',
        brand: 'Microsoft',
        barcode: 'MSF-SH2-86',
        model: 'Surface Hub 2S 85"',
        description:
            'Large format interactive display for collaborative meetings and workshops',
        specifications: {
            size: '85 inches',
            resolution: '4K',
            touch_points: '20 simultaneous',
            connectivity: 'Multiple inputs',
        },
    },
    {
        id: '13',
        name: 'Soundbar System',
        category_id: '3',
        brand: 'Bose',
        barcode: 'BSE-SB700',
        model: 'Smart Soundbar 700',
        description: 'Premium soundbar for meeting room audio enhancement',
    },

    // Office Supplies
    {
        id: '14',
        name: 'Whiteboard Markers Set',
        category_id: '4',
        brand: 'Artline',
        barcode: 'ART-WB-12',
        description:
            'Set of 12 assorted color whiteboard markers with fine tips',
    },
    {
        id: '15',
        name: 'Premium Notebooks',
        category_id: '4',
        brand: 'Moleskine',
        barcode: 'MOL-NB-A4',
        model: 'Classic Hard Cover',
        description: 'Professional notebooks for meeting notes and planning',
    },
    {
        id: '16',
        name: 'Wireless Charging Pad',
        category_id: '4',
        brand: 'Belkin',
        barcode: 'BLK-WCP15',
        description:
            'Fast wireless charging pad for meeting room desk integration',
    },

    // Kitchen & Catering
    {
        id: '17',
        name: 'Coffee Machine',
        category_id: '5',
        brand: 'Nespresso',
        barcode: 'NSP-VM200',
        model: 'Vertuo Plus',
        description:
            'Professional coffee machine for office kitchen and meeting refreshments',
        specifications: {
            type: 'Capsule system',
            cup_sizes: '4 sizes',
            water_tank: '1.1L',
        },
    },
    {
        id: '18',
        name: 'Mini Refrigerator',
        category_id: '5',
        brand: 'Haier',
        barcode: 'HAI-MR126',
        model: 'HR-126WL',
        description:
            'Compact refrigerator for meeting room refreshments and catering storage',
    },
    {
        id: '19',
        name: 'Water Cooler',
        category_id: '5',
        brand: 'Zip',
        barcode: 'ZIP-HC160',
        description:
            'Filtered water cooler with hot and cold dispensing options',
    },

    // Wellness & Safety
    {
        id: '20',
        name: 'First Aid Kit',
        category_id: '6',
        brand: 'St John Ambulance',
        barcode: 'SJA-FAK50',
        description: 'Comprehensive workplace first aid kit for 50 people',
    },
    {
        id: '21',
        name: 'Air Purifier',
        category_id: '6',
        brand: 'Dyson',
        barcode: 'DYS-AP01',
        model: 'Pure Cool TP01',
        description: 'HEPA air purifier and fan for meeting room air quality',
    },
    {
        id: '22',
        name: 'Ergonomic Footrest',
        category_id: '6',
        brand: 'Humanscale',
        barcode: 'HUM-FR300',
        description: 'Adjustable footrest for ergonomic workstation setup',
    },

    // Mobility
    {
        id: '23',
        name: 'Equipment Trolley',
        category_id: '7',
        brand: 'Rubbermaid',
        barcode: 'RBM-ET3',
        description:
            'Mobile trolley for transporting AV equipment and supplies',
    },
    {
        id: '24',
        name: 'Laptop Cart',
        category_id: '7',
        brand: 'Bretford',
        barcode: 'BRT-LC20',
        description: 'Mobile charging cart for laptops and tablets',
    },

    // Cleaning & Maintenance
    {
        id: '25',
        name: 'Cleaning Supply Kit',
        category_id: '8',
        brand: 'Diversey',
        barcode: 'DIV-CSK01',
        description: 'Complete cleaning supply kit for office maintenance',
    },
    {
        id: '26',
        name: 'HEPA Vacuum Cleaner',
        category_id: '8',
        brand: 'Shark',
        barcode: 'SHK-NV752',
        description: 'Professional grade vacuum cleaner with HEPA filtration',
    },
    {
        id: '_parking_type_',
        name: '_PARKING_SPACES_',
        category_id: '_parking_category_',
        brand: 'PlaceOS',
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

export const MOCK_ASSETS = Array(150)
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
                product.model ||
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
                energy_rating:
                    product.category_id === '1' || product.category_id === '5'
                        ? ['A+++', 'A++', 'A+', 'A', 'B'][
                              predictableRandomInt(5)
                          ]
                        : null,
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
            currency: 'AUD',
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

const MOCK_PARKING_ASSETS_CACHE: Record<string, any[]> = {};

export function generateMockParkingAssets(zone_id: string) {
    if (!MOCK_PARKING_ASSETS_CACHE[zone_id]) {
        const parts = zone_id.split('-');
        const id = parts[parts.length - 1];
        MOCK_PARKING_ASSETS_CACHE[zone_id] = new Array(18 * 6)
            .fill(0)
            .map((_, idx) => {
                const position = padString(
                    (idx % 18) + Math.floor(idx / 18) * 100,
                    3,
                );
                const assignee =
                    predictableRandomInt(9999) % 4 === 0
                        ? MOCK_STAFF[predictableRandomInt(MOCK_STAFF.length)]
                        : ({} as any);
                return {
                    id: `park-${id}-${position}`,
                    map_id: `park-${position}`,
                    name: `${position}`,
                    bookable: predictableRandomInt(9999) % 4 !== 0,
                    assigned_to: assignee.email || '',
                    assigned_name: assignee.name || '',
                    asset_type_id: '_parking_type_',
                    zone_id,
                    notes: '',
                    place_groups: [],
                    features: [],
                    images: [],
                };
            });
    }
    return MOCK_PARKING_ASSETS_CACHE[zone_id];
}

export function getAllMockParkingAssets() {
    return Object.values(MOCK_PARKING_ASSETS_CACHE).flat();
}
