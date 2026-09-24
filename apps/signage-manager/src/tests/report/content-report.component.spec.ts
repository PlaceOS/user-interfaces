import { TestBed } from '@angular/core/testing';
import { ContentReportComponent } from '../../app/report/content-report.component';
import { SignageService } from '../../app/signage.service';

describe('ContentReportComponent', () => {
    const flush = () => new Promise((resolve) => setTimeout(resolve));
    const load_report = vi.fn();
    const preview_media = vi.fn();

    async function make() {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: SignageService,
                    useValue: {
                        loadContentReport: load_report,
                        previewMedia: preview_media,
                    },
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
        load_report.mockResolvedValue({
            empty_displays: [
                { id: 'd1', name: 'SIGNAGE 1', display_name: 'Lobby' },
            ],
            unassigned_playlists: [],
            expired_playlists: [],
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
            'unassigned-playlists': [],
            'expired-playlists': [],
            'expired-media': ['Poster | News, Cafe'],
        });
    });

    it('links displays and playlists, and previews media', async () => {
        const component = await make();
        const [conflicts, empty_displays, , , expired_media] =
            component.sections();

        expect(conflicts.rows[0].route).toEqual(['/displays', 'd2']);
        expect(empty_displays.rows[0].route).toEqual(['/displays', 'd1']);
        component.preview(expired_media.rows[0].media);
        expect(preview_media).toHaveBeenCalledWith({
            id: 'm1',
            name: 'Poster',
        });
    });
});
