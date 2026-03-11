/**
 * Event Request Component
 * Multi-step form for submitting event requests
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .component('eventRequest', {
            template: `
                <div class="event-request-page">
                    <div class="page-header">
                        <h1>{{ $ctrl.isEditMode ? 'Edit Event' : 'Request Event' }}</h1>

                        <!-- Progress Bar -->
                        <div class="progress-bar-container">
                            <div class="progress-bar form-progress-bar">
                                <div class="progress-track">
                                    <div class="progress-track-fill" ng-style="$ctrl.getProgressFillStyle()"></div>
                                </div>
                                <div class="progress-step"
                                     ng-repeat="step in $ctrl.steps"
                                     ng-class="{active: $ctrl.currentStep === step.step, complete: $ctrl.currentStep > step.step}">
                                    <div class="step-circle">
                                        <span ng-if="$ctrl.currentStep <= step.step">{{ step.step }}</span>
                                        <span class="material-icons" ng-if="$ctrl.currentStep > step.step">check</span>
                                    </div>
                                    <span>{{ step.label }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Error Message -->
                    <div class="alert alert-error" ng-if="$ctrl.error">
                        {{ $ctrl.error }}
                    </div>

                    <!-- Success Message -->
                    <div class="alert alert-success" ng-if="$ctrl.success">
                        <strong>Success!</strong> {{ $ctrl.isEditMode ? 'Your event has been updated.' : 'Your event request has been submitted.' }} Redirecting...
                    </div>

                    <!-- Step 1: Event Details -->
                    <div class="form-step" ng-show="$ctrl.currentStep === 1">
                        <h2>Event Details</h2>

                        <div class="form-group">
                            <label for="er-title">Title <span class="required">*</span></label>
                            <input type="text" id="er-title" ng-model="$ctrl.eventData.title" class="form-control" placeholder="Meeting Title">
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="er-date">Date <span class="required">*</span></label>
                                <input type="date" id="er-date" ng-model="$ctrl.eventData.event_date" class="form-control">
                            </div>
                            <div class="form-group checkbox-inline">
                                <label>
                                    <input type="checkbox" ng-model="$ctrl.eventData.all_day" ng-change="$ctrl.onAllDayChange()">
                                    All Day
                                </label>
                            </div>
                        </div>

                        <div class="form-row" ng-if="!$ctrl.eventData.all_day">
                            <div class="form-group">
                                <label for="er-start-time">Start Time <span class="required">*</span></label>
                                <input type="time" id="er-start-time" ng-model="$ctrl.eventData.start_time" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="er-duration">Duration <span class="required">*</span></label>
                                <select id="er-duration" ng-model="$ctrl.eventData.duration" class="form-control">
                                    <option value="0.5">30 min</option>
                                    <option value="1">1 hour</option>
                                    <option value="1.5">1.5 hours</option>
                                    <option value="2">2 hours</option>
                                    <option value="3">3 hours</option>
                                    <option value="4">4 hours</option>
                                    <option value="6">6 hours</option>
                                    <option value="8">8 hours</option>
                                    <option value="10">10 hours</option>
                                    <option value="12">12 hours</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="er-host">Host <span class="required">*</span></label>
                            <input type="text" id="er-host" ng-model="$ctrl.eventData.organizer_name" class="form-control" placeholder="Full name">
                            <small class="help-text">Person responsible for this event</small>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="er-host-email">Host Email <span class="required">*</span></label>
                                <input type="email" id="er-host-email" ng-model="$ctrl.eventData.organizer_email" class="form-control" placeholder="email@ucla.edu">
                            </div>
                            <div class="form-group">
                                <label for="er-host-phone">Host Phone</label>
                                <input type="tel" id="er-host-phone" ng-model="$ctrl.eventData.organizer_phone" class="form-control" placeholder="(310) XXX-XXXX">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="er-attendees">Attendees</label>
                            <div class="attendee-input">
                                <input type="email" id="er-attendees" ng-model="$ctrl.newAttendee" class="form-control" placeholder="Add attendee email..." ng-keypress="$ctrl.addAttendeeOnEnter($event)">
                                <button class="btn btn-small btn-secondary" ng-click="$ctrl.addAttendee()">
                                    <span class="material-icons">person_add</span>
                                </button>
                            </div>
                            <div class="attendee-list" ng-if="$ctrl.eventData.attendees.length > 0">
                                <span class="attendee-chip" ng-repeat="a in $ctrl.eventData.attendees">
                                    {{ a }}
                                    <button ng-click="$ctrl.removeAttendee($index)"><span class="material-icons">close</span></button>
                                </span>
                            </div>
                        </div>

                        <!-- Venue Selection -->
                        <div class="form-group">
                            <label>Room / Space <span class="required">*</span></label>
                            <div class="venue-mode-options compact">
                                <div class="venue-mode-card"
                                     ng-class="{'selected': !$ctrl.eventData.needVenueAssistance}"
                                     ng-click="$ctrl.setVenueMode(false)">
                                    <div class="mode-icon"><span class="material-icons">place</span></div>
                                    <div class="mode-info">
                                        <strong>Select a venue</strong>
                                    </div>
                                </div>
                                <div class="venue-mode-card"
                                     ng-class="{'selected': $ctrl.eventData.needVenueAssistance}"
                                     ng-click="$ctrl.setVenueMode(true)">
                                    <div class="mode-icon"><span class="material-icons">support_agent</span></div>
                                    <div class="mode-info">
                                        <strong>Help me find one</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group venue-selector" ng-if="!$ctrl.eventData.needVenueAssistance">
                            <!-- Selected venue chip -->
                            <div class="selected-venue-chip" ng-if="$ctrl.selectedVenue">
                                <span class="material-icons">place</span>
                                <div class="selected-venue-info">
                                    <strong>{{ $ctrl.selectedVenue.name }}</strong>
                                    <small>{{ $ctrl.selectedVenue.building }} &middot; Capacity: {{ $ctrl.selectedVenue.capacity }}</small>
                                </div>
                                <button type="button" class="btn-clear-venue" ng-click="$ctrl.clearVenue()">
                                    <span class="material-icons">close</span>
                                </button>
                            </div>

                            <!-- Search input -->
                            <div class="venue-search-wrapper" ng-if="!$ctrl.selectedVenue">
                                <span class="material-icons venue-search-icon">search</span>
                                <label for="er-venue-search" class="sr-only">Search venues</label>
                                <input type="text"
                                       id="er-venue-search"
                                       ng-model="$ctrl.venueSearchText"
                                       ng-change="$ctrl.filterVenues()"
                                       ng-focus="$ctrl.showVenueDropdown = true"
                                       class="form-control venue-autocomplete-input"
                                       placeholder="Search venues..."
                                       autocomplete="off">

                                <!-- Dropdown -->
                                <div class="venue-dropdown" ng-show="$ctrl.showVenueDropdown">
                                    <div class="venue-dropdown-item"
                                         ng-repeat="v in $ctrl.filteredVenues | limitTo:8"
                                         ng-click="$ctrl.selectVenue(v)">
                                        <span class="material-icons venue-dropdown-icon">place</span>
                                        <div class="venue-dropdown-info">
                                            <strong>{{ v.name }}</strong>
                                            <small>{{ v.building }} &middot; {{ v.type }} &middot; Cap: {{ v.capacity }}</small>
                                        </div>
                                    </div>
                                    <div class="venue-dropdown-empty" ng-if="$ctrl.filteredVenues.length === 0">
                                        No venues match your search
                                    </div>
                                    <a href="#!/find-venue" target="_blank" class="venue-dropdown-footer">
                                        <span class="material-icons">open_in_new</span> Browse all venues
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div ng-if="$ctrl.eventData.needVenueAssistance">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="er-capacity">Expected Capacity <span class="required">*</span></label>
                                    <input type="number" id="er-capacity" ng-model="$ctrl.eventData.attendance_count" class="form-control" min="1" placeholder="Number of attendees">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="er-venue-prefs">Venue Preferences</label>
                                <textarea id="er-venue-prefs" ng-model="$ctrl.eventData.venue_preferences" class="form-control" rows="2" placeholder="Indoor/outdoor, location, accessibility requirements..."></textarea>
                            </div>
                        </div>

                        <!-- Catering -->
                        <div class="form-group">
                            <label>
                                <input type="checkbox" ng-model="$ctrl.eventData.needs_catering">
                                Catering Required
                            </label>
                        </div>
                        <div ng-if="$ctrl.eventData.needs_catering" class="catering-section">
                            <div class="form-group">
                                <label for="er-catering-notes">Catering Notes</label>
                                <textarea id="er-catering-notes" ng-model="$ctrl.eventData.catering_notes" class="form-control" rows="2" placeholder="Dietary requirements, menu preferences, headcount for catering..."></textarea>
                            </div>
                        </div>

                        <!-- Setup & Breakdown -->
                        <div class="form-row">
                            <div class="form-group">
                                <label for="er-setup-duration">Setup Duration</label>
                                <select id="er-setup-duration" ng-model="$ctrl.eventData.setup_time" class="form-control">
                                    <option value="0">None</option>
                                    <option value="5">5 min</option>
                                    <option value="10">10 min</option>
                                    <option value="15">15 min</option>
                                    <option value="30">30 min</option>
                                    <option value="60">1 hour</option>
                                    <option value="120">2 hours</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="er-breakdown-duration">Breakdown Duration</label>
                                <select id="er-breakdown-duration" ng-model="$ctrl.eventData.breakdown_time" class="form-control">
                                    <option value="0">None</option>
                                    <option value="5">5 min</option>
                                    <option value="10">10 min</option>
                                    <option value="15">15 min</option>
                                    <option value="30">30 min</option>
                                    <option value="60">1 hour</option>
                                    <option value="120">2 hours</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="er-description">Description</label>
                            <textarea id="er-description" ng-model="$ctrl.eventData.description" class="form-control" rows="3" placeholder="Describe your event"></textarea>
                        </div>
                    </div>

                    <!-- Step 2: Services & Requirements -->
                    <div class="form-step" ng-show="$ctrl.currentStep === 2">
                        <h2>Event Requirements</h2>

                        <div class="form-group">
                            <label>Select Required Services:</label>
                            <div class="service-cards-grid">
                                <div class="service-card"
                                     ng-repeat="option in $ctrl.filteredRequestItems"
                                     ng-class="{
                                         'disabled': option.disabled,
                                         'required-service': option.required,
                                         'selected': $ctrl.isItemSelected(option.value) || option.required,
                                         'expanded': $ctrl.expandedService === option.value
                                     }"
                                     ng-click="!option.disabled && $ctrl.selectService(option)">
                                    <div class="service-card-header">
                                        <div class="service-card-checkbox">
                                            <span class="material-icons" ng-if="$ctrl.isItemSelected(option.value) || option.required">check_box</span>
                                            <span class="material-icons" ng-if="!$ctrl.isItemSelected(option.value) && !option.required">check_box_outline_blank</span>
                                        </div>
                                        <div class="service-card-icon">
                                            <span class="material-icons">{{ $ctrl.getServiceIcon(option.value) }}</span>
                                        </div>
                                        <div class="service-card-info">
                                            <strong>{{ option.label }}</strong>
                                            <small>{{ option.description }}</small>
                                        </div>
                                        <div class="service-card-badges">
                                            <span class="service-badge required-badge" ng-if="option.required">Required</span>
                                            <span class="service-badge restricted-badge" ng-if="option.disabled">Restricted</span>
                                        </div>
                                        <div class="service-card-expand" ng-if="$ctrl.isItemSelected(option.value) && $ctrl.hasServiceOptions(option.value)">
                                            <span class="material-icons">{{ $ctrl.expandedService === option.value ? 'expand_less' : 'expand_more' }}</span>
                                        </div>
                                    </div>
                                    <small class="restriction-reason" ng-if="option.disabledReason">{{ option.disabledReason }}</small>
                                    <small class="required-reason" ng-if="option.requiredReason">{{ option.requiredReason }}</small>
                                </div>
                            </div>
                        </div>

                        <!-- Service Details Panel -->
                        <div class="service-details-panel" ng-if="$ctrl.expandedService && $ctrl.isItemSelected($ctrl.expandedService)">
                            <div class="service-details-header">
                                <span class="material-icons">{{ $ctrl.getServiceIcon($ctrl.expandedService) }}</span>
                                <h3>{{ $ctrl.getServiceLabel($ctrl.expandedService) }} Options</h3>
                                <button class="btn-icon" ng-click="$ctrl.closeServiceDetails(); $event.stopPropagation()">
                                    <span class="material-icons">close</span>
                                </button>
                            </div>

                            <!-- AV & Production Options -->
                            <div class="service-options" ng-if="$ctrl.expandedService === 'AV_TECH'">
                                <div class="option-group">
                                    <label>AV Equipment:</label>
                                    <div class="option-checkboxes">
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.av_tech.projector">
                                            <span>Projector & Screen <small class="option-price">from $250</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.av_tech.monitors">
                                            <span>Confidence Monitor <small class="option-price">from $200</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.av_tech.microphones">
                                            <span>Additional Microphone <small class="option-price">$200</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.av_tech.speakers">
                                            <span>Portable PA System <small class="option-price">$125</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.av_tech.laptop">
                                            <span>Laptop Rental (Mac or PC) <small class="option-price">$63</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.av_tech.videoConference">
                                            <span>Web Conferencing (camera + speakerphone) <small class="option-price">$125</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.av_tech.videoRecording">
                                            <span>Videography <small class="option-price">$125</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.av_tech.livestream">
                                            <span>Live Streaming <small class="option-price">$125</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.av_tech.overflowStream">
                                            <span>Overflow Streaming to Lobby <small class="option-price">$156</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.av_tech.videoWall">
                                            <span>Video Wall (3x3, 1080p per screen) <small class="option-price">$63</small></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="option-group">
                                    <label for="er-av-staffing">AV Staffing:</label>
                                    <select id="er-av-staffing" class="form-control" ng-model="$ctrl.serviceOptions.av_tech.staffing">
                                        <option value="">No staffing needed</option>
                                        <option value="operator">AV Operator ($50/hr)</option>
                                        <option value="lighting">AV Lighting Operator ($60/hr)</option>
                                        <option value="technician">AV Technician ($75/hr, min 4hrs)</option>
                                        <option value="director">AV Technical Director (10-hr day, $950)</option>
                                        <option value="setup_test">AV Setup & Test ($500)</option>
                                    </select>
                                </div>
                                <div class="option-group" ng-if="$ctrl.serviceOptions.av_tech.livestream">
                                    <label for="er-livestream-platform">Livestream Platform:</label>
                                    <select id="er-livestream-platform" class="form-control" ng-model="$ctrl.serviceOptions.av_tech.livestreamPlatform">
                                        <option value="">Select platform...</option>
                                        <option value="youtube">YouTube Live</option>
                                        <option value="zoom">Zoom Webinar</option>
                                        <option value="teams">Microsoft Teams Live</option>
                                        <option value="custom">Custom RTMP</option>
                                    </select>
                                </div>
                                <div class="option-group">
                                    <label for="er-av-notes">AV Notes:</label>
                                    <textarea id="er-av-notes" class="form-control" ng-model="$ctrl.serviceOptions.av_tech.notes" rows="2" placeholder="Specific equipment specs, setup timing, cable runs..."></textarea>
                                </div>
                            </div>

                            <!-- Setup & Furniture Options -->
                            <div class="service-options" ng-if="$ctrl.expandedService === 'SETUP'">
                                <div class="option-group">
                                    <label>Tables:</label>
                                    <div class="option-checkboxes">
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.setup.roundTables">
                                            <span>Round Tables (42"–72") <small class="option-price">from $8</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.setup.rectTables">
                                            <span>Rectangular Tables (6'–8') <small class="option-price">from $15</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.setup.seminarTables">
                                            <span>Seminar / Classroom Tables (6'x18") <small class="option-price">$10</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.setup.cocktailTables">
                                            <span>Cocktail Tables (standing or seated) <small class="option-price">from $10</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.setup.buffetTables">
                                            <span>Buffet Tables (6'–18') <small class="option-price">included</small></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="option-group">
                                    <label>Other Furniture & Equipment:</label>
                                    <div class="option-checkboxes">
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.setup.chairs">
                                            <span>Additional Chairs</span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.setup.registrationTable">
                                            <span>Registration Table + 4 Chairs + Wastebaskets <small class="option-price">included</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.setup.podium">
                                            <span>Acrylic Podium <small class="option-price">$150</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.setup.bar">
                                            <span>Bar (6-ft or 12-ft) <small class="option-price">included</small></span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.setup.stage">
                                            <span>Stage / Platform</span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.setup.tent">
                                            <span>Tent / Canopy (outdoor)</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-row" ng-if="$ctrl.serviceOptions.setup.roundTables || $ctrl.serviceOptions.setup.rectTables || $ctrl.serviceOptions.setup.seminarTables || $ctrl.serviceOptions.setup.cocktailTables">
                                    <div class="form-group">
                                        <label for="er-table-count">Number of Tables:</label>
                                        <input type="number" id="er-table-count" class="form-control" ng-model="$ctrl.serviceOptions.setup.tableCount" min="1" placeholder="Qty">
                                    </div>
                                    <div class="form-group" ng-if="$ctrl.serviceOptions.setup.chairs">
                                        <label for="er-chair-count">Number of Chairs:</label>
                                        <input type="number" id="er-chair-count" class="form-control" ng-model="$ctrl.serviceOptions.setup.chairCount" min="1" placeholder="Qty">
                                    </div>
                                </div>
                                <div class="option-group">
                                    <label for="er-setup-notes">Layout / Setup Notes:</label>
                                    <textarea id="er-setup-notes" class="form-control" ng-model="$ctrl.serviceOptions.setup.notes" rows="2" placeholder="Room layout (banquet, classroom, theatre, U-shape...), specific positioning..."></textarea>
                                </div>
                            </div>

                            <!-- Parking & Transport Options -->
                            <div class="service-options" ng-if="$ctrl.expandedService === 'PARKING'">
                                <div class="option-group">
                                    <label>Parking Services:</label>
                                    <div class="option-checkboxes">
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.parking.reserved">
                                            <span>Reserved Parking Spaces</span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.parking.validation">
                                            <span>Parking Validation</span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.parking.valet">
                                            <span>Valet Parking</span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.parking.shuttleService">
                                            <span>Shuttle Service</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group" ng-if="$ctrl.serviceOptions.parking.reserved">
                                        <label for="er-reserved-spaces">Reserved Spaces:</label>
                                        <input type="number" id="er-reserved-spaces" class="form-control" ng-model="$ctrl.serviceOptions.parking.reservedCount" min="1" placeholder="Qty">
                                    </div>
                                    <div class="form-group" ng-if="$ctrl.serviceOptions.parking.validation">
                                        <label for="er-validations">Validations Needed:</label>
                                        <input type="number" id="er-validations" class="form-control" ng-model="$ctrl.serviceOptions.parking.validationCount" min="1" placeholder="Qty">
                                    </div>
                                </div>
                                <div class="option-group">
                                    <label for="er-parking-notes">Parking Notes:</label>
                                    <textarea id="er-parking-notes" class="form-control" ng-model="$ctrl.serviceOptions.parking.notes" rows="2" placeholder="Guest arrival times, loading dock access, special vehicle needs..."></textarea>
                                </div>
                            </div>

                            <!-- Safety & Security Options -->
                            <div class="service-options" ng-if="$ctrl.expandedService === 'SAFETY'">
                                <div class="option-group">
                                    <label>Safety & Security Needs:</label>
                                    <div class="option-checkboxes">
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.safety.doorSecurity">
                                            <span>Door / Entry Security</span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.safety.crowdControl">
                                            <span>Crowd Control</span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.safety.patrolling">
                                            <span>Patrolling Security</span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.safety.alcohol">
                                            <span>Alcohol Service (requires permit)</span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.safety.pyrotechnics">
                                            <span>Fireworks / Pyrotechnics</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="er-security-personnel">Estimated Security Personnel:</label>
                                    <input type="number" id="er-security-personnel" class="form-control" ng-model="$ctrl.serviceOptions.safety.personnelCount" min="1" placeholder="Number of personnel">
                                </div>
                                <div class="option-group">
                                    <label for="er-safety-notes">Safety Notes:</label>
                                    <textarea id="er-safety-notes" class="form-control" ng-model="$ctrl.serviceOptions.safety.notes" rows="2" placeholder="VIPs, hazards, crowd size, special security concerns..."></textarea>
                                </div>
                            </div>

                            <!-- Event Services Options -->
                            <div class="service-options" ng-if="$ctrl.expandedService === 'SERVICES'">
                                <div class="option-group">
                                    <label for="er-event-package">Event Package:</label>
                                    <select id="er-event-package" class="form-control" ng-model="$ctrl.serviceOptions.services.package">
                                        <option value="">No package — a la carte only</option>
                                        <option value="conference">Conference Package — Auditorium + Lobby, 4-8hrs ($1,750)</option>
                                        <option value="symposium">Symposium Package — Auditorium + Lobby, up to 4hrs ($938)</option>
                                        <option value="workshop">Workshop Package — Presentation Space, 4-8hrs ($1,063)</option>
                                        <option value="seminar">Seminar Package — Auditorium Only, up to 4hrs ($719)</option>
                                        <option value="meeting">Meeting Package — Executive Conference Room, up to 4hrs ($313)</option>
                                    </select>
                                </div>
                                <div class="option-group">
                                    <label>Insurance & Permits:</label>
                                    <div class="option-checkboxes">
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.services.liability">
                                            <span>General Liability Insurance</span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.services.eventCancellation">
                                            <span>Event Cancellation Insurance</span>
                                        </label>
                                        <label class="option-checkbox">
                                            <input type="checkbox" ng-model="$ctrl.serviceOptions.services.liquorLiability">
                                            <span>Liquor Liability Insurance</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="option-group" ng-if="$ctrl.serviceOptions.services.liability || $ctrl.serviceOptions.services.eventCancellation || $ctrl.serviceOptions.services.liquorLiability">
                                    <label for="er-coverage">Coverage Amount:</label>
                                    <select id="er-coverage" class="form-control" ng-model="$ctrl.serviceOptions.services.coverage">
                                        <option value="">Select coverage...</option>
                                        <option value="1m">$1 Million</option>
                                        <option value="2m">$2 Million</option>
                                        <option value="5m">$5 Million</option>
                                    </select>
                                </div>
                                <div class="option-group">
                                    <label for="er-services-notes">Services Notes:</label>
                                    <textarea id="er-services-notes" class="form-control" ng-model="$ctrl.serviceOptions.services.notes" rows="2" placeholder="Special permits, vendor coordination, after-hours needs..."></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="er-attendance">Expected Attendance</label>
                                <input type="number" id="er-attendance" ng-model="$ctrl.eventData.attendance_count" ng-change="$ctrl.updateApprovalPreview()" class="form-control" min="1">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>
                                    <input type="checkbox" ng-model="$ctrl.eventData.is_outdoor" ng-change="$ctrl.updateApprovalPreview()">
                                    Outdoor Event
                                </label>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input type="checkbox" ng-model="$ctrl.eventData.is_major_event" ng-change="$ctrl.updateApprovalPreview()">
                                    Major Event (500+ attendees or high-profile)
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="er-additional-notes">Additional Notes</label>
                            <textarea id="er-additional-notes" ng-model="$ctrl.eventData.special_requirements" class="form-control" rows="4" placeholder="Any other details, special requirements, accessibility needs, or questions for the events team..."></textarea>
                        </div>

                        <!-- Itemized Quote -->
                        <div class="quote-preview" ng-if="$ctrl.quote && $ctrl.quote.lineItems.length > 0">
                            <h3><span class="material-icons">receipt_long</span> Estimated Costs</h3>
                            <div class="quote-content">
                                <div class="quote-items">
                                    <div class="quote-item" ng-repeat="item in $ctrl.quote.lineItems">
                                        <div class="quote-item-info">
                                            <span class="item-name">{{ item.name }}</span>
                                            <span class="item-desc" ng-if="item.description">{{ item.description }}</span>
                                        </div>
                                        <span class="item-price">{{ $ctrl.formatCurrency(item.total) }}</span>
                                    </div>
                                </div>
                                <div class="quote-subtotal">
                                    <span>Subtotal</span>
                                    <span>{{ $ctrl.formatCurrency($ctrl.quote.subtotal) }}</span>
                                </div>
                                <div class="quote-fees">
                                    <div class="quote-fee" ng-repeat="fee in $ctrl.quote.fees">
                                        <span>{{ fee.name }}</span>
                                        <span>{{ $ctrl.formatCurrency(fee.amount) }}</span>
                                    </div>
                                </div>
                                <div class="quote-total">
                                    <span>Estimated Total</span>
                                    <span>{{ $ctrl.formatCurrency($ctrl.quote.total) }}</span>
                                </div>

                                <div class="quote-deposit-notice">
                                    <span class="material-icons">mail_outline</span>
                                    <div>
                                        <p>Once your event is approved, you will receive an email with a detailed invoice and instructions for submitting your deposit. No payment is required at this time.</p>
                                    </div>
                                </div>

                                <p class="quote-disclaimer">
                                    <span class="material-icons">info</span>
                                    Prices are estimates based on UCLA internal rates. Final pricing may vary depending on actual service requirements, event duration, and venue availability.
                                </p>
                            </div>
                        </div>

                        <!-- Approval Preview -->
                        <div class="approval-preview" ng-if="$ctrl.approvalPreview">
                            <h3><span class="material-icons">assignment</span> Approval Preview</h3>
                            <div class="preview-content">
                                <div class="preview-section">
                                    <strong>Required Approvals</strong>
                                    <div class="approval-stages-list">
                                        <span class="approval-stage-chip" ng-repeat="stage in $ctrl.approvalPreview.required_stages">
                                            <span class="material-icons">{{ $ctrl.getServiceIcon(stage) || 'check_circle' }}</span>
                                            {{ $ctrl.getStageName(stage) }}
                                        </span>
                                    </div>
                                </div>
                                <div class="preview-section" ng-if="$ctrl.approvalPreview.required_documents.length > 0">
                                    <strong>Required Documents</strong>
                                    <div class="approval-docs-list">
                                        <span class="approval-doc-chip" ng-repeat="doc in $ctrl.approvalPreview.required_documents">
                                            <span class="material-icons">description</span>
                                            {{ $ctrl.getDocumentName(doc) }}
                                        </span>
                                    </div>
                                </div>
                                <div class="preview-section preview-sla">
                                    <span class="material-icons">schedule</span>
                                    <span>Estimated approval time: <strong>{{ $ctrl.approvalPreview.sla_hours }} hours</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Step 3: Documents -->
                    <div class="form-step" ng-show="$ctrl.currentStep === 3">
                        <h2>Upload Documents</h2>
                        <p class="help-text">Upload required documents now or you can upload them later from your event details page.</p>

                        <div class="document-upload" ng-if="$ctrl.documents.length > 0">
                            <div class="document-item" ng-repeat="doc in $ctrl.documents">
                                <div class="document-info">
                                    <strong>{{ doc.name }}</strong>
                                    <span class="required-badge" ng-if="doc.required">Required</span>
                                </div>

                                <div class="upload-section" ng-if="!doc.uploaded">
                                    <label for="file-{{ doc.type }}" class="btn btn-secondary">Choose File</label>
                                    <input type="file"
                                           id="file-{{ doc.type }}"
                                           style="display: none;"
                                           accept=".pdf,.jpg,.jpeg,.png"
                                           onchange="angular.element(this).scope().$ctrl.onFileSelected(this.getAttribute('data-doc-type'), this.files); angular.element(this).scope().$apply()"
                                           data-doc-type="{{ doc.type }}">
                                </div>

                                <div class="uploaded-section" ng-if="doc.uploaded && doc.file">
                                    <span class="file-name"><span class="material-icons">check_circle</span> {{ doc.file.name }}</span>
                                    <button class="btn-icon" ng-click="$ctrl.removeDocument(doc.type)"><span class="material-icons">close</span></button>
                                </div>
                            </div>
                        </div>

                        <div class="no-documents" ng-if="$ctrl.documents.length === 0">
                            <p>No documents required for this event based on your selections.</p>
                        </div>
                    </div>

                    <!-- Navigation Buttons -->
                    <div class="form-navigation">
                        <button class="btn btn-secondary" ng-click="$ctrl.cancel()" ng-if="$ctrl.currentStep === 1">Cancel</button>
                        <button class="btn btn-secondary" ng-click="$ctrl.previousStep()" ng-if="$ctrl.currentStep > 1">Previous</button>

                        <div class="spacer"></div>

                        <button class="btn btn-primary" ng-click="$ctrl.nextStep()" ng-if="$ctrl.currentStep < $ctrl.totalSteps">
                            Next
                        </button>
                        <button class="btn btn-primary" ng-click="$ctrl.submitEvent()" ng-if="$ctrl.currentStep === $ctrl.totalSteps" ng-disabled="$ctrl.loading">
                            <span ng-if="!$ctrl.loading">{{ $ctrl.isEditMode ? 'Save Changes' : 'Submit Event Request' }}</span>
                            <span ng-if="$ctrl.loading">{{ $ctrl.isEditMode ? 'Saving...' : 'Submitting...' }}</span>
                        </button>
                    </div>
                </div>
            `,
            controller: EventRequestController
        });
    EventRequestController.$inject = [
        '$location',
        '$routeParams',
        '$scope',
        '$timeout',
        '$q',
        'PlaceOSApiService',
        'PolicyEngineService',
        'ApprovalWorkflowService',
        'DocumentManagementService',
        'AuthService',
        'PaymentService',
        'DatabaseService'
    ];

    function EventRequestController(
        $location,
        $routeParams,
        $scope,
        $timeout,
        $q,
        PlaceOSApiService,
        PolicyEngineService,
        ApprovalWorkflowService,
        DocumentManagementService,
        AuthService,
        PaymentService,
        DatabaseService
    ) {
        var ctrl = this;

        // Form state
        ctrl.currentStep = 1;
        ctrl.totalSteps = 3;
        ctrl.steps = [
            { step: 1, label: 'Event Details' },
            { step: 2, label: 'Services & Requirements' },
            { step: 3, label: 'Documents' }
        ];
        ctrl.getProgressRatio = function() {
            if (ctrl.totalSteps <= 1) {
                return 0;
            }
            return (ctrl.currentStep - 1) / (ctrl.totalSteps - 1);
        };

        ctrl.getProgressFillStyle = function() {
            var ratio = ctrl.getProgressRatio();
            var clamped = Math.max(0, Math.min(1, ratio));
            return {
                width: (clamped * 100) + '%'
            };
        };
        ctrl.loading = false;
        ctrl.error = null;
        ctrl.success = false;
        ctrl.isEditMode = false;
        ctrl.editEventId = null;

        // Quote
        ctrl.quote = null;

        // Venue selector
        ctrl.allVenues = [];
        ctrl.filteredVenues = [];
        ctrl.selectedVenue = null;
        ctrl.venueSearchText = '';
        ctrl.showVenueDropdown = false;

        // Form data
        ctrl.eventData = {
            title: '',
            event_date: null,
            start_time: '09:00',
            event_start: null,
            event_end: null,
            duration: '2',
            all_day: false,
            venue: '',
            venue_id: null,
            needVenueAssistance: false,
            venue_preferences: '',
            organizer_name: '',
            organizer_email: '',
            organizer_phone: '',
            attendees: [],
            description: '',
            needs_catering: false,
            catering_notes: '',
            setup_time: '0',
            breakdown_time: '0',
            request_items: [],
            attendance_count: null,
            is_outdoor: false,
            is_major_event: false,
            special_requirements: ''
        };
        ctrl.newAttendee = '';

        // Approval preview
        ctrl.approvalPreview = null;
        ctrl.documents = [];

        // Optional services
        ctrl.optionalServices = {
            uploadPresentation: false,
            digitalSignage: false
        };
        ctrl.presentationFile = null;
        ctrl.signageData = {
            playlistName: ''
        };
        ctrl.signageFiles = [];
        ctrl.uploadingDocs = {};

        // Request item options
        ctrl.requestItemOptions = PolicyEngineService.getRequestItemOptions();
        ctrl.filteredRequestItems = ctrl.requestItemOptions;
        ctrl.currentUser = null;
        ctrl.expandedService = null;

        // Service options for detailed configuration
        ctrl.serviceOptions = {
            av_tech: { microphones: false, projector: false, speakers: false, videoRecording: false, livestream: false, videoConference: false, monitors: false, laptop: false, overflowStream: false, videoWall: false, staffing: '', livestreamPlatform: '', notes: '' },
            setup: { roundTables: false, rectTables: false, seminarTables: false, cocktailTables: false, buffetTables: false, chairs: false, registrationTable: false, podium: false, bar: false, stage: false, tent: false, tableCount: null, chairCount: null, notes: '' },
            parking: { reserved: false, validation: false, valet: false, shuttleService: false, reservedCount: null, validationCount: null, notes: '' },
            safety: { doorSecurity: false, crowdControl: false, patrolling: false, alcohol: false, pyrotechnics: false, personnelCount: null, notes: '' },
            services: { package: '', liability: false, eventCancellation: false, liquorLiability: false, coverage: '', notes: '' }
        };

        // Service icons mapping
        ctrl.serviceIcons = {
            'VENUE': 'location_on',
            'DINING': 'restaurant',
            'AV_TECH': 'videocam',
            'SETUP': 'handyman',
            'PARKING': 'local_parking',
            'SAFETY': 'security',
            'SERVICES': 'verified_user',
            'EVENTS': 'event'
        };

        // Service labels mapping
        ctrl.serviceLabels = {
            'AV_TECH': 'AV & Production',
            'SETUP': 'Setup & Furniture',
            'PARKING': 'Parking & Transport',
            'SAFETY': 'Safety & Security',
            'SERVICES': 'Event Services',
            'EVENTS': 'Event Coordination'
        };

        /**
         * Initialize component
         */
        ctrl.$onInit = function() {
            // Check authentication
            if (!AuthService.isAuthenticated()) {
                $location.path('/login');
                return;
            }

            // Get current user
            ctrl.currentUser = AuthService.getCurrentUser();

            // Pre-fill organizer info from current user
            if (ctrl.currentUser) {
                ctrl.eventData.organizer_name = ctrl.currentUser.name;
                ctrl.eventData.organizer_email = ctrl.currentUser.email;
            }

            // Load all venues
            ctrl.loadVenues();

            // Check if in edit mode (editing existing event)
            if ($routeParams.eventId) {
                ctrl.isEditMode = true;
                ctrl.editEventId = $routeParams.eventId;
                ctrl.loadExistingEvent($routeParams.eventId);
            }
            // Check if coming from venue search with pre-selected venue
            else if ($routeParams.venueId) {
                ctrl.loadPreselectedVenue($routeParams.venueId, $routeParams.date, $routeParams.startTime);
            }

            ctrl.updateApprovalPreview();
            ctrl.updateFilteredServices();

            // Re-calculate quote when service options change
            $scope.$watch(function() { return ctrl.serviceOptions; }, function() {
                ctrl.updateQuote();
            }, true);

            // Close venue dropdown when clicking outside
            angular.element(document).on('click', function(event) {
                var target = angular.element(event.target);
                if (!target.closest('.venue-selector').length) {
                    ctrl.showVenueDropdown = false;
                    $scope.$apply();
                }
            });
        };

        /**
         * Load existing event for editing
         */
        ctrl.loadExistingEvent = function(eventId) {
            ctrl.loading = true;

            PlaceOSApiService.getEvent(eventId)
                .then(function(response) {
                    var event = response.data;
                    ctrl.populateFormFromEvent(event);
                    ctrl.loading = false;
                })
                .catch(function(error) {
                    console.error('Failed to load event:', error);
                    ctrl.error = 'Failed to load event for editing';
                    ctrl.loading = false;
                });
        };

        /**
         * Populate form data from existing event
         */
        ctrl.populateFormFromEvent = function(event) {
            // Basic event details
            ctrl.eventData.title = event.title;
            ctrl.eventData.description = event.description || '';

            // Parse dates into separate date/time fields
            if (event.event_start) {
                var startDate = new Date(event.event_start);
                ctrl.eventData.event_date = startDate.getFullYear() + '-' + ('0' + (startDate.getMonth() + 1)).slice(-2) + '-' + ('0' + startDate.getDate()).slice(-2);
                var hours = ('0' + startDate.getHours()).slice(-2);
                var mins = ('0' + startDate.getMinutes()).slice(-2);
                ctrl.eventData.start_time = hours + ':' + mins;
            }

            // Calculate duration from start and end
            if (event.event_start && event.event_end) {
                var durationMs = event.event_end - event.event_start;
                ctrl.eventData.duration = String(Math.round(durationMs / (60 * 60 * 1000)));
            }

            // Restore new fields from extension data
            var ext2 = event.extension_data || {};
            ctrl.eventData.all_day = ext2.all_day || false;
            ctrl.eventData.attendees = ext2.attendees || [];
            ctrl.eventData.needs_catering = ext2.needs_catering || false;
            ctrl.eventData.catering_notes = ext2.catering_notes || '';
            ctrl.eventData.setup_time = ext2.setup_time || '0';
            ctrl.eventData.breakdown_time = ext2.breakdown_time || '0';

            // Extension data
            var ext = event.extension_data || {};

            // Venue
            ctrl.eventData.venue = ext.venue || '';
            ctrl.eventData.venue_id = ext.venue_id || null;
            ctrl.eventData.needVenueAssistance = ext.need_venue_assistance || false;
            ctrl.eventData.venue_preferences = ext.venue_preferences || '';

            // If venue is set, update the search text
            if (ctrl.eventData.venue) {
                ctrl.venueSearchText = ctrl.eventData.venue;
            }

            // Organizer info
            if (ext.organizer) {
                ctrl.eventData.organizer_name = ext.organizer.name || '';
                ctrl.eventData.organizer_email = ext.organizer.email || '';
                ctrl.eventData.organizer_phone = ext.organizer.phone || '';
            }

            // Requirements
            ctrl.eventData.request_items = ext.request_items || [];
            ctrl.eventData.attendance_count = ext.attendance_count || null;
            ctrl.eventData.is_outdoor = ext.is_outdoor || false;
            ctrl.eventData.is_major_event = ext.is_major_event || false;
            ctrl.eventData.special_requirements = ext.special_requirements || '';

            // Update approval preview and filtered services
            ctrl.updateFilteredServices();
            ctrl.updateApprovalPreview();

            // Load documents if any
            if (ext.documents && ext.documents.length > 0) {
                ctrl.documents = ext.documents.map(function(doc) {
                    return {
                        type: doc.type,
                        name: doc.name,
                        required: doc.required,
                        uploaded: doc.uploaded,
                        validated: doc.validated,
                        file: null // Cannot restore file object
                    };
                });
            }
        };

        /**
         * Update filtered services based on user role and selected venue
         */
        ctrl.updateFilteredServices = function() {
            var venueName = ctrl.eventData.venue || '';
            ctrl.filteredRequestItems = AuthService.getFilteredServices(ctrl.requestItemOptions, venueName);

            // Auto-select required services based on venue
            ctrl.filteredRequestItems.forEach(function(item) {
                if (item.required && ctrl.eventData.request_items.indexOf(item.value) === -1) {
                    ctrl.eventData.request_items.push(item.value);
                }
            });
        };

        /**
         * Load all venues
         */
        ctrl.loadVenues = function() {
            PlaceOSApiService.getAllVenues()
                .then(function(response) {
                    ctrl.allVenues = response.data;
                    ctrl.filteredVenues = ctrl.allVenues;
                })
                .catch(function(error) {
                    console.error('Failed to load venues', error);
                });
        };

        /**
         * Load pre-selected venue from route params
         */
        ctrl.loadPreselectedVenue = function(venueId, date, startTime) {
            PlaceOSApiService.getVenue(venueId)
                .then(function(response) {
                    ctrl.selectVenue(response.data);

                    // Pre-fill date and time if provided
                    if (date) {
                        ctrl.eventData.event_date = date;
                    }
                    if (startTime) {
                        ctrl.eventData.start_time = startTime;
                    }
                })
                .catch(function(error) {
                    console.error('Failed to load venue', error);
                });
        };

        /**
         * Filter venues based on search text
         */
        ctrl.filterVenues = function() {
            if (!ctrl.venueSearchText) {
                ctrl.filteredVenues = ctrl.allVenues;
                ctrl.showVenueDropdown = true;
                return;
            }

            var searchLower = ctrl.venueSearchText.toLowerCase();
            ctrl.filteredVenues = ctrl.allVenues.filter(function(venue) {
                return venue.name.toLowerCase().indexOf(searchLower) !== -1 ||
                       venue.building.toLowerCase().indexOf(searchLower) !== -1;
            });
            ctrl.showVenueDropdown = true;
        };

        /**
         * Select a venue
         */
        ctrl.selectVenue = function(venue) {
            // Check if user can access this venue
            if (!AuthService.canAccessVenue(venue.name)) {
                ctrl.error = 'You do not have permission to book this venue. Please select a different venue.';
                return;
            }

            ctrl.selectedVenue = venue;
            ctrl.eventData.venue = venue.name;
            ctrl.eventData.venue_id = venue.id;
            ctrl.venueSearchText = venue.name;
            ctrl.showVenueDropdown = false;
            ctrl.error = null;

            // Update filtered services based on selected venue
            ctrl.updateFilteredServices();

            // Update quote with venue pricing
            ctrl.updateQuote();
        };

        /**
         * Clear selected venue
         */
        ctrl.clearVenue = function() {
            ctrl.selectedVenue = null;
            ctrl.eventData.venue = '';
            ctrl.eventData.venue_id = null;
            ctrl.venueSearchText = '';
            ctrl.filteredVenues = ctrl.allVenues;
            ctrl.updateQuote();
        };

        /**
         * Set venue selection mode
         */
        ctrl.setVenueMode = function(needAssistance) {
            ctrl.eventData.needVenueAssistance = needAssistance;
            ctrl.error = null;

            // Clear venue-related fields when switching modes
            if (needAssistance) {
                ctrl.eventData.venue = '';
                ctrl.eventData.venue_id = null;
                ctrl.selectedVenue = null;
                ctrl.venueSearchText = '';
            } else {
                ctrl.eventData.venue_preferences = '';
            }
        };

        /**
         * Toggle flexible dates
         */
        ctrl.toggleFlexibleDates = function() {
            if (ctrl.eventData.flexibleDates) {
                // Set default date range if not already set
                if (!ctrl.eventData.startDate) {
                    var today = new Date();
                    ctrl.eventData.startDate = today.toISOString().split('T')[0];
                }
                if (!ctrl.eventData.endDate) {
                    var weekLater = new Date();
                    weekLater.setDate(weekLater.getDate() + 7);
                    ctrl.eventData.endDate = weekLater.toISOString().split('T')[0];
                }
                if (!ctrl.eventData.startTime) {
                    ctrl.eventData.startTime = '09:00';
                }

                // Update venue availability based on date range
                ctrl.updateVenueAvailability();
            } else {
                // Reset to single date mode
                ctrl.filteredVenues = ctrl.allVenues;
            }
        };

        /**
         * Update venue availability based on date criteria
         */
        ctrl.updateVenueAvailability = function() {
            if (!ctrl.eventData.flexibleDates || !ctrl.eventData.startDate || !ctrl.eventData.endDate) {
                ctrl.filteredVenues = ctrl.allVenues;
                return;
            }

            var criteria = {
                flexibleDates: true,
                startDate: ctrl.eventData.startDate,
                endDate: ctrl.eventData.endDate,
                startTime: ctrl.eventData.startTime,
                duration: ctrl.eventData.duration
            };

            PlaceOSApiService.searchVenues(criteria)
                .then(function(response) {
                    // Merge availability info into filtered venues
                    var availabilityMap = {};
                    response.data.forEach(function(venue) {
                        availabilityMap[venue.id] = {
                            available: venue.available,
                            availableDates: venue.availableDates
                        };
                    });

                    ctrl.filteredVenues = ctrl.allVenues.map(function(venue) {
                        var v = angular.copy(venue);
                        if (availabilityMap[venue.id]) {
                            v.available = availabilityMap[venue.id].available;
                            v.availableDates = availabilityMap[venue.id].availableDates;
                        }
                        return v;
                    }).filter(function(v) {
                        return v.available;
                    });

                    $scope.$apply();
                })
                .catch(function(error) {
                    console.error('Failed to check venue availability', error);
                });
        };

        /**
         * Navigate to step
         */
        ctrl.goToStep = function(step) {
            if (step >= 1 && step <= ctrl.totalSteps) {
                ctrl.currentStep = step;
            }
        };

        /**
         * Go to next step
         */
        ctrl.nextStep = function() {
            if (ctrl.validateCurrentStep()) {
                ctrl.currentStep++;
                if (ctrl.currentStep === 2) {
                    ctrl.updateApprovalPreview();
                }
            }
        };

        /**
         * Go to previous step
         */
        ctrl.previousStep = function() {
            if (ctrl.currentStep > 1) {
                ctrl.currentStep--;
            }
        };

        /**
         * Validate current step
         */
        ctrl.validateCurrentStep = function() {
            ctrl.error = null;

            switch (ctrl.currentStep) {
                case 1: // Event Details (includes organizer info)
                    if (!ctrl.eventData.title) {
                        ctrl.error = 'Event title is required';
                        return false;
                    }
                    if (!ctrl.eventData.event_date) {
                        ctrl.error = 'Event date is required';
                        return false;
                    }
                    if (!ctrl.eventData.all_day && !ctrl.eventData.start_time) {
                        ctrl.error = 'Start time is required';
                        return false;
                    }
                    if (!ctrl.eventData.organizer_name) {
                        ctrl.error = 'Host name is required';
                        return false;
                    }
                    if (!ctrl.eventData.organizer_email) {
                        ctrl.error = 'Host email is required';
                        return false;
                    }
                    // Venue validation based on selection mode
                    if (!ctrl.eventData.needVenueAssistance && !ctrl.eventData.venue) {
                        ctrl.error = 'Room / Space is required';
                        return false;
                    }
                    if (ctrl.eventData.needVenueAssistance && !ctrl.eventData.attendance_count) {
                        ctrl.error = 'Expected capacity is required when requesting venue assistance';
                        return false;
                    }
                    break;

                case 2: // Services & Requirements
                    // Optional - can proceed without requirements
                    break;

                case 3: // Documents
                    // Optional - documents can be uploaded later
                    break;
            }

            return true;
        };

        /**
         * Toggle request item selection
         */
        ctrl.toggleRequestItem = function(item) {
            var index = ctrl.eventData.request_items.indexOf(item);
            if (index === -1) {
                ctrl.eventData.request_items.push(item);
            } else {
                ctrl.eventData.request_items.splice(index, 1);
            }
            ctrl.updateApprovalPreview();
        };

        /**
         * Check if request item is selected
         */
        ctrl.isItemSelected = function(item) {
            return ctrl.eventData.request_items.indexOf(item) !== -1;
        };

        /**
         * Select/toggle a service and expand its options
         */
        ctrl.selectService = function(option) {
            if (option.disabled) return;

            // Toggle selection
            if (!option.required) {
                ctrl.toggleRequestItem(option.value);
            }

            // If now selected (or already was), expand the options
            if (ctrl.isItemSelected(option.value) || option.required) {
                if (ctrl.expandedService === option.value) {
                    ctrl.expandedService = null; // Collapse if clicking same one
                } else {
                    ctrl.expandedService = option.value;
                }
            } else {
                // If deselected, close the panel
                if (ctrl.expandedService === option.value) {
                    ctrl.expandedService = null;
                }
            }
        };

        /**
         * Close service details panel
         */
        ctrl.closeServiceDetails = function() {
            ctrl.expandedService = null;
        };

        /**
         * Get service icon
         */
        ctrl.getServiceIcon = function(serviceValue) {
            return ctrl.serviceIcons[serviceValue] || 'check_circle';
        };

        /**
         * Get service label
         */
        ctrl.getServiceLabel = function(serviceValue) {
            return ctrl.serviceLabels[serviceValue] || serviceValue;
        };

        /**
         * Get human-readable stage name (for approval preview)
         */
        ctrl.getStageName = function(stageCode) {
            return PolicyEngineService.getStageName(stageCode);
        };

        /**
         * Get human-readable document name (for approval preview)
         */
        ctrl.getDocumentName = function(docCode) {
            return PolicyEngineService.getDocumentName(docCode);
        };

        /**
         * Check if service has configurable options
         */
        ctrl.hasServiceOptions = function(serviceValue) {
            return ['AV_TECH', 'SETUP', 'PARKING', 'SAFETY', 'SERVICES'].indexOf(serviceValue) !== -1;
        };

        /**
         * Add attendee email to list
         */
        ctrl.addAttendee = function() {
            var email = (ctrl.newAttendee || '').trim();
            if (!email) return;
            // Simple email validation
            if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
                ctrl.error = 'Please enter a valid email address';
                return;
            }
            if (ctrl.eventData.attendees.indexOf(email) !== -1) {
                ctrl.error = 'This attendee has already been added';
                return;
            }
            ctrl.eventData.attendees.push(email);
            ctrl.newAttendee = '';
            ctrl.error = null;
        };

        /**
         * Remove attendee by index
         */
        ctrl.removeAttendee = function(index) {
            ctrl.eventData.attendees.splice(index, 1);
        };

        /**
         * Add attendee on Enter key
         */
        ctrl.addAttendeeOnEnter = function($event) {
            if ($event.keyCode === 13) {
                $event.preventDefault();
                ctrl.addAttendee();
            }
        };

        /**
         * Handle all-day toggle
         */
        ctrl.onAllDayChange = function() {
            if (ctrl.eventData.all_day) {
                ctrl.eventData.start_time = '00:00';
                ctrl.eventData.duration = '24';
            } else {
                ctrl.eventData.start_time = '09:00';
                ctrl.eventData.duration = '2';
            }
        };

        /**
         * Update approval preview based on current selections
         */
        ctrl.updateApprovalPreview = function() {
            // Build event_start from date + time so curfew check uses the actual start time
            var eventStart = null;
            if (ctrl.eventData.event_date) {
                var dateStr = ctrl.eventData.event_date;
                if (dateStr instanceof Date) {
                    var yyyy = dateStr.getFullYear();
                    var mm = ('0' + (dateStr.getMonth() + 1)).slice(-2);
                    var dd = ('0' + dateStr.getDate()).slice(-2);
                    dateStr = yyyy + '-' + mm + '-' + dd;
                }
                var timeVal = ctrl.eventData.all_day ? '09:00' : (ctrl.eventData.start_time || '09:00');
                var timeStr;
                if (timeVal instanceof Date) {
                    var hh = ('0' + timeVal.getHours()).slice(-2);
                    var mn = ('0' + timeVal.getMinutes()).slice(-2);
                    timeStr = hh + ':' + mn;
                } else {
                    timeStr = timeVal;
                }
                eventStart = new Date(dateStr + 'T' + timeStr).getTime();
            }

            var eventContext = {
                request_items: ctrl.eventData.request_items,
                attendance_count: ctrl.eventData.attendance_count,
                is_outdoor: ctrl.eventData.is_outdoor,
                is_major_event: ctrl.eventData.is_major_event,
                event_start: eventStart
            };

            ctrl.approvalPreview = PolicyEngineService.evaluatePolicies(eventContext);

            // Create document requirements
            ctrl.documents = ctrl.approvalPreview.required_documents.map(function(docType) {
                return {
                    type: docType,
                    name: PolicyEngineService.getDocumentName(docType),
                    required: true,
                    uploaded: false,
                    file: null
                };
            });

            // Update quote
            ctrl.updateQuote();
        };

        /**
         * Update itemized quote based on selections
         */
        ctrl.updateQuote = function() {
            var quoteData = {
                venue_id: ctrl.eventData.venue_id,
                duration: ctrl.eventData.duration || 2,
                request_items: ctrl.eventData.request_items
            };

            ctrl.quote = PaymentService.calculateQuote(quoteData, ctrl.serviceOptions);
        };

        /**
         * Format currency for display
         */
        ctrl.formatCurrency = function(amount) {
            return PaymentService.formatCurrency(amount || 0);
        };


        /**
         * Handle file selection for upload
         */
        ctrl.onFileSelected = function(docType, files) {
            if (!files || files.length === 0) return;

            var file = files[0];
            var validation = DocumentManagementService.validateFile(file);

            if (!validation.valid) {
                ctrl.error = validation.error;
                return;
            }

            // Store file for upload
            var docIndex = ctrl.documents.findIndex(function(d) { return d.type === docType; });
            if (docIndex >= 0) {
                ctrl.documents[docIndex].file = file;
                ctrl.documents[docIndex].uploaded = true;
                ctrl.error = null;
            }

            $scope.$apply();
        };

        /**
         * Remove selected file
         */
        ctrl.removeDocument = function(docType) {
            var docIndex = ctrl.documents.findIndex(function(d) { return d.type === docType; });
            if (docIndex >= 0) {
                ctrl.documents[docIndex].file = null;
                ctrl.documents[docIndex].uploaded = false;
            }
        };

        /**
         * Handle presentation file selection
         */
        ctrl.onPresentationSelected = function(files) {
            if (!files || files.length === 0) return;

            var file = files[0];
            var maxSize = 50 * 1024 * 1024; // 50MB for presentations

            if (file.size > maxSize) {
                ctrl.error = 'Presentation file must be less than 50MB';
                $scope.$apply();
                return;
            }

            ctrl.presentationFile = file;
            ctrl.error = null;
            $scope.$apply();
        };

        /**
         * Handle signage files selection
         */
        ctrl.onSignageFilesSelected = function(files) {
            if (!files || files.length === 0) return;

            var maxSize = 20 * 1024 * 1024; // 20MB per file
            var validFiles = [];

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                if (file.size <= maxSize) {
                    validFiles.push(file);
                } else {
                    ctrl.error = 'File "' + file.name + '" is too large. Max size is 20MB per file.';
                }
            }

            if (validFiles.length > 0) {
                ctrl.signageFiles = ctrl.signageFiles.concat(validFiles);
                ctrl.error = null;
            }

            $scope.$apply();
        };

        /**
         * Remove signage file
         */
        ctrl.removeSignageFile = function(index) {
            ctrl.signageFiles.splice(index, 1);
        };

        /**
         * Submit event request (create or update)
         */
        ctrl.submitEvent = function() {
            if (!ctrl.validateCurrentStep()) {
                return;
            }

            ctrl.loading = true;
            ctrl.error = null;

            // Build event_start from event_date + start_time
            var dateStr = ctrl.eventData.event_date;
            if (dateStr instanceof Date) {
                // Use local date parts to avoid UTC timezone shift
                var yyyy = dateStr.getFullYear();
                var mm = ('0' + (dateStr.getMonth() + 1)).slice(-2);
                var dd = ('0' + dateStr.getDate()).slice(-2);
                dateStr = yyyy + '-' + mm + '-' + dd;
            }
            var timeVal = ctrl.eventData.start_time || '00:00';
            var timeStr;
            if (timeVal instanceof Date) {
                // AngularJS <input type="time"> sets model to Date object
                var hh = ('0' + timeVal.getHours()).slice(-2);
                var mn = ('0' + timeVal.getMinutes()).slice(-2);
                timeStr = hh + ':' + mn;
            } else {
                timeStr = timeVal;
            }
            var startTime = new Date(dateStr + 'T' + timeStr).getTime();
            var durationHours = parseFloat(ctrl.eventData.duration) || 2;
            var endTime = startTime + (durationHours * 60 * 60 * 1000);

            // If a venue is selected (not assistance mode), check for conflicts
            if (ctrl.eventData.venue_id && !ctrl.eventData.needVenueAssistance) {
                var local_check = DatabaseService.checkVenueConflicts(
                    ctrl.eventData.venue_id,
                    ctrl.eventData.venue,
                    startTime,
                    endTime,
                    ctrl.isEditMode ? ctrl.editEventId : null
                );

                var remote_check = PlaceOSApiService.checkVenueConflicts(
                    ctrl.eventData.venue_id,
                    ctrl.eventData.venue,
                    startTime,
                    endTime
                ).catch(function() {
                    // Sync server unreachable, degrade gracefully
                    return [];
                });

                $q.all([local_check, remote_check]).then(function(results) {
                    var local_conflicts = results[0] || [];
                    var remote_conflicts = results[1] || [];

                    // Merge and deduplicate by id
                    var seen = {};
                    var all_conflicts = [];
                    local_conflicts.concat(remote_conflicts).forEach(function(c) {
                        if (!seen[c.id]) {
                            seen[c.id] = true;
                            // Exclude current event if editing
                            if (ctrl.isEditMode && c.id === ctrl.editEventId) return;
                            all_conflicts.push(c);
                        }
                    });

                    if (all_conflicts.length > 0) {
                        var conflict_details = all_conflicts.map(function(c) {
                            var start_date = new Date(c.event_start || c.date);
                            return '"' + (c.title || 'Untitled') + '" on ' + start_date.toLocaleDateString() + ' at ' + start_date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                        }).join('; ');
                        ctrl.error = 'Venue conflict: "' + ctrl.eventData.venue + '" is already booked — ' + conflict_details;
                        ctrl.loading = false;
                        return;
                    }

                    ctrl._proceedWithSubmission(startTime, endTime);
                }).catch(function() {
                    // If both checks fail, proceed anyway
                    ctrl._proceedWithSubmission(startTime, endTime);
                });
            } else {
                ctrl._proceedWithSubmission(startTime, endTime);
            }
        };

        /**
         * Proceed with event creation/update after conflict check passes
         */
        ctrl._proceedWithSubmission = function(startTime, endTime) {
            // Initialize workflow (only for new events)
            var eventContext = {
                request_items: ctrl.eventData.request_items,
                attendance_count: ctrl.eventData.attendance_count,
                is_outdoor: ctrl.eventData.is_outdoor,
                is_major_event: ctrl.eventData.is_major_event,
                event_start: startTime
            };

            // Prepare event payload
            var eventPayload = {
                title: ctrl.eventData.title,
                event_start: startTime,
                event_end: endTime,
                description: ctrl.eventData.description,
                extension_data: {
                    venue: ctrl.eventData.venue,
                    venue_id: ctrl.eventData.venue_id,
                    need_venue_assistance: ctrl.eventData.needVenueAssistance,
                    venue_preferences: ctrl.eventData.venue_preferences,
                    event_date: startTime,
                    organizer: {
                        name: ctrl.eventData.organizer_name,
                        email: ctrl.eventData.organizer_email,
                        phone: ctrl.eventData.organizer_phone
                    },
                    attendees: ctrl.eventData.attendees,
                    all_day: ctrl.eventData.all_day,
                    needs_catering: ctrl.eventData.needs_catering,
                    catering_notes: ctrl.eventData.catering_notes,
                    setup_time: ctrl.eventData.setup_time,
                    breakdown_time: ctrl.eventData.breakdown_time,
                    request_items: ctrl.eventData.request_items,
                    attendance_count: ctrl.eventData.attendance_count,
                    is_outdoor: ctrl.eventData.is_outdoor,
                    is_major_event: ctrl.eventData.is_major_event,
                    special_requirements: ctrl.eventData.special_requirements,
                    service_options: ctrl.serviceOptions || {},
                    quote: ctrl.quote || null
                }
            };

            // For new events, initialize workflow; for edits, preserve existing workflow
            if (!ctrl.isEditMode) {
                var workflowResult = ApprovalWorkflowService.initializeWorkflow(eventContext);
                var workflow = ApprovalWorkflowService.submitWorkflow(workflowResult.workflow);
                eventPayload.extension_data.workflow = workflow;
                eventPayload.extension_data.documents = workflowResult.documents;
            }

            // Create or update event
            var savePromise;
            if (ctrl.isEditMode) {
                savePromise = PlaceOSApiService.updateEvent(ctrl.editEventId, eventPayload);
            } else {
                savePromise = PlaceOSApiService.createEvent(eventPayload);
            }

            savePromise
                .then(function(response) {
                    var event = response.data;

                    // Upload documents if any
                    if (ctrl.documents.some(function(d) { return d.file; })) {
                        return ctrl.uploadDocuments(event.id).then(function() {
                            return event;
                        });
                    }

                    return event;
                })
                .then(function(event) {
                    ctrl.loading = false;
                    ctrl.success = true;

                    // Redirect to event details after 2 seconds
                    setTimeout(function() {
                        $location.path('/my-events/' + event.id);
                        $scope.$apply();
                    }, 2000);
                })
                .catch(function(error) {
                    console.error('Failed to ' + (ctrl.isEditMode ? 'update' : 'create') + ' event:', error);
                    ctrl.loading = false;
                });
        };

        /**
         * Upload all selected documents
         */
        ctrl.uploadDocuments = function(eventId) {
            var uploads = ctrl.documents
                .filter(function(doc) { return doc.file; })
                .map(function(doc) {
                    return DocumentManagementService.uploadDocument(doc.file, eventId, doc.type);
                });

            return Promise.all(uploads);
        };

        /**
         * Cancel and go back
         */
        ctrl.cancel = function() {
            if (ctrl.isEditMode) {
                $location.path('/my-events/' + ctrl.editEventId);
            } else {
                $location.path('/');
            }
        };
    }

})();
