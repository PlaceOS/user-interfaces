import { Clipboard } from '@angular/cdk/clipboard';
import { signal } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as common_mod from '@placeos/common';
import { RichTextInputComponent } from '@placeos/form-fields';
import { EmailTemplateManageComponent } from '../../app/email-templates/email-template-manage.component';
import { EmailTemplatesStateService } from '../../app/email-templates/email-templates-state.service';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifyError: jest.fn(),
        notifySuccess: jest.fn(),
        extractTextFromHTML: jest.fn((html: string) => `text:${html}`),
    };
});

describe('EmailTemplateManageComponent', () => {
    let spectator: Spectator<EmailTemplateManageComponent>;
    const saveTemplate = jest.fn(() => Promise.resolve());
    const loadTemplate = jest.fn(() => Promise.resolve(null as any));
    const navigate = jest.fn();
    const clipboard_copy = jest.fn();
    const template_groups = signal<any[]>([]);
    let param_map: any;

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
        jest.clearAllMocks();
        template_groups.set([]);
        param_map = of(convertToParamMap({}));
        spectator = createComponent();
    });

    it('should copy a placeholder token and notify', () => {
        spectator.component.copyField('booking_ref');
        expect(clipboard_copy).toHaveBeenCalledWith('%{booking_ref}');
        expect(common_mod.notifySuccess).toHaveBeenCalled();
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
                text: 'text:<p>Body</p>',
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
