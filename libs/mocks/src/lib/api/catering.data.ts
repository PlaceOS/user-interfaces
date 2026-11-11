import { CateringOrderStatus, HashMap } from '@placeos/common';
import { differenceInMinutes } from 'date-fns';

export const MOCK_MENU = [
    // Beverages
    {
        id: 'bev-001',
        name: 'Barista Coffee Selection',
        unit_price: 450,
        category: 'beverages',
        description: 'Freshly brewed barista-quality coffee with premium beans',
        dietary: ['vegetarian'],
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300',
        options: [
            { id: 'opt-001', name: 'Espresso', group: 'type' },
            { id: 'opt-002', name: 'Cappuccino', group: 'type' },
            { id: 'opt-003', name: 'Flat White', group: 'type' },
            { id: 'opt-004', name: 'Latte', group: 'type' },
            { id: 'opt-005', name: 'Long Black', group: 'type' },
            { id: 'opt-006', name: 'Mocha', group: 'type' },
            { id: 'opt-007', name: 'Regular', group: 'size' },
            { id: 'opt-008', name: 'Large', group: 'size', unit_price: 50 },
            { id: 'opt-009', name: 'Oat Milk', group: 'milk', unit_price: 60 },
            {
                id: 'opt-010',
                name: 'Almond Milk',
                group: 'milk',
                unit_price: 60,
            },
            { id: 'opt-011', name: 'Soy Milk', group: 'milk', unit_price: 50 },
            {
                id: 'opt-012',
                name: 'Extra Shot',
                group: 'extras',
                unit_price: 70,
            },
            { id: 'opt-013', name: 'Decaf', group: 'extras' },
        ],
    },
    {
        id: 'bev-002',
        name: 'Premium Tea Selection',
        unit_price: 350,
        category: 'beverages',
        description: 'Selection of premium loose leaf teas',
        dietary: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300',
        options: [
            { id: 'opt-014', name: 'Earl Grey', group: 'type' },
            { id: 'opt-015', name: 'English Breakfast', group: 'type' },
            { id: 'opt-016', name: 'Green Tea', group: 'type' },
            { id: 'opt-017', name: 'Chamomile', group: 'type' },
            { id: 'opt-018', name: 'Peppermint', group: 'type' },
            { id: 'opt-019', name: 'Jasmine', group: 'type' },
            {
                id: 'opt-020',
                name: 'Honey',
                group: 'additions',
                unit_price: 30,
            },
            {
                id: 'opt-021',
                name: 'Lemon',
                group: 'additions',
                unit_price: 20,
            },
        ],
    },
    {
        id: 'bev-003',
        name: 'Fresh Juice Bar',
        unit_price: 550,
        category: 'beverages',
        description: 'Cold-pressed fresh juices and smoothies',
        dietary: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300',
        options: [
            { id: 'opt-022', name: 'Orange', group: 'juice' },
            { id: 'opt-023', name: 'Apple', group: 'juice' },
            { id: 'opt-024', name: 'Green Machine', group: 'juice' },
            { id: 'opt-025', name: 'Berry Blast', group: 'smoothie' },
            { id: 'opt-026', name: 'Tropical Paradise', group: 'smoothie' },
            {
                id: 'opt-027',
                name: 'Protein Boost',
                group: 'smoothie',
                unit_price: 100,
            },
        ],
    },
    {
        id: 'bev-004',
        name: 'Sparkling Water Station',
        unit_price: 250,
        category: 'beverages',
        description: 'Premium sparkling and still water with fruit infusions',
        dietary: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
        image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300',
        options: [
            { id: 'opt-028', name: 'Still Water', group: 'type' },
            { id: 'opt-029', name: 'Sparkling Water', group: 'type' },
            { id: 'opt-030', name: 'Cucumber Mint', group: 'infusion' },
            { id: 'opt-031', name: 'Lemon Lime', group: 'infusion' },
            { id: 'opt-032', name: 'Berry Mix', group: 'infusion' },
        ],
    },

    // Breakfast
    {
        id: 'brf-001',
        name: 'Artisan Pastry Selection',
        unit_price: 650,
        category: 'breakfast',
        description: 'Fresh baked croissants, danish, and muffins',
        dietary: ['vegetarian'],
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300',
        options: [
            { id: 'opt-033', name: 'Butter Croissant', group: 'pastry' },
            {
                id: 'opt-034',
                name: 'Almond Croissant',
                group: 'pastry',
                unit_price: 100,
            },
            { id: 'opt-035', name: 'Pain au Chocolat', group: 'pastry' },
            { id: 'opt-036', name: 'Blueberry Muffin', group: 'muffin' },
            { id: 'opt-037', name: 'Banana Walnut Muffin', group: 'muffin' },
            { id: 'opt-038', name: 'Double Choc Chip Muffin', group: 'muffin' },
        ],
    },
    {
        id: 'brf-002',
        name: 'Breakfast Bowl Bar',
        unit_price: 1250,
        category: 'breakfast',
        description: 'Build-your-own breakfast bowls with fresh toppings',
        dietary: ['vegetarian', 'gluten-free'],
        image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=300',
        options: [
            { id: 'opt-039', name: 'Greek Yogurt', group: 'base' },
            { id: 'opt-040', name: 'Overnight Oats', group: 'base' },
            {
                id: 'opt-041',
                name: 'Acai Bowl',
                group: 'base',
                unit_price: 200,
            },
            { id: 'opt-042', name: 'Fresh Berries', group: 'toppings' },
            { id: 'opt-043', name: 'Granola', group: 'toppings' },
            { id: 'opt-044', name: 'Honey', group: 'toppings' },
            { id: 'opt-045', name: 'Chia Seeds', group: 'toppings' },
            { id: 'opt-046', name: 'Coconut Flakes', group: 'toppings' },
        ],
    },
    {
        id: 'brf-003',
        name: 'Executive Breakfast Platter',
        unit_price: 1850,
        category: 'breakfast',
        description: 'Premium breakfast selection with eggs, bacon, and sides',
        dietary: [],
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300',
        options: [
            { id: 'opt-047', name: 'Scrambled Eggs', group: 'eggs' },
            { id: 'opt-048', name: 'Poached Eggs', group: 'eggs' },
            {
                id: 'opt-049',
                name: 'Eggs Benedict',
                group: 'eggs',
                unit_price: 300,
            },
            { id: 'opt-050', name: 'Crispy Bacon', group: 'protein' },
            { id: 'opt-051', name: 'Sausages', group: 'protein' },
            {
                id: 'opt-052',
                name: 'Smoked Salmon',
                group: 'protein',
                unit_price: 400,
            },
            { id: 'opt-053', name: 'Hash Browns', group: 'sides' },
            { id: 'opt-054', name: 'Grilled Tomato', group: 'sides' },
        ],
    },

    // Salads
    {
        id: 'sal-001',
        name: 'Mediterranean Power Bowl',
        unit_price: 1450,
        category: 'salads',
        description: 'Fresh Mediterranean ingredients with quinoa and feta',
        dietary: ['vegetarian', 'gluten-free'],
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300',
        options: [
            {
                id: 'opt-055',
                name: 'Grilled Chicken',
                group: 'protein',
                unit_price: 300,
            },
            {
                id: 'opt-056',
                name: 'Falafel',
                group: 'protein',
                unit_price: 200,
            },
            {
                id: 'opt-057',
                name: 'Extra Feta',
                group: 'extras',
                unit_price: 150,
            },
            {
                id: 'opt-058',
                name: 'Avocado',
                group: 'extras',
                unit_price: 200,
            },
        ],
    },
    {
        id: 'sal-002',
        name: 'Asian Fusion Salad',
        unit_price: 1350,
        category: 'salads',
        description: 'Crisp vegetables with sesame dressing and edamame',
        dietary: ['vegetarian', 'vegan', 'dairy-free'],
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300',
        options: [
            {
                id: 'opt-059',
                name: 'Teriyaki Chicken',
                group: 'protein',
                unit_price: 300,
            },
            { id: 'opt-060', name: 'Tofu', group: 'protein', unit_price: 150 },
            { id: 'opt-061', name: 'Crispy Noodles', group: 'toppings' },
            { id: 'opt-062', name: 'Sesame Seeds', group: 'toppings' },
        ],
    },

    // Sandwiches & Wraps
    {
        id: 'snd-001',
        name: 'Gourmet Sandwich Selection',
        unit_price: 1250,
        category: 'sandwiches',
        description: 'Premium sandwiches on artisan breads',
        dietary: [],
        image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300',
        options: [
            { id: 'opt-063', name: 'Turkey & Avocado', group: 'filling' },
            { id: 'opt-064', name: 'Ham & Swiss', group: 'filling' },
            {
                id: 'opt-065',
                name: 'Roast Beef & Horseradish',
                group: 'filling',
            },
            { id: 'opt-066', name: 'Caprese', group: 'filling' },
            { id: 'opt-067', name: 'Sourdough', group: 'bread' },
            { id: 'opt-068', name: 'Multigrain', group: 'bread' },
            { id: 'opt-069', name: 'Ciabatta', group: 'bread' },
        ],
    },
    {
        id: 'snd-002',
        name: 'Fresh Wrap Station',
        unit_price: 1150,
        category: 'sandwiches',
        description: 'Build-your-own wraps with fresh ingredients',
        dietary: ['vegetarian'],
        image: 'https://images.unsplash.com/photo-1565299585323-38174d4d6174?w=300',
        options: [
            { id: 'opt-070', name: 'Grilled Chicken', group: 'protein' },
            { id: 'opt-071', name: 'Tuna Salad', group: 'protein' },
            { id: 'opt-072', name: 'Hummus & Veggie', group: 'protein' },
            { id: 'opt-073', name: 'Spinach Tortilla', group: 'wrap' },
            { id: 'opt-074', name: 'Whole Wheat', group: 'wrap' },
            { id: 'opt-075', name: 'Sun-dried Tomato', group: 'wrap' },
        ],
    },

    // Hot Meals
    {
        id: 'hot-001',
        name: 'Pasta Bar',
        unit_price: 1650,
        category: 'hot-meals',
        description: 'Fresh pasta with choice of sauces and toppings',
        dietary: ['vegetarian'],
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300',
        options: [
            { id: 'opt-076', name: 'Penne', group: 'pasta' },
            { id: 'opt-077', name: 'Fettuccine', group: 'pasta' },
            { id: 'opt-078', name: 'Spaghetti', group: 'pasta' },
            { id: 'opt-079', name: 'Marinara', group: 'sauce' },
            { id: 'opt-080', name: 'Alfredo', group: 'sauce' },
            { id: 'opt-081', name: 'Pesto', group: 'sauce' },
            {
                id: 'opt-082',
                name: 'Grilled Chicken',
                group: 'protein',
                unit_price: 300,
            },
            {
                id: 'opt-083',
                name: 'Italian Sausage',
                group: 'protein',
                unit_price: 350,
            },
        ],
    },
    {
        id: 'hot-002',
        name: 'Asian Noodle Station',
        unit_price: 1550,
        category: 'hot-meals',
        description: 'Wok-fried noodles with fresh vegetables',
        dietary: ['dairy-free'],
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300',
        options: [
            { id: 'opt-084', name: 'Pad Thai', group: 'dish' },
            { id: 'opt-085', name: 'Singapore Noodles', group: 'dish' },
            { id: 'opt-086', name: 'Beef Black Bean', group: 'dish' },
            { id: 'opt-087', name: 'Vegetable Stir Fry', group: 'dish' },
            {
                id: 'opt-088',
                name: 'Extra Prawns',
                group: 'protein',
                unit_price: 400,
            },
            { id: 'opt-089', name: 'Tofu', group: 'protein', unit_price: 150 },
        ],
    },

    // Appetizers
    {
        id: 'app-001',
        name: 'Charcuterie & Cheese Board',
        unit_price: 2200,
        category: 'appetizers',
        description: 'Curated selection of meats, cheeses, and accompaniments',
        dietary: [],
        image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300',
        options: [
            { id: 'opt-090', name: 'Small (6-8 people)', group: 'size' },
            {
                id: 'opt-091',
                name: 'Medium (10-12 people)',
                group: 'size',
                unit_price: 800,
            },
            {
                id: 'opt-092',
                name: 'Large (15-20 people)',
                group: 'size',
                unit_price: 1600,
            },
            {
                id: 'opt-093',
                name: 'Premium Selection',
                group: 'upgrade',
                unit_price: 500,
            },
        ],
    },
    {
        id: 'app-002',
        name: 'Fresh Spring Rolls',
        unit_price: 950,
        category: 'appetizers',
        description: 'Vietnamese-style fresh rolls with dipping sauce',
        dietary: ['dairy-free', 'nut-free'],
        image: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=300',
        options: [
            { id: 'opt-094', name: 'Prawn & Avocado', group: 'filling' },
            { id: 'opt-095', name: 'Chicken & Herbs', group: 'filling' },
            { id: 'opt-096', name: 'Tofu & Vegetables', group: 'filling' },
            { id: 'opt-097', name: 'Peanut Sauce', group: 'sauce' },
            { id: 'opt-098', name: 'Sweet Chili', group: 'sauce' },
        ],
    },

    // Desserts
    {
        id: 'des-001',
        name: 'Artisan Dessert Platter',
        unit_price: 1450,
        category: 'desserts',
        description: 'Selection of petit fours, macarons, and mini tarts',
        dietary: ['vegetarian'],
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300',
        options: [
            { id: 'opt-099', name: 'Mixed Selection', group: 'type' },
            { id: 'opt-100', name: 'Chocolate Focus', group: 'type' },
            { id: 'opt-101', name: 'Fruit Focus', group: 'type' },
            {
                id: 'opt-102',
                name: 'Gluten-Free Options',
                group: 'dietary',
                unit_price: 200,
            },
        ],
    },
    {
        id: 'des-002',
        name: 'Fresh Fruit Display',
        unit_price: 850,
        category: 'desserts',
        description: 'Seasonal fresh fruit beautifully presented',
        dietary: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300',
        options: [
            { id: 'opt-103', name: 'Regular Display', group: 'size' },
            {
                id: 'opt-104',
                name: 'Premium Exotic Fruits',
                group: 'upgrade',
                unit_price: 300,
            },
            {
                id: 'opt-105',
                name: 'Chocolate Dip',
                group: 'extras',
                unit_price: 200,
            },
        ],
    },

    // Platters
    {
        id: 'plt-001',
        name: 'Executive Lunch Platter',
        unit_price: 2850,
        category: 'platters',
        description: 'Complete lunch solution for meetings and events',
        dietary: [],
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300',
        options: [
            { id: 'opt-106', name: 'Serves 8-10', group: 'size' },
            {
                id: 'opt-107',
                name: 'Serves 12-15',
                group: 'size',
                unit_price: 1000,
            },
            {
                id: 'opt-108',
                name: 'Serves 18-20',
                group: 'size',
                unit_price: 2000,
            },
            { id: 'opt-109', name: 'Vegetarian Option', group: 'dietary' },
            {
                id: 'opt-110',
                name: 'Gluten-Free Option',
                group: 'dietary',
                unit_price: 200,
            },
        ],
    },

    // Snacks
    {
        id: 'snk-001',
        name: 'Healthy Snack Mix',
        unit_price: 650,
        category: 'snacks',
        description: 'Mix of nuts, dried fruits, and seeds',
        dietary: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
        image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300',
        options: [
            { id: 'opt-111', name: 'Regular Mix', group: 'type' },
            { id: 'opt-112', name: 'Tropical Mix', group: 'type' },
            {
                id: 'opt-113',
                name: 'Protein Mix',
                group: 'type',
                unit_price: 100,
            },
        ],
    },
];

/** Caterers of the mock orders */
const CATERERS = [
    'Gourmet Events Catering',
    'Fresh & Local Kitchen',
    'Premium Dining Solutions',
];

/** Charge codes that match the `catering-settings` zone metadata */
const CHARGE_CODES = ['CC-1001', 'CC-1002', 'CC-1003', 'CC-2001', 'CC-2002'];

const ORDER_NOTES = [
    '',
    '',
    'Please include serving utensils',
    'Set up 15 minutes before the meeting starts',
    'Two guests are vegetarian',
    'Leave at reception if the room is locked',
];

/**
 * Random integer generator seeded from a string (FNV-1a hash into
 * mulberry32). An event gets the same orders on each load, and the shared
 * `predictableRandomInt` sequence that other mock data uses does not change.
 */
function seededRandomInt(seed: string) {
    let state = 2166136261;
    for (let i = 0; i < seed.length; i++) {
        state = Math.imul(state ^ seed.charCodeAt(i), 16777619);
    }
    return (ceil: number, floor = 0) => {
        state = (state + 0x6d2b79f5) | 0;
        let t = Math.imul(state ^ (state >>> 15), 1 | state);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        const ratio = ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        return Math.floor(ratio * (ceil - floor)) + floor;
    };
}

/** Order status that a kitchen would show at this time for a delivery */
function statusAt(
    deliver_at: number,
    rand: (ceil: number) => number,
): CateringOrderStatus {
    if (rand(12) === 0) return 'cancelled';
    const minutes = differenceInMinutes(deliver_at, Date.now());
    if (minutes < -30) return 'delivered';
    if (minutes < 0) return rand(3) ? 'delivered' : 'ready';
    if (minutes < 60) return rand(2) ? 'preparing' : 'ready';
    if (minutes < 24 * 60) return rand(3) ? 'accepted' : 'pending';
    return rand(2) ? 'accepted' : 'pending';
}

/**
 * Catering orders for `extension_data.catering` of a mock calendar event,
 * in the JSON form that `CateringOrder` reads. About a quarter of the events
 * that are not cancelled get one order. Some of these get a second order from
 * a different caterer.
 */
export function mockEventCatering(event: HashMap) {
    const rand = seededRandomInt(`${event.id}`);
    if (event.status === 'cancelled' || rand(4) !== 0) return [];
    const guests = Math.max(1, event.attendees?.length || 1);
    const order_count = rand(4) === 0 ? 2 : 1;
    const first_caterer = rand(CATERERS.length);
    return Array.from({ length: order_count }, (_, index) => {
        const caterer = CATERERS[(first_caterer + index) % CATERERS.length];
        // Minutes from the event start. Must be before the event end, or the
        // event does not list the order.
        const deliver_offset = [-15, 0, 0, 30][rand(4)];
        const item_count = rand(4, 1);
        const first_item = rand(MOCK_MENU.length);
        const items = Array.from({ length: item_count }, (_, i) => {
            const item = MOCK_MENU[(first_item + i * 7) % MOCK_MENU.length];
            const groups = [...new Set(item.options.map((o) => o.group))];
            const chosen = new Set(
                groups
                    .filter(() => rand(2) === 0)
                    .map((group) => {
                        const list = item.options.filter(
                            (o) => o.group === group,
                        );
                        return list[rand(list.length)].id;
                    }),
            );
            return {
                id: item.id,
                name: item.name,
                category: item.category,
                description: item.description,
                unit_price: item.unit_price,
                images: [item.image],
                tags: item.dietary,
                caterer,
                in_order: true,
                quantity:
                    item.category === 'beverages'
                        ? guests
                        : Math.ceil(guests / 4),
                options: item.options.map((o) => ({
                    ...o,
                    active: chosen.has(o.id),
                })),
            };
        });
        return {
            id: `order-${event.id}-${index}`,
            event_id: event.id,
            system_id: event.system?.id || '',
            caterer,
            items,
            deliver_offset,
            status: statusAt(
                (event.event_start + deliver_offset * 60) * 1000,
                rand,
            ),
            charge_code: CHARGE_CODES[rand(CHARGE_CODES.length)],
            invoice_number: rand(3) === 0 ? `INV-${rand(99999, 10000)}` : '',
            notes: ORDER_NOTES[rand(ORDER_NOTES.length)],
        };
    });
}
