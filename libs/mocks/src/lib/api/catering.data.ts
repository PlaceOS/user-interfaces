import { HashMap, predictableRandomInt } from '@placeos/common';
import { differenceInMinutes } from 'date-fns';

export const DIETARY_RESTRICTIONS = [
    { id: 'vegetarian', name: 'Vegetarian', icon: '🌱' },
    { id: 'vegan', name: 'Vegan', icon: '🌿' },
    { id: 'gluten-free', name: 'Gluten Free', icon: '🌾' },
    { id: 'dairy-free', name: 'Dairy Free', icon: '🥛' },
    { id: 'nut-free', name: 'Nut Free', icon: '🥜' },
    { id: 'halal', name: 'Halal', icon: '☪️' },
    { id: 'kosher', name: 'Kosher', icon: '✡️' },
    { id: 'low-carb', name: 'Low Carb', icon: '🥗' },
    { id: 'keto', name: 'Ketogenic', icon: '🥑' },
    { id: 'paleo', name: 'Paleo', icon: '🥩' },
];

export const CATERING_CATEGORIES = [
    { id: 'beverages', name: 'Beverages', order: 1 },
    { id: 'breakfast', name: 'Breakfast', order: 2 },
    { id: 'pastries', name: 'Pastries & Baked Goods', order: 3 },
    { id: 'salads', name: 'Salads', order: 4 },
    { id: 'sandwiches', name: 'Sandwiches & Wraps', order: 5 },
    { id: 'hot-meals', name: 'Hot Meals', order: 6 },
    { id: 'appetizers', name: 'Appetizers', order: 7 },
    { id: 'desserts', name: 'Desserts', order: 8 },
    { id: 'platters', name: 'Platters & Sharing', order: 9 },
    { id: 'snacks', name: 'Snacks', order: 10 },
];

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

export const CATERING_PACKAGES = [
    {
        id: 'pkg-001',
        name: 'Morning Meeting Package',
        description: 'Perfect for early morning meetings and briefings',
        price: 2200,
        serves: '8-12 people',
        duration: '2-3 hours',
        items: ['bev-001', 'bev-002', 'brf-001', 'snk-001'],
        dietary_options: ['vegetarian', 'gluten-free'],
    },
    {
        id: 'pkg-002',
        name: 'Executive Lunch Package',
        description: 'Premium lunch solution for important meetings',
        price: 4500,
        serves: '8-12 people',
        duration: '2-4 hours',
        items: ['bev-001', 'sal-001', 'snd-001', 'app-001', 'des-001'],
        dietary_options: ['vegetarian', 'gluten-free'],
    },
    {
        id: 'pkg-003',
        name: 'All-Day Conference Package',
        description: 'Complete catering for full-day events',
        price: 7500,
        serves: '15-20 people',
        duration: '8 hours',
        items: [
            'bev-001',
            'bev-002',
            'brf-002',
            'sal-002',
            'hot-001',
            'app-002',
            'des-002',
        ],
        dietary_options: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    },
    {
        id: 'pkg-004',
        name: 'Networking Reception Package',
        description: 'Elegant finger foods and drinks for networking events',
        price: 3800,
        serves: '20-30 people',
        duration: '3-4 hours',
        items: ['bev-003', 'app-001', 'app-002', 'des-001'],
        dietary_options: ['vegetarian', 'dairy-free'],
    },
    {
        id: 'pkg-005',
        name: 'Training Workshop Package',
        description: 'Energizing meals for learning sessions',
        price: 3200,
        serves: '12-16 people',
        duration: '6 hours',
        items: ['bev-001', 'brf-002', 'snd-002', 'snk-001'],
        dietary_options: ['vegetarian', 'vegan', 'gluten-free'],
    },
];

export const SERVICE_TYPES = [
    {
        id: 'buffet',
        name: 'Buffet Service',
        description: 'Self-service buffet setup',
        setup_time: 30,
        breakdown_time: 30,
        staff_required: 1,
        price_modifier: 1.0,
    },
    {
        id: 'plated',
        name: 'Plated Service',
        description: 'Individual plated meals served to guests',
        setup_time: 45,
        breakdown_time: 45,
        staff_required: 2,
        price_modifier: 1.3,
    },
    {
        id: 'station',
        name: 'Food Stations',
        description: 'Multiple themed food stations',
        setup_time: 60,
        breakdown_time: 45,
        staff_required: 2,
        price_modifier: 1.2,
    },
    {
        id: 'cocktail',
        name: 'Cocktail Style',
        description: 'Pass-around finger foods and canapés',
        setup_time: 30,
        breakdown_time: 30,
        staff_required: 3,
        price_modifier: 1.4,
    },
];

export const SUPPLIERS = [
    {
        id: 'sup-001',
        name: 'Gourmet Events Catering',
        rating: 4.8,
        specialty: 'Corporate Events',
        location: 'Sydney',
        min_order: 1000,
        delivery_fee: 150,
        setup_fee: 200,
    },
    {
        id: 'sup-002',
        name: 'Fresh & Local Kitchen',
        rating: 4.6,
        specialty: 'Healthy Options',
        location: 'Melbourne',
        min_order: 800,
        delivery_fee: 120,
        setup_fee: 150,
    },
    {
        id: 'sup-003',
        name: 'Premium Dining Solutions',
        rating: 4.9,
        specialty: 'Executive Catering',
        location: 'Brisbane',
        min_order: 1500,
        delivery_fee: 200,
        setup_fee: 300,
    },
];

export function generateCateringOrder(event: HashMap) {
    const duration = Math.abs(
        differenceInMinutes(event.event_end * 1000, event.event_start * 1000),
    );
    const attendeeCount =
        event.attendees?.length || predictableRandomInt(15, 5);

    // Select package or individual items based on event size and duration
    let selectedItems = [];
    let orderType = 'individual';
    let totalPrice = 0;

    if (attendeeCount >= 8 && duration >= 120) {
        // Use package for larger, longer events
        const suitablePackages = CATERING_PACKAGES.filter((pkg) => {
            const serves = parseInt(pkg.serves.split('-')[0]);
            const maxServes = parseInt(pkg.serves.split('-')[1]) || serves + 5;
            return attendeeCount >= serves && attendeeCount <= maxServes + 5;
        });

        if (suitablePackages.length > 0) {
            const selectedPackage =
                suitablePackages[predictableRandomInt(suitablePackages.length)];
            orderType = 'package';
            totalPrice = selectedPackage.price;
            selectedItems = selectedPackage.items
                .map((itemId) => {
                    const item = MOCK_MENU.find((m) => m.id === itemId);
                    return {
                        ...item,
                        quantity: Math.ceil(attendeeCount / 8),
                        package_item: true,
                        options: [],
                    };
                })
                .filter(Boolean);
        }
    }

    if (selectedItems.length === 0) {
        // Individual item selection
        const itemCount = Math.min(
            predictableRandomInt(5, 2),
            Math.ceil(duration / 60),
        );
        const selectedItemIds = new Set();

        while (
            selectedItems.length < itemCount &&
            selectedItemIds.size < MOCK_MENU.length
        ) {
            const item = MOCK_MENU[predictableRandomInt(MOCK_MENU.length)];
            if (!selectedItemIds.has(item.id)) {
                selectedItemIds.add(item.id);
                const quantity = Math.max(1, Math.ceil(attendeeCount / 8));
                const itemPrice = item.unit_price * quantity;
                totalPrice += itemPrice;

                selectedItems.push({
                    ...item,
                    quantity,
                    package_item: false,
                    options:
                        item.options?.slice(0, predictableRandomInt(3)) || [],
                });
            }
        }
    }

    // Select service type
    const serviceType =
        SERVICE_TYPES[predictableRandomInt(SERVICE_TYPES.length)];
    const serviceModifier = serviceType.price_modifier;
    totalPrice *= serviceModifier;

    // Add delivery and setup fees
    const supplier = SUPPLIERS[predictableRandomInt(SUPPLIERS.length)];
    const deliveryFee = supplier.delivery_fee;
    const setupFee = supplier.setup_fee;
    totalPrice += deliveryFee + setupFee;

    // Determine delivery time (30-60 minutes before event start)
    const deliveryOffset = predictableRandomInt(30, 30); // 30-60 minutes
    const deliverAt = new Date(
        event.event_start * 1000 - deliveryOffset * 60 * 1000,
    );

    // Generate dietary requirements
    const dietaryNeeds = DIETARY_RESTRICTIONS.filter(
        () => predictableRandomInt(8) === 0,
    ); // 12.5% chance each

    return {
        id: `order-${String(predictableRandomInt(999999, 100000))}`,
        event_id: event.id,
        invoice_number: `INV-${new Date().getFullYear()}-${String(predictableRandomInt(99999, 10000))}`,
        charge_code: `CC-${String(predictableRandomInt(9999, 1000))}`,
        order_type: orderType,
        status: ['pending', 'confirmed', 'preparing', 'delivered'][
            predictableRandomInt(4)
        ],

        // Timing
        order_date: new Date(
            Date.now() - predictableRandomInt(7) * 24 * 60 * 60 * 1000,
        ).toISOString(),
        deliver_at: deliverAt.toISOString(),
        setup_time: serviceType.setup_time,
        breakdown_time: serviceType.breakdown_time,

        // Service details
        service_type: serviceType,
        supplier: supplier,
        guest_count: attendeeCount,

        // Items and pricing
        items: selectedItems,
        subtotal: Math.floor(totalPrice - deliveryFee - setupFee),
        delivery_fee: deliveryFee,
        setup_fee: setupFee,
        tax: Math.floor(totalPrice * 0.1), // 10% tax
        total: Math.floor(totalPrice * 1.1),

        // Special requirements
        dietary_requirements: dietaryNeeds.map((d) => d.name),
        special_instructions:
            predictableRandomInt(3) === 0
                ? [
                      'Please use company branded napkins',
                      'Set up 15 minutes before event start',
                      'Vegetarian options on separate table',
                      'Please include serving utensils',
                      'No pork products',
                      'Nut-free preparation required',
                  ][predictableRandomInt(6)]
                : '',

        // Contact and delivery
        delivery_contact: event.attendees?.[0]?.name || 'Event Organizer',
        delivery_phone: event.attendees?.[0]?.phone || '+61 2 9876 5432',
        delivery_location: `Meeting Room - ${event.location || 'TBC'}`,
        access_instructions: 'Reception will direct to meeting room',

        // Billing
        department: event.extension_data?.department || 'General',
        cost_center: event.extension_data?.cost_center || 'events',
        project_code: event.extension_data?.project_code || null,

        // Metadata
        notes: [
            'Standard corporate catering order',
            'Client meeting refreshments',
            'Team celebration catering',
            'Training session meals',
            'Board meeting premium service',
        ][predictableRandomInt(5)],
        created_by: event.attendees?.[0]?.email || 'system@place.tech',
        last_modified: new Date().toISOString(),

        // Feedback and ratings (for completed orders)
        ...(predictableRandomInt(4) === 0 && {
            rating: predictableRandomInt(5, 3) + 1, // 4-5 stars
            feedback: [
                'Excellent food quality and presentation',
                'Delivered on time, great service',
                'Fresh ingredients, everyone loved it',
                'Professional setup and cleanup',
                'Good variety, accommodated dietary needs',
            ][predictableRandomInt(5)],
            would_recommend: true,
        }),
    };
}
