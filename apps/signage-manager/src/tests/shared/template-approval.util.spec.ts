import { showSignageTemplate, SignageTemplate } from '@placeos/ts-client';
import {
    loadTemplateApprovalVersions,
    signageTemplateLayoutChanges,
} from '../../app/shared/template-approval.util';

vi.mock('@placeos/ts-client', { spy: true });

describe('loadTemplateApprovalVersions', () => {
    beforeEach(() => vi.clearAllMocks());

    it('loads the pending and approved template versions', async () => {
        const pending = new SignageTemplate({
            id: 'template-1',
            name: 'Pending',
        });
        const approved = new SignageTemplate({
            id: 'template-1',
            name: 'Approved',
            approved: true,
        });
        vi.mocked(showSignageTemplate)
            .mockResolvedValueOnce(pending)
            .mockResolvedValueOnce(approved);

        await expect(
            loadTemplateApprovalVersions('template-1'),
        ).resolves.toEqual([pending, approved]);
        expect(showSignageTemplate).toHaveBeenNthCalledWith(1, 'template-1');
        expect(showSignageTemplate).toHaveBeenNthCalledWith(2, 'template-1', {
            approved: true,
        });
    });

    it('keeps the pending version when no approved version exists', async () => {
        const pending = new SignageTemplate({ id: 'template-1' });
        vi.mocked(showSignageTemplate)
            .mockResolvedValueOnce(pending)
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
        const pending = new SignageTemplate({
            ...version,
            updated_at: '2026-08-20',
        });
        const approved = new SignageTemplate({
            ...version,
            approved: true,
            updated_at: '2026-08-19',
        });
        vi.mocked(showSignageTemplate)
            .mockResolvedValueOnce(pending)
            .mockResolvedValueOnce(approved);

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
                },
                {
                    position: 'left',
                    plugin_id: 'clock',
                    plugin_params: {},
                    x_pos: 0.5,
                },
            ),
        ).toEqual(['position', 'y_pos', 'plugin_params']);
    });

    it('treats an unset position value as its displayed default', () => {
        expect(
            signageTemplateLayoutChanges(
                { position: 'left', plugin_params: {} },
                { position: 'left', plugin_params: {}, x_pos: 0.2 },
            ),
        ).toEqual([]);
    });
});

describe('merge flag approval changes', () => {
    it('retains both versions when only merge differs', async () => {
        const pending = new SignageTemplate({ id: 'template-1', merge: true });
        const approved = new SignageTemplate({
            id: 'template-1',
            merge: false,
        });
        vi.mocked(showSignageTemplate)
            .mockResolvedValueOnce(pending)
            .mockResolvedValueOnce(approved);

        expect(await loadTemplateApprovalVersions('template-1')).toEqual([
            pending,
            approved,
        ]);
    });
});
