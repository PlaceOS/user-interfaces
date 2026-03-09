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
                if (all_statuses.every(function(s) { return s === 'approved'; })) {
                    workflow.overall_status = 'approved';
                } else if (all_statuses.some(function(s) { return s === 'declined'; })) {
                    workflow.overall_status = 'declined';
                } else {
                    workflow.overall_status = 'pending';
                }
                workflow.last_updated = Date.now();

                return DatabaseService.updateEvent(event_id, {
                    extension_data: angular.merge({}, ext, { workflow: workflow })
                });
            }).then(function() {
                $rootScope.$broadcast('event:approval-updated', {
                    eventId: event_id,
                    category: category,
                    status: status
                });
                console.log('[EventSync] Updated approval: event=' + event_id + ' ' + category + '=' + status);
            }).catch(function(err) {
                console.warn('[EventSync] Failed to update event:', err);
            });
        };

        /**
         * Handle service cancellation from concierge
         */
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

                workflow.last_updated = Date.now();

                return DatabaseService.updateEvent(event_id, {
                    extension_data: angular.merge({}, ext, { workflow: workflow })
                });
            }).then(function() {
                $rootScope.$broadcast('event:service-cancelled', {
                    eventId: event_id,
                    stage: stage
                });
                console.log('[EventSync] Service cancelled: event=' + event_id + ' stage=' + stage);
            }).catch(function(err) {
                console.warn('[EventSync] Failed to handle cancellation:', err);
            });
        };
    }

})();
