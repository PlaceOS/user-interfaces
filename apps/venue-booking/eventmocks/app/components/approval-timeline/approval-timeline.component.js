/**
 * Approval Timeline Component
 * Visual timeline of event approval progress
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .component('approvalTimeline', {
            template: `
                <div class="approval-timeline-page">
                    <!-- Loading State -->
                    <div class="loading" ng-if="$ctrl.loading">
                        <p>Loading event details...</p>
                    </div>

                    <!-- Error State -->
                    <div class="alert alert-error" ng-if="$ctrl.error">
                        {{ $ctrl.error }}
                        <button class="btn btn-secondary" ng-click="$ctrl.goBack()">Go Back</button>
                    </div>

                    <!-- Event Details -->
                    <div class="event-details" ng-if="$ctrl.event && !$ctrl.loading">
                        <div class="page-header">
                            <div>
                                <h1>{{ $ctrl.event.title }}</h1>
                                <p class="event-meta">
                                    {{ $ctrl.formatDate($ctrl.event.event_start) }} at {{ $ctrl.event.extension_data.venue }}
                                </p>
                            </div>
                            <div class="header-actions">
                                <div class="status-badge large" ng-class="'status-' + $ctrl.workflow.overall_status">
                                    {{ $ctrl.getStatusLabel($ctrl.workflow.overall_status) }}
                                </div>
                                <button class="btn btn-secondary" ng-click="$ctrl.goBack()">
                                    <span class="material-icons">arrow_back</span> Back to My Events
                                </button>
                            </div>
                        </div>

                        <!-- Overall Progress -->
                        <div class="overall-progress">
                            <h2>Approval Progress</h2>
                            <div class="progress-container">
                                <div class="progress-bar">
                                    <div class="progress-fill"
                                         ng-style="{width: $ctrl.workflow.progress_percent + '%'}">
                                    </div>
                                </div>
                                <span class="progress-label">{{ $ctrl.workflow.progress_percent }}% Complete</span>
                            </div>

                            <div class="progress-stats">
                                <div class="stat">
                                    <strong>{{ $ctrl.getApprovedCount() }}</strong> of
                                    <strong>{{ $ctrl.workflow.approval_tasks.length }}</strong> approvals complete
                                    <span ng-if="$ctrl.getCancelledCount() > 0" class="cancelled-count">, {{ $ctrl.getCancelledCount() }} cancelled</span>
                                </div>
                                <div class="stat" ng-if="$ctrl.workflow.submitted_at">
                                    Submitted {{ $ctrl.formatDate($ctrl.workflow.submitted_at) }}
                                </div>
                            </div>

                            <!-- Warnings -->
                            <div class="warnings" ng-if="$ctrl.hasWarnings()">
                                <div class="warning-item" ng-if="$ctrl.workflow.sla_warning">
                                    <span class="material-icons">warning</span> Approaching approval deadline
                                </div>
                                <div class="warning-item" ng-if="$ctrl.getMissingDocumentsCount() > 0">
                                    <span class="material-icons">description</span> {{ $ctrl.getMissingDocumentsCount() }} document(s) still needed
                                </div>
                            </div>
                        </div>

                        <!-- Approval Timeline -->
                        <div class="timeline-container">
                            <h2>Approval Timeline</h2>

                            <div class="timeline">
                                <!-- Submission -->
                                <div class="timeline-item submitted">
                                    <div class="timeline-marker">
                                        <div class="marker-icon"><span class="material-icons">send</span></div>
                                    </div>
                                    <div class="timeline-content">
                                        <h3>Event Submitted</h3>
                                        <p class="timestamp" ng-if="$ctrl.workflow.submitted_at">
                                            {{ $ctrl.formatDate($ctrl.workflow.submitted_at) }}
                                        </p>
                                    </div>
                                </div>

                                <!-- Approval Tasks -->
                                <div class="timeline-item"
                                     ng-repeat="task in $ctrl.workflow.approval_tasks"
                                     ng-class="'status-' + task.status">

                                    <div class="timeline-marker">
                                        <div class="marker-icon" ng-bind-html="$ctrl.getTaskIcon(task)"></div>
                                    </div>

                                    <div class="timeline-content" ng-class="{'cancelled-task': task.status === 'cancelled'}">
                                        <div class="task-header">
                                            <h3 ng-class="{'stage-cancelled': task.status === 'cancelled'}">{{ $ctrl.getStageName(task.stage) }}</h3>
                                            <div class="task-badge" ng-class="'badge-' + task.status" ng-if="task.status !== 'cancelled'">
                                                {{ $ctrl.getTaskStatusLabel(task.status) }}
                                            </div>
                                            <div class="task-badge badge-cancelled" ng-if="task.status === 'cancelled'">
                                                Cancelled
                                            </div>
                                        </div>

                                        <div class="task-details">
                                            <div class="detail-item">
                                                <strong>Owner:</strong> {{ task.owner_role }}
                                            </div>

                                            <div class="detail-item" ng-if="task.assignee_name">
                                                <strong>Assigned to:</strong> {{ task.assignee_name }}
                                            </div>

                                            <div class="detail-item" ng-if="task.due_at && task.status === 'pending'">
                                                <strong>Due:</strong>
                                                <span ng-class="{overdue: $ctrl.isOverdue(task)}">
                                                    {{ $ctrl.formatDate(task.due_at) }}
                                                </span>
                                            </div>

                                            <div class="detail-item" ng-if="task.completed_at">
                                                <strong>Completed:</strong> {{ $ctrl.formatDate(task.completed_at) }}
                                            </div>

                                            <!-- Required Documents -->
                                            <div class="required-docs" ng-if="task.required_documents.length > 0">
                                                <strong>Required Documents:</strong>
                                                <ul>
                                                    <li ng-repeat="docType in task.required_documents">
                                                        {{ $ctrl.getDocumentName(docType) }}
                                                        <span ng-if="$ctrl.isDocumentUploaded(docType)" class="doc-check"><span class="material-icons">check_circle</span></span>
                                                        <span ng-if="!$ctrl.isDocumentUploaded(docType)" class="doc-missing"><span class="material-icons">warning</span></span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <!-- Comments -->
                                            <div class="task-comments" ng-if="task.comments">
                                                <strong>Comments:</strong>
                                                <p>{{ task.comments }}</p>
                                            </div>

                                            <!-- Refund deadline info -->
                                            <div class="refund-info" ng-if="task.refund_deadline && task.status !== 'cancelled'">
                                                <div ng-if="$ctrl.isBeforeDeadline(task)" class="refund-active">
                                                    <span class="material-icons">schedule</span>
                                                    Refundable until {{ $ctrl.formatDate(task.refund_deadline) }}
                                                    &mdash; {{ $ctrl.formatCurrency(task.refund_amount) }}
                                                </div>
                                                <div ng-if="!$ctrl.isBeforeDeadline(task)" class="refund-expired">
                                                    <span class="material-icons">block</span>
                                                    Non-refundable (deadline was {{ $ctrl.formatDate(task.refund_deadline) }})
                                                </div>
                                            </div>

                                            <!-- Refund issued for cancelled tasks -->
                                            <div class="refund-issued" ng-if="task.status === 'cancelled' && task.refund_issued > 0">
                                                <span class="material-icons">payments</span>
                                                {{ $ctrl.formatCurrency(task.refund_issued) }} refund issued
                                            </div>

                                            <!-- Cancel button -->
                                            <button class="btn-cancel-service"
                                                    ng-if="$ctrl.canCancelTask(task)"
                                                    ng-click="$ctrl.confirmCancelTask(task)">
                                                <span class="material-icons">cancel</span>
                                                Cancel Service
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Ad-Hoc Services -->
                        <div class="adhoc-section" ng-if="$ctrl.event.extension_data.adhoc_services && $ctrl.event.extension_data.adhoc_services.length > 0">
                            <h2>Additional Services</h2>
                            <p class="section-subtitle">Services added after initial request</p>

                            <div class="adhoc-card"
                                 ng-repeat="svc in $ctrl.event.extension_data.adhoc_services"
                                 ng-class="{'adhoc-cancelled': svc.status === 'cancelled'}">
                                <div class="adhoc-header">
                                    <span class="adhoc-name" ng-class="{'stage-cancelled': svc.status === 'cancelled'}">{{ svc.name }}</span>
                                    <span class="adhoc-amount">{{ $ctrl.formatCurrency(svc.amount) }}</span>
                                </div>
                                <div class="adhoc-meta">
                                    Added by {{ svc.added_by }} on {{ $ctrl.formatDate(svc.added_at) }}
                                </div>
                                <div class="adhoc-description" ng-if="svc.description">{{ svc.description }}</div>

                                <!-- Refund info -->
                                <div class="refund-info" ng-if="svc.refund_deadline && svc.status !== 'cancelled'">
                                    <div ng-if="$ctrl.isBeforeDeadline(svc)" class="refund-active">
                                        <span class="material-icons">schedule</span>
                                        Refundable until {{ $ctrl.formatDate(svc.refund_deadline) }}
                                        &mdash; {{ $ctrl.formatCurrency(svc.refund_amount) }}
                                    </div>
                                    <div ng-if="!$ctrl.isBeforeDeadline(svc)" class="refund-expired">
                                        <span class="material-icons">block</span>
                                        Non-refundable (deadline was {{ $ctrl.formatDate(svc.refund_deadline) }})
                                    </div>
                                </div>

                                <!-- Cancelled badge -->
                                <div class="cancelled-badge" ng-if="svc.status === 'cancelled'">
                                    Cancelled
                                    <span ng-if="svc.refund_issued"> &mdash; {{ $ctrl.formatCurrency(svc.refund_issued) }} refunded</span>
                                </div>

                                <!-- Cancel button -->
                                <button class="btn-cancel-service"
                                        ng-if="svc.status === 'active'"
                                        ng-click="$ctrl.confirmCancelAdhoc(svc)">
                                    <span class="material-icons">cancel</span>
                                    Cancel Service
                                </button>
                            </div>
                        </div>

                        <!-- Documents Section -->
                        <div class="documents-section" ng-if="$ctrl.event.extension_data.documents.length > 0">
                            <h2>Required Documents</h2>

                            <div class="document-summary">
                                <div class="summary-stat">
                                    <strong>{{ $ctrl.getUploadedDocumentsCount() }}</strong> of
                                    <strong>{{ $ctrl.event.extension_data.documents.length }}</strong> uploaded
                                </div>
                            </div>

                            <div class="documents-list">
                                <div class="document-item"
                                     ng-repeat="doc in $ctrl.event.extension_data.documents"
                                     ng-class="{uploaded: doc.uploaded, required: doc.required}">

                                    <div class="doc-icon">
                                        <span class="material-icons">{{ $ctrl.getDocumentIcon(doc) }}</span>
                                    </div>

                                    <div class="doc-info">
                                        <strong>{{ doc.name }}</strong>
                                        <span class="required-label" ng-if="doc.required">Required</span>
                                    </div>

                                    <div class="doc-status">
                                        <span ng-if="doc.validated" class="status-validated"><span class="material-icons">check_circle</span> Validated</span>
                                        <span ng-if="doc.uploaded && !doc.validated" class="status-pending"><span class="material-icons">schedule</span> Pending</span>
                                        <span ng-if="!doc.uploaded && doc.required" class="status-missing"><span class="material-icons">warning</span> Missing</span>
                                        <span ng-if="!doc.uploaded && !doc.required" class="status-optional">Optional</span>
                                    </div>

                                    <div class="doc-actions" ng-if="!doc.uploaded && $ctrl.canUploadDocuments()">
                                        <input type="file"
                                               id="upload-{{ doc.type }}"
                                               accept=".pdf,.jpg,.jpeg,.png"
                                               onchange="angular.element(this).scope().$ctrl.uploadDocument('{{ doc.type }}', this.files)"
                                               style="display: none;">
                                        <button class="btn btn-small" onclick="document.getElementById('upload-{{ doc.type }}').click()">
                                            Upload
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Invoice/Payment Section -->
                        <div class="invoice-section" ng-if="$ctrl.invoice">
                            <h2><span class="material-icons">receipt</span> Payment & Invoice</h2>
                            <invoice-view
                                invoice="$ctrl.invoice"
                                event="$ctrl.event"
                                on-pay="$ctrl.openPaymentModal(invoice)">
                            </invoice-view>
                        </div>

                        <!-- Event Information -->
                        <div class="event-info-section">
                            <h2>Event Information</h2>
                            <div class="info-grid">
                                <div class="info-item">
                                    <strong>Organizer:</strong>
                                    {{ $ctrl.event.extension_data.organizer.name }}
                                </div>
                                <div class="info-item">
                                    <strong>Email:</strong>
                                    {{ $ctrl.event.extension_data.organizer.email }}
                                </div>
                                <div class="info-item" ng-if="$ctrl.event.extension_data.attendance_count">
                                    <strong>Expected Attendance:</strong>
                                    {{ $ctrl.event.extension_data.attendance_count }}
                                </div>
                                <div class="info-item" ng-if="$ctrl.event.extension_data.is_outdoor">
                                    <strong>Outdoor Event:</strong> Yes
                                </div>
                                <div class="info-item" ng-if="$ctrl.event.extension_data.is_major_event">
                                    <strong>Major Event:</strong> Yes
                                </div>
                                <div class="info-item" ng-if="$ctrl.event.description">
                                    <strong>Description:</strong>
                                    {{ $ctrl.event.description }}
                                </div>
                                <div class="info-item" ng-if="$ctrl.event.extension_data.special_requirements">
                                    <strong>Special Requirements:</strong>
                                    {{ $ctrl.event.extension_data.special_requirements }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cancel Service Confirmation Modal -->
                    <div class="modal-overlay" ng-if="$ctrl.showCancelModal">
                        <div class="modal-card">
                            <h3>Cancel Service</h3>
                            <p>Are you sure you want to cancel <strong>{{ $ctrl.cancelTargetName }}</strong>?</p>

                            <div class="refund-notice" ng-if="$ctrl.cancelRefundAmount > 0">
                                <span class="material-icons">payments</span>
                                A refund of <strong>{{ $ctrl.formatCurrency($ctrl.cancelRefundAmount) }}</strong> will be issued.
                            </div>
                            <div class="no-refund-notice" ng-if="$ctrl.cancelRefundAmount === 0">
                                <span class="material-icons">warning</span>
                                This service is past its refund deadline. No refund will be issued.
                            </div>

                            <div class="modal-actions">
                                <button class="btn btn-secondary" ng-click="$ctrl.closeCancelModal()">Keep Service</button>
                                <button class="btn btn-danger" ng-click="$ctrl.executeCancelTask()">Cancel Service</button>
                            </div>
                        </div>
                    </div>

                    <!-- Payment Modal -->
                    <payment-modal
                        ng-if="$ctrl.showPaymentModal"
                        quote="$ctrl.invoice.quote"
                        on-payment-complete="$ctrl.onPaymentComplete(payment, method, quote)"
                        on-close="$ctrl.closePaymentModal()">
                    </payment-modal>
                </div>
            `,
            controller: ApprovalTimelineController
        });

    ApprovalTimelineController.$inject = [
        '$routeParams',
        '$location',
        '$scope',
        '$sce',
        'PlaceOSApiService',
        'PolicyEngineService',
        'ApprovalWorkflowService',
        'DocumentManagementService',
        'PaymentService'
    ];

    function ApprovalTimelineController(
        $routeParams,
        $location,
        $scope,
        $sce,
        PlaceOSApiService,
        PolicyEngineService,
        ApprovalWorkflowService,
        DocumentManagementService,
        PaymentService
    ) {
        var ctrl = this;

        ctrl.event = null;
        ctrl.workflow = null;
        ctrl.loading = true;
        ctrl.error = null;
        ctrl.invoice = null;
        ctrl.showPaymentModal = false;

        // Cancel modal state
        ctrl.showCancelModal = false;
        ctrl.cancelTargetName = '';
        ctrl.cancelRefundAmount = 0;
        ctrl.cancelTargetId = null;
        ctrl.cancelTargetType = null; // 'task' or 'adhoc'

        /**
         * Initialize component
         */
        ctrl.$onInit = function() {
            var eventId = $routeParams.eventId;
            if (!eventId) {
                // For mock/demo, redirect to my-events if no ID
                $location.path('/my-events');
                return;
            }

            ctrl.loadEvent(eventId);

            // Listen for real-time sync updates and refresh the event
            $scope.$on('event:adhoc-added', function(evt, data) {
                if (data.eventId === eventId) {
                    ctrl.loadEvent(eventId);
                }
            });
            $scope.$on('event:approval-updated', function(evt, data) {
                if (data.eventId === eventId) {
                    ctrl.loadEvent(eventId);
                }
            });
            $scope.$on('event:service-cancelled', function(evt, data) {
                if (data.eventId === eventId) {
                    ctrl.loadEvent(eventId);
                }
            });
        };

        /**
         * Load event details
         */
        ctrl.loadEvent = function(eventId) {
            ctrl.loading = true;
            ctrl.error = null;

            PlaceOSApiService.getEvent(eventId)
                .then(function(response) {
                    ctrl.event = response.data;
                    ctrl.workflow = ctrl.event.extension_data.workflow;

                    // Recalculate overall status from current task statuses
                    if (ctrl.workflow && ctrl.workflow.approval_tasks) {
                        var statuses = ctrl.workflow.approval_tasks.map(function(t) { return t.status; });
                        var all_cancelled = statuses.length > 0 && statuses.every(function(s) {
                            return s === 'cancelled' || s === 'declined';
                        });
                        if (all_cancelled) {
                            ctrl.workflow.overall_status = 'cancelled';
                        }
                    }

                    // Generate invoice from event data
                    ctrl.generateInvoice();

                    ctrl.loading = false;
                })
                .catch(function(error) {
                    // For mock data, redirect to my-events instead of showing error
                    console.error('Event not found:', error);
                    ctrl.loading = false;
                    $location.path('/my-events');
                });
        };

        /**
         * Generate invoice from event data
         */
        ctrl.generateInvoice = function() {
            var ext = ctrl.event.extension_data || {};

            // Use existing invoice if present, otherwise create one
            if (ext.invoice) {
                ctrl.invoice = ext.invoice;
                return;
            }

            // Calculate quote from event data
            var quoteData = {
                venue_id: ext.venue_id,
                duration: ctrl.event.event_end && ctrl.event.event_start
                    ? Math.round((ctrl.event.event_end - ctrl.event.event_start) / (60 * 60 * 1000))
                    : 2,
                request_items: ext.request_items || []
            };

            var quote = PaymentService.calculateQuote(quoteData, ext.service_options);

            // Create invoice
            ctrl.invoice = PaymentService.createInvoice(ctrl.event.id, quote, null);

            // Check if event is fully cancelled
            if (ctrl.workflow && ctrl.workflow.overall_status === 'cancelled') {
                ctrl.invoice.status = 'cancelled';
                ctrl.invoice.cancelled_at = ctrl.workflow.last_updated || Date.now();
            } else if (ctrl.workflow && ctrl.workflow.overall_status === 'approved') {
                // Approved events are paid
                ctrl.invoice.payments = [{
                    id: 'pi_mock_' + ctrl.event.id,
                    amount: quote.total,
                    currency: 'usd',
                    status: 'succeeded',
                    paymentMethod: 'card',
                    cardLast4: '4242',
                    cardBrand: 'visa',
                    createdAt: ctrl.workflow.last_updated || new Date().toISOString()
                }];
                ctrl.invoice.status = 'paid';
            }
        };

        /**
         * Get status label
         */
        ctrl.getStatusLabel = function(status) {
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
         * Get task status label
         */
        ctrl.getTaskStatusLabel = function(status) {
            var labels = {
                'pending': 'Pending',
                'delegated': 'Delegated',
                'approved': 'Approved',
                'rejected': 'Rejected',
                'waived': 'Waived',
                'expired': 'Expired',
                'cancelled': 'Cancelled'
            };
            return labels[status] || status;
        };

        /**
         * Get task icon HTML
         */
        ctrl.getTaskIcon = function(task) {
            var icons = {
                'pending': '<span class="material-icons">schedule</span>',
                'delegated': '<span class="material-icons">person</span>',
                'approved': '<span class="material-icons">check_circle</span>',
                'rejected': '<span class="material-icons">cancel</span>',
                'waived': '<span class="material-icons">arrow_forward</span>',
                'expired': '<span class="material-icons">warning</span>',
                'cancelled': '<span class="material-icons">do_not_disturb</span>'
            };
            return $sce.trustAsHtml(icons[task.status] || '<span class="material-icons">radio_button_unchecked</span>');
        };

        /**
         * Get stage name
         */
        ctrl.getStageName = function(stage) {
            return PolicyEngineService.getStageName(stage);
        };

        /**
         * Get document name
         */
        ctrl.getDocumentName = function(docType) {
            return PolicyEngineService.getDocumentName(docType);
        };

        /**
         * Get document icon (Material Design icon name)
         */
        ctrl.getDocumentIcon = function(doc) {
            return doc.uploaded ? 'description' : 'insert_drive_file';
        };

        /**
         * Check if document is uploaded
         */
        ctrl.isDocumentUploaded = function(docType) {
            var doc = ctrl.event.extension_data.documents.find(function(d) {
                return d.type === docType;
            });
            return doc && doc.uploaded;
        };

        /**
         * Check if task is overdue
         */
        ctrl.isOverdue = function(task) {
            return ApprovalWorkflowService.isTaskOverdue(task);
        };

        /**
         * Get approved count
         */
        ctrl.getApprovedCount = function() {
            return ctrl.workflow.approval_tasks.filter(function(task) {
                return task.status === 'approved' || task.status === 'waived';
            }).length;
        };

        /**
         * Get cancelled task count
         */
        ctrl.getCancelledCount = function() {
            return ctrl.workflow.approval_tasks.filter(function(task) {
                return task.status === 'cancelled';
            }).length;
        };

        /**
         * Get uploaded documents count
         */
        ctrl.getUploadedDocumentsCount = function() {
            return ctrl.event.extension_data.documents.filter(function(doc) {
                return doc.uploaded;
            }).length;
        };

        /**
         * Get missing documents count
         */
        ctrl.getMissingDocumentsCount = function() {
            return ctrl.event.extension_data.documents.filter(function(doc) {
                return doc.required && !doc.uploaded;
            }).length;
        };

        /**
         * Check if has warnings
         */
        ctrl.hasWarnings = function() {
            return ctrl.workflow.sla_warning || ctrl.getMissingDocumentsCount() > 0;
        };

        /**
         * Check if user can upload documents
         */
        ctrl.canUploadDocuments = function() {
            return ctrl.workflow.overall_status !== 'approved' &&
                   ctrl.workflow.overall_status !== 'rejected';
        };

        /**
         * Upload document
         */
        ctrl.uploadDocument = function(docType, files) {
            if (!files || files.length === 0) return;

            var file = files[0];

            DocumentManagementService.uploadDocument(file, ctrl.event.id, docType)
                .then(function(response) {
                    // Update document status
                    var docs = ctrl.event.extension_data.documents;
                    DocumentManagementService.markDocumentUploaded(docs, docType, response.data);

                    // Update event
                    return PlaceOSApiService.updateEvent(ctrl.event.id, {
                        extension_data: ctrl.event.extension_data
                    });
                })
                .then(function() {
                    $scope.$apply();
                })
                .catch(function(error) {
                    alert('Failed to upload document: ' + (error.error || 'Unknown error'));
                });
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
         * Check if current time is before task/service refund deadline
         */
        ctrl.isBeforeDeadline = function(item) {
            return item.refund_deadline && Date.now() < item.refund_deadline;
        };

        /**
         * Check if a task can be cancelled
         */
        ctrl.canCancelTask = function(task) {
            return task.status === 'pending' || task.status === 'delegated' || task.status === 'approved';
        };

        /**
         * Format currency using PaymentService
         */
        ctrl.formatCurrency = function(amount) {
            return PaymentService.formatCurrency(amount || 0);
        };

        /**
         * Open cancel confirmation modal for an approval task
         */
        ctrl.confirmCancelTask = function(task) {
            var refundInfo = PaymentService.calculateRefund(task);
            ctrl.cancelTargetId = task.id;
            ctrl.cancelTargetType = 'task';
            ctrl.cancelTargetName = PolicyEngineService.getStageName(task.stage);
            ctrl.cancelRefundAmount = refundInfo.refundable ? refundInfo.amount : 0;
            ctrl.showCancelModal = true;
        };

        /**
         * Open cancel confirmation modal for an ad-hoc service
         */
        ctrl.confirmCancelAdhoc = function(svc) {
            var refundInfo = PaymentService.calculateRefund(svc);
            ctrl.cancelTargetId = svc.id;
            ctrl.cancelTargetType = 'adhoc';
            ctrl.cancelTargetName = svc.name;
            ctrl.cancelRefundAmount = refundInfo.refundable ? refundInfo.amount : 0;
            ctrl.showCancelModal = true;
        };

        /**
         * Execute the cancellation
         */
        ctrl.executeCancelTask = function() {
            var result;
            var cancelled_stage = null;

            if (ctrl.cancelTargetType === 'task') {
                result = ApprovalWorkflowService.cancelTask(ctrl.workflow, ctrl.cancelTargetId);
                // Find the stage name for sync
                var tasks = ctrl.workflow.approval_tasks || [];
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i].id === ctrl.cancelTargetId) {
                        cancelled_stage = tasks[i].stage;
                        break;
                    }
                }
            } else if (ctrl.cancelTargetType === 'adhoc') {
                var adhoc_services = ctrl.event.extension_data.adhoc_services || [];
                result = ApprovalWorkflowService.cancelAdhocService(adhoc_services, ctrl.cancelTargetId);
            }

            if (result && result.success) {
                // Regenerate invoice to reflect cancellation
                ctrl.event.extension_data.invoice = null;
                ctrl.generateInvoice();

                // Save updated event
                PlaceOSApiService.updateEvent(ctrl.event.id, {
                    extension_data: ctrl.event.extension_data
                }).then(function() {
                    $scope.$apply();
                });

                // Sync cancellation to sync server
                if (ctrl.cancelTargetType === 'task' && cancelled_stage) {
                    PlaceOSApiService.syncCancellation(ctrl.event.id, cancelled_stage, result.refund || 0);
                }
                PlaceOSApiService.syncEventUpdate(ctrl.event);
            }

            ctrl.closeCancelModal();
        };

        /**
         * Close cancel modal
         */
        ctrl.closeCancelModal = function() {
            ctrl.showCancelModal = false;
            ctrl.cancelTargetName = '';
            ctrl.cancelRefundAmount = 0;
            ctrl.cancelTargetId = null;
            ctrl.cancelTargetType = null;
        };

        /**
         * Go back to events list
         */
        ctrl.goBack = function() {
            $location.path('/my-events');
        };

        /**
         * Open payment modal
         */
        ctrl.openPaymentModal = function(invoice) {
            ctrl.showPaymentModal = true;
        };

        /**
         * Close payment modal
         */
        ctrl.closePaymentModal = function() {
            ctrl.showPaymentModal = false;
        };

        /**
         * Handle payment completion
         */
        ctrl.onPaymentComplete = function(payment, method, quote) {
            // Add payment to invoice
            if (!ctrl.invoice.payments) {
                ctrl.invoice.payments = [];
            }
            ctrl.invoice.payments.push(payment);
            ctrl.invoice.status = 'paid';

            // Save invoice to event
            ctrl.event.extension_data.invoice = ctrl.invoice;

            PlaceOSApiService.updateEvent(ctrl.event.id, {
                extension_data: ctrl.event.extension_data
            }).then(function() {
                ctrl.showPaymentModal = false;
            });
        };
    }

})();
