/**
 * UCLA Approval Workflow Service
 * Manages approval workflow state and transitions
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .service('ApprovalWorkflowService', ['PolicyEngineService', ApprovalWorkflowService]);

    function ApprovalWorkflowService(PolicyEngineService) {
        var self = this;

        /**
         * Initialize workflow for a new event
         * @param {Object} eventContext - Event data
         * @returns {Object} Workflow and documents
         */
        self.initializeWorkflow = function(eventContext) {
            var evaluation = PolicyEngineService.evaluatePolicies(eventContext);
            var now = Date.now();
            var dueAt = now + (evaluation.sla_hours * 60 * 60 * 1000);

            // Create approval tasks
            var approvalTasks = evaluation.required_stages.map(function(stage) {
                return {
                    id: 'task_' + stage + '_' + Date.now(),
                    stage: stage,
                    status: 'pending',
                    owner_role: stage + '_Approver',
                    assignee_user_id: null,
                    assignee_name: null,
                    required_documents: self.getDocumentsForStage(stage, evaluation.required_documents),
                    due_at: dueAt,
                    completed_at: null,
                    comments: null,
                    audit_trail: []
                };
            });

            // Create document requirements
            var documents = evaluation.required_documents.map(function(docType) {
                return {
                    id: 'docreq_' + docType + '_' + Date.now(),
                    type: docType,
                    name: PolicyEngineService.getDocumentName(docType),
                    required: true,
                    uploaded: false,
                    validated: false,
                    upload_id: null,
                    uploaded_at: null
                };
            });

            // Create workflow status
            var workflow = {
                overall_status: 'draft',
                approval_tasks: approvalTasks,
                submitted_at: null,
                last_updated: now,
                sla_hours: evaluation.sla_hours,
                sla_warning: false,
                progress_percent: 0
            };

            return {
                workflow: workflow,
                documents: documents
            };
        };

        /**
         * Get documents required for a specific approval stage
         * @param {String} stage - Stage code
         * @param {Array} allDocuments - All required documents
         * @returns {Array}
         */
        self.getDocumentsForStage = function(stage, allDocuments) {
            var stageDocMap = {
                'SAFETY': ['ALCOHOL_PERMIT', 'VENDOR_LICENSE', 'SECURITY_PLAN', 'NOISE_PERMIT', 'RISK_ASSESSMENT'],
                'SERVICES': ['COI'],
                'SETUP': ['SITE_PLAN', 'TRAFFIC_PLAN'],
                'PARKING': ['TRAFFIC_PLAN'],
                'AV_TECH': [],
                'VENUE': ['SITE_PLAN', 'RAIN_PLAN'],
                'DINING': [],
                'EVENTS': []
            };

            var stageDocs = stageDocMap[stage] || [];
            return allDocuments.filter(function(doc) {
                return stageDocs.indexOf(doc) !== -1;
            });
        };

        /**
         * Submit workflow (change from draft to pending)
         * @param {Object} workflow - Workflow object
         * @returns {Object} Updated workflow
         */
        self.submitWorkflow = function(workflow) {
            workflow.overall_status = 'pending';
            workflow.submitted_at = Date.now();
            workflow.last_updated = Date.now();
            return workflow;
        };

        /**
         * Update task status (approve, reject, delegate)
         * @param {Object} workflow - Workflow object
         * @param {String} taskId - Task ID to update
         * @param {Object} updates - Updates to apply
         * @returns {Object} Updated workflow
         */
        self.updateTask = function(workflow, taskId, updates) {
            var taskIndex = workflow.approval_tasks.findIndex(function(t) {
                return t.id === taskId;
            });

            if (taskIndex === -1) {
                throw new Error('Task not found: ' + taskId);
            }

            var task = workflow.approval_tasks[taskIndex];

            // Add audit trail entry
            task.audit_trail.push({
                timestamp: Date.now(),
                action: updates.status || 'updated',
                by_user: updates.by_user || 'system',
                details: updates.comments || ''
            });

            // Apply updates
            angular.extend(task, updates);

            if (updates.status === 'approved' || updates.status === 'rejected') {
                task.completed_at = Date.now();
            }

            // Recalculate workflow status
            self.recalculateWorkflowStatus(workflow);

            workflow.last_updated = Date.now();
            return workflow;
        };

        /**
         * Recalculate overall workflow status and progress
         * @param {Object} workflow - Workflow object
         */
        self.recalculateWorkflowStatus = function(workflow) {
            var tasks = workflow.approval_tasks;
            var totalTasks = tasks.length;
            var approvedCount = 0;
            var rejectedCount = 0;
            var pendingCount = 0;

            tasks.forEach(function(task) {
                if (task.status === 'approved' || task.status === 'waived') {
                    approvedCount++;
                } else if (task.status === 'rejected') {
                    rejectedCount++;
                } else {
                    pendingCount++;
                }
            });

            // Update progress percentage
            workflow.progress_percent = Math.round((approvedCount / totalTasks) * 100);

            // Update overall status
            if (rejectedCount > 0) {
                workflow.overall_status = 'rejected';
            } else if (pendingCount === 0 && approvedCount === totalTasks) {
                workflow.overall_status = 'approved';
            } else {
                workflow.overall_status = 'pending';
            }

            // Check SLA warning (24 hours before due date)
            if (workflow.submitted_at && workflow.sla_hours) {
                var dueAt = workflow.submitted_at + (workflow.sla_hours * 60 * 60 * 1000);
                var warningThreshold = dueAt - (24 * 60 * 60 * 1000);
                var now = Date.now();

                workflow.sla_warning = now >= warningThreshold && now < dueAt && pendingCount > 0;
            }
        };

        /**
         * Get workflow status badge info
         * @param {Object} workflow - Workflow object
         * @returns {Object} Badge info (label, color, icon)
         */
        self.getStatusBadge = function(workflow) {
            var badges = {
                'draft': { label: 'Draft', color: 'gray', icon: 'edit' },
                'pending': { label: 'Pending', color: 'yellow', icon: 'clock' },
                'approved': { label: 'Approved', color: 'green', icon: 'check' },
                'rejected': { label: 'Rejected', color: 'red', icon: 'times' },
                'cancelled': { label: 'Cancelled', color: 'gray', icon: 'ban' }
            };

            return badges[workflow.overall_status] || badges.draft;
        };

        /**
         * Get task status badge info
         * @param {Object} task - Approval task
         * @returns {Object} Badge info
         */
        self.getTaskStatusBadge = function(task) {
            var badges = {
                'pending': { label: 'Pending', color: 'yellow', icon: 'clock' },
                'delegated': { label: 'Delegated', color: 'blue', icon: 'user' },
                'approved': { label: 'Approved', color: 'green', icon: 'check' },
                'rejected': { label: 'Rejected', color: 'red', icon: 'times' },
                'waived': { label: 'Waived', color: 'gray', icon: 'forward' },
                'expired': { label: 'Expired', color: 'red', icon: 'exclamation' }
            };

            return badges[task.status] || badges.pending;
        };

        /**
         * Check if task is overdue
         * @param {Object} task - Approval task
         * @returns {Boolean}
         */
        self.isTaskOverdue = function(task) {
            if (!task.due_at || task.status === 'approved' || task.status === 'rejected') {
                return false;
            }
            return Date.now() > task.due_at;
        };

        /**
         * Get pending approval stages
         * @param {Object} workflow - Workflow object
         * @returns {Array}
         */
        self.getPendingStages = function(workflow) {
            return workflow.approval_tasks
                .filter(function(task) {
                    return task.status === 'pending' || task.status === 'delegated';
                })
                .map(function(task) {
                    return PolicyEngineService.getStageName(task.stage);
                });
        };

        /**
         * Check if all required documents are uploaded
         * @param {Array} documents - Document requirements
         * @returns {Boolean}
         */
        self.hasAllDocuments = function(documents) {
            return documents.every(function(doc) {
                return !doc.required || doc.uploaded;
            });
        };

        /**
         * Get missing document names
         * @param {Array} documents - Document requirements
         * @returns {Array}
         */
        self.getMissingDocuments = function(documents) {
            return documents
                .filter(function(doc) {
                    return doc.required && !doc.uploaded;
                })
                .map(function(doc) {
                    return doc.name;
                });
        };
    }

})();
