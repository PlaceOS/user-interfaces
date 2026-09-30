import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import {
    approveSignageTemplate,
    showSignageTemplate,
    SignageTemplate,
} from '@placeos/ts-client';
import { TemplateApproveModalComponent } from '../../app/shared/template-approve-modal.component';
import { SignageService } from '../../app/signage.service';

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
    const service = {
        can_update_templates: signal(true),
        widgets: signal([]),
        changed: vi.fn(),
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
                        template: new SignageTemplate({ id: 'template-1' }),
                    },
                },
                { provide: MatDialogRef, useValue: dialog_ref },
                { provide: SignageService, useValue: service },
            ],
        }).compileComponents();
    });

    it('approves the template and updates the cached item', async () => {
        const approved = new SignageTemplate({
            id: 'template-1',
            approved: true,
        });
        vi.mocked(approveSignageTemplate).mockResolvedValue(approved);
        const component = TestBed.createComponent(
            TemplateApproveModalComponent,
        ).componentInstance;

        await component.approve();

        expect(approveSignageTemplate).toHaveBeenCalledWith('template-1');
        expect(service.updateCachedTemplate).toHaveBeenCalledWith(approved);
        expect(dialog_ref.close).toHaveBeenCalledWith(true);
    });

    it('undoes the pending draft through the service', async () => {
        const pending = new SignageTemplate({ id: 'template-1' });
        const approved = new SignageTemplate({
            id: 'template-1',
            approved: true,
        });
        service.undoTemplateChanges.mockResolvedValue(true);
        const component = TestBed.createComponent(
            TemplateApproveModalComponent,
        ).componentInstance;
        (component as any).template_versions = () => [pending, approved];

        await component.undoChanges();

        expect(service.undoTemplateChanges).toHaveBeenCalledWith(
            'template-1',
            approved,
        );
        expect(dialog_ref.close).toHaveBeenCalledWith(true);
    });

    it('shows an error and blocks approval when versions fail to load', async () => {
        vi.mocked(showSignageTemplate).mockRejectedValueOnce(
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

        expect(approveSignageTemplate).not.toHaveBeenCalled();
    });
});
