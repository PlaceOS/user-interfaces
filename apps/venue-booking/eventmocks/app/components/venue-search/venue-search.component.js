/**
 * Venue Search Component
 * Search for venue availability and book directly
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .component('venueSearch', {
            template: `
                <div class="venue-search-page">
                    <div class="page-header">
                        <h1>Find Venue</h1>
                        <p>Search for available venues and book your event</p>
                        <div class="sync-status" ng-class="{'connected': $ctrl.syncConnected}">
                            <span class="sync-dot"></span>
                            <span ng-if="$ctrl.syncConnected">Concierge Sync Active</span>
                            <span ng-if="!$ctrl.syncConnected">Concierge Offline</span>
                            <button class="btn-sync" ng-if="$ctrl.syncConnected" ng-click="$ctrl.manualSync()" aria-label="Sync venue data">
                                <span class="material-icons" aria-hidden="true">sync</span>
                            </button>
                        </div>
                    </div>

                    <!-- Sync Notification -->
                    <div class="sync-notification" ng-if="$ctrl.syncNotification">
                        <span class="material-icons">cloud_download</span>
                        {{ $ctrl.syncNotification }}
                        <button ng-click="$ctrl.syncNotification = null" aria-label="Dismiss notification"><span class="material-icons" aria-hidden="true">close</span></button>
                    </div>

                    <!-- Search Filters -->
                    <div class="search-filters">
                        <h2>Search Criteria</h2>

                        <div class="flexible-dates-toggle">
                            <label>
                                <input type="checkbox" ng-model="$ctrl.searchCriteria.flexibleDates" ng-change="$ctrl.toggleFlexibleDates()">
                                <strong>Flexible with dates</strong> - Show venues available within a date range
                            </label>
                        </div>

                        <div class="filter-grid">
                            <div class="form-group" ng-if="!$ctrl.searchCriteria.flexibleDates">
                                <label for="search-date">Date *</label>
                                <input type="date" id="search-date" ng-model="$ctrl.searchCriteria.date" class="form-control">
                            </div>

                            <div class="form-group" ng-if="$ctrl.searchCriteria.flexibleDates">
                                <label for="search-start-date">Start Date *</label>
                                <input type="date" id="search-start-date" ng-model="$ctrl.searchCriteria.startDate" class="form-control">
                            </div>

                            <div class="form-group" ng-if="$ctrl.searchCriteria.flexibleDates">
                                <label for="search-end-date">End Date *</label>
                                <input type="date" id="search-end-date" ng-model="$ctrl.searchCriteria.endDate" class="form-control">
                            </div>

                            <div class="form-group">
                                <label for="search-start-time">Start Time</label>
                                <input type="time" id="search-start-time" ng-model="$ctrl.searchCriteria.startTime" class="form-control">
                            </div>

                            <div class="form-group">
                                <label for="search-duration">Duration (hours)</label>
                                <input type="number" id="search-duration" ng-model="$ctrl.searchCriteria.duration" class="form-control" min="1" max="12" value="2">
                            </div>

                            <div class="form-group">
                                <label for="search-capacity">Capacity (minimum)</label>
                                <input type="number" id="search-capacity" ng-model="$ctrl.searchCriteria.minCapacity" class="form-control" min="1" placeholder="Number of attendees">
                            </div>
                        </div>

                        <div class="form-group venue-type-section">
                            <label>Venue Type</label>
                            <div class="venue-type-cards">
                                <button class="venue-type-card"
                                     ng-class="{'selected': $ctrl.searchCriteria.venueType === ''}"
                                     ng-click="$ctrl.selectVenueType('')">
                                    <div class="type-icon"><span class="material-icons">domain</span></div>
                                    <div class="type-name">All Types</div>
                                    <div class="type-count">131</div>
                                </button>
                                <button class="venue-type-card"
                                     ng-class="{'selected': $ctrl.searchCriteria.venueType === 'outdoor'}"
                                     ng-click="$ctrl.selectVenueType('outdoor')">
                                    <div class="type-icon"><span class="material-icons">park</span></div>
                                    <div class="type-name">Outdoor</div>
                                    <div class="type-count">31</div>
                                </button>
                                <button class="venue-type-card"
                                     ng-class="{'selected': $ctrl.searchCriteria.venueType === 'hall'}"
                                     ng-click="$ctrl.selectVenueType('hall')">
                                    <div class="type-icon"><span class="material-icons">account_balance</span></div>
                                    <div class="type-name">Event Space</div>
                                    <div class="type-count">28</div>
                                </button>
                                <button class="venue-type-card"
                                     ng-class="{'selected': $ctrl.searchCriteria.venueType === 'meeting'}"
                                     ng-click="$ctrl.selectVenueType('meeting')">
                                    <div class="type-icon"><span class="material-icons">groups</span></div>
                                    <div class="type-name">Meeting</div>
                                    <div class="type-count">19</div>
                                </button>
                                <button class="venue-type-card"
                                     ng-class="{'selected': $ctrl.searchCriteria.venueType === 'conference'}"
                                     ng-click="$ctrl.selectVenueType('conference')">
                                    <div class="type-icon"><span class="material-icons">meeting_room</span></div>
                                    <div class="type-name">Conference</div>
                                    <div class="type-count">17</div>
                                </button>
                                <button class="venue-type-card"
                                     ng-class="{'selected': $ctrl.searchCriteria.venueType === 'classroom'}"
                                     ng-click="$ctrl.selectVenueType('classroom')">
                                    <div class="type-icon"><span class="material-icons">school</span></div>
                                    <div class="type-name">Classroom</div>
                                    <div class="type-count">12</div>
                                </button>
                                <button class="venue-type-card"
                                     ng-class="{'selected': $ctrl.searchCriteria.venueType === 'auditorium'}"
                                     ng-click="$ctrl.selectVenueType('auditorium')">
                                    <div class="type-icon"><span class="material-icons">theaters</span></div>
                                    <div class="type-name">Auditorium</div>
                                    <div class="type-count">10</div>
                                </button>
                                <button class="venue-type-card"
                                     ng-class="{'selected': $ctrl.searchCriteria.venueType === 'theater'}"
                                     ng-click="$ctrl.selectVenueType('theater')">
                                    <div class="type-icon"><span class="material-icons">movie</span></div>
                                    <div class="type-name">Theater</div>
                                    <div class="type-count">8</div>
                                </button>
                                <button class="venue-type-card"
                                     ng-class="{'selected': $ctrl.searchCriteria.venueType === 'ballroom'}"
                                     ng-click="$ctrl.selectVenueType('ballroom')">
                                    <div class="type-icon"><span class="material-icons">celebration</span></div>
                                    <div class="type-name">Ballroom</div>
                                    <div class="type-count">3</div>
                                </button>
                                <button class="venue-type-card"
                                     ng-class="{'selected': $ctrl.searchCriteria.venueType === 'dining'}"
                                     ng-click="$ctrl.selectVenueType('dining')">
                                    <div class="type-icon"><span class="material-icons">restaurant</span></div>
                                    <div class="type-name">Dining</div>
                                    <div class="type-count">3</div>
                                </button>
                            </div>
                        </div>

                        <div class="form-group service-filter-section">
                            <label>Services Needed</label>
                            <div class="service-chips">
                                <button class="service-chip"
                                     ng-repeat="svc in $ctrl.serviceCategories"
                                     ng-class="{'selected': $ctrl.searchCriteria.services[svc.id]}"
                                     ng-click="$ctrl.toggleService(svc.id)"
                                     aria-pressed="{{!!$ctrl.searchCriteria.services[svc.id]}}">
                                    <span class="material-icons" aria-hidden="true">{{ svc.icon }}</span>
                                    <span>{{ svc.label }}</span>
                                </button>
                            </div>
                        </div>


                        <div class="search-actions">
                            <button class="btn btn-primary" ng-click="$ctrl.searchVenues()">
                                🔍 Search Venues
                            </button>
                            <button class="btn btn-secondary" ng-click="$ctrl.clearFilters()">
                                Clear Filters
                            </button>
                        </div>
                    </div>

                    <!-- Loading State -->
                    <div class="loading" ng-if="$ctrl.loading">
                        <p>Searching venues...</p>
                    </div>

                    <!-- Error State -->
                    <div class="alert alert-error" ng-if="$ctrl.error">
                        {{ $ctrl.error }}
                    </div>

                    <!-- Search Results -->
                    <div class="search-results" ng-if="$ctrl.searchPerformed && !$ctrl.loading">
                        <div class="results-header">
                            <h2>Available Venues ({{ $ctrl.venues.length }})</h2>
                            <div class="view-toggle" ng-if="$ctrl.venues.length > 0">
                                <button class="view-btn"
                                        ng-class="{'active': $ctrl.viewMode === 'grid'}"
                                        ng-click="$ctrl.setViewMode('grid')">
                                    <span class="view-icon">⊞</span> Grid View
                                </button>
                                <button class="view-btn"
                                        ng-class="{'active': $ctrl.viewMode === 'schedule'}"
                                        ng-click="$ctrl.setViewMode('schedule')">
                                    <span class="view-icon">📅</span> Schedule View
                                </button>
                                <button class="view-btn"
                                        ng-class="{'active': $ctrl.viewMode === 'map'}"
                                        ng-click="$ctrl.setViewMode('map')">
                                    <span class="view-icon">🗺️</span> Map View
                                </button>
                            </div>
                        </div>

                        <!-- Grid View -->
                        <div class="venues-grid" ng-if="$ctrl.venues.length > 0 && $ctrl.viewMode === 'grid'">
                            <div class="venue-card" ng-repeat="venue in $ctrl.venues">
                                <div class="venue-image">
                                    <div class="venue-icon"><span class="material-icons">{{ $ctrl.getVenueIcon(venue.type) }}</span></div>
                                </div>

                                <div class="venue-details">
                                    <h3>{{ venue.name }}</h3>
                                    <p class="venue-location">{{ venue.building }}</p>

                                    <div class="venue-info">
                                        <div class="info-badge">
                                            <span class="badge-icon">👥</span>
                                            Capacity: {{ venue.capacity }}
                                        </div>
                                        <div class="info-badge">
                                            <span class="badge-icon">🏷️</span>
                                            {{ $ctrl.getVenueTypeName(venue.type) }}
                                        </div>
                                    </div>

                                    <div class="venue-features">
                                        <span class="feature" ng-if="venue.av_equipment"><span class="material-icons">videocam</span> AV</span>
                                        <span class="feature" ng-if="venue.catering_allowed"><span class="material-icons">restaurant</span> Catering</span>
                                        <span class="feature" ng-if="venue.accessible"><span class="material-icons">accessible</span> Accessible</span>
                                        <span class="feature" ng-if="venue.outdoor"><span class="material-icons">park</span> Outdoor</span>
                                    </div>

                                    <div class="venue-services" ng-if="venue.matched_services.length > 0">
                                        <span class="service-badge" ng-repeat="svc in venue.matched_services">
                                            <span class="material-icons">{{ svc.icon }}</span> {{ svc.label }}
                                        </span>
                                    </div>

                                    <div class="venue-availability">
                                        <span ng-if="venue.available && !venue.availableDates" class="availability-badge available">
                                            <span class="material-icons">check_circle</span> Available
                                        </span>
                                        <span ng-if="venue.available && venue.availableDates" class="availability-badge available">
                                            <span class="material-icons">check_circle</span> Available on {{ venue.availableDates.length }} date(s)
                                        </span>
                                        <span ng-if="!venue.available" class="availability-badge unavailable">
                                            <span class="material-icons">cancel</span> Not Available
                                        </span>
                                    </div>

                                    <div class="available-dates" ng-if="venue.available && venue.availableDates && venue.availableDates.length > 0">
                                        <strong>Available dates:</strong>
                                        <div class="dates-list">
                                            <span class="date-badge" ng-repeat="date in venue.availableDates | limitTo:5">
                                                {{ $ctrl.formatDateShort(date) }}
                                            </span>
                                            <span class="more-dates" ng-if="venue.availableDates.length > 5">
                                                +{{ venue.availableDates.length - 5 }} more
                                            </span>
                                        </div>
                                    </div>

                                    <div class="venue-actions">
                                        <button class="btn btn-primary"
                                                ng-click="$ctrl.bookVenue(venue)"
                                                ng-disabled="!venue.available">
                                            Book This Venue
                                        </button>
                                        <button class="btn btn-secondary" ng-click="$ctrl.viewVenueDetails(venue)">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Schedule View -->
                        <div class="schedule-view" ng-if="$ctrl.venues.length > 0 && $ctrl.viewMode === 'schedule'">
                            <div class="schedule-container">
                                <div class="schedule-header">
                                    <div class="schedule-date-info">
                                        <strong>{{ $ctrl.getScheduleDate() }}</strong>
                                        <span>{{ $ctrl.searchCriteria.startTime }} - {{ $ctrl.getEndTime() }}</span>
                                    </div>
                                </div>

                                <div class="schedule-grid">
                                    <!-- Time header row -->
                                    <div class="time-header">
                                        <div class="venue-label-header">Venue</div>
                                        <div class="time-slots">
                                            <div class="time-slot" ng-repeat="hour in $ctrl.timeSlots">
                                                {{ hour }}
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Venue rows -->
                                    <div class="venue-row" ng-repeat="venue in $ctrl.venues">
                                        <div class="venue-label">
                                            <div class="venue-row-icon"><span class="material-icons">{{ $ctrl.getVenueIcon(venue.type) }}</span></div>
                                            <div class="venue-row-info">
                                                <strong>{{ venue.name }}</strong>
                                                <small>{{ venue.building }}</small>
                                            </div>
                                        </div>
                                        <div class="time-slots">
                                            <div class="time-slot" ng-repeat="hour in $ctrl.timeSlots">
                                                <!-- Show booked blocks -->
                                                <div class="booking-block"
                                                     ng-repeat="booking in $ctrl.getBookingsForVenueAtTime(venue.id, hour)"
                                                     ng-style="$ctrl.getBookingStyle(booking)">
                                                    <span class="booking-title">{{ booking.title }}</span>
                                                </div>
                                            </div>
                                            <button class="book-venue-btn"
                                                    ng-if="venue.available"
                                                    ng-click="$ctrl.bookVenue(venue)">
                                                Book
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="schedule-legend">
                                    <div class="legend-item">
                                        <div class="legend-color booked"></div>
                                        <span>Booked</span>
                                    </div>
                                    <div class="legend-item">
                                        <div class="legend-color available"></div>
                                        <span>Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Map View -->
                        <div class="map-view" ng-if="$ctrl.venues.length > 0 && $ctrl.viewMode === 'map'">
                            <div class="map-container">
                                <div id="venue-map" class="venue-map"></div>
                            </div>

                            <!-- Venue List Sidebar -->
                            <div class="map-sidebar">
                                <h3>Venues ({{ $ctrl.venues.length }})</h3>
                                <div class="map-venue-list">
                                    <div class="map-venue-item"
                                         ng-repeat="venue in $ctrl.venues"
                                         ng-class="{'available': venue.available, 'unavailable': !venue.available}"
                                         data-venue-id="{{ venue.id }}"
                                         ng-click="$ctrl.selectVenueOnMap(venue)">
                                        <div class="map-venue-icon"><span class="material-icons">{{ $ctrl.getVenueIcon(venue.type) }}</span></div>
                                        <div class="map-venue-info">
                                            <strong>{{ venue.name }}</strong>
                                            <small>{{ venue.building }}</small>
                                            <div class="venue-quick-info">
                                                <span><span class="material-icons">group</span> {{ venue.capacity }}</span>
                                                <span ng-if="venue.available" class="status-available"><span class="material-icons">check_circle</span> Available</span>
                                                <span ng-if="!venue.available" class="status-unavailable"><span class="material-icons">cancel</span> Booked</span>
                                            </div>
                                        </div>
                                        <button class="btn btn-small btn-primary"
                                                ng-if="venue.available"
                                                ng-click="$ctrl.bookVenue(venue); $event.stopPropagation()">
                                            Book
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="no-results" ng-if="$ctrl.venues.length === 0">
                            <h3>No venues found</h3>
                            <p>Try adjusting your search criteria</p>
                        </div>
                    </div>

                    <!-- Venue Detail Modal -->
                    <div class="venue-detail-overlay" ng-if="$ctrl.selectedVenue" ng-click="$ctrl.closeDetails()">
                        <div class="venue-detail-modal" ng-click="$event.stopPropagation()">
                            <button class="modal-close" ng-click="$ctrl.closeDetails()">
                                <span class="material-icons">close</span>
                            </button>

                            <div class="modal-header-section">
                                <div class="modal-venue-icon">
                                    <span class="material-icons">{{ $ctrl.getVenueIcon($ctrl.selectedVenue.type) }}</span>
                                </div>
                                <div>
                                    <h2>{{ $ctrl.selectedVenue.name }}</h2>
                                    <p class="modal-building">{{ $ctrl.selectedVenue.building }}</p>
                                </div>
                            </div>

                            <div class="modal-info-grid">
                                <div class="modal-info-item">
                                    <span class="material-icons">category</span>
                                    <div>
                                        <small>Type</small>
                                        <strong>{{ $ctrl.getVenueTypeName($ctrl.selectedVenue.type) }}</strong>
                                    </div>
                                </div>
                                <div class="modal-info-item">
                                    <span class="material-icons">group</span>
                                    <div>
                                        <small>Capacity</small>
                                        <strong>{{ $ctrl.selectedVenue.capacity }}</strong>
                                    </div>
                                </div>
                                <div class="modal-info-item">
                                    <span class="material-icons">square_foot</span>
                                    <div>
                                        <small>Size</small>
                                        <strong>{{ $ctrl.selectedVenue.sqft }} sqft</strong>
                                    </div>
                                </div>
                                <div class="modal-info-item">
                                    <span class="material-icons">layers</span>
                                    <div>
                                        <small>Floor</small>
                                        <strong>{{ $ctrl.selectedVenue.floor || 'N/A' }}</strong>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-pricing" ng-if="$ctrl.selectedVenue.hourly_rate">
                                <h3>Pricing</h3>
                                <div class="pricing-grid">
                                    <div class="price-item">
                                        <small>Hourly</small>
                                        <strong>\${{ $ctrl.selectedVenue.hourly_rate }}</strong>
                                    </div>
                                    <div class="price-item" ng-if="$ctrl.selectedVenue.half_day_rate">
                                        <small>Half Day</small>
                                        <strong>\${{ $ctrl.selectedVenue.half_day_rate }}</strong>
                                    </div>
                                    <div class="price-item" ng-if="$ctrl.selectedVenue.full_day_rate">
                                        <small>Full Day</small>
                                        <strong>\${{ $ctrl.selectedVenue.full_day_rate }}</strong>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-section" ng-if="$ctrl.selectedVenue.features.length > 0">
                                <h3>Features</h3>
                                <div class="modal-tags">
                                    <span class="modal-tag" ng-repeat="f in $ctrl.selectedVenue.features">{{ f }}</span>
                                </div>
                            </div>

                            <div class="modal-section" ng-if="$ctrl.selectedVenue.services.length > 0">
                                <h3>Services</h3>
                                <div class="modal-tags services">
                                    <span class="modal-tag service" ng-repeat="s in $ctrl.selectedVenue.services">{{ s }}</span>
                                </div>
                            </div>

                            <p class="modal-description" ng-if="$ctrl.selectedVenue.description">{{ $ctrl.selectedVenue.description }}</p>

                            <div class="modal-actions">
                                <button class="btn btn-primary" ng-click="$ctrl.bookVenue($ctrl.selectedVenue)" ng-disabled="!$ctrl.selectedVenue.available">
                                    Book This Venue
                                </button>
                                <button class="btn btn-secondary" ng-click="$ctrl.closeDetails()">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            controller: VenueSearchController
        });

    function VenueSearchController($location, $scope, PlaceOSApiService, VenueSyncService) {
        var ctrl = this;

        ctrl.searchCriteria = {
            date: null,
            startDate: null,
            endDate: null,
            flexibleDates: false,
            startTime: null,
            duration: 2,
            minCapacity: null,
            venueType: '',
            avEquipment: false,
            catering: false,
            accessible: false,
            services: {}
        };

        // Service categories derived from UCLA concierge venue data
        ctrl.serviceCategories = [
            { id: 'catering', label: 'Catering', icon: 'restaurant_menu', keywords: ['catering', 'dining', 'menu', 'bar', 'cocktail', 'refreshment', 'nutrition'] },
            { id: 'av_tech', label: 'AV & Tech', icon: 'videocam', keywords: ['audio-visual', 'av ', 'av_', 'video conferencing', 'smart room', 'sound system', 'projection'] },
            { id: 'event_planning', label: 'Event Planning', icon: 'event', keywords: ['event coordination', 'event planning', 'event facilitator', 'event staffing', 'conference manager'] },
            { id: 'parking', label: 'Parking', icon: 'local_parking', keywords: ['parking', 'transportation'] },
            { id: 'security', label: 'Security', icon: 'security', keywords: ['security', 'safety', 'fire marshal'] },
            { id: 'streaming', label: 'Streaming', icon: 'live_tv', keywords: ['live-streaming', 'recording', 'hybrid'] },
            { id: 'wifi', label: 'WiFi', icon: 'wifi', keywords: ['wifi', 'wi-fi'] }
        ];

        ctrl.venues = [];
        ctrl.loading = false;
        ctrl.error = null;
        ctrl.searchPerformed = false;
        ctrl.viewMode = 'grid'; // 'grid' or 'schedule'
        ctrl.timeSlots = [];

        // Sync state
        ctrl.syncConnected = VenueSyncService.isConnected();
        ctrl.syncNotification = null;

        // Mock bookings data for schedule view
        ctrl.venueBookings = {
            'venue_1': [ // Grand Horizon & Terrace
                { title: 'Department Meeting', start: 9, duration: 2 },
                { title: 'Lecture', start: 14, duration: 3 }
            ],
            'venue_9': [ // Palisades Ballroom
                { title: 'Conference', start: 10, duration: 4 }
            ],
            'venue_55': [ // Royce Hall Main Auditorium
                { title: 'Faculty Lecture Series', start: 8, duration: 3 },
                { title: 'Concert Rehearsal', start: 16, duration: 2 }
            ],
            'venue_44': [ // Bruin Plaza
                { title: 'Outdoor Event', start: 12, duration: 2 }
            ],
            'venue_40': [ // Ackerman Grand Ballroom
                { title: 'Student Assembly', start: 11, duration: 2 },
                { title: 'Club Meeting', start: 15, duration: 2 }
            ],
            'venue_8': [ // Northwest Campus Auditorium
                { title: 'Film Screening', start: 13, duration: 3 }
            ],
            'venue_15': [ // Plaza Room
                { title: 'Welcome Fair Setup', start: 9, duration: 5 }
            ],
            'venue_122': [ // Drake Stadium
                { title: 'Track Practice', start: 15, duration: 2 }
            ],
            'venue_23': [ // Sierra
                { title: 'Study Session', start: 10, duration: 3 }
            ],
            'venue_80': [ // Freud Playhouse
                { title: 'Theater Rehearsal', start: 14, duration: 4 }
            ],
            'venue_87': [ // Sculpture Garden
                { title: 'Art Installation', start: 11, duration: 3 }
            ],
            'venue_120': [ // Sunset Canyon Recreation Center
                { title: 'Fitness Class', start: 7, duration: 1 },
                { title: 'Yoga Session', start: 17, duration: 1 }
            ]
        };

        /**
         * Initialize component
         */
        ctrl.$onInit = function() {
            // Set default date to today
            var today = new Date();
            ctrl.searchCriteria.date = today.toISOString().split('T')[0];
            ctrl.searchCriteria.startDate = today.toISOString().split('T')[0];

            // Set default end date to 7 days from now
            var weekLater = new Date();
            weekLater.setDate(weekLater.getDate() + 7);
            ctrl.searchCriteria.endDate = weekLater.toISOString().split('T')[0];

            ctrl.searchCriteria.startTime = '09:00';

            // Listen for sync events
            $scope.$on('venue:synced', function(event, venue) {
                ctrl.syncConnected = true;
                ctrl.syncNotification = 'New venue synced from Concierge: ' + venue.name;
                // Auto-refresh if search was performed
                if (ctrl.searchPerformed) {
                    ctrl.searchVenues();
                }
            });

            $scope.$on('venues:bulk-synced', function(event, count) {
                ctrl.syncConnected = true;
                ctrl.syncNotification = count + ' venues synced from Concierge';
                if (ctrl.searchPerformed) {
                    ctrl.searchVenues();
                }
            });

            // Poll sync status
            ctrl.syncInterval = setInterval(function() {
                ctrl.syncConnected = VenueSyncService.isConnected();
                $scope.$applyAsync();
            }, 3000);
        };

        ctrl.$onDestroy = function() {
            if (ctrl.syncInterval) clearInterval(ctrl.syncInterval);
        };

        /**
         * Manual sync from concierge
         */
        ctrl.manualSync = function() {
            ctrl.syncNotification = 'Syncing venues from Concierge...';
            VenueSyncService.fetchAndSync().then(function() {
                ctrl.syncNotification = 'Sync complete!';
                if (ctrl.searchPerformed) {
                    ctrl.searchVenues();
                }
            });
        };

        /**
         * Toggle flexible dates
         */
        ctrl.toggleFlexibleDates = function() {
            // Reset venues when toggling
            ctrl.venues = [];
            ctrl.searchPerformed = false;
        };

        /**
         * Select venue type
         */
        ctrl.selectVenueType = function(type) {
            ctrl.searchCriteria.venueType = type;
        };

        /**
         * Toggle a service filter
         */
        ctrl.toggleService = function(serviceId) {
            ctrl.searchCriteria.services[serviceId] = !ctrl.searchCriteria.services[serviceId];
        };

        /**
         * Search for venues
         */
        ctrl.searchVenues = function() {
            ctrl.loading = true;
            ctrl.error = null;
            ctrl.searchPerformed = true;

            PlaceOSApiService.searchVenues(ctrl.searchCriteria)
                .then(function(response) {
                    ctrl.venues = response.data;
                    ctrl.loading = false;
                })
                .catch(function(error) {
                    // Only log error for mock data, don't show to user
                    console.error('Failed to search venues:', error);
                    ctrl.loading = false;
                });
        };

        /**
         * Clear search filters
         */
        ctrl.clearFilters = function() {
            var today = new Date();
            var weekLater = new Date();
            weekLater.setDate(weekLater.getDate() + 7);

            ctrl.searchCriteria = {
                date: today.toISOString().split('T')[0],
                startDate: today.toISOString().split('T')[0],
                endDate: weekLater.toISOString().split('T')[0],
                flexibleDates: false,
                startTime: '09:00',
                duration: 2,
                minCapacity: null,
                venueType: '',
                avEquipment: false,
                catering: false,
                accessible: false,
                services: {}
            };
            ctrl.venues = [];
            ctrl.searchPerformed = false;
        };

        /**
         * Book a venue
         */
        ctrl.bookVenue = function(venue) {
            if (!venue.available) return;

            // Navigate to event request form with venue pre-selected
            var date = ctrl.searchCriteria.date;
            var startTime = ctrl.searchCriteria.startTime;

            $location.path('/request-event/' + venue.id + '/' + date + '/' + startTime);
        };

        /**
         * View venue details (future enhancement)
         */
        ctrl.selectedVenue = null;

        ctrl.viewVenueDetails = function(venue) {
            ctrl.selectedVenue = venue;
        };

        ctrl.closeDetails = function() {
            ctrl.selectedVenue = null;
        };

        /**
         * Get venue icon based on type (Material Design icon name)
         */
        ctrl.getVenueIcon = function(type) {
            var icons = {
                'ballroom': 'celebration',
                'auditorium': 'theaters',
                'hall': 'account_balance',
                'gallery': 'account_balance',
                'theater': 'movie',
                'conference': 'meeting_room',
                'boardroom': 'meeting_room',
                'meeting': 'groups',
                'classroom': 'school',
                'outdoor': 'park',
                'dining': 'restaurant'
            };
            return icons[type] || 'domain';
        };

        /**
         * Get venue type display name
         */
        ctrl.getVenueTypeName = function(type) {
            var names = {
                'ballroom': 'Ballroom',
                'auditorium': 'Auditorium',
                'hall': 'Event Space',
                'gallery': 'Event Space',
                'theater': 'Theater',
                'conference': 'Conference',
                'boardroom': 'Conference',
                'meeting': 'Meeting Room',
                'classroom': 'Classroom',
                'outdoor': 'Outdoor Space',
                'dining': 'Dining Venue'
            };
            return names[type] || type;
        };

        /**
         * Format date for short display
         */
        ctrl.formatDateShort = function(dateString) {
            var date = new Date(dateString);
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        };

        /**
         * Set view mode
         */
        ctrl.setViewMode = function(mode) {
            ctrl.viewMode = mode;
            if (mode === 'schedule') {
                ctrl.generateTimeSlots();
            } else if (mode === 'map') {
                $timeout(function() {
                    ctrl.initializeMap();
                }, 100);
            }
        };

        /**
         * Generate time slots for schedule view
         */
        ctrl.generateTimeSlots = function() {
            var slots = [];
            var startHour = parseInt(ctrl.searchCriteria.startTime.split(':')[0]);
            var endHour = startHour + 12; // Show 12 hours

            for (var i = startHour; i < endHour; i++) {
                var hour = i % 24;
                var ampm = hour < 12 ? 'AM' : 'PM';
                var displayHour = hour === 0 ? 12 : (hour > 12 ? hour - 12 : hour);
                slots.push(displayHour + ampm);
            }
            ctrl.timeSlots = slots;
        };

        /**
         * Get schedule date display
         */
        ctrl.getScheduleDate = function() {
            var date = ctrl.searchCriteria.flexibleDates
                ? ctrl.searchCriteria.startDate
                : ctrl.searchCriteria.date;
            if (!date) return '';

            var d = new Date(date);
            return d.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        };

        /**
         * Get end time display
         */
        ctrl.getEndTime = function() {
            if (!ctrl.searchCriteria.startTime) return '';

            var startHour = parseInt(ctrl.searchCriteria.startTime.split(':')[0]);
            var endHour = (startHour + 12) % 24;
            var ampm = endHour < 12 ? 'AM' : 'PM';
            var displayHour = endHour === 0 ? 12 : (endHour > 12 ? endHour - 12 : endHour);

            return displayHour + ':00 ' + ampm;
        };

        /**
         * Get bookings for a venue at a specific time
         */
        ctrl.getBookingsForVenueAtTime = function(venueId, timeSlot) {
            var bookings = ctrl.venueBookings[venueId] || [];
            var hour = ctrl.parseTimeSlot(timeSlot);

            return bookings.filter(function(booking) {
                return hour >= booking.start && hour < (booking.start + booking.duration);
            }).map(function(booking) {
                // Only return on the first hour of the booking
                if (hour === booking.start) {
                    return booking;
                }
                return null;
            }).filter(function(b) { return b !== null; });
        };

        /**
         * Parse time slot to hour number
         */
        ctrl.parseTimeSlot = function(timeSlot) {
            var match = timeSlot.match(/(\d+)(AM|PM)/);
            if (!match) return 0;

            var hour = parseInt(match[1]);
            var period = match[2];

            if (period === 'PM' && hour !== 12) {
                hour += 12;
            } else if (period === 'AM' && hour === 12) {
                hour = 0;
            }

            return hour;
        };

        /**
         * Get booking block style
         */
        ctrl.getBookingStyle = function(booking) {
            var duration = booking.duration || 1;
            return {
                'width': (duration * 100) + '%',
                'z-index': '10'
            };
        };

        /**
         * Initialize Google Maps
         */
        ctrl.initializeMap = function() {
            // Note: Google Maps will be loaded via script tag in index.html
            // For now, we'll create a simple visual representation
            // In production, you would use the Google Maps JavaScript API

            var mapElement = document.getElementById('venue-map');
            if (!mapElement) return;

            // Create map visualization using Leaflet-style approach
            // For demo purposes, we'll create a styled div with venue markers
            var uclaCenter = { lat: 34.0689, lng: -118.4452 };

            // Create simple marker divs for each venue
            ctrl.venues.forEach(function(venue) {
                var marker = document.createElement('div');
                marker.className = 'map-marker ' + (venue.available ? 'available' : 'unavailable');
                marker.innerHTML = '<div class="marker-icon"><span class="material-icons">' + ctrl.getVenueIcon(venue.type) + '</span></div>';
                marker.title = venue.name;

                // Position based on lat/lng (simplified positioning)
                var offsetX = (venue.lng + 118.4452) * 5000;
                var offsetY = (34.0722 - venue.lat) * 5000;

                marker.style.left = (50 + offsetX) + '%';
                marker.style.top = (50 + offsetY) + '%';

                marker.onclick = function() {
                    ctrl.selectVenueOnMap(venue);
                    $scope.$apply();
                };

                mapElement.appendChild(marker);
            });
        };

        /**
         * Select venue on map
         */
        ctrl.selectVenueOnMap = function(venue) {
            // Scroll to venue in sidebar and highlight it
            var venueItems = document.querySelectorAll('.map-venue-item');
            venueItems.forEach(function(item) {
                item.classList.remove('selected');
            });

            var selectedItem = document.querySelector('.map-venue-item[data-venue-id="' + venue.id + '"]');
            if (selectedItem) {
                selectedItem.classList.add('selected');
                selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            // Highlight marker on map
            var markers = document.querySelectorAll('.map-marker');
            markers.forEach(function(marker) {
                marker.classList.remove('selected');
            });
        };
    }

})();
