/**
 * Navigation Controller
 * Handles mobile menu and settings
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .controller('NavController', NavController);

    NavController.$inject = ['$scope', '$location', 'AuthService'];

    function NavController($scope, $location, AuthService) {
        var ctrl = this;

        ctrl.menuOpen = false;
        ctrl.textSize = parseInt(localStorage.getItem('textSize')) || 100;
        ctrl.currentUser = null;

        /**
         * Toggle mobile menu
         */
        ctrl.toggleMenu = function() {
            ctrl.menuOpen = !ctrl.menuOpen;
            // Prevent body scroll when menu is open
            document.body.style.overflow = ctrl.menuOpen ? 'hidden' : '';
        };

        /**
         * Close mobile menu
         */
        ctrl.closeMenu = function() {
            ctrl.menuOpen = false;
            document.body.style.overflow = '';
        };

        /**
         * Increase text size
         */
        ctrl.increaseTextSize = function() {
            if (ctrl.textSize < 150) {
                ctrl.textSize += 10;
                ctrl.applyTextSize();
            }
        };

        /**
         * Decrease text size
         */
        ctrl.decreaseTextSize = function() {
            if (ctrl.textSize > 80) {
                ctrl.textSize -= 10;
                ctrl.applyTextSize();
            }
        };

        /**
         * Apply text size
         */
        ctrl.applyTextSize = function() {
            localStorage.setItem('textSize', ctrl.textSize);
            document.documentElement.style.fontSize = ctrl.textSize + '%';
        };

        /**
         * Initialize settings
         */
        ctrl.$onInit = function() {
            // Apply saved text size
            ctrl.applyTextSize();

            // Load current user
            ctrl.currentUser = AuthService.getCurrentUser();
        };

        /**
         * Check if currently on login page
         */
        ctrl.isLoginPage = function() {
            return $location.path() === '/login';
        };

        /**
         * Check if user is authenticated
         */
        ctrl.isAuthenticated = function() {
            return AuthService.isAuthenticated();
        };

        /**
         * Get current user
         */
        ctrl.getUser = function() {
            if (!ctrl.currentUser) {
                ctrl.currentUser = AuthService.getCurrentUser();
            }
            return ctrl.currentUser;
        };

        /**
         * Logout user
         */
        ctrl.logout = function() {
            AuthService.logout();
            ctrl.currentUser = null;
            ctrl.closeMenu();
            $location.path('/login');
        };

        /**
         * Switch persona (for demo)
         */
        ctrl.switchPersona = function() {
            ctrl.closeMenu();
            $location.path('/login');
        };

        /**
         * Scroll to How It Works section on landing page
         */
        ctrl.scrollToHowItWorks = function($event) {
            // If already on landing page, just scroll
            if ($location.path() === '/' || $location.path() === '') {
                $event.preventDefault();
                var element = document.getElementById('how-it-works');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Navigate to landing page, then scroll after view loads
                $location.path('/');
                // Use timeout to wait for view to render
                setTimeout(function() {
                    var element = document.getElementById('how-it-works');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        };

        // Initialize on controller load
        ctrl.$onInit();

        // Watch for route changes to update user
        $scope.$on('$routeChangeSuccess', function() {
            ctrl.currentUser = AuthService.getCurrentUser();
        });
    }

})();
