import { Component, inject, resource, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { i18n, notifyError, notifySuccess, notifyWarn } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import {
    approveSignageTemplate,
    removeSignageTemplateDraft,
    SignageTemplate,
} from '@placeos/ts-client';
import { SignageService } from '../signage.service';
import { TemplateApprovalPreviewComponent } from './template-approval-preview.component';
import { loadTemplateApprovalVersions } from './template-approval.util';

interface TemplateApproveModalData {
    template: SignageTemplate;
}

@Component({
    selector: 'template-approve-modal',
    template: `
        <div class="p-2">
            <header class="bg-base-200 rounded-sm p-2">
                <h2 class="px-2 text-xl font-medium">
                    {{ 'SIGNAGE_MANAGER.APPROVE_TEMPLATE' | translate }}
                </h2>
                @if (!loading()) {
                    <button
                        icon
                        type="button"
                        matRipple
                        mat-dialog-close
                        [attr.aria-label]="
                            'SIGNAGE_MANAGER.CLOSE_APPROVE_TEMPLATE' | translate
                        "
                    >
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="max-h-[60vh] min-w-xl max-w-[80vw]  gap-2 overflow-auto py-2">
                    <template-approval-preview
                        [versions]="template_versions()"
                    />
                </main>
                <footer
                    class="bg-base-200 flex items-center justify-end space-x-2 rounded-sm p-2"
                >
                    @if (can_update()) {
                        <button
                            btn
                            type="button"
                            matRipple
                            class="inverse bg-base-100 w-40"
                            [disabled]="!has_previous_version()"
                            (click)="undoChanges()"
                        >
                            {{ 'SIGNAGE_MANAGER.UNDO_CHANGES' | translate }}
                        </button>
                    }
                    <button
                        btn
                        type="button"
                        matRipple
                        class="w-40"
                        (click)="approve()"
                    >
                        {{ 'COMMON.APPROVE' | translate }}
                    </button>
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
        </div>
    `,
    imports: [
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        TemplateApprovalPreviewComponent,
        TranslatePipe,
    ],
})
export class TemplateApproveModalComponent {
    private readonly _data = inject<TemplateApproveModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref = inject(
        MatDialogRef<TemplateApproveModalComponent>,
    );
    private readonly _service = inject(SignageService);

    public readonly loading = signal('');
    public readonly can_update = this._service.can_update;

    private readonly _template_versions = resource({
        params: () => this._data?.template?.id || '',
        loader: async ({ params }) => {
            if (!params) return [];
            this.loading.set(i18n('SIGNAGE_MANAGER.LOADING_VERSIONS'));
            try {
                return await loadTemplateApprovalVersions(params);
            } finally {
                this.loading.set('');
            }
        },
    });
    public readonly template_versions = () =>
        this._template_versions.value() || [];
    public readonly has_previous_version = () =>
        this.template_versions().length > 1;

    public async undoChanges() {
        if (!this.can_update()) {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES'));
            return;
        }
        const previous_version = this.template_versions()[1];
        if (!previous_version) return;
        this.loading.set(i18n('SIGNAGE_MANAGER.UNDOING_CHANGES'));
        this._dialog_ref.disableClose = true;
        try {
            await removeSignageTemplateDraft(this._data.template.id);
            this._service.updateCachedTemplate(previous_version);
            notifySuccess(i18n('SIGNAGE_MANAGER.TEMPLATE_REVERTED'));
            this._dialog_ref.close(true);
            this._service.changed();
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.TEMPLATE_REVERT_ERROR'));
        } finally {
            this.loading.set('');
            this._dialog_ref.disableClose = false;
        }
    }

    public async approve() {
        this.loading.set(i18n('SIGNAGE_MANAGER.APPROVING_TEMPLATE'));
        this._dialog_ref.disableClose = true;
        try {
            const template = await approveSignageTemplate(
                this._data.template.id,
            );
            this._service.updateCachedTemplate(template);
            notifySuccess(i18n('SIGNAGE_MANAGER.TEMPLATE_APPROVED'));
            this._dialog_ref.close(true);
            this._service.changed();
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.TEMPLATE_APPROVE_ERROR'));
        } finally {
            this.loading.set('');
            this._dialog_ref.disableClose = false;
        }
    }
}
