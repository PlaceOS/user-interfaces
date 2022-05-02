import { Injectable, Inject } from '@angular/core';
import {
    MatBottomSheet,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Space, SpacesService } from '@placeos/spaces';
import { EventFormService } from '@placeos/events';
import { HashMap } from '@placeos/common';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomConfirmComponent } from './room-confirm/room-confirm.component';

@Injectable({
    providedIn: 'root',
})
export class RoomConfirmService {
    space: Space;
    public book_space: HashMap<boolean> = {};
    public space_list: Space[] = [];

    _selectedSpace: BehaviorSubject<Space> = new BehaviorSubject<Space>(null);
    selectedSpace$: Observable<Space> = this._selectedSpace.asObservable();

    get selectedSpace() {
        return this._selectedSpace.getValue();
    }

    set selectedSpace(space) {
        this._selectedSpace.next(space);
    }

    public get form(): FormGroup {
        return this._state.form;
    }

    constructor(
        private _bottomSheet: MatBottomSheet,
        private router: Router,
        private _state: EventFormService,
        private _spaces: SpacesService
    ) {
        this.book_space = {};
        const resources = this._state.form?.get('resources')?.value || [];
        resources.forEach((_) => (this.book_space[_.id] = true));
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
    }

    async openRoomDetail(space = this.selectedSpace) {
        const roomDetailsRef = this._bottomSheet.open(RoomDetailsComponent, {
            data: space,
        });

        await roomDetailsRef
            .afterDismissed()
            .subscribe((selectedSpace) =>
                selectedSpace ? this.openRoomConfirm(selectedSpace) : null
            );
    }

    openRoomConfirm(space?) {
        if (space) {
            const confirmRef = this._bottomSheet.open(RoomConfirmComponent, {
                data: space,
            });
        }
    }

    updateSelectedSpace(space?) {
        if (space) this.selectedSpace = space;
    }

    handleBookEvent(space: Space, book: boolean = true) {
        this.book_space = {};
        this.book_space[space.id] = book;
    }
    bookRoom(space) {
        const spaces = this._spaces.filter((s) => this.book_space[s.id]);
        this.form.patchValue({ resources: spaces, system: spaces[0] });
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
        this.postForm();
    }

    async postForm() {
        await this._state.postForm().catch((err) => console.log(err));
        if (this._state.last_success)
            this.router.navigate(['/confirm/success']);
    }
}
