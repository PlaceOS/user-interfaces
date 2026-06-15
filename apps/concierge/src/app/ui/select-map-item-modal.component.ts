import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    computed,
    inject,
    signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    BuildingLevel,
    MapElementBounds,
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
import { combineLatest, of } from 'rxjs';
import { debounceTime, shareReplay, switchMap, tap } from 'rxjs/operators';
import { MapShowElementComponent } from '../poi-manager/map-show-element.component';
import { PointOfInterest } from '../poi-manager/poi-management.service';

type BoundsMap = Record<string, MapElementBounds>;

declare let mapsindoors: any;

@Component({
    selector: 'select-map-item-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 mx-auto mt-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h2 class="text-xl font-medium capitalize">
                {{ 'APP.CONCIERGE.POI_MAP_SELECT_HEADER' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main
            class="flex h-[75vh] max-h-[75vh] max-w-[calc(100vw-2rem)] min-w-[80vw] space-x-2 overflow-hidden p-2 sm:max-w-5xl"
        >
            <div
                map
                class="bg-base-200 relative h-full w-1/2 flex-1 rounded-lg"
            >
                <interactive-map
                    [src]="level()?.map_id"
                    [actions]="actions"
                    [features]="features()"
                    [options]="{ controls: true }"
                    [focus]="selected()"
                    (mapInfo)="setMapInfo($any($event))"
                ></interactive-map>
            </div>
            <div
                poi-list
                class="border-base-300 relative flex h-full w-[20rem] flex-col rounded-lg border"
            >
                <div search class="border-base-200 flex flex-col border-b p-2">
                    <mat-form-field
                        class="no-subscript mb-2 w-full"
                        appearance="outline"
                    >
                        <mat-select
                            name="level"
                            [(ngModel)]="level"
                            (ngModelChange)="onChange()"
                        >
                            @for (lvl of level_list(); track lvl) {
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
                            [(ngModel)]="search"
                        />
                        <icon matPrefix class="text-2xl">search</icon>
                    </mat-form-field>
                </div>
                <div
                    list
                    class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto px-2"
                >
                    <div
                        class="bg-base-100 sticky top-0 z-10 w-full px-1 py-3 text-sm"
                    >
                        {{
                            'APP.CONCIERGE.POI_MAP_SELECT_RESULTS'
                                | translate
                                    : {
                                          count: search_results().length || 0,
                                      }
                        }}
                        @if (last_page()) {
                            <span
                                class="border-info bg-info-light rounded-full border px-2 py-1 text-xs"
                            >
                                {{ page() * 100 + 1 }} -
                                {{
                                    search_results().length > page() * 100 + 100
                                        ? page() * 100 + 100
                                        : search_results().length
                                }}
                            </span>
                        }
                    </div>
                    @if (search_results().length) {
                        @for (
                            poi of search_results()
                                | slice: page() * 100 : page() * 100 + 100;
                            track poi
                        ) {
                            <button
                                btn
                                matRipple
                                class="clear hover:bg-base-200 flex w-full items-center rounded-sm text-left"
                                [class.bg-primary!]="poi.id === selected()"
                                [class.text-primary-content!]="
                                    poi.id === selected()
                                "
                                (click)="selected.set(poi.id)"
                                (mouseover)="hovered.set(poi.id)"
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
                    @if (last_page() > 0) {
                        <div
                            pagination
                            class="border-base-300 bg-base-100 sticky bottom-0 z-10 -mx-2 flex w-[calc(100%+1rem)] items-center justify-center space-x-1 border-t p-2"
                        >
                            <button
                                icon
                                matRipple
                                class="border-base-200 rounded-sm border"
                                [disabled]="page() === 0"
                                (click)="page.set(page() - 1)"
                            >
                                <icon>chevron_left</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [class.bg-secondary!]="page() === 0"
                                [class.text-secondary-content]="page() === 0"
                                [class.rounded-full!]="page() === 0"
                                (click)="page.set(0)"
                            >
                                1
                            </button>
                            <button icon [class.opacity-0]="page() < 2">
                                <icon>more_horiz</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="bg-secondary! text-secondary-content"
                                [class.opacity-0]="
                                    page() == 0 || page() == last_page()
                                "
                            >
                                {{ page() + 1 }}
                            </button>
                            <button
                                icon
                                [class.opacity-0]="page() > last_page() - 2"
                            >
                                <icon>more_horiz</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="border-base-200 rounded-sm border"
                                [class.bg-secondary!]="page() === last_page()"
                                [class.text-secondary-content]="
                                    page() === last_page()
                                "
                                [class.rounded-full!]="page() === last_page()"
                                (click)="page.set(last_page())"
                            >
                                {{ last_page() + 1 }}
                            </button>
                            <button
                                icon
                                matRipple
                                class="border-base-200 rounded-sm border"
                                [disabled]="page() === last_page()"
                                (click)="page.set(page() + 1)"
                            >
                                <icon>chevron_right</icon>
                            </button>
                        </div>
                    }
                </div>
                <div actions class="border-base-200 border-t p-2">
                    <button
                        btn
                        matRipple
                        [disabled]="!selected()"
                        class="w-full"
                        [mat-dialog-close]="selected()"
                    >
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </div>
            </div>
        </main>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.Eager,
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
    public readonly level = signal<BuildingLevel>(new BuildingLevel());
    public readonly map_info = signal<BoundsMap>({});
    public readonly page = signal(0);
    public readonly last_page = signal(0);
    public readonly selected = signal('');
    public readonly hovered = signal('');
    public readonly search = signal('');
    public readonly changed = signal(0);
    public readonly level_list = toSignal(this._org.active_levels, {
        initialValue: [] as BuildingLevel[],
    });
    public readonly actions = [
        { id: '*', action: 'click', callback: (e, p) => this.selectID(p || e) },
    ];
    public readonly features = computed(() =>
        unique(
            [
                {
                    location: this.selected(),
                    content: MapShowElementComponent,
                    full_size: true,
                    no_scale: true,
                },
                {
                    location: this.hovered(),
                    content: MapShowElementComponent,
                    data: { hover: true },
                    full_size: true,
                    no_scale: true,
                },
            ].filter((_) => _.location),
            'location',
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

    public readonly search_results = toSignal(
        combineLatest([
            toObservable(this.search),
            this._maps_people.available$,
            toObservable(this.changed),
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
                          Object.entries(this.map_info())
                              .map(([id, bbox]) => ({
                                  id,
                                  area: bbox.w * bbox.h,
                              }))
                              .filter(
                                  ({ id, area }) =>
                                      id
                                          .toLowerCase()
                                          .includes(q.toLowerCase()) &&
                                      area < 0.5,
                              )
                              .sort((a, b) => b.area - a.area),
                      );
            }),
            tap((l: any[]) => {
                this.page.set(0);
                this.last_page.set(Math.floor(l.length / 100));
            }),
            shareReplay(1),
        ),
        { initialValue: [] as any[] },
    );

    public readonly setMapInfo = (info: BoundsMap) => this.map_info.set(info);

    public async ngOnInit() {
        if (this._data?.location && typeof this._data.location === 'string') {
            this.selected.set(this._data.location as string);
        }
        const levels = await nextValueFrom(this._org.active_levels);
        if (levels.length) {
            let level = levels[0];
            if (this._data?.level_id) {
                level =
                    levels.find((_) => _.id === this._data.level_id) || level;
            }
            this.level.set(level);
        }
    }

    public onChange() {
        this.changed.set(Date.now());
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
                    this.selected.set(short_list[0][0]);
                }
            } else {
                const id =
                    e.properties?.externalId || e.properties?.roomId || e.id;
                this.selected_item = e;
                if (id) this.selected.set(id);
                this.changed.set(Date.now());
            }
        });
    }
}
