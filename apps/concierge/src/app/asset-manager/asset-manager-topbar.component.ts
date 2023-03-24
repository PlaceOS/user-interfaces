import { Component, Input } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-manager-topbar',
    template: `
        <div
            class="w-full px-4 py-2 bg-white dark:bg-neutral-700 flex items-center space-x-4"
        >
            <a
                btn
                matRipple
                class="secondary"
                [routerLink]="['/asset-manager', 'manage', 'details']"
                (click)="clearForm()"
            >
                Add Asset
            </a>
            <mat-button-toggle-group
                [ngModel]="(options | async)?.view"
                (ngModelChange)="setOptions({ view: $event })"
                *ngIf="show_actions"
            >
                <mat-button-toggle value="grid">
                    <div
                        class="flex items-center justify-center h-10 w-6 text-xl"
                    >
                        <app-icon>view_module</app-icon>
                    </div>
                </mat-button-toggle>
                <mat-button-toggle value="list">
                    <div
                        class="flex items-center justify-center h-10 w-6 text-xl"
                    >
                        <app-icon>view_list</app-icon>
                    </div>
                </mat-button-toggle>
            </mat-button-toggle-group>
            <!-- <button btn matRipple class="clear" *ngIf="show_actions">
                <div class="flex items-center">
                    <div class="pl-2">Sort By</div>
                    <app-icon class="text-2xl">arrow_drop_down</app-icon>
                </div>
            </button> -->
            <div class="flex-1"></div>
            <mat-form-field appearance="outline" class="h-[3.25rem]">
                <app-icon matPrefix class="text-2xl relative top-1 -left-1"
                    >search</app-icon
                >
                <input
                    matInput
                    [ngModel]="(options | async)?.search"
                    (ngModelChange)="setOptions({ search: $event })"
                    placeholder="Search for an asset or request"
                />
            </mat-form-field>
        </div>
    `,
    styles: [``],
})
export class AssetManagerTopbarComponent {
    @Input() public show_actions = true;

    public readonly options = this._state.options;

    public readonly setOptions = (o) => this._state.setOptions(o);
    public readonly clearForm = () => this._state.clearActiveAsset();

    constructor(private _state: AssetManagerStateService) {}
}
