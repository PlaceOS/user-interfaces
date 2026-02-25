/**
 * UCLA Policy Engine Service
 * Evaluates event requirements against approval policies
 * Implements 11 UCLA-specific policy rules
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .service('PolicyEngineService', ['APP_CONFIG', PolicyEngineService]);

    function PolicyEngineService(APP_CONFIG) {
        var self = this;

        /**
         * Get default UCLA approval policies
         * @returns {Array} Array of policy rules
         */
        self.getDefaultPolicies = function() {
            return [
                {
                    id: 'av_production',
                    description: 'AV & Production services require AV_TECH approval',
                    conditions: {
                        request_items: ['AV_TECH']
                    },
                    required_stages: ['AV_TECH'],
                    required_documents: [],
                    sla_hours: 24
                },
                {
                    id: 'setup_furniture',
                    description: 'Setup & Furniture requires Setup approval',
                    conditions: {
                        request_items: ['SETUP']
                    },
                    required_stages: ['SETUP'],
                    required_documents: [],
                    sla_hours: 24
                },
                {
                    id: 'parking_small',
                    description: 'Small parking needs (< 300 attendees)',
                    conditions: {
                        request_items: ['PARKING'],
                        max_attendance: 299
                    },
                    required_stages: ['PARKING'],
                    required_documents: [],
                    sla_hours: 24
                },
                {
                    id: 'parking_large',
                    description: 'Large parking needs (≥ 300 attendees)',
                    conditions: {
                        request_items: ['PARKING'],
                        min_attendance: 300
                    },
                    required_stages: ['PARKING', 'SETUP'],
                    required_documents: ['TRAFFIC_PLAN'],
                    sla_hours: 48
                },
                {
                    id: 'safety_security',
                    description: 'Safety & Security services (security, alcohol, pyrotechnics)',
                    conditions: {
                        request_items: ['SAFETY']
                    },
                    required_stages: ['SAFETY'],
                    required_documents: ['SECURITY_PLAN'],
                    sla_hours: 48
                },
                {
                    id: 'event_services',
                    description: 'Event Services (insurance, permits, coordination)',
                    conditions: {
                        request_items: ['SERVICES']
                    },
                    required_stages: ['SERVICES'],
                    required_documents: ['COI'],
                    sla_hours: 24
                },
                {
                    id: 'event_coordination',
                    description: 'Event Coordination & planning assistance',
                    conditions: {
                        request_items: ['EVENTS']
                    },
                    required_stages: ['EVENTS'],
                    required_documents: [],
                    sla_hours: 24
                },
                {
                    id: 'outdoor',
                    description: 'Outdoor events require event services approval',
                    conditions: {
                        is_outdoor: true
                    },
                    required_stages: ['SERVICES'],
                    required_documents: ['COI'],
                    sla_hours: 24
                },
                {
                    id: 'major_event',
                    description: 'Major events require comprehensive approvals',
                    conditions: {
                        is_major_event: true
                    },
                    required_stages: ['SAFETY', 'SETUP', 'VENUE'],
                    required_documents: ['RISK_ASSESSMENT', 'SITE_PLAN'],
                    sla_hours: 96
                },
                {
                    id: 'large_outdoor',
                    description: 'Large outdoor events (≥ 300 attendees)',
                    conditions: {
                        is_outdoor: true,
                        min_attendance: 300
                    },
                    required_stages: ['SAFETY', 'VENUE'],
                    required_documents: ['SITE_PLAN', 'RAIN_PLAN'],
                    sla_hours: 48
                },
                {
                    id: 'curfew_hours',
                    description: 'Events during curfew hours (22:00-06:00)',
                    conditions: {
                        curfew_time: true
                    },
                    required_stages: ['SAFETY', 'VENUE'],
                    required_documents: ['NOISE_PERMIT'],
                    sla_hours: 48
                }
            ];
        };

        /**
         * Evaluate policies against event context
         * @param {Object} eventContext - Event data to evaluate
         * @returns {Object} Evaluation results
         */
        self.evaluatePolicies = function(eventContext) {
            var policies = self.getDefaultPolicies();
            var matchedPolicies = [];
            var requiredStages = [];
            var requiredDocuments = [];
            var maxSlaHours = APP_CONFIG.app.default_sla_hours;

            policies.forEach(function(policy) {
                if (self.policyMatches(policy, eventContext)) {
                    matchedPolicies.push(policy);

                    // Collect unique stages
                    policy.required_stages.forEach(function(stage) {
                        if (requiredStages.indexOf(stage) === -1) {
                            requiredStages.push(stage);
                        }
                    });

                    // Collect unique documents
                    policy.required_documents.forEach(function(doc) {
                        if (requiredDocuments.indexOf(doc) === -1) {
                            requiredDocuments.push(doc);
                        }
                    });

                    // Track maximum SLA
                    if (policy.sla_hours > maxSlaHours) {
                        maxSlaHours = policy.sla_hours;
                    }
                }
            });

            // Always require VENUE approval
            if (requiredStages.indexOf('VENUE') === -1) {
                requiredStages.unshift('VENUE');
            }

            return {
                matched_policies: matchedPolicies,
                required_stages: requiredStages,
                required_documents: requiredDocuments,
                sla_hours: maxSlaHours
            };
        };

        /**
         * Check if a policy matches event context
         * @param {Object} policy - Policy rule
         * @param {Object} context - Event context
         * @returns {Boolean}
         */
        self.policyMatches = function(policy, context) {
            var conditions = policy.conditions;

            // Check request items
            if (conditions.request_items) {
                var hasMatchingItem = conditions.request_items.some(function(item) {
                    return context.request_items && context.request_items.indexOf(item) !== -1;
                });
                if (!hasMatchingItem) return false;
            }

            // Check min attendance
            if (conditions.min_attendance !== undefined) {
                if (!context.attendance_count || context.attendance_count < conditions.min_attendance) {
                    return false;
                }
            }

            // Check max attendance
            if (conditions.max_attendance !== undefined) {
                if (!context.attendance_count || context.attendance_count > conditions.max_attendance) {
                    return false;
                }
            }

            // Check outdoor flag
            if (conditions.is_outdoor !== undefined) {
                if (context.is_outdoor !== conditions.is_outdoor) {
                    return false;
                }
            }

            // Check major event flag
            if (conditions.is_major_event !== undefined) {
                if (context.is_major_event !== conditions.is_major_event) {
                    return false;
                }
            }

            // Check curfew time (22:00 - 06:00)
            if (conditions.curfew_time !== undefined) {
                if (!context.event_start) return false;
                var hour = new Date(context.event_start).getHours();
                var isDuringCurfew = hour >= 22 || hour < 6;
                if (isDuringCurfew !== conditions.curfew_time) {
                    return false;
                }
            }

            return true;
        };

        /**
         * Get human-readable stage name
         * @param {String} stage - Stage code
         * @returns {String}
         */
        self.getStageName = function(stage) {
            var names = {
                'VENUE': 'Venue Booking',
                'DINING': 'Catering & Dining',
                'AV_TECH': 'AV & Production',
                'SETUP': 'Setup & Furniture',
                'EVENTS': 'Event Coordination',
                'PARKING': 'Parking & Transport',
                'SAFETY': 'Safety & Security',
                'SERVICES': 'Event Services'
            };
            return names[stage] || stage;
        };

        /**
         * Get human-readable document name
         * @param {String} docType - Document type code
         * @returns {String}
         */
        self.getDocumentName = function(docType) {
            var names = {
                'ALCOHOL_PERMIT': 'Alcohol Service Permit',
                'COI': 'Certificate of Insurance',
                'SITE_PLAN': 'Site Plan',
                'NOISE_PERMIT': 'Noise Permit',
                'VENDOR_LICENSE': 'Vendor License',
                'TRAFFIC_PLAN': 'Traffic Management Plan',
                'RISK_ASSESSMENT': 'Risk Assessment',
                'SECURITY_PLAN': 'Security Plan',
                'RAIN_PLAN': 'Rain/Weather Contingency Plan'
            };
            return names[docType] || docType;
        };

        /**
         * Get request item options for UI
         * @returns {Array}
         */
        self.getRequestItemOptions = function() {
            return [
                { value: 'AV_TECH', label: 'AV & Production', description: 'Projectors, screens, livestreaming, recording & audio' },
                { value: 'SETUP', label: 'Setup & Furniture', description: 'Tables, chairs, staging, tents & outdoor equipment' },
                { value: 'PARKING', label: 'Parking & Transport', description: 'Reserved parking, validation, valet & shuttle' },
                { value: 'SAFETY', label: 'Safety & Security', description: 'Security personnel, alcohol service & pyrotechnics' },
                { value: 'SERVICES', label: 'Event Services', description: 'Insurance, permits & special coordination' },
                { value: 'EVENTS', label: 'Event Coordination', description: 'Planning assistance, staffing & event management' }
            ];
        };
    }

})();
