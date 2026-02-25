/**
 * UCLA Document Management Service
 * Handles document uploads, validation, and tracking
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .service('DocumentManagementService', ['PlaceOSApiService', 'APP_CONFIG', '$q', DocumentManagementService]);

    function DocumentManagementService(PlaceOSApiService, APP_CONFIG, $q) {
        var self = this;

        /**
         * Validate file before upload
         * @param {File} file - File to validate
         * @returns {Object} Validation result {valid, error}
         */
        self.validateFile = function(file) {
            var maxSize = APP_CONFIG.ucla.document_upload_max_size;
            var allowedTypes = APP_CONFIG.ucla.allowed_document_types;

            // Check file size
            if (file.size > maxSize) {
                return {
                    valid: false,
                    error: 'File size exceeds maximum allowed size of ' + (maxSize / 1048576) + 'MB'
                };
            }

            // Check file type
            if (allowedTypes.indexOf(file.type) === -1) {
                return {
                    valid: false,
                    error: 'File type not allowed. Allowed types: PDF, JPG, PNG'
                };
            }

            return { valid: true, error: null };
        };

        /**
         * Upload document for an event
         * @param {File} file - File to upload
         * @param {String} eventId - Event ID
         * @param {String} documentType - Document type code
         * @returns {Promise}
         */
        self.uploadDocument = function(file, eventId, documentType) {
            // Validate file
            var validation = self.validateFile(file);
            if (!validation.valid) {
                return $q.reject({ error: validation.error });
            }

            // Prepare metadata
            var metadata = {
                event_id: eventId,
                document_type: documentType,
                uploaded_at: Date.now(),
                file_name: file.name,
                file_size: file.size,
                content_type: file.type
            };

            // Upload via PlaceOS API
            return PlaceOSApiService.uploadDocument(file, metadata);
        };

        /**
         * Update document requirement after upload
         * @param {Array} documents - Document requirements array
         * @param {String} documentType - Document type that was uploaded
         * @param {Object} uploadResult - Result from upload API
         * @returns {Array} Updated documents array
         */
        self.markDocumentUploaded = function(documents, documentType, uploadResult) {
            var docIndex = documents.findIndex(function(doc) {
                return doc.type === documentType;
            });

            if (docIndex >= 0) {
                documents[docIndex].uploaded = true;
                documents[docIndex].validated = true;
                documents[docIndex].upload_id = uploadResult.id;
                documents[docIndex].uploaded_at = Date.now();
                documents[docIndex].file_url = uploadResult.url;
                documents[docIndex].file_name = uploadResult.file_name;
            }

            return documents;
        };

        /**
         * Remove/delete uploaded document
         * @param {Array} documents - Document requirements array
         * @param {String} documentType - Document type to remove
         * @returns {Array} Updated documents array
         */
        self.removeDocument = function(documents, documentType) {
            var docIndex = documents.findIndex(function(doc) {
                return doc.type === documentType;
            });

            if (docIndex >= 0) {
                documents[docIndex].uploaded = false;
                documents[docIndex].validated = false;
                documents[docIndex].upload_id = null;
                documents[docIndex].uploaded_at = null;
                documents[docIndex].file_url = null;
                documents[docIndex].file_name = null;
            }

            return documents;
        };

        /**
         * Get document upload status summary
         * @param {Array} documents - Document requirements array
         * @returns {Object} Summary statistics
         */
        self.getDocumentSummary = function(documents) {
            var total = documents.length;
            var uploaded = documents.filter(function(doc) { return doc.uploaded; }).length;
            var validated = documents.filter(function(doc) { return doc.validated; }).length;
            var required = documents.filter(function(doc) { return doc.required; }).length;
            var missing = documents.filter(function(doc) { return doc.required && !doc.uploaded; }).length;

            return {
                total: total,
                uploaded: uploaded,
                validated: validated,
                required: required,
                missing: missing,
                complete: missing === 0
            };
        };

        /**
         * Get icon for document type
         * @param {String} documentType - Document type code
         * @returns {String} Icon name/class
         */
        self.getDocumentIcon = function(documentType) {
            var icons = {
                'ALCOHOL_PERMIT': 'fa-glass',
                'COI': 'fa-shield',
                'SITE_PLAN': 'fa-map',
                'NOISE_PERMIT': 'fa-volume-up',
                'VENDOR_LICENSE': 'fa-id-badge',
                'TRAFFIC_PLAN': 'fa-traffic-light',
                'RISK_ASSESSMENT': 'fa-exclamation-triangle',
                'SECURITY_PLAN': 'fa-lock',
                'RAIN_PLAN': 'fa-umbrella'
            };

            return icons[documentType] || 'fa-file';
        };

        /**
         * Format file size for display
         * @param {Number} bytes - File size in bytes
         * @returns {String}
         */
        self.formatFileSize = function(bytes) {
            if (bytes === 0) return '0 Bytes';

            var k = 1024;
            var sizes = ['Bytes', 'KB', 'MB', 'GB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));

            return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
        };

        /**
         * Check if file type is allowed
         * @param {String} contentType - MIME type
         * @returns {Boolean}
         */
        self.isAllowedFileType = function(contentType) {
            var allowedTypes = APP_CONFIG.ucla.allowed_document_types;
            return allowedTypes.indexOf(contentType) !== -1;
        };

        /**
         * Get upload progress status
         * @param {Object} document - Document requirement
         * @returns {Object} Status info {status, label, color}
         */
        self.getUploadStatus = function(document) {
            if (document.validated) {
                return {
                    status: 'validated',
                    label: 'Uploaded & Validated',
                    color: 'green',
                    icon: 'fa-check-circle'
                };
            } else if (document.uploaded) {
                return {
                    status: 'uploaded',
                    label: 'Uploaded (Pending Validation)',
                    color: 'yellow',
                    icon: 'fa-clock'
                };
            } else if (document.required) {
                return {
                    status: 'required',
                    label: 'Required - Not Uploaded',
                    color: 'red',
                    icon: 'fa-exclamation-circle'
                };
            } else {
                return {
                    status: 'optional',
                    label: 'Optional',
                    color: 'gray',
                    icon: 'fa-circle'
                };
            }
        };
    }

})();
