/**
 * Venue Sync Service
 * Connects to the sync server via SSE for real-time venue updates from concierge
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .service('VenueSyncService', ['$rootScope', 'DatabaseService', VenueSyncService]);

    function VenueSyncService($rootScope, DatabaseService) {
        var self = this;
        var eventSource = null;
        var SYNC_SERVER = 'http://localhost:3001';

        self.connected = false;
        self.lastSync = null;
        self.syncedCount = 0;

        /**
         * Connect to sync server SSE stream
         */
        self.connect = function() {
            if (eventSource) {
                eventSource.close();
            }

            try {
                eventSource = new EventSource(SYNC_SERVER + '/api/venues/stream');

                eventSource.onopen = function() {
                    self.connected = true;
                    console.log('[VenueSync] Connected to sync server');
                    $rootScope.$applyAsync();
                };

                eventSource.onmessage = function(event) {
                    try {
                        var data = JSON.parse(event.data);
                        self.handleMessage(data);
                    } catch (e) {
                        console.error('[VenueSync] Parse error:', e);
                    }
                };

                eventSource.onerror = function() {
                    self.connected = false;
                    console.warn('[VenueSync] Connection lost, retrying...');
                    $rootScope.$applyAsync();
                };
            } catch (e) {
                console.warn('[VenueSync] Cannot connect to sync server:', e.message);
                self.connected = false;
            }
        };

        /**
         * Handle incoming SSE message
         */
        self.handleMessage = function(data) {
            if (data.type === 'connected') {
                console.log('[VenueSync] Server has ' + data.total + ' venues');
                if (data.total > 0) {
                    self.fetchAndSync();
                }
                return;
            }

            if (data.type === 'venue_added' && data.venue) {
                self.addVenueToDatabase(data.venue).then(function() {
                    self.syncedCount++;
                    self.lastSync = new Date();
                    console.log('[VenueSync] New venue synced: ' + data.venue.name);
                    $rootScope.$broadcast('venue:synced', data.venue);
                    $rootScope.$applyAsync();
                });
                return;
            }

            if (data.type === 'venues_bulk') {
                self.fetchAndSync();
                return;
            }
        };

        /**
         * Fetch all venues from sync server and add to database
         */
        self.fetchAndSync = function() {
            return fetch(SYNC_SERVER + '/api/venues')
                .then(function(response) { return response.json(); })
                .then(function(data) {
                    var venues = data.venues || [];
                    var promises = venues.map(function(venue) {
                        return self.addVenueToDatabase(venue);
                    });
                    return Promise.all(promises).then(function() {
                        self.syncedCount = venues.length;
                        self.lastSync = new Date();
                        console.log('[VenueSync] Synced ' + venues.length + ' venues from server');
                        $rootScope.$broadcast('venues:bulk-synced', venues.length);
                        $rootScope.$applyAsync();
                    });
                })
                .catch(function(err) {
                    console.warn('[VenueSync] Fetch failed:', err.message);
                });
        };

        /**
         * Convert concierge venue format to eventmocks format and add to DB
         */
        self.addVenueToDatabase = function(venue) {
            return DatabaseService.init().then(function() {
                // Convert concierge format to eventmocks format
                var converted = self.convertVenue(venue);
                return DatabaseService.addVenue(converted);
            });
        };

        /**
         * Convert a concierge-format venue to eventmocks format
         */
        self.convertVenue = function(venue) {
            // Type mapping from concierge to eventmocks
            var typeMap = {
                'Ballroom': 'ballroom',
                'Auditorium': 'auditorium',
                'Meeting Room': 'meeting',
                'Conference Room': 'conference',
                'Boardroom': 'boardroom',
                'Event Space': 'hall',
                'Outdoor Space': 'outdoor',
                'Dining Venue': 'dining',
                'Gallery': 'gallery',
                'Theater': 'theater',
                'Classroom': 'classroom'
            };

            // If already in eventmocks format, return as-is
            if (venue.av_equipment !== undefined) {
                return venue;
            }

            var type = typeMap[venue.type] || venue.type || 'hall';
            var id = venue.id || ('venue_sync_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5));

            return {
                id: id,
                name: venue.name || venue.display_name || 'Unknown Venue',
                building: venue.building_name || venue.building || 'UCLA Campus',
                type: type,
                capacity: venue.capacity || 50,
                av_equipment: !!(venue.features && venue.features.some(function(f) {
                    return /audio|projector|screen|video/i.test(f);
                })),
                catering_allowed: venue.catering_available !== false,
                accessible: true,
                outdoor: type === 'outdoor',
                description: venue.description || (venue.name + ' at ' + (venue.building_name || 'UCLA') + '. Capacity: ' + (venue.capacity || 50) + '.'),
                hourly_rate: venue.hourly_rate || 100,
                half_day_rate: venue.half_day_rate || 500,
                full_day_rate: venue.full_day_rate || 800,
                features: venue.features || [],
                services: venue.services || [],
                approval_required: venue.approval_required || false,
                sqft: venue.sqft || 500,
                floor: venue.floor || 'Ground Floor'
            };
        };

        /**
         * Disconnect from sync server
         */
        self.disconnect = function() {
            if (eventSource) {
                eventSource.close();
                eventSource = null;
            }
            self.connected = false;
        };

        /**
         * Get connection status
         */
        self.isConnected = function() {
            return self.connected;
        };

        // Auto-connect on service init
        self.connect();
    }

})();
