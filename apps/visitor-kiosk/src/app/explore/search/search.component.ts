import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
    ElementRef
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

import { BaseClass, HashMap, Identity } from '@user-interfaces/common';
import { Space, SpacesService } from '@user-interfaces/spaces';
import { Building, OrganisationService } from '@user-interfaces/organisation';
import { PeopleService, User } from '@user-interfaces/users';

// TODO: Add handling for role users. e.g. Fire Wardens, First Aiders
// TODO: Add handling for searching for features
// TODO: Add handling for searching for desks

@Component({
    selector: 'explore-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class ExploreSearchComponent extends BaseClass implements OnInit, OnChanges {

    @Input() public options: Identity[] = [];
    /** Type of data to show when searching */
    @Input() public type: 'space' | 'user' | 'feature' | 'desk' | 'any' | '';
    /** Whether external changes are being processed */
    @Input() public autofocus: boolean;
    /** Level shown on the map */
    @Input() public zone: string;
    /** Display string for the placeholder of the search input */
    @Input() public placeholder: string;
    /** Clear contents of the search input on changes */
    @Input() public clear: number;
    /** Whether search data is loading */
    public loading: boolean;
    /** Search filter value */
    public search_str: string;
    /** List of users from an API search */
    public search_results$: Observable<Identity[]>;
    /** Post search and filtering list of items */
    public results: Identity[] = [];
    /** Subject holding the value of the search */
    public search$ = new Subject<string>();

    /** Input field reference */
    @ViewChild('input', { static: false }) private input_field: ElementRef<HTMLInputElement>;

    public get option_details(): HashMap<string> {
        const details = {};
        for (const item of this.results) {
            details[item.id] = item instanceof Space ? this.spaceDetails(item) : item.email;
        }
        return details;
    }

    public spaceDetails(space: Space) {
        const building = this._org.buildings.find(
            bld => bld.id === space.level.parent_id
        );
        return building ? `${building.name}, ${space.level.name}` : space.level.name;
    }

    public get building(): Building {
        const level = this._org.levelWithID([this.zone]);
        if (!level) {
            return null;
        }
        return this._org.buildings.find(bld => bld.id === level.parent_id);
    }

    constructor(
        private _org: OrganisationService,
        private _people: PeopleService,
        private _spaces: SpacesService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    public ngOnInit(): void {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(query => {
                this.loading = true;
                if (this.options && this.options.length) {
                    return Promise.resolve(this.options);
                }
                if ((this.type !== 'user' && this.type !== 'any') || query.length < 3) {
                    return Promise.resolve([]);
                }
                const q = (typeof query === 'string' ? query || '' : '');
                const ppl = this._people.query({q});
                return ppl;
            }),
            catchError(err => {
                console.error(err);
                return of([]);
            }),
            map((users: User[]) => {
                const spaces = this._spaces.space_list.filter(space =>
                    !this.zone ? true : space.zones.indexOf(this.building.id) >= 0
                );
                const search = (this.search_str || '').toLowerCase();
                const filter = item =>
                    (item.name || '').toLowerCase().indexOf(search) >= 0 ||
                    (item.email || '').toLowerCase().indexOf(search) >= 0;
                let result_list = [];
                if (this.type === 'space') {
                    result_list = spaces;
                } else if (this.type === 'user') {
                    result_list = users;
                } else {
                    result_list = (spaces as any).concat(users);
                }
                this.loading = false;
                return result_list.filter(filter);
            })
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe(list => {
                this.results = list;
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.autofocus && this.autofocus) {
            this.focusField();
        }
        if (changes.options) {
            this.search_str = '';
            this.search$.next(`${this.search_str}`);
            this.results = this.options;
            this.focusField();
        }
        if (changes.clear) {
            this.timeout('clear', () => {
                this.search_str = '';
                this.search$.next(`${this.search_str}`);
                this.results = [];
            }, 50);
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
    public selectOption(item: User | Space) {
        if (item instanceof Space) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { space: item.id, level: item.level.id },
                queryParamsHandling: 'merge'
            });
        } else {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { user: item.email },
                queryParamsHandling: 'merge'
            });
        }
        this.search_str = item.name;
    }
}
