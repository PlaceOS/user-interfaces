import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { SignageStateService } from './signage-state.service';
import {
    map,
    shareReplay,
    startWith,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AsyncHandler, notifySuccess, unique } from '@placeos/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
    listZoneTriggers,
    SignagePlaylist,
    updateTrigger,
    updateZone,
} from '@placeos/ts-client';

@Component({
    selector: 'signage-zones',
    template: `
        <div class="relative h-full w-full overflow-visible flex space-x-4">
            <div sidebar class="w-64 h-full flex flex-col space-y-4 py-4">
                <h3 class="text-xl font-medium text-center">Zones</h3>
                <mat-form-field
                    appearance="outline"
                    class="w-full no-subscript"
                >
                    <input
                        matInput
                        placeholder="Search..."
                        [ngModel]="search.getValue()"
                        (ngModelChange)="search.next($event)"
                    />
                </mat-form-field>
                @if ((zones | async)?.length > 0) {
                    <div class="h-1/2 flex-1 w-full overflow-auto space-y-2">
                        @for (zone of zones | async; track zone.id) {
                            <a
                                matRipple
                                class="w-full px-6 rounded-3xl min-h-12 flex items-center hover:bg-base-200 truncate z-10"
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
                                        class="relative flex items-center space-x-2 z-0"
                                    >
                                        <div class="w-6">
                                            <div
                                                class="absolute h-16 w-4 border-b-2 border-l-2 border-base-300 top-1/2 left-6 -translate-y-full"
                                            ></div>
                                        </div>
                                        <a
                                            matRipple
                                            class="w-full px-6 rounded-3xl min-h-12 flex items-center hover:bg-base-200 truncate"
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
                        class="flex flex-col items-center justify-center p-8 space-y-2 opacity-30"
                    >
                        <app-icon class="text-6xl">hide_image</app-icon>
                        <p class="text-center">
                            {{
                                search.getValue()
                                    ? 'No matching zones found'
                                    : 'No zones'
                            }}
                        </p>
                    </div>
                }
            </div>
            <div
                class="relative flex flex-col flex-1 w-1/2 h-full overflow-auto rounded-lg border border-base-300 p-4 shadow space-y-4"
            >
                @if (active_zone | async) {
                    <signage-item-playlists
                        class="flex flex-col flex-1"
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
                        <app-icon class="text-6xl">desktop_windows</app-icon>
                        <p>Select a zone from the left to view playlists</p>
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
})
export class SignageZonesComponent extends AsyncHandler {
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
        console.log('Add Playlist:', playlist);
        const zone = await this.active_zone.pipe(take(1)).toPromise();
        const trigger = await this.active_trigger.pipe(take(1)).toPromise();
        const item = trigger || zone;
        const playlists = [...item.playlists, playlist.id];
        const method: any = trigger ? updateTrigger : updateZone;
        await method(
            item.id,
            { playlists, version: zone.version },
            'patch',
        ).toPromise();
        notifySuccess(
            `Successfully added playlist to the ${trigger ? 'trigger' : 'zone'}`,
        );
        this._state.changed();
        this.adding = false;
    }

    public async removePlaylist(playlist: SignagePlaylist) {
        const zone = await this.active_zone.pipe(take(1)).toPromise();
        const trigger = await this.active_trigger.pipe(take(1)).toPromise();
        const item = trigger || zone;
        const playlists = item.filter((id) => playlist.id !== id);
        const method: any = trigger ? updateTrigger : updateZone;
        await method(
            item.id,
            { playlists, version: zone.version },
            'patch',
        ).toPromise();
        notifySuccess(
            `Successfully removed playlist from ${trigger ? 'trigger' : 'zone'}`,
        );
        this._state.changed();
        this.adding = false;
    }

    public async drop(event: CdkDragDrop<SignagePlaylist[]>) {
        const zone = await this.active_zone.pipe(take(1)).toPromise();
        const trigger = await this.active_trigger.pipe(take(1)).toPromise();
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
            `Successfully re-ordered playlists on ${trigger ? 'trigger' : 'zone'}`,
        );
        this._state.changed();
    }
}
