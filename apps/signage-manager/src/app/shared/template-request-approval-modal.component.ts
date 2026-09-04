import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { i18n, notifyError, notifySuccess, notifyWarn } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    removeSignageTemplateDraft,
    SignageTemplate,
    type SignageTemplateApprover,
} from '@placeos/ts-client';
import { SignageService } from '../signage.service';
import { TemplateApprovalPreviewComponent } from './template-approval-preview.component';
import { loadTemplateApprovalVersions } from './template-approval.util';

export interface TemplateRequestApprovalModalData {
    template: SignageTemplate;
    approvers: SignageTemplateApprover[];
    selected_approver_id?: string;
}

export interface TemplateRequestApprovalModalResult {
    approver_id: string;
    message: string;
}

@Component({
    selector: 'template-request-approval-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.REQUEST_APPROVAL' | translate }}
            </h2>
            @if (!loading()) {
                <button
                    icon
                    type="button"
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.CLOSE_REQUEST_APPROVAL' | translate
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main
                class="flex max-h-[70vh] max-w-[calc(100vw-2rem)] flex-col gap-4 overflow-auto px-4 pt-2 pb-4 max-md:w-auto max-md:flex-1"
                [style.width]="show_preview() ? '50rem' : '28rem'"
            >
                @if (!show_preview()) {
                    <div>
                        <div class="text-base-content/70 text-sm">
                            {{ 'SIGNAGE_MANAGER.TEMPLATE_LABEL' | translate }}
                        </div>
                        <div class="font-medium">{{ data.template.name }}</div>
                    </div>
                    <div>
                        <label for="template-approval-approver">{{
                            'SIGNAGE_MANAGER.APPROVER' | translate
                        }}</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <mat-select
                                id="template-approval-approver"
                                name="template-approval-approver"
                                [(ngModel)]="selected_approver_id"
                            >
                                <mat-option value="">{{
                                    'SIGNAGE_MANAGER.ANYONE' | translate
                                }}</mat-option>
                                @for (item of data.approvers; track item.id) {
                                    <mat-option [value]="item.id">
                                        {{ item.name || item.id }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div>
                        <label for="template-approval-message">{{
                            'SIGNAGE_MANAGER.MESSAGE' | translate
                        }}</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <textarea
                                matInput
                                id="template-approval-message"
                                name="template-approval-message"
                                class="min-h-28 resize-y"
                                [placeholder]="
                                    'SIGNAGE_MANAGER.APPROVERS_NOTE_PLACEHOLDER'
                                        | translate
                                "
                                [(ngModel)]="message"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                <button
                    type="button"
                    matRipple
                    class="border-base-300 bg-base-100 flex w-full items-center justify-between rounded-sm border p-2 text-left"
                    [class.bg-base-200]="show_preview()"
                    [attr.aria-pressed]="show_preview()"
                    [attr.aria-label]="
                        (show_preview()
                            ? 'SIGNAGE_MANAGER.HIDE_APPROVAL_CHANGES'
                            : 'SIGNAGE_MANAGER.SHOW_APPROVAL_CHANGES'
                        ) | translate
                    "
                    (click)="togglePreview()"
                >
                    <div>
                        <div class="font-medium">
                            {{ 'SIGNAGE_MANAGER.PREVIEW_CHANGES' | translate }}
                        </div>
                        <div class="text-base-content/70 text-sm">
                            {{
                                'SIGNAGE_MANAGER.PREVIEW_CHANGES_HINT'
                                    | translate
                            }}
                        </div>
                    </div>
                    <icon class="px-2 text-2xl">{{
                        show_preview() ? 'visibility_off' : 'visibility'
                    }}</icon>
                </button>
                @if (show_preview()) {
                    <template-approval-preview
                        [versions]="template_versions()"
                    />
                }
            </main>
            <footer
                class="border-base-300 bg-base-100 sticky bottom-0 flex justify-end gap-2 border-t p-4"
            >
                @if (!show_preview()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="inverse w-36"
                        mat-dialog-close
                    >
                        {{ 'COMMON.CANCEL' | translate }}
                    </button>
                }
                @if (show_preview() && can_update()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="inverse w-40"
                        [disabled]="!has_previous_version()"
                        (click)="undoChanges()"
                    >
                        {{ 'SIGNAGE_MANAGER.UNDO_CHANGES' | translate }}
                    </button>
                }
                @if (!show_preview()) {
                    <button
                        btn
                        type="button"
                        matRipple
                        class="w-44"
                        (click)="submit()"
                    >
                        {{ 'SIGNAGE_MANAGER.REQUEST_APPROVAL' | translate }}
                    </button>
                }
            </footer>
        } @else {
            <main>
                <div
                    class="flex flex-col items-center justify-center space-y-4 px-32 py-16"
                >
                    <mat-spinner diameter="32" />
                    <p>{{ loading() }}</p>
                </div>
            </main>
        }
    `,
    imports: [
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        IconComponent,
        TemplateApprovalPreviewComponent,
        TranslatePipe,
    ],
})
export class TemplateRequestApprovalModalComponent {
    private readonly _service = inject(SignageService);
    public readonly data =
        inject<TemplateRequestApprovalModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<
            MatDialogRef<
                TemplateRequestApprovalModalComponent,
                TemplateRequestApprovalModalResult
            >
        >(MatDialogRef);

    public readonly selected_approver_id = signal(
        this.data.selected_approver_id || '',
    );
    public readonly message = signal('');
    public readonly show_preview = signal(false);
    public readonly loading = signal('');
    public readonly template_versions = signal<SignageTemplate[]>([]);
    public readonly has_previous_version = () =>
        this.template_versions().length > 1;
    public readonly can_update = this._service.can_update;

    public togglePreview() {
        const show_preview = !this.show_preview();
        this.show_preview.set(show_preview);
        if (show_preview) void this._loadTemplateVersions();
    }

    private async _loadTemplateVersions() {
        if (this.template_versions().length) return this.template_versions();
        const template_id = this.data?.template?.id || '';
        if (!template_id) return [];
        this.loading.set(i18n('SIGNAGE_MANAGER.LOADING_VERSIONS'));
        try {
            const versions = await loadTemplateApprovalVersions(template_id);
            this.template_versions.set(versions);
            return versions;
        } finally {
            this.loading.set('');
        }
    }

    public submit() {
        this._dialog_ref.close({
            approver_id: this.selected_approver_id(),
            message: this.message().trim(),
        });
    }

    public async undoChanges() {
        if (!this.can_update()) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES'));
            return;
        }
        const [, previous_version] = await this._loadTemplateVersions();
        if (!previous_version) return;
        this.loading.set(i18n('SIGNAGE_MANAGER.UNDOING_CHANGES'));
        this._dialog_ref.disableClose = true;
        try {
            await removeSignageTemplateDraft(this.data.template.id);
            this._service.updateCachedTemplate(previous_version);
            notifySuccess(i18n('SIGNAGE_MANAGER.TEMPLATE_REVERTED'));
            this._dialog_ref.close();
            this._service.changed();
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.TEMPLATE_REVERT_ERROR'));
        } finally {
            this.loading.set('');
            this._dialog_ref.disableClose = false;
        }
    }
}
