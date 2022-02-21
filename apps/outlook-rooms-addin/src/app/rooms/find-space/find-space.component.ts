import { Component, OnInit, Inject } from '@angular/core';
import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { EventFormService } from '@placeos/events';
import { HashMap } from '@placeos/common';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Space, SpacesService } from '@placeos/spaces';

@Component({
    selector: 'find-space',
    templateUrl: './find-space.component.html',
    styles: [``],
})
export class FindSpaceComponent implements OnInit {
    unixTime;
    startTime;
    durationMinutes;
    endTime;

    public space_list: Space[] = [];
    public readonly spaces$: Observable<Space[]> = this._state.available_spaces;
    public book_space: HashMap<boolean> = {};

    public readonly loading = this._state.loading;

    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
        private _bottomSheetRef: MatBottomSheetRef<FindSpaceComponent>,
        private _state: EventFormService,
        private _spaces: SpacesService
    ) {}

    public async ngOnInit() {
        console.log(this._spaces.space_list, 'space list');

        this.unixTime = this.data?.controls?.date?.value;
        this.startTime = new Date(this.unixTime).toLocaleTimeString();
        const durationMinutes: number = this.data?.controls?.duration?.value;
        const end = this.unixTime + durationMinutes * 60 * 1000;
        this.endTime = new Date(end).toLocaleTimeString();

        await this._spaces.initialised.pipe(first((_) => !!_)).toPromise();
        const resources = this._state.form?.get('resources')?.value || [];
        this.book_space = {};
        resources.forEach((_) => (this.book_space[_.id] = true));
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
    }

    closeModal() {
        this._bottomSheetRef.dismiss();
    }

    public get form() {
        return this._state.form;
    }
}
