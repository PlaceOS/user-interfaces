import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import { signage_templates } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { TemplateApproveModalComponent } from '../../app/shared/template-approve-modal.component';
import { SignageContextService } from '../../app/signage-context.service';
import { signageTemplate } from '../../app/signage-models';
import { SignagePluginService } from '../../app/signage-plugin.service';
import { SignageTemplateService } from '../../app/templates/signage-template.service';

vi.mock('@placeos/ts-client', { spy: true });

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

describe('TemplateApproveModalComponent', () => {
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
            imports: [TemplateApproveModalComponent],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        template: signageTemplate({ id: 'template-1' }),
                    },
                },
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: SignageContextService, useValue: context },
                { provide: SignagePluginService, useValue: plugin_service },
                { provide: SignageTemplateService, useValue: template_service },
            ],
        }).compileComponents();
    });

    it('approves the template and updates the cached item', async () => {
        const approved = signageTemplate({
            id: 'template-1',
            approved: true,
        });
        vi.mocked(signage_templates.approve).mockResolvedValue(
            mockReply(approved),
        );
        const component = TestBed.createComponent(
            TemplateApproveModalComponent,
        ).componentInstance;

        await component.approve();

        expect(signage_templates.approve).toHaveBeenCalledWith({
            id: 'template-1',
        });
        expect(template_service.updateCachedTemplate).toHaveBeenCalledWith(
            approved,
        );
        expect(dialog_ref.close).toHaveBeenCalledWith(true);
    });

    it('undoes the pending draft through the service', async () => {
        const pending = signageTemplate({ id: 'template-1' });
        const approved = signageTemplate({
            id: 'template-1',
            approved: true,
        });
        template_service.undoTemplateChanges.mockResolvedValue(true);
        const component = TestBed.createComponent(
            TemplateApproveModalComponent,
        ).componentInstance;
        (component as any).template_versions = () => [pending, approved];

        await component.undoChanges();

        expect(template_service.undoTemplateChanges).toHaveBeenCalledWith(
            'template-1',
            approved,
        );
        expect(dialog_ref.close).toHaveBeenCalledWith(true);
    });

    it('shows an error and blocks approval when versions fail to load', async () => {
        vi.mocked(signage_templates.show).mockRejectedValueOnce(
            new Error('Denied'),
        );
        const fixture = TestBed.createComponent(TemplateApproveModalComponent);
        await fixture.whenStable();
        fixture.detectChanges();
        const component = fixture.componentInstance;

        expect(component.template_versions()).toEqual([]);
        expect(fixture.nativeElement.textContent).toContain(
            'Unable to load template versions.',
        );
        const buttons: HTMLButtonElement[] = Array.from(
            fixture.nativeElement.querySelectorAll('footer button'),
        );
        expect(buttons.at(-1)?.disabled).toBe(true);

        await component.approve();

        expect(signage_templates.approve).not.toHaveBeenCalled();
    });
});
