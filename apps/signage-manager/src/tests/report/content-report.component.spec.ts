import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MediaPreviewService } from '../../app/media/media-preview.service';
import { ContentReportComponent } from '../../app/report/content-report.component';
import { SignageInventoryService } from '../../app/signage-inventory.service';

describe('ContentReportComponent', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const load_report = vi.fn();
    const preview_media = vi.fn();
    const inventory_key = signal({ group_id: 'g-1', change: 1 });

    async function make() {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: SignageInventoryService,
                    useValue: {
                        inventory_key,
                        loadContentReport: load_report,
                    },
                },
                {
                    provide: MediaPreviewService,
                    useValue: { previewMedia: preview_media },
                },
            ],
        }).overrideComponent(ContentReportComponent, {
            set: { template: '' },
        });
        const component = TestBed.createComponent(
            ContentReportComponent,
        ).componentInstance;
        TestBed.tick();
        await flush();
        return component;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        inventory_key.set({ group_id: 'g-1', change: 1 });
        load_report.mockResolvedValue({
            expired_media_unchecked: 0,
            checked_at: new Date(2026, 8, 20).valueOf(),
            empty_displays: [
                { id: 'd1', name: 'SIGNAGE 1', display_name: 'Lobby' },
            ],
            offline_displays: [{ id: 'd3', name: 'Hall' }],
            unassigned_playlists: [],
            expired_playlists: [],
            // Its last schedule ends before its own end date
            expiring_playlists: [
                {
                    id: 'p1',
                    name: 'Sale',
                    valid_until: new Date(2026, 8, 25).valueOf() / 1000,
                    schedules: [
                        { valid_until: new Date(2026, 8, 22).valueOf() / 1000 },
                    ],
                },
            ],
            expired_media: [
                {
                    media: { id: 'm1', name: 'Poster' },
                    playlists: [{ name: 'News' }, { name: 'Cafe' }],
                },
            ],
            conflicts: [
                {
                    display: { id: 'd2', name: 'Cafe' },
                    playlists: [
                        { id: 'a', name: 'Fire drill' },
                        { id: 'b', name: 'Launch' },
                    ],
                    starts_at: new Date(2026, 8, 28, 9, 30),
                    ends_at: new Date(2026, 8, 28, 10),
                },
            ],
        });
    });

    it('builds a section with rows for each kind of problem', async () => {
        const component = await make();
        const rows = Object.fromEntries(
            component
                .sections()
                .map((section) => [
                    section.id,
                    section.rows.map(
                        ({ label, detail }) => `${label} | ${detail}`,
                    ),
                ]),
        );

        expect(rows).toEqual({
            conflicts: ['Fire drill · Launch | Cafe · Mon 28 Sep, 09:30'],
            'empty-displays': ['Lobby | '],
            'offline-displays': ['Hall | Offline · Never seen'],
            'unassigned-playlists': [],
            'expired-playlists': [],
            'expiring-playlists': ['Sale | 22 Sep 2026'],
            'expired-media': ['Poster | News, Cafe'],
        });
    });

    it('links displays and playlists, and previews media', async () => {
        const component = await make();
        const sections = Object.fromEntries(
            component.sections().map((section) => [section.id, section]),
        );
        const conflicts = sections['conflicts'];
        const empty_displays = sections['empty-displays'];
        const expired_media = sections['expired-media'];

        expect(conflicts.rows[0].route).toEqual(['/displays', 'd2']);
        expect(empty_displays.rows[0].route).toEqual(['/displays', 'd1']);
        component.preview(expired_media.rows[0].media);
        expect(preview_media).toHaveBeenCalledWith({
            id: 'm1',
            name: 'Poster',
        });
    });

    it('loads again when the group changes', async () => {
        await make();
        inventory_key.set({ group_id: 'g-2', change: 1 });
        TestBed.tick();
        await flush();

        expect(load_report).toHaveBeenCalledTimes(2);
    });

    it('warns when some expired media was not checked', async () => {
        load_report.mockResolvedValue({
            ...(await load_report()),
            expired_media: [],
            expired_media_unchecked: 3,
        });
        const component = await make();
        const expired_media = component
            .sections()
            .find(({ id }) => id === 'expired-media');

        expect(expired_media?.note).toBe(
            'The report did not check 3 more expired media items.',
        );
    });
});
