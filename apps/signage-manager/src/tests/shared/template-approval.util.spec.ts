import { signage_templates } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import {
    loadTemplateApprovalVersions,
    signageTemplateLayoutChanges,
} from '../../app/shared/template-approval.util';
import { signageTemplate } from '../../app/signage-models';

vi.mock('@placeos/ts-client', { spy: true });

describe('loadTemplateApprovalVersions', () => {
    beforeEach(() => vi.clearAllMocks());

    it('loads the pending and approved template versions', async () => {
        const pending = signageTemplate({
            id: 'template-1',
            name: 'Pending',
        });
        const approved = signageTemplate({
            id: 'template-1',
            name: 'Approved',
            approved: true,
        });
        vi.mocked(signage_templates.show)
            .mockResolvedValueOnce(mockReply(pending))
            .mockResolvedValueOnce(mockReply(approved));

        await expect(
            loadTemplateApprovalVersions('template-1'),
        ).resolves.toEqual([pending, approved]);
        expect(signage_templates.show).toHaveBeenNthCalledWith(1, {
            id: 'template-1',
        });
        expect(signage_templates.show).toHaveBeenNthCalledWith(2, {
            id: 'template-1',
            approved: true,
        });
    });

    it('keeps the pending version when no approved version exists', async () => {
        const pending = signageTemplate({ id: 'template-1' });
        vi.mocked(signage_templates.show)
            .mockResolvedValueOnce(mockReply(pending))
            .mockRejectedValueOnce(new Error('Not found'));

        await expect(
            loadTemplateApprovalVersions('template-1'),
        ).resolves.toEqual([pending]);
    });

    it('omits an approved version with the same content', async () => {
        const version = {
            id: 'template-1',
            name: 'Template',
            layouts: [
                {
                    position: 'left' as const,
                    plugin_id: 'clock',
                    plugin_params: {},
                    x_pos: 0.2,
                },
            ],
        };
        const pending = signageTemplate({
            ...version,
            updated_at: '2026-08-20',
        });
        const approved = signageTemplate({
            ...version,
            approved: true,
            updated_at: '2026-08-19',
        });
        vi.mocked(signage_templates.show)
            .mockResolvedValueOnce(mockReply(pending))
            .mockResolvedValueOnce(mockReply(approved));

        await expect(
            loadTemplateApprovalVersions('template-1'),
        ).resolves.toEqual([pending]);
    });
});

describe('signageTemplateLayoutChanges', () => {
    it('lists the fields that differ between two layouts', () => {
        expect(
            signageTemplateLayoutChanges(
                {
                    position: 'floating',
                    plugin_id: 'clock',
                    plugin_params: { zone: { id: 'a' } },
                    x_pos: 0.5,
                    y_pos: null,
                },
                {
                    position: 'left',
                    plugin_id: 'clock',
                    plugin_params: {},
                    x_pos: 0.5,
                    y_pos: null,
                },
            ),
        ).toEqual(['position', 'y_pos', 'plugin_params']);
    });

    it('treats an unset position value as its displayed default', () => {
        expect(
            signageTemplateLayoutChanges(
                {
                    position: 'left',
                    plugin_id: null,
                    x_pos: null,
                    y_pos: null,
                    plugin_params: {},
                },
                {
                    position: 'left',
                    plugin_id: null,
                    x_pos: 0.2,
                    y_pos: null,
                    plugin_params: {},
                },
            ),
        ).toEqual([]);
    });
});

describe('merge flag approval changes', () => {
    it('retains both versions when only merge differs', async () => {
        const pending = signageTemplate({ id: 'template-1', merge: true });
        const approved = signageTemplate({
            id: 'template-1',
            merge: false,
        });
        vi.mocked(signage_templates.show)
            .mockResolvedValueOnce(mockReply(pending))
            .mockResolvedValueOnce(mockReply(approved));

        expect(await loadTemplateApprovalVersions('template-1')).toEqual([
            pending,
            approved,
        ]);
    });
});
