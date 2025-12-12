import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
    i18n,
    notifyError,
    notifySuccess,
    SettingsService,
    unique,
} from '@placeos/common';
import { IconComponent, TranslatePipe, ZonePipe } from '@placeos/components';
import {
    listSystemTriggers,
    SignagePlaylist,
    updateSystem,
    updateTrigger,
} from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SearchOverlayComponent } from './search-overlay.component';
import { SignageItemPlaylistsComponent } from './signage-item-playlists.component';
import { SignageStateService } from './signage-state.service';
import { ZoneSelectModalComponent } from './zone-select-modal.component';

@Component({
    selector: 'signage-displays',
    template: `
        <div class="relative flex h-full w-full space-x-2 overflow-visible">
            <div
                sidebar
                class="flex h-full w-64 flex-col space-y-2 overflow-auto rounded-xl border border-base-300 p-2"
            >
                <h3
                    class="rounded-lg bg-base-200 p-2 text-center text-xl font-medium"
                >
                    {{ 'APP.CONCIERGE.SIGNAGE_DISPLAYS' | translate }}
                </h3>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.SEARCH' | translate"
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                    />
                </mat-form-field>
                @if (displays().length > 0) {
                    <div class="h-1/2 w-full flex-1 space-y-2 overflow-auto">
                        @for (display of displays(); track display.id) {
                            <a
                                matRipple
                                class="relative z-10 flex h-12 min-h-12 w-full items-center truncate rounded-3xl border border-base-100 px-6 even:border-base-200 even:bg-base-200 hover:border-info"
                                [class.bg-secondary!]="
                                    selected() === display.id
                                "
                                [class.text-secondary-content]="
                                    selected() === display.id
                                "
                                [routerLink]="[]"
                                [queryParams]="{ display: display.id }"
                            >
                                {{ display.display_name || display.name }}
                            </a>
                            @if (
                                active_display()?.id === display.id &&
                                !switching()
                            ) {
                                @for (trigger of triggers(); track trigger.id) {
                                    <div
                                        class="relative z-0 flex items-center space-x-2"
                                    >
                                        <div class="w-6">
                                            <div
                                                class="absolute left-6 top-1/2 z-0 h-16 w-4 -translate-y-full border-b-2 border-l-2 border-base-300"
                                            ></div>
                                        </div>
                                        <a
                                            matRipple
                                            class="relative z-10 flex min-h-12 w-1/2 flex-1 items-center truncate rounded-3xl px-6 hover:bg-base-200"
                                            [class.bg-secondary!]="
                                                selected_trigger() ===
                                                trigger?.id
                                            "
                                            [class.text-secondary-content]="
                                                selected_trigger() ===
                                                trigger?.id
                                            "
                                            [routerLink]="[]"
                                            [queryParams]="{
                                                display: display.id,
                                                trigger: trigger?.id,
                                            }"
                                        >
                                            <span class="max-w-full truncate">{{
                                                trigger?.display_name ||
                                                    trigger?.name ||
                                                    'Trigger'
                                            }}</span>
                                        </a>
                                    </div>
                                }
                            }
                        }
                    </div>
                } @else {
                    <div
                        class="flex flex-col items-center justify-center space-y-2 p-8 opacity-30"
                    >
                        <icon class="text-6xl">hide_image</icon>
                        <p class="text-center">
                            {{
                                (search()
                                    ? 'APP.CONCIERGE.SIGNAGE_DISPLAYS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_DISPLAYS_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                }
            </div>
            <div
                class="relative flex h-full w-1/2 flex-1 flex-col space-y-2 overflow-auto rounded-lg border border-base-300 bg-base-200 p-2 shadow-sm"
            >
                @if (active_display()) {
                    @let display = active_display();
                    @let trigger = active_trigger();
                    <signage-item-playlists
                        class="flex flex-1 flex-col"
                        [item]="trigger || display"
                        [name]="trigger ? 'trigger' : 'display'"
                        [extra]="trigger ? '' : display?.orientation"
                        [link]="
                            trigger
                                ? ''
                                : signage_path +
                                  '/#/signage/' +
                                  display?.id +
                                  '?debug=true'
                        "
                        (add)="this.adding.set(true)"
                        (remove)="removePlaylist($event)"
                        (ondrop)="drop($event)"
                    >
                        @if (!trigger) {
                            <div
                                class="mt-2 flex flex-wrap items-center overflow-auto rounded-xl bg-base-100 p-1"
                            >
                                @for (zone of display?.zones; track zone) {
                                    <a
                                        class="m-1 whitespace-nowrap rounded-sm bg-base-200 px-2 py-1 font-mono text-xs"
                                        matRipple
                                        [routerLink]="['/signage', 'zones']"
                                        [queryParams]="{ zone: zone }"
                                    >
                                        {{
                                            (zone | zone | async)
                                                ?.display_name ||
                                                (zone | zone | async)?.name
                                        }}
                                    </a>
                                }
                                <button
                                    class="m-1 rounded-sm px-2 py-1 font-mono text-xs underline"
                                    matRipple
                                    (click)="addZone()"
                                >
                                    {{
                                        'APP.CONCIERGE.SIGNAGE_DISPLAYS_ZONE_ADD'
                                            | translate
                                    }}
                                </button>
                            </div>
                        }
                        <button
                            icon
                            matRipple
                            [matMenuTriggerFor]="menu"
                            class="absolute right-2 top-2 m-0!"
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <a
                                mat-menu-item
                                [href]="
                                    signage_path +
                                    '/#/signage/' +
                                    active_display()?.id +
                                    '?debug=true'
                                "
                                target="_blank"
                                ref="noopener noreferrer"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">open_in_new</icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_OPEN_PLAYER'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </a>
                            <button
                                mat-menu-item
                                [matMenuTriggerFor]="orientationMenu"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">aspect_ratio</icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_SET_ORIENTATION'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <mat-menu #orientationMenu="matMenu">
                                <button
                                    mat-menu-item
                                    (click)="setOrientation('landscape')"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"
                                            >crop_landscape</icon
                                        >
                                        <div>
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_LANDSCAPE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setOrientation('portrait')"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"
                                            >crop_portrait</icon
                                        >
                                        <div>
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_PORTRAIT'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setOrientation('square')"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"
                                            >check_box_outline_blank</icon
                                        >
                                        <div>
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_SQUARE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="setOrientation('unspecified')"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl"
                                            >question_mark</icon
                                        >
                                        <div>
                                            {{
                                                'APP.CONCIERGE.SIGNAGE_ORIENTATION_NONE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                            <button mat-menu-item (click)="removeDisplay()">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl text-error"
                                        >delete</icon
                                    >
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.SIGNAGE_DISPLAYS_REMOVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </signage-item-playlists>
                } @else {
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        <icon class="text-6xl">desktop_windows</icon>
                        <p>
                            {{
                                'APP.CONCIERGE.SIGNAGE_DISPLAYS_SELECT'
                                    | translate
                            }}
                        </p>
                    </div>
                }
                @if (adding()) {
                    <search-overlay
                        [item_list]="playlists()"
                        (selected)="addPlaylist($event)"
                        (close)="adding.set(false)"
                    ></search-overlay>
                }
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatMenuModule,
        SearchOverlayComponent,
        RouterModule,
        SignageItemPlaylistsComponent,
        ZonePipe,
    ],
})
export class SignageDisplaysComponent {
    private _state = inject(SignageStateService);
    private _route = inject(ActivatedRoute);
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public readonly adding = signal(false);
    public readonly switching = signal(false);
    public readonly search = signal('');
    public readonly loading = this._state.loading;

    private readonly _state_displays = toSignal(this._state.displays, {
        initialValue: [],
    });
    public readonly displays = computed(() => {
        const search_value = this.search().toLowerCase();
        const list = this._state_displays();
        return list.filter((_) => _.name.toLowerCase().includes(search_value));
    });

    public readonly selected = signal('');
    public readonly selected_trigger = signal('');

    public readonly active_display = computed(() => {
        const displays = this.displays();
        const id = this.selected();
        return displays.find((item) => item.id === id);
    });

    private readonly _triggers = signal<any[]>([]);
    public readonly triggers = this._triggers.asReadonly();

    public readonly active_trigger = computed(() => {
        const list = this.triggers();
        const id = this.selected_trigger();
        const sys_id = this.selected();
        return list.find(
            (item) => item.id === id && item.control_system_id === sys_id,
        );
    });

    private readonly _state_playlists = toSignal(this._state.playlists, {
        initialValue: [],
    });
    private readonly _state_has_changed = toSignal(this._state.has_changed, {
        initialValue: 0,
    });

    public readonly playlists = computed(() => {
        const display = this.active_display();
        const trigger = this.active_trigger();
        const playlists = this._state_playlists();
        this._state_has_changed(); // Track changes
        return playlists.filter(
            (_) => !(trigger || display)?.playlists.find((id) => _.id === id),
        );
    });

    public readonly removeDisplay = async () =>
        this._state.removeDisplay(this.active_display());

    public get signage_path() {
        return this._settings.get('app.signage_path') || '/signage';
    }

    constructor() {
        const queryParams = toSignal(this._route.queryParamMap);
        effect(() => {
            const params = queryParams();
            if (!params) return;
            this.switching.set(params.get('display') !== this.selected());
            this.selected.set(params.get('display') || '');
            this.selected_trigger.set(params.get('trigger') || '');
        });

        // Watch for changes to selected display and fetch triggers
        effect(() => {
            const id = this.selected();
            if (!id) {
                this._triggers.set([]);
                return;
            }
            listSystemTriggers(id)
                .pipe(
                    map((_) => _.data),
                    tap((_) =>
                        setTimeout(() => this.switching.set(false), 200),
                    ),
                )
                .subscribe((data) => this._triggers.set(data));
        });
    }

    public async addPlaylist(playlist: SignagePlaylist) {
        const display = this.active_display();
        const trigger = this.active_trigger();
        const item = trigger || display;
        const playlists = [...item.playlists, playlist.id];
        const method: any = trigger ? updateTrigger : updateSystem;
        await method(
            item.id,
            { playlists, version: display.version },
            'patch',
        ).toPromise();
        notifySuccess(
            i18n(
                trigger
                    ? 'APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_ADDED'
                    : 'APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLIST_ADDED',
            ),
        );
        this._state.changed();
        this.adding.set(false);
    }

    public async removePlaylist(playlist: SignagePlaylist) {
        const display = this.active_display();
        const trigger = this.active_trigger();
        const item = trigger || display;
        const playlists = item.playlists.filter((id) => playlist.id !== id);
        const method: any = trigger ? updateTrigger : updateSystem;
        await method(
            item.id,
            { playlists, version: display.version },
            'patch',
        ).toPromise();
        notifySuccess(
            i18n(
                trigger
                    ? 'APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REMOVED'
                    : 'APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLIST_REMOVED',
            ),
        );
        this._state.changed();
        this.adding.set(false);
    }

    public async drop(event: CdkDragDrop<SignagePlaylist[]>) {
        const display = this.active_display();
        const trigger = this.active_trigger();
        const item = trigger || display;
        const old_playlist = item.playlists;
        const playlists = [...old_playlist];
        moveItemInArray(playlists, event.previousIndex, event.currentIndex);
        (item as any).playlists = playlists;
        this._state.changed();
        const method: any = trigger ? updateTrigger : updateSystem;
        await method(item.id, { playlists, version: display.version }, 'patch')
            .toPromise()
            .catch((e) => {
                (item as any).playlists = old_playlist;
                this._state.changed();
                throw e;
            });
        notifySuccess(
            i18n(
                trigger
                    ? 'APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REORDER'
                    : 'APP.CONCIERGE.SIGNAGE_DISPLAYS_PLAYLIST_REORDER',
            ),
        );
        this._state.changed();
    }

    public async setOrientation(orientation: any) {
        const display = this.active_display();
        if (!display) return;
        await lastValueFrom(
            updateSystem(
                display.id,
                { orientation, version: display.version },
                'patch',
            ),
        ).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.SIGNAGE_ORIENTATION_ERROR', {
                    error: e.message,
                }),
            );
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_ORIENTATION_CHANGED'));
        this._state.changed();
    }

    public async addZone() {
        const display = this.active_display();
        if (!display) return;
        const ref = this._dialog.open(ZoneSelectModalComponent, {
            data: { ignore: display.zones },
        });
        const result = await lastValueFrom(ref.afterClosed());
        if (!result) return;
        await lastValueFrom(
            updateSystem(
                display.id,
                {
                    zones: unique([...display.zones, result]),
                    version: display.version,
                },
                'patch',
            ),
        ).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.SIGNAGE_ZONE_ERROR', {
                    error: e.message,
                }),
            );
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.SIGNAGE_ZONE_ADDED'));
        this._state.changed();
    }
}
