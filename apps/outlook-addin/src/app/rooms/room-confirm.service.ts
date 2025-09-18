import { Injectable, inject } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { HashMap, Space } from '@placeos/common';
import { EventFormService, SpacePipe, SpacesService } from '@placeos/events';
import { BehaviorSubject, Observable } from 'rxjs';
import { RoomConfirmComponent } from './room-confirm.component';
import { RoomDetailsComponent } from './room-details.component';

@Injectable({
    providedIn: 'root',
})
export class RoomConfirmService {
    private _bottomSheet = inject(MatBottomSheet);
    private router = inject(Router);
    private _state = inject(EventFormService);
    private _spaces = inject(SpacesService);
    private _space_pipe = inject(SpacePipe);

    space: Space;
    public book_space: HashMap<boolean> = {};
    public space_list: Space[] = [];

    _selected_space: BehaviorSubject<Space> = new BehaviorSubject<Space>(null);
    selected_space$: Observable<Space> = this._selected_space.asObservable();

    get selected_space() {
        return this._selected_space.getValue();
    }

    set selected_space(space) {
        this._selected_space.next(space);
    }

    public get form() {
        return this._state.form;
    }

    constructor() {
        this.book_space = {};
        const resources = this._state.form?.get('resources')?.value || [];
        resources.forEach((_) => (this.book_space[_.id] = true));
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
    }

    async openRoomDetail(space = this.selected_space) {
        const room_details_ref = this._bottomSheet.open(RoomDetailsComponent, {
            data: space,
        });

        await room_details_ref
            .afterDismissed()
            .subscribe((selectedSpace) =>
                selectedSpace ? this.openRoomConfirm(selectedSpace) : null,
            );
    }

    openRoomConfirm(space?) {
        if (space) {
            const confirm_ref = this._bottomSheet.open(RoomConfirmComponent, {
                data: space,
            });
        }
    }

    updateSelectedSpace(space?) {
        if (space) this.selected_space = space;
    }

    handleBookEvent(space: Space, book: boolean = true) {
        this.book_space = {};
        this.book_space[space.id] = book;
    }

    async bookRoom(space?) {
        const id_list = Object.keys(this.book_space).filter(
            (id) => this.book_space[id],
        );
        const spaces = await Promise.all(
            id_list.map((id) => this._space_pipe.transform(id)),
        );
        this.form.patchValue({ resources: spaces, system: spaces[0] });
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
        this.postForm();
    }

    async postForm() {
        await this._state.postForm().catch((err) => console.error(err));
        if (this._state.last_success)
            this.router.navigate(['/confirm/success']);
    }
}
