import { Component, Inject } from '@angular/core';
import { AsyncHandler, MapsPeopleService, unique } from '@placeos/common';
import { BuildingLevel, OrganisationService } from '@placeos/organisation';
import { Rect } from '@placeos/svg-viewer/dist/types';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    debounceTime,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import { MapShowElementComponent } from './map-show-element.component';
import { PointOfInterest } from './poi-management.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

type BoundsMap = Record<string, Rect>;

declare let mapsindoors: any;

@Component({
    selector: 'select-poi-map-modal',
    template: `
        <header>
            <h2>Select Point of Interest from Map</h2>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="flex min-w-[80vw] max-w-[calc(100vw-2rem)] sm:max-w-[64rem] max-h-[75vh] h-[75vh] overflow-hidden"
        >
            <div map class="relative h-full flex-1 w-1/2 bg-base-200">
                <interactive-map
                    [src]="level?.map_id"
                    [actions]="actions"
                    [features]="features | async"
                    [options]="{ controls: true }"
                    [focus]="selected.value"
                    (mapInfo)="setMapInfo($event)"
                ></interactive-map>
            </div>
            <div
                poi-list
                class="relative flex flex-col h-full w-[20rem] border-l border-base-300 shadow"
            >
                <div search class="flex flex-col border-b border-base-200 p-2">
                    <mat-form-field
                        class="w-full no-subscript mb-2"
                        appearance="outline"
                    >
                        <mat-select
                            name="level"
                            [(ngModel)]="level"
                            (ngModelChange)="onChange()"
                        >
                            <mat-option
                                *ngFor="let lvl of level_list | async"
                                [value]="lvl"
                            >
                                {{ lvl.display_name || lvl.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field
                        class="w-full no-subscript"
                        appearance="outline"
                    >
                        <input
                            matInput
                            name="search"
                            placeholder="Search"
                            [ngModel]="search | async"
                            (ngModelChange)="search.next($event)"
                            i18n-placeholder="@@searchPlaceholder"
                        />
                        <app-icon matPrefix class="text-2xl">search</app-icon>
                    </mat-form-field>
                </div>
                <div
                    list
                    class="flex flex-col flex-1 h-1/2 overflow-auto space-y-2 px-2"
                >
                    <div class="sticky top-0 w-full bg-base-100 px-1 py-3 z-10">
                        Results ({{ (search_results | async)?.length || 0 }})
                        <span *ngIf="last_page">
                            {{ page * 100 + 1 }} -
                            {{
                                (search_results | async)?.length >
                                page * 100 + 100
                                    ? page * 100 + 100
                                    : (search_results | async)?.length
                            }}
                        </span>
                    </div>
                    <ng-container
                        *ngIf="
                            (search_results | async)?.length;
                            else empty_state
                        "
                    >
                        <button
                            btn
                            matRipple
                            *ngFor="
                                let poi of search_results
                                    | async
                                    | slice: page * 100:page * 100 + 100
                            "
                            class="clear flex items-center text-left w-full hover:bg-base-200 rounded"
                            [class.!bg-primary]="poi.id === selected.value"
                            [class.!text-primary-content]="
                                poi.id === selected.value
                            "
                            (click)="selected.next(poi.id)"
                            (mouseover)="hovered.next(poi.id)"
                        >
                            <div class="flex flex-col w-full">
                                <div class="">{{ poi.name || poi.id }}</div>
                                <div
                                    class="text-xs opacity-30"
                                    *ngIf="poi.location"
                                >
                                    {{ poi.location }}
                                </div>
                            </div>
                        </button>
                    </ng-container>
                    <div
                        pagination
                        *ngIf="last_page > 0"
                        class="sticky flex items-center justify-center bottom-0 w-full bg-base-100 p-2 z-10 space-x-1"
                    >
                        <button
                            icon
                            matRipple
                            class="border border-base-200 rounded"
                            [disabled]="page === 0"
                            (click)="page = page - 1"
                        >
                            <app-icon>chevron_left</app-icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [class.!bg-secondary]="page === 0"
                            [class.text-secondary-content]="page === 0"
                            [class.!rounded-full]="page === 0"
                            (click)="page = 0"
                        >
                            1
                        </button>
                        <button icon [class.opacity-0]="page < 2">
                            <app-icon>more_horiz</app-icon>
                        </button>
                        <button
                            icon
                            matRipple
                            class="!bg-secondary text-secondary-content"
                            [class.opacity-0]="page == 0 || page == last_page"
                        >
                            {{ page + 1 }}
                        </button>
                        <button icon [class.opacity-0]="page > last_page - 2">
                            <app-icon>more_horiz</app-icon>
                        </button>
                        <button
                            icon
                            matRipple
                            class="border border-base-200 rounded"
                            [class.!bg-secondary]="page === last_page"
                            [class.text-secondary-content]="page === last_page"
                            [class.!rounded-full]="page === last_page"
                            (click)="page = last_page"
                        >
                            {{ last_page + 1 }}
                        </button>
                        <button
                            icon
                            matRipple
                            class="border border-base-200 rounded"
                            [disabled]="page === last_page"
                            (click)="page = page + 1"
                        >
                            <app-icon>chevron_right</app-icon>
                        </button>
                    </div>
                    <ng-template #empty_state>
                        <div
                            class="flex flex-col items-center justify-center h-full flex-1 space-y-4"
                        >
                            <img
                                src="assets/icons/no-results.svg"
                                class="w-36"
                            />
                            <div class="text-center opacity-30">
                                No results found
                            </div>
                        </div>
                    </ng-template>
                </div>
                <div actions class="p-2 border-t border-base-200">
                    <button
                        btn
                        matRipple
                        [disabled]="!selected.value"
                        class="w-full"
                        [mat-dialog-close]="selected.value"
                    >
                        Save
                    </button>
                </div>
            </div>
        </main>
    `,
    styles: [``],
})
export class SelectPOIMapModalComponent extends AsyncHandler {
    public selected_item: any;
    public level: BuildingLevel = new BuildingLevel();
    public map_info: BoundsMap = {};
    public page = 0;
    public last_page = 0;
    public readonly selected = new BehaviorSubject<string>('');
    public readonly hovered = new BehaviorSubject<string>('');
    public readonly search = new BehaviorSubject('');
    public readonly changed = new BehaviorSubject(0);
    public readonly level_list = this._org.active_levels;
    public readonly actions = [
        { id: '*', action: 'click', callback: (e, p) => this.selectID(p || e) },
    ];
    public readonly features = combineLatest([
        this.selected,
        this.hovered,
    ]).pipe(
        map(([s_id, h_id]) =>
            unique(
                [
                    {
                        location: s_id,
                        content: MapShowElementComponent,
                        full_size: true,
                        no_scale: true,
                    },
                    {
                        location: h_id,
                        content: MapShowElementComponent,
                        data: { hover: true },
                        full_size: true,
                        no_scale: true,
                    },
                ].filter((_) => _.location),
                'location'
            )
        )
    );

    public poiItemFromMapsIndoorsItem(item: any) {
        return {
            id: item.properties.externalId || item.properties.roomId || item.id,
            name: item.properties.name,
            location: item.properties.building
                ? `${item.properties.building}, Level ${item.properties.floorName}`
                : '',
            area:
                Math.abs(item.geometry.bbox[0] - item.geometry.bbox[2]) *
                Math.abs(item.geometry.bbox[1] - item.geometry.bbox[3]),
        };
    }

    public readonly search_results = combineLatest([
        this.search,
        this._maps_people.available$,
        this.changed,
    ]).pipe(
        debounceTime(300),
        switchMap(([q, available]) => {
            console.log('Search:', q, available);
            return available
                ? q.length > 2
                    ? mapsindoors?.services.LocationsService.getLocations({
                          q,
                      }).then((l) => {
                          const list = l.map((i) =>
                              this.poiItemFromMapsIndoorsItem(i)
                          );
                          if (this.selected_item) {
                              list.unshift(
                                  this.poiItemFromMapsIndoorsItem(
                                      this.selected_item
                                  )
                              );
                          }
                          return list;
                      })
                    : of(
                          this.selected_item
                              ? [
                                    this.poiItemFromMapsIndoorsItem(
                                        this.selected_item
                                    ),
                                ]
                              : []
                      )
                : of(
                      Object.entries(this.map_info)
                          .map(([id, bbox]) => ({
                              id,
                              area: bbox.w * bbox.h,
                          }))
                          .filter(
                              ({ id, area }) =>
                                  id.toLowerCase().includes(q.toLowerCase()) &&
                                  area < 0.5
                          )
                          .sort((a, b) => b.area - a.area)
                  );
        }),
        tap((l: any[]) => {
            this.page = 0;
            this.last_page = Math.floor(l.length / 100);
        }),
        shareReplay(1)
    );

    public readonly setMapInfo = (info: BoundsMap) => (this.map_info = info);

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: PointOfInterest,
        private _org: OrganisationService,
        private _maps_people: MapsPeopleService
    ) {
        super();
    }

    public async ngOnInit() {
        console.log('Data:', this._data);
        if (this._data?.location && typeof this._data.location === 'string') {
            this.selected.next(this._data.location as string);
        }
        const levels = await this.level_list.pipe(take(1)).toPromise();
        if (levels.length) {
            let level = levels[0];
            if (this._data?.level_id) {
                level =
                    levels.find((_) => _.id === this._data.level_id) || level;
            }
            this.level = level;
        }
    }

    public onChange() {
        this.changed.next(Date.now());
    }

    public selectID(e: any) {
        this.timeout('select_id', async () => {
            const use_maps_indoors = await this._maps_people.available$
                .pipe(take(1))
                .toPromise();
            if (!use_maps_indoors) {
                const pos: { x: number; y: number } = e;
                const short_list: [string, number][] = [];
                for (const [id, bbox] of Object.entries(this.map_info)) {
                    if (
                        bbox.x <= pos.x &&
                        pos.x <= bbox.x + bbox.w &&
                        bbox.y <= pos.y &&
                        pos.y <= bbox.y + bbox.h
                    ) {
                        short_list.push([id, bbox.h * bbox.w]);
                    }
                }
                short_list.sort((a, b) => a[1] - b[1]);
                short_list.filter(([_, a]) => a <= 0.5);
                if (short_list.length) {
                    console.log('Selected ID:', short_list[0][0]);
                    this.selected.next(short_list[0][0]);
                }
            } else {
                console.log('Item:', e);
                const id =
                    e.properties?.externalId || e.properties?.roomId || e.id;
                console.log('Selected ID:', id);
                this.selected_item = e;
                if (id) this.selected.next(id);
                this.changed.next(Date.now());
            }
        });
    }
}
