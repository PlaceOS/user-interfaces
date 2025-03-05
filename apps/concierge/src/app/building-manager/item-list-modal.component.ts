import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SettingsService, notifyError } from '@placeos/common';
import { showMetadata, updateMetadata } from '@placeos/ts-client';

@Component({
    selector: 'item-list-modal',
    template: `
        <header>
            <h2>{{ 'APP.CONCIERGE.SUPPORT_TYPES_HEADER' | translate }}</h2>
            <button icon matRipple mat-dialog-close="">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="h-[50vh] w-[36rem] space-y-2 overflow-auto p-2">
            <button
                btn
                matRipple
                class="w-full"
                (click)="item_list.push({ name: '', email: '' })"
            >
                {{ 'APP.CONCIERGE.SUPPORT_TYPES_ADD' | translate }}
            </button>
            <div
                class="flex w-full items-center space-x-2"
                *ngFor="let item of item_list; let i = index; trackBy: identify"
            >
                <input
                    type="text"
                    class="flex-1 rounded border border-base-200 px-4 py-3"
                    [placeholder]="
                        'APP.CONCIERGE.SUPPORT_TYPES_NAME' | translate
                    "
                    [(ngModel)]="item_list[i].name"
                />
                <input
                    type="email"
                    class="flex-[2] rounded border border-base-200 px-4 py-3"
                    [placeholder]="
                        'APP.CONCIERGE.SUPPORT_TYPES_EMAIL' | translate
                    "
                    [(ngModel)]="item_list[i].email"
                />
                <button
                    icon
                    matRipple
                    [matTooltip]="
                        'APP.CONCIERGE.SUPPORT_TYPES_REMOVE' | translate
                    "
                    class="h-12 w-12 rounded border border-error text-error"
                    (click)="item_list.splice(i, 1)"
                >
                    <app-icon class="text-2xl">delete</app-icon>
                </button>
            </div>
        </main>
        <footer
            class="flex items-center justify-end border-t border-base-200 p-2"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
    `,
    styles: [``],
    standalone: false,
})
export class ItemListModalComponent implements OnInit {
    public item_list: { name: string; email: string }[] = [];
    public loading = false;

    public identify = (index: number, item: any) => index;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _bld_id: string,
        private _settings: SettingsService,
        private _dialog_ref: MatDialogRef<ItemListModalComponent>,
    ) {}

    public async ngOnInit() {
        const metadata_key =
            this._settings.get('app.workplace_metadata_key') || 'workplace_app';
        const metadata: any = await showMetadata(
            this._bld_id,
            metadata_key,
        ).toPromise();
        const items = metadata?.details?.support_issue_types || [];
        this.item_list = items;
    }

    public async save() {
        const metadata_key =
            this._settings.get('app.workplace_metadata_key') || 'workplace_app';
        const concierge_key =
            this._settings.get('app.concierge_metadata_key') || 'concierge_app';
        this.loading = true;
        const items = this.item_list.filter((_) => _);
        const metadata: any = await showMetadata(
            this._bld_id,
            metadata_key,
        ).toPromise();
        metadata.details.support_issue_types = items;
        let resp = await updateMetadata(this._bld_id, {
            name: metadata_key,
            details: metadata.details,
            description: metadata.description || '',
        })
            .toPromise()
            .catch((_) => {
                notifyError(`Failed to save issue types. ${_}`);
            });
        if (!resp) {
            this.loading = false;
            return;
        }
        const concierge_metadata: any = await showMetadata(
            this._bld_id,
            metadata_key,
        ).toPromise();
        concierge_metadata.details.support_issue_types = items;
        resp = await updateMetadata(this._bld_id, {
            name: concierge_key,
            details: concierge_metadata.details,
            description: concierge_metadata.description || '',
        })
            .toPromise()
            .catch((_) => {
                notifyError(`Failed to save issue types. ${_}`);
            });
        this.loading = false;
        if (resp) this._dialog_ref.close();
    }
}
