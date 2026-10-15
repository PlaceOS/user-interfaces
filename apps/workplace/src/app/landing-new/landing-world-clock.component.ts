import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import {
    AsyncHandler,
    LOCAL_TIMEZONE,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

/** Name of the user setting that holds the time zones of the user's cities */
export const WORLD_CLOCK_KEY = 'world_clock_zones';

/** Cities that the user can add to the World Clock widget */
export const WORLD_CLOCK_CITIES = [
    { name: 'Auckland', zone: 'Pacific/Auckland' },
    { name: 'Berlin', zone: 'Europe/Berlin' },
    { name: 'Chicago', zone: 'America/Chicago' },
    { name: 'Dubai', zone: 'Asia/Dubai' },
    { name: 'Hong Kong', zone: 'Asia/Hong_Kong' },
    { name: 'Johannesburg', zone: 'Africa/Johannesburg' },
    { name: 'London', zone: 'Europe/London' },
    { name: 'Los Angeles', zone: 'America/Los_Angeles' },
    { name: 'Melbourne', zone: 'Australia/Melbourne' },
    { name: 'Mumbai', zone: 'Asia/Kolkata' },
    { name: 'New York', zone: 'America/New_York' },
    { name: 'Paris', zone: 'Europe/Paris' },
    { name: 'Perth', zone: 'Australia/Perth' },
    { name: 'São Paulo', zone: 'America/Sao_Paulo' },
    { name: 'Shanghai', zone: 'Asia/Shanghai' },
    { name: 'Singapore', zone: 'Asia/Singapore' },
    { name: 'Sydney', zone: 'Australia/Sydney' },
    { name: 'Tokyo', zone: 'Asia/Tokyo' },
    { name: 'Toronto', zone: 'America/Toronto' },
    { name: 'Vancouver', zone: 'America/Vancouver' },
];

const DEFAULT_ZONES = ['Europe/London', 'America/New_York'];

/** Difference in days between the date in a time zone and the local date */
function dayOffset(zone: string, time: number): string {
    const local = format(time, 'yyyy-MM-dd');
    const remote = formatInTimeZone(time, zone, 'yyyy-MM-dd');
    if (remote === local) return '';
    return remote > local ? '+1' : '-1';
}

@Component({
    selector: 'landing-world-clock',
    template: `
        <div
            class="border-base-300 bg-base-100 space-y-2 rounded-lg border p-4"
        >
            <div class="mb-2">
                <h3 class="text-lg font-medium">
                    {{ 'APP.WORKPLACE.WORLD_CLOCK_TITLE' | translate }}
                </h3>
                <p class="text-sm opacity-60">
                    {{ 'APP.WORKPLACE.WORLD_CLOCK_HINT' | translate }}
                </p>
            </div>
            @for (clock of clocks(); track clock.zone) {
                <div
                    class="border-base-300 flex h-14 items-center space-x-2 rounded-lg border pr-1 pl-3"
                    [attr.data-zone]="clock.zone"
                >
                    <div class="min-w-0 flex-1">
                        <div class="truncate font-medium">
                            @if (clock.removable) {
                                {{ clock.name }}
                            } @else {
                                {{
                                    'APP.WORKPLACE.WORLD_CLOCK_LOCAL'
                                        | translate
                                }}
                            }
                        </div>
                        <div class="text-xs opacity-60">{{ clock.offset }}</div>
                    </div>
                    <div class="text-lg whitespace-nowrap tabular-nums">
                        {{ clock.time }}
                        @if (clock.day_offset) {
                            <sup class="text-xs opacity-60">{{
                                clock.day_offset
                            }}</sup>
                        }
                    </div>
                    @if (clock.removable) {
                        <button
                            icon
                            matRipple
                            name="remove-world-clock-city"
                            [attr.aria-label]="
                                'APP.WORKPLACE.HOME_WIDGET_REMOVE'
                                    | translate: { name: clock.name }
                            "
                            (click)="removeCity(clock.zone)"
                        >
                            <icon>close</icon>
                        </button>
                    } @else {
                        <div class="w-2"></div>
                    }
                </div>
            }
            @if (options().length) {
                <button
                    btn
                    matRipple
                    name="add-world-clock-city"
                    class="inverse w-full space-x-2"
                    [matMenuTriggerFor]="city_menu"
                >
                    <icon class="text-xl">add</icon>
                    <div>{{ 'APP.WORKPLACE.WORLD_CLOCK_ADD' | translate }}</div>
                </button>
                <mat-menu #city_menu="matMenu">
                    @for (city of options(); track city.zone) {
                        <button mat-menu-item (click)="addCity(city.zone)">
                            {{ city.name }}
                        </button>
                    }
                </mat-menu>
            }
        </div>
    `,
    imports: [MatRippleModule, MatMenuModule, IconComponent, TranslatePipe],
})
export class LandingWorldClockComponent extends AsyncHandler implements OnInit {
    private _settings = inject(SettingsService);

    /** Time zones of the cities that the user added */
    public readonly zones = settingSignal<string[]>(
        WORLD_CLOCK_KEY,
        DEFAULT_ZONES,
        true,
    );
    private readonly _use_24_hour_time = settingSignal<boolean>(
        'use_24_hour_time',
        false,
    );
    private readonly _now = signal(Date.now());

    /** Cities of the user. Time zones that are not in the list are ignored */
    public readonly cities = computed(() => {
        const zones = this.zones() || [];
        return [...new Set(zones)].flatMap((zone) =>
            WORLD_CLOCK_CITIES.filter((_) => _.zone === zone),
        );
    });
    /** Cities that the user can add */
    public readonly options = computed(() =>
        WORLD_CLOCK_CITIES.filter((_) => !this.cities().includes(_)),
    );
    /** The local time, then the time in each city of the user */
    public readonly clocks = computed(() => {
        const now = this._now();
        const time_format = this._use_24_hour_time() ? 'HH:mm' : 'h:mm a';
        const local = { name: '', zone: LOCAL_TIMEZONE, removable: false };
        const cities = this.cities().map((_) => ({ ..._, removable: true }));
        return [local, ...cities].map((clock) => ({
            ...clock,
            time: formatInTimeZone(now, clock.zone, time_format),
            offset: formatInTimeZone(now, clock.zone, "'UTC'xxx"),
            day_offset: dayOffset(clock.zone, now),
        }));
    });

    public ngOnInit() {
        this.interval('clock', () => this._now.set(Date.now()), 10 * 1000);
    }

    public addCity(zone: string) {
        this._save([...this.cities().map((_) => _.zone), zone]);
    }

    public removeCity(zone: string) {
        this._save(
            this.cities()
                .map((_) => _.zone)
                .filter((_) => _ !== zone),
        );
    }

    private _save(zones: string[]) {
        this._settings.saveUserSetting(WORLD_CLOCK_KEY, zones);
    }
}
