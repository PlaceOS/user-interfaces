import { Directive, Component } from '@angular/core';
import { of } from 'rxjs';

/**
 * Generate a mocked version of the application service
 */
export function generateMockAppService() {
    const app_service: any = {
        'setting': jest.fn(),
        'notify': jest.fn(),
        'notifyInfo': jest.fn(),
        'notifyWarn': jest.fn(),
        'notifySuccess': jest.fn(),
        'notifyError': jest.fn(),
        'log': jest.fn(),
        'navigate': jest.fn(),
        'navigateBack': jest.fn(),
        'get': jest.fn(),
        'listen': jest.fn(),
        'set': jest.fn()
    };

    app_service.Hotkeys = {
        'listen': jest.fn()
    };
    app_service.Organisation = {
        'levelWithID': jest.fn()
    };
    app_service.Users = generateMockDataService('UsersService');
    app_service.Users.current = { };
    // app_service.Users.parent = app_service;
    app_service.Bookings = generateMockDataService('BookingsService');
    // app_service.Bookings.parent = app_service;
    app_service.Spaces = generateMockDataService('SpacesService');
    // app_service.Spaces.parent = app_service;
    app_service.Locations = generateMockDataService('LocationsService');
    app_service.initialised = of(true);
    app_service.Analytics = {
        'screen': jest.fn(),
        'page': jest.fn(),
        'event': jest.fn()
    };
    app_service.name = 'Test App Name';
    // app_service.Locations.parent = app_service;
    return app_service;
}

export function generateMockDataService(name: string) {
    return {
        'item': jest.fn(),
        'list': jest.fn(),
        'listen': jest.fn(),
        'get': jest.fn(),
        'set': jest.fn(),
        'setting': jest.fn(),
        'query': jest.fn(),
        'show': jest.fn(),
        'add': jest.fn(),
        'remove': jest.fn(),
        'delete': jest.fn(),
        'update': jest.fn(),
        'addFrom': jest.fn(),
        'removeFrom': jest.fn(),
        'available': jest.fn(),
        'process': jest.fn()
    };
}

export function mockSpacesService() {
    return {
        'find': jest.fn(),
        'filter': jest.fn(),
        'loadSpaces': jest.fn()
    };
}

export function mockOrganisationService() {
    return {
        'init': jest.fn(),
        'levelsForBuilding': jest.fn(),
        'levelWithId': jest.fn(),
        'load': jest.fn(),
        'loadBuildings': jest.fn(),
        'loadLevels': jest.fn(),
        'loadOrganisation': jest.fn()
    };
}
