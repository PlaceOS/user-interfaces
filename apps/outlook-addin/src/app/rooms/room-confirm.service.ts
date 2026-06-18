import { Injectable, inject, signal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { HashMap, Space } from '@placeos/common';
import { EventFormService, SpacePipe, SpacesService } from '@placeos/events';
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
    private _space_pipe = new SpacePipe();

    space: Space;
    public book_space: HashMap<boolean> = {};
    public space_list: Space[] = [];

    public readonly selected_space = signal<Space>(null);

    public get form() {
        return this._state.form;
    }

    public get model() {
        return this._state.model;
    }

    constructor() {
        this.book_space = {};
        const resources = this._state.model().resources || [];
        resources.forEach((_) => (this.book_space[_.id] = true));
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
    }

    async openRoomDetail(space = this.selected_space()) {
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
        if (space) this.selected_space.set(space);
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
        this.model.update((m) => ({
            ...m,
            resources: spaces,
            system: spaces[0],
        }));
        this.space_list = this._spaces.filter((s) => this.book_space[s.id]);
        this.postForm();
    }

    async postForm() {
        await this._state.postForm().catch((err) => console.error(err));
        if (this._state.last_success())
            this.router.navigate(['/confirm/success']);
    }
}
