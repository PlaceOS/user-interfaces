import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { PublicEventDetailsComponent } from './public-event-details.component';
import {
    eventId,
    preservedQueryParams,
    querySystemId,
} from './public-event.helpers';
import { PublicEventsListComponent } from './public-events-list.component';
import { PublicEvent, PublicEventsService } from './public-events.service';
import { PublicPageShellComponent } from './public-page-shell.component';

@Component({
    selector: 'placeos-public-events',
    imports: [
        PublicEventsListComponent,
        PublicEventDetailsComponent,
        PublicPageShellComponent,
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
        <placeos-public-page-shell
            [logo]="service.logo_url()"
            [configured]="!!system_id()"
        >
            @if (system_id()) {
                @if (service.error()) {
                    <div
                        class="bg-error-light text-error border-error/25 mx-auto w-full max-w-xl rounded-xl border p-4 text-sm font-medium shadow-sm"
                    >
                        {{ service.error() }}
                    </div>
                }

                @if (selected_event_id()) {
                    <placeos-public-event-details
                        [event]="selected_event()"
                        [loading]="service.loading()"
                        [registered]="registered()"
                        [guest_email]="service.guest()?.email || ''"
                        [system_id]="system_id()"
                        [show_back]="!direct_event_link()"
                        (register_event)="register($event)"
                    />
                } @else {
                    <placeos-public-events-list
                        [events]="events()"
                        [loading]="service.loading()"
                        [system_id]="system_id()"
                        (refresh)="loadEvents()"
                    />
                }
            }
        </placeos-public-page-shell>
    `,
})
export class PublicEventsComponent implements OnInit {
    public readonly service = inject(PublicEventsService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);
    private readonly _destroy_ref = inject(DestroyRef);

    public readonly system_id = signal('');
    public readonly selected_event_id = signal('');
    public readonly direct_event_link = signal(false);
    public readonly registered = signal(false);
    public readonly events = this.service.events;
    public readonly selected_event = computed(() =>
        this.events().find(
            (event) => eventId(event) === this.selected_event_id(),
        ),
    );

    public async ngOnInit() {
        await this.service.init();
        combineLatest([this._route.paramMap, this._route.queryParamMap])
            .pipe(takeUntilDestroyed(this._destroy_ref))
            .subscribe(([params, query]) => {
                this.system_id.set(
                    querySystemId(query) ||
                        params.get('system_id') ||
                        this.service.default_system_id(),
                );
                this.selected_event_id.set(params.get('event_id') || '');
                this.direct_event_link.set(
                    this._isDirectEventRoute() ||
                        query.get('direct_event') === 'true',
                );
                this.registered.set(false);
                if (!this.service.authenticated()) {
                    this._router.navigate(['/guest-details'], {
                        queryParams: this._guestDetailsQueryParams(),
                    });
                    return;
                }
                this.loadEvents();
            });
    }

    private _isDirectEventRoute() {
        return (
            this._route.snapshot.routeConfig?.path?.startsWith('event/') ===
            true
        );
    }

    private _guestDetailsQueryParams() {
        return {
            ...preservedQueryParams(this._route.snapshot.queryParams),
            ...(this.system_id() ? { system_id: this.system_id() } : {}),
            ...(this.selected_event_id()
                ? { event_id: this.selected_event_id() }
                : {}),
            ...(this.direct_event_link() ? { direct_event: true } : {}),
        };
    }

    public async loadEvents() {
        if (!this.system_id()) return;
        await this.service.loadEvents(this.system_id());
    }

    public async register(event: PublicEvent) {
        // The service shows the error, so a failed registration only stops here
        const registered = await this.service
            .register(this.system_id(), eventId(event))
            .then(
                () => true,
                () => false,
            );
        if (registered) this.registered.set(true);
    }
}
