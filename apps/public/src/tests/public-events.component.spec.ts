import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
    ActivatedRoute,
    ParamMap,
    Router,
    convertToParamMap,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PublicEventDetailsComponent } from '../app/public-event-details.component';
import { PublicEventsListComponent } from '../app/public-events-list.component';
import { PublicEventsComponent } from '../app/public-events.component';
import { PublicEvent, PublicEventsService } from '../app/public-events.service';

function makeService() {
    return {
        logo_url: signal('assets/logo-light.svg'),
        error: signal(''),
        loading: signal(''),
        events: signal<PublicEvent[]>([]),
        guest: signal<{ name: string; email: string } | null>(null),
        authenticated: signal(false),
        default_system_id: signal(''),
        init: vi.fn().mockResolvedValue(undefined),
        loadEvents: vi.fn().mockResolvedValue(undefined),
        register: vi.fn().mockResolvedValue(undefined),
    };
}

describe('PublicEventsComponent', () => {
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
                routeConfig: { path: 'events/:system_id' },
                queryParams: {},
            },
        };
        router = { navigate: vi.fn().mockResolvedValue(true) };
        service = makeService();

        await TestBed.configureTestingModule({
            imports: [PublicEventsComponent],
            providers: [
                { provide: PublicEventsService, useValue: service },
                { provide: ActivatedRoute, useValue: route },
                { provide: Router, useValue: router },
            ],
        })
            .overrideComponent(PublicEventsListComponent, {
                set: { template: '<div class="list-stub"></div>' },
            })
            .overrideComponent(PublicEventDetailsComponent, {
                set: { template: '<div class="details-stub"></div>' },
            })
            .compileComponents();
    });

    async function flush() {
        for (let i = 0; i < 5; i++) await Promise.resolve();
    }

    async function init(): Promise<ComponentFixture<PublicEventsComponent>> {
        const fixture = TestBed.createComponent(PublicEventsComponent);
        fixture.detectChanges();
        await flush();
        fixture.detectChanges();
        return fixture;
    }

    it('shows the not-configured message when no system id is resolved', async () => {
        service.authenticated.set(true);
        service.guest.set({ name: 'A', email: 'a@b.com' });
        const fixture = await init();
        expect(fixture.nativeElement.textContent).toContain(
            'Public events are not configured yet',
        );
        expect(router.navigate).not.toHaveBeenCalled();
        expect(service.loadEvents).not.toHaveBeenCalled();
    });

    it('redirects unauthenticated visitors to guest details keeping the system id', async () => {
        service.authenticated.set(false);
        service.default_system_id.set('sys-1');
        await init();
        expect(router.navigate).toHaveBeenCalledWith(['/guest-details'], {
            queryParams: { system_id: 'sys-1' },
        });
    });

    it('keeps the event and direct link in the guest details redirect', async () => {
        (route as { snapshot: Record<string, unknown> }).snapshot = {
            routeConfig: { path: 'event/:system_id/:event_id' },
            queryParams: { lang: 'en', system: 'ignored' },
        };
        param_map$.next(
            convertToParamMap({ system_id: 'sys-1', event_id: 'e1' }),
        );
        await init();
        expect(router.navigate).toHaveBeenCalledWith(['/guest-details'], {
            queryParams: {
                lang: 'en',
                system_id: 'sys-1',
                event_id: 'e1',
                direct_event: true,
            },
        });
        expect(service.loadEvents).not.toHaveBeenCalled();
    });

    it('prefers the system id query param over the route param', async () => {
        service.authenticated.set(true);
        service.default_system_id.set('sys-default');
        param_map$.next(convertToParamMap({ system_id: 'sys-route' }));
        query_map$.next(convertToParamMap({ system: 'sys-query' }));
        await init();
        expect(service.loadEvents).toHaveBeenCalledWith('sys-query');
    });

    it('loads events and shows the list for an authenticated visitor', async () => {
        service.authenticated.set(true);
        service.guest.set({ name: 'A', email: 'a@b.com' });
        service.default_system_id.set('sys-1');
        service.events.set([{ id: 'e1', title: 'Rooftop Mixer' }]);
        const fixture = await init();
        expect(service.loadEvents).toHaveBeenCalledWith('sys-1');
        expect(fixture.nativeElement.querySelector('.list-stub')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.details-stub')).toBeNull();
    });

    it('shows the event details when an event id is present in the route', async () => {
        service.authenticated.set(true);
        service.guest.set({ name: 'A', email: 'a@b.com' });
        service.events.set([{ id: 'e1', title: 'Rooftop Mixer' }]);
        param_map$.next(
            convertToParamMap({ system_id: 'sys-1', event_id: 'e1' }),
        );
        const fixture = await init();
        expect(
            fixture.nativeElement.querySelector('.details-stub'),
        ).toBeTruthy();
        expect(fixture.componentInstance.selected_event()).toEqual({
            id: 'e1',
            title: 'Rooftop Mixer',
        });
        const details = () =>
            fixture.debugElement.query(
                By.directive(PublicEventDetailsComponent),
            ).componentInstance as PublicEventDetailsComponent;
        expect(details().show_back()).toBe(true);

        // A direct event link has no events list to go back to
        query_map$.next(convertToParamMap({ direct_event: 'true' }));
        fixture.detectChanges();
        expect(details().show_back()).toBe(false);
    });

    it('renders the service error banner', async () => {
        service.authenticated.set(true);
        service.guest.set({ name: 'A', email: 'a@b.com' });
        service.default_system_id.set('sys-1');
        const fixture = await init();
        service.error.set('Something went wrong');
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).toContain(
            'Something went wrong',
        );
    });

    it('registers for an event and marks the visitor as registered', async () => {
        service.authenticated.set(true);
        service.guest.set({ name: 'A', email: 'a@b.com' });
        service.default_system_id.set('sys-1');
        const fixture = await init();
        await fixture.componentInstance.register({ id: 'e1' });
        await flush();
        expect(service.register).toHaveBeenCalledWith('sys-1', 'e1');
        expect(fixture.componentInstance.registered()).toBe(true);

        // A new event route shows the register button again
        param_map$.next(
            convertToParamMap({ system_id: 'sys-1', event_id: 'e2' }),
        );
        expect(fixture.componentInstance.registered()).toBe(false);
    });

    it('stays unregistered when registration fails', async () => {
        service.authenticated.set(true);
        service.guest.set({ name: 'A', email: 'a@b.com' });
        service.default_system_id.set('sys-1');
        service.register.mockRejectedValueOnce(new Error('Full'));
        const fixture = await init();
        await fixture.componentInstance.register({ id: 'e1' });
        expect(fixture.componentInstance.registered()).toBe(false);
    });
});
