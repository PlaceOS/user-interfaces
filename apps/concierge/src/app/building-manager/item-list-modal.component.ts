import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SettingsService, notify, notifyError } from '@placeos/common';
import { Building } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';

@Component({
    selector: 'item-list-modal',
    template: `
        <header>
            <h2>Support Request Issue Types</h2>
            <button icon matRipple mat-dialog-close="">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="w-[36rem] overflow-auto h-[50vh] p-2 space-y-2">
            <button
                btn
                matRipple
                class="w-full"
                (click)="item_list.push({ name: '', email: '' })"
            >
                Add Item
            </button>
            <div
                class="w-full flex items-center space-x-2"
                *ngFor="let item of item_list; let i = index; trackBy: identify"
            >
                <input
                    type="text"
                    class="flex-1 border border-base-200 px-4 py-3 rounded"
                    placeholder="Issue Name"
                    [(ngModel)]="item_list[i].name"
                />
                <input
                    type="email"
                    class="flex-[2] border border-base-200 px-4 py-3 rounded"
                    placeholder="Issue Email"
                    [(ngModel)]="item_list[i].email"
                />
                <button
                    icon
                    matRipple
                    matTooltip="Remove Item"
                    (click)="item_list.splice(i, 1)"
                >
                    <app-icon>close</app-icon>
                </button>
            </div>
        </main>
        <footer
            class="flex items-center justify-end p-2 border-t border-base-200"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
    `,
    styles: [``],
})
export class ItemListModalComponent {
    public item_list: { name: string; email: string }[] = [];
    public loading: boolean = false;

    public identify = (index: number, item: any) => index;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _bld_id: string,
        private _settings: SettingsService,
        private _dialog_ref: MatDialogRef<ItemListModalComponent>
    ) {}

    public async ngOnInit() {
        const metadata_key =
            this._settings.get('app.workplace_metadata_key') || 'workplace_app';
        const metadata: any = await showMetadata(
            this._bld_id,
            metadata_key
        ).toPromise();
        const items = metadata?.details?.support_issue_types || [];
        this.item_list = items;
    }

    public async save() {
        const metadata_key =
            this._settings.get('app.workplace_metadata_key') || 'workplace_app';
        this.loading = true;
        const items = this.item_list.filter((_) => _);
        const metadata: any = await showMetadata(
            this._bld_id,
            metadata_key
        ).toPromise();
        metadata.details.support_issue_types = items;
        const resp = await updateMetadata(this._bld_id, {
            name: metadata_key,
            details: metadata.details,
            description: metadata.description || '',
        })
            .toPromise()
            .catch((_) => {
                notifyError(`Failed to save issue types. ${_}`);
            });
        this.loading = false;
        if (resp) this._dialog_ref.close();
    }
}
