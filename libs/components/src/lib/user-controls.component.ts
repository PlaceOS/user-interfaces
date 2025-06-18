import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { logout } from '@placeos/ts-client';
import { AccessibilityTooltipComponent } from './accessibility-tooltip.component';
import { BuildingSelectComponent } from './building-select.component';
import { ChangelogModalComponent } from './changelog-modal.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { LanguageSelectComponent } from './language-tooltip.component';
import { RegionSelectComponent } from './region-select.component';
import { WorkLocationTooltipComponent } from './work-location-tooltip.component';

import { WorktimePreference } from '@placeos/users';
import { format, set, startOfMinute } from 'date-fns';
import { hasNewVersion } from 'libs/common/src/lib/application';
import { i18n, LocaleService } from 'libs/common/src/lib/locale.service';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { currentUser } from 'libs/common/src/lib/user-state';
import { VERSION } from 'libs/common/src/lib/version';
import { SupportTicketModalComponent } from 'libs/form-fields/src/lib/support-ticket-modal.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { WFHSettingsModalComponent } from 'libs/users/src/lib/wfh-settings-modal.component';

export interface AppLocale {
    id: string;
    name: string;
    flag: string;
}

@Component({
    selector: 'user-controls',
    template: `
        <div
            class="relative mt-1 flex flex-col divide-y divide-base-200 rounded bg-base-100 shadow"
        >
            <div avatar class="flex w-[18rem] flex-col items-center p-2">
                <a-user-avatar
                    class="text-2xl"
                    [user]="user"
                    [matTooltip]="groups"
                ></a-user-avatar>
                <div class="">{{ user?.name }}</div>
                <div class="truncate text-xs opacity-60">{{ user?.email }}</div>
            </div>
            @if (features.includes('wfh') && active_block) {
                <div class="w-full rounded border border-base-200 py-2">
                    <h3 class="w-full px-4 pb-2 text-sm font-medium">
                        Today's Work Location
                    </h3>
                    <div class="w-full">
                        <div class="relative flex items-center px-4 py-2">
                            <div
                                class="z-20 flex h-10 w-10 items-center justify-center rounded-full bg-info text-info-content"
                            >
                                <icon class="text-2xl">{{
                                    location_icon(
                                        timeFrom(active_block.start_time)
                                    )
                                }}</icon>
                            </div>
                            <div class="ml-2 flex-1">
                                {{ locations | json }}
                                <button
                                    matRipple
                                    class="flex items-center space-x-2 rounded px-2 py-1 font-medium hover:bg-base-200"
                                    [matMenuTriggerFor]="work_menu"
                                >
                                    <div>
                                        {{
                                            location(
                                                timeFrom(
                                                    active_block.start_time
                                                )
                                            )
                                        }}
                                    </div>
                                    <icon>expand_more</icon>
                                </button>
                                <mat-menu #work_menu="matMenu">
                                    @for (loc of pref_locations; track loc) {
                                        <button
                                            mat-menu-item
                                            (click)="
                                                setLocation(
                                                    active_index,
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
                                        timeFrom(active_block.start_time)
                                            | date: 'shortTime'
                                    }}
                                    &ndash;
                                    {{
                                        timeFrom(active_block.end_time)
                                            | date: 'shortTime'
                                    }}
                                </div>
                            </div>
                            @if (i > 0) {
                                <div
                                    class="absolute -top-2 left-7 h-4 w-0 -translate-x-px border-l-2 border-dashed border-base-200"
                                ></div>
                            }
                        </div>
                    </div>
                </div>
            }
            @if ((regions | async).length) {
                <div customTooltip [content]="region_select" class="relative">
                    <button
                        btn
                        matRipple
                        class="clear h-[3.5rem] w-full text-left"
                    >
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                            >
                                <icon>layers</icon>
                            </div>
                            <div class="w-px flex-1 truncate">
                                {{
                                    (region | async)?.display_name ||
                                        (region | async)?.name
                                }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            @if (!disable_building_select && !use_region) {
                <div customTooltip [content]="building_select" class="relative">
                    <button
                        btn
                        matRipple
                        class="clear h-[3.5rem] w-full text-left"
                    >
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                            >
                                <icon>business</icon>
                            </div>
                            <div class="w-px flex-1 truncate">
                                {{
                                    (building | async)?.display_name ||
                                        (building | async)?.name
                                }}
                            </div>
                            <icon class="text-2xl opacity-60">
                                chevron_right
                            </icon>
                        </div>
                    </button>
                </div>
            }
            @if (features.includes('help')) {
                <div customTooltip [content]="help_tooltip">
                    <button
                        btn
                        matRipple
                        class="clear h-[3.5rem] w-full text-left"
                    >
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
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
            @if (features.includes('wfh')) {
                <div customTooltip [content]="work_location_tooltip">
                    <button
                        btn
                        matRipple
                        class="clear h-[3.5rem] w-full text-left"
                    >
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                            >
                                <icon>share_location</icon>
                            </div>
                            <div class="flex-1">
                                {{
                                    'COMMON.CONTROLS_WORK_LOCATION' | translate
                                }}
                            </div>
                            <icon class="text-2xl opacity-60"
                                >chevron_right</icon
                            >
                        </div>
                    </button>
                </div>
            }
            <div
                customTooltip
                [content]="accessibility_tooltip"
                [class.!border-b]="!locales?.length || !desk_height"
            >
                <button btn matRipple class="clear h-[3.5rem] w-full text-left">
                    <div class="flex w-full items-center space-x-2">
                        <div
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
                        >
                            <icon>mode_night</icon>
                        </div>
                        <div class="flex-1">
                            {{ 'COMMON.CONTROLS_ACCESSIBILITY' | translate }}
                        </div>
                        <icon class="text-2xl opacity-60">chevron_right</icon>
                    </div>
                </button>
            </div>
            @if (desk_height) {
                <div
                    customTooltip
                    [content]="desk_height_tooltip"
                    [class.!border-b]="!locales?.length"
                >
                    <button
                        btn
                        matRipple
                        class="clear h-[3.5rem] w-full text-left"
                    >
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
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
            @if (locales?.length > 1) {
                <div
                    customTooltip
                    [content]="language_tooltip"
                    class="!border-b"
                >
                    <button
                        btn
                        matRipple
                        class="clear h-[3.5rem] w-full text-left"
                    >
                        <div class="flex w-full items-center space-x-2">
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
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
                                    class="max-w-24 truncate rounded bg-base-200 px-2 py-1 text-sm"
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

            @if (features.includes('support-ticket')) {
                <button
                    btn
                    matRipple
                    class="clear h-[3.5rem] w-full text-left"
                    (click)="newSupportTicket()"
                >
                    <div class="flex w-full items-center space-x-2">
                        <div
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-base-200"
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
                    <button
                        class="m-0 border-none bg-none p-0 text-xs underline"
                        (click)="viewChangelog()"
                    >
                        {{ version.hash }}
                    </button>
                </div>
                <div class="w-full text-xs opacity-60">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class UserControlsComponent implements OnInit {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _locale = inject(LocaleService);

    public readonly building = this._org.active_building;
    public readonly region = this._org.active_region;
    public readonly regions = this._org.region_list;

    public readonly region_select = RegionSelectComponent;
    public readonly building_select = BuildingSelectComponent;
    public readonly help_tooltip = HelpTooltipComponent;
    public readonly accessibility_tooltip = AccessibilityTooltipComponent;
    public readonly language_tooltip = LanguageSelectComponent;
    public readonly work_location_tooltip = WorkLocationTooltipComponent;
    public pref_locations = [];
    public work_prefs: WorktimePreference[] = [];
    public overrides: Record<string, WorktimePreference> = {};

    public get active_block() {
        const date = format(new Date(), 'yyyy-MM-dd');
        const day = new Date().getDay();
        const pref = this.overrides[date]
            ? this.overrides[date]
            : this.work_prefs.find((pref) => pref.day_of_week === day);
        return pref?.blocks?.find(
            (_) =>
                this.now >= this.timeFrom(_.start_time) &&
                this.now < this.timeFrom(_.end_time),
        );
    }

    public get active_index() {
        const date = format(new Date(), 'yyyy-MM-dd');
        const day = new Date().getDay();
        const pref = this.overrides[date]
            ? this.overrides[date]
            : this.work_prefs.find((pref) => pref.day_of_week === day);
        return pref?.blocks?.findIndex(
            (_) =>
                this.now >= this.timeFrom(_.start_time) &&
                this.now < this.timeFrom(_.end_time),
        );
    }

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
        return this.user.groups.join('\n');
    }

    public get version() {
        return VERSION;
    }

    public get features(): string[] {
        return this._settings.get('app.features') || [];
    }

    public get active_locale(): string {
        const locale_list = this.locales;
        const locale = this._locale.locale;
        for (const item of locale_list) {
            if (item.id === locale) return item.name;
        }
        return 'LANGUAGE.ENGLISH';
    }

    public get now() {
        return startOfMinute(Date.now()).getTime();
    }

    public get locales(): { id: string; name: string }[] {
        return this._settings.get('app.locales') || [];
    }

    public get desk_height() {
        return this._settings.get('app.desks.height_enabled');
    }

    public get use_region(): boolean {
        return this._settings.get('app.use_region');
    }

    public get disable_building_select() {
        return this._settings.get('app.disable_building_select');
    }

    public get has_new_version() {
        return hasNewVersion();
    }

    public ngOnInit() {
        const user = currentUser();
        this.work_prefs = user.work_preferences;
        this.overrides = user.work_overrides;
        this.pref_locations = [
            { id: 'wfo', name: i18n('COMMON.WORK_OFFICE'), icon: 'business' },
            { id: 'wfh', name: i18n('COMMON.WORK_HOME'), icon: 'home' },
            { id: 'aol', name: i18n('COMMON.WORK_LEAVE'), icon: 'event_busy' },
        ];
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

    public async viewChangelog() {
        const changelog = await (
            await fetch(
                'https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md',
            )
        ).text();
        this._dialog.open(ChangelogModalComponent, { data: { changelog } });
    }

    public saveSetting(name: string, value: any) {
        this._settings.saveUserSetting(name, value);
    }

    public formatLabel(value: number) {
        return `${value.toFixed(1)}cm`;
    }
}
