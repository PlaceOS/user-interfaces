import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    BuildingLevel,
    MapsPeopleService,
    OrganisationService,
    nextValueFrom,
    unique,
} from '@placeos/common';
import {
    IconComponent,
    InteractiveMapComponent,
    TranslatePipe,
} from '@placeos/components';
import { Rect } from '@placeos/svg-viewer/dist/types';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { debounceTime, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { MapShowElementComponent } from '../poi-manager/map-show-element.component';
import { PointOfInterest } from '../poi-manager/poi-management.service';

type BoundsMap = Record<string, Rect>;

declare let mapsindoors: any;

@Component({
    selector: 'select-map-item-modal',
    template: `
        <header
            class="sticky top-0 z-10 mx-auto mt-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
        >
            <h2 class="text-xl font-medium capitalize">
                {{ 'APP.CONCIERGE.POI_MAP_SELECT_HEADER' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main
            class="flex h-[75vh] max-h-[75vh] min-w-[80vw] max-w-[calc(100vw-2rem)] space-x-2 overflow-hidden p-2 sm:max-w-[64rem]"
        >
            <div
                map
                class="relative h-full w-1/2 flex-1 rounded-lg bg-base-200"
            >
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
                class="relative flex h-full w-[20rem] flex-col rounded-lg border border-base-300"
            >
                <div search class="flex flex-col border-b border-base-200 p-2">
                    <mat-form-field
                        class="no-subscript mb-2 w-full"
                        appearance="outline"
                    >
                        <mat-select
                            name="level"
                            [(ngModel)]="level"
                            (ngModelChange)="onChange()"
                        >
                            @for (lvl of level_list | async; track lvl) {
                                <mat-option [value]="lvl">
                                    {{ lvl.display_name || lvl.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field
                        class="no-subscript w-full"
                        appearance="outline"
                    >
                        <input
                            matInput
                            name="search"
                            placeholder="Search"
                            [ngModel]="search | async"
                            (ngModelChange)="search.next($event)"
                        />
                        <icon matPrefix class="text-2xl">search</icon>
                    </mat-form-field>
                </div>
                <div
                    list
                    class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto px-2"
                >
                    <div
                        class="sticky top-0 z-10 w-full bg-base-100 px-1 py-3 text-sm"
                    >
                        {{
                            'APP.CONCIERGE.POI_MAP_SELECT_RESULTS'
                                | translate
                                    : {
                                          count:
                                              (search_results | async)
                                                  ?.length || 0,
                                      }
                        }}
                        @if (last_page) {
                            <span
                                class="rounded-full border border-info bg-info-light px-2 py-1 text-xs"
                            >
                                {{ page * 100 + 1 }} -
                                {{
                                    (search_results | async)?.length >
                                    page * 100 + 100
                                        ? page * 100 + 100
                                        : (search_results | async)?.length
                                }}
                            </span>
                        }
                    </div>
                    @if ((search_results | async)?.length) {
                        @for (
                            poi of search_results
                                | async
                                | slice: page * 100 : page * 100 + 100;
                            track poi
                        ) {
                            <button
                                btn
                                matRipple
                                class="clear flex w-full items-center rounded text-left hover:bg-base-200"
                                [class.!bg-primary]="poi.id === selected.value"
                                [class.!text-primary-content]="
                                    poi.id === selected.value
                                "
                                (click)="selected.next(poi.id)"
                                (mouseover)="hovered.next(poi.id)"
                            >
                                <div
                                    class="flex w-full flex-col font-mono text-sm"
                                >
                                    <div class="">{{ poi.name || poi.id }}</div>
                                    @if (poi.location) {
                                        <div class="text-xs opacity-30">
                                            {{ poi.location }}
                                        </div>
                                    }
                                </div>
                            </button>
                        }
                    } @else {
                        <div
                            class="flex h-full flex-1 flex-col items-center justify-center space-y-4"
                        >
                            <img
                                src="assets/icons/no-results.svg"
                                class="w-36"
                            />
                            <div class="text-center opacity-30">
                                {{
                                    'APP.CONCIERGE.POI_MAP_SELECT_RESULTS_EMPTY'
                                        | translate
                                }}
                            </div>
                        </div>
                    }
                    @if (last_page > 0) {
                        <div
                            pagination
                            class="sticky bottom-0 z-10 -mx-2 flex w-[calc(100%+1rem)] items-center justify-center space-x-1 border-t border-base-300 bg-base-100 p-2"
                        >
                            <button
                                icon
                                matRipple
                                class="rounded border border-base-200"
                                [disabled]="page === 0"
                                (click)="page = page - 1"
                            >
                                <icon>chevron_left</icon>
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
                                <icon>more_horiz</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="!bg-secondary text-secondary-content"
                                [class.opacity-0]="
                                    page == 0 || page == last_page
                                "
                            >
                                {{ page + 1 }}
                            </button>
                            <button
                                icon
                                [class.opacity-0]="page > last_page - 2"
                            >
                                <icon>more_horiz</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded border border-base-200"
                                [class.!bg-secondary]="page === last_page"
                                [class.text-secondary-content]="
                                    page === last_page
                                "
                                [class.!rounded-full]="page === last_page"
                                (click)="page = last_page"
                            >
                                {{ last_page + 1 }}
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded border border-base-200"
                                [disabled]="page === last_page"
                                (click)="page = page + 1"
                            >
                                <icon>chevron_right</icon>
                            </button>
                        </div>
                    }
                </div>
                <div actions class="border-t border-base-200 p-2">
                    <button
                        btn
                        matRipple
                        [disabled]="!selected.value"
                        class="w-full"
                        [mat-dialog-close]="selected.value"
                    >
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </div>
            </div>
        </main>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        InteractiveMapComponent,
        FormsModule,
    ],
})
export class SelectMapItemModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _data = inject<PointOfInterest>(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);
    private _maps_people = inject(MapsPeopleService);

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
                'location',
            ),
        ),
    );

    public itemFromMapsIndoorsItem(item: any) {
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
            return available
                ? q.length > 2
                    ? mapsindoors?.services.LocationsService.getLocations({
                          q,
                      }).then((l) => {
                          const list = l.map((i) =>
                              this.itemFromMapsIndoorsItem(i),
                          );
                          if (this.selected_item) {
                              list.unshift(
                                  this.itemFromMapsIndoorsItem(
                                      this.selected_item,
                                  ),
                              );
                          }
                          return list;
                      })
                    : of(
                          this.selected_item
                              ? [
                                    this.itemFromMapsIndoorsItem(
                                        this.selected_item,
                                    ),
                                ]
                              : [],
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
                                  area < 0.5,
                          )
                          .sort((a, b) => b.area - a.area),
                  );
        }),
        tap((l: any[]) => {
            this.page = 0;
            this.last_page = Math.floor(l.length / 100);
        }),
        shareReplay(1),
    );

    public readonly setMapInfo = (info: BoundsMap) => (this.map_info = info);

    public async ngOnInit() {
        if (this._data?.location && typeof this._data.location === 'string') {
            this.selected.next(this._data.location as string);
        }
        const levels = await nextValueFrom(this.level_list);
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
            const use_maps_indoors = await nextValueFrom(
                this._maps_people.available$,
            );
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
                    this.selected.next(short_list[0][0]);
                }
            } else {
                const id =
                    e.properties?.externalId || e.properties?.roomId || e.id;
                this.selected_item = e;
                if (id) this.selected.next(id);
                this.changed.next(Date.now());
            }
        });
    }
}
