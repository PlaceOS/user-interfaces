import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, setNotifyOutlet } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { RichTextInputComponent } from '@placeos/form-fields';
import { EmailTemplateManageComponent } from '../../app/email-templates/email-template-manage.component';
import { EmailTemplatesStateService } from '../../app/email-templates/email-templates-state.service';

describe('EmailTemplateManageComponent', () => {
    let spectator: Spectator<EmailTemplateManageComponent>;
    const saveTemplate = vi.fn(() => Promise.resolve());
    const loadTemplate = vi.fn(() => Promise.resolve(null as any));
    const navigate = vi.fn();
    const clipboard_copy = vi.fn();
    const template_groups = signal<any[]>([]);
    let param_map: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: EmailTemplateManageComponent,
        detectChanges: false,
        declarations: [MockComponent(RichTextInputComponent)],
        providers: [
            MockProvider(EmailTemplatesStateService, {
                template_groups,
                saveTemplate,
                loadTemplate,
            } as any),
            MockProvider(OrganisationService, {
                building_list: signal([{ id: 'bld-1' }]),
            } as any),
            MockProvider(Router, { navigate } as any),
            MockProvider(Clipboard, { copy: clipboard_copy } as any),
            MockProvider(ActivatedRoute, {
                get paramMap() {
                    return param_map;
                },
                snapshot: { paramMap: convertToParamMap({}) },
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        template_groups.set([]);
        param_map = of(convertToParamMap({}));
        spectator = createComponent();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
    });

    it('should copy a placeholder token and notify', () => {
        spectator.component.copyField('booking_ref');
        expect(clipboard_copy).toHaveBeenCalledWith('%{booking_ref}');
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should resolve the active trigger from the template groups', () => {
        template_groups.set([
            {
                name: 'Bookings',
                items: [{ id: 'created', name: 'Created' }],
            },
        ]);
        spectator.component.model.update((m) => ({
            ...m,
            trigger: 'created',
        }));

        expect(spectator.component.active_trigger()).toEqual(
            expect.objectContaining({ id: 'created', name: 'Created' }),
        );
    });

    it('should save the template with extracted text and navigate away', async () => {
        spectator.component.model.update((m) => ({
            ...m,
            subject: 'Subject',
            html: '<p>Body</p>',
            zone_id: 'bld-1',
        }));

        await spectator.component.save();

        expect(saveTemplate).toHaveBeenCalledWith(
            expect.objectContaining({
                subject: 'Subject',
                html: '<p>Body</p>',
                text: 'Body',
                zone_id: 'bld-1',
            }),
            undefined,
        );
        expect(navigate).toHaveBeenCalledWith(['/email-templates']);
    });

    it('should pass the previous zone when the building changes', async () => {
        spectator.component.template.set({
            id: 'template-1',
            zone_id: 'bld-0',
        } as any);
        spectator.component.model.update((m) => ({
            ...m,
            zone_id: 'bld-1',
            html: '<p>x</p>',
            subject: 'S',
        }));

        await spectator.component.save();

        expect(saveTemplate).toHaveBeenCalledWith(expect.anything(), 'bld-0');
    });
});
