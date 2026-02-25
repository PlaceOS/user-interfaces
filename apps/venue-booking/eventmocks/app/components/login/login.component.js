(function() {
    'use strict';

    angular
        .module('uclaEventsApp')
        .component('loginPage', {
            template: `
                <div class="login-page">
                    <!-- UCLA Header -->
                    <div class="login-header">
                        <div class="ucla-logo-container">
                            <svg class="ucla-logo" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                                <text x="0" y="38" font-family="Helvetica, Arial, sans-serif" font-size="42" font-weight="bold" fill="#FFFFFF">UCLA</text>
                            </svg>
                        </div>
                        <div class="login-header-text">
                            <h1>Event Management System</h1>
                            <p>Plan, request, and manage campus events</p>
                        </div>
                    </div>

                    <!-- Main Login Container -->
                    <div class="login-container">
                        <div class="login-card">
                            <!-- Card Header -->
                            <div class="login-card-header">
                                <span class="material-icons header-icon">event</span>
                                <h2>Sign In</h2>
                                <p class="login-subtitle">Select your account type to continue</p>
                            </div>

                            <!-- Demo Notice -->
                            <div class="demo-notice">
                                <span class="material-icons">info</span>
                                <span>Demo Mode: Select a test persona below</span>
                            </div>

                            <!-- Persona Selection -->
                            <div class="persona-grid" ng-if="!$ctrl.showPersonaDetails">
                                <button class="persona-card"
                                        ng-repeat="persona in $ctrl.personas"
                                        ng-click="$ctrl.selectPersona(persona)"
                                        ng-style="{'--persona-color': $ctrl.getPersonaColor(persona.role)}">
                                    <div class="persona-icon-wrap">
                                        <span class="material-icons">{{ $ctrl.getPersonaIcon(persona.role) }}</span>
                                    </div>
                                    <div class="persona-info">
                                        <span class="persona-role">{{ persona.roleLabel }}</span>
                                        <span class="persona-name">{{ persona.name }}</span>
                                    </div>
                                    <span class="material-icons chevron">chevron_right</span>
                                </button>
                            </div>

                            <!-- Selected Persona Details -->
                            <div class="persona-details" ng-if="$ctrl.showPersonaDetails && $ctrl.selectedPersona">
                                <button class="back-button" ng-click="$ctrl.clearSelection()">
                                    <span class="material-icons">arrow_back</span>
                                    <span>Back to selection</span>
                                </button>

                                <div class="selected-persona-header" ng-style="{'--persona-color': $ctrl.getPersonaColor($ctrl.selectedPersona.role)}">
                                    <div class="selected-persona-icon">
                                        <span class="material-icons">{{ $ctrl.getPersonaIcon($ctrl.selectedPersona.role) }}</span>
                                    </div>
                                    <div class="selected-persona-info">
                                        <h3>{{ $ctrl.selectedPersona.name }}</h3>
                                        <span class="role-badge">{{ $ctrl.selectedPersona.roleLabel }}</span>
                                    </div>
                                </div>

                                <div class="persona-credentials">
                                    <div class="credential-row">
                                        <span class="material-icons">email</span>
                                        <span>{{ $ctrl.selectedPersona.email }}</span>
                                    </div>
                                    <div class="credential-row">
                                        <span class="material-icons">business</span>
                                        <span>{{ $ctrl.selectedPersona.department }}</span>
                                    </div>
                                </div>

                                <div class="permissions-section">
                                    <h4>Account Permissions</h4>
                                    <ul class="permissions-list">
                                        <li ng-repeat="perm in $ctrl.getPermissionsList($ctrl.selectedPersona)"
                                            ng-class="{'allowed': perm.allowed, 'denied': !perm.allowed}">
                                            <span class="material-icons">{{ perm.allowed ? 'check_circle' : 'cancel' }}</span>
                                            <span>{{ perm.text }}</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Error Message -->
                                <div class="login-error" ng-if="$ctrl.error">
                                    <span class="material-icons">error</span>
                                    <span>{{ $ctrl.error }}</span>
                                </div>

                                <!-- Login Button -->
                                <button class="login-button"
                                        ng-click="$ctrl.login()"
                                        ng-disabled="$ctrl.isLoading">
                                    <span ng-if="!$ctrl.isLoading">
                                        <span class="material-icons">login</span>
                                        <span>Continue as {{ $ctrl.selectedPersona.name.split(' ')[0] }}</span>
                                    </span>
                                    <span ng-if="$ctrl.isLoading" class="loading-state">
                                        <span class="spinner"></span>
                                        <span>Signing in...</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <!-- Additional Info -->
                        <div class="login-footer">
                            <p>Need help? Contact <a href="mailto:events@ucla.edu">events@ucla.edu</a></p>
                            <div class="login-footer-links">
                                <a href="https://www.ucla.edu/terms-of-use" target="_blank">Terms of Use</a>
                                <span class="divider">|</span>
                                <a href="https://www.ucla.edu/accessibility" target="_blank">Accessibility</a>
                            </div>
                        </div>
                    </div>

                    <!-- Background Decoration -->
                    <div class="login-bg-decoration">
                        <div class="bg-shape shape-1"></div>
                        <div class="bg-shape shape-2"></div>
                        <div class="bg-shape shape-3"></div>
                    </div>
                </div>
            `,
            controller: LoginController
        });

    LoginController.$inject = ['$location', 'AuthService'];

    function LoginController($location, AuthService) {
        var $ctrl = this;

        // ==========================================
        // Component Lifecycle
        // ==========================================

        $ctrl.$onInit = function() {
            // If already authenticated, redirect to home
            if (AuthService.isAuthenticated()) {
                $location.path('/');
                return;
            }

            $ctrl.personas = AuthService.getAvailablePersonas();
            $ctrl.selectedPersona = null;
            $ctrl.isLoading = false;
            $ctrl.error = null;
            $ctrl.showPersonaDetails = false;
        };

        // ==========================================
        // Login Methods
        // ==========================================

        $ctrl.selectPersona = function(persona) {
            $ctrl.selectedPersona = persona;
            $ctrl.showPersonaDetails = true;
            $ctrl.error = null;
        };

        $ctrl.clearSelection = function() {
            $ctrl.selectedPersona = null;
            $ctrl.showPersonaDetails = false;
        };

        $ctrl.login = function() {
            if (!$ctrl.selectedPersona) return;

            $ctrl.isLoading = true;
            $ctrl.error = null;

            AuthService.login($ctrl.selectedPersona.key)
                .then(function(user) {
                    $location.path('/');
                })
                .catch(function(err) {
                    $ctrl.error = 'Login failed. Please try again.';
                })
                .finally(function() {
                    $ctrl.isLoading = false;
                });
        };

        // ==========================================
        // UI Helpers
        // ==========================================

        $ctrl.getPersonaIcon = function(role) {
            var icons = {
                'student': 'school',
                'professional': 'badge',
                'academic': 'history_edu',
                'external': 'public'
            };
            return icons[role] || 'person';
        };

        $ctrl.getPersonaColor = function(role) {
            var colors = {
                'student': '#2774AE',  // UCLA Blue
                'professional': '#005587',  // UCLA Dark Blue
                'academic': '#00778B',  // Teal
                'external': '#7C878E'  // Gray
            };
            return colors[role] || '#2774AE';
        };

        $ctrl.getPermissionsList = function(persona) {
            if (!persona) return [];

            var permDescriptions = {
                'student': [
                    { allowed: true, text: 'Request events up to 150 attendees' },
                    { allowed: true, text: 'Book meeting rooms, classrooms, outdoor spaces' },
                    { allowed: true, text: 'Request AV/Livestream services' },
                    { allowed: true, text: 'Request parking services' },
                    { allowed: false, text: 'Alcohol service' },
                    { allowed: false, text: 'Fireworks/Pyrotechnics' },
                    { allowed: false, text: 'Special insurance requests' }
                ],
                'professional': [
                    { allowed: true, text: 'Request events with unlimited attendees' },
                    { allowed: true, text: 'Book all venue types including major venues' },
                    { allowed: true, text: 'Request all services including alcohol' },
                    { allowed: true, text: 'Request fireworks/pyrotechnics' },
                    { allowed: true, text: 'Request special insurance' },
                    { allowed: true, text: 'Full access to all event types' }
                ],
                'academic': [
                    { allowed: true, text: 'Request events up to 500 attendees' },
                    { allowed: true, text: 'Book most venue types' },
                    { allowed: true, text: 'Request alcohol service for faculty events' },
                    { allowed: true, text: 'Request AV/Livestream and parking' },
                    { allowed: true, text: 'Request special insurance' },
                    { allowed: false, text: 'Fireworks/Pyrotechnics' }
                ],
                'external': [
                    { allowed: true, text: 'Request events up to 100 attendees' },
                    { allowed: true, text: 'Book meeting rooms and classrooms' },
                    { allowed: true, text: 'Request AV/Livestream services' },
                    { allowed: true, text: 'Request parking services' },
                    { allowed: false, text: 'Alcohol service' },
                    { allowed: false, text: 'Outdoor setup and stage setup' },
                    { allowed: false, text: 'Major venue bookings' }
                ]
            };

            return permDescriptions[persona.role] || [];
        };
    }
})();
