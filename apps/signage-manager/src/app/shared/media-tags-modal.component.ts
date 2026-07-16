import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { i18n } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { ItemListFieldComponent } from '@placeos/form-fields';

@Component({
    selector: 'media-tags-modal',
    host: { class: 'block min-w-0 max-w-112 overflow-hidden' },
    template: `
        <header
            class="bg-base-200 m-2 flex w-[calc(100%-1rem)] min-w-0 items-center justify-between overflow-hidden rounded-sm p-2"
        >
            <h2 class="min-w-0 flex-1 truncate px-2 text-xl font-medium">
                {{ heading }}
            </h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                class="shrink-0"
                [attr.aria-label]="'COMMON.CANCEL' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        <main class="min-w-0 px-4 py-2">
            <label>{{ 'COMMON.TAGS' | translate }}</label>
            <item-list-field
                name="media-tags"
                [(ngModel)]="tags"
                [placeholder]="'COMMON.TAGS' | translate"
            />
        </main>
        <footer class="border-base-300 flex justify-end border-t p-2">
            <button
                btn
                type="button"
                matRipple
                class="min-w-32"
                [disabled]="!tags().length"
                (click)="addTags()"
            >
                {{ 'COMMON.ADD' | translate }}
            </button>
        </footer>
    `,
    imports: [
        FormsModule,
        MatDialogModule,
        MatRippleModule,
        IconComponent,
        ItemListFieldComponent,
        TranslatePipe,
    ],
})
export class MediaTagsModalComponent {
    private readonly _dialog_ref =
        inject<MatDialogRef<MediaTagsModalComponent>>(MatDialogRef);

    public readonly heading = `${i18n('COMMON.ADD')} ${i18n('COMMON.TAGS')}`;
    public readonly tags = signal<string[]>([]);

    public addTags() {
        if (this.tags().length) this._dialog_ref.close(this.tags());
    }
}
