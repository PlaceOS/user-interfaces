import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    AsyncHandler,
    i18n,
    nextValueFrom,
    notifySuccess,
    SettingsService,
} from '@placeos/common';
import {
    listSystemTriggers,
    SignagePlaylist,
    updateSystem,
    updateTrigger,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-displays',
    template: `
        <div class="relative flex h-full w-full space-x-4 overflow-visible">
            <div sidebar class="flex h-full w-64 flex-col space-y-4 py-4">
                <h3 class="text-center text-xl font-medium">
                    {{ 'APP.CONCIERGE.SIGNAGE_DISPLAYS' | translate }}
                </h3>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        [placeholder]="'COMMON.SEARCH' | translate"
                        [ngModel]="search.getValue()"
                        (ngModelChange)="search.next($event)"
                    />
                </mat-form-field>
                @if ((displays | async)?.length > 0) {
                    <div class="h-1/2 w-full flex-1 space-y-2 overflow-auto">
                        @for (display of displays | async; track display.id) {
                            <a
                                matRipple
                                class="z-10 flex min-h-12 w-full items-center truncate rounded-3xl px-6 hover:bg-base-200"
                                [class.!bg-secondary]="
                                    selected.getValue() === display.id
                                "
                                [class.text-secondary-content]="
                                    selected.getValue() === display.id
                                "
                                [routerLink]="[]"
                                [queryParams]="{ display: display.id }"
                            >
                                {{ display.display_name || display.name }}
                            </a>
                            @if (
                                (active_display | async)?.id === display.id &&
                                !switching
                            ) {
                                @for (
                                    trigger of triggers | async;
                                    track trigger.id
                                ) {
                                    <div
                                        class="relative z-0 flex items-center space-x-2"
                                    >
                                        <div class="w-6">
                                            <div
                                                class="absolute left-6 top-1/2 h-16 w-4 -translate-y-full border-b-2 border-l-2 border-base-300"
                                            ></div>
                                        </div>
                                        <a
                                            matRipple
                                            class="flex min-h-12 w-1/2 flex-1 items-center truncate rounded-3xl px-6 hover:bg-base-200"
                                            [class.!bg-secondary]="
                                                selected_trigger.getValue() ===
                                                trigger?.id
                                            "
                                            [class.text-secondary-content]="
                                                selected_trigger.getValue() ===
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
                                (search.getValue()
                                    ? 'APP.CONCIERGE.SIGNAGE_DISPLAYS_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_DISPLAYS_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                }
            </div>
            <div
                class="relative flex h-full w-1/2 flex-1 flex-col space-y-4 overflow-auto rounded-lg border border-base-300 p-4 shadow"
            >
                @if (active_display | async) {
                    <signage-item-playlists
                        class="flex flex-1 flex-col"
                        [item]="
                            (active_trigger | async) || (active_display | async)
                        "
                        [name]="
                            (active_trigger | async) ? 'trigger' : 'display'
                        "
                        [extra]="
                            (active_trigger | async)
                                ? ''
                                : (active_display | async)?.orientation
                        "
                        (add)="this.adding = true"
                        (remove)="removePlaylist($event)"
                        (ondrop)="drop($event)"
                    >
                        <div
                            class="mt-4 flex flex-wrap items-center overflow-auto"
                            *ngIf="!(active_trigger | async)"
                        >
                            @for (
                                zone of (active_display | async)?.zones;
                                track zone
                            ) {
                                <a
                                    class="m-1 whitespace-nowrap rounded bg-base-200 px-2 py-1 font-mono text-xs"
                                    matRipple
                                    [routerLink]="['/signage', 'zones']"
                                    [queryParams]="{ zone: zone }"
                                >
                                    {{
                                        (zone | zone | async)?.display_name ||
                                            (zone | zone | async)?.name
                                    }}
                                </a>
                            }
                            <button
                                class="m-1 rounded px-2 py-1 font-mono text-xs underline"
                                matRipple
                            >
                                {{
                                    'APP.CONCIERGE.SIGNAGE_DISPLAYS_ZONE_ADD'
                                        | translate
                                }}
                            </button>
                        </div>
                        <button
                            icon
                            matRipple
                            [matMenuTriggerFor]="menu"
                            class="absolute right-2 top-2 !m-0"
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <a
                                mat-menu-item
                                [href]="
                                    signage_path +
                                    '/#/signage/' +
                                    (active_display | async)?.id
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
                <search-overlay
                    *ngIf="adding"
                    [item_list]="playlists | async"
                    (selected)="addPlaylist($event)"
                    (close)="adding = false"
                ></search-overlay>
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class SignageDisplaysComponent extends AsyncHandler implements OnInit {
    public adding = false;
    public switching = false;
    public readonly search = new BehaviorSubject<string>('');
    public readonly loading = this._state.loading;
    public readonly displays = combineLatest([
        this.search,
        this._state.displays,
    ]).pipe(
        map(([search, list]) =>
            list.filter((_) =>
                _.name.toLowerCase().includes(search.toLowerCase()),
            ),
        ),
    );
    public readonly selected = new BehaviorSubject('');
    public readonly selected_trigger = new BehaviorSubject('');
    public readonly active_display = combineLatest([
        this.displays,
        this.selected,
    ]).pipe(map(([displays, id]) => displays.find((item) => item.id === id)));

    public readonly triggers = this.selected.pipe(
        switchMap((id) => listSystemTriggers(id)),
        map((_) => _.data),
        tap((_) => setTimeout(() => (this.switching = false), 200)),
        shareReplay(1),
    );

    public readonly active_trigger = combineLatest([
        this.triggers,
        this.selected_trigger,
        this.selected,
    ]).pipe(
        map(([list, id, sys_id]) =>
            list.find(
                (item) => item.id === id && item.control_system_id === sys_id,
            ),
        ),
    );

    public readonly playlists = combineLatest([
        this.active_display,
        this.active_trigger,
        this._state.playlists,
        this._state.has_changed,
    ]).pipe(
        map(([display, trigger, playlists]) =>
            playlists.filter(
                (_) =>
                    !(trigger || display)?.playlists.find((id) => _.id === id),
            ),
        ),
    );

    public readonly removeDisplay = async () =>
        this._state.removeDisplay(await nextValueFrom(this.active_display));

    public get signage_path() {
        return this._settings.get('app.signage_path') || '/signage';
    }

    constructor(
        private _state: SignageStateService,
        private _route: ActivatedRoute,
        private _settings: SettingsService,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.queryParamMap.subscribe((params) => {
                this.switching =
                    params.get('display') !== this.selected.getValue();
                this.selected.next(params.get('display') || '');
                this.selected_trigger.next(params.get('trigger') || '');
            }),
        );
    }

    public async addPlaylist(playlist: SignagePlaylist) {
        const display = await nextValueFrom(this.active_display);
        const trigger = await nextValueFrom(this.active_trigger);
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
        this.adding = false;
    }

    public async removePlaylist(playlist: SignagePlaylist) {
        const display = await nextValueFrom(this.active_display);
        const trigger = await nextValueFrom(this.active_trigger);
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
        this.adding = false;
    }

    public async drop(event: CdkDragDrop<SignagePlaylist[]>) {
        const display = await nextValueFrom(this.active_display);
        const trigger = await nextValueFrom(this.active_trigger);
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
}
