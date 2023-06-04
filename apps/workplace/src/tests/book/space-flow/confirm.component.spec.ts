import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent, UserAvatarComponent } from '@placeos/components';
import {
    CalendarEvent,
    EventFormService,
    generateEventForm,
} from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';

import { SpaceFlowConfirmComponent } from 'apps/workplace/src/app/book/space-flow/confirm.component';
import { throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

jest.mock('@placeos/common');

import * as common_mod from '@placeos/common';
import { DurationPipe } from 'libs/components/src/lib/duration.pipe';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

describe('SpaceFlowConfirmComponent', () => {
    let spectator: SpectatorRouting<SpaceFlowConfirmComponent>;
    const createComponent = createRoutingFactory({
        component: SpaceFlowConfirmComponent,
        providers: [
            MockProvider(EventFormService, {
                postForm: jest.fn(async () => await timer(1).toPromise()),
                form: generateEventForm(new CalendarEvent()),
            } as any),
            MockProvider(OrganisationService, {}),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        declarations: [
            DurationPipe,
            MockComponent(IconComponent),
            MockComponent(UserAvatarComponent),
        ],
        imports: [MatProgressSpinnerModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow confirming the booking', async () => {
        const service = spectator.inject(EventFormService);
        expect(service.postForm).not.toHaveBeenCalled();
        expect(spectator.component.loading).toBeFalsy();
        spectator.click('button[confirm]');
        expect(spectator.component.loading).toBeTruthy();
        await timer(2).toPromise();
        expect(spectator.component.loading).toBeFalsy();
        expect(service.postForm).toHaveBeenCalledTimes(1);
    });

    it('should notify user of booking errors', async () => {
        const service = spectator.inject(EventFormService);
        (service.postForm as any).mockImplementation(async () =>
            timer(1)
                .pipe(switchMap(() => throwError('Error')))
                .toPromise()
        );
        spectator.click('button[confirm]');
        expect(spectator.component.loading).toBeTruthy();
        await timer(2).toPromise();
        expect(spectator.component.loading).toBeFalsy();
        expect(common_mod.notifyError).toHaveBeenCalledWith('Error');
    });

    it('should allow user to return to previous page', () => {
        expect('[topbar] a[button]').toExist();
    });

    it.todo('should show event details');
});
