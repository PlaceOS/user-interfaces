/**
 * UCLA Event Management System
 * Application Routes Configuration
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .config(['$routeProvider', '$locationProvider', routeConfig])
        .run(['$rootScope', '$location', 'AuthService', routeGuard])
        .run(['EventSyncService', function(EventSyncService) {
            EventSyncService.connect();
        }]);

    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/login', {
                template: '<login-page></login-page>',
                title: 'Sign In',
                publicRoute: true
            })
            .when('/', {
                template: '<landing-page></landing-page>',
                title: 'Home'
            })
            .when('/find-venue', {
                template: '<venue-search></venue-search>',
                title: 'Find Venue'
            })
            .when('/request-event', {
                template: '<event-request></event-request>',
                title: 'Request Event'
            })
            .when('/request-event/:venueId/:date/:startTime', {
                template: '<event-request></event-request>',
                title: 'Request Event'
            })
            .when('/edit-event/:eventId', {
                template: '<event-request></event-request>',
                title: 'Edit Event'
            })
            .when('/my-events', {
                template: '<my-events></my-events>',
                title: 'My Event Requests'
            })
            .when('/my-events/:eventId', {
                template: '<approval-timeline></approval-timeline>',
                title: 'Event Details'
            })
            .when('/help', {
                template: '<div class="help-page"><h2>Help & Support</h2><p>Contact: events@ucla.edu</p></div>',
                title: 'Help'
            })
            .otherwise({
                redirectTo: '/login'
            });

        // Use HTML5 mode if server supports it
        // $locationProvider.html5Mode(true);
    }

    /**
     * Route guard - redirects to login if not authenticated
     */
    function routeGuard($rootScope, $location, AuthService) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            // Allow public routes (login page)
            if (next && next.$$route && next.$$route.publicRoute) {
                return;
            }

            // Check if user is authenticated
            if (!AuthService.isAuthenticated()) {
                $location.path('/login');
            }
        });
    }

})();
