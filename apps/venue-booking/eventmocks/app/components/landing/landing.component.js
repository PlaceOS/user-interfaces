/**
 * Landing Page Component
 * Home page with quick actions to request events
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .component('landingPage', {
            template: `
                <div class="landing-page">
                    <!-- Personalized Welcome Card -->
                    <div class="welcome-card" ng-if="!$ctrl.loading">
                        <div class="welcome-content">
                            <div class="welcome-header">
                                <h2>Hi {{ $ctrl.userName || 'there' }}!</h2>
                            </div>

                            <!-- Has Recent Event -->
                            <div class="welcome-message" ng-if="$ctrl.recentEvent">
                                <div class="event-status-card">
                                    <div class="status-icon" ng-class="'status-' + $ctrl.getEventStatus($ctrl.recentEvent)">
                                        <span class="material-icons" ng-if="$ctrl.getEventStatus($ctrl.recentEvent) === 'approved'">check_circle</span>
                                        <span class="material-icons" ng-if="$ctrl.getEventStatus($ctrl.recentEvent) === 'pending'">schedule</span>
                                        <span class="material-icons" ng-if="$ctrl.getEventStatus($ctrl.recentEvent) === 'rejected'">cancel</span>
                                        <span class="material-icons" ng-if="$ctrl.getEventStatus($ctrl.recentEvent) === 'draft'">edit_note</span>
                                    </div>
                                    <div class="event-status-info">
                                        <p class="status-message">
                                            Your recent event request "<strong>{{ $ctrl.recentEvent.title }}</strong>" is
                                            <span class="status-label" ng-class="'label-' + $ctrl.getEventStatus($ctrl.recentEvent)">
                                                {{ $ctrl.getStatusLabel($ctrl.recentEvent) }}
                                            </span>
                                        </p>
                                        <div class="quick-actions">
                                            <a ng-click="$ctrl.viewEventDetails($ctrl.recentEvent.id)" class="action-link primary">
                                                View Details →
                                            </a>
                                            <a ng-click="$ctrl.goToMyEvents()" class="action-link secondary">
                                                All Requests
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- No Events -->
                            <div class="welcome-message" ng-if="!$ctrl.recentEvent">
                                <div class="no-events-prompt">
                                    <p class="prompt-text">
                                        You don't have any event requests yet.
                                    </p>
                                    <p class="prompt-subtext">
                                        Get started by finding an available venue for your event!
                                    </p>
                                    <div class="prompt-actions">
                                        <a ng-click="$ctrl.goToFindVenue()" class="action-link primary large">
                                            <span class="material-icons">search</span> Search for a Venue
                                        </a>
                                        <a ng-click="$ctrl.goToRequestEvent()" class="action-link secondary large">
                                            Request Event
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="quick-actions">
                        <div class="action-card" ng-click="$ctrl.goToFindVenue()">
                            <div class="action-icon"><span class="material-icons">search</span></div>
                            <h3>Find Venue</h3>
                            <p>Search availability and see details of our venues</p>
                            <button class="btn btn-primary">Search Venues</button>
                        </div>

                        <div class="action-card" ng-click="$ctrl.goToRequestEvent()">
                            <div class="action-icon"><span class="material-icons">edit_calendar</span></div>
                            <h3>Request Event</h3>
                            <p>Submit a new event request with all requirements</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>

                        <div class="action-card" ng-click="$ctrl.goToMyEvents()">
                            <div class="action-icon"><span class="material-icons">list_alt</span></div>
                            <h3>My Events</h3>
                            <p>View and manage your submitted event requests</p>
                            <button class="btn btn-secondary">View Events</button>
                        </div>
                    </div>

                    <div class="info-section" id="how-it-works">
                        <h2>How It Works</h2>
                        <div class="steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <h4>Submit Request</h4>
                                <p>Fill out event details and select required services</p>
                            </div>
                            <div class="step">
                                <div class="step-number">2</div>
                                <h4>Upload Documents</h4>
                                <p>Provide necessary permits and insurance documents</p>
                            </div>
                            <div class="step">
                                <div class="step-number">3</div>
                                <h4>Track Approvals</h4>
                                <p>Monitor approval progress in real-time</p>
                            </div>
                            <div class="step">
                                <div class="step-number">4</div>
                                <h4>Event Confirmed</h4>
                                <p>Receive confirmation once all approvals complete</p>
                            </div>
                        </div>
                    </div>

                    <div class="approval-info">
                        <h2>Approval Departments</h2>
                        <div class="departments">
                            <div class="department-dropdown" ng-repeat="dept in $ctrl.departments">
                                <button class="department-header" ng-click="$ctrl.toggleDepartment(dept.id)">
                                    <div class="department-info">
                                        <strong>{{ dept.name }}</strong>
                                        <span>{{ dept.trigger }}</span>
                                    </div>
                                    <span class="material-icons dropdown-icon" ng-class="{'expanded': $ctrl.expandedDept === dept.id}">expand_more</span>
                                </button>
                                <div class="department-details" ng-show="$ctrl.expandedDept === dept.id">
                                    <p class="dept-description">{{ dept.description }}</p>
                                    <div class="dept-requirements">
                                        <h5>Requirements</h5>
                                        <ul>
                                            <li ng-repeat="req in dept.requirements">{{ req }}</li>
                                        </ul>
                                    </div>
                                    <div class="dept-documents">
                                        <h5>Documents & Forms</h5>
                                        <div class="document-links">
                                            <a href="#" class="document-link" ng-repeat="doc in dept.documents" ng-click="$event.preventDefault()">
                                                <span class="material-icons">description</span>
                                                <span>{{ doc }}</span>
                                                <span class="material-icons download-icon">download</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="dept-contact">
                                        <h5>Contact</h5>
                                        <p>{{ dept.contact }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            controller: LandingPageController
        });

    function LandingPageController($location, $scope, PlaceOSApiService) {
        var ctrl = this;

        ctrl.loading = true;
        ctrl.userName = null;
        ctrl.recentEvent = null;
        ctrl.expandedDept = null;

        // Department data with placeholder details
        ctrl.departments = [
            {
                id: 'venue',
                name: 'Venue Booking',
                trigger: 'All events',
                description: 'Venue Booking oversees all campus event spaces and ensures proper scheduling, setup requirements, and facility usage compliance.',
                requirements: [
                    'Complete venue reservation form',
                    'Provide expected attendance numbers',
                    'Submit event layout/floor plan',
                    'Confirm setup and teardown times'
                ],
                documents: [
                    'Venue Reservation Form.pdf',
                    'Room Setup Guidelines.pdf',
                    'Capacity Charts.pdf'
                ],
                contact: 'venue@ucla.edu | (310) 825-0000'
            },
            {
                id: 'dining',
                name: 'Catering & Dining',
                trigger: 'Food & beverages',
                description: 'Catering & Dining coordinates food service, beverage packages, dietary accommodations, and dining logistics for campus events.',
                requirements: [
                    'Submit catering request form',
                    'Confirm menu selections and dietary needs',
                    'Provide estimated guest count',
                    'Arrange service style (buffet, plated, etc.)'
                ],
                documents: [
                    'Catering Request Form.pdf',
                    'Menu Options Guide.pdf',
                    'Dietary Accommodations Form.pdf'
                ],
                contact: 'dining@ucla.edu | (310) 825-0007'
            },
            {
                id: 'av_tech',
                name: 'AV & Production',
                trigger: 'AV equipment, livestream',
                description: 'AV & Production provides technical support for sound, lighting, projection, and livestreaming needs for campus events.',
                requirements: [
                    'Complete AV request form',
                    'Specify equipment needs',
                    'Confirm technical rehearsal time',
                    'Provide presentation materials'
                ],
                documents: [
                    'AV Equipment Request.pdf',
                    'Livestream Setup Guide.pdf',
                    'Technical Specifications.pdf',
                    'Equipment Inventory List.pdf'
                ],
                contact: 'av-services@ucla.edu | (310) 825-0006'
            },
            {
                id: 'setup',
                name: 'Setup & Furniture',
                trigger: 'Large events, stage setup',
                description: 'Setup & Furniture coordinates physical setup, utilities, temporary structures, and infrastructure support for large-scale events.',
                requirements: [
                    'Submit facilities work order',
                    'Provide technical specifications',
                    'Confirm power/utility requirements',
                    'Schedule site walkthrough'
                ],
                documents: [
                    'Facilities Work Order Form.pdf',
                    'Stage Setup Request.pdf',
                    'Utility Requirements Checklist.pdf',
                    'Temporary Structure Guidelines.pdf'
                ],
                contact: 'facilities@ucla.edu | (310) 825-0003'
            },
            {
                id: 'events',
                name: 'Event Coordination',
                trigger: 'Event planning',
                description: 'Event Coordination assists with overall event planning, scheduling, vendor management, and logistics to ensure a seamless experience.',
                requirements: [
                    'Submit event coordination request',
                    'Provide event timeline and run sheet',
                    'Confirm vendor list and contacts',
                    'Review event checklist'
                ],
                documents: [
                    'Event Coordination Request.pdf',
                    'Event Timeline Template.pdf',
                    'Vendor Management Guide.pdf'
                ],
                contact: 'events@ucla.edu | (310) 825-0008'
            },
            {
                id: 'parking',
                name: 'Parking & Transport',
                trigger: 'Parking coordination',
                description: 'Parking & Transport coordinates event parking, shuttle services, and traffic management for events with significant attendance.',
                requirements: [
                    'Submit parking request form',
                    'Estimate parking needs',
                    'Coordinate shuttle service (if needed)',
                    'Plan traffic flow'
                ],
                documents: [
                    'Event Parking Request.pdf',
                    'Shuttle Service Agreement.pdf',
                    'Traffic Management Plan.pdf'
                ],
                contact: 'parking@ucla.edu | (310) 825-0005'
            },
            {
                id: 'safety',
                name: 'Safety & Security',
                trigger: 'Security, hazards, alcohol',
                description: 'Safety & Security reviews events involving hazardous materials, alcohol service, pyrotechnics, crowd control, after-hours access, or other safety-sensitive activities.',
                requirements: [
                    'Complete safety event review form',
                    'Submit security assessment request',
                    'Provide alcohol service plan (if applicable)',
                    'Confirm crowd management plan'
                ],
                documents: [
                    'Safety Event Review Form.pdf',
                    'Security Request Form.pdf',
                    'Alcohol Service Guidelines.pdf',
                    'Crowd Management Plan Template.pdf'
                ],
                contact: 'safety@ucla.edu | (310) 825-0001'
            },
            {
                id: 'services',
                name: 'Event Services',
                trigger: 'Insurance, permits, add-ons',
                description: 'Event Services handles insurance requirements, risk management, permits, and additional event add-ons to ensure proper coverage and compliance.',
                requirements: [
                    'Provide certificate of insurance',
                    'Complete risk assessment form',
                    'Identify potential hazards',
                    'Confirm vendor insurance (if applicable)'
                ],
                documents: [
                    'Insurance Requirements Guide.pdf',
                    'Risk Assessment Form.pdf',
                    'Certificate of Insurance Template.pdf',
                    'Vendor Insurance Checklist.pdf'
                ],
                contact: 'risk@ucla.edu | (310) 825-0004'
            }
        ];

        /**
         * Toggle department dropdown
         */
        ctrl.toggleDepartment = function(deptId) {
            if (ctrl.expandedDept === deptId) {
                ctrl.expandedDept = null;
            } else {
                ctrl.expandedDept = deptId;
            }
        };

        /**
         * Initialize component
         */
        ctrl.$onInit = function() {
            ctrl.loadUserData();
            ctrl.loadRecentEvent();
        };

        /**
         * Load current user data
         */
        ctrl.loadUserData = function() {
            PlaceOSApiService.getCurrentUser()
                .then(function(response) {
                    // Extract first name from full name
                    var fullName = response.data.name || '';
                    ctrl.userName = fullName.split(' ')[0];
                })
                .catch(function(error) {
                    console.error('Failed to load user', error);
                });
        };

        /**
         * Load most recent event
         */
        ctrl.loadRecentEvent = function() {
            PlaceOSApiService.getMyEvents()
                .then(function(response) {
                    var events = response.data;
                    if (events && events.length > 0) {
                        // Sort by most recent
                        events.sort(function(a, b) {
                            var timeA = new Date(a.created_at || 0).getTime();
                            var timeB = new Date(b.created_at || 0).getTime();
                            return timeB - timeA;
                        });
                        ctrl.recentEvent = events[0];
                    }
                    ctrl.loading = false;
                })
                .catch(function(error) {
                    console.error('Failed to load events', error);
                    ctrl.loading = false;
                });
        };

        /**
         * Get event status
         */
        ctrl.getEventStatus = function(event) {
            return event.extension_data && event.extension_data.workflow
                ? event.extension_data.workflow.overall_status
                : 'draft';
        };

        /**
         * Get status label
         */
        ctrl.getStatusLabel = function(event) {
            var status = ctrl.getEventStatus(event);
            var labels = {
                'draft': 'in draft',
                'pending': 'pending approval',
                'approved': 'approved',
                'rejected': 'rejected',
                'cancelled': 'cancelled'
            };
            return labels[status] || status;
        };

        /**
         * View event details
         */
        ctrl.viewEventDetails = function(eventId) {
            $location.path('/my-events/' + eventId);
        };

        /**
         * Navigation methods
         */
        ctrl.goToRequestEvent = function() {
            $location.path('/request-event');
        };

        ctrl.goToMyEvents = function() {
            $location.path('/my-events');
        };

        ctrl.goToFindVenue = function() {
            $location.path('/find-venue');
        };
    }

})();
