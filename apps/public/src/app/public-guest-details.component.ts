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
import { preservedQueryParams, querySystemId } from './public-event.helpers';
import { GuestDetails, PublicEventsService } from './public-events.service';
import { PublicPageShellComponent } from './public-page-shell.component';

/** Same pattern as Angular's `Validators.email`. */
const EMAIL_PATTERN =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * Landing page. Collects guest details, then opens the public events list.
 * Uses signals instead of `@angular/forms` to keep forms out of the initial bundle.
 */
@Component({
    selector: 'placeos-public-guest-details',
    imports: [PublicPageShellComponent],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
        <placeos-public-page-shell
            [logo]="service.logo_url()"
            [configured]="!!source_id()"
            description="Enter your details once to continue to the public events list."
        >
            @if (service.error()) {
                <div
                    class="bg-error-light text-error border-error/25 mx-auto w-full max-w-xl rounded-xl border p-4 text-sm font-medium shadow-sm"
                >
                    {{ service.error() }}
                </div>
            }

            @if (source_id()) {
                <section
                    class="border-base-300 bg-base-100/95 mx-auto w-full max-w-xl space-y-4 rounded-xl border p-5 shadow-md backdrop-blur"
                >
                    <div>
                        <h2 class="text-2xl font-medium">
                            Continue to public events
                        </h2>
                        <p class="mt-1 text-sm opacity-70">
                            Enter your details to continue to the public events
                            list.
                        </p>
                    </div>
                    <form
                        class="flex flex-col gap-3"
                        novalidate
                        (submit)="$event.preventDefault(); submit()"
                    >
                        <label class="block space-y-1 text-sm font-medium">
                            <div>Full name</div>
                            <input
                                #name_input
                                class="border-base-300 bg-base-200 focus:border-primary w-full rounded border px-3 py-2 font-normal outline-none"
                                name="name"
                                autocomplete="name"
                                [value]="guest_name()"
                                (input)="guest_name.set(name_input.value)"
                            />
                        </label>
                        <label class="block space-y-1 text-sm font-medium">
                            <div>Email</div>
                            <input
                                #email_input
                                class="border-base-300 bg-base-200 focus:border-primary w-full rounded border px-3 py-2 font-normal outline-none"
                                name="email"
                                type="email"
                                autocomplete="email"
                                [value]="guest_email()"
                                (input)="guest_email.set(email_input.value)"
                            />
                        </label>
                        <label
                            class="flex items-start gap-3 text-sm font-medium"
                        >
                            <input
                                #remember_input
                                class="border-base-300 bg-base-200 text-primary focus:ring-primary mt-1 rounded"
                                name="remember"
                                type="checkbox"
                                [checked]="remember()"
                                (change)="remember.set(remember_input.checked)"
                            />
                            <span>
                                <span>Remember me</span>
                                <span class="block font-normal opacity-70">
                                    Keep your details on this device for next
                                    time.
                                </span>
                            </span>
                        </label>
                        <button
                            class="bg-primary text-primary-content hover:bg-primary-focus disabled:bg-base-300 disabled:text-base-content min-h-12 w-full rounded px-4 py-2 font-medium disabled:cursor-not-allowed disabled:opacity-60"
                            [disabled]="!guest_valid() || !!loading()"
                        >
                            @if (loading()) {
                                {{ loading() }}
                            } @else {
                                Continue
                            }
                        </button>
                    </form>
                </section>
            }
        </placeos-public-page-shell>
    `,
})
export class PublicGuestDetailsComponent implements OnInit {
    public readonly service = inject(PublicEventsService);
    private readonly _route = inject(ActivatedRoute);
    private readonly _router = inject(Router);
    private readonly _destroy_ref = inject(DestroyRef);
    public readonly loading = this.service.loading;

    public readonly guest_name = signal('');
    public readonly guest_email = signal('');
    public readonly remember = signal(false);
    /**
     * Name is required and must not be blank. Email is required and must
     * match `EMAIL_PATTERN`. The service ignores stored details with a blank
     * name, so a blank name would not be remembered.
     */
    public readonly guest_valid = computed(
        () =>
            !!this.guest_name().trim() &&
            EMAIL_PATTERN.test(this.guest_email()),
    );

    public readonly source_id = signal('');
    public readonly target_event_id = signal('');
    public readonly direct_event_link = signal(false);

    public async ngOnInit() {
        await this.service.init();
        combineLatest([this._route.paramMap, this._route.queryParamMap])
            .pipe(takeUntilDestroyed(this._destroy_ref))
            .subscribe(([params, query]) => {
                this.source_id.set(
                    querySystemId(query) ||
                        params.get('system_id') ||
                        this.service.default_system_id(),
                );
                this.target_event_id.set(query.get('event_id') || '');
                this.direct_event_link.set(
                    query.get('direct_event') === 'true',
                );
                if (this.service.authenticated() && this.source_id()) {
                    this._navigateToEvents();
                }
            });
    }

    public async continueAsGuest(details: GuestDetails, remember = false) {
        if (!this.source_id()) return;
        await this.service.requestGuestAccess(
            this.source_id(),
            details,
            remember,
        );
        this._navigateToEvents();
    }

    private _navigateToEvents() {
        const route = this.target_event_id()
            ? [
                  this.direct_event_link() ? '/event' : '/events',
                  this.source_id(),
                  this.target_event_id(),
              ]
            : ['/events', this.source_id()];
        this._router.navigate(route, {
            queryParams: preservedQueryParams(this._route.snapshot.queryParams),
        });
    }

    public submit() {
        if (!this.guest_valid()) return;
        // The service shows the error, and the visitor stays on this page
        this.continueAsGuest(
            { name: this.guest_name(), email: this.guest_email() },
            this.remember(),
        ).catch(() => undefined);
    }
}
