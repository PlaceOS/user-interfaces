/**
 * My Events Component
 * View and track submitted event requests
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .component('myEvents', {
            template: `
                <div class="my-events-page">
                    <div class="page-header">
                        <h1>My Events</h1>
                        <button class="btn btn-primary" ng-click="$ctrl.goToRequestEvent()">
                            + Request New Event
                        </button>
                    </div>

                    <!-- Error State - UCLA Alert Pattern -->
                    <div class="ucla-alert ucla-alert--error" role="alert" ng-if="$ctrl.error">
                        <span class="ucla-alert__icon" aria-hidden="true">
                            <span class="material-icons">error</span>
                        </span>
                        <span class="ucla-alert__message">{{ $ctrl.error }}</span>
                        <button class="ucla-alert__close" ng-click="$ctrl.dismissError()" title="Dismiss alert" aria-label="Dismiss error message">
                            <span class="material-icons">close</span>
                        </button>
                    </div>

                    <!-- Filters -->
                    <div class="filters-section">
                        <h3>Filter By:</h3>
                        <div class="filter-buttons">
                            <button class="filter-btn"
                                    ng-class="{active: $ctrl.activeFilter === 'all'}"
                                    ng-click="$ctrl.setFilter('all')">
                                All Events
                            </button>
                            <button class="filter-btn"
                                    ng-class="{active: $ctrl.activeFilter === 'draft'}"
                                    ng-click="$ctrl.setFilter('draft')">
                                Draft
                            </button>
                            <button class="filter-btn"
                                    ng-class="{active: $ctrl.activeFilter === 'pending'}"
                                    ng-click="$ctrl.setFilter('pending')">
                                Pending
                            </button>
                            <button class="filter-btn"
                                    ng-class="{active: $ctrl.activeFilter === 'approved'}"
                                    ng-click="$ctrl.setFilter('approved')">
                                Approved
                            </button>
                            <button class="filter-btn"
                                    ng-class="{active: $ctrl.activeFilter === 'rejected'}"
                                    ng-click="$ctrl.setFilter('rejected')">
                                Rejected
                            </button>
                            <button class="filter-btn"
                                    ng-class="{active: $ctrl.activeFilter === 'cancelled'}"
                                    ng-click="$ctrl.setFilter('cancelled')">
                                Cancelled
                            </button>
                            <button class="filter-btn"
                                    ng-class="{active: $ctrl.activeFilter === 'sla_warning'}"
                                    ng-click="$ctrl.setFilter('sla_warning')">
                                <span class="material-icons" style="font-size: 1rem; vertical-align: middle;">warning</span> SLA Warning
                            </button>
                        </div>
                    </div>

                    <!-- Loading State -->
                    <div class="loading" ng-if="$ctrl.loading">
                        <p>Loading events...</p>
                    </div>

                    <!-- Events List -->
                    <div class="events-list" ng-if="!$ctrl.loading">
                        <div class="event-card"
                             ng-repeat="event in $ctrl.filteredEvents">

                            <div class="event-header">
                                <h3 ng-click="$ctrl.viewEventDetails(event.id)" style="cursor: pointer;">{{ event.title }}</h3>
                                <div class="event-header-actions">
                                    <div class="status-badge" ng-class="'status-' + $ctrl.getWorkflowStatus(event)">
                                        {{ $ctrl.getStatusLabel(event) }}
                                    </div>
                                    <button class="btn btn-small btn-secondary"
                                            ng-click="$ctrl.editEvent(event); $event.stopPropagation()">
                                        ✏️ Edit
                                    </button>
                                </div>
                            </div>

                            <div class="event-meta">
                                <div class="meta-item">
                                    <strong>Date:</strong>
                                    {{ $ctrl.formatDate(event.event_start) }}
                                </div>
                                <div class="meta-item">
                                    <strong>Venue:</strong>
                                    {{ event.extension_data.venue }}
                                </div>
                            </div>

                            <div class="approval-checklist" ng-if="$ctrl.hasApprovalTasks(event)">
                                <div class="approval-header">
                                    <strong>Approval Status</strong>
                                    <span class="approval-summary">{{ $ctrl.getApprovedCount(event) }} of {{ $ctrl.getApprovalTasks(event).length }} approvals completed<span ng-if="$ctrl.getCancelledCount(event) > 0">, {{ $ctrl.getCancelledCount(event) }} cancelled</span></span>
                                </div>
                                <div class="approval-progress-bar" ng-if="$ctrl.getWorkflowStatus(event) === 'pending'">
                                    <div class="approval-progress-fill"
                                         ng-style="{width: $ctrl.getProgress(event) + '%'}">
                                    </div>
                                </div>
                                <div class="approval-tasks">
                                    <div class="approval-task"
                                         ng-repeat="task in $ctrl.getApprovalTasks(event)"
                                         ng-class="'task-' + task.status">
                                        <span class="task-name">{{ $ctrl.getStageName(task.stage) }}</span>
                                        <span class="task-status-label status-approved" ng-if="task.status === 'approved'">Completed</span>
                                        <span class="task-status-label status-rejected" ng-if="task.status === 'rejected'">Rejected</span>
                                        <span class="task-status-label status-pending" ng-if="task.status === 'pending'">Pending</span>
                                        <span class="task-status-label status-cancelled" ng-if="task.status === 'cancelled'">Cancelled</span>
                                    </div>
                                </div>
                            </div>

                            <div class="event-warnings" ng-if="$ctrl.hasWarnings(event)">
                                <span class="warning-badge" ng-if="$ctrl.hasSlaWarning(event)">
                                    <span class="material-icons">warning</span> Approaching Deadline
                                </span>
                                <span class="warning-badge" ng-if="$ctrl.hasMissingDocuments(event)">
                                    <span class="material-icons">description</span> Missing Documents
                                </span>
                            </div>

                            <!-- Optional Services Section -->
                            <div class="event-actions-section">
                                <h4>Event Services</h4>
                                <div class="service-action-buttons">
                                    <!-- Upload Presentation -->
                                    <div class="service-action-card">
                                        <div class="service-action-header">
                                            <span class="service-action-icon">📊</span>
                                            <span class="service-action-title">Presentation</span>
                                        </div>
                                        <label class="btn btn-small btn-primary" ng-click="$event.stopPropagation()">
                                            <input type="file"
                                                   accept=".pdf,.ppt,.pptx,.key"
                                                   style="display: none;"
                                                   onchange="angular.element(this).scope().$ctrl.uploadPresentation(event, this.files)">
                                            📎 Upload
                                        </label>
                                    </div>

                                    <!-- Digital Signage -->
                                    <div class="service-action-card">
                                        <div class="service-action-header">
                                            <span class="service-action-icon">📺</span>
                                            <span class="service-action-title">Digital Signage</span>
                                        </div>
                                        <button class="btn btn-small btn-primary"
                                                ng-click="$ctrl.manageSignage(event); $event.stopPropagation()">
                                            ⚙️ Manage
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Empty State -->
                        <div class="empty-state" ng-if="$ctrl.filteredEvents.length === 0">
                            <p>No events found</p>
                            <button class="btn btn-primary" ng-click="$ctrl.goToRequestEvent()">
                                Request Your First Event
                            </button>
                        </div>
                    </div>
                </div>
            `,
            controller: MyEventsController
        });

    function MyEventsController($location, $scope, PlaceOSApiService, ApprovalWorkflowService, PolicyEngineService) {
        var ctrl = this;

        ctrl.events = [];
        ctrl.filteredEvents = [];
        ctrl.activeFilter = 'all';
        ctrl.loading = true;
        ctrl.error = null;

        /**
         * Initialize component
         */
        ctrl.$onInit = function() {
            ctrl.loadEvents();
        };

        /**
         * Load all events for current user
         */
        ctrl.loadEvents = function() {
            ctrl.loading = true;
            ctrl.error = null;

            PlaceOSApiService.getMyEvents()
                .then(function(response) {
                    ctrl.events = response.data;
                    ctrl.applyFilter();
                    ctrl.loading = false;
                })
                .catch(function(error) {
                    // Only show error when connected to live API
                    // For mock data, errors should not occur
                    console.error('Failed to load events:', error);
                    ctrl.loading = false;
                });
        };

        /**
         * Dismiss error message
         */
        ctrl.dismissError = function() {
            ctrl.error = null;
        };

        /**
         * Set active filter
         */
        ctrl.setFilter = function(filter) {
            ctrl.activeFilter = filter;
            ctrl.applyFilter();
        };

        /**
         * Apply current filter to events
         */
        ctrl.applyFilter = function() {
            switch (ctrl.activeFilter) {
                case 'all':
                    ctrl.filteredEvents = ctrl.events;
                    break;
                case 'draft':
                    ctrl.filteredEvents = ctrl.events.filter(function(e) {
                        return ctrl.getWorkflowStatus(e) === 'draft';
                    });
                    break;
                case 'pending':
                    ctrl.filteredEvents = ctrl.events.filter(function(e) {
                        return ctrl.getWorkflowStatus(e) === 'pending';
                    });
                    break;
                case 'approved':
                    ctrl.filteredEvents = ctrl.events.filter(function(e) {
                        return ctrl.getWorkflowStatus(e) === 'approved';
                    });
                    break;
                case 'rejected':
                    ctrl.filteredEvents = ctrl.events.filter(function(e) {
                        return ctrl.getWorkflowStatus(e) === 'rejected';
                    });
                    break;
                case 'cancelled':
                    ctrl.filteredEvents = ctrl.events.filter(function(e) {
                        return ctrl.getWorkflowStatus(e) === 'cancelled' || ctrl.getCancelledCount(e) > 0;
                    });
                    break;
                case 'sla_warning':
                    ctrl.filteredEvents = ctrl.events.filter(function(e) {
                        return ctrl.hasSlaWarning(e);
                    });
                    break;
                default:
                    ctrl.filteredEvents = ctrl.events;
            }
        };

        /**
         * Get workflow status from event
         */
        ctrl.getWorkflowStatus = function(event) {
            return event.extension_data && event.extension_data.workflow
                ? event.extension_data.workflow.overall_status
                : 'draft';
        };

        /**
         * Get status label for display
         */
        ctrl.getStatusLabel = function(event) {
            var status = ctrl.getWorkflowStatus(event);
            var labels = {
                'draft': 'Draft',
                'pending': 'Pending Approval',
                'approved': 'Approved',
                'rejected': 'Rejected',
                'cancelled': 'Cancelled'
            };
            return labels[status] || status;
        };

        /**
         * Get approval progress percentage
         */
        ctrl.getProgress = function(event) {
            return event.extension_data && event.extension_data.workflow
                ? event.extension_data.workflow.progress_percent
                : 0;
        };

        /**
         * Check if event has SLA warning
         */
        ctrl.hasSlaWarning = function(event) {
            return event.extension_data && event.extension_data.workflow
                ? event.extension_data.workflow.sla_warning
                : false;
        };

        /**
         * Check if event has missing documents
         */
        ctrl.hasMissingDocuments = function(event) {
            if (!event.extension_data || !event.extension_data.documents) {
                return false;
            }
            return event.extension_data.documents.some(function(doc) {
                return doc.required && !doc.uploaded;
            });
        };

        /**
         * Check if event has any warnings
         */
        ctrl.hasWarnings = function(event) {
            return ctrl.hasSlaWarning(event) || ctrl.hasMissingDocuments(event);
        };

        /**
         * Format date for display
         */
        ctrl.formatDate = function(timestamp) {
            if (!timestamp) return 'N/A';
            var date = new Date(timestamp);
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
            });
        };

        /**
         * View event details
         */
        ctrl.viewEventDetails = function(eventId) {
            $location.path('/my-events/' + eventId);
        };

        /**
         * Navigate to request event page
         */
        ctrl.goToRequestEvent = function() {
            $location.path('/request-event');
        };

        /**
         * Edit event
         */
        ctrl.editEvent = function(event) {
            // Navigate to edit event form
            $location.path('/edit-event/' + event.id);
        };

        /**
         * Upload presentation for event
         */
        ctrl.uploadPresentation = function(event, files) {
            if (!files || files.length === 0) return;

            var file = files[0];
            var maxSize = 50 * 1024 * 1024; // 50MB

            if (file.size > maxSize) {
                alert('Presentation file must be less than 50MB');
                return;
            }

            // In production, upload via PlaceOSApiService
            console.log('Uploading presentation:', file.name, 'for event:', event.title);
            alert('Presentation "' + file.name + '" uploaded successfully for: ' + event.title);
            $scope.$apply();
        };

        /**
         * Manage digital signage for event
         */
        ctrl.manageSignage = function(event) {
            // In production, navigate to signage management page or open modal
            alert('Digital Signage management for: ' + event.title + '\n\nThis would open a signage playlist editor.');
        };

        /**
         * Check if event has approval tasks
         */
        ctrl.hasApprovalTasks = function(event) {
            return event.extension_data &&
                   event.extension_data.workflow &&
                   event.extension_data.workflow.approval_tasks &&
                   event.extension_data.workflow.approval_tasks.length > 0;
        };

        /**
         * Get approval tasks from event
         */
        ctrl.getApprovalTasks = function(event) {
            if (!ctrl.hasApprovalTasks(event)) {
                return [];
            }
            return event.extension_data.workflow.approval_tasks;
        };

        /**
         * Get stage name
         */
        ctrl.getStageName = function(stage) {
            return PolicyEngineService.getStageName(stage);
        };

        /**
         * Get count of approved tasks
         */
        ctrl.getApprovedCount = function(event) {
            var tasks = ctrl.getApprovalTasks(event);
            return tasks.filter(function(task) {
                return task.status === 'approved';
            }).length;
        };

        /**
         * Get count of cancelled tasks
         */
        ctrl.getCancelledCount = function(event) {
            var tasks = ctrl.getApprovalTasks(event);
            return tasks.filter(function(task) {
                return task.status === 'cancelled';
            }).length;
        };
    }

})();
