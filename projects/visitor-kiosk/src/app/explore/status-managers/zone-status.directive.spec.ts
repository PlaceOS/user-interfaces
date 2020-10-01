import { ExploreZoneStatusDirective } from './zone-status.directive';

describe('ExploreZoneStatusDirective', () => {
    let service: any;
    let directive: ExploreZoneStatusDirective;

    beforeEach(() => {
        service = jasmine.createSpyObj('ApplicationService', ['setting']);
        directive = new ExploreZoneStatusDirective(service);
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });
});
