import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DialogEvent, SettingsService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { DateFieldComponent } from 'libs/form-fields/src/lib/date-field.component';
import { UserSearchFieldComponent } from 'libs/form-fields/src/lib/user-search-field.component';

import { Desk } from 'libs/organisation/src/lib/desk.class';
import { BuildingLevel } from 'libs/organisation/src/lib/level.class';
import { User } from 'libs/users/src/lib/user.class';

export interface DeskConfirmModalData {
    host: User;
    desks: Desk[];
    date: number;
    reason: string;
    level: BuildingLevel;
    can_set_date: boolean;
}

@Component({
    selector: 'desk-flow-confirm-modal-component',
    template: `
        <header>
            <h2>Confirm Booking</h2>
            <div class="flex-1"></div>
            @if (!loading) {
                <button icon mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main class="p-4">
                @if (can_set_host) {
                    <div host class="flex flex-col">
                        <label>{{ 'FORM.HOST' | translate }}</label>
                        <a-user-search-field
                            [(ngModel)]="host"
                            class="mb-4"
                        ></a-user-search-field>
                    </div>
                }
                <div date class="mb-4">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    @if (!can_set_date) {
                        <div>
                            {{ date | date: 'mediumDate' }}
                        </div>
                    }
                    @if (can_set_date) {
                        <a-date-field [(ngModel)]="date"></a-date-field>
                    }
                </div>
                @if (!hide_reason) {
                    <div reason class="mb-4 flex flex-col">
                        <label>Reason</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [(ngModel)]="reason"
                                placeholder="Reason"
                            />
                        </mat-form-field>
                    </div>
                }
                <p>
                    Your desk{{ desks.length === 1 ? '' : 's' }} will be
                    {{ desk_list }} on
                    {{ level?.display_name || level?.name }}
                </p>
            </main>
            <footer class="flex items-center justify-center p-2">
                <button btn matRipple (click)="confirm()">Confirm</button>
            </footer>
        } @else {
            <main load class="flex flex-col items-center justify-center p-12">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        }
    `,
    styles: [
        `
            main {
                width: 24rem;
                max-width: calc(100vw - 4.5rem);
            }
        `,
    ],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        DateFieldComponent,
        UserSearchFieldComponent,
        MatDialogModule,
        FormsModule,
    ],
})
export class DeskConfirmModalComponent {
    private _data = inject<DeskConfirmModalData>(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);

    public readonly event = output<DialogEvent>();

    public readonly desks = this._data.desks || [];

    public date = this._data.date;
    public host = this._data.host;

    public readonly can_set_date = this._data.can_set_date;

    public reason = this._data.reason;

    public readonly level = this._data.level;

    public loading: string;

    public get desk_list() {
        return this.desks.map((_) => _.name).join(', ');
    }

    public get hide_reason() {
        return !!this._settings.get('app.desks.hide_reason');
    }

    public get can_set_host() {
        return !!this._settings.get('app.desks.can_book_for_others');
    }

    public confirm() {
        this.loading = 'Requesting desk booking...';
        this.event.emit({ reason: 'done' });
    }
}
