/**
 * Event Sync Service
 * Listens for approval status updates from the concierge app via SSE
 * and updates the local IndexedDB workflow accordingly.
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .service('EventSyncService', ['$rootScope', 'DatabaseService', EventSyncService]);

    function EventSyncService($rootScope, DatabaseService) {
        var self = this;
        var event_source = null;
        var SYNC_URL = 'http://localhost:3001/api/events/stream';

        /**
         * Connect to the event SSE stream
         */
        self.connect = function() {
            if (event_source) return;

            try {
                event_source = new EventSource(SYNC_URL);

                event_source.onmessage = function(msg) {
                    try {
                        var data = JSON.parse(msg.data);

                        if (data.type === 'status_changed') {
                            self._handleStatusChange(data);
                        } else if (data.type === 'service_cancelled') {
                            self._handleServiceCancelled(data);
                        } else if (data.type === 'event_updated') {
                            self._handleEventUpdated(data.event);
                        }
                    } catch (e) {
                        console.warn('[EventSync] Failed to parse SSE message:', e);
                    }
                };

                event_source.onerror = function() {
                    console.warn('[EventSync] SSE connection error, will retry automatically');
                };

                console.log('[EventSync] Connected to event stream');
            } catch (e) {
                console.warn('[EventSync] Could not connect to sync server:', e);
            }
        };

        /**
         * Disconnect from the SSE stream
         */
        self.disconnect = function() {
            if (event_source) {
                event_source.close();
                event_source = null;
            }
        };

        /**
         * Handle approval status change from concierge
         */
        self._handleStatusChange = function(data) {
            var event_id = data.event_id;
            var category = (data.category || '').toUpperCase();
            var status = data.status;

            if (!event_id || !category || !status) return;

            DatabaseService.getEvent(event_id).then(function(event) {
                if (!event) return;

                var ext = event.extension_data || {};
                var workflow = ext.workflow || {};
                var tasks = workflow.approval_tasks || [];

                var task_updated = false;
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i].stage === category) {
                        tasks[i].status = status;
                        tasks[i].completed_at = Date.now();
                        task_updated = true;
                        break;
                    }
                }

                if (!task_updated) return;

                // Recalculate overall status
                var all_statuses = tasks.map(function(t) { return t.status; });
                var all_cancelled = all_statuses.every(function(s) { return s === 'cancelled' || s === 'declined'; });
                if (all_cancelled && all_statuses.length > 0) {
                    workflow.overall_status = 'cancelled';
                } else if (all_statuses.every(function(s) { return s === 'approved'; })) {
                    workflow.overall_status = 'approved';
                } else if (all_statuses.some(function(s) { return s === 'declined' || s === 'cancelled'; })) {
                    workflow.overall_status = 'declined';
                } else {
                    workflow.overall_status = 'pending';
                }
                workflow.last_updated = Date.now();

                return DatabaseService.updateEvent(event_id, {
                    extension_data: angular.merge({}, ext, { workflow: workflow })
                });
            }).then(function() {
                $rootScope.$apply(function() {
                    $rootScope.$broadcast('event:approval-updated', {
                        eventId: event_id,
                        category: category,
                        status: status
                    });
                });
                console.log('[EventSync] Updated approval: event=' + event_id + ' ' + category + '=' + status);
            }).catch(function(err) {
                console.warn('[EventSync] Failed to update event:', err);
            });
        };

        /**
         * Handle service cancellation from concierge
         */
        /**
         * Handle event update from sync server (e.g. ad-hoc service added from concierge)
         */
        self._handleEventUpdated = function(sync_event) {
            if (!sync_event || !sync_event.id) return;

            DatabaseService.getEvent(sync_event.id).then(function(event) {
                if (!event) return;

                var ext = event.extension_data || {};
                var updates = {};

                // Merge ad-hoc services from sync server into local event
                if (sync_event.adhoc_services && sync_event.adhoc_services.length) {
                    var existing_ids = {};
                    var current_adhoc = ext.adhoc_services || [];
                    for (var i = 0; i < current_adhoc.length; i++) {
                        existing_ids[current_adhoc[i].id] = true;
                    }

                    var new_services = [];
                    for (var j = 0; j < sync_event.adhoc_services.length; j++) {
                        var svc = sync_event.adhoc_services[j];
                        if (!existing_ids[svc.id]) {
                            new_services.push({
                                id: svc.id,
                                name: svc.name,
                                description: svc.name,
                                amount: svc.unit_price || 0,
                                added_at: svc.added_at || Date.now(),
                                added_by: 'Concierge Admin',
                                status: 'active',
                                refund_deadline: null,
                                refund_amount: svc.unit_price || 0
                            });
                        }
                    }

                    if (new_services.length) {
                        ext.adhoc_services = current_adhoc.concat(new_services);
                        updates.extension_data = angular.merge({}, ext);
                    }
                }

                if (!Object.keys(updates).length) return;

                return DatabaseService.updateEvent(sync_event.id, updates);
            }).then(function() {
                $rootScope.$apply(function() {
                    $rootScope.$broadcast('event:adhoc-added', {
                        eventId: sync_event.id
                    });
                });
                console.log('[EventSync] Ad-hoc services synced for event: ' + sync_event.id);
            }).catch(function(err) {
                console.warn('[EventSync] Failed to sync event update:', err);
            });
        };

        self._handleServiceCancelled = function(data) {
            var event_id = data.event_id;
            var stage = (data.stage || '').toUpperCase();

            if (!event_id || !stage) return;

            DatabaseService.getEvent(event_id).then(function(event) {
                if (!event) return;

                var ext = event.extension_data || {};
                var workflow = ext.workflow || {};
                var tasks = workflow.approval_tasks || [];

                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i].stage === stage) {
                        tasks[i].status = 'cancelled';
                        tasks[i].cancelled_at = data.cancelled_at || Date.now();
                        tasks[i].refund_issued = data.refund_issued || 0;
                        break;
                    }
                }

                // Recalculate overall status
                var all_statuses = tasks.map(function(t) { return t.status; });
                var all_cancelled = all_statuses.every(function(s) { return s === 'cancelled'; });
                if (all_cancelled) {
                    workflow.overall_status = 'cancelled';
                } else if (all_statuses.every(function(s) { return s === 'approved' || s === 'cancelled'; })) {
                    // Mix of approved + cancelled = still partially active
                    workflow.overall_status = 'approved';
                } else if (all_statuses.some(function(s) { return s === 'cancelled' || s === 'declined'; })) {
                    workflow.overall_status = 'declined';
                }
                workflow.last_updated = Date.now();

                return DatabaseService.updateEvent(event_id, {
                    extension_data: angular.merge({}, ext, { workflow: workflow })
                });
            }).then(function() {
                $rootScope.$apply(function() {
                    $rootScope.$broadcast('event:service-cancelled', {
                        eventId: event_id,
                        stage: stage
                    });
                });
                console.log('[EventSync] Service cancelled: event=' + event_id + ' stage=' + stage);
            }).catch(function(err) {
                console.warn('[EventSync] Failed to handle cancellation:', err);
            });
        };
    }

})();
