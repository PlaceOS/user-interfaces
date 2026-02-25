/**
 * Payment Service
 * Handles pricing, quotes, and cost estimation
 * Prices sourced from UCLA Luskin Conference Center / Events Office rate cards
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .service('PaymentService', ['$q', '$timeout', PaymentService]);

    function PaymentService($q, $timeout) {
        var self = this;

        // ==========================================
        // AV & Production Pricing (per event unless noted)
        // ==========================================
        var avPricing = {
            projector:       { price: 250, label: 'Projector & Screen' },
            monitors:        { price: 200, label: 'Confidence Monitor (42")' },
            microphones:     { price: 200, label: 'Additional Microphone' },
            speakers:        { price: 125, label: 'Portable PA System' },
            laptop:          { price: 63,  label: 'Laptop Rental (Mac or PC)' },
            videoConference: { price: 125, label: 'Web Conferencing (4 hrs)' },
            videoRecording:  { price: 125, label: 'Videography (4 hrs)' },
            livestream:      { price: 125, label: 'Live Streaming (4 hrs)' },
            overflowStream:  { price: 156, label: 'Overflow Streaming to Lobby' },
            videoWall:       { price: 63,  label: 'Video Wall (3x3, 1080p)' }
        };

        var avStaffingRates = {
            'operator':   { label: 'AV Operator',           perHour: 50,  minHours: 1 },
            'lighting':   { label: 'AV Lighting Operator',  perHour: 60,  minHours: 1 },
            'technician': { label: 'AV Technician',         perHour: 75,  minHours: 4 },
            'director':   { label: 'AV Technical Director',  flat: 950 },
            'setup_test': { label: 'AV Setup & Test',        flat: 500 }
        };

        // ==========================================
        // Setup & Furniture Pricing
        // ==========================================
        var furniturePricing = {
            // Tables
            roundTables:      { price: 12,  label: 'Round Table (avg)' },        // $8–$20 depending on size
            rectTables:       { price: 15,  label: 'Rectangular Table (6\')' },
            seminarTables:    { price: 10,  label: 'Seminar Table (6\'x18")' },
            cocktailTables:   { price: 12,  label: 'Cocktail Table (avg)' },      // $10 standing, $15 seated
            buffetTables:     { price: 0,   label: 'Buffet Table (included)' },
            // Other furniture
            chairs:           { price: 0,   label: 'Additional Chairs (included)' },
            registrationTable:{ price: 0,   label: 'Registration Table + 4 Chairs (included)' },
            podium:           { price: 150, label: 'Acrylic Podium' },
            bar:              { price: 0,   label: 'Bar (included)' },
            stage:            { price: 0,   label: 'Stage / Platform (quoted separately)' },
            tent:             { price: 0,   label: 'Tent / Canopy (quoted separately)' }
        };

        // ==========================================
        // Event Service Packages (internal rates)
        // ==========================================
        var eventPackages = {
            'conference': { price: 1750, label: 'Conference Package (Auditorium + Lobby, 4-8hrs)' },
            'symposium':  { price: 938,  label: 'Symposium Package (Auditorium + Lobby, up to 4hrs)' },
            'workshop':   { price: 1063, label: 'Workshop Package (Presentation Space, 4-8hrs)' },
            'seminar':    { price: 719,  label: 'Seminar Package (Auditorium Only, up to 4hrs)' },
            'meeting':    { price: 313,  label: 'Meeting Package (Executive Conference Room, up to 4hrs)' }
        };

        var insurancePricing = {
            liability:         { price: 150, label: 'General Liability Insurance' },
            eventCancellation: { price: 300, label: 'Event Cancellation Insurance' },
            liquorLiability:   { price: 250, label: 'Liquor Liability Insurance' }
        };

        var coverageUpgrades = {
            '1m': 0,
            '2m': 150,
            '5m': 400
        };

        // ==========================================
        // Parking Pricing
        // ==========================================
        var parkingPricing = {
            perSpace:      25,
            perValidation: 15,
            valet:         800,
            shuttle:       1200
        };

        // ==========================================
        // Safety & Security Pricing
        // ==========================================
        var safetyPricing = {
            doorSecurity: { price: 200, label: 'Door / Entry Security' },
            crowdControl: { price: 300, label: 'Crowd Control' },
            patrolling:   { price: 250, label: 'Patrolling Security' },
            alcohol:      { price: 500, label: 'Alcohol Service Permit & Staffing' },
            pyrotechnics: { price: 2500, label: 'Fireworks / Pyrotechnics Permit' },
            perPersonnel: 75
        };

        // ==========================================
        // Venue Pricing (select venues with published rates)
        // ==========================================
        var venuePricing = {
            'venue_1':   { name: 'Grand Horizon & Terrace',        basePrice: 3000, perHour: 450 },
            'venue_9':   { name: 'Palisades Ballroom',             basePrice: 3000, perHour: 450 },
            'venue_15':  { name: 'Plaza Room',                      basePrice: 2100, perHour: 300 },
            'venue_23':  { name: 'Sierra',                          basePrice: 500,  perHour: 85 },
            'venue_27':  { name: 'Morrison Room',                   basePrice: 2000, perHour: 340 },
            'venue_28':  { name: 'Main Dining Room',                basePrice: 4400, perHour: 750 },
            'venue_33':  { name: 'Centennial Ballroom',             basePrice: 5000, perHour: 750 },
            'venue_39':  { name: 'Ackerman Grand Ballroom',         basePrice: 5000, perHour: 800 },
            'venue_41':  { name: 'Charles E. Young Grand Salon',    basePrice: 2500, perHour: 400 },
            'venue_44':  { name: 'Bruin Plaza',                     basePrice: 3000, perHour: 500 },
            'venue_45':  { name: 'Korn Convocation Hall',           basePrice: 3000, perHour: 500 },
            'venue_55':  { name: 'Royce Hall Main Auditorium',      basePrice: 8000, perHour: 1500 },
            'venue_64':  { name: 'Billy Wilder Theater',            basePrice: 3500, perHour: 600 },
            'venue_71':  { name: 'Schoenberg Hall',                 basePrice: 4500, perHour: 800 },
            'venue_74':  { name: 'Freud Playhouse',                 basePrice: 6000, perHour: 1000 },
            'venue_122': { name: 'Drake Stadium',                   basePrice: 10000, perHour: 2000 },
            'venue_123': { name: 'Los Angeles Tennis Center',       basePrice: 12000, perHour: 2500 },
            'venue_125': { name: 'Sunset Canyon Recreation Center', basePrice: 2500, perHour: 400 },
            'venue_127': { name: 'Wilson Plaza',                    basePrice: 3000, perHour: 500 }
        };

        // ==========================================
        // Public API
        // ==========================================

        self.getVenuePricing = function() {
            return angular.copy(venuePricing);
        };

        /**
         * Calculate itemized quote for an event
         */
        self.calculateQuote = function(eventData, serviceOptions) {
            var quote = {
                lineItems: [],
                subtotal: 0,
                fees: [],
                total: 0,
                currency: 'USD',
                generatedAt: new Date().toISOString()
            };

            var duration = parseFloat(eventData.duration) || 2;

            // ------------------------------------------
            // Venue rental
            // ------------------------------------------
            if (eventData.venue_id && venuePricing[eventData.venue_id]) {
                var venue = venuePricing[eventData.venue_id];
                var venueTotal = venue.basePrice + (venue.perHour * duration);
                quote.lineItems.push({
                    category: 'venue',
                    name: venue.name + ' Rental',
                    description: 'Base fee + ' + duration + ' hours',
                    total: venueTotal
                });
            }

            // ------------------------------------------
            // AV & Production
            // ------------------------------------------
            if (eventData.request_items && eventData.request_items.indexOf('AV_TECH') !== -1) {
                var avOpts = serviceOptions ? serviceOptions.av_tech : null;
                var avItems = [];
                var avTotal = 0;

                if (avOpts) {
                    // Equipment
                    Object.keys(avPricing).forEach(function(key) {
                        if (avOpts[key]) {
                            avTotal += avPricing[key].price;
                            avItems.push(avPricing[key].label + ': $' + avPricing[key].price);
                        }
                    });

                    // Staffing
                    if (avOpts.staffing && avStaffingRates[avOpts.staffing]) {
                        var staff = avStaffingRates[avOpts.staffing];
                        if (staff.flat) {
                            avTotal += staff.flat;
                            avItems.push(staff.label + ': $' + staff.flat);
                        } else {
                            var staffHours = Math.max(duration, staff.minHours);
                            var staffCost = staff.perHour * staffHours;
                            avTotal += staffCost;
                            avItems.push(staff.label + ' (' + staffHours + ' hrs): $' + staffCost);
                        }
                    }
                }

                if (avTotal > 0) {
                    quote.lineItems.push({
                        category: 'service',
                        name: 'AV & Production',
                        description: avItems.join(', '),
                        total: avTotal
                    });
                }
            }

            // ------------------------------------------
            // Setup & Furniture
            // ------------------------------------------
            if (eventData.request_items && eventData.request_items.indexOf('SETUP') !== -1) {
                var setupOpts = serviceOptions ? serviceOptions.setup : null;
                var setupItems = [];
                var setupTotal = 0;

                if (setupOpts) {
                    // Priced furniture items
                    Object.keys(furniturePricing).forEach(function(key) {
                        if (setupOpts[key] && furniturePricing[key].price > 0) {
                            var qty = 1;
                            // Use quantity fields where available
                            if ((key === 'roundTables' || key === 'rectTables' || key === 'seminarTables' || key === 'cocktailTables') && setupOpts.tableCount) {
                                qty = parseInt(setupOpts.tableCount) || 1;
                            }
                            var itemCost = furniturePricing[key].price * qty;
                            setupTotal += itemCost;
                            setupItems.push(furniturePricing[key].label + (qty > 1 ? ' x' + qty : '') + ': $' + itemCost);
                        }
                    });

                    // Included items (list but no charge)
                    var includedItems = [];
                    Object.keys(furniturePricing).forEach(function(key) {
                        if (setupOpts[key] && furniturePricing[key].price === 0 && key !== 'stage' && key !== 'tent') {
                            includedItems.push(furniturePricing[key].label);
                        }
                    });

                    if (includedItems.length > 0) {
                        setupItems.push(includedItems.join(', '));
                    }

                    // Stage / tent noted as TBD
                    if (setupOpts.stage) setupItems.push('Stage (quoted on approval)');
                    if (setupOpts.tent) setupItems.push('Tent (quoted on approval)');
                }

                quote.lineItems.push({
                    category: 'service',
                    name: 'Setup & Furniture',
                    description: setupItems.length > 0 ? setupItems.join(', ') : 'Setup coordination',
                    total: setupTotal
                });
            }

            // ------------------------------------------
            // Parking & Transport
            // ------------------------------------------
            if (eventData.request_items && eventData.request_items.indexOf('PARKING') !== -1) {
                var parkOpts = serviceOptions ? serviceOptions.parking : null;
                var parkItems = [];
                var parkTotal = 0;

                if (parkOpts) {
                    if (parkOpts.reserved && parkOpts.reservedCount) {
                        var reservedCost = parkOpts.reservedCount * parkingPricing.perSpace;
                        parkTotal += reservedCost;
                        parkItems.push(parkOpts.reservedCount + ' reserved spaces: $' + reservedCost);
                    }
                    if (parkOpts.validation && parkOpts.validationCount) {
                        var valCost = parkOpts.validationCount * parkingPricing.perValidation;
                        parkTotal += valCost;
                        parkItems.push(parkOpts.validationCount + ' validations: $' + valCost);
                    }
                    if (parkOpts.valet) {
                        parkTotal += parkingPricing.valet;
                        parkItems.push('Valet Parking: $' + parkingPricing.valet);
                    }
                    if (parkOpts.shuttleService) {
                        parkTotal += parkingPricing.shuttle;
                        parkItems.push('Shuttle Service: $' + parkingPricing.shuttle);
                    }
                }

                if (parkTotal > 0) {
                    quote.lineItems.push({
                        category: 'service',
                        name: 'Parking & Transport',
                        description: parkItems.join(', '),
                        total: parkTotal
                    });
                }
            }

            // ------------------------------------------
            // Safety & Security
            // ------------------------------------------
            if (eventData.request_items && eventData.request_items.indexOf('SAFETY') !== -1) {
                var safeOpts = serviceOptions ? serviceOptions.safety : null;
                var safeItems = [];
                var safeTotal = 0;

                if (safeOpts) {
                    ['doorSecurity', 'crowdControl', 'patrolling', 'alcohol', 'pyrotechnics'].forEach(function(key) {
                        if (safeOpts[key] && safetyPricing[key]) {
                            safeTotal += safetyPricing[key].price;
                            safeItems.push(safetyPricing[key].label + ': $' + safetyPricing[key].price);
                        }
                    });

                    if (safeOpts.personnelCount) {
                        var personnelCost = safeOpts.personnelCount * safetyPricing.perPersonnel * duration;
                        safeTotal += personnelCost;
                        safeItems.push(safeOpts.personnelCount + ' personnel x ' + duration + ' hrs: $' + personnelCost);
                    }
                }

                if (safeTotal > 0) {
                    quote.lineItems.push({
                        category: 'service',
                        name: 'Safety & Security',
                        description: safeItems.join(', '),
                        total: safeTotal
                    });
                }
            }

            // ------------------------------------------
            // Event Services (packages + insurance)
            // ------------------------------------------
            if (eventData.request_items && eventData.request_items.indexOf('SERVICES') !== -1) {
                var svcOpts = serviceOptions ? serviceOptions.services : null;
                var svcItems = [];
                var svcTotal = 0;

                if (svcOpts) {
                    // Event package
                    if (svcOpts.package && eventPackages[svcOpts.package]) {
                        var pkg = eventPackages[svcOpts.package];
                        svcTotal += pkg.price;
                        svcItems.push(pkg.label);
                    }

                    // Insurance
                    ['liability', 'eventCancellation', 'liquorLiability'].forEach(function(key) {
                        if (svcOpts[key]) {
                            svcTotal += insurancePricing[key].price;
                            svcItems.push(insurancePricing[key].label + ': $' + insurancePricing[key].price);
                        }
                    });

                    // Coverage upgrade
                    if (svcOpts.coverage && coverageUpgrades[svcOpts.coverage] > 0) {
                        svcTotal += coverageUpgrades[svcOpts.coverage];
                        svcItems.push('Coverage upgrade: $' + coverageUpgrades[svcOpts.coverage]);
                    }
                }

                if (svcTotal > 0) {
                    quote.lineItems.push({
                        category: 'service',
                        name: 'Event Services',
                        description: svcItems.join(', '),
                        total: svcTotal
                    });
                }
            }

            // ------------------------------------------
            // Event Coordination (flat consultation fee)
            // ------------------------------------------
            if (eventData.request_items && eventData.request_items.indexOf('EVENTS') !== -1) {
                quote.lineItems.push({
                    category: 'service',
                    name: 'Event Coordination',
                    description: 'Planning assistance and event management',
                    total: 250
                });
            }

            // ------------------------------------------
            // Subtotal & Fees
            // ------------------------------------------
            quote.subtotal = quote.lineItems.reduce(function(sum, item) {
                return sum + item.total;
            }, 0);

            // Processing fee (3%)
            if (quote.subtotal > 0) {
                var processingFee = Math.round(quote.subtotal * 0.03 * 100) / 100;
                quote.fees.push({
                    name: 'Processing Fee (3%)',
                    amount: processingFee
                });
            }

            var feesTotal = quote.fees.reduce(function(sum, fee) {
                return sum + fee.amount;
            }, 0);

            quote.total = quote.subtotal + feesTotal;

            return quote;
        };

        /**
         * Format currency for display
         */
        self.formatCurrency = function(amount) {
            return '$' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        };
    }

})();
