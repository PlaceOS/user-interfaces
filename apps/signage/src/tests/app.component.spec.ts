import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, PlaceOS_Service } from '@placeos/common';
import { mocksInit } from '@placeos/mocks';
import { MockProvider } from 'ng-mocks';

import * as common_mod from '@placeos/common';

import { AppComponent } from '../app/app.component';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return { ...actual, setMocks: jest.fn() };
});

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const placeos_service = { init: jest.fn() };

    const create_component = createComponentFactory({
        component: AppComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            { provide: PlaceOS_Service, useValue: placeos_service },
            MockProvider(OrganisationService),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        placeos_service.init.mockResolvedValue(undefined);
        spectator = create_component();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should register mock handlers and initialise PlaceOS on init', () => {
        spectator.component.ngOnInit();

        expect(common_mod.setMocks).toHaveBeenCalledWith(mocksInit);
        expect(placeos_service.init).toHaveBeenCalledTimes(1);
    });

    it('should register mocks before initialising PlaceOS', () => {
        const order: string[] = [];
        (common_mod.setMocks as jest.Mock).mockImplementation(() =>
            order.push('mocks'),
        );
        placeos_service.init.mockImplementation(() => order.push('init'));

        spectator.component.ngOnInit();

        expect(order).toEqual(['mocks', 'init']);
    });

    it('should render the banner, router outlet and loading shells', () => {
        spectator.detectChanges();

        expect(spectator.query('global-banner')).toBeTruthy();
        expect(spectator.query('router-outlet')).toBeTruthy();
        expect(spectator.query('global-loading')).toBeTruthy();
    });
});
