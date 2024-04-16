import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    currentUser,
    hasNewVersion,
    SettingsService,
    VERSION,
} from '@placeos/common';
import { ChangelogModalComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { logout } from '@placeos/ts-client';
import { WFHSettingsModalComponent } from 'libs/users/src/lib/wfh-settings-modal.component';
import { AccessibilityTooltipComponent } from './accessibility-tooltip.component';
import { BuildingSelectComponent } from './building-select.component';
import { HelpTooltipComponent } from './help-tooltip.component';
import { LanguageSelectComponent } from './language-tooltip.component';
import { RegionSelectComponent } from './region-select.component';
import { SupportTicketModalComponent } from 'libs/form-fields/src/lib/support-ticket-modal.component';
import { first } from 'rxjs/operators';

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
                        <div class="flex-1" i18n>Help & Support</div>
                        <app-icon class="opacity-60 text-2xl"
                            >chevron_right</app-icon
                        >
                    </div>
                </button>
            </div>
            <div *ngIf="features.includes('wfh')">
                <button
                    btn
                    matRipple
                    class="clear w-full text-left h-[3.5rem]"
                    (click)="openWfhModal()"
                >
                    <div class="w-full flex items-center space-x-2">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200"
                        >
                            <app-icon>share_location</app-icon>
                        </div>
                        <div class="flex-1" i18n>Work Location Settings</div>
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
                        <div class="flex-1" i18n>Display & Accessibility</div>
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
                        <div class="flex-1" i18n>Desk Settings</div>
                        <app-icon class="opacity-60 text-2xl"
                            >chevron_right</app-icon
                        >
                    </div>
                </button>
            </div>
            <ng-template #desk_height_tooltip>
                <div class="relative p-4 bg-base-100 rounded shadow w-64">
                    <div class="text-lg" i18n>Desk Height</div>
                    <div class="text-xs opacity-60 mb-4" i18n>
                        Set your desk height for the best experience
                    </div>
                    <div class="flex flex-col mt-2">
                        <label>Sitting Height</label>
                        <div class="flex items-center space-x-2">
                            <mat-slider
                                min="60"
                                max="80"
                                step="0.5"
                                discrete
                                class="flex-1"
                                [displayWith]="formatLabel"
                            >
                                <input
                                    matSliderThumb
                                    [(ngModel)]="desk_sitting_height"
                                    (ngModelChange)="
                                        saveSetting(
                                            'desk_sitting_height',
                                            $event
                                        )
                                    "
                                />
                            </mat-slider>
                            <div class="text-sm w-12 text-right">
                                {{ desk_sitting_height.toFixed(1) }}cm
                            </div>
                        </div>
                        <label>Standing Height</label>
                        <div class="flex items-center space-x-2  mr-2">
                            <mat-slider
                                min="90"
                                max="120"
                                step="0.5"
                                discrete
                                class="flex-1"
                                [displayWith]="formatLabel"
                            >
                                <input
                                    matSliderThumb
                                    [(ngModel)]="desk_standing_height"
                                    (ngModelChange)="
                                        saveSetting(
                                            'desk_standing_height',
                                            $event
                                        )
                                    "
                                />
                            </mat-slider>
                            <div class="text-sm w-12 text-right mr-2">
                                {{ desk_standing_height.toFixed(1) }}cm
                            </div>
                        </div>
                    </div>
                </div>
            </ng-template>
            <div
                customTooltip
                [content]="language_tooltip"
                *ngIf="locales?.length"
                class="!border-b"
            >
                <button btn matRipple class="clear w-full text-left h-[3.5rem]">
                    <div class="w-full flex items-center space-x-2">
                        <div
                            class="flex items-center justify-center rounded-full w-8 h-8 bg-base-200"
                        >
                            <app-icon>mode_night</app-icon>
                        </div>
                        <div class="flex-1" i18n>
                            {{ 'COMMON.LANGUAGE_LABEL' | translate }}:
                            {{ 'COMMON.LANGUAGE' | translate }}
                        </div>
                        <app-icon class="opacity-60 text-2xl"
                            >chevron_right</app-icon
                        >
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
                    <div class="flex-1" i18n>Raise a support ticket</div>
                </div>
            </button>
            <div class="flex flex-col items-center p-4">
                <div class="flex items-center justify-center space-x-2 mb-4">
                    <button
                        btn
                        matRipple
                        i18n
                        class="inverse"
                        (click)="logout()"
                    >
                        Sign Out
                    </button>
                    <button
                        btn
                        matRipple
                        *ngIf="has_new_version"
                        (click)="reloadPage()"
                    >
                        New Version
                    </button>
                </div>
                <div class="text-xs opacity-60 w-full">
                    <ng-container i18n>Version: </ng-container>
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

    public desk_standing_height = 101;
    public desk_sitting_height = 71;

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

    public get locales(): [] {
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
        private _dialog: MatDialog
    ) {}

    public async ngOnInit() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        this.desk_sitting_height =
            this._settings.get('desk_sitting_height') || 71;
        this.desk_standing_height =
            this._settings.get('desk_standing_height') || 101;
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
                '_blank'
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
                'https://raw.githubusercontent.com/PlaceOS/user-interfaces/develop/CHANGELOG.md'
            )
        ).text();
        this._dialog.open(ChangelogModalComponent, { data: { changelog } });
    }

    public saveSetting(name: string, value: any) {
        console.log('Save setting', name, value);
        this._settings.saveUserSetting(name, value);
    }

    public formatLabel(value: number) {
        return `${value.toFixed(1)}cm`;
    }
}
