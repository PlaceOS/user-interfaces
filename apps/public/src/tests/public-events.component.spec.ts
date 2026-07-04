import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
    ActivatedRoute,
    ParamMap,
    Router,
    convertToParamMap,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PublicEventDetailsComponent } from '../app/public-event-details.component';
import { PublicEventsComponent } from '../app/public-events.component';
import { PublicEventsListComponent } from '../app/public-events-list.component';
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
        init: jest.fn().mockResolvedValue(undefined),
        loadEvents: jest.fn().mockResolvedValue(undefined),
        register: jest.fn().mockResolvedValue(undefined),
    };
}

describe('PublicEventsComponent', () => {
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
                routeConfig: { path: 'events/:system_id' },
                queryParams: {},
            },
        };
        router = { navigate: jest.fn().mockResolvedValue(true) };
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
    });

    it('redirects unauthenticated visitors to guest details keeping the system id', async () => {
        service.authenticated.set(false);
        service.default_system_id.set('sys-1');
        await init();
        expect(router.navigate).toHaveBeenCalledWith(['/guest-details'], {
            queryParams: { system_id: 'sys-1' },
        });
    });

    it('loads events and shows the list for an authenticated visitor', async () => {
        service.authenticated.set(true);
        service.guest.set({ name: 'A', email: 'a@b.com' });
        service.default_system_id.set('sys-1');
        service.events.set([{ id: 'e1', title: 'Rooftop Mixer' }]);
        const fixture = await init();
        expect(service.loadEvents).toHaveBeenCalledWith('sys-1');
        expect(fixture.nativeElement.querySelector('.list-stub')).toBeTruthy();
        expect(
            fixture.nativeElement.querySelector('.details-stub'),
        ).toBeNull();
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
    });

    it('does not load events when there is no system id', async () => {
        service.authenticated.set(true);
        service.guest.set({ name: 'A', email: 'a@b.com' });
        const fixture = await init();
        service.loadEvents.mockClear();
        await fixture.componentInstance.loadEvents();
        expect(service.loadEvents).not.toHaveBeenCalled();
    });
});
