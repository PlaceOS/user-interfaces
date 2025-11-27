import { SlicePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookingFormService } from '@placeos/bookings';
import { SettingsService, User } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

@Component({
    selector: 'visitor-flow-recent',
    template: `
        <div
            class="bg-grad relative mx-auto mb-4 w-full max-w-full space-y-2 rounded-xl border border-base-300 p-4 text-white shadow"
        >
            <div class="flex items-center justify-between pb-2">
                <div
                    class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                >
                    <div
                        class="absolute inset-0 bg-brand-content opacity-20"
                    ></div>
                    <div>Quick Action</div>
                </div>
                <div class="flex items-center space-x-2">
                    <icon>history</icon>
                    <div class="text-sm">Recent Visitors</div>
                </div>
            </div>
            <div>
                <h3 class="mb-1 text-2xl font-medium">
                    {{ 'BOOKINGS.VISITOR_RECENT' | translate }}
                </h3>
                <p class="text-sm">
                    @if (is_single()) {
                        Quickly re-invite visitors you've previously booked.
                    } @else {
                        Select visitors to invite. Click to toggle.
                    }
                </p>
            </div>
            @if (recent_visitors().length > 0 && false) {
                <div class="flex flex-wrap gap-2 pt-2">
                    @for (
                        visitor of recent_visitors() | slice: 0 : 4;
                        track visitor.email
                    ) {
                        <button
                            type="button"
                            [class]="
                                'flex min-w-48 items-center space-x-2 rounded-lg border p-2 text-sm transition-all hover:bg-white/20 ' +
                                (isVisitorSelected(visitor)
                                    ? 'border-white bg-white/30 shadow-lg'
                                    : 'border-white/20 bg-white/10')
                            "
                            (click)="selectVisitor(visitor)"
                        >
                            @if (is_single()) {
                                <icon class="text-2xl">person</icon>
                            } @else {
                                @if (isVisitorSelected(visitor)) {
                                    <icon class="text-2xl">check_circle</icon>
                                } @else {
                                    <icon class="text-2xl"
                                        >radio_button_unchecked</icon
                                    >
                                }
                            }
                            <div
                                class="flex flex-col items-start pr-2 leading-tight"
                            >
                                <div class="font-medium">
                                    {{ visitor.name }}
                                </div>
                                @if (visitor.email) {
                                    <div class="text-xs opacity-80">
                                        {{ visitor.email }}
                                    </div>
                                }
                            </div>
                        </button>
                    }
                </div>
            } @else {
                <div
                    class="flex items-center justify-center space-x-3 rounded-lg border border-white/20 bg-white/5 py-2"
                >
                    <icon class="text-4xl opacity-60">person_search</icon>
                    <div class="">
                        <div class="text-sm font-medium">
                            No recent visitors
                        </div>
                        <div class="text-xs opacity-80">
                            Your visitor history will appear here
                        </div>
                    </div>
                </div>
            }
        </div>
    `,
    styles: [
        `
            .bg-grad {
                background: linear-gradient(
                    105deg,
                    var(--brand-100) 0%,
                    var(--brand-200) 100%
                );
            }
        `,
    ],
    imports: [IconComponent, TranslatePipe, SlicePipe],
})
export class VisitorFlowRecentComponent implements OnInit {
    private _booking_form = inject(BookingFormService);
    private _settings = inject(SettingsService);

    public readonly visitors = signal<User[]>([]);
    public readonly options = toSignal(this._booking_form.options);

    public readonly form_value = toSignal(
        this._booking_form.form.valueChanges,
        {
            initialValue: this._booking_form.form.value,
        },
    );

    public readonly is_single = computed(() => {
        const is_group_mode = this.options()?.group === true;
        return !is_group_mode;
    });

    public readonly recent_visitors = computed(() => {
        return this.visitors()
            .slice(-5)
            .reverse()
            .map((v) => this.enrichVisitorData(v));
    });

    public readonly selected_visitors = computed(() => {
        const assets = this.form_value()?.assets || [];
        return new Set(assets.map((a: any) => a.email));
    });

    public ngOnInit() {
        // Load visitor history
        const visitor_history = this._settings.get('visitor-invitees') || [];
        this.visitors.update((list) => {
            for (const item of visitor_history) {
                const [email, name, company] = item.split('|');
                list.push({
                    email,
                    name:
                        name && name !== 'null' && name !== 'undefined'
                            ? name
                            : '',
                    company:
                        company && company !== 'null' && company !== 'undefined'
                            ? company
                            : '',
                } as any);
            }
            return list;
        });
    }

    public isVisitorSelected(visitor: any): boolean {
        if (this.is_single()) {
            return this.form_value()?.asset_id === visitor.email;
        }
        return this.selected_visitors().has(visitor.email);
    }

    private extractNameFromEmail(email: string): string {
        const localPart = email.split('@')[0];
        // Replace dots, underscores, hyphens with spaces
        const name = localPart.replace(/[._-]/g, ' ');
        // Capitalize each word
        return name
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    private extractCompanyFromEmail(email: string): string {
        const domain = email.split('@')[1];
        if (!domain) return '';
        // Get the domain name without TLD
        const companyName = domain.split('.')[0];
        // Capitalize first letter
        return companyName.charAt(0).toUpperCase() + companyName.slice(1);
    }

    private enrichVisitorData(visitor: any): any {
        const enriched = { ...visitor };

        // Extract name from email if not provided, null, or empty
        if (
            (!enriched.name ||
                enriched.name === 'null' ||
                enriched.name === 'undefined') &&
            enriched.email
        ) {
            enriched.name = this.extractNameFromEmail(enriched.email);
        }

        // Extract company from email domain if not provided, null, or empty
        if (
            (!enriched.company ||
                enriched.company === 'null' ||
                enriched.company === 'undefined') &&
            enriched.email
        ) {
            enriched.company = this.extractCompanyFromEmail(enriched.email);
        }

        return enriched;
    }

    public selectVisitor(visitor: any) {
        const is_group = this.options()?.group === true;
        const enriched = this.enrichVisitorData(visitor);

        if (is_group) {
            // Toggle visitor in assets array
            const current_assets = [...(this.form_value()?.assets || [])];
            const index = current_assets.findIndex(
                (a: any) => a.email === visitor.email,
            );

            if (index >= 0) {
                // Remove visitor
                current_assets.splice(index, 1);
            } else {
                // Add visitor
                current_assets.push({
                    email: enriched.email,
                    name: enriched.name,
                    company: enriched.company,
                    phone: enriched.phone,
                });
            }

            this._booking_form.form.patchValue({
                assets: current_assets,
            });
        } else {
            // Single mode - set as the visitor
            this._booking_form.form.patchValue({
                asset_id: enriched.email,
                asset_name: enriched.name,
                company: enriched.company,
                phone: enriched.phone,
            });
        }
    }
}
