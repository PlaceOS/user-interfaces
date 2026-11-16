import {
    Component,
    DestroyRef,
    ElementRef,
    Injector,
    OnInit,
    afterNextRender,
    computed,
    inject,
    signal,
    viewChild,
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
    template: `
        <placeos-public-page-shell
            [logo]="service.logo_url()"
            [configured]="!ready() || !!source_id() || !!service.error()"
        >
            @if (service.error()) {
                <div
                    role="alert"
                    class="bg-error-light border-error/25 mx-auto w-full max-w-xl rounded-xl border p-4 text-sm font-medium text-[color-mix(in_srgb,var(--error)_60%,black)] shadow-sm"
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
                            <span class="block">Full name</span>
                            <input
                                #name_input
                                class="border-base-300 bg-base-200 focus:border-primary w-full rounded border px-3 py-2 font-normal"
                                name="name"
                                autocomplete="name"
                                required
                                [attr.aria-invalid]="name_error()"
                                [attr.aria-describedby]="
                                    name_error() ? 'guest-name-error' : null
                                "
                                [value]="guest_name()"
                                (input)="guest_name.set(name_input.value)"
                            />
                        </label>
                        @if (name_error()) {
                            <p
                                id="guest-name-error"
                                class="-mt-2 text-sm text-[color-mix(in_srgb,var(--error)_60%,black)]"
                            >
                                Enter your full name.
                            </p>
                        }
                        <label class="block space-y-1 text-sm font-medium">
                            <span class="block">Email</span>
                            <input
                                #email_input
                                class="border-base-300 bg-base-200 focus:border-primary w-full rounded border px-3 py-2 font-normal"
                                name="email"
                                type="email"
                                autocomplete="email"
                                required
                                [attr.aria-invalid]="email_error()"
                                [attr.aria-describedby]="
                                    email_error() ? 'guest-email-error' : null
                                "
                                [value]="guest_email()"
                                (input)="guest_email.set(email_input.value)"
                            />
                        </label>
                        @if (email_error()) {
                            <p
                                id="guest-email-error"
                                class="-mt-2 text-sm text-[color-mix(in_srgb,var(--error)_60%,black)]"
                            >
                                Enter a valid email address.
                            </p>
                        }
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
                            [disabled]="!!loading()"
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
    private readonly _injector = inject(Injector);
    public readonly loading = this.service.loading;

    public readonly guest_name = signal('');
    public readonly guest_email = signal('');
    public readonly remember = signal(false);
    /**
     * Name is required and must not be blank. Email is required and must
     * match `EMAIL_PATTERN`. The service ignores stored details with a blank
     * name, so a blank name would not be remembered.
     */
    private readonly _name_valid = computed(() => !!this.guest_name().trim());
    private readonly _email_valid = computed(() =>
        EMAIL_PATTERN.test(this.guest_email()),
    );
    public readonly guest_valid = computed(
        () => this._name_valid() && this._email_valid(),
    );
    /** True after a submit attempt. Field errors show only after one. */
    public readonly submitted = signal(false);
    public readonly name_error = computed(
        () => this.submitted() && !this._name_valid(),
    );
    public readonly email_error = computed(
        () => this.submitted() && !this._email_valid(),
    );
    private readonly _name_input =
        viewChild<ElementRef<HTMLInputElement>>('name_input');
    private readonly _email_input =
        viewChild<ElementRef<HTMLInputElement>>('email_input');

    /** True after the authority loads, so the not-configured message does not flash */
    public readonly ready = signal(false);
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
        this.ready.set(true);
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

    /**
     * Submits the form. When a field is not valid, shows the field errors
     * and moves focus to the first field that is not valid.
     */
    public submit() {
        if (!this.guest_valid()) {
            this.submitted.set(true);
            const input = this._name_valid()
                ? this._email_input()
                : this._name_input();
            // Focus after render, so the field is read with its error
            afterNextRender(() => input?.nativeElement.focus(), {
                injector: this._injector,
            });
            return;
        }
        // The service shows the error, and the visitor stays on this page
        this.continueAsGuest(
            { name: this.guest_name(), email: this.guest_email() },
            this.remember(),
        ).catch(() => undefined);
    }
}
