import { SwUpdate } from '@angular/service-worker';
import {
    createComponentFactory,
    mockProvider,
    Spectator,
} from '@ngneat/spectator/vitest';
import {
    initialisationFailure,
    LocaleService,
    OrganisationService,
    PlaceOS_Service,
    SettingsService,
} from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

import { AppComponent } from '../app/app.component';

// Mock ts-client so that no token is stored.
vi.mock('@placeos/ts-client', { spy: true });

/** Message or close event that the Office dialog sends to the task pane */
type DialogEvent = { message?: string; origin?: string; error?: number };

/** Stub the Office dialog API. `opens` is false when the dialog is blocked. */
function stubDialog(opens = true) {
    const handlers: Record<string, (event: DialogEvent) => void> = {};
    const dialog = {
        close: vi.fn(),
        addEventHandler: (type: string, handler: (e: DialogEvent) => void) =>
            (handlers[type] = handler),
    };
    const displayDialogAsync = vi.fn(
        (
            _url: string,
            _options: object,
            cb: (result: { status: string; value: typeof dialog }) => void,
        ) => cb({ status: opens ? 'succeeded' : 'failed', value: dialog }),
    );
    vi.stubGlobal('Office', {
        AsyncResultStatus: { Succeeded: 'succeeded', Failed: 'failed' },
        EventType: {
            DialogMessageReceived: 'dialogMessageReceived',
            DialogEventReceived: 'dialogEventReceived',
        },
        context: { ui: { displayDialogAsync } },
    });
    return {
        dialog,
        displayDialogAsync,
        send: (event: DialogEvent) => handlers['dialogMessageReceived'](event),
        close: () => handlers['dialogEventReceived']({ error: 12006 }),
    };
}

describe('AppComponent sign-in dialog', () => {
    let spectator: Spectator<AppComponent>;

    const createComponent = createComponentFactory({
        component: AppComponent,
        detectChanges: false,
        providers: [
            mockProvider(SettingsService),
            mockProvider(OrganisationService),
            mockProvider(SwUpdate),
            mockProvider(LocaleService),
            mockProvider(PlaceOS_Service),
        ],
    });

    /** Open the PlaceOS sign-in dialog from the task pane */
    const signIn = () => spectator.component['_signInWithDialog']();

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.setToken).mockImplementation(() => undefined);
        // Startup is not under test. Zoneless change detection would run it.
        vi.spyOn(AppComponent.prototype, 'ngOnInit').mockResolvedValue();
        spectator = createComponent();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.unstubAllGlobals();
    });

    it('takes the PlaceOS token only from the add-in origin', async () => {
        const office = stubDialog();
        let signed_in: boolean | null = null;
        const result = signIn().then((ok) => (signed_in = ok));

        office.send({ message: 'evil-token', origin: 'https://evil.example' });
        await Promise.resolve();
        expect(signed_in).toBeNull();
        expect(office.dialog.close).not.toBeCalled();

        office.send({ message: 'place-token', origin: location.origin });
        await result;

        expect(signed_in).toBe(true);
        expect(office.displayDialogAsync).toHaveBeenCalledWith(
            `${location.origin}${location.pathname}#ms-auth=true`,
            expect.anything(),
            expect.any(Function),
        );
        expect(ts_client.setToken).toHaveBeenCalledExactlyOnceWith(
            'place-token',
        );
        expect(office.dialog.close).toHaveBeenCalledOnce();
    });

    it('takes the token from a client that does not report the origin', async () => {
        const office = stubDialog();
        const result = signIn();

        office.send({ message: 'place-token' });

        await expect(result).resolves.toBe(true);
        expect(ts_client.setToken).toHaveBeenCalledWith('place-token');
    });

    it.each([
        [
            'the dialog cannot open',
            () => stubDialog(false),
            'Allow pop-ups for Outlook',
        ],
        [
            'the user closes the dialog',
            () => {
                const office = stubDialog();
                queueMicrotask(office.close);
            },
            'closed before sign in finished',
        ],
        [
            'the dialog returns no token',
            () => {
                const office = stubDialog();
                queueMicrotask(() => office.send({ message: '' }));
            },
            'did not return a token',
        ],
    ])('fails sign in when %s', async (_, setup, message) => {
        setup();

        await expect(signIn()).resolves.toBe(false);

        expect(ts_client.setToken).not.toBeCalled();
        expect(initialisationFailure()()).toContain(message);
    });

    it('fails sign in when the dialog does not finish in 2 minutes', async () => {
        vi.useFakeTimers();
        const office = stubDialog();
        const result = signIn();

        await vi.advanceTimersByTimeAsync(2 * 60 * 1000);

        await expect(result).resolves.toBe(false);
        expect(office.dialog.close).toHaveBeenCalledOnce();
        expect(initialisationFailure()()).toContain('did not finish');
    });
});
