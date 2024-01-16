import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { SignageDisplay, SignagePlaylist } from './signage.classes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { SignageStateService } from './signage-state.service';
import { ta } from 'date-fns/locale';
import { notifyError } from '@placeos/common';

@Component({
    selector: 'signage-display-modal',
    template: `
        <header
            class="flex items-center justify-between p-2 border-b border-base-300"
        >
            <h1 class="px-2">{{ display.id ? 'Edit' : 'New' }} Display</h1>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            [formGroup]="form"
            class="p-2 flex flex-col"
            *ngIf="!loading; else load_state"
        >
            <label for="name">Name<span required>*</span></label>
            <mat-form-field appearance="outline" class="w-full">
                <input
                    matInput
                    name="name"
                    placeholder="Name"
                    formControlName="name"
                />
                <mat-error>Name is required</mat-error>
            </mat-form-field>
            <label for="description">Description</label>
            <mat-form-field appearance="outline" class="w-full">
                <textarea
                    matInput
                    name="description"
                    placeholder="Description"
                    formControlName="description"
                ></textarea>
            </mat-form-field>
            <label for="description">Orientation<span required>*</span></label>
            <mat-form-field appearance="outline" class="w-full">
                <mat-select formControlName="orientation">
                    <mat-option value="landscape">Landscape</mat-option>
                    <mat-option value="portrait">Portrait</mat-option>
                </mat-select>
                <mat-error>Orientation is required</mat-error>
            </mat-form-field>
            <label for="media">Playlists</label>
            <custom-table
                class="block w-full mb-2"
                [dataSource]="playlist_list"
                [columns]="['_index', 'name', 'type', 'duration', 'actions']"
                [display_column]="[' ', 'Name', 'Type', 'Duration', ' ']"
                [column_size]="['3r', 'flex', '10r', '6r', '10r']"
                [template]="{
                    duration: duration_template,
                    actions: actions_template
                }"
            >
            </custom-table>
            <button
                btn
                matRipple
                class="w-full"
                [matMenuTriggerFor]="media_menu"
                (click)="focusSearchInput()"
            >
                Add Playlist
            </button>
            <mat-menu #media_menu="matMenu" class="w-[32rem] max-w-[80vw]">
                <mat-form-field
                    appearance="outline"
                    class="w-[calc(100%-1rem)] mx-2 no-subscript"
                >
                    <app-icon matPrefix class="text-2xl -left-1">
                        search
                    </app-icon>
                    <input
                        #search_input
                        matInput
                        placeholder="Media Name"
                        [ngModel]="search.getValue()"
                        (ngModelChange)="search.next($event)"
                        [ngModelOptions]="{ standalone: true }"
                    />
                </mat-form-field>
                <button
                    mat-menu-item
                    *ngFor="let item of new_playlists | async | slice: 0:8"
                    (click)="addPlaylist(item)"
                >
                    <div class="flex items-center w-full">
                        <div class="flex-1 truncate">{{ item.name }}</div>
                        <code class="bg-base-300 text-base-content">{{
                            item.duration | mediaDuration
                        }}</code>
                    </div>
                </button>
            </mat-menu>
        </main>
        <footer
            class="p-2 flex items-center justify-end space-x-2 border-t border-base-300"
            *ngIf="!loading"
        >
            <button btn matRipple class="w-32" (click)="saveDisplay()">
                Save Display
            </button>
        </footer>
        <ng-template
            #actions_template
            let-row="row"
            let-first="first"
            let-last="last"
        >
            <div class="w-full flex items-center justify-end">
                <button
                    icon
                    matRipple
                    matTooltip="Move Playlist to previous item"
                    [disabled]="first"
                    (click)="changeOrder(row, -1)"
                >
                    <app-icon>arrow_upward</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    matTooltip="Move Playlist to next item"
                    [disabled]="last"
                    (click)="changeOrder(row, 1)"
                >
                    <app-icon>arrow_downward</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    matTooltip="Preview Playlist"
                    (click)="previewPlaylist(row)"
                >
                    <app-icon>visibility</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    matTooltip="Remove Playlist from Display"
                    class="text-error"
                    (click)="removePlaylist(row)"
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </ng-template>

        <ng-template #duration_template let-data="data">
            <code class="bg-base-300 text-base-content">
                {{ data | mediaDuration }}
            </code>
        </ng-template>
        <ng-template #load_state>
            <main class="flex flex-col items-center justify-center p-8">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="mt-4">Saving Display...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class SignageDisplayModalComponent {
    public loading = false;
    public readonly display = this._data;
    public readonly playlists = combineLatest([
        this._state.playlists,
        this._state.media,
    ]).pipe(
        map(([playlists, media]) =>
            playlists.map((_) => ({
                ..._,
                duration: _.media.reduce(
                    (a, b) =>
                        a +
                        (_.media_durations[b] ||
                            media.find(({ id }) => id === b)?.duration ||
                            0),
                    0
                ),
            }))
        ),
        tap(console.log)
    );

    public readonly search = new BehaviorSubject('');

    public readonly form = new FormGroup({
        id: new FormControl(this.display.id || ''),
        name: new FormControl(this.display.name || '', [Validators.required]),
        description: new FormControl(this.display.description || ''),
        orientation: new FormControl(this.display.orientation || 'landscape', [
            Validators.required,
        ]),
        playlists: new FormControl(this.display.playlists || []),
    });

    public readonly playlist_list = combineLatest([
        this.playlists,
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

    public readonly new_playlists = combineLatest([
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

    public focusSearchInput() {
        setTimeout(() => this.search_input.nativeElement?.focus(), 100);
    }

    public async saveDisplay() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (this.form.invalid) return;
        this.loading = true;
        await this._state.saveDisplay(this.form.getRawValue()).catch((_) => {
            notifyError('Error saving display.');
            this.loading = false;
            throw _;
        });
        this._dialog_ref.close();
    }

    public addPlaylist(item: SignagePlaylist) {
        const { id } = item;
        const { playlists } = this.form.getRawValue();
        this.form.patchValue({
            playlists: [...playlists, id],
        });
    }

    public removePlaylist(item: SignagePlaylist) {
        const { playlists } = this.form.getRawValue();
        const index = playlists.indexOf(item.id);
        const new_playlists = [...playlists];
        new_playlists.splice(index, 1);
        this.form.patchValue({
            playlists: new_playlists,
        });
    }

    public changeOrder(item: SignagePlaylist, direction: number) {
        const { playlists } = this.form.getRawValue();
        const index = playlists.indexOf(item.id);
        const new_playlists = [...playlists];
        new_playlists.splice(index, 1);
        new_playlists.splice(index + direction, 0, item.id);
        this.form.patchValue({
            playlists: new_playlists,
        });
    }

    public previewPlaylist(item: SignagePlaylist) {}
}
