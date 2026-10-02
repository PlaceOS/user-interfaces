import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import { SignageTemplate } from '@placeos/ts-client';
import { TemplateRequestApprovalModalComponent } from '../../app/shared/template-request-approval-modal.component';
import { SignageContextService } from '../../app/signage-context.service';
import { SignagePluginService } from '../../app/signage-plugin.service';
import { SignageTemplateService } from '../../app/templates/signage-template.service';

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('TemplateRequestApprovalModalComponent', () => {
    const dialog_ref = {
        close: vi.fn(),
        disableClose: false,
    };
    const context = {
        can_update_templates: signal(true),
        changed: vi.fn(),
    };
    const plugin_service = { widgets: signal([]) };
    const template_service = {
        updateCachedTemplate: vi.fn(),
        undoTemplateChanges: vi.fn(),
    };

    beforeEach(async () => {
        vi.clearAllMocks();
        setNotifyOutlet({ open: notify_open } as any, true);
        dialog_ref.disableClose = false;
        await TestBed.configureTestingModule({
            imports: [TemplateRequestApprovalModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        template: new SignageTemplate({
                            id: 'template-1',
                            name: 'Welcome',
                        }),
                        approvers: [{ id: 'user-1', name: 'Reviewer' }],
                    },
                },
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: SignageContextService, useValue: context },
                { provide: SignagePluginService, useValue: plugin_service },
                { provide: SignageTemplateService, useValue: template_service },
            ],
        }).compileComponents();
    });

    it('returns the selected approver and trimmed message', () => {
        const component = TestBed.createComponent(
            TemplateRequestApprovalModalComponent,
        ).componentInstance;
        component.selected_approver_id.set('user-1');
        component.message.set(' Please review ');

        component.submit();

        expect(dialog_ref.close).toHaveBeenCalledWith({
            approver_id: 'user-1',
            message: 'Please review',
        });
    });

    it('undoes the pending draft from the approval preview', async () => {
        const pending = new SignageTemplate({ id: 'template-1' });
        const approved = new SignageTemplate({
            id: 'template-1',
            approved: true,
        });
        template_service.undoTemplateChanges.mockResolvedValue(true);
        const component = TestBed.createComponent(
            TemplateRequestApprovalModalComponent,
        ).componentInstance;
        component.template_versions.set([pending, approved]);

        await component.undoChanges();

        expect(template_service.undoTemplateChanges).toHaveBeenCalledWith(
            'template-1',
            approved,
        );
        expect(dialog_ref.close).toHaveBeenCalled();
    });
});
