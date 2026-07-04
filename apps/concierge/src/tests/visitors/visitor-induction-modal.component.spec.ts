import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { VisitorInductionModalComponent } from '../../app/visitors/visitor-induction-modal.component';

describe('VisitorInductionModalComponent', () => {
    let spectator: Spectator<VisitorInductionModalComponent>;
    const settings = { get: jest.fn() };
    const createComponent = createComponentFactory({
        component: VisitorInductionModalComponent,
        shallow: true,
        detectChanges: false,
        providers: [MockProvider(SettingsService, settings as any)],
    });

    beforeEach(() => {
        settings.get.mockReset();
        spectator = createComponent();
    });

    it('should default the agreement to unchecked', () => {
        expect(spectator.component.agree()).toBe(false);
    });

    it('should expose the configured induction details', () => {
        settings.get.mockImplementation((name: string) =>
            name === 'app.induction_details' ? 'Please stay safe' : undefined,
        );
        expect(spectator.component.induction_details).toBe('Please stay safe');
    });

    it('should be enabled only when both flag and details are set', () => {
        settings.get.mockImplementation((name: string) =>
            name === 'app.induction_enabled'
                ? true
                : name === 'app.induction_details'
                  ? 'Details'
                  : undefined,
        );
        expect(spectator.component.is_enabled).toBeTruthy();
    });

    it('should not be enabled when details are missing', () => {
        settings.get.mockImplementation((name: string) =>
            name === 'app.induction_enabled' ? true : undefined,
        );
        expect(spectator.component.is_enabled).toBeFalsy();
    });
});
