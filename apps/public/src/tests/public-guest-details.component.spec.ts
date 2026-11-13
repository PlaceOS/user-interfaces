import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
    ActivatedRoute,
    ParamMap,
    Router,
    convertToParamMap,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PublicEventsService } from '../app/public-events.service';
import { PublicGuestDetailsComponent } from '../app/public-guest-details.component';

function makeService() {
    return {
        logo_url: signal('assets/logo-light.svg'),
        error: signal(''),
        loading: signal(''),
        authenticated: signal(false),
        default_system_id: signal(''),
        init: vi.fn().mockResolvedValue(undefined),
        requestGuestAccess: vi.fn().mockResolvedValue(undefined),
    };
}

describe('PublicGuestDetailsComponent', () => {
    let param_map$: BehaviorSubject<ParamMap>;
    let query_map$: BehaviorSubject<ParamMap>;
    let route: unknown;
    let router: { navigate: ReturnType<typeof vi.fn> };
    let service: ReturnType<typeof makeService>;

    beforeEach(async () => {
        vi.clearAllMocks();
        param_map$ = new BehaviorSubject<ParamMap>(convertToParamMap({}));
        query_map$ = new BehaviorSubject<ParamMap>(convertToParamMap({}));
        route = {
            paramMap: param_map$,
            queryParamMap: query_map$,
            snapshot: {
                routeConfig: { path: 'guest-details' },
                queryParams: {},
            },
        };
        router = { navigate: vi.fn().mockResolvedValue(true) };
        service = makeService();

        await TestBed.configureTestingModule({
            imports: [PublicGuestDetailsComponent],
            providers: [
                { provide: PublicEventsService, useValue: service },
                { provide: ActivatedRoute, useValue: route },
                { provide: Router, useValue: router },
            ],
        }).compileComponents();
    });

    async function flush() {
        for (let i = 0; i < 5; i++) await Promise.resolve();
    }

    async function init(): Promise<
        ComponentFixture<PublicGuestDetailsComponent>
    > {
        const fixture = TestBed.createComponent(PublicGuestDetailsComponent);
        fixture.detectChanges();
        await flush();
        fixture.detectChanges();
        return fixture;
    }

    it('shows the not-configured message when no source id is resolved', async () => {
        // An authenticated visitor has no events page to go to without a source
        service.authenticated.set(true);
        const fixture = await init();
        expect(fixture.nativeElement.textContent).toContain(
            'Public events are not configured yet',
        );
        expect(fixture.nativeElement.querySelector('form')).toBeNull();
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('reads the default source after the authority loads', async () => {
        service.init.mockImplementation(async () => {
            await Promise.resolve();
            service.default_system_id.set('sys-authority');
        });
        const fixture = await init();
        expect(fixture.componentInstance.source_id()).toBe('sys-authority');
        expect(fixture.nativeElement.querySelector('form')).toBeTruthy();
    });

    function type(
        fixture: ComponentFixture<PublicGuestDetailsComponent>,
        name: string,
        value: string,
    ) {
        const input = fixture.nativeElement.querySelector(
            `input[name="${name}"]`,
        ) as HTMLInputElement;
        input.value = value;
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
    }

    it.each([
        ['', 'guest@example.com', true],
        ['   ', 'guest@example.com', true],
        ['Guest User', '', true],
        ['Guest User', 'not-an-email', true],
        ['Guest User', 'guest@example.com', false],
    ])(
        'sets the continue button disabled for name %j and email %j to %s',
        async (name, email, disabled) => {
            service.default_system_id.set('sys-1');
            const fixture = await init();
            type(fixture, 'name', name);
            type(fixture, 'email', email);
            expect(
                fixture.nativeElement.querySelector('form button').disabled,
            ).toBe(disabled);
        },
    );

    it('requests guest access and navigates to events on submit', async () => {
        service.default_system_id.set('sys-1');
        const fixture = await init();
        type(fixture, 'name', 'Guest User');
        type(fixture, 'email', 'guest@example.com');
        const remember = fixture.nativeElement.querySelector(
            'input[name="remember"]',
        ) as HTMLInputElement;
        remember.click();
        fixture.detectChanges();

        fixture.nativeElement.querySelector('form button').click();
        await flush();

        expect(service.requestGuestAccess).toHaveBeenCalledWith(
            'sys-1',
            { name: 'Guest User', email: 'guest@example.com' },
            true,
        );
        expect(router.navigate).toHaveBeenCalledWith(['/events', 'sys-1'], {
            queryParams: {},
        });
    });

    it('shows the loading text in the disabled continue button', async () => {
        service.default_system_id.set('sys-1');
        const fixture = await init();
        type(fixture, 'name', 'Guest User');
        type(fixture, 'email', 'guest@example.com');
        service.loading.set('Checking guest access...');
        fixture.detectChanges();
        const button: HTMLButtonElement =
            fixture.nativeElement.querySelector('form button');
        expect(button.textContent?.trim()).toBe('Checking guest access...');
        expect(button.disabled).toBe(true);
    });

    it('stays on the page when guest access fails', async () => {
        service.default_system_id.set('sys-1');
        service.requestGuestAccess.mockRejectedValueOnce(new Error('Denied'));
        const fixture = await init();
        fixture.componentInstance.guest_name.set('Guest User');
        fixture.componentInstance.guest_email.set('guest@example.com');

        fixture.componentInstance.submit();
        await flush();

        expect(service.requestGuestAccess).toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it.each([
        ['false', ['/events', 'sys-1', 'e1']],
        ['true', ['/event', 'sys-1', 'e1']],
    ])(
        'navigates to the target event (direct_event: %s) and keeps other query params',
        async (direct_event, route_path) => {
            const query = {
                system_id: 'sys-1',
                event_id: 'e1',
                direct_event,
                lang: 'en',
            };
            (route as { snapshot: Record<string, unknown> }).snapshot = {
                queryParams: query,
            };
            query_map$.next(convertToParamMap(query));
            service.authenticated.set(true);
            await init();
            expect(router.navigate).toHaveBeenCalledWith(route_path, {
                queryParams: { lang: 'en' },
            });
        },
    );

    it('does not request guest access when the form is invalid', async () => {
        service.default_system_id.set('sys-1');
        const fixture = await init();
        fixture.componentInstance.submit();
        await flush();
        expect(service.requestGuestAccess).not.toHaveBeenCalled();
    });

    it('skips the form and navigates when the visitor is already authenticated', async () => {
        service.authenticated.set(true);
        service.default_system_id.set('sys-1');
        await init();
        expect(router.navigate).toHaveBeenCalledWith(['/events', 'sys-1'], {
            queryParams: {},
        });
    });

    it('shows the service error even when no source is resolved', async () => {
        // An authority load failure leaves no source, and the visitor must still see why
        service.init.mockImplementation(async () => {
            service.error.set('Unable to load PlaceOS authority.');
        });
        const fixture = await init();
        expect(fixture.nativeElement.querySelector('form')).toBeNull();
        expect(fixture.nativeElement.textContent).toContain(
            'Unable to load PlaceOS authority.',
        );
    });
});
