import { Component, DestroyRef, inject, signal } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    HotkeysService,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import { SignageTemplate } from '@placeos/ts-client';

export interface TemplateEditModalData {
    template: SignageTemplate;
    onAdd?: (data: Partial<SignageTemplate>) => Promise<SignageTemplate>;
    onEdit?: (
        id: string,
        data: Partial<SignageTemplate>,
    ) => Promise<SignageTemplate>;
}

export interface TemplateEditFormModel {
    name: string;
    description: string;
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
                <div class="mb-4">
                    <settings-toggle
                        [label]="
                            'SIGNAGE_MANAGER.TEMPLATE_FULLSCREEN_TAKEOVER'
                                | translate
                        "
                        [formField]="form.full_screen_takeover"
                    >
                    </settings-toggle>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    imports: [
        FullscreenModalShellComponent,
        SettingsToggleComponent,
        FormField,
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
    ],
})
export class TemplateEditModalComponent {
    private _data = inject<TemplateEditModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<TemplateEditModalComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly template = this._data.template;
    public readonly model = signal<TemplateEditFormModel>({
        name: this.template.name || '',
        description: this.template.description || '',
        full_screen_takeover: !!this.template.full_screen_takeover,
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
