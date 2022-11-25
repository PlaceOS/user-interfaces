import { createServiceFactory, SpectatorService } from "@ngneat/spectator"
import { MockProvider } from "ng-mocks";
import { of } from "rxjs";
import { Space } from "../lib/space.class";
import { SpacesStatusService } from "../lib/spaces-status.service"
import { SpacesService } from "../lib/spaces.service";


describe('SpacesStatusService', () => {
    let spectator: SpectatorService<SpacesStatusService>;
    const createService = createServiceFactory({
        service: SpacesStatusService,
        providers: [
            MockProvider(SpacesService, {
                initialised: of(true),
                list: of([])
            })
        ]
    });

    beforeEach(() => {
        spectator = createService();
    });

    it('should create serice', () => {
        expect(spectator.service).toBeInstanceOf(SpacesStatusService);
    });
})