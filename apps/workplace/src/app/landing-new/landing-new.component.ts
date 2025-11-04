import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import {
    FAV_DESK_KEY,
    FAV_LOCKER_KEY,
    FAV_PARKING_KEY,
    LockerBank,
    ParkingSpace,
} from '@placeos/bookings';
import { Desk, settingSignal, Space } from '@placeos/common';
import {
    IconComponent,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { ExploreSpacesService } from '@placeos/explore';
import { FooterMenuComponent } from '../components/footer-menu.component';
import { TopbarComponent } from '../components/topbar.component';
import { LandingStateService } from '../landing/landing-state.service';
import { ChatViewComponent } from './chat-view.component';

interface FavoriteEntry {
    id: string;
    name: string;
    type: 'space' | 'desk' | 'locker' | 'parking';
    zones: string[];
}

@Component({
    selector: 'landing-new',
    template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden">
            @if (!hide_nav()) {
                <topbar class="z-10" [class.blur]="open_concierge()" />
            }
            <div
                class="relative flex h-1/2 flex-1 overflow-auto bg-base-200"
                [class.blur]="open_concierge()"
            >
                <div
                    class="mx-auto flex w-[80rem] max-w-full flex-col gap-4 p-4"
                >
                    <div
                        upcoming-block
                        class="bg-grad col-span-2 space-y-2 rounded-lg border border-base-300 p-4 text-brand-content"
                    >
                        <div class="flex w-full items-center justify-between">
                            <div
                                class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                            >
                                <div
                                    class="absolute inset-0 bg-brand-content opacity-20"
                                ></div>
                                <div>
                                    {{
                                        'CALENDAR_EVENT.GROUP_FEATURED'
                                            | translate
                                    }}
                                </div>
                            </div>
                            <div
                                class="flex w-48 items-center space-x-2 px-2 text-center"
                            >
                                <icon>timelapse</icon>
                                <div>Starts in X minutes</div>
                            </div>
                        </div>
                        <div
                            class="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0"
                        >
                            <div class="w-full sm:flex-1">
                                <h2 class="text-2xl font-medium">
                                    Your next booking
                                </h2>
                                <h3 class="mb-2 text-lg font-medium">
                                    Meeting Room A - Floor 3
                                </h3>
                                <div class="mb-1 flex items-center space-x-2">
                                    <icon class="text-xl">event</icon>
                                    <div>10:00 AM - 11:00 AM · Today</div>
                                </div>
                                <div class="mb-1 flex items-center space-x-2">
                                    <icon class="text-xl">distance</icon>
                                    <div>Conference Room, Level 4</div>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">people</icon>
                                    <div>5 attendees</div>
                                </div>
                            </div>
                            <div
                                class="flex w-full flex-col items-end space-y-2 sm:flex-1"
                            >
                                <button
                                    btn
                                    matRipple
                                    class="white w-full space-x-2 sm:w-48"
                                >
                                    <icon class="text-2xl">check_circle</icon>
                                    <div class="mr-2">Check-in</div>
                                </button>
                                <button
                                    btn
                                    matRipple
                                    class="inverse white w-full space-x-2 sm:w-48"
                                >
                                    <icon class="text-2xl">info</icon>
                                    <div class="mr-2">View Details</div>
                                </button>
                                <button
                                    btn
                                    matRipple
                                    class="inverse white w-full space-x-2 sm:w-48"
                                >
                                    <icon class="text-2xl">directions</icon>
                                    <div class="mr-2">Directions</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <a
                        matRipple
                        [routerLink]="['/your-bookings']"
                        class="col-span-2 flex min-h-8 items-center justify-center rounded-lg"
                    >
                        <div class="underline">
                            {{
                                'APP.WORKPLACE.UPCOMING_VIEW_BOOKINGS'
                                    | translate
                            }}
                        </div>
                        <icon>arrow_forward</icon>
                    </a>
                    <div
                        class="flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
                    >
                        <div
                            available-block
                            class="flex-[2] space-y-2 rounded-lg border border-base-300 bg-base-100 p-4"
                        >
                            <div class="mb-2 flex items-center justify-between">
                                <h3 class="px-2 text-lg font-medium">
                                    Available Now
                                </h3>
                                <button
                                    matRipple
                                    class="flex items-center rounded px-2 py-1"
                                >
                                    <div class="ml-2 text-sm underline">
                                        Nearby
                                    </div>
                                    <icon>keyboard_arrow_down</icon>
                                </button>
                            </div>
                            <div
                                class="flex w-full items-center space-x-1 rounded bg-base-200 p-1"
                            >
                                <button
                                    btn
                                    matRipple
                                    class="flex-1 hover:bg-base-300"
                                    [class.clear]="
                                        active_available() !== 'desks'
                                    "
                                >
                                    Desks
                                </button>
                                <button
                                    btn
                                    matRipple
                                    class="flex-1 hover:bg-base-300"
                                    [class.clear]="
                                        active_available() !== 'rooms'
                                    "
                                >
                                    Rooms
                                </button>
                                <button
                                    btn
                                    matRipple
                                    class="flex-1 hover:bg-base-300"
                                    [class.clear]="
                                        active_available() !== 'lockers'
                                    "
                                >
                                    Lockers
                                </button>
                            </div>
                            <div class="flex flex-col space-y-2 pt-2">
                                @for (lvl of levels_free | async; track lvl) {
                                    <a
                                        btn
                                        matRipple
                                        class="inverse w-full space-x-4 text-left"
                                    >
                                        <icon class="text-xl">desk</icon>
                                        <div class="flex-1">
                                            {{ lvl.display_name || lvl.name }}
                                        </div>
                                        <div
                                            class="rounded bg-base-200 px-2 py-1 text-xs"
                                        >
                                            0 free
                                        </div>
                                        <icon class="text-xl"
                                            >chevron_right</icon
                                        >
                                    </a>
                                }
                            </div>
                        </div>
                        <div
                            quick-actions-block
                            class="flex-1 space-y-2 rounded-lg border border-base-300 bg-base-100 p-4"
                        >
                            <div class="mb-2 flex items-center justify-between">
                                <h3 class="text-lg font-medium">
                                    Quick Actions
                                </h3>
                            </div>
                            <button btn matRipple class="h-16 w-full">
                                <div class="space-y-1">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-xl">bolt</icon>
                                        <div class="pr-2 font-medium">
                                            Auto-assign Desk
                                        </div>
                                    </div>
                                    <div class="text-xs">
                                        We'll find you a desk for today
                                    </div>
                                </div>
                            </button>
                            <h4 class="font-medium">Reserve</h4>
                            <a
                                btn
                                matRipple
                                [routerLink]="['/book', 'meeting']"
                                class="inverse w-full space-x-4 text-left"
                            >
                                <icon class="text-xl">meeting_room</icon>
                                <div class="flex-1">Book a room</div>
                                <icon class="text-xl">chevron_right</icon>
                            </a>
                            <a
                                btn
                                matRipple
                                [routerLink]="['/book', 'desk']"
                                class="inverse w-full space-x-4 text-left"
                            >
                                <icon class="text-xl">desk</icon>
                                <div class="flex-1">Book a desk</div>
                                <icon class="text-xl">chevron_right</icon>
                            </a>
                            <a
                                btn
                                matRipple
                                [routerLink]="['/book', 'parking']"
                                class="inverse w-full space-x-4 text-left"
                            >
                                <icon class="text-xl">directions_car</icon>
                                <div class="flex-1">Book parking</div>
                                <icon class="text-xl">chevron_right</icon>
                            </a>
                            <a
                                btn
                                matRipple
                                [routerLink]="['/book', 'locker']"
                                class="inverse w-full space-x-4 text-left"
                            >
                                <icon class="text-xl">lock</icon>
                                <div class="flex-1">Book locker</div>
                                <icon class="text-xl">chevron_right</icon>
                            </a>
                        </div>
                    </div>
                    <div
                        class="flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
                    >
                        <div
                            class="flex flex-[2] flex-col rounded-lg border border-base-300 bg-base-100 p-4"
                        >
                            <div class="mb-2">
                                <h3 class="text-lg font-medium">Favourites</h3>
                                <div class="text-sm">0 favourites</div>
                            </div>
                            @if (favourites().length) {
                                <div
                                    class="grid min-h-64 w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
                                >
                                    @for (item of favourites(); track item.id) {
                                        <div
                                            class="rounded border border-base-300 p-2"
                                        >
                                            <div
                                                class="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded bg-base-300"
                                            >
                                                @if (item.images?.length) {
                                                    <img
                                                        auth
                                                        class="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                                                        [source]="
                                                            item.images[0]
                                                        "
                                                    />
                                                } @else {
                                                    <img
                                                        class="m-auto"
                                                        [src]="
                                                            'assets/icons/' +
                                                            item.type +
                                                            '-placeholder.svg'
                                                        "
                                                    />
                                                }
                                            </div>
                                            <div
                                                class="flex h-16 w-1/2 flex-1 flex-col justify-center space-y-1"
                                            >
                                                <div
                                                    class="w-full truncate pr-12"
                                                >
                                                    {{ item.name }}
                                                </div>
                                                <div
                                                    class="flex items-center space-x-1 text-xs opacity-60"
                                                >
                                                    <icon class="text-blue-500"
                                                        >place</icon
                                                    >
                                                    <div
                                                        class="w-1/2 flex-1 truncate"
                                                    >
                                                        @let lvl = item | level;
                                                        {{
                                                            lvl?.display_name ||
                                                                lvl?.name
                                                        }}
                                                    </div>
                                                </div>
                                                <div
                                                    class="flex items-center space-x-2 truncate text-xs opacity-60"
                                                >
                                                    <icon class="text-blue-500">
                                                        people
                                                    </icon>
                                                    <div>
                                                        {{
                                                            'APP.WORKPLACE.CAPACITY'
                                                                | translate
                                                                    : {
                                                                          count: item.capacity,
                                                                      }
                                                        }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            } @else {
                                <div
                                    class="flex min-h-64 w-full flex-1 flex-col items-center justify-center space-y-2 rounded-xl bg-base-200 p-8"
                                >
                                    <img src="assets/icons/no-favourites.svg" />
                                    <p class="text-center text-sm opacity-60">
                                        {{
                                            'APP.WORKPLACE.FAVOURITES_EMPTY'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }
                        </div>
                        <div
                            class="w-full flex-1 rounded-lg border border-base-300 bg-base-100 p-4 sm:w-1/3"
                        >
                            @let contact_list = contacts | async;
                            <div class="mb-2">
                                <h3 class="text-lg font-medium">
                                    {{ 'APP.WORKPLACE.COLLEAGUES' | translate }}
                                </h3>
                                <div class="text-sm">
                                    {{
                                        'APP.WORKPLACE.COLLEAGUES_COUNT'
                                            | translate
                                                : {
                                                      count: contact_list?.length,
                                                  }
                                                : contact_list?.length
                                    }}
                                </div>
                            </div>
                            @if (contact_list?.length) {
                                <div class="flex w-full flex-col space-y-2">
                                    @for (user of contact_list; track user) {
                                        <div
                                            class="flex items-center space-x-2 rounded border border-base-300 p-2"
                                        >
                                            <a-user-avatar [user]="user" />
                                            <div
                                                class="flex w-16 flex-1 flex-col leading-tight"
                                            >
                                                <div class="truncate">
                                                    {{ user.name }}
                                                </div>
                                                <a
                                                    [href]="
                                                        'mailto:' + user.email
                                                    "
                                                    class="truncate text-xs underline opacity-60"
                                                    >{{ user.email }}</a
                                                >
                                            </div>
                                            <button icon matRipple>
                                                <icon>more_vert</icon>
                                            </button>
                                        </div>
                                    }
                                </div>
                            } @else {
                                <div
                                    class="flex h-48 w-full flex-col items-center justify-center space-y-2 rounded-xl bg-base-200 p-8"
                                >
                                    <img src="assets/icons/no-contacts.svg" />
                                    <p class="text-center text-sm opacity-60">
                                        {{
                                            'APP.WORKPLACE.COLLEAGUES_EMPTY'
                                                | translate
                                        }}
                                    </p>
                                </div>
                            }
                            <button btn matRipple class="mt-4 w-full">
                                <icon class="text-xl">person_add</icon>
                                <div>Add Colleagues</div>
                            </button>
                        </div>
                    </div>
                    <div class="min-h-2 w-full"></div>
                </div>
                <button
                    icon
                    matRipple
                    class="absolute left-2 top-60 h-14 w-14 bg-secondary text-secondary-content shadow"
                    matTooltip="Virtual Concierge"
                    matTooltipPosition="right"
                    (click)="openConciergeChat()"
                >
                    <img class="h-10" src="assets/icons/ben_icon.svg" />
                </button>
            </div>
            @if (!hide_nav()) {
                <footer-menu [(blur_backdrop)]="open_concierge" />
            }
            <div></div>
        </div>
    `,
    styles: [
        `
            .blur {
                filter: blur(10px);
            }

            .bg-grad {
                background: linear-gradient(
                    105deg,
                    var(--brand-100) 0%,
                    var(--brand-200) 100%
                );
            }
        `,
    ],
    providers: [ExploreSpacesService],
    imports: [
        CommonModule,
        MatRippleModule,
        TopbarComponent,
        FooterMenuComponent,
        TranslatePipe,
        IconComponent,
        RouterModule,
        MatFormFieldModule,
        MatSelectModule,
        UserAvatarComponent,
        MatTooltipModule,
    ],
})
export class LandingNewComponent {
    public readonly hide_nav = signal(false);
    public readonly active_available = signal('desks');
    public readonly open_concierge = signal(false);

    // Availability
    private _state = inject(LandingStateService);
    private _bottom_sheet = inject(MatBottomSheet);
    private _explore = inject(ExploreSpacesService);

    public readonly space_list = this._state.free_space_list;
    public readonly loading_spaces = this._state.loading_spaces;
    public readonly levels_free = this._state.level_occupancy;
    public readonly hide_spaces = settingSignal<boolean>('hide_landing_spaces');
    public readonly hide_rooms = settingSignal<boolean>('hide_landing_rooms');

    public readonly spaces = settingSignal<Space[]>(
        'favourite_spaces',
        [],
        true,
    );
    public readonly parking = settingSignal<ParkingSpace[]>(
        FAV_PARKING_KEY,
        [],
        true,
    );
    public readonly desks = settingSignal<Desk[]>(FAV_DESK_KEY, [], true);
    public readonly lockers = settingSignal<LockerBank[]>(
        FAV_LOCKER_KEY,
        [],
        true,
    );

    public readonly favourites = computed(() => {
        let list: FavoriteEntry[] = [];
        list = list.concat(
            this.spaces().map((s) => ({
                type: 'space',
                id: s.id,
                name: s.display_name || s.name,
                zones: s.zones || [],
            })),
        );
        list = list.concat(
            this.parking().map((p) => ({
                type: 'parking',
                id: p.id,
                name: p.name,
                zones: (p as any).zones || [],
            })),
        );
        list = list.concat(
            this.desks().map((d) => ({
                type: 'desk',
                id: d.id,
                name: d.name,
                zones: [d.zone?.id],
            })),
        );
        list = list.concat(
            this.lockers().map((l) => ({
                type: 'locker',
                id: l.id,
                name: l.name,
                zones: l.zones,
            })),
        );
        console.log('Favourites:', list);
        return list;
    });

    public book = (s) => this._explore.bookSpace(s, true);

    // Contacts
    public readonly contacts = this._state.contacts;

    public openConciergeChat() {
        this.open_concierge.set(true);
        const ref = this._bottom_sheet.open(ChatViewComponent);
        ref.afterDismissed().subscribe(() => this.open_concierge.set(false));
    }
}
