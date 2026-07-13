import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

vi.mock('@placeos/ts-client', { spy: true });

import {
    needsNativeDomain,
    OrganisationService,
    PlaceOS_Service,
    setLoadingMessage,
    SettingsService,
} from '@placeos/common';
import { authority, isOnline, token } from '@placeos/ts-client';

import { LocaleService } from 'libs/common/src/lib/locale.service';
import { GlobalLoadingComponent } from '../lib/global-loading.component';
import { NativeDomainOverlayComponent } from '../lib/native-domain-overlay.component';
import { ServiceWorkerUpdateCardComponent } from '../lib/service-worker-update-card.component';

const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

describe('GlobalLoadingComponent', () => {
    let spectator: Spectator<GlobalLoadingComponent>;
    const createComponent = createComponentFactory({
        component: GlobalLoadingComponent,
        detectChanges: false,
        providers: [
            MockProvider(OrganisationService, {
                waitUntilInitialised: vi.fn().mockResolvedValue(undefined),
            } as any),
            MockProvider(SettingsService, { initialised: of(true) } as any),
            MockProvider(PlaceOS_Service, {
                onNativeDomainSet: vi.fn(),
            } as any),
            MockProvider(LocaleService),
        ],
        overrideComponents: [
            [
                GlobalLoadingComponent,
                {
                    remove: {
                        imports: [
                            NativeDomainOverlayComponent,
                            ServiceWorkerUpdateCardComponent,
                        ],
                    },
                    add: {
                        imports: [
                            MockComponent(NativeDomainOverlayComponent),
                            MockComponent(ServiceWorkerUpdateCardComponent),
                        ],
                    },
                },
            ],
        ],
    });

    beforeEach(() => {
        vi.mocked(authority).mockReturnValue(undefined);
        vi.mocked(token).mockReturnValue(undefined);
        vi.mocked(isOnline).mockReturnValue(true);
        needsNativeDomain().set(false);
        setLoadingMessage('Loading...');
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show the loading overlay with the current message', () => {
        setLoadingMessage('Fetching building data...');
        spectator.detectChanges();
        expect('[loader]').toExist();
        expect('[loader] p').toContainText('Fetching building data...');
    });

    it('should hide the loading overlay once authenticated', async () => {
        vi.mocked(authority).mockReturnValue({ id: 'test' } as any);
        vi.mocked(token).mockReturnValue('test-token');
        spectator.detectChanges();
        expect('[loader]').toExist();
        await sleep(1200);
        spectator.detectChanges();
        expect(spectator.component.loading()).toBe(false);
        expect('[loader]').not.toExist();
    });

    it('should show a server down message while offline', async () => {
        vi.mocked(authority).mockReturnValue({ id: 'test' } as any);
        vi.mocked(token).mockReturnValue('test-token');
        vi.mocked(isOnline).mockReturnValue(false);
        spectator.detectChanges();
        await sleep(1200);
        spectator.detectChanges();
        expect(spectator.component.online()).toBe(false);
        expect('div.bg-error').toExist();
    });

    it('should show the native domain overlay when required', () => {
        spectator.detectChanges();
        expect('native-domain-overlay').not.toExist();
        needsNativeDomain().set(true);
        spectator.detectChanges();
        expect('native-domain-overlay').toExist();
    });

    it('should notify PlaceOS service when the native domain is set', () => {
        spectator.component.onDomainSet();
        expect(
            spectator.inject(PlaceOS_Service).onNativeDomainSet,
        ).toHaveBeenCalled();
    });
});
