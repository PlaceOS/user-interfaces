import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    HotkeysService,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import {
    AuthenticatedImageDirective,
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    mediaThumbnail,
    SignageMedia,
    SignageTemplate,
} from '@placeos/ts-client';
import { firstValueFrom } from 'rxjs';
import {
    MediaSelectModalComponent,
    MediaSelectModalData,
} from './media-select-modal.component';
import { SignageSharedWithComponent } from './signage-shared-with.component';

export interface TemplateEditModalData {
    template: SignageTemplate;
    /** Signage group the template is being viewed from */
    group_id?: string;
    onAdd?: (data: Partial<SignageTemplate>) => Promise<SignageTemplate>;
    onEdit?: (
        id: string,
        data: Partial<SignageTemplate>,
    ) => Promise<SignageTemplate>;
}

export interface TemplateEditFormModel {
    name: string;
    description: string;
    background_item_id: string;
    full_screen_takeover: boolean;
}

@Component({
    selector: 'template-edit-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (template.id
                    ? 'SIGNAGE_MANAGER.TEMPLATE_EDIT'
                    : 'SIGNAGE_MANAGER.NEW_TEMPLATE'
                ) | translate
            "
            confirm_hotkey="S"
            (confirm)="saveTemplate()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.TEMPLATE_SAVING' | translate) : ''
            "
        >
            <form>
                <label for="name"
                    >{{ 'FORM.NAME' | translate }}<span required>*</span></label
                >
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        [placeholder]="'FORM.NAME' | translate"
                        [formField]="form.name"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.TEMPLATE_NAME_ARIA' | translate
                        "
                    />
                    <mat-error>{{
                        'FORM.NAME_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
                <label for="description">{{
                    'COMMON.DESCRIPTION' | translate
                }}</label>
                <mat-form-field appearance="outline" class="w-full">
                    <textarea
                        matInput
                        [placeholder]="'COMMON.DESCRIPTION' | translate"
                        [formField]="form.description"
                        class="min-h-32"
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.TEMPLATE_DESCRIPTION_ARIA'
                                | translate
                        "
                    ></textarea>
                </mat-form-field>
                <fieldset class="mb-4">
                    <legend class="mb-1">
                        {{ 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND' | translate }}
                    </legend>
                    <div
                        class="border-base-300 flex flex-wrap items-center gap-3 rounded-lg border p-3"
                    >
                        @if (model().background_item_id) {
                            <img
                                auth
                                class="bg-base-200 h-16 w-24 shrink-0 rounded object-cover"
                                [source]="background_url()"
                                [alt]="
                                    selected_background()?.name ||
                                    ('SIGNAGE_MANAGER.TEMPLATE_BACKGROUND'
                                        | translate)
                                "
                            />
                            <div class="min-w-32 flex-1">
                                <div class="truncate font-medium">
                                    {{
                                        selected_background()?.name ||
                                            ('SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECTED'
                                                | translate)
                                    }}
                                </div>
                                @if (
                                    selected_background()?.media_type;
                                    as type
                                ) {
                                    <div
                                        class="text-base-content/70 text-xs capitalize"
                                    >
                                        {{ type }}
                                    </div>
                                }
                            </div>
                        } @else {
                            <div
                                class="bg-base-200 flex h-16 w-24 shrink-0 items-center justify-center rounded"
                            >
                                <icon class="text-base-content/40 text-3xl"
                                    >image</icon
                                >
                            </div>
                            <div class="text-base-content/70 min-w-32 flex-1">
                                {{
                                    'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_EMPTY'
                                        | translate
                                }}
                            </div>
                        }
                        <div class="ml-auto flex shrink-0 items-center gap-1">
                            <button
                                type="button"
                                matRipple
                                class="hover:bg-base-200 rounded px-3 py-2 text-sm font-medium"
                                (click)="selectBackground()"
                            >
                                {{
                                    (model().background_item_id
                                        ? 'COMMON.CHANGE'
                                        : 'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_SELECT'
                                    ) | translate
                                }}
                            </button>
                            @if (model().background_item_id) {
                                <button
                                    icon
                                    type="button"
                                    matRipple
                                    class="text-error"
                                    (click)="clearBackground()"
                                    [attr.aria-label]="
                                        'SIGNAGE_MANAGER.TEMPLATE_BACKGROUND_REMOVE'
                                            | translate
                                    "
                                >
                                    <icon>delete</icon>
                                </button>
                            }
                        </div>
                    </div>
                </fieldset>
                <div class="mb-4">
                    <settings-toggle
                        [label]="
                            'SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER'
                                | translate
                        "
                        [formField]="form.full_screen_takeover"
                        info="When selected, takeover content will hide the template and takeover the entire screen"
                    >
                    </settings-toggle>
                </div>
                <signage-shared-with
                    type="templates"
                    [item_id]="template.id"
                    [group_id]="group_id"
                ></signage-shared-with>
            </form>
        </fullscreen-modal-shell>
    `,
    imports: [
        FullscreenModalShellComponent,
        AuthenticatedImageDirective,
        IconComponent,
        SettingsToggleComponent,
        FormField,
        TranslatePipe,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        SignageSharedWithComponent,
    ],
})
export class TemplateEditModalComponent {
    private readonly _data = inject<TemplateEditModalData>(MAT_DIALOG_DATA);
    private readonly _dialog = inject(MatDialog);
    private readonly _dialog_ref =
        inject<MatDialogRef<TemplateEditModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly template = this._data.template;
    public readonly group_id = this._data.group_id || '';
    public readonly model = signal<TemplateEditFormModel>({
        name: this.template.name || '',
        description: this.template.description || '',
        background_item_id: this.template.background_item_id || '',
        full_screen_takeover: !!this.template.full_screen_takeover,
    });
    public readonly selected_background = signal<SignageMedia | null>(null);
    public readonly background_url = computed(() => {
        const media_id = this.model().background_item_id;
        return media_id ? mediaThumbnail(media_id) : '';
    });
    public readonly form = form(this.model, (path) => {
        required(path.name);
    });

    constructor() {
        const save_hotkey = inject(HotkeysService).listen(['KeyS'], () =>
            this.saveTemplate(),
        );
        inject(DestroyRef).onDestroy(() => save_hotkey?.unsubscribe());
    }

    public async selectBackground() {
        const ref = this._dialog.open<
            MediaSelectModalComponent,
            MediaSelectModalData,
            SignageMedia
        >(MediaSelectModalComponent, {
            data: { selected_id: this.model().background_item_id },
            panelClass: 'mobile-fullscreen',
        });
        const media = await firstValueFrom(ref.afterClosed());
        if (!media) return;
        this.selected_background.set(media);
        this.model.update((value) => ({
            ...value,
            background_item_id: media.id,
        }));
    }

    public clearBackground() {
        this.selected_background.set(null);
        this.model.update((value) => ({
            ...value,
            background_item_id: '',
        }));
    }

    public async saveTemplate() {
        await submit(this.form, async () => {
            this.loading.set(true);
            this._dialog_ref.disableClose = true;
            const data: Partial<SignageTemplate> = { ...this.model() };
            try {
                let result: SignageTemplate;
                if (this.template.id) {
                    result = await this._data.onEdit(this.template.id, data);
                } else {
                    result = await this._data.onAdd(data);
                }
                this._dialog_ref.disableClose = false;
                this._dialog_ref.close(result);
                notifySuccess(i18n('SIGNAGE_MANAGER.TEMPLATE_SAVED'));
            } catch (e) {
                this._dialog_ref.disableClose = false;
                this.loading.set(false);
                notifyError(i18n('SIGNAGE_MANAGER.TEMPLATE_SAVE_ERROR'));
                throw e;
            }
        });
    }
}
