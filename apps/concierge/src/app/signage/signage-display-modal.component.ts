import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SignageDisplay, SignagePlaylist } from './signage.classes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { SignageStateService } from './signage-state.service';

@Component({
    selector: 'signage-display-modal',
    template: ``,
    styles: [``],
})
export class SignageDisplayModalComponent {
    public loading = false;
    public readonly display = this._data;
    public readonly playlists = this._state.playlists;

    public readonly search = new BehaviorSubject('');

    public readonly form = new FormGroup({
        id: new FormControl(this.display.id || ''),
        name: new FormControl(this.display.name || '', [Validators.required]),
        description: new FormControl(this.display.description || ''),
        playlists: new FormControl(this.display.playlists || []),
    });

    public readonly playlist_list = combineLatest([
        this.display,
        this.form.valueChanges.pipe(startWith(this.form.getRawValue())),
    ]).pipe(
        map(([playlist_list, _]) =>
            (this.form.getRawValue().playlists || []).map(
                (id) =>
                    playlist_list.find((_) => _.id === id) ||
                    new SignagePlaylist({ id })
            )
        )
    );

    public readonly new_playlist = combineLatest([
        this.playlists,
        this.search,
        this.form.valueChanges.pipe(startWith(this.form.getRawValue())),
    ]).pipe(
        map(([all_playlist, search, _]) =>
            all_playlist
                .filter(
                    (_) => !this.form.getRawValue().playlists.includes(_.id)
                )
                .filter((_) =>
                    _.name.toLowerCase().includes(search.toLowerCase())
                )
        )
    );

    @ViewChild('search_input')
    public search_input: ElementRef<HTMLInputElement>;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: SignageDisplay = {} as any,
        private _state: SignageStateService,
        private _dialog: MatDialog,
        private _dialog_ref: MatDialogRef<SignageDisplayModalComponent>
    ) {}
}
