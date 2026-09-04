import {
    Component,
    computed,
    inject,
    input,
    OnInit,
    signal,
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
    currentUser,
    hasNewVersion,
    i18n,
    LocaleService,
    settingSignal,
    SettingsService,
    VERSION,
    WorktimePreference,
} from '@placeos/common';
import { logout } from '@placeos/ts-client';
import { format, set, startOfMinute } from 'date-fns';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OrganisationService } from '@placeos/common';
import { SupportTicketModalComponent } from 'libs/form-fields/src/lib/support-ticket-modal.component';
import { WFHSettingsModalComponent } from 'libs/users/src/lib/wfh-settings-modal.component';
import { AccessibilityTooltipComponent } from './accessibility-tooltip.component';
import { BuildingSelectComponent } from './building-select.component';
import { ChangelogService } from './changelog.service';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { DeskHeightPresetsComponent } from './desk-height-presets.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { IconComponent } from './icon.component';
import { LanguageSelectComponent } from './language-tooltip.component';
import { RegionSelectComponent } from './region-select.component';
import { TranslatePipe } from './translate.pipe';
import { UserAvatarComponent } from './user-avatar.component';
import { UserParkingTooltipComponent } from './user-parking-tooltip.component';
import { WorkLocationTooltipComponent } from './work-location-tooltip.component';

export interface AppLocale {
    id: string;
    name: string;
    flag: string;
}

@Component({
    selector: 'user-controls',
    template: `
        <div
            class="divide-base-200 border-base-300 bg-base-100 relative mt-1 flex flex-col divide-y overflow-auto rounded-sm border shadow-sm"
            [class.border]="!sidebar()"
        >
            <div avatar class="flex w-full min-w-72 flex-col items-center p-2">
                <a-user-avatar
                    class="text-2xl"
                    [user]="user"
                    [matTooltip]="groups"
                ></a-user-avatar>
                <div class="">{{ user?.name }}</div>
                <div class="truncate text-xs opacity-60">
                    {{ user?.email }}
                </div>
            </div>
            @if (features().includes('wfh') && active_block()) {
                <div class="border-base-200 w-full rounded-sm border-y py-2">
                    <h3 class="w-full px-4 pb-2 text-sm font-medium">
                        Today's Work Location
                    </h3>
                    <div class="w-full">
                        <div class="relative flex items-center px-4 py-2">
                            <div
                                class="bg-info text-info-content z-20 flex h-10 w-10 items-center justify-center rounded-full"
                            >
                                <icon class="text-2xl">{{
                                    location_icon(
                                        timeFrom(active_block().start_time)
                                    )
                                }}</icon>
                            </div>
                            <div class="ml-2 flex-1">
                                <button
                                    matRipple
                                    class="hover:bg-base-200 flex items-center space-x-2 rounded-sm px-2 py-1 font-medium"
                                    [matMenuTriggerFor]="work_menu"
                                >
                                    <div>
                                        {{
                                            location(
                                                timeFrom(
                                                    active_block().start_time
                                                )
                                            )
                                        }}
                                    </div>
                                    <icon>expand_more</icon>
                                </button>
                                <mat-menu #work_menu="matMenu">
                                    @for (loc of pref_locations(); track loc) {
                                        <button
                                            mat-menu-item
                                            (click)="
                                                saveSetting(
                                                    'work_location',
                                                    loc.id
                                                )
                                            "
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl">{{
                                                    loc.icon
                                                }}</icon>
                                                <div class="pr-8">
                                                    {{ loc.name | translate }}
                                                </div>
                                            </div>
                                        </button>
                                    }
                                </mat-menu>
                                <div class="px-2 text-xs opacity-60">
                                    {{
                                        timeFrom(active_block().start_time)
                                            | date: 'shortTime'
                                    }}
                                    &ndash;
                                    {{
                                        timeFrom(active_block().end_time)
                                            | date: 'shortTime'
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            @if (regions()?.length) {
                <div customTooltip [content]="region_select" class="relative">
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>layers</icon>
                            </div>
                            <div class="w-px flex-1 truncate">
                                {{ region()?.display_name || region()?.name }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            @if (!disable_building_select() && !use_region()) {
                <div customTooltip [content]="building_select" class="relative">
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>business</icon>
                            </div>
                            <div class="w-px flex-1 truncate">
                                {{
                                    building()?.display_name || building()?.name
                                }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            @if (features().includes('help')) {
                <div customTooltip [content]="help_tooltip">
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>help</icon>
                            </div>
                            <div class="flex-1">
                                {{ 'COMMON.CONTROLS_HELP' | translate }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            @if (features().includes('wfh')) {
                <div customTooltip [content]="work_location_tooltip">
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>share_location</icon>
                            </div>
                            <div class="flex-1">
                                {{ 'COMMON.WORK_LOCATION' | translate }}
                            </div>
                            <icon class="text-2xl opacity-60"
                                >chevron_right</icon
                            >
                        </div>
                    </button>
                </div>
            }
            @if (accessibility()) {
                <div
                    customTooltip
                    [content]="accessibility_tooltip"
                    [class.border-b!]="!locales().length || !desk_height()"
                >
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>mode_night</icon>
                            </div>
                            <div class="flex-1">
                                {{
                                    'COMMON.CONTROLS_ACCESSIBILITY' | translate
                                }}
                            </div>
                            <icon class="text-2xl opacity-60"
                                >chevron_right</icon
                            >
                        </div>
                    </button>
                </div>
            }
            @if (desk_height()) {
                <div
                    customTooltip
                    [content]="desk_height_tooltip"
                    [class.border-b!]="!locales().length"
                >
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>desk</icon>
                            </div>
                            <div class="flex-1">
                                {{ 'COMMON.CONTROLS_DESKS' | translate }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            <ng-template #desk_height_tooltip>
                <desk-height-presets></desk-height-presets>
            </ng-template>

            @if (features().includes('parking-controls')) {
                <div
                    customTooltip
                    [content]="parking_tooltip"
                    [class.border-b!]="!locales().length"
                >
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>parking_sign</icon>
                            </div>
                            <div class="flex-1">
                                {{ 'COMMON.CONTROLS_PARKING' | translate }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            @if (locales().length > 1) {
                <div
                    customTooltip
                    [content]="language_tooltip"
                    class="border-b!"
                >
                    <button btn matRipple class="clear h-14 w-full text-left">
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                            >
                                <icon>language</icon>
                            </div>
                            <div
                                class="flex flex-1 items-center justify-between space-x-4"
                            >
                                <div>
                                    <div>
                                        {{ 'COMMON.LANGUAGE' | translate }}
                                    </div>
                                    @if (
                                        ('COMMON.LANGUAGE' | translate) !==
                                        'Language'
                                    ) {
                                        <div class="text-xs opacity-30">
                                            Language
                                        </div>
                                    }
                                </div>
                                <div
                                    class="bg-base-200 max-w-24 truncate rounded-sm px-2 py-1 text-sm"
                                    [matTooltip]="active_locale | translate"
                                >
                                    {{ active_locale | translate }}
                                </div>
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }

            @if (features().includes('support-ticket')) {
                <button
                    btn
                    matRipple
                    class="clear h-14 w-full text-left"
                    (click)="newSupportTicket()"
                >
                    <div class="flex w-full items-center space-x-2">
                        <div
                            class="bg-base-200 flex h-8 w-8 items-center justify-center rounded-full"
                        >
                            <icon>support_agent</icon>
                        </div>
                        <div class="flex-1">
                            {{ 'COMMON.CONTROLS_SUPPORT' | translate }}
                        </div>
                    </div>
                </button>
            }
            <div class="flex flex-col items-center p-4">
                <div class="mb-4 flex items-center justify-center space-x-2">
                    <button btn matRipple class="inverse" (click)="logout()">
                        {{ 'COMMON.CONTROLS_SIGN_OUT' | translate }}
                    </button>
                    @if (has_new_version) {
                        <button btn matRipple (click)="reloadPage()">
                            {{ 'COMMON.CONTROLS_NEW_VERSION' | translate }}
                        </button>
                    }
                </div>
                <div class="w-full text-xs opacity-60">
                    <ng-container>
                        {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    </ng-container>
                    @if (show_changelog()) {
                        <button
                            class="m-0 border-none bg-none p-0 text-xs underline"
                            [disabled]="!changelog_available()"
                            (click)="viewChangelog()"
                        >
                            {{ version.hash }}
                        </button>
                    } @else {
                        <span>{{ version.hash }}</span>
                    }
                </div>
                <div class="w-full text-xs opacity-60">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatDialogModule,
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        CustomTooltipComponent,
        MatTooltipModule,
        UserAvatarComponent,
        MatMenuModule,
        DeskHeightPresetsComponent,
    ],
})
export class UserControlsComponent implements OnInit {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _changelog = inject(ChangelogService);
    private _locale = inject(LocaleService);

    public readonly building = this._org.active_building;
    public readonly region = this._org.active_region;
    public readonly regions = this._org.region_list;
    public readonly sidebar = input(false);
    public readonly accessibility = settingSignal(
        'allow_accessibility_changes',
        true,
    );
    public readonly show_changelog = settingSignal('show_changelog', true);
    public readonly changelog_available = this._changelog.available;
    public readonly viewChangelog = () => this._changelog.view();

    public readonly region_select = RegionSelectComponent;
    public readonly building_select = BuildingSelectComponent;
    public readonly help_tooltip = HelpTooltipComponent;
    public readonly accessibility_tooltip = AccessibilityTooltipComponent;
    public readonly language_tooltip = LanguageSelectComponent;
    public readonly work_location_tooltip = WorkLocationTooltipComponent;
    public readonly parking_tooltip = UserParkingTooltipComponent;
    public readonly features = settingSignal('features', []);
    private readonly _locales = this._settings.signal('locales', []);
    private readonly _desk_height = this._settings.signal(
        'desks.height_enabled',
        false,
    );
    private readonly _use_region = this._settings.signal('use_region', false);
    private readonly _disable_building_select = this._settings.signal(
        'disable_building_select',
        false,
    );
    public readonly pref_locations = signal<
        { id: string; name: string; icon: string }[]
    >([]);
    public readonly work_prefs = signal<WorktimePreference[]>([]);
    public readonly overrides = signal<Record<string, WorktimePreference>>({});

    public readonly active_block = computed(() => {
        const date = format(new Date(), 'yyyy-MM-dd');
        const day = new Date().getDay();
        const pref = this.overrides()[date]
            ? this.overrides()[date]
            : this.work_prefs().find((pref) => pref.day_of_week === day);
        return pref?.blocks?.find(
            (_) =>
                this.now >= this.timeFrom(_.start_time) &&
                this.now < this.timeFrom(_.end_time),
        );
    });

    public readonly active_index = computed(() => {
        const date = format(new Date(), 'yyyy-MM-dd');
        const day = new Date().getDay();
        const pref = this.overrides()[date]
            ? this.overrides()[date]
            : this.work_prefs().find((pref) => pref.day_of_week === day);
        return pref?.blocks?.findIndex(
            (_) =>
                this.now >= this.timeFrom(_.start_time) &&
                this.now < this.timeFrom(_.end_time),
        );
    });

    public location_icon(time: number) {
        const user = currentUser();
        return user.location_icon(time + 1 * 60 * 1000);
    }

    public location(time: number) {
        const user = currentUser();
        return user.location_name_time(time + 1 * 60 * 1000);
    }

    public timeFrom(hours: number) {
        return startOfMinute(
            set(new Date(), {
                hours: Math.floor(hours),
                minutes: (hours * 60) % 60,
                seconds: 0,
                milliseconds: 0,
            }),
        ).getTime();
    }

    public get user() {
        return currentUser();
    }

    public get groups() {
        return this.user?.groups?.join('\n') || '';
    }

    public get version() {
        return VERSION;
    }

    public get active_locale(): string {
        const locale_list = this.locales();
        const locale = this._locale.locale;
        for (const item of locale_list) {
            if (item.id === locale) return item.name;
        }
        return 'LANGUAGE.ENGLISH';
    }

    public get now() {
        return startOfMinute(Date.now()).getTime();
    }

    public readonly locales = this._locales;
    public readonly desk_height = this._desk_height;
    public readonly use_region = this._use_region;
    public readonly disable_building_select = this._disable_building_select;

    public get has_new_version() {
        return hasNewVersion();
    }

    public ngOnInit() {
        const user = currentUser();
        this.work_prefs.set(user?.work_preferences || []);
        this.overrides.set(user?.work_overrides || {});
        this.pref_locations.set([
            { id: 'wfo', name: i18n('COMMON.WORK_OFFICE'), icon: 'business' },
            { id: 'wfh', name: i18n('COMMON.WORK_HOME'), icon: 'home' },
            { id: 'aol', name: i18n('COMMON.WORK_LEAVE'), icon: 'event_busy' },
            { id: 'sick', name: i18n('COMMON.WORK_SICK'), icon: 'sick' },
        ]);
    }

    public logout() {
        logout();
    }

    public reloadPage() {
        location.reload();
    }

    public newSupportTicket() {
        if (this._settings.get('app.external_support_url')) {
            window.open(
                this._settings.get('app.external_support_url'),
                '_blank',
            );
        } else {
            this._dialog.open(SupportTicketModalComponent);
        }
    }

    public openWfhModal() {
        this._dialog.open(WFHSettingsModalComponent);
    }

    public saveSetting(name: string, value: any) {
        this._settings.saveUserSetting(name, value);
    }

    public formatLabel(value: number) {
        return `${value.toFixed(1)}cm`;
    }
}
