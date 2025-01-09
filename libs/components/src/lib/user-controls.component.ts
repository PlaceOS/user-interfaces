import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ChangelogModalComponent } from './changelog-modal.component';
import { logout } from '@placeos/ts-client';
import { AccessibilityTooltipComponent } from './accessibility-tooltip.component';
import { BuildingSelectComponent } from './building-select.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { LanguageSelectComponent } from './language-tooltip.component';
import { RegionSelectComponent } from './region-select.component';
import { WorkLocationTooltipComponent } from './work-location-tooltip.component';

import { currentUser } from 'libs/common/src/lib/user-state';
import { LocaleService } from 'libs/common/src/lib/locale.service';
import { VERSION } from 'libs/common/src/lib/version';
import { hasNewVersion } from 'libs/common/src/lib/application';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { WFHSettingsModalComponent } from 'libs/users/src/lib/wfh-settings-modal.component';
import { SupportTicketModalComponent } from 'libs/form-fields/src/lib/support-ticket-modal.component';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

export interface AppLocale {
    id: string;
    name: string;
    flag: string;
}

@Component({
    selector: 'user-controls',
    template: `
        <div
            class="rounded bg-base-100 shadow mt-1 flex flex-col relative divide-y divide-base-200"
        >
            <div avatar class="flex flex-col items-center p-2 w-[18rem]">
                <a-user-avatar
                    class="text-2xl"
                    [user]="user"
                    [matTooltip]="groups"
                ></a-user-avatar>
                <div class="">{{ user?.name }}</div>
                <div class="text-xs opacity-60 truncate">{{ user?.email }}</div>
            </div>
            <div
                customTooltip
                *ngIf="(regions | async).length"
                [content]="region_select"
                class="relative"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div class="w-full flex items-center space-x-2">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200"
                        >
                            <app-icon>layers</app-icon>
                        </div>
                        <div class="flex-1 truncate w-px">
                            {{
                                (region | async)?.display_name ||
                                    (region | async)?.name
                            }}
                        </div>
                        <app-icon class="opacity-60 text-2xl">
                            chevron_right
                        </app-icon>
                    </div>
                </button>
            </div>
            <div
                customTooltip
                [content]="building_select"
                class="relative"
                *ngIf="!disable_building_select && !use_region"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div class="w-full flex items-center space-x-2">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200"
                        >
                            <app-icon>business</app-icon>
                        </div>
                        <div class="flex-1 truncate w-px">
                            {{
                                (building | async)?.display_name ||
                                    (building | async)?.name
                            }}
                        </div>
                        <app-icon class="opacity-60 text-2xl">
                            chevron_right
                        </app-icon>
                    </div>
                </button>
            </div>
            <div
                customTooltip
                [content]="help_tooltip"
                *ngIf="features.includes('help')"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div class="w-full flex items-center space-x-2">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200"
                        >
                            <app-icon>help</app-icon>
                        </div>
                        <div class="flex-1">
                            {{ 'COMMON.CONTROLS_HELP' | translate }}
                        </div>
                        <app-icon class="opacity-60 text-2xl">
                            chevron_right
                        </app-icon>
                    </div>
                </button>
            </div>
            <div
                *ngIf="features.includes('wfh')"
                customTooltip
                [content]="work_location_tooltip"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div class="w-full flex items-center space-x-2">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200"
                        >
                            <app-icon>share_location</app-icon>
                        </div>
                        <div class="flex-1">
                            {{ 'COMMON.CONTROLS_WORK_LOCATION' | translate }}
                        </div>
                        <app-icon class="opacity-60 text-2xl"
                            >chevron_right</app-icon
                        >
                    </div>
                </button>
            </div>
            <div
                customTooltip
                [content]="accessibility_tooltip"
                [class.!border-b]="!locales?.length || !desk_height"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div class="w-full flex items-center space-x-2">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200"
                        >
                            <app-icon>mode_night</app-icon>
                        </div>
                        <div class="flex-1">
                            {{ 'COMMON.CONTROLS_ACCESSIBILITY' | translate }}
                        </div>
                        <app-icon class="opacity-60 text-2xl"
                            >chevron_right</app-icon
                        >
                    </div>
                </button>
            </div>
            <div
                customTooltip
                [content]="desk_height_tooltip"
                [class.!border-b]="!locales?.length"
                *ngIf="desk_height"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div class="w-full flex items-center space-x-2">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200"
                        >
                            <app-icon>desk</app-icon>
                        </div>
                        <div class="flex-1">
                            {{ 'COMMON.CONTROLS_DESKS' | translate }}
                        </div>
                        <app-icon class="opacity-60 text-2xl">
                            chevron_right
                        </app-icon>
                    </div>
                </button>
            </div>
            <ng-template #desk_height_tooltip>
                <desk-height-presets></desk-height-presets>
            </ng-template>
            <div
                customTooltip
                [content]="language_tooltip"
                *ngIf="locales?.length > 1"
                class="!border-b"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div class="w-full flex items-center space-x-2">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200"
                        >
                            <app-icon>mode_night</app-icon>
                        </div>
                        <div
                            class="flex-1 flex items-center justify-between space-x-4"
                        >
                            <div>{{ 'COMMON.LANGUAGE' | translate }}</div>
                            <div
                                class="text-sm px-2 py-1 rounded bg-base-200 max-w-24 truncate"
                                [matTooltip]="active_locale | translate"
                            >
                                {{ active_locale | translate }}
                            </div>
                        </div>
                        <app-icon class="opacity-60 text-2xl">
                            chevron_right
                        </app-icon>
                    </div>
                </button>
            </div>

            <button
                btn
                matRipple
                class="clear w-full text-left h-[3.5rem]"
                *ngIf="features.includes('support-ticket')"
                (click)="newSupportTicket()"
            >
                <div class="w-full flex items-center space-x-2">
                    <div
                        class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200"
                    >
                        <app-icon>support_agent</app-icon>
                    </div>
                    <div class="flex-1">
                        {{ 'COMMON.CONTROLS_SUPPORT' | translate }}
                    </div>
                </div>
            </button>
            <div class="flex flex-col items-center p-4">
                <div class="flex items-center justify-center space-x-2 mb-4">
                    <button btn matRipple class="inverse" (click)="logout()">
                        {{ 'COMMON.CONTROLS_SIGN_OUT' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        *ngIf="has_new_version"
                        (click)="reloadPage()"
                    >
                        {{ 'COMMON.CONTROLS_NEW_VERSION' | translate }}
                    </button>
                </div>
                <div class="text-xs opacity-60 w-full">
                    <ng-container>
                        {{ 'COMMON.CONTROLS_VERSION' | translate }}:
                    </ng-container>
                    <button
                        class="underline p-0 m-0 bg-none border-none text-xs"
                        (click)="viewChangelog()"
                    >
                        {{ version.hash }}
                    </button>
                </div>
                <div class="text-xs opacity-60 w-full">
                    {{ version.time | date: 'longDate' }}
                    ({{ version.time | date: 'shortTime' }})
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class UserControlsComponent {
    public readonly building = this._org.active_building;
    public readonly region = this._org.active_region;
    public readonly regions = this._org.region_list;

    public readonly region_select = RegionSelectComponent;
    public readonly building_select = BuildingSelectComponent;
    public readonly help_tooltip = HelpTooltipComponent;
    public readonly accessibility_tooltip = AccessibilityTooltipComponent;
    public readonly language_tooltip = LanguageSelectComponent;
    public readonly work_location_tooltip = WorkLocationTooltipComponent;

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

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _locale: LocaleService,
    ) {}

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
