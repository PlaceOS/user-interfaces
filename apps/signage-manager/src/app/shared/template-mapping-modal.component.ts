import { Component, computed, inject, signal } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { i18n, notifyError, notifySuccess } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
    TranslatePipe,
} from '@placeos/components';
import {
    mediaThumbnail,
    type SignagePlaylistSchedule,
    SignageTemplate,
} from '@placeos/ts-client';
import {
    HydratedSignageTemplate,
    HydratedSignageTemplateMapping,
} from '../signage-template-mapping';
import {
    createPlaylistScheduleModel,
    PlaylistScheduleFormComponent,
    PlaylistScheduleFormModel,
    playlistSchedulePayload,
} from './playlist-schedule-form.component';

export interface TemplateMappingModalData {
    mapping: HydratedSignageTemplateMapping | null;
    templates: SignageTemplate[];
    save: (
        template_id: string,
        schedule: SignagePlaylistSchedule | null,
    ) => Promise<unknown>;
}

interface TemplateMappingFormModel {
    template_id: string;
    scheduled: boolean;
    schedule: PlaylistScheduleFormModel;
}

@Component({
    selector: 'template-mapping-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (mapping
                    ? 'SIGNAGE_MANAGER.TEMPLATE_MAPPING_EDIT'
                    : 'SIGNAGE_MANAGER.APPLY_TEMPLATE'
                ) | translate
            "
            (confirm)="saveMapping()"
            [loading]="
                loading() ? ('SIGNAGE_MANAGER.TEMPLATE_SAVING' | translate) : ''
            "
        >
            <div class="flex flex-col gap-4">
                @if (mapping) {
                    <div
                        class="border-base-300 bg-base-100 flex items-center gap-3 rounded-lg border p-3"
                    >
                        <div
                            class="bg-base-200 flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded"
                        >
                            @if (background_url()) {
                                <img
                                    auth
                                    class="h-full w-full object-cover"
                                    [source]="background_url()"
                                    [alt]="selected_template()?.name || ''"
                                />
                            } @else {
                                <icon class="text-base-content/40 text-3xl"
                                    >dashboard</icon
                                >
                            }
                        </div>
                        <div class="min-w-0 flex-1">
                            <div class="truncate font-medium">
                                {{ selected_template()?.name }}
                            </div>
                            @if (selected_template()?.description) {
                                <div
                                    class="text-base-content/70 mt-1 line-clamp-2 text-sm"
                                >
                                    {{ selected_template()?.description }}
                                </div>
                            }
                        </div>
                    </div>
                } @else {
                    <div>
                        <label>
                            {{
                                'SIGNAGE_MANAGER.SELECT_APPROVED_TEMPLATE'
                                    | translate
                            }}
                            <span required>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                placeholder="Select a template"
                                [formField]="form_model.template_id"
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.SELECT_APPROVED_TEMPLATE'
                                        | translate
                                "
                            >
                                @for (
                                    template of templates;
                                    track template.id
                                ) {
                                    <mat-option [value]="template.id">
                                        {{ template.name }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'SIGNAGE_MANAGER.TEMPLATE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                        @if (!templates.length) {
                            <p class="text-base-content/70 -mt-3 text-sm">
                                {{
                                    'SIGNAGE_MANAGER.NO_APPROVED_TEMPLATES'
                                        | translate
                                }}
                            </p>
                        }
                    </div>
                }

                <settings-toggle
                    [label]="
                        'SIGNAGE_MANAGER.TEMPLATE_MAPPING_SCHEDULE' | translate
                    "
                    [info]="
                        'SIGNAGE_MANAGER.TEMPLATE_MAPPING_DEFAULT_HINT'
                            | translate
                    "
                    [formField]="form_model.scheduled"
                />

                @if (model().scheduled) {
                    <playlist-schedule-form
                        [schedule]="form_model.schedule"
                        [index]="0"
                        [open]="true"
                        [can_remove]="false"
                    />
                } @else {
                    <div
                        class="bg-base-200 border-base-300 flex items-center gap-3 rounded-lg border p-4"
                    >
                        <icon class="text-primary text-2xl">home</icon>
                        <div>
                            <div class="font-medium">
                                {{
                                    'SIGNAGE_MANAGER.DEFAULT_TEMPLATE'
                                        | translate
                                }}
                            </div>
                            <div class="text-base-content/70 text-sm">
                                {{
                                    'SIGNAGE_MANAGER.DEFAULT_TEMPLATE_HINT'
                                        | translate
                                }}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </fullscreen-modal-shell>
    `,
    imports: [
        FormField,
        MatFormFieldModule,
        MatSelectModule,
        AuthenticatedImageDirective,
        FullscreenModalShellComponent,
        IconComponent,
        PlaylistScheduleFormComponent,
        SettingsToggleComponent,
        TranslatePipe,
    ],
})
export class TemplateMappingModalComponent {
    private readonly _data = inject<TemplateMappingModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<MatDialogRef<TemplateMappingModalComponent>>(MatDialogRef);

    public readonly mapping = this._data.mapping;
    public readonly templates = this._data.templates;
    public readonly loading = signal(false);
    public readonly model = signal<TemplateMappingFormModel>({
        template_id: this.mapping?.template_id || '',
        scheduled: !!this.mapping?.schedule,
        schedule: createPlaylistScheduleModel(
            this.mapping?.schedule || undefined,
        ),
    });
    public readonly form_model = form(this.model, (path) => {
        required(path.template_id);
    });
    public readonly selected_template = computed(() => {
        const template_id = this.model().template_id;
        return (
            this.mapping?.template_details ||
            this.templates.find((template) => template.id === template_id) ||
            null
        );
    });
    public readonly background_url = computed(() => {
        const template = this.selected_template();
        if (!template) return '';
        if (
            template instanceof HydratedSignageTemplate &&
            template.background_media
        ) {
            return template.background_media.media_url;
        }
        return template.background_item_id
            ? mediaThumbnail(template.background_item_id)
            : '';
    });

    public async saveMapping() {
        await submit(this.form_model, async () => {
            this.loading.set(true);
            this._dialog_ref.disableClose = true;
            const value = this.model();
            const schedule = value.scheduled
                ? playlistSchedulePayload(value.schedule)
                : null;
            try {
                await this._data.save(value.template_id, schedule);
                this._dialog_ref.disableClose = false;
                this._dialog_ref.close(true);
                notifySuccess(
                    i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_SAVED'),
                );
            } catch (error) {
                this._dialog_ref.disableClose = false;
                this.loading.set(false);
                notifyError(
                    i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_SAVE_ERROR'),
                );
                throw error;
            }
        });
    }
}
