import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { BaseClass } from 'src/app/common/base.class';
import { User } from 'src/app/users/user.class';
import { Space } from 'src/app/spaces/space.class';
import { BuildingLevel } from 'src/app/organisation/level.class';
import { Zone } from 'src/app/organisation/zone.class';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { StaffService } from 'src/app/users/staff.service';
import { SpacesService } from 'src/app/spaces/spaces.service';

// TODO: Add handling for role users. e.g. Fire Wardens, First Aiders
// TODO: Add handling for searching for features
// TODO: Add handling for searching for desks

@Component({
    selector: 'explore-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class ExploreSearchComponent extends BaseClass implements OnInit, OnChanges {
    /** Type of data to show when searching */
    @Input() public type: 'space' | 'user' | 'feature' | 'desk' | 'any' | 'zone';
    /** Whether external changes are being processed */
    @Input() public autofocus: boolean;
    /** Display string for the placeholder of the search input */
    @Input() public placeholder: string;
    /** Whether search data is loading */
    public loading: boolean;
    /** Search filter value */
    public search_str = '';
    /** List of users from an API search */
    public search_results$: Observable<(User | Space)[]>;
    /** Post search and filtering list of items */
    public results: (User | Space)[] = [];
    /** Subject holding the value of the search */
    public search$ = new Subject<string>();

    /** Input field reference */
    @ViewChild('input', { static: true }) private input_field: ElementRef<HTMLInputElement>;

    constructor(
        private _org: OrganisationService,
        private _users: StaffService,
        private _spaces: SpacesService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('search_type')) {
                    this.type = params.get('search_type') as any;
                }
            })
        );
        // Listen for input changes
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap((query) => {
                this.loading = true;
                return query.length >= 3
                    ? this._users.query({ q: query.slice(0, 3) }).catch(() => {
                          return [];
                      })
                    : Promise.resolve([]);
            }),
            map((users: User[]) => {
                const spaces = this._spaces.filter((_) => true);
                const zones = this.getZones();
                const search = (this.search_str || '').toLowerCase();
                const filter = (item: { name: any; email?: any }) =>
                    (item.name || '').toLowerCase().indexOf(search) >= 0 ||
                    (item.email || '').toLowerCase().indexOf(search) >= 0;
                const result_list = [...spaces, ...zones, ...users];
                result_list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
                this.loading = false;
                return result_list.filter(filter);
            })
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe((list) => {
                this.results = list;
            })
        );
    }

    private getZones() {
        const zoneArray = [];
        if (this._org.building) {
            const levels = this._org.levelsForBuilding(this._org.building);
            levels.forEach((l) => {
                if (l.settings && l.settings.zones) {
                    for (const _zone of l.settings.zones) {
                        const zone = new Zone({
                            level: new BuildingLevel({ name: l.name }),
                            name: _zone.name,
                            id: _zone.id,
                        });
                        zoneArray.push(zone);
                    }
                }
            });
        }
        return zoneArray;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.autofocus && this.autofocus) {
            this.focusField();
        }
    }

    public focusField() {
        if (this.input_field && this.input_field.nativeElement) {
            this.input_field.nativeElement.focus();
        }
    }

    /**
     * Update the selected item to display the location for on the map
     * @param item Space or User to display location for
     */
    public selectOption(item: User | Space | Zone) {
        if (item instanceof Space) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: {
                    space: item.id,
                    level: item.level.id,
                },
                // queryParamsHandling: 'merge'
            });
        } else if (item instanceof Zone) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { zone: item.id },
            });
        } else {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { user: item.email },
                // queryParamsHandling: 'merge'
            });
        }
        this.search_str = item.name;
    }

    public displayFn(item) {
        return item?.name || '';
    }
}
