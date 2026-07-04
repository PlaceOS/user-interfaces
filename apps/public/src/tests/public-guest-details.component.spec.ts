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
        init: jest.fn().mockResolvedValue(undefined),
        requestGuestAccess: jest.fn().mockResolvedValue(undefined),
    };
}

describe('PublicGuestDetailsComponent', () => {
    let param_map$: BehaviorSubject<ParamMap>;
    let query_map$: BehaviorSubject<ParamMap>;
    let route: any;
    let router: { navigate: jest.Mock };
    let service: ReturnType<typeof makeService>;

    beforeEach(async () => {
        jest.clearAllMocks();
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
        router = { navigate: jest.fn().mockResolvedValue(true) };
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
        const fixture = await init();
        expect(fixture.nativeElement.textContent).toContain(
            'Public events are not configured yet',
        );
        expect(fixture.nativeElement.querySelector('form')).toBeNull();
    });

    it('keeps the continue button disabled until the form is valid', async () => {
        service.default_system_id.set('sys-1');
        const fixture = await init();
        const button = fixture.nativeElement.querySelector('form button');
        expect(button.disabled).toBe(true);

        fixture.componentInstance.guest_form.setValue({
            name: 'Guest User',
            email: 'guest@example.com',
            remember: false,
        });
        fixture.detectChanges();
        expect(button.disabled).toBe(false);
    });

    it('requests guest access and navigates to events on submit', async () => {
        service.default_system_id.set('sys-1');
        const fixture = await init();
        fixture.componentInstance.guest_form.setValue({
            name: 'Guest User',
            email: 'guest@example.com',
            remember: true,
        });
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

    it('renders the service error banner', async () => {
        service.default_system_id.set('sys-1');
        const fixture = await init();
        service.error.set('Guest access failed');
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).toContain(
            'Guest access failed',
        );
    });
});
