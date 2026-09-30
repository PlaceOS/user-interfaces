import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import {
    EmailTemplate,
    EmailTemplatesStateService,
} from '../../app/email-templates/email-templates-state.service';

vi.mock('@placeos/ts-client', { spy: true });

/** Fake dialog refs that drive `openConfirmModal` through MatDialog */
const makeConfirmRef = () => ({
    componentInstance: {
        event: of({ reason: 'done' }),
        loading: { set: vi.fn() },
    },
    afterClosed: () => of({ reason: 'done' }),
    close: vi.fn(),
});

const makeDismissRef = () => ({
    componentInstance: { event: NEVER, loading: { set: vi.fn() } },
    afterClosed: () => of({ reason: 'cancel' }),
    close: vi.fn(),
});

describe('EmailTemplatesStateService', () => {
    let spectator: SpectatorService<EmailTemplatesStateService>;
    let notify_open: ReturnType<typeof vi.fn>;
    let dialog_open: (...args: any[]) => unknown;
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
            MockProvider(SettingsService, { get: vi.fn() } as any),
            MockProvider(MatDialog, {
                open: (...args: any[]) => dialog_open(...args),
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
        dialog_open = vi.fn(() => makeConfirmRef());
        active_building.set({ id: 'bld-1' });
        active_region.set(null);
        (ts_client.showMetadata as any).mockResolvedValue({
            details: [],
        });
        (ts_client.updateMetadata as any).mockResolvedValue(undefined);
        spectator = createService();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
    });

    it('should reject templates that have no building zone', async () => {
        await expect(
            spectator.service.saveTemplate({ zone_id: '' } as EmailTemplate),
        ).rejects.toBe('A building is required');
        expect(ts_client.updateMetadata).not.toHaveBeenCalled();
    });

    it('should show an error when reading templates fails on save', async () => {
        (ts_client.showMetadata as any).mockRejectedValue('offline');

        await expect(
            spectator.service.saveTemplate({
                zone_id: 'bld-1',
                subject: 'New',
            } as EmailTemplate),
        ).rejects.toBe('offline');

        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
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
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should strip a template from its previous zone when moved', async () => {
        (ts_client.showMetadata as any).mockResolvedValue({
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
        (ts_client.showMetadata as any).mockImplementation((zone) =>
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
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should write the new zone before removing a moved template from the old zone', async () => {
        (ts_client.showMetadata as any).mockImplementation((zone) =>
            Promise.resolve({
                details:
                    zone === 'bld-0'
                        ? [{ id: 'template-1', zone_id: 'bld-0' }]
                        : [],
            }),
        );

        await spectator.service.saveTemplate(
            { id: 'template-1', zone_id: 'bld-1' } as EmailTemplate,
            'bld-0',
        );

        const zones = (ts_client.updateMetadata as any).mock.calls.map(
            ([zone]) => zone,
        );
        expect(zones).toEqual(['bld-1', 'bld-0']);
    });

    it('should not write templates when the zone list cannot be read', async () => {
        (ts_client.showMetadata as any).mockRejectedValue('offline');

        await expect(
            spectator.service.removeTemplate({
                id: 'drop',
                zone_id: 'bld-1',
            } as EmailTemplate),
        ).rejects.toBe('offline');

        expect(ts_client.updateMetadata).not.toHaveBeenCalled();
    });

    it('should keep the template when removal is cancelled', async () => {
        dialog_open = vi.fn(() => makeDismissRef());

        await spectator.service.removeTemplate({
            id: 'drop',
            zone_id: 'bld-1',
        } as EmailTemplate);

        expect(ts_client.updateMetadata).not.toHaveBeenCalled();
    });

    it('should load a template by id from the merged zone list', async () => {
        (ts_client.showMetadata as any).mockImplementation((zone) =>
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
