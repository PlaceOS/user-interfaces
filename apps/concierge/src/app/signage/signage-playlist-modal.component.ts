import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { SignageStateService } from './signage-state.service';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { SignageMedia, SignagePlaylist } from './signage.classes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map, startWith } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { SignageMediaPreviewModalComponent } from './signage-media-preview-modal.component';
import { notifyError, notifySuccess } from '@placeos/common';
import { th } from 'date-fns/locale';

@Component({
    selector: 'signage-playlist-modal',
    template: `
        <header
            class="flex items-center justify-between p-2 border-b border-base-300"
        >
            <h1 class="px-2">{{ playlist.id ? 'Edit' : 'New' }} Playlist</h1>
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
            <label for="media">Media</label>
            <custom-table
                class="block w-full mb-2"
                [dataSource]="media_list"
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
                Add Media
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
                    *ngFor="let item of new_media | async | slice: 0:8"
                    (click)="addMedia(item)"
                >
                    <div class="flex items-center w-full">
                        <div class="flex-1 truncate">{{ item.name }}</div>
                        <code class="capitalize">{{ item.type }}</code>
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
            <button btn matRipple class="w-32" (click)="savePlaylist()">
                Save Playlist
            </button>
        </footer>
        <ng-template #duration_template let-row="row">
            <button
                matTooltip="Set Custom Duration"
                [matMenuTriggerFor]="duration_menu"
                [class.pointer-events-none]="row.type !== 'image'"
            >
                <code
                    [class.bg-warning]="form.value.media_durations[row.id]"
                    [class.text-warning-content]="
                        form.value.media_durations[row.id]
                    "
                >
                    {{
                        form.value.media_durations[row.id] || row.duration
                            | mediaDuration
                    }}
                </code>
            </button>
            <mat-menu #duration_menu="matMenu" class="w-[20rem] max-w-[80vw]">
                <mat-form-field
                    appearance="outline"
                    class="w-[calc(100%-1rem)] mx-2 no-subscript"
                >
                    <mat-select
                        [ngModel]="form.value.media_durations[row.id] || 0"
                        (ngModelChange)="setDuration(row.id, $event)"
                        [ngModelOptions]="{ standalone: true }"
                    >
                        <mat-option [value]="0">Use Media Default</mat-option>
                        <mat-option [value]="5">5 seconds</mat-option>
                        <mat-option [value]="10">10 seconds</mat-option>
                        <mat-option [value]="15">15 seconds</mat-option>
                        <mat-option [value]="30">30 seconds</mat-option>
                        <mat-option [value]="45">45 seconds</mat-option>
                        <mat-option [value]="60">1 minute</mat-option>
                        <mat-option [value]="75"
                            >1 minute 15 seconds</mat-option
                        >
                        <mat-option [value]="90"
                            >1 minute 30 seconds</mat-option
                        >
                        <mat-option [value]="105"
                            >1 minute 45 seconds</mat-option
                        >
                        <mat-option [value]="120">2 minute</mat-option>
                        <mat-option [value]="135"
                            >2 minute 15 seconds</mat-option
                        >
                        <mat-option [value]="150"
                            >2 minute 30 seconds</mat-option
                        >
                        <mat-option [value]="165"
                            >2 minute 45 seconds</mat-option
                        >
                        <mat-option [value]="180">3 minute</mat-option>
                        <mat-option [value]="195"
                            >3 minute 15 seconds</mat-option
                        >
                        <mat-option [value]="210"
                            >3 minute 30 seconds</mat-option
                        >
                        <mat-option [value]="225"
                            >3 minute 45 seconds</mat-option
                        >
                        <mat-option [value]="240">4 minute</mat-option>
                        <mat-option [value]="255"
                            >4 minute 15 seconds</mat-option
                        >
                        <mat-option [value]="270"
                            >4 minute 30 seconds</mat-option
                        >
                        <mat-option [value]="285"
                            >4 minute 45 seconds</mat-option
                        >
                        <mat-option [value]="300">5 minute</mat-option>
                    </mat-select>
                </mat-form-field>
            </mat-menu>
        </ng-template>
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
                    matTooltip="Move Media to previous item"
                    [disabled]="first"
                    (click)="changeOrder(row, -1)"
                >
                    <app-icon>arrow_upward</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    matTooltip="Move Media to next item"
                    [disabled]="last"
                    (click)="changeOrder(row, 1)"
                >
                    <app-icon>arrow_downward</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    matTooltip="Preview Media"
                    (click)="previewMedia(row)"
                >
                    <app-icon>visibility</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    matTooltip="Remove Media from Playlist"
                    class="text-error"
                    (click)="removeMedia(row)"
                >
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </ng-template>
        <ng-template #load_state>
            <main class="flex flex-col items-center justify-center p-8">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="mt-4">Saving Playlist...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class SignagePlaylistModalComponent {
    public loading = false;
    public readonly playlist = this._data;
    public readonly media = this._state.media;

    public readonly search = new BehaviorSubject('');

    public readonly form = new FormGroup({
        id: new FormControl(this.playlist.id || ''),
        name: new FormControl(this.playlist.name || '', [Validators.required]),
        description: new FormControl(this.playlist.description || ''),
        media: new FormControl(this.playlist.media || []),
        media_durations: new FormControl(this.playlist.media_durations || {}),
    });

    public readonly media_list = combineLatest([
        this.media,
        this.form.valueChanges.pipe(startWith(this.form.getRawValue())),
    ]).pipe(
        map(([media_list, { media }]) =>
            (this.form.getRawValue().media || []).map(
                (id) =>
                    media_list.find((_) => _.id === id) ||
                    new SignageMedia({ id })
            )
        )
    );

    public readonly new_media = combineLatest([
        this.media,
        this.search,
        this.form.valueChanges.pipe(startWith(this.form.getRawValue())),
    ]).pipe(
        map(([all_media, search, _]) =>
            all_media
                .filter((_) => !this.form.getRawValue().media.includes(_.id))
                .filter((_) =>
                    _.name.toLowerCase().includes(search.toLowerCase())
                )
        )
    );

    @ViewChild('search_input')
    public search_input: ElementRef<HTMLInputElement>;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: SignagePlaylist = {} as any,
        private _state: SignageStateService,
        private _dialog: MatDialog,
        private _dialog_ref: MatDialogRef<SignagePlaylistModalComponent>
    ) {}

    public indexOf(id: string) {
        return this.form.getRawValue().media.indexOf(id);
    }

    public focusSearchInput() {
        setTimeout(() => this.search_input.nativeElement?.focus(), 100);
    }

    public async savePlaylist() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (this.form.invalid) return;
        this.loading = true;
        await this._state.savePlaylist(this.form.getRawValue()).catch((_) => {
            notifyError('Error saving playlist');
            this.loading = false;
            throw _;
        });
        this._dialog_ref.close();
    }

    public setDuration(id: string, duration: number) {
        const { media_durations } = this.form.getRawValue();
        const new_media_durations = { ...media_durations };
        new_media_durations[id] = duration;
        this.form.patchValue({ media_durations: new_media_durations });
    }

    public addMedia(item: SignageMedia) {
        const { id } = item;
        const { media } = this.form.getRawValue();
        this.form.patchValue({
            media: [...media, id],
        });
    }

    public removeMedia(item: SignageMedia) {
        const { media, media_durations } = this.form.getRawValue();
        const index = media.indexOf(item.id);
        const new_media = [...media];
        delete media_durations[item.id];
        new_media.splice(index, 1);
        this.form.patchValue({
            media: new_media,
            media_durations: { ...media_durations },
        });
    }

    public changeOrder(item: SignageMedia, direction: number) {
        const { media } = this.form.getRawValue();
        const index = media.indexOf(item.id);
        const new_media = [...media];
        new_media.splice(index, 1);
        new_media.splice(index + direction, 0, item.id);
        this.form.patchValue({
            media: new_media,
        });
    }

    public previewMedia(item: SignageMedia) {
        const { url, type, name } = item;
        const ref = this._dialog.open(SignageMediaPreviewModalComponent, {
            data: { url, type, name, save: false },
        });
        ref.afterClosed().subscribe(() => URL.revokeObjectURL(url));
    }
}
