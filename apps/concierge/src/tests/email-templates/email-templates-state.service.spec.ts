import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import * as common_mod from '@placeos/common';
import {
    EmailTemplate,
    EmailTemplatesStateService,
} from '../../app/email-templates/email-templates-state.service';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        showMetadata: jest.fn(() => Promise.resolve({ details: [] })),
        updateMetadata: jest.fn(() => Promise.resolve()),
    };
});

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        notifyError: jest.fn(),
        notifySuccess: jest.fn(),
    };
});

describe('EmailTemplatesStateService', () => {
    let spectator: SpectatorService<EmailTemplatesStateService>;
    const active_building = signal<any>({ id: 'bld-1' });
    const active_region = signal<any>(null);

    const createService = createServiceFactory({
        service: EmailTemplatesStateService,
        providers: [
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
                active_building,
                active_region,
            } as any),
            MockProvider(SettingsService, { get: jest.fn() } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        active_building.set({ id: 'bld-1' });
        active_region.set(null);
        (ts_client.showMetadata as jest.Mock).mockResolvedValue({
            details: [],
        });
        (ts_client.updateMetadata as jest.Mock).mockResolvedValue(undefined);
        spectator = createService();
    });

    it('should reject templates that have no building zone', async () => {
        await expect(
            spectator.service.saveTemplate({ zone_id: '' } as EmailTemplate),
        ).rejects.toBe('A building is required');
        expect(ts_client.updateMetadata).not.toHaveBeenCalled();
    });

    it('should generate an id and timestamps for new templates', async () => {
        const template = {
            zone_id: 'bld-1',
            subject: 'Welcome',
            category: 'internal',
        } as EmailTemplate;

        await spectator.service.saveTemplate(template);

        expect(template.id).toMatch(/^template-/);
        expect(template.created_at).toBeGreaterThan(0);
        expect(template.updated_at).toBeGreaterThan(0);
        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'bld-1',
            expect.objectContaining({
                name: 'email_templates',
                details: expect.arrayContaining([template]),
            }),
        );
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });

    it('should strip a template from its previous zone when moved', async () => {
        (ts_client.showMetadata as jest.Mock).mockResolvedValue({
            details: [{ id: 'template-1', zone_id: 'bld-0' }],
            description: 'old',
        });
        const template = {
            id: 'template-1',
            zone_id: 'bld-1',
            subject: 'Moved',
        } as EmailTemplate;

        await spectator.service.saveTemplate(template, 'bld-0');

        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'bld-0',
            expect.objectContaining({
                name: 'email_templates',
                details: [],
            }),
        );
    });

    it('should remove a template from its zone metadata', async () => {
        (ts_client.showMetadata as jest.Mock).mockImplementation((zone) =>
            Promise.resolve(
                zone === 'bld-1'
                    ? {
                          details: [
                              { id: 'keep', zone_id: 'bld-1' },
                              { id: 'drop', zone_id: 'bld-1' },
                          ],
                      }
                    : { details: [] },
            ),
        );

        await spectator.service.removeTemplate({
            id: 'drop',
            zone_id: 'bld-1',
        } as EmailTemplate);

        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'bld-1',
            expect.objectContaining({
                details: [{ id: 'keep', zone_id: 'bld-1' }],
            }),
        );
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });

    it('should load a template by id from the merged zone list', async () => {
        (ts_client.showMetadata as jest.Mock).mockImplementation((zone) =>
            Promise.resolve(
                zone === 'bld-1'
                    ? { details: [{ id: 'target', subject: 'Found' }] }
                    : { details: [] },
            ),
        );

        const template = await spectator.service.loadTemplate('target');

        expect(template).toMatchObject({
            id: 'target',
            subject: 'Found',
            zone_id: 'bld-1',
        });
    });

    it('should merge filters and expose them via the readonly signal', () => {
        spectator.service.setFilters({ category: 'internal' });
        expect(spectator.service.filters()).toEqual({ category: 'internal' });

        spectator.service.setFilters({});
        expect(spectator.service.filters()).toEqual({ category: 'internal' });
    });

    it('should provide a single empty group when there are no definitions', () => {
        expect(spectator.service.template_groups()).toEqual([
            { name: '', items: [] },
        ]);
    });
});
