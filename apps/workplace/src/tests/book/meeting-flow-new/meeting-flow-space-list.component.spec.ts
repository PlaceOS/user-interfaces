import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SETTING_KEYS, settingSignal, SettingsService } from '@placeos/common';
import { LevelPipe } from '@placeos/components';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { EventFormService } from '@placeos/events';
import { MockPipe, MockProvider } from 'ng-mocks';
import { mockDirective } from '@placeos/common/tests';
import { MeetingFlowSpaceListComponent } from '../../../app/book/meeting-flow-new/meeting-flow-space-list.component';

describe('MeetingFlowSpaceListComponent', () => {
    let spectator: Spectator<MeetingFlowSpaceListComponent>;
    let loading: ReturnType<typeof signal<boolean>>;
    let available_spaces: ReturnType<typeof signal<any[]>>;
    let room_alerts: ReturnType<typeof signal<Record<string, any>>>;
    let save_user_setting: jest.Mock;

    const makeSpaces = (count: number) =>
        Array.from({ length: count }, (_, i) => ({
            id: `space-${i}`,
            name: `Space ${i}`,
            capacity: 4,
            zones: ['level-1'],
            images: [],
            features: [],
        }));

    const createComponent = createComponentFactory({
        component: MeetingFlowSpaceListComponent,
        detectChanges: false,
        overrideComponents: [
            [
                MeetingFlowSpaceListComponent,
                {
                    remove: {
                        imports: [LevelPipe, AuthenticatedImageDirective],
                    },
                    add: {
                        imports: [
                            MockPipe(LevelPipe, () => ({
                                display_name: 'Level 1',
                            })) as any,
                            mockDirective(AuthenticatedImageDirective as any),
                        ],
                    },
                },
            ],
        ],
        providers: [
            {
                provide: EventFormService,
                useFactory: () => ({
                    loading,
                    available_spaces,
                    room_alerts,
                }),
            },
            MockProvider(SettingsService, {
                saveUserSetting: (save_user_setting = jest.fn()),
            } as any),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        loading = signal(false);
        available_spaces = signal(makeSpaces(3));
        room_alerts = signal({});
        settingSignal<string[]>(SETTING_KEYS.FAVORITE_ROOMS, [], true).set([]);
        spectator = createComponent();
    });

    it('should render an item per available space', () => {
        spectator.detectChanges();
        expect(spectator.queryAll('li[space]').length).toBe(3);
    });

    it('should show the empty state when no spaces are available', () => {
        available_spaces.set([]);
        spectator.detectChanges();
        expect(spectator.query('[empty]')).toExist();
        expect(spectator.query('li[space]')).not.toExist();
    });

    it('should show a loading indicator while spaces are loading', () => {
        loading.set(true);
        spectator.detectChanges();
        expect(spectator.query('[loading]')).toExist();
        expect(spectator.query('li[space]')).not.toExist();
    });

    it('should emit the selected space when its button is clicked', () => {
        const emitted: any[] = [];
        spectator.output('space_selected').subscribe((v) => emitted.push(v));
        spectator.detectChanges();
        spectator.click(spectator.query('button[name="select-space"]'));
        expect(emitted[0]).toEqual(
            expect.objectContaining({ id: 'space-0' }),
        );
    });

    it('should compute pagination bounds from the space count', () => {
        available_spaces.set(makeSpaces(25));
        expect(spectator.component.max_pages()).toBe(3);
        expect(spectator.component.active_range()).toEqual([1, 10]);

        spectator.component.page.set(2);
        expect(spectator.component.active_range()).toEqual([21, 25]);
    });

    it('should only render a page worth of spaces', () => {
        available_spaces.set(makeSpaces(25));
        spectator.detectChanges();
        expect(spectator.queryAll('li[space]').length).toBe(10);
    });

    it('should toggle a space in and out of favourites and persist it', () => {
        const space = { id: 'space-0' } as any;
        spectator.component.toggleFavourite(space);
        expect(spectator.component.favourites()).toContain('space-0');
        expect(save_user_setting).toHaveBeenLastCalledWith(
            SETTING_KEYS.FAVORITE_ROOMS,
            ['space-0'],
        );

        spectator.component.toggleFavourite(space);
        expect(spectator.component.favourites()).not.toContain('space-0');
        expect(save_user_setting).toHaveBeenLastCalledWith(
            SETTING_KEYS.FAVORITE_ROOMS,
            [],
        );
    });

    it('should disable selection for spaces flagged as closed', () => {
        room_alerts.set({ 'space-0': ['closed', 'Room is closed'] });
        spectator.detectChanges();
        const first_button = spectator.query('button[name="select-space"]');
        expect(first_button).toHaveClass('pointer-events-none');
    });
});
