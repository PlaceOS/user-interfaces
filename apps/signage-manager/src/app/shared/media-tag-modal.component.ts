import { Component, inject, signal } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent, TranslatePipe } from '@placeos/components';

export type MediaTagModalAction = 'rename' | 'remove';

export interface MediaTagModalData {
    action: MediaTagModalAction;
    tag: string;
    count: number;
    can_delete_media: boolean;
}

export type MediaTagModalResult =
    | { action: 'rename'; new_tag: string }
    | { action: 'remove'; remove_media: boolean };

@Component({
    selector: 'media-tag-modal',
    host: { class: 'block min-w-0 max-w-112 overflow-hidden' },
    template: `
        <header
            class="bg-base-200 m-2 flex w-[calc(100%-1rem)] min-w-0 items-center justify-between overflow-hidden rounded-sm p-2"
        >
            <h2 class="min-w-0 flex-1 truncate px-2 text-xl font-medium">
                {{
                    (is_rename
                        ? 'SIGNAGE_MANAGER.RENAME_MEDIA_TAG'
                        : 'SIGNAGE_MANAGER.REMOVE_MEDIA_TAG'
                    ) | translate
                }}
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
            @if (is_rename) {
                <label for="media-tag-name">{{
                    'SIGNAGE_MANAGER.TAG_NAME' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        id="media-tag-name"
                        [formField]="tag_form.new_tag"
                    />
                </mat-form-field>
            } @else {
                <p>
                    {{
                        'SIGNAGE_MANAGER.REMOVE_MEDIA_TAG_DESCRIPTION'
                            | translate
                                : { tag: data.tag, count: data.count }
                                : data.count
                    }}
                </p>
                @if (data.can_delete_media) {
                    <mat-checkbox
                        class="mt-4"
                        [formField]="tag_form.remove_media"
                    >
                        {{ 'SIGNAGE_MANAGER.DELETE_TAGGED_MEDIA' | translate }}
                    </mat-checkbox>
                    <p class="text-base-content/70 mt-1 text-sm">
                        {{
                            'SIGNAGE_MANAGER.DELETE_TAGGED_MEDIA_HINT'
                                | translate
                        }}
                    </p>
                }
            }
        </main>
        <footer class="border-base-300 flex justify-end gap-2 border-t p-2">
            <button
                btn
                type="button"
                matRipple
                class="inverse min-w-32"
                mat-dialog-close
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                type="button"
                matRipple
                class="min-w-32"
                [class.error]="!is_rename"
                [disabled]="rename_disabled()"
                (click)="confirm()"
            >
                {{
                    (is_rename
                        ? 'SIGNAGE_MANAGER.RENAME_MEDIA_TAG'
                        : 'COMMON.REMOVE'
                    ) | translate
                }}
            </button>
        </footer>
    `,
    imports: [
        FormField,
        IconComponent,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        TranslatePipe,
    ],
})
export class MediaTagModalComponent {
    private readonly _dialog_ref =
        inject<MatDialogRef<MediaTagModalComponent>>(MatDialogRef);
    public readonly data = inject<MediaTagModalData>(MAT_DIALOG_DATA);
    public readonly is_rename = this.data.action === 'rename';
    public readonly tag_model = signal({
        new_tag: this.data.tag,
        remove_media: false,
    });
    public readonly tag_form = form(this.tag_model, (path) => {
        required(path.new_tag);
    });

    public readonly rename_disabled = () => {
        const new_tag = this.tag_model().new_tag.trim();
        return (
            this.is_rename &&
            (this.tag_form().invalid() || !new_tag || new_tag === this.data.tag)
        );
    };

    public confirm() {
        if (this.rename_disabled()) return;
        submit(this.tag_form, async () => {
            const model = this.tag_model();
            const result: MediaTagModalResult = this.is_rename
                ? { action: 'rename', new_tag: model.new_tag.trim() }
                : { action: 'remove', remove_media: model.remove_media };
            this._dialog_ref.close(result);
        });
    }
}
