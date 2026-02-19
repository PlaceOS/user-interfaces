// apps/concierge/src/app/room-manager/ucla-catering-menu.ts
var UNIT_LABELS = {
  per_person: "/pp",
  each: "/ea",
  per_event: "/event",
  per_dozen: "/dz",
  per_gallon: "/gal",
  per_quart: "/qt",
  per_platter: "/platter",
  per_bowl: "/bowl",
  per_hour: "/hr",
  per_bag: "/bag"
};
var CATERING_TIER_OPTIONS = [
  { value: "full_service", label: "Full Service", description: "On-site catering with full UCLA menus" },
  { value: "coordination", label: "Coordination", description: "Catering arranged through external providers" },
  { value: "self_service", label: "Self-Service / None", description: "No catering \u2014 AV & setup only" }
];
var TIER_CATEGORIES = {
  full_service: [
    "breakfast",
    "brunch",
    "lunch",
    "dinner",
    "breaks",
    "reception",
    "beverages",
    "bakery",
    "gameday"
  ],
  coordination: [
    "reception",
    "beverages",
    "bakery"
  ],
  self_service: []
};
var AV_CATEGORIES = ["av_rental", "av_staffing"];
var SETUP_CATEGORIES = ["setup"];
var BUILDING_CATERING_TIER = {
  "bld-01": "full_service",
  // Covel Commons — Full Catering Services
  "bld-02": "full_service",
  // Carnesale Commons — Full Catering Services
  "bld-03": "full_service",
  // De Neve Plaza — Full Catering Services
  "bld-04": "full_service",
  // Kerckhoff Hall — Full-Service Catering
  "bld-05": "full_service",
  // Luskin Conference Center — On-Site Event Catering
  "bld-06": "full_service",
  // Ackerman Union — Full-Service Catering (ASUCLA)
  "bld-07": "coordination",
  // Sunset Canyon Recreation — Catering Coordination
  "bld-08": "coordination",
  // Court of Sciences / Haines Hall — Catering Coordination
  "bld-09": "coordination",
  // Murphy Hall — Catering Coordination
  "bld-10": "coordination",
  // Pauley Pavilion — Catering Coordination
  "bld-11": "coordination",
  // Hammer Museum — Catering Coordination
  "bld-12": "coordination",
  // Schoenberg Music — Catering Coordination
  "bld-13": "coordination",
  // Theater, Film & Television — Catering Coordination
  "bld-14": "coordination",
  // CNSI — Catering Coordination
  "bld-15": "coordination",
  // Botanical Gardens — Catering Coordination
  "bld-16": "coordination",
  // Samueli Engineering — Catering Coordination
  "bld-17": "coordination",
  // Law School — Catering Coordination
  "bld-18": "coordination",
  // Moore Hall — Catering Coordination
  "bld-19": "coordination",
  // Luskin School of Public Affairs — Catering Coordination
  "bld-20": "self_service",
  // Powell Library / YRL — No catering
  "bld-21": "coordination",
  // DataX — Catering Coordination
  "bld-22": "coordination",
  // Kaplan Hall — Catering Support
  "bld-23": "full_service",
  // Lake Arrowhead Lodge — Award-Winning Dining
  "bld-24": "coordination",
  // UCLA Recreation — Catering Coordination
  "bld-25": "coordination"
  // Campus Outdoor Spaces — Catering Coordination
};
var UCLA_CATERING_MENU = [
  // ── Breakfast ─────────────────────────────────────────────────────
  {
    id: "breakfast",
    label: "Breakfast",
    description: "Continental, buffets & hot breakfast options",
    items: [
      { id: "classic_continental", name: "Classic Continental Breakfast", default_price: 13, unit: "per_person", category: "breakfast", subcategory: "Continental" },
      { id: "deluxe_continental", name: "Deluxe Continental Breakfast", default_price: 16, unit: "per_person", category: "breakfast", subcategory: "Continental" },
      { id: "premium_continental", name: "Premium Continental Breakfast", default_price: 17, unit: "per_person", category: "breakfast", subcategory: "Continental" },
      { id: "american_breakfast", name: "American Breakfast Buffet", default_price: 28, unit: "per_person", category: "breakfast", subcategory: "Buffet" },
      { id: "breakfast_burrito", name: "Breakfast Burrito Buffet", default_price: 28, unit: "per_person", category: "breakfast", subcategory: "Buffet" },
      { id: "bruin_fitness", name: "Bruin Fitness Breakfast Buffet", default_price: 30, unit: "per_person", category: "breakfast", subcategory: "Buffet" },
      { id: "italy_breakfast", name: "Italy Breakfast Buffet", default_price: 26, unit: "per_person", category: "breakfast", subcategory: "Buffet" },
      { id: "omelettes", name: "Omelettes & Things Buffet", default_price: 32, unit: "per_person", category: "breakfast", subcategory: "Buffet" },
      { id: "ee_breakfast", name: "EE Breakfast Buffet (A\u2013F)", default_price: 30, unit: "per_person", category: "breakfast", subcategory: "Conference" }
    ]
  },
  // ── Brunch ────────────────────────────────────────────────────────
  {
    id: "brunch",
    label: "Brunch",
    description: "Brunch buffets & combos",
    items: [
      { id: "bruin_brunch", name: "Bruin Brunch Buffet", default_price: 43, unit: "per_person", category: "brunch", subcategory: "Buffet" },
      { id: "brunch_everyday", name: "Brunch Everyday Buffet", default_price: 40, unit: "per_person", category: "brunch", subcategory: "Buffet" },
      { id: "dessert_coffee", name: "Dessert & Coffee", default_price: 18, unit: "per_person", category: "brunch", subcategory: "Buffet" }
    ]
  },
  // ── Lunch ─────────────────────────────────────────────────────────
  {
    id: "lunch",
    label: "Lunch",
    description: "Lunch buffets, salads & sandwiches",
    items: [
      { id: "abbondanza_pasta", name: "Abbondanza Pasta", default_price: 18, unit: "per_person", category: "lunch", subcategory: "Buffet" },
      { id: "soup_salad_sandwich", name: "Soup, Salad & Sandwich Buffet", default_price: 45, unit: "per_person", category: "lunch", subcategory: "Buffet" },
      { id: "market_salad", name: "Market Salad Bar", default_price: 18, unit: "per_person", category: "lunch", subcategory: "Buffet" },
      { id: "sliders", name: "Sliders", default_price: 22, unit: "per_person", category: "lunch", subcategory: "Buffet" },
      { id: "street_tacos", name: "Street Tacos", default_price: 22, unit: "per_person", category: "lunch", subcategory: "Buffet" },
      { id: "pho_cart", name: "Pho Cart", default_price: 20, unit: "per_person", category: "lunch", subcategory: "Buffet" },
      { id: "california_market_cold", name: "California Market Buffet (Cold)", default_price: 54, unit: "per_person", category: "lunch", subcategory: "Buffet" },
      { id: "california_market_hot", name: "California Market Buffet (Hot)", default_price: 54, unit: "per_person", category: "lunch", subcategory: "Buffet" },
      { id: "festivity", name: "Festivity Buffet", default_price: 59, unit: "per_person", category: "lunch", subcategory: "Buffet" },
      { id: "holiday", name: "Holiday Buffet", default_price: 57, unit: "per_person", category: "lunch", subcategory: "Buffet" },
      { id: "albacore_tuna_salad", name: "Albacore Tuna Salad", default_price: 38, unit: "per_bowl", category: "lunch", subcategory: "Salad" },
      { id: "albacore_tuna_sandwich", name: "Albacore Tuna Sandwich", default_price: 20, unit: "each", category: "lunch", subcategory: "Sandwich" },
      { id: "deluxe_boxed_lunch", name: "Deluxe Boxed Lunch", default_price: 28, unit: "per_person", category: "lunch", subcategory: "Boxed" },
      { id: "classic_lunch_buffet", name: "Classic Lunch Buffet", default_price: 25, unit: "per_person", category: "lunch", subcategory: "Buffet" },
      { id: "ee_lunch", name: "EE Lunch Buffet (A\u2013F)", default_price: 45, unit: "per_person", category: "lunch", subcategory: "Conference" }
    ]
  },
  // ── Dinner ────────────────────────────────────────────────────────
  {
    id: "dinner",
    label: "Dinner",
    description: "Dinner buffets & international cuisine",
    items: [
      { id: "across_asia", name: "Across Asia Buffet", default_price: 50, unit: "per_person", category: "dinner", subcategory: "Buffet" },
      { id: "backyard_grillin", name: "Backyard Grillin' Buffet", default_price: 40, unit: "per_person", category: "dinner", subcategory: "Buffet" },
      { id: "celebration", name: "Celebration Buffet", default_price: 55, unit: "per_person", category: "dinner", subcategory: "Buffet" },
      { id: "italian_fare", name: "The Italian Fare Buffet", default_price: 50, unit: "per_person", category: "dinner", subcategory: "Buffet" },
      { id: "latin_america", name: "Latin America Buffet", default_price: 54, unit: "per_person", category: "dinner", subcategory: "Buffet" },
      { id: "mediterranean_hot", name: "Mediterranean Buffet (Hot)", default_price: 50, unit: "per_person", category: "dinner", subcategory: "Buffet" },
      { id: "mediterranean_room_temp", name: "Mediterranean Buffet (Room Temp)", default_price: 50, unit: "per_person", category: "dinner", subcategory: "Buffet" },
      { id: "national_barbecue", name: "National Barbecue Buffet", default_price: 50, unit: "per_person", category: "dinner", subcategory: "Buffet" },
      { id: "true_bruin", name: "True Bruin Buffet", default_price: 40, unit: "per_person", category: "dinner", subcategory: "Buffet" },
      { id: "plated_dinner_entree", name: "Plated Dinner Entree", default_price: 38, unit: "per_person", category: "dinner", subcategory: "Plated" },
      { id: "ee_dinner", name: "EE Dinner Buffet (A\u2013F)", default_price: 50, unit: "per_person", category: "dinner", subcategory: "Conference" }
    ]
  },
  // ── Breaks & Snacks ───────────────────────────────────────────────
  {
    id: "breaks",
    label: "Breaks & Snacks",
    description: "Coffee breaks, snacks & refreshments",
    items: [
      { id: "beverage_package", name: "Beverage Package", default_price: 12, unit: "per_person", category: "breaks", subcategory: "Beverage" },
      { id: "cookies_treats", name: "Cookies N'Treats", default_price: 14, unit: "per_person", category: "breaks", subcategory: "Snack" },
      { id: "grazing", name: "Grazing", default_price: 20, unit: "per_person", category: "breaks", subcategory: "Snack" },
      { id: "la_fiesta", name: "La Fiesta", default_price: 17, unit: "per_person", category: "breaks", subcategory: "Snack" },
      { id: "revitalize", name: "Revitalize", default_price: 15, unit: "per_person", category: "breaks", subcategory: "Snack" },
      { id: "moroccan_sun", name: "Under the Moroccan Sun", default_price: 16, unit: "per_person", category: "breaks", subcategory: "Snack" },
      { id: "zen", name: "Zen", default_price: 16, unit: "per_person", category: "breaks", subcategory: "Snack" },
      { id: "sundae_bar", name: "Sundae Bar", default_price: 22, unit: "per_person", category: "breaks", subcategory: "Dessert" },
      { id: "ee_am_break", name: "EE AM Break w/Coffee (A\u2013F)", default_price: 18.5, unit: "per_person", category: "breaks", subcategory: "Conference" },
      { id: "ee_am_continental", name: "EE AM Break w/Continental & Coffee (A\u2013F)", default_price: 25.5, unit: "per_person", category: "breaks", subcategory: "Conference" },
      { id: "ee_pm_break", name: "EE PM Break w/Coffee (A\u2013F)", default_price: 21, unit: "per_person", category: "breaks", subcategory: "Conference" }
    ]
  },
  // ── Reception & Hors d'oeuvres ────────────────────────────────────
  {
    id: "reception",
    label: "Reception & Hors d'oeuvres",
    description: "Platters, passed apps & cocktail hour",
    items: [
      { id: "artisan_cheese_pp", name: "Artisan Cheese Platter", default_price: 14, unit: "per_person", category: "reception", subcategory: "Platter" },
      { id: "artisan_cheese_sm", name: "Artisan Cheese Platter (Small)", default_price: 95, unit: "per_platter", category: "reception", subcategory: "Platter" },
      { id: "artisan_cheese_lg", name: "Artisan Cheese Platter (Large)", default_price: 150, unit: "per_platter", category: "reception", subcategory: "Platter" },
      { id: "american_caviar", name: "American Caviar, Roasted Potato, Cr\xE8me Fraiche", default_price: 5, unit: "each", category: "reception", subcategory: "Hors d'oeuvres" },
      { id: "artisan_cheese_tart", name: "Artisan Cheese Tart, Roasted Fruit, Thyme", default_price: 3.5, unit: "each", category: "reception", subcategory: "Hors d'oeuvres" },
      { id: "asian_pork_meatballs", name: "Asian Pork Meatballs, Five Spice, Ginger Honey", default_price: 4, unit: "each", category: "reception", subcategory: "Hors d'oeuvres" },
      { id: "portobella_sopes", name: "Achiote-Marinated Portobella Sopes", default_price: 43, unit: "per_person", category: "reception", subcategory: "Hors d'oeuvres" },
      { id: "warm_passed_hors", name: "Warm Passed Hors d'oeuvres", default_price: 8, unit: "per_person", category: "reception", subcategory: "Hors d'oeuvres" },
      { id: "hosted_premium_bar", name: "Hosted Premium Bar (per hour)", default_price: 18, unit: "per_person", category: "reception", subcategory: "Bar" }
    ]
  },
  // ── Beverages ─────────────────────────────────────────────────────
  {
    id: "beverages",
    label: "Beverages",
    description: "Juices, milk, soft drinks & specialty",
    items: [
      { id: "apple_juice", name: "Apple Juice", default_price: 32, unit: "per_gallon", category: "beverages", subcategory: "Juice" },
      { id: "arnold_palmer", name: "Arnold Palmer", default_price: 32, unit: "per_gallon", category: "beverages", subcategory: "Specialty" },
      { id: "almond_milk", name: "Almond Milk", default_price: 12, unit: "per_quart", category: "beverages", subcategory: "Dairy" },
      { id: "canned_juices", name: "Assorted Canned Fruit Juices & V8", default_price: 2.5, unit: "each", category: "beverages", subcategory: "Juice" },
      { id: "soft_drinks_bar", name: "Assorted Soft Drinks (Bar)", default_price: 7, unit: "each", category: "beverages", subcategory: "Soft Drink" }
    ]
  },
  // ── Bakery & Pastries ─────────────────────────────────────────────
  {
    id: "bakery",
    label: "Bakery & Pastries",
    description: "Croissants, bagels, cookies & desserts",
    items: [
      { id: "almond_croissants", name: "Almond Croissants", default_price: 33, unit: "per_dozen", category: "bakery", subcategory: "Pastry" },
      { id: "artisan_bagels_classic", name: "Artisan Bagels (Classic Flavors)", default_price: 28, unit: "per_dozen", category: "bakery", subcategory: "Bread" },
      { id: "artisan_bagels_specialty", name: "Artisan Bagels (Specialty Flavors)", default_price: 28, unit: "per_dozen", category: "bakery", subcategory: "Bread" },
      { id: "ucla_cookies", name: "Fresh-Baked UCLA Bakery Cookies", default_price: 24, unit: "per_dozen", category: "bakery", subcategory: "Cookie" },
      { id: "petit_fours", name: "Assorted Petit Fours", default_price: 35, unit: "per_dozen", category: "bakery", subcategory: "Dessert" },
      { id: "mini_desserts", name: "Assorted Seasonal Mini Desserts", default_price: 45, unit: "per_dozen", category: "bakery", subcategory: "Dessert" },
      { id: "chips_bags", name: "Assorted Bags of Chips", default_price: 1.75, unit: "per_bag", category: "bakery", subcategory: "Snack" },
      { id: "kettle_chips", name: "Additional Kettle / Tortilla Chips", default_price: 20, unit: "each", category: "bakery", subcategory: "Snack" },
      { id: "asian_snack_mix", name: "Asian Snack Mix", default_price: 18, unit: "each", category: "bakery", subcategory: "Snack" }
    ]
  },
  // ── Gameday Menus ─────────────────────────────────────────────────
  {
    id: "gameday",
    label: "Gameday Menus",
    description: "Pre-packaged football game menus",
    items: [
      { id: "football_lunch", name: "Prepackaged Football Menu \u2014 Lunch (A\u2013U)", default_price: 20, unit: "per_person", category: "gameday", subcategory: "Lunch" },
      { id: "football_dinner", name: "Prepackaged Football Menu \u2014 Dinner (A\u2013U)", default_price: 30, unit: "per_person", category: "gameday", subcategory: "Dinner" }
    ]
  },
  // ── Setup & Furniture Rental ──────────────────────────────────────
  {
    id: "setup",
    label: "Setup & Furniture Rental",
    description: "Tables, bars & event furniture",
    items: [
      { id: "registration_table", name: "12-ft Registration Table + 4 Chairs + Wastebaskets", default_price: 0, unit: "each", category: "setup", subcategory: "Table" },
      { id: "bar_12ft", name: "12-ft Bar", default_price: 0, unit: "each", category: "setup", subcategory: "Bar" },
      { id: "bar_6ft", name: "6-ft Front & Back Bar", default_price: 0, unit: "each", category: "setup", subcategory: "Bar" },
      { id: "buffet_6ft", name: "6' Buffet Table", default_price: 0, unit: "each", category: "setup", subcategory: "Buffet" },
      { id: "buffet_12ft", name: "12' Buffet Table", default_price: 0, unit: "each", category: "setup", subcategory: "Buffet" },
      { id: "buffet_18ft", name: "18' Buffet Table", default_price: 0, unit: "each", category: "setup", subcategory: "Buffet" },
      { id: "table_6ft", name: "6' Table", default_price: 15, unit: "each", category: "setup", subcategory: "Table" },
      { id: "table_8ft", name: "8' Table", default_price: 20, unit: "each", category: "setup", subcategory: "Table" },
      { id: "seminar_table", name: `6'x18" Seminar (Classroom) Table`, default_price: 10, unit: "each", category: "setup", subcategory: "Table" },
      { id: "cocktail_standing", name: '30" Standing Cocktail Tables', default_price: 10, unit: "each", category: "setup", subcategory: "Cocktail" },
      { id: "cocktail_seated", name: '36" Seated Cocktail Tables + 4 Chairs', default_price: 15, unit: "each", category: "setup", subcategory: "Cocktail" },
      { id: "round_42", name: '42" Round Table', default_price: 8, unit: "each", category: "setup", subcategory: "Round" },
      { id: "round_60", name: '60" Round Table', default_price: 12, unit: "each", category: "setup", subcategory: "Round" },
      { id: "round_66", name: '66" Round Table', default_price: 15, unit: "each", category: "setup", subcategory: "Round" },
      { id: "round_72", name: '72" Round Table', default_price: 20, unit: "each", category: "setup", subcategory: "Round" }
    ]
  },
  // ── AV Equipment Rental ───────────────────────────────────────────
  {
    id: "av_rental",
    label: "AV Equipment Rental",
    description: "Projectors, monitors, audio & tech staffing",
    items: [
      { id: "av_basic_uc", name: "Basic Meeting Room AV (University Club)", default_price: 500, unit: "per_event", category: "av_rental", subcategory: "Package" },
      { id: "av_basic_projector", name: "Basic AV \u2014 Built-In Projector", default_price: 400, unit: "per_event", category: "av_rental", subcategory: "Package" },
      { id: "av_basic_portable", name: "Basic AV \u2014 Portable Projector (The Hill)", default_price: 400, unit: "per_event", category: "av_rental", subcategory: "Package" },
      { id: "av_projector_screen", name: "Portable Projector + Screen (Lounges)", default_price: 250, unit: "each", category: "av_rental", subcategory: "Package" },
      { id: "av_hard_internet", name: "Hard Wired Internet", default_price: 150, unit: "each", category: "av_rental", subcategory: "Connectivity" },
      { id: "av_podium", name: "Acrylic Podium", default_price: 150, unit: "each", category: "av_rental", subcategory: "Furniture" },
      { id: "av_flipchart_pad", name: "Additional Pad for Flipchart", default_price: 20, unit: "each", category: "av_rental", subcategory: "Supplies" },
      { id: "av_mixer_16ch", name: "Audio Mixer (16-channel)", default_price: 130, unit: "each", category: "av_rental", subcategory: "Audio" },
      { id: "av_mixer_4ch", name: "Audio Mixer (4-channel)", default_price: 65, unit: "each", category: "av_rental", subcategory: "Audio" },
      { id: "av_additional_mic", name: "Additional Microphone", default_price: 200, unit: "each", category: "av_rental", subcategory: "Audio" },
      { id: "av_assisted_listening", name: "Assisted Listening Device", default_price: 50, unit: "each", category: "av_rental", subcategory: "Accessibility" },
      { id: "av_camera", name: "Camera", default_price: 300, unit: "each", category: "av_rental", subcategory: "Video" },
      { id: "av_speakerphone", name: "Cisco Speakerphone", default_price: 300, unit: "each", category: "av_rental", subcategory: "Audio" },
      { id: "av_monitor_55", name: 'Confidence Monitor 55"', default_price: 350, unit: "each", category: "av_rental", subcategory: "Display" },
      { id: "av_monitor_65", name: 'Confidence Monitor 65"', default_price: 550, unit: "each", category: "av_rental", subcategory: "Display" },
      { id: "av_monitor_85", name: 'Confidence Monitor 85"', default_price: 750, unit: "each", category: "av_rental", subcategory: "Display" },
      { id: "av_monitor_42", name: 'Monitor 42"', default_price: 200, unit: "each", category: "av_rental", subcategory: "Display" },
      { id: "av_owl_webcam", name: "OWL USB Webcam", default_price: 350, unit: "each", category: "av_rental", subcategory: "Video" },
      { id: "av_slide_advancer", name: "Slide Advancer", default_price: 50, unit: "each", category: "av_rental", subcategory: "Supplies" },
      { id: "av_speaker_timer", name: "Speaker Timer", default_price: 350, unit: "each", category: "av_rental", subcategory: "Supplies" },
      { id: "av_perfect_cue", name: "PerfectCue", default_price: 350, unit: "each", category: "av_rental", subcategory: "Supplies" },
      { id: "av_laptop_mac", name: "Laptop \u2014 MacBook", default_price: 250, unit: "each", category: "av_rental", subcategory: "Computer" },
      { id: "av_laptop_pc", name: "Laptop \u2014 PC", default_price: 250, unit: "each", category: "av_rental", subcategory: "Computer" },
      { id: "av_moon_balloon", name: "Moon Balloon", default_price: 800, unit: "each", category: "av_rental", subcategory: "Lighting" },
      { id: "av_power_panel", name: "Power Panel", default_price: 600, unit: "each", category: "av_rental", subcategory: "Power" },
      { id: "av_power_strip", name: "Power Strip", default_price: 30, unit: "each", category: "av_rental", subcategory: "Power" },
      { id: "av_power_extension", name: "Power Extension", default_price: 30, unit: "each", category: "av_rental", subcategory: "Power" },
      { id: "av_hdmi_cable", name: "HDMI Cable (6-Foot)", default_price: 30, unit: "each", category: "av_rental", subcategory: "Cable" },
      { id: "av_network_cable", name: "Network Cable (10-Foot)", default_price: 30, unit: "each", category: "av_rental", subcategory: "Cable" },
      { id: "av_laptop_adapters", name: "Laptop Adapters", default_price: 30, unit: "each", category: "av_rental", subcategory: "Cable" }
    ]
  },
  // ── AV Staffing ───────────────────────────────────────────────────
  {
    id: "av_staffing",
    label: "AV Staffing",
    description: "Technicians, operators & directors",
    items: [
      { id: "av_operator", name: "AV Operator", default_price: 50, unit: "per_hour", category: "av_staffing", subcategory: "Staffing" },
      { id: "av_lighting_operator", name: "AV Lighting Operator", default_price: 60, unit: "per_hour", category: "av_staffing", subcategory: "Staffing" },
      { id: "av_technician_hourly", name: "AV Technician ($75/hr, min 4hrs)", default_price: 75, unit: "per_hour", category: "av_staffing", subcategory: "Staffing" },
      { id: "av_technician_strike", name: "AV Technician (Set/Strike)", default_price: 100, unit: "per_hour", category: "av_staffing", subcategory: "Staffing" },
      { id: "av_technician_day", name: "AV Technician (10-hour day)", default_price: 950, unit: "each", category: "av_staffing", subcategory: "Staffing" },
      { id: "av_tech_director", name: "AV Technical Director (10-hour day)", default_price: 950, unit: "each", category: "av_staffing", subcategory: "Staffing" },
      { id: "av_vendor_basic", name: "External Vendor Supervisor (Basic)", default_price: 500, unit: "each", category: "av_staffing", subcategory: "Staffing" },
      { id: "av_vendor_premium", name: "External Vendor Supervisor (Premium)", default_price: 950, unit: "each", category: "av_staffing", subcategory: "Staffing" },
      { id: "av_setup_test", name: "AV Setup & Test", default_price: 500, unit: "per_event", category: "av_staffing", subcategory: "Staffing" }
    ]
  },
  // ── Service Charges ───────────────────────────────────────────────
  {
    id: "service_charges",
    label: "Service Charges",
    description: "After-hours & special service fees",
    items: [
      { id: "after_hours", name: "After-Hours Service Charge", default_price: 50, unit: "each", category: "service_charges", subcategory: "Fee" }
    ]
  }
];
var ALL_MENU_ITEMS = UCLA_CATERING_MENU.flatMap((cat) => cat.items);
var getMenuItemById = (id) => ALL_MENU_ITEMS.find((item) => item.id === id);

export {
  UNIT_LABELS,
  CATERING_TIER_OPTIONS,
  TIER_CATEGORIES,
  AV_CATEGORIES,
  SETUP_CATEGORIES,
  BUILDING_CATERING_TIER,
  UCLA_CATERING_MENU,
  getMenuItemById
};
//# sourceMappingURL=chunk-D54ZDHOD.js.map
