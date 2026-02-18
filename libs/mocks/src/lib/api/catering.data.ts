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
    { id: 'breakfast', name: 'Breakfast', order: 1 },
    { id: 'brunch', name: 'Brunch', order: 2 },
    { id: 'lunch', name: 'Lunch', order: 3 },
    { id: 'dinner', name: 'Dinner', order: 4 },
    { id: 'breaks', name: 'Breaks & Snacks', order: 5 },
    { id: 'reception', name: "Reception & Hors d'oeuvres", order: 6 },
    { id: 'beverages', name: 'Beverages', order: 7 },
    { id: 'bakery', name: 'Bakery & Pastries', order: 8 },
    { id: 'gameday', name: 'Gameday Menus', order: 9 },
    { id: 'setup', name: 'Setup & Furniture Rental', order: 10 },
    { id: 'av_rental', name: 'AV Equipment Rental', order: 11 },
    { id: 'av_staffing', name: 'AV Staffing', order: 12 },
    { id: 'service_charges', name: 'Service Charges', order: 13 },
];

// ══════════════════════════════════════════════════════════════════════
// UCLA Catering Menu — prices in CENTS (unit_price)
// Source: UCLA Conferences & Catering — Salesforce Property Menus & Items
// ══════════════════════════════════════════════════════════════════════
export const MOCK_MENU = [
    // ── Breakfast ────────────────────────────────────────────────────
    {
        id: 'classic_continental',
        name: 'Classic Continental Breakfast',
        unit_price: 1300,
        category: 'breakfast',
        description: 'Continental breakfast — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'deluxe_continental',
        name: 'Deluxe Continental Breakfast',
        unit_price: 1600,
        category: 'breakfast',
        description: 'Deluxe continental breakfast — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'premium_continental',
        name: 'Premium Continental Breakfast',
        unit_price: 1700,
        category: 'breakfast',
        description: 'Premium continental breakfast — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'american_breakfast',
        name: 'American Breakfast Buffet',
        unit_price: 2800,
        category: 'breakfast',
        description: 'Full American breakfast buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'breakfast_burrito',
        name: 'Breakfast Burrito Buffet',
        unit_price: 2800,
        category: 'breakfast',
        description: 'Breakfast burrito buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'bruin_fitness',
        name: 'Bruin Fitness Breakfast Buffet',
        unit_price: 3000,
        category: 'breakfast',
        description: 'Healthy fitness breakfast buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'italy_breakfast',
        name: 'Italy Breakfast Buffet',
        unit_price: 2600,
        category: 'breakfast',
        description: 'Italian-style breakfast buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'omelettes',
        name: 'Omelettes & Things Buffet',
        unit_price: 3200,
        category: 'breakfast',
        description: 'Omelette station buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'ee_breakfast',
        name: 'EE Breakfast Buffet (A-F)',
        unit_price: 3000,
        category: 'breakfast',
        description: 'Executive Education breakfast buffet — per person',
        tags: ['per_person', 'conference'],
        options: [
            { id: 'ee_bf_a', name: 'Menu A', group: 'menu' },
            { id: 'ee_bf_b', name: 'Menu B', group: 'menu' },
            { id: 'ee_bf_c', name: 'Menu C', group: 'menu' },
            { id: 'ee_bf_d', name: 'Menu D', group: 'menu' },
            { id: 'ee_bf_e', name: 'Menu E', group: 'menu' },
            { id: 'ee_bf_f', name: 'Menu F', group: 'menu' },
        ],
    },

    // ── Brunch ───────────────────────────────────────────────────────
    {
        id: 'bruin_brunch',
        name: 'Bruin Brunch Buffet',
        unit_price: 4300,
        category: 'brunch',
        description: 'Full Bruin brunch buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'brunch_everyday',
        name: 'Brunch Everyday Buffet',
        unit_price: 4000,
        category: 'brunch',
        description: 'Everyday brunch buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'dessert_coffee',
        name: 'Dessert & Coffee',
        unit_price: 1800,
        category: 'brunch',
        description: 'Dessert and coffee service — per person',
        tags: ['per_person'],
        options: [],
    },

    // ── Lunch ────────────────────────────────────────────────────────
    {
        id: 'abbondanza_pasta',
        name: 'Abbondanza Pasta',
        unit_price: 1800,
        category: 'lunch',
        description: 'Pasta buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'soup_salad_sandwich',
        name: 'Soup, Salad & Sandwich Buffet',
        unit_price: 4500,
        category: 'lunch',
        description: 'Soup, salad and sandwich combination — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'market_salad',
        name: 'Market Salad Bar',
        unit_price: 1800,
        category: 'lunch',
        description: 'Fresh market salad bar — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'sliders',
        name: 'Sliders',
        unit_price: 2200,
        category: 'lunch',
        description: 'Slider buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'street_tacos',
        name: 'Street Tacos',
        unit_price: 2200,
        category: 'lunch',
        description: 'Street taco station — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'pho_cart',
        name: 'Pho Cart',
        unit_price: 2000,
        category: 'lunch',
        description: 'Vietnamese pho cart — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'california_market_cold',
        name: 'California Market Buffet (Cold)',
        unit_price: 5400,
        category: 'lunch',
        description: 'Cold California market buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'california_market_hot',
        name: 'California Market Buffet (Hot)',
        unit_price: 5400,
        category: 'lunch',
        description: 'Hot California market buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'festivity',
        name: 'Festivity Buffet',
        unit_price: 5900,
        category: 'lunch',
        description: 'Festivity celebration buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'holiday',
        name: 'Holiday Buffet',
        unit_price: 5700,
        category: 'lunch',
        description: 'Holiday themed buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'albacore_tuna_salad',
        name: 'Albacore Tuna Salad',
        unit_price: 3800,
        category: 'lunch',
        description: 'Albacore tuna salad — per bowl',
        tags: ['per_bowl'],
        options: [],
    },
    {
        id: 'albacore_tuna_sandwich',
        name: 'Albacore Tuna Sandwich',
        unit_price: 2000,
        category: 'lunch',
        description: 'Albacore tuna sandwich — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'ee_lunch',
        name: 'EE Lunch Buffet (A-F)',
        unit_price: 4500,
        category: 'lunch',
        description: 'Executive Education lunch buffet — per person',
        tags: ['per_person', 'conference'],
        options: [
            { id: 'ee_ln_a', name: 'Menu A', group: 'menu' },
            { id: 'ee_ln_b', name: 'Menu B', group: 'menu' },
            { id: 'ee_ln_c', name: 'Menu C', group: 'menu' },
            { id: 'ee_ln_d', name: 'Menu D', group: 'menu' },
            { id: 'ee_ln_e', name: 'Menu E', group: 'menu' },
            { id: 'ee_ln_f', name: 'Menu F', group: 'menu' },
        ],
    },

    // ── Dinner ───────────────────────────────────────────────────────
    {
        id: 'across_asia',
        name: 'Across Asia Buffet',
        unit_price: 5000,
        category: 'dinner',
        description: 'Pan-Asian dinner buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'backyard_grillin',
        name: "Backyard Grillin' Buffet",
        unit_price: 4000,
        category: 'dinner',
        description: 'Backyard grill dinner buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'celebration',
        name: 'Celebration Buffet',
        unit_price: 5500,
        category: 'dinner',
        description: 'Celebration dinner buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'italian_fare',
        name: 'The Italian Fare Buffet',
        unit_price: 5000,
        category: 'dinner',
        description: 'Italian fare dinner buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'latin_america',
        name: 'Latin America Buffet',
        unit_price: 5400,
        category: 'dinner',
        description: 'Latin American dinner buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'mediterranean_hot',
        name: 'Mediterranean Buffet (Hot)',
        unit_price: 5000,
        category: 'dinner',
        description: 'Hot Mediterranean dinner buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'mediterranean_room_temp',
        name: 'Mediterranean Buffet (Room Temp)',
        unit_price: 5000,
        category: 'dinner',
        description: 'Room temperature Mediterranean buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'national_barbecue',
        name: 'National Barbecue Buffet',
        unit_price: 5000,
        category: 'dinner',
        description: 'National barbecue dinner buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'true_bruin',
        name: 'True Bruin Buffet',
        unit_price: 4000,
        category: 'dinner',
        description: 'True Bruin dinner buffet — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'ee_dinner',
        name: 'EE Dinner Buffet (A-F)',
        unit_price: 5000,
        category: 'dinner',
        description: 'Executive Education dinner buffet — per person',
        tags: ['per_person', 'conference'],
        options: [
            { id: 'ee_dn_a', name: 'Menu A', group: 'menu' },
            { id: 'ee_dn_b', name: 'Menu B', group: 'menu' },
            { id: 'ee_dn_c', name: 'Menu C', group: 'menu' },
            { id: 'ee_dn_d', name: 'Menu D', group: 'menu' },
            { id: 'ee_dn_e', name: 'Menu E', group: 'menu' },
            { id: 'ee_dn_f', name: 'Menu F', group: 'menu' },
        ],
    },

    // ── Breaks & Snacks ─────────────────────────────────────────────
    {
        id: 'beverage_package',
        name: 'Beverage Package',
        unit_price: 1200,
        category: 'breaks',
        description: 'Coffee, tea & refreshments — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'cookies_treats',
        name: "Cookies N'Treats",
        unit_price: 1400,
        category: 'breaks',
        description: 'Assorted cookies and treats — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'grazing',
        name: 'Grazing',
        unit_price: 2000,
        category: 'breaks',
        description: 'Grazing platter — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'la_fiesta',
        name: 'La Fiesta',
        unit_price: 1700,
        category: 'breaks',
        description: 'La Fiesta snack break — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'revitalize',
        name: 'Revitalize',
        unit_price: 1500,
        category: 'breaks',
        description: 'Revitalize healthy break — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'moroccan_sun',
        name: 'Under the Moroccan Sun',
        unit_price: 1600,
        category: 'breaks',
        description: 'Moroccan-themed snack break — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'zen',
        name: 'Zen',
        unit_price: 1600,
        category: 'breaks',
        description: 'Zen wellness break — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'sundae_bar',
        name: 'Sundae Bar',
        unit_price: 2200,
        category: 'breaks',
        description: 'Ice cream sundae bar — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'ee_am_break',
        name: 'EE AM Break w/Coffee (A-F)',
        unit_price: 1850,
        category: 'breaks',
        description: 'Morning break with coffee — per person',
        tags: ['per_person', 'conference'],
        options: [
            { id: 'ee_am_a', name: 'Menu A', group: 'menu' },
            { id: 'ee_am_b', name: 'Menu B', group: 'menu' },
            { id: 'ee_am_c', name: 'Menu C', group: 'menu' },
            { id: 'ee_am_d', name: 'Menu D', group: 'menu' },
            { id: 'ee_am_e', name: 'Menu E', group: 'menu' },
            { id: 'ee_am_f', name: 'Menu F', group: 'menu' },
        ],
    },
    {
        id: 'ee_am_continental',
        name: 'EE AM Break w/Continental & Coffee (A-F)',
        unit_price: 2550,
        category: 'breaks',
        description: 'Morning break with continental and coffee — per person',
        tags: ['per_person', 'conference'],
        options: [
            { id: 'ee_amc_a', name: 'Menu A', group: 'menu' },
            { id: 'ee_amc_b', name: 'Menu B', group: 'menu' },
            { id: 'ee_amc_c', name: 'Menu C', group: 'menu' },
            { id: 'ee_amc_d', name: 'Menu D', group: 'menu' },
            { id: 'ee_amc_e', name: 'Menu E', group: 'menu' },
            { id: 'ee_amc_f', name: 'Menu F', group: 'menu' },
        ],
    },
    {
        id: 'ee_pm_break',
        name: 'EE PM Break w/Coffee (A-F)',
        unit_price: 2100,
        category: 'breaks',
        description: 'Afternoon break with coffee — per person',
        tags: ['per_person', 'conference'],
        options: [
            { id: 'ee_pm_a', name: 'Menu A', group: 'menu' },
            { id: 'ee_pm_b', name: 'Menu B', group: 'menu' },
            { id: 'ee_pm_c', name: 'Menu C', group: 'menu' },
            { id: 'ee_pm_d', name: 'Menu D', group: 'menu' },
            { id: 'ee_pm_e', name: 'Menu E', group: 'menu' },
            { id: 'ee_pm_f', name: 'Menu F', group: 'menu' },
        ],
    },

    // ── Reception & Hors d'oeuvres ──────────────────────────────────
    {
        id: 'artisan_cheese_pp',
        name: 'Artisan Cheese Platter',
        unit_price: 1400,
        category: 'reception',
        description: 'Artisan cheese platter — per person',
        tags: ['per_person'],
        options: [],
    },
    {
        id: 'artisan_cheese_sm',
        name: 'Artisan Cheese Platter (Small)',
        unit_price: 9500,
        category: 'reception',
        description: 'Small artisan cheese platter — per platter',
        tags: ['per_platter'],
        options: [],
    },
    {
        id: 'artisan_cheese_lg',
        name: 'Artisan Cheese Platter (Large)',
        unit_price: 15000,
        category: 'reception',
        description: 'Large artisan cheese platter — per platter',
        tags: ['per_platter'],
        options: [],
    },
    {
        id: 'american_caviar',
        name: 'American Caviar, Roasted Potato, Creme Fraiche',
        unit_price: 500,
        category: 'reception',
        description: "Hors d'oeuvre — each",
        tags: ['each'],
        options: [],
    },
    {
        id: 'artisan_cheese_tart',
        name: 'Artisan Cheese Tart, Roasted Fruit, Thyme',
        unit_price: 350,
        category: 'reception',
        description: "Hors d'oeuvre — each",
        tags: ['each'],
        options: [],
    },
    {
        id: 'asian_pork_meatballs',
        name: 'Asian Pork Meatballs, Five Spice, Ginger Honey',
        unit_price: 400,
        category: 'reception',
        description: "Hors d'oeuvre — each",
        tags: ['each'],
        options: [],
    },
    {
        id: 'portobella_sopes',
        name: 'Achiote-Marinated Portobella Sopes',
        unit_price: 4300,
        category: 'reception',
        description: "Hors d'oeuvre — per person",
        tags: ['per_person'],
        options: [],
    },

    // ── Beverages ───────────────────────────────────────────────────
    {
        id: 'apple_juice',
        name: 'Apple Juice',
        unit_price: 3200,
        category: 'beverages',
        description: 'Apple juice — per gallon',
        tags: ['per_gallon'],
        options: [],
    },
    {
        id: 'arnold_palmer',
        name: 'Arnold Palmer',
        unit_price: 3200,
        category: 'beverages',
        description: 'Arnold Palmer — per gallon',
        tags: ['per_gallon'],
        options: [],
    },
    {
        id: 'almond_milk',
        name: 'Almond Milk',
        unit_price: 1200,
        category: 'beverages',
        description: 'Almond milk — per quart',
        tags: ['per_quart'],
        options: [],
    },
    {
        id: 'canned_juices',
        name: 'Assorted Canned Fruit Juices & V8',
        unit_price: 250,
        category: 'beverages',
        description: 'Canned juices — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'soft_drinks_bar',
        name: 'Assorted Soft Drinks (Bar)',
        unit_price: 700,
        category: 'beverages',
        description: 'Soft drinks for bar service — each',
        tags: ['each'],
        options: [],
    },

    // ── Bakery & Pastries ───────────────────────────────────────────
    {
        id: 'almond_croissants',
        name: 'Almond Croissants',
        unit_price: 3300,
        category: 'bakery',
        description: 'Almond croissants — per dozen',
        tags: ['per_dozen'],
        options: [],
    },
    {
        id: 'artisan_bagels_classic',
        name: 'Artisan Bagels (Classic Flavors)',
        unit_price: 2800,
        category: 'bakery',
        description: 'Classic flavor bagels — per dozen',
        tags: ['per_dozen'],
        options: [],
    },
    {
        id: 'artisan_bagels_specialty',
        name: 'Artisan Bagels (Specialty Flavors)',
        unit_price: 2800,
        category: 'bakery',
        description: 'Specialty flavor bagels — per dozen',
        tags: ['per_dozen'],
        options: [],
    },
    {
        id: 'ucla_cookies',
        name: 'Fresh-Baked UCLA Bakery Cookies',
        unit_price: 2400,
        category: 'bakery',
        description: 'UCLA bakery cookies — per dozen',
        tags: ['per_dozen'],
        options: [],
    },
    {
        id: 'petit_fours',
        name: 'Assorted Petit Fours',
        unit_price: 3500,
        category: 'bakery',
        description: 'Assorted petit fours — per dozen',
        tags: ['per_dozen'],
        options: [],
    },
    {
        id: 'mini_desserts',
        name: 'Assorted Seasonal Mini Desserts',
        unit_price: 4500,
        category: 'bakery',
        description: 'Seasonal mini desserts — per dozen',
        tags: ['per_dozen'],
        options: [],
    },
    {
        id: 'chips_bags',
        name: 'Assorted Bags of Chips',
        unit_price: 175,
        category: 'bakery',
        description: 'Individual chip bags — per bag',
        tags: ['per_bag'],
        options: [],
    },
    {
        id: 'kettle_chips',
        name: 'Additional Kettle / Tortilla Chips',
        unit_price: 2000,
        category: 'bakery',
        description: 'Kettle or tortilla chips — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'asian_snack_mix',
        name: 'Asian Snack Mix',
        unit_price: 1800,
        category: 'bakery',
        description: 'Asian snack mix — each',
        tags: ['each'],
        options: [],
    },

    // ── Gameday Menus ───────────────────────────────────────────────
    {
        id: 'football_lunch',
        name: 'Prepackaged Football Menu — Lunch (A-U)',
        unit_price: 2000,
        category: 'gameday',
        description: 'Pre-packaged football game day lunch — per person',
        tags: ['per_person'],
        options: [
            { id: 'fb_ln_a', name: 'Menu A', group: 'menu' },
            { id: 'fb_ln_b', name: 'Menu B', group: 'menu' },
            { id: 'fb_ln_c', name: 'Menu C', group: 'menu' },
            { id: 'fb_ln_u', name: 'Menu U', group: 'menu' },
        ],
    },
    {
        id: 'football_dinner',
        name: 'Prepackaged Football Menu — Dinner (A-U)',
        unit_price: 3000,
        category: 'gameday',
        description: 'Pre-packaged football game day dinner — per person',
        tags: ['per_person'],
        options: [
            { id: 'fb_dn_a', name: 'Menu A', group: 'menu' },
            { id: 'fb_dn_b', name: 'Menu B', group: 'menu' },
            { id: 'fb_dn_c', name: 'Menu C', group: 'menu' },
            { id: 'fb_dn_u', name: 'Menu U', group: 'menu' },
        ],
    },

    // ── Setup & Furniture Rental ────────────────────────────────────
    {
        id: 'registration_table',
        name: '12-ft Registration Table + 4 Chairs + Wastebaskets',
        unit_price: 0,
        category: 'setup',
        description: 'Registration table package — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'bar_12ft',
        name: '12-ft Bar',
        unit_price: 0,
        category: 'setup',
        description: '12-foot bar — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'bar_6ft',
        name: '6-ft Front & Back Bar',
        unit_price: 0,
        category: 'setup',
        description: '6-foot front and back bar — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'buffet_6ft',
        name: "6' Buffet Table",
        unit_price: 0,
        category: 'setup',
        description: "6' buffet table — each",
        tags: ['each'],
        options: [],
    },
    {
        id: 'buffet_12ft',
        name: "12' Buffet Table",
        unit_price: 0,
        category: 'setup',
        description: "12' buffet table — each",
        tags: ['each'],
        options: [],
    },
    {
        id: 'buffet_18ft',
        name: "18' Buffet Table",
        unit_price: 0,
        category: 'setup',
        description: "18' buffet table — each",
        tags: ['each'],
        options: [],
    },
    {
        id: 'table_6ft',
        name: "6' Table",
        unit_price: 1500,
        category: 'setup',
        description: "6' table — each",
        tags: ['each'],
        options: [],
    },
    {
        id: 'table_8ft',
        name: "8' Table",
        unit_price: 2000,
        category: 'setup',
        description: "8' table — each",
        tags: ['each'],
        options: [],
    },
    {
        id: 'seminar_table',
        name: '6\'x18" Seminar (Classroom) Table',
        unit_price: 1000,
        category: 'setup',
        description: 'Seminar/classroom table — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'cocktail_standing',
        name: '30" Standing Cocktail Tables',
        unit_price: 1000,
        category: 'setup',
        description: 'Standing cocktail table — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'cocktail_seated',
        name: '36" Seated Cocktail Tables + 4 Chairs',
        unit_price: 1500,
        category: 'setup',
        description: 'Seated cocktail table with chairs — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'round_42',
        name: '42" Round Table',
        unit_price: 800,
        category: 'setup',
        description: '42" round table — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'round_60',
        name: '60" Round Table',
        unit_price: 1200,
        category: 'setup',
        description: '60" round table — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'round_66',
        name: '66" Round Table',
        unit_price: 1500,
        category: 'setup',
        description: '66" round table — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'round_72',
        name: '72" Round Table',
        unit_price: 2000,
        category: 'setup',
        description: '72" round table — each',
        tags: ['each'],
        options: [],
    },

    // ── AV Equipment Rental ─────────────────────────────────────────
    {
        id: 'av_basic_uc',
        name: 'Basic Meeting Room AV (University Club)',
        unit_price: 50000,
        category: 'av_rental',
        description: 'Basic AV package for University Club — per event',
        tags: ['per_event'],
        options: [],
    },
    {
        id: 'av_basic_projector',
        name: 'Basic AV — Built-In Projector',
        unit_price: 40000,
        category: 'av_rental',
        description: 'Basic AV with built-in projector — per event',
        tags: ['per_event'],
        options: [],
    },
    {
        id: 'av_basic_portable',
        name: 'Basic AV — Portable Projector (The Hill)',
        unit_price: 40000,
        category: 'av_rental',
        description: 'Portable projector package for The Hill — per event',
        tags: ['per_event'],
        options: [],
    },
    {
        id: 'av_projector_screen',
        name: 'Portable Projector + Screen (Lounges)',
        unit_price: 25000,
        category: 'av_rental',
        description: 'Portable projector and screen — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_hard_internet',
        name: 'Hard Wired Internet',
        unit_price: 15000,
        category: 'av_rental',
        description: 'Wired internet connection — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_podium',
        name: 'Acrylic Podium',
        unit_price: 15000,
        category: 'av_rental',
        description: 'Acrylic podium — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_flipchart_pad',
        name: 'Additional Pad for Flipchart',
        unit_price: 2000,
        category: 'av_rental',
        description: 'Flipchart pad — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_mixer_16ch',
        name: 'Audio Mixer (16-channel)',
        unit_price: 13000,
        category: 'av_rental',
        description: '16-channel audio mixer — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_mixer_4ch',
        name: 'Audio Mixer (4-channel)',
        unit_price: 6500,
        category: 'av_rental',
        description: '4-channel audio mixer — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_additional_mic',
        name: 'Additional Microphone',
        unit_price: 20000,
        category: 'av_rental',
        description: 'Additional microphone — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_assisted_listening',
        name: 'Assisted Listening Device',
        unit_price: 5000,
        category: 'av_rental',
        description: 'Assisted listening device — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_camera',
        name: 'Camera',
        unit_price: 30000,
        category: 'av_rental',
        description: 'Camera — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_speakerphone',
        name: 'Cisco Speakerphone',
        unit_price: 30000,
        category: 'av_rental',
        description: 'Cisco speakerphone — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_monitor_55',
        name: 'Confidence Monitor 55"',
        unit_price: 35000,
        category: 'av_rental',
        description: '55" confidence monitor — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_monitor_65',
        name: 'Confidence Monitor 65"',
        unit_price: 55000,
        category: 'av_rental',
        description: '65" confidence monitor — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_monitor_85',
        name: 'Confidence Monitor 85"',
        unit_price: 75000,
        category: 'av_rental',
        description: '85" confidence monitor — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_monitor_42',
        name: 'Monitor 42"',
        unit_price: 20000,
        category: 'av_rental',
        description: '42" monitor — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_owl_webcam',
        name: 'OWL USB Webcam',
        unit_price: 35000,
        category: 'av_rental',
        description: 'OWL USB webcam — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_slide_advancer',
        name: 'Slide Advancer',
        unit_price: 5000,
        category: 'av_rental',
        description: 'Slide advancer — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_speaker_timer',
        name: 'Speaker Timer',
        unit_price: 35000,
        category: 'av_rental',
        description: 'Speaker timer — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_perfect_cue',
        name: 'PerfectCue',
        unit_price: 35000,
        category: 'av_rental',
        description: 'PerfectCue system — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_laptop_mac',
        name: 'Laptop — MacBook',
        unit_price: 25000,
        category: 'av_rental',
        description: 'MacBook laptop — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_laptop_pc',
        name: 'Laptop — PC',
        unit_price: 25000,
        category: 'av_rental',
        description: 'PC laptop — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_moon_balloon',
        name: 'Moon Balloon',
        unit_price: 80000,
        category: 'av_rental',
        description: 'Moon balloon lighting — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_power_panel',
        name: 'Power Panel',
        unit_price: 60000,
        category: 'av_rental',
        description: 'Power panel — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_power_strip',
        name: 'Power Strip',
        unit_price: 3000,
        category: 'av_rental',
        description: 'Power strip — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_power_extension',
        name: 'Power Extension',
        unit_price: 3000,
        category: 'av_rental',
        description: 'Power extension — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_hdmi_cable',
        name: 'HDMI Cable (6-Foot)',
        unit_price: 3000,
        category: 'av_rental',
        description: '6-foot HDMI cable — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_network_cable',
        name: 'Network Cable (10-Foot)',
        unit_price: 3000,
        category: 'av_rental',
        description: '10-foot network cable — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_laptop_adapters',
        name: 'Laptop Adapters',
        unit_price: 3000,
        category: 'av_rental',
        description: 'Laptop adapters — each',
        tags: ['each'],
        options: [],
    },

    // ── AV Staffing ─────────────────────────────────────────────────
    {
        id: 'av_operator',
        name: 'AV Operator',
        unit_price: 5000,
        category: 'av_staffing',
        description: 'AV operator — per hour',
        tags: ['per_hour'],
        options: [],
    },
    {
        id: 'av_lighting_operator',
        name: 'AV Lighting Operator',
        unit_price: 6000,
        category: 'av_staffing',
        description: 'Lighting operator — per hour',
        tags: ['per_hour'],
        options: [],
    },
    {
        id: 'av_technician_hourly',
        name: 'AV Technician ($75/hr, min 4hrs)',
        unit_price: 7500,
        category: 'av_staffing',
        description: 'AV technician hourly rate, 4-hour minimum — per hour',
        tags: ['per_hour'],
        options: [],
    },
    {
        id: 'av_technician_strike',
        name: 'AV Technician (Set/Strike)',
        unit_price: 10000,
        category: 'av_staffing',
        description: 'AV technician for setup/strike — per hour',
        tags: ['per_hour'],
        options: [],
    },
    {
        id: 'av_technician_day',
        name: 'AV Technician (10-hour day)',
        unit_price: 95000,
        category: 'av_staffing',
        description: 'Full day AV technician (10 hours) — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_tech_director',
        name: 'AV Technical Director (10-hour day)',
        unit_price: 95000,
        category: 'av_staffing',
        description: 'Full day AV technical director (10 hours) — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_vendor_basic',
        name: 'External Vendor Supervisor (Basic)',
        unit_price: 50000,
        category: 'av_staffing',
        description: 'Basic external vendor supervision — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_vendor_premium',
        name: 'External Vendor Supervisor (Premium)',
        unit_price: 95000,
        category: 'av_staffing',
        description: 'Premium external vendor supervision — each',
        tags: ['each'],
        options: [],
    },
    {
        id: 'av_setup_test',
        name: 'AV Setup & Test',
        unit_price: 50000,
        category: 'av_staffing',
        description: 'AV setup and testing — per event',
        tags: ['per_event'],
        options: [],
    },

    // ── Service Charges ─────────────────────────────────────────────
    {
        id: 'after_hours',
        name: 'After-Hours Service Charge',
        unit_price: 5000,
        category: 'service_charges',
        description: 'After-hours service charge — each',
        tags: ['each'],
        options: [],
    },
];

export const CATERING_PACKAGES = [
    {
        id: 'pkg-001',
        name: 'Morning Meeting Package',
        description: 'Continental breakfast with beverages for morning meetings',
        price: 2500,
        serves: '8-12 people',
        duration: '2-3 hours',
        items: ['classic_continental', 'beverage_package'],
        dietary_options: ['vegetarian', 'gluten-free'],
    },
    {
        id: 'pkg-002',
        name: 'Executive Conference Package',
        description: 'Full day conference with breakfast, lunch and breaks',
        price: 8500,
        serves: '10-20 people',
        duration: '8 hours',
        items: [
            'deluxe_continental',
            'ee_am_break',
            'soup_salad_sandwich',
            'ee_pm_break',
        ],
        dietary_options: ['vegetarian', 'gluten-free'],
    },
    {
        id: 'pkg-003',
        name: 'Reception Package',
        description: 'Elegant reception with cheese, apps and beverages',
        price: 3500,
        serves: '20-30 people',
        duration: '3-4 hours',
        items: [
            'artisan_cheese_pp',
            'asian_pork_meatballs',
            'artisan_cheese_tart',
        ],
        dietary_options: ['vegetarian'],
    },
    {
        id: 'pkg-004',
        name: 'Game Day Package',
        description: 'Pre-packaged football game day dining',
        price: 5000,
        serves: '15-25 people',
        duration: '4-6 hours',
        items: ['football_lunch', 'football_dinner', 'beverage_package'],
        dietary_options: [],
    },
    {
        id: 'pkg-005',
        name: 'Brunch Event Package',
        description: 'Full brunch buffet with dessert and coffee',
        price: 6100,
        serves: '12-20 people',
        duration: '3-4 hours',
        items: ['bruin_brunch', 'dessert_coffee'],
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
        description: 'Pass-around finger foods and canapes',
        setup_time: 30,
        breakdown_time: 30,
        staff_required: 3,
        price_modifier: 1.4,
    },
];

export const SUPPLIERS = [
    {
        id: 'sup-001',
        name: 'UCLA Conferences & Catering',
        rating: 4.9,
        specialty: 'Full-Service Event Catering',
        location: 'UCLA Campus',
        min_order: 500,
        delivery_fee: 0,
        setup_fee: 0,
    },
    {
        id: 'sup-002',
        name: 'UCLA Housing & Hospitality',
        rating: 4.8,
        specialty: 'Campus Dining & Hospitality',
        location: 'UCLA Campus',
        min_order: 300,
        delivery_fee: 0,
        setup_fee: 100,
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
                      'Please use UCLA branded napkins',
                      'Set up 15 minutes before event start',
                      'Vegetarian options on separate table',
                      'Please include serving utensils',
                      'Halal preparation required',
                      'Nut-free preparation required',
                  ][predictableRandomInt(6)]
                : '',

        // Contact and delivery
        delivery_contact: event.attendees?.[0]?.name || 'Event Organizer',
        delivery_phone: event.attendees?.[0]?.phone || '+1 310 825 4321',
        delivery_location: `Venue - ${event.location || 'TBC'}`,
        access_instructions: 'UCLA Events will direct to venue',

        // Billing
        department: event.extension_data?.department || 'General',
        cost_center: event.extension_data?.cost_center || 'events',
        project_code: event.extension_data?.project_code || null,

        // Metadata
        notes: [
            'Standard UCLA event catering',
            'Conference refreshments',
            'Department celebration catering',
            'Workshop session meals',
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
