import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SettingsService, notifyError } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { showMetadata, updateMetadata } from '@placeos/ts-client';

@Component({
    selector: 'item-list-modal',
    template: `
        <header>
            <h2>{{ 'APP.CONCIERGE.SUPPORT_TYPES_HEADER' | translate }}</h2>
            <button icon matRipple mat-dialog-close="">
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[50vh] w-xl space-y-2 overflow-auto p-2">
            <button btn matRipple class="w-full" (click)="addItem()">
                {{ 'APP.CONCIERGE.SUPPORT_TYPES_ADD' | translate }}
            </button>
            @for (
                item of item_list();
                track identify(i, item);
                let i = $index
            ) {
                <div class="flex w-full items-center space-x-2">
                    <input
                        type="text"
                        class="border-base-200 flex-1 rounded-sm border px-4 py-3"
                        [placeholder]="
                            'APP.CONCIERGE.SUPPORT_TYPES_NAME' | translate
                        "
                        [ngModel]="item.name"
                        (ngModelChange)="updateItem(i, 'name', $event)"
                    />
                    <input
                        type="email"
                        class="border-base-200 flex-2 rounded-sm border px-4 py-3"
                        [placeholder]="
                            'APP.CONCIERGE.SUPPORT_TYPES_EMAIL' | translate
                        "
                        [ngModel]="item.email"
                        (ngModelChange)="updateItem(i, 'email', $event)"
                    />
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.SUPPORT_TYPES_REMOVE' | translate
                        "
                        class="border-error text-error h-12 w-12 rounded-sm border"
                        (click)="removeItem(i)"
                    >
                        <icon class="text-2xl">delete</icon>
                    </button>
                </div>
            }
        </main>
        <footer
            class="border-base-200 flex items-center justify-end border-t p-2"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        MatRippleModule,
        IconComponent,
        FormsModule,
        TranslatePipe,
        MatTooltipModule,
    ],
})
export class ItemListModalComponent implements OnInit {
    private _bld_id = inject(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);
    private _dialog_ref =
        inject<MatDialogRef<ItemListModalComponent>>(MatDialogRef);

    public readonly item_list = signal<{ name: string; email: string }[]>([]);
    public readonly loading = signal(false);

    public identify = (index: number, item: any) => index;

    public async ngOnInit() {
        const metadata_key =
            this._settings.get('app.workplace_metadata_key') || 'workplace_app';
        const metadata: any = await showMetadata(
            this._bld_id,
            metadata_key,
        ).toPromise();
        const items = metadata?.details?.support_issue_types || [];
        this.item_list.set(items);
    }

    public addItem() {
        this.item_list.update((items) => [...items, { name: '', email: '' }]);
    }

    public removeItem(index: number) {
        this.item_list.update((items) => items.filter((_, i) => i !== index));
    }

    public updateItem(index: number, key: 'name' | 'email', value: string) {
        this.item_list.update((items) =>
            items.map((item, i) =>
                i === index ? { ...item, [key]: value } : item,
            ),
        );
    }

    public async save() {
        const metadata_key =
            this._settings.get('app.workplace_metadata_key') || 'workplace_app';
        const concierge_key =
            this._settings.get('app.concierge_metadata_key') || 'concierge_app';
        this.loading.set(true);
        const items = this.item_list().filter((_) => _);
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
            this.loading.set(false);
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
        this.loading.set(false);
        if (resp) this._dialog_ref.close();
    }
}
