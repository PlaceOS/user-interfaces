/**
 * PlaceOS API Service
 * Handles all communication with PlaceOS backend
 * Uses DatabaseService for persistent client-side storage in mock mode
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .service('PlaceOSApiService', ['$http', '$q', 'APP_CONFIG', 'DatabaseService', 'AuthService', PlaceOSApiService]);

    function PlaceOSApiService($http, $q, APP_CONFIG, DatabaseService, AuthService) {
        var self = this;
        var config = APP_CONFIG.placeos;
        var baseUrl = config.protocol + '://' + config.domain + config.api_path;

        /**
         * Get API base URL
         */
        self.getBaseUrl = function() {
            return baseUrl;
        };

        /**
         * Create a new event
         * @param {Object} eventData - Event details
         * @returns {Promise}
         */
        self.createEvent = function(eventData) {
            if (config.use_mock) {
                return DatabaseService.createEvent(eventData).then(function(newEvent) {
                    // Fire-and-forget push to sync server
                    try {
                        var ext = newEvent.extension_data || {};
                        var sync_payload = {
                            id: newEvent.id,
                            title: newEvent.title,
                            category: 'venue',
                            date: newEvent.event_start,
                            duration_minutes: Math.round(((newEvent.event_end || newEvent.event_start) - newEvent.event_start) / 60000),
                            location: ext.venue || '',
                            organiser: (ext.organizer && ext.organizer.name) || '',
                            venue_id: ext.venue_id || '',
                            event_start: newEvent.event_start,
                            event_end: newEvent.event_end,
                            request_items: ext.request_items || [],
                            workflow: ext.workflow || {},
                            source: 'eventmocks'
                        };
                        fetch('http://localhost:3001/api/events', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(sync_payload)
                        }).catch(function() { /* sync server offline, ignore */ });
                    } catch (e) { /* ignore sync errors */ }

                    return { data: newEvent };
                });
            }

            return $http.post(baseUrl + '/events', eventData);
        };

        /**
         * Get event by ID
         * @param {String} eventId - Event ID
         * @returns {Promise}
         */
        self.getEvent = function(eventId) {
            if (config.use_mock) {
                return DatabaseService.getEvent(eventId).then(function(event) {
                    if (event) {
                        return { data: event };
                    } else {
                        return $q.reject({ status: 404, data: { error: 'Event not found' } });
                    }
                });
            }

            return $http.get(baseUrl + '/events/' + eventId);
        };

        /**
         * Get all events for current user
         * @returns {Promise}
         */
        self.getMyEvents = function() {
            if (config.use_mock) {
                return DatabaseService.getAllEvents().then(function(events) {
                    return { data: events };
                });
            }

            return $http.get(baseUrl + '/events');
        };

        /**
         * Update event
         * @param {String} eventId - Event ID
         * @param {Object} updates - Fields to update
         * @returns {Promise}
         */
        self.updateEvent = function(eventId, updates) {
            if (config.use_mock) {
                return DatabaseService.updateEvent(eventId, updates).then(function(updatedEvent) {
                    return { data: updatedEvent };
                }).catch(function(error) {
                    return $q.reject({ status: 404, data: { error: 'Event not found' } });
                });
            }

            return $http.patch(baseUrl + '/events/' + eventId, updates);
        };

        /**
         * Delete/Cancel event
         * @param {String} eventId - Event ID
         * @returns {Promise}
         */
        self.deleteEvent = function(eventId) {
            if (config.use_mock) {
                return DatabaseService.deleteEvent(eventId).then(function() {
                    return { data: { success: true } };
                }).catch(function() {
                    return $q.reject({ status: 404, data: { error: 'Event not found' } });
                });
            }

            return $http.delete(baseUrl + '/events/' + eventId);
        };

        /**
         * Upload document file
         * @param {File} file - File to upload
         * @param {Object} metadata - Document metadata
         * @returns {Promise}
         */
        self.uploadDocument = function(file, metadata) {
            if (config.use_mock) {
                return $q(function(resolve) {
                    setTimeout(function() {
                        resolve({
                            data: {
                                id: 'doc_' + Date.now(),
                                file_name: file.name,
                                file_size: file.size,
                                content_type: file.type,
                                url: 'mock://document/' + file.name,
                                metadata: metadata
                            }
                        });
                    }, 1000);
                });
            }

            var formData = new FormData();
            formData.append('file', file);
            formData.append('metadata', JSON.stringify(metadata));

            return $http.post(baseUrl + '/uploads', formData, {
                headers: { 'Content-Type': undefined },
                transformRequest: angular.identity
            });
        };

        /**
         * Get policy configuration from metadata
         * @returns {Promise}
         */
        self.getPolicyConfiguration = function() {
            if (config.use_mock) {
                // Return default policies from PolicyEngineService
                return $q.resolve({ data: null });
            }

            var zoneId = APP_CONFIG.ucla.zone_id;
            var scope = APP_CONFIG.ucla.policy_metadata_key;

            return $http.get(baseUrl + '/metadata/' + zoneId + '?scope=' + scope);
        };

        /**
         * Get current user info
         * @returns {Promise}
         */
        self.getCurrentUser = function() {
            if (config.use_mock) {
                // Use AuthService to get current user
                var user = AuthService.getCurrentUser();
                if (user) {
                    return $q.resolve({
                        data: {
                            id: user.id,
                            email: user.email,
                            name: user.name,
                            roles: user.affiliations || ['event_organizer']
                        }
                    });
                }
                // Fallback for when not logged in
                return $q.resolve({
                    data: {
                        id: 'user_123',
                        email: 'guest@ucla.edu',
                        name: 'Guest User',
                        roles: ['event_organizer']
                    }
                });
            }

            return $http.get(baseUrl + '/users/current');
        };

        /**
         * Search venues based on criteria
         * @param {Object} criteria - Search criteria
         * @returns {Promise}
         */
        self.searchVenues = function(criteria) {
            if (config.use_mock) {
                return DatabaseService.searchVenues(criteria).then(function(venues) {
                    return { data: venues };
                });
            }

            return $http.post(baseUrl + '/venues/search', criteria);
        };

        /**
         * Get all venues
         * @returns {Promise}
         */
        self.getAllVenues = function() {
            if (config.use_mock) {
                return DatabaseService.getAllVenues().then(function(venues) {
                    return { data: venues };
                });
            }

            return $http.get(baseUrl + '/venues');
        };

        /**
         * Get venue by ID
         * @param {String} venueId - Venue ID
         * @returns {Promise}
         */
        self.getVenue = function(venueId) {
            if (config.use_mock) {
                return DatabaseService.getVenue(venueId).then(function(venue) {
                    if (venue) {
                        return { data: venue };
                    } else {
                        return $q.reject({ status: 404, data: { error: 'Venue not found' } });
                    }
                });
            }

            return $http.get(baseUrl + '/venues/' + venueId);
        };

        /**
         * Reset database to default mock data
         * @returns {Promise}
         */
        self.resetDatabase = function() {
            if (config.use_mock) {
                return DatabaseService.resetToDefaults().then(function() {
                    return { data: { success: true } };
                });
            }
            return $q.resolve({ data: { success: false, message: 'Not in mock mode' } });
        };

        /**
         * Sync a service cancellation to the sync server
         * @param {String} eventId - Event ID
         * @param {String} taskStage - Stage name (e.g. 'VENUE', 'DINING')
         * @param {Number} refundIssued - Refund amount issued
         */
        self.syncCancellation = function(eventId, taskStage, refundIssued) {
            try {
                fetch('http://localhost:3001/api/events/' + eventId + '/cancel-service', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        stage: taskStage,
                        refund_issued: refundIssued,
                        cancelled_at: Date.now()
                    })
                }).catch(function() { /* sync server offline */ });
            } catch (e) { /* ignore */ }
        };

        /**
         * Re-push the full event to the sync server after local modifications
         * @param {Object} event - The full event object
         */
        self.syncEventUpdate = function(event) {
            try {
                var ext = event.extension_data || {};
                var sync_payload = {
                    id: event.id,
                    title: event.title,
                    category: 'venue',
                    date: event.event_start,
                    duration_minutes: Math.round(((event.event_end || event.event_start) - event.event_start) / 60000),
                    location: ext.venue || '',
                    organiser: (ext.organizer && ext.organizer.name) || '',
                    venue_id: ext.venue_id || '',
                    event_start: event.event_start,
                    event_end: event.event_end,
                    request_items: ext.request_items || [],
                    workflow: ext.workflow || {},
                    adhoc_services: ext.adhoc_services || [],
                    source: 'eventmocks'
                };
                fetch('http://localhost:3001/api/events', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(sync_payload)
                }).catch(function() { /* sync server offline */ });
            } catch (e) { /* ignore */ }
        };

        /**
         * Check venue conflicts against sync server
         */
        self.checkVenueConflicts = function(venueId, venueName, start, end) {
            var venue_param = encodeURIComponent(venueId || venueName);
            var url = 'http://localhost:3001/api/events/conflicts?venue=' + venue_param + '&start=' + start + '&end=' + end;
            return $http.get(url).then(function(response) {
                return response.data.conflicts || [];
            });
        };
    }

})();
