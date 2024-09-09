import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { SignageStateService } from './signage-state.service';
import {
    debounce,
    debounceTime,
    map,
    shareReplay,
    startWith,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {
    AsyncHandler,
    notifySuccess,
    SettingsService,
    unique,
} from '@placeos/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
    listSystemTriggers,
    SignagePlaylist,
    updateSystem,
    updateTrigger,
} from '@placeos/ts-client';

@Component({
    selector: 'signage-displays',
    template: `
        <div class="relative h-full w-full overflow-visible flex space-x-4">
            <div sidebar class="w-64 h-full flex flex-col space-y-4 py-4">
                <h3 class="text-xl font-medium text-center">Displays</h3>
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
                @if ((displays | async)?.length > 0) {
                    <div class="h-1/2 flex-1 w-full overflow-auto space-y-2">
                        @for (display of displays | async; track display.id) {
                            <a
                                matRipple
                                class="w-full px-6 rounded-3xl min-h-12 flex items-center hover:bg-base-200 truncate z-10"
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
                                        class="relative flex items-center space-x-2 z-0"
                                    >
                                        <div class="w-6">
                                            <div
                                                class="absolute h-16 w-4 border-b-2 border-l-2 border-base-300 top-1/2 left-6 -translate-y-full"
                                            ></div>
                                        </div>
                                        <a
                                            matRipple
                                            class="w-1/2 flex-1 px-6 rounded-3xl min-h-12 flex items-center hover:bg-base-200 truncate"
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
                        class="flex flex-col items-center justify-center p-8 space-y-2 opacity-30"
                    >
                        <app-icon class="text-6xl">hide_image</app-icon>
                        <p class="text-center">
                            {{
                                search.getValue()
                                    ? 'No matching displays found'
                                    : 'No displays'
                            }}
                        </p>
                    </div>
                }
            </div>
            <div
                class="relative flex flex-col flex-1 w-1/2 h-full overflow-auto rounded-lg border border-base-300 p-4 shadow space-y-4"
            >
                @if (active_display | async) {
                    <signage-item-playlists
                        class="flex flex-col flex-1"
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
                        [link]="
                            (active_trigger | async)
                                ? ''
                                : signage_path + '/#/signage/'
                        "
                        (add)="this.adding = true"
                        (remove)="removePlaylist($event)"
                        (ondrop)="drop($event)"
                    >
                        <div
                            class="flex flex-wrap items-center overflow-auto mt-4"
                            *ngIf="!(active_trigger | async)"
                        >
                            @for (
                                zone of (active_display | async)?.zones;
                                track zone
                            ) {
                                <a
                                    class="px-2 py-1 font-mono text-xs bg-base-200 rounded whitespace-nowrap m-1"
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
                                class="underline font-mono text-xs px-2 py-1 rounded m-1"
                                matRipple
                            >
                                Add Zone
                            </button>
                        </div>
                    </signage-item-playlists>
                } @else {
                    <div
                        class="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        <app-icon class="text-6xl">desktop_windows</app-icon>
                        <p>Select a display from the left to view playlists</p>
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
export class SignageDisplaysComponent extends AsyncHandler {
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
        const display = await this.active_display.pipe(take(1)).toPromise();
        const trigger = await this.active_trigger.pipe(take(1)).toPromise();
        const item = trigger || display;
        const playlists = [...item.playlists, playlist.id];
        const method: any = trigger ? updateTrigger : updateSystem;
        await method(
            item.id,
            { playlists, version: display.version },
            'patch',
        ).toPromise();
        notifySuccess(
            `Successfully added playlist to the ${trigger ? 'trigger' : 'display'}`,
        );
        this._state.changed();
        this.adding = false;
    }

    public async removePlaylist(playlist: SignagePlaylist) {
        const display = await this.active_display.pipe(take(1)).toPromise();
        const trigger = await this.active_trigger.pipe(take(1)).toPromise();
        const item = trigger || display;
        const playlists = item.playlists.filter((id) => playlist.id !== id);
        const method: any = trigger ? updateTrigger : updateSystem;
        await method(
            item.id,
            { playlists, version: display.version },
            'patch',
        ).toPromise();
        notifySuccess(
            `Successfully removed playlist from ${trigger ? 'trigger' : 'display'}`,
        );
        this._state.changed();
        this.adding = false;
    }

    public async drop(event: CdkDragDrop<SignagePlaylist[]>) {
        const display = await this.active_display.pipe(take(1)).toPromise();
        const trigger = await this.active_trigger.pipe(take(1)).toPromise();
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
            `Successfully re-ordered playlists on ${trigger ? 'trigger' : 'display'}`,
        );
        this._state.changed();
    }
}
