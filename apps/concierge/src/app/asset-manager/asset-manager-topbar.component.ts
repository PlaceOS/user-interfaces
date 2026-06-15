import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import {
    AsyncHandler,
    nextValueFrom,
    notifySuccess,
    OrganisationService,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import {
    AvailableRoomsStateModalComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    AssetManagerStateService,
    AssetOptions,
} from './asset-manager-state.service';

@Component({
    selector: 'asset-manager-topbar',
    template: `
        <div
            class="bg-base-100 flex w-full items-center space-x-2 px-8 pt-4 pb-2"
        >
            <h2 class="text-2xl font-medium">
                {{
                    (active() !== 'items' && active() !== 'purchase-orders'
                        ? 'APP.CONCIERGE.ASSETS_HEADER'
                        : 'APP.CONCIERGE.ASSETS_MANAGE_HEADER'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <mat-form-field appearance="outline" class="no-subscript">
                <icon matPrefix class="relative top-1 -left-1 text-2xl">
                    search
                </icon>
                <input
                    matInput
                    [ngModel]="options().search"
                    (ngModelChange)="setOptions({ search: $event })"
                    [placeholder]="
                        (active() === 'items'
                            ? 'APP.CONCIERGE.ASSETS_ITEM_SEARCH'
                            : active() === 'purchase-orders'
                              ? 'APP.CONCIERGE.ASSETS_ITEM_SEARCH'
                              : 'APP.CONCIERGE.ASSETS_REQUESTS_SEARCH'
                        ) | translate
                    "
                />
            </mat-form-field>
            @if (active() === 'items') {
                <a
                    btn
                    matRipple
                    class="w-40"
                    [routerLink]="[base_route, 'manage', 'group']"
                >
                    {{ 'APP.CONCIERGE.ASSETS_ITEM_ADD' | translate }}
                </a>
            }
            @if (active() === 'purchase-orders') {
                <a
                    btn
                    matRipple
                    class="w-48"
                    [routerLink]="[base_route, 'manage', 'purchase-order']"
                >
                    {{ 'APP.CONCIERGE.ASSETS_PURCHASE_ADD' | translate }}
                </a>
            }
        </div>
        @if (active() === 'items') {
            <div class="mb-2 flex items-center space-x-2 px-8">
                <div
                    class="border-secondary flex items-center rounded-sm border"
                >
                    <button
                        icon
                        matRipple
                        class="h-12 w-14 rounded-l rounded-r-none"
                        [class.bg-secondary]="options().view === 'grid'"
                        [class.text-secondary-content]="
                            options().view === 'grid'
                        "
                        (click)="setOptions({ view: 'grid' })"
                        [matTooltip]="'COMMON.VIEW_AS_GRID' | translate"
                    >
                        <icon class="text-2xl">view_module</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="h-12 w-14 rounded-l-none rounded-r"
                        [class.bg-secondary]="options().view === 'list'"
                        [class.text-secondary-content]="
                            options().view === 'list'
                        "
                        (click)="setOptions({ view: 'list' })"
                        [matTooltip]="'COMMON.VIEW_AS_LIST' | translate"
                    >
                        <icon class="text-2xl">view_list</icon>
                    </button>
                </div>
                <div class="flex-1"></div>
                <button
                    icon
                    matRipple
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    [matTooltip]="
                        'APP.CONCIERGE.ASSETS_MANAGE_CONFIG' | translate
                    "
                    (click)="editConfig()"
                >
                    <icon>menu_book</icon>
                </button>
                <button
                    icon
                    matRipple
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    [matTooltip]="
                        'APP.CONCIERGE.ASSETS_MANAGE_BOOKING_RULES' | translate
                    "
                    (click)="setRoomAvailability()"
                >
                    <icon>event_available</icon>
                </button>
                @if (active() === 'items') {
                    <button
                        icon
                        matRipple
                        class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                        [matTooltip]="
                            'APP.CONCIERGE.ASSETS_MANAGE_CATEGORIES' | translate
                        "
                        (click)="manageCategories()"
                    >
                        <icon>list_alt</icon>
                    </button>
                }
            </div>
        }
        @if (use_region() && buildings().length) {
            <div class="flex items-center space-x-2 px-4 pb-2">
                <mat-form-field appearance="outline" class="no-subscript w-48">
                    <mat-select
                        [ngModel]="building()?.id"
                        (ngModelChange)="setBuilding($event)"
                        [placeholder]="'COMMON.BUILDINGS_ALL' | translate"
                    >
                        @for (bld of buildings(); track bld) {
                            <mat-option [value]="bld.id">
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
        }
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        MatFormFieldModule,
        TranslatePipe,
        FormsModule,
        MatSelectModule,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        RouterModule,
        MatInputModule,
    ],
})
export class AssetManagerTopbarComponent extends AsyncHandler {
    private _state = inject(AssetManagerStateService);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public readonly active = input('');

    public readonly options = toSignal(this._state.options, {
        initialValue: { view: 'grid' } as AssetOptions,
    });
    public readonly building = this._org.active_building;
    public readonly buildings = this._org.active_buildings;
    public readonly use_region = settingSignal('use_region');

    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly manageCategories = () => this._state.manageCategories();
    public readonly editConfig = () => this._state.editConfig();

    public get base_route() {
        return this._state.base_route;
    }

    public setBuilding(id: string) {
        const bld = this._org.buildings.find((_) => _.id === id);
        if (!bld) return;
        this._org.building = bld;
    }

    public async setRoomAvailability() {
        const ref = this._dialog.open(AvailableRoomsStateModalComponent, {
            data: {
                type: 'Assets',
                disabled_rooms: await nextValueFrom(this._state.availability),
            },
        });
        this.subscription(
            'room-availability',
            ref.componentInstance.change.subscribe(async (list) => {
                await this._state
                    .saveSettings({ disabled_rooms: list })
                    .catch();
                ref.componentInstance.loading.set(false);
                notifySuccess('Room availability settings saved');
            }),
        );
    }
}
