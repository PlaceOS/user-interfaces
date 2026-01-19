import { Component, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink } from '@angular/router';
import { ANIMATION_SHOW_CONTRACT_EXPAND, userSignal } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { FooterComponent } from '../shared/footer.component';
import { TopbarComponent } from '../shared/topbar.component';

@Component({
    selector: 'landing-root',
    template: `
        <app-topbar class="border-base-200 sticky top-0 z-20 border-b" />
        <main class="bg-base-200 relative z-0 flex flex-1 flex-col gap-6 p-4">
            <section
                class="bg-secondary text-secondary-content mx-auto flex w-5xl max-w-full flex-col gap-4 rounded-xl p-6 shadow-lg"
            >
                <h2 class="text-2xl font-medium">Hi {{ user()?.name }}</h2>
                <div
                    class="bg-base-100 text-base-content flex gap-4 rounded-lg p-4"
                >
                    <div
                        class="bg-base-300 flex h-16 w-16 min-w-16 items-center justify-center rounded-full"
                    >
                        <icon class="text-3xl">edit_note</icon>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p>
                            Your recent event request "<span class="font-medium"
                                >Department Holiday Party</span
                            >" is in
                            <span
                                class="bg-base-200 rounded-full px-3 py-1 font-medium"
                                >Draft</span
                            >
                        </p>
                        <div class="flex flex-col gap-2 sm:flex-row">
                            <button btn matRipple class="w-full sm:w-40">
                                View Details
                                <icon class="ml-1">open_in_new</icon>
                            </button>
                            <a
                                btn
                                matRipple
                                [routerLink]="['/manage']"
                                class="inverse w-full sm:w-40"
                            >
                                All Requests
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="mx-auto flex w-5xl max-w-full flex-wrap justify-center gap-6"
            >
                <a
                    matRipple
                    [routerLink]="['/discover']"
                    class="bg-base-100 border-base-300 relative flex w-80 min-w-80 flex-1 flex-col items-center gap-4 rounded-xl border p-4 shadow-lg hover:-top-1 sm:flex-0"
                >
                    <icon class="text-secondary text-6xl">search</icon>
                    <h3 class="text-secondary text-2xl font-medium">
                        Find Venue
                    </h3>
                    <p class="px-2 text-center">
                        Search availability and view details of our venues
                    </p>
                    <button btn class="w-40">Search Venues</button>
                </a>
                <a
                    matRipple
                    [routerLink]="['/booking-request']"
                    class="bg-base-100 border-base-300 relative flex w-80 min-w-80 flex-1 flex-col items-center gap-4 rounded-xl border p-4 shadow-lg hover:-top-1 sm:flex-0"
                >
                    <icon class="text-secondary text-6xl">edit_calendar</icon>
                    <h3 class="text-secondary text-2xl font-medium">
                        Request Event
                    </h3>
                    <p class="px-2 text-center">
                        Submit a new event request with all the requirements
                    </p>
                    <button btn class="w-40">Get Started</button>
                </a>
                <a
                    matRipple
                    [routerLink]="['/manage']"
                    class="bg-base-100 border-base-300 relative flex w-80 min-w-80 flex-1 flex-col items-center gap-4 rounded-xl border p-4 shadow-lg hover:-top-1 sm:flex-0"
                >
                    <icon class="text-secondary text-6xl">list_alt</icon>
                    <h3 class="text-secondary text-2xl font-medium">
                        My Events
                    </h3>
                    <p class="px-2 text-center">
                        View and Manage your submitted event requests
                    </p>
                    <button btn class="inverse w-40">View Events</button></a
                >
            </section>
            <section
                class="mx-auto flex w-5xl max-w-full flex-col justify-center gap-4"
            >
                <h2
                    class="text-secondary mt-4 w-full text-center text-3xl font-medium"
                >
                    How it works
                </h2>
                <div class="flex flex-wrap justify-center gap-6">
                    <div
                        class="flex w-80 min-w-80 flex-col items-center gap-4 p-2"
                    >
                        <div
                            class="bg-secondary text-secondary-content flex h-14 w-14 items-center justify-center rounded-full text-3xl font-medium"
                        >
                            1
                        </div>
                        <h4 class="font-medium">Submit Request</h4>
                        <p class="text-center">
                            Fill out event details and select required services
                        </p>
                    </div>
                    <div
                        class="flex w-80 min-w-80 flex-col items-center gap-4 p-2"
                    >
                        <div
                            class="bg-secondary text-secondary-content flex h-14 w-14 items-center justify-center rounded-full text-3xl font-medium"
                        >
                            2
                        </div>
                        <h4 class="font-medium">Upload Documents</h4>
                        <p class="text-center">
                            Provide necessary permits and insurance documents
                        </p>
                    </div>
                    <div
                        class="flex w-80 min-w-80 flex-col items-center gap-4 p-2"
                    >
                        <div
                            class="bg-secondary text-secondary-content flex h-14 w-14 items-center justify-center rounded-full text-3xl font-medium"
                        >
                            3
                        </div>
                        <h4 class="font-medium">Track Approvals</h4>
                        <p class="text-center">
                            Monitor approval progress in real-time
                        </p>
                    </div>
                    <div
                        class="flex w-80 min-w-80 flex-col items-center gap-4 p-2"
                    >
                        <div
                            class="bg-secondary text-secondary-content flex h-14 w-14 items-center justify-center rounded-full text-3xl font-medium"
                        >
                            4
                        </div>
                        <h4 class="font-medium">Event Confirmed</h4>
                        <p class="text-center">
                            Receive confirmation once all approvals complete
                        </p>
                    </div>
                </div>
            </section>
            <section
                class="bg-base-100 mx-auto flex w-5xl max-w-full flex-col justify-center gap-6 rounded-lg p-8 shadow-lg"
            >
                <h2 class="text-secondary text-3xl font-medium">
                    Approval Departments
                </h2>
                @for (dept of approval_departments; track dept.id) {
                    <div
                        class="bg-base-100 border-base-300 overflow-hidden rounded-lg border transition-shadow hover:shadow-lg"
                    >
                        <button
                            matRipple
                            class="bg-base-200 border-secondary flex w-full cursor-pointer items-center justify-between border-l-4 p-4 text-left"
                            (click)="toggleDepartment(dept.id)"
                        >
                            <div class="flex flex-col gap-1">
                                <h3 class="text-lg font-semibold">
                                    {{ dept.name }}
                                </h3>
                                <span class="text-base-content/70 text-sm">{{
                                    dept.types
                                }}</span>
                            </div>
                            <icon
                                class="text-2xl transition-transform duration-200"
                                [class.rotate-180]="
                                    expanded_departments().includes(dept.id)
                                "
                            >
                                expand_more
                            </icon>
                        </button>
                        <div
                            [@show]="
                                expanded_departments().includes(dept.id)
                                    ? 'show'
                                    : 'hide'
                            "
                            class="bg-base-200/30 flex flex-col gap-4 p-4"
                        >
                            <p class="text-base-content/80">
                                {{ dept.description }}
                            </p>
                            @if (dept.requirements?.length > 0) {
                                <div class="flex flex-col gap-2">
                                    <h4
                                        class="text-sm font-bold tracking-wide uppercase"
                                    >
                                        Requirements
                                    </h4>
                                    <ul class="list-inside list-disc space-y-1">
                                        @for (
                                            req of dept.requirements;
                                            track req;
                                            let last = $last
                                        ) {
                                            <li>
                                                {{ req }}
                                            </li>
                                        }
                                    </ul>
                                </div>
                            }

                            <div class="flex flex-col gap-2">
                                <h4
                                    class="text-sm font-bold tracking-wide uppercase"
                                >
                                    Documents & Forms
                                </h4>
                                <div class="flex flex-col gap-2">
                                    @for (
                                        doc of dept.documents;
                                        track doc.name
                                    ) {
                                        <a
                                            [href]="doc.link"
                                            matRipple
                                            class="bg-base-200 flex items-center justify-between rounded-lg px-4 py-3"
                                        >
                                            <div
                                                class="flex items-center gap-3"
                                            >
                                                <icon
                                                    class="text-secondary text-xl"
                                                    >description</icon
                                                >
                                                <span
                                                    >{{ doc.name }}.{{
                                                        doc.type.toLowerCase()
                                                    }}</span
                                                >
                                            </div>
                                            <icon class="text-2xl"
                                                >download</icon
                                            >
                                        </a>
                                    }
                                </div>
                            </div>

                            <div class="flex flex-col gap-1">
                                <h4 class="text-sm font-bold tracking-wide">
                                    CONTACT
                                </h4>
                                <p class="text-base-content/80">
                                    {{ dept.contact.email }} |
                                    {{ dept.contact.phone }}
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </main>
        <app-footer />
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                overflow: auto;
            }

            a {
                top: 0;
                transition: top 200ms;
            }
        `,
    ],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    imports: [
        TopbarComponent,
        FooterComponent,
        IconComponent,
        RouterLink,
        MatRippleModule,
    ],
})
export class LandingComponent {
    public readonly user = userSignal();
    public readonly expanded_departments = signal<number[]>([]);

    public toggleDepartment(id: number): void {
        this.expanded_departments.update((ids) =>
            ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id],
        );
    }

    public readonly approval_departments = [
        {
            id: 1,
            name: 'Venue Management',
            types: 'All Events',
            description:
                'Venue Management oversees all campus event spaces and ensures proper scheduling, setup requirements, and facility usage compliance.',
            requirements: [
                'Complete venue reservation form',
                'Provide expected attendance numbers',
                'Submit event layout/floor plan',
                'Confirm setup and teardown times',
            ],
            documents: [
                { name: 'Venue Reservation Form', type: 'PDF', link: '' },
                { name: 'Room Setup Guidelines', type: 'PDF', link: '' },
                { name: 'Capacity Charts', type: 'PDF', link: '' },
            ],
            contact: { email: 'venue@placeos.com', phone: '+1-800-PLACEOS' },
        },
        {
            id: 2,
            name: 'Environmental Health & Safety',
            types: 'Alcohol, fireworks',
            description:
                'Environmental Health & Safety reviews events involving hazardous materials, alcohol service, pyrotechnics, and other safety-sensitive activities.',
            requirements: [
                'Submit safety plan for review',
                'Obtain required permits',
                'Provide insurance documentation',
                'Complete safety training certification',
            ],
            documents: [
                { name: 'Safety Plan Template', type: 'PDF', link: '' },
                { name: 'Alcohol Service Guidelines', type: 'PDF', link: '' },
                {
                    name: 'Pyrotechnics Permit Application',
                    type: 'PDF',
                    link: '',
                },
            ],
            contact: { email: 'safety@placeos.com', phone: '+1-800-PLACEOS' },
        },
    ];
}
