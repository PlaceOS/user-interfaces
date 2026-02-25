/**
 * UCLA Event Management System
 * Application Configuration
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .constant('APP_CONFIG', {
            // PlaceOS Configuration
            placeos: {
                domain: 'placeos.ucla.edu',  // Change to your PlaceOS domain
                protocol: 'https',
                port: 443,
                api_path: '/api/staff/v1',
                use_mock: true  // Set to false for production
            },

            // UCLA Specific Configuration
            ucla: {
                zone_id: 'zone-ucla-main',  // Your UCLA zone ID
                policy_metadata_key: 'workflows/events',
                document_upload_max_size: 10485760,  // 10MB
                allowed_document_types: [
                    'application/pdf',
                    'image/jpeg',
                    'image/jpg',
                    'image/png'
                ]
            },

            // App Settings
            app: {
                name: 'UCLA Event Management',
                version: '1.0.0',
                default_sla_hours: 24
            }
        });

})();
