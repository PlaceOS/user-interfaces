import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    AsyncHandler,
    i18n,
    nextValueFrom,
    notifySuccess,
} from '@placeos/common';
import {
    listZoneTriggers,
    SignagePlaylist,
    updateTrigger,
    updateZone,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-zones',
    template: `
        <div class="relative flex h-full w-full space-x-4 overflow-visible">
            <div sidebar class="flex h-full w-64 flex-col space-y-4 py-4">
                <h3 class="text-center text-xl font-medium">
                    {{ 'APP.CONCIERGE.SIGNAGE_ZONES' | translate }}
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
                @if ((zones | async)?.length > 0) {
                    <div class="h-1/2 w-full flex-1 space-y-2 overflow-auto">
                        @for (zone of zones | async; track zone.id) {
                            <a
                                matRipple
                                class="z-10 flex min-h-12 w-full items-center truncate rounded-3xl px-6 hover:bg-base-200"
                                [class.!bg-secondary]="
                                    selected.getValue() === zone.id
                                "
                                [class.text-secondary-content]="
                                    selected.getValue() === zone.id
                                "
                                [routerLink]="[]"
                                [queryParams]="{ zone: zone.id }"
                            >
                                {{ zone.display_name || zone.name }}
                            </a>
                            @if (
                                (active_zone | async)?.id === zone.id &&
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
                                            class="flex min-h-12 w-full items-center truncate rounded-3xl px-6 hover:bg-base-200"
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
                                                zone: zone.id,
                                                trigger: trigger?.id,
                                            }"
                                        >
                                            {{
                                                trigger?.display_name ||
                                                    trigger?.name ||
                                                    'Trigger'
                                            }}
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
                                    ? 'APP.CONCIERGE.SIGNAGE_ZONES_SEARCH_EMPTY'
                                    : 'APP.CONCIERGE.SIGNAGE_ZONES_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                }
            </div>
            <div
                class="relative flex h-full w-1/2 flex-1 flex-col space-y-4 overflow-auto rounded-lg border border-base-300 p-4 shadow"
            >
                @if (active_zone | async) {
                    <signage-item-playlists
                        class="flex flex-1 flex-col"
                        [item]="
                            (active_trigger | async) || (active_zone | async)
                        "
                        [name]="(active_trigger | async) ? 'trigger' : 'zone'"
                        (add)="this.adding = true"
                        (remove)="removePlaylist($event)"
                        (ondrop)="drop($event)"
                    ></signage-item-playlists>
                } @else {
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        <icon class="text-6xl">desktop_windows</icon>
                        <p>
                            {{
                                'APP.CONCIERGE.SIGNAGE_ZONES_SELECT' | translate
                            }}
                        </p>
                    </div>
                }
                @if (adding) {
                    <search-overlay
                        [item_list]="playlists | async"
                        (selected)="addPlaylist($event)"
                        (close)="adding = false"
                    ></search-overlay>
                }
            </div>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class SignageZonesComponent extends AsyncHandler implements OnInit {
    public adding = false;
    public switching = false;
    public readonly search = new BehaviorSubject<string>('');
    public readonly loading = this._state.loading;
    public readonly zones = combineLatest([
        this.search,
        this._state.zones,
    ]).pipe(
        map(([search, list]) =>
            list.filter((_) =>
                _.name.toLowerCase().includes(search.toLowerCase()),
            ),
        ),
    );
    public readonly selected = new BehaviorSubject('');
    public readonly selected_trigger = new BehaviorSubject('');
    public readonly active_zone = combineLatest([
        this.zones,
        this.selected,
    ]).pipe(map(([zones, id]) => zones.find((item) => item.id === id)));

    public readonly triggers = this.selected.pipe(
        switchMap((id) => listZoneTriggers(id)),
        map((_) => _.data),
        tap((_) => setTimeout(() => (this.switching = false), 100)),
        shareReplay(1),
    );

    public readonly active_trigger = combineLatest([
        this.triggers,
        this.selected_trigger,
    ]).pipe(map(([list, id]) => list.find((item) => item.id === id)));

    public readonly playlists = combineLatest([
        this.active_zone,
        this.active_trigger,
        this._state.playlists,
        this._state.has_changed,
    ]).pipe(
        map(([zone, trigger, playlists]) =>
            playlists.filter(
                (_) => !(trigger || zone)?.playlists.find((id) => _.id === id),
            ),
        ),
    );

    constructor(
        private _state: SignageStateService,
        private _route: ActivatedRoute,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.queryParamMap.subscribe((params) => {
                this.switching =
                    params.get('zone') !== this.selected.getValue();
                this.selected.next(params.get('zone') || '');
                this.selected_trigger.next(params.get('trigger') || '');
            }),
        );
    }

    public async addPlaylist(playlist: SignagePlaylist) {
        const zone = await nextValueFrom(this.active_zone);
        const trigger = await nextValueFrom(this.active_trigger);
        const item = trigger || zone;
        const playlists = [...item.playlists, playlist.id];
        const method: any = trigger ? updateTrigger : updateZone;
        await method(
            item.id,
            { playlists, version: zone.version },
            'patch',
        ).toPromise();
        notifySuccess(
            i18n(
                trigger
                    ? 'APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_ADDED'
                    : 'APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_ADDED',
            ),
        );
        this._state.changed();
        this.adding = false;
    }

    public async removePlaylist(playlist: SignagePlaylist) {
        const zone = await nextValueFrom(this.active_zone);
        const trigger = await nextValueFrom(this.active_trigger);
        const item = trigger || zone;
        const playlists = item.filter((id) => playlist.id !== id);
        const method: any = trigger ? updateTrigger : updateZone;
        await method(
            item.id,
            { playlists, version: zone.version },
            'patch',
        ).toPromise();
        notifySuccess(
            i18n(
                trigger
                    ? 'APP.CONCIERGE.SIGNAGE_TRIGGERS_PLAYLIST_REMOVE'
                    : 'APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_REMOVE',
            ),
        );
        this._state.changed();
        this.adding = false;
    }

    public async drop(event: CdkDragDrop<SignagePlaylist[]>) {
        const zone = await nextValueFrom(this.active_zone);
        const trigger = await nextValueFrom(this.active_trigger);
        const item = trigger || zone;
        const old_playlist = item.playlists;
        const playlists = [...old_playlist];
        moveItemInArray(playlists, event.previousIndex, event.currentIndex);
        (item as any).playlists = playlists;
        this._state.changed();
        const method: any = trigger ? updateTrigger : updateZone;
        await method(item.id, { playlists, version: zone.version }, 'patch')
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
                    : 'APP.CONCIERGE.SIGNAGE_ZONES_PLAYLIST_REORDER',
            ),
        );
        this._state.changed();
    }
}
