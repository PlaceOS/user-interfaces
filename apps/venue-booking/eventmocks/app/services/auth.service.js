(function() {
    'use strict';

    angular
        .module('uclaEventsApp')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$q', '$timeout'];

    function AuthService($q, $timeout) {
        // Mock personas for testing
        var mockPersonas = {
            'student': {
                id: 'STU001',
                email: 'jbruin@g.ucla.edu',
                name: 'Joe Bruin',
                role: 'student',
                roleLabel: 'Student',
                department: 'Undergraduate Student Affairs',
                uid: '123456789',
                affiliations: ['student', 'undergraduate'],
                avatar: null,
                permissions: {
                    canRequestEvents: true,
                    canRequestAVTech: true,
                    canRequestSetup: true,
                    canRequestParking: true,
                    canRequestSafety: false,
                    canRequestServices: true,
                    canRequestCoordination: false,
                    maxAttendees: 150,
                    allowedVenueTypes: ['meeting', 'classroom', 'outdoor', 'auditorium'],
                    restrictedVenues: ['Royce Hall Main Auditorium', 'Drake Stadium']
                }
            },
            'professional': {
                id: 'STAFF001',
                email: 'jsmith@ucla.edu',
                name: 'Jane Smith',
                role: 'professional',
                roleLabel: 'Professional Staff',
                department: 'Events Management',
                uid: '987654321',
                affiliations: ['staff', 'professional'],
                avatar: null,
                permissions: {
                    canRequestEvents: true,
                    canRequestAVTech: true,
                    canRequestSetup: true,
                    canRequestParking: true,
                    canRequestSafety: true,
                    canRequestServices: true,
                    canRequestCoordination: true,
                    maxAttendees: null, // No limit
                    allowedVenueTypes: null, // All types
                    restrictedVenues: []
                }
            },
            'academic': {
                id: 'FAC001',
                email: 'profbear@ucla.edu',
                name: 'Dr. Paula Bear',
                role: 'academic',
                roleLabel: 'Academic Staff',
                department: 'Department of Computer Science',
                uid: '555666777',
                affiliations: ['staff', 'academic', 'faculty'],
                avatar: null,
                permissions: {
                    canRequestEvents: true,
                    canRequestAVTech: true,
                    canRequestSetup: true,
                    canRequestParking: true,
                    canRequestSafety: true,
                    canRequestServices: true,
                    canRequestCoordination: false,
                    maxAttendees: 500,
                    allowedVenueTypes: null, // All types
                    restrictedVenues: ['Royce Hall Main Auditorium']
                }
            },
            'external': {
                id: 'EXT001',
                email: 'guest@external-org.com',
                name: 'External Guest',
                role: 'external',
                roleLabel: 'External Partner',
                department: 'External Organization',
                uid: null,
                affiliations: ['external', 'guest'],
                avatar: null,
                permissions: {
                    canRequestEvents: true,
                    canRequestAlcohol: false,
                    canRequestAVTech: true,
                    canRequestSetup: false,
                    canRequestParking: true,
                    canRequestSafety: false,
                    canRequestServices: false,
                    canRequestCoordination: false,
                    maxAttendees: 100,
                    allowedVenueTypes: ['meeting', 'classroom'],
                    restrictedVenues: ['Royce Hall Main Auditorium', 'Drake Stadium', 'Centennial Ballroom', 'Bruin Plaza']
                }
            }
        };

        // Service restrictions by venue
        var venueServiceRestrictions = {
            'Royce Hall Main Auditorium': {
                disabledServices: ['SETUP'],
                requiredServices: ['SAFETY', 'SERVICES']
            },
            'Drake Stadium': {
                disabledServices: [],
                requiredServices: ['SAFETY', 'SERVICES', 'PARKING']
            },
            'Centennial Ballroom': {
                disabledServices: ['SETUP'],
                requiredServices: []
            },
            'Bruin Plaza': {
                disabledServices: [],
                requiredServices: ['SETUP']
            },
            'Grand Horizon & Terrace': {
                disabledServices: [],
                requiredServices: []
            },
            'Sculpture Garden': {
                disabledServices: [],
                requiredServices: ['SETUP', 'SERVICES']
            },
            'UCLA Mildred E. Mathias Botanical Garden': {
                disabledServices: [],
                requiredServices: ['SETUP', 'SERVICES']
            },
            'Sunset Canyon Recreation Center': {
                disabledServices: [],
                requiredServices: []
            }
        };

        // Current user state
        var currentUser = null;

        var service = {
            // Authentication
            login: login,
            logout: logout,
            isAuthenticated: isAuthenticated,
            getCurrentUser: getCurrentUser,

            // Persona management
            getAvailablePersonas: getAvailablePersonas,
            switchPersona: switchPersona,

            // Permission checks
            canAccessService: canAccessService,
            getAvailableServices: getAvailableServices,
            getVenueRestrictions: getVenueRestrictions,
            canAccessVenue: canAccessVenue,
            getMaxAttendees: getMaxAttendees,

            // Combined filtering
            getFilteredServices: getFilteredServices
        };

        return service;

        // ==========================================
        // Authentication Methods
        // ==========================================

        function login(personaKey) {
            var deferred = $q.defer();

            // Simulate network delay
            $timeout(function() {
                if (mockPersonas[personaKey]) {
                    currentUser = angular.copy(mockPersonas[personaKey]);
                    localStorage.setItem('uclaUser', JSON.stringify(currentUser));
                    localStorage.setItem('userName', currentUser.name.split(' ')[0]);
                    deferred.resolve(currentUser);
                } else {
                    deferred.reject('Invalid persona');
                }
            }, 500);

            return deferred.promise;
        }

        function logout() {
            currentUser = null;
            localStorage.removeItem('uclaUser');
            localStorage.removeItem('userName');
        }

        function refreshPermissions(user) {
            // Re-apply current persona permissions to handle schema changes
            var persona = mockPersonas[user.role];
            if (persona) {
                user.permissions = angular.copy(persona.permissions);
                localStorage.setItem('uclaUser', JSON.stringify(user));
            }
            return user;
        }

        function isAuthenticated() {
            if (currentUser) {
                return true;
            }
            // Check localStorage for persisted session
            var storedUser = localStorage.getItem('uclaUser');
            if (storedUser) {
                try {
                    currentUser = refreshPermissions(JSON.parse(storedUser));
                    return true;
                } catch (e) {
                    return false;
                }
            }
            return false;
        }

        function getCurrentUser() {
            if (!currentUser) {
                var storedUser = localStorage.getItem('uclaUser');
                if (storedUser) {
                    try {
                        currentUser = refreshPermissions(JSON.parse(storedUser));
                    } catch (e) {
                        return null;
                    }
                }
            }
            return currentUser;
        }

        // ==========================================
        // Persona Management
        // ==========================================

        function getAvailablePersonas() {
            return Object.keys(mockPersonas).map(function(key) {
                var persona = mockPersonas[key];
                return {
                    key: key,
                    name: persona.name,
                    role: persona.role,
                    roleLabel: persona.roleLabel,
                    email: persona.email,
                    department: persona.department
                };
            });
        }

        function switchPersona(personaKey) {
            return login(personaKey);
        }

        // ==========================================
        // Permission Checks
        // ==========================================

        function canAccessService(serviceValue) {
            var user = getCurrentUser();
            if (!user) return false;

            var permissionMap = {
                'AV_TECH': 'canRequestAVTech',
                'SETUP': 'canRequestSetup',
                'PARKING': 'canRequestParking',
                'SAFETY': 'canRequestSafety',
                'SERVICES': 'canRequestServices',
                'EVENTS': 'canRequestCoordination'
            };

            var permission = permissionMap[serviceValue];
            if (!permission) return true;

            return user.permissions[permission] === true;
        }

        function getAvailableServices(allServices) {
            var user = getCurrentUser();
            if (!user) return [];

            return allServices.filter(function(service) {
                return canAccessService(service.value);
            });
        }

        function getVenueRestrictions(venueName) {
            return venueServiceRestrictions[venueName] || {
                requiresSecurity: false,
                requiresInsurance: false,
                disabledServices: [],
                requiredServices: []
            };
        }

        function canAccessVenue(venueName) {
            var user = getCurrentUser();
            if (!user) return false;

            // Check if venue is restricted for this user
            if (user.permissions.restrictedVenues &&
                user.permissions.restrictedVenues.indexOf(venueName) !== -1) {
                return false;
            }

            return true;
        }

        function getMaxAttendees() {
            var user = getCurrentUser();
            if (!user) return 100;
            return user.permissions.maxAttendees;
        }

        // ==========================================
        // Combined Filtering
        // ==========================================

        function getFilteredServices(allServices, venueName) {
            var user = getCurrentUser();
            if (!user) return [];

            var venueRestrictions = getVenueRestrictions(venueName);

            return allServices.map(function(service) {
                var copy = angular.copy(service);

                // Check user permission
                var userCanAccess = canAccessService(service.value);

                // Check venue restrictions
                var venueDisables = venueRestrictions.disabledServices.indexOf(service.value) !== -1;
                var venueRequires = venueRestrictions.requiredServices.indexOf(service.value) !== -1;

                copy.disabled = !userCanAccess || venueDisables;
                copy.required = venueRequires;
                copy.disabledReason = null;

                if (!userCanAccess) {
                    copy.disabledReason = 'Not available for ' + user.roleLabel + ' accounts';
                } else if (venueDisables) {
                    copy.disabledReason = 'Not available at this venue';
                }

                if (venueRequires) {
                    copy.requiredReason = 'Required for this venue';
                }

                return copy;
            });
        }
    }
})();
