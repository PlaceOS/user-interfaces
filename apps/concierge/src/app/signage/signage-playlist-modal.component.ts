import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogRef,
} from '@angular/material/dialog';
import { SignageStateService } from './signage-state.service';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { notifyError } from '@placeos/common';
import { MediaAnimation } from '@placeos/ts-client/dist/esm/signage/media.class';
import { SignagePlaylist } from '@placeos/ts-client';
import { addYears, endOfDay, getUnixTime, startOfDay } from 'date-fns';

@Component({
    selector: 'signage-playlist-modal',
    template: `
        <header
            class="flex items-center justify-between border-b border-base-300"
        >
            <h1 class="p-2 font-medium text-xl">
                {{ playlist.id ? 'Edit' : 'New' }} Playlist
            </h1>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            [formGroup]="form"
            class="p-4 flex flex-col w-[32rem] max-w-[calc(100vw-2rem)]"
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
            <div class="flex items-center space-x-8 mb-4">
                <mat-checkbox formControlName="enabled">Enabled</mat-checkbox>
                <mat-checkbox formControlName="random">
                    Shuffle Playback
                </mat-checkbox>
            </div>
            <div class="flex items-center space-x-4">
                <label for="default-duration" class="w-auto min-w-0 m-0">
                    Default Play Time</label
                >
                <div class="text-xs font-mono">
                    {{ form.value.default_duration / 1000 | mediaDuration }}
                </div>
            </div>
            <mat-slider min="5000" max="300000" step="1000">
                <input
                    name="default-duration"
                    matSliderThumb
                    formControlName="default_duration"
                />
            </mat-slider>
            <div class="flex space-x-2">
                <div class="flex-1">
                    <label for="orientation">Orientation</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            name="orientation"
                            formControlName="orientation"
                            placeholder="Unspecified"
                        >
                            <mat-option value="unspecified">
                                Unspecified
                            </mat-option>
                            <mat-option value="landscape">Landscape</mat-option>
                            <mat-option value="portrait">Portrait</mat-option>
                            <mat-option value="square">Square</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex-1">
                    <label for="animation">Animation</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            name="animation"
                            formControlName="default_animation"
                            placeholder="Playlist Default"
                        >
                            <mat-option [value]="0">Cut</mat-option>
                            <mat-option [value]="1">Cross Fade</mat-option>
                            <mat-option [value]="2">Slide Top</mat-option>
                            <mat-option [value]="3">Slide Left</mat-option>
                            <mat-option [value]="4">Slide Right</mat-option>
                            <mat-option [value]="5">Slide Bottom</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <label for="description">Description</label>
            <mat-form-field appearance="outline" class="w-full">
                <textarea
                    matInput
                    name="description"
                    placeholder="Description"
                    formControlName="description"
                    class="min-h-32"
                ></textarea>
            </mat-form-field>
            <div class="flex space-x-4">
                <div class="flex-1">
                    <label for="valid-from">Valid From</label>
                    <a-date-field
                        name="valid-from"
                        formControlName="valid_from"
                    ></a-date-field>
                </div>
                <div class="flex-1">
                    <label for="valid-until">Valid Until</label>
                    <a-date-field
                        name="valid-until"
                        [from]="form.value.valid_from"
                        formControlName="valid_until"
                        [disabled]="!form.value.valid_from"
                    ></a-date-field>
                </div>
            </div>
        </main>
        <footer
            class="p-4 flex items-center justify-end space-x-2 border-t border-base-300"
            *ngIf="!loading"
        >
            <button btn matRipple class="w-32" (click)="savePlaylist()">
                Save Playlist
            </button>
        </footer>
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
        default_animation: new FormControl<MediaAnimation | null>(
            this.playlist.default_animation,
        ),
        orientation: new FormControl(
            this.playlist.orientation || 'unspecified',
        ),
        enabled: new FormControl(this.playlist.enabled),
        random: new FormControl(this.playlist.random),
        default_duration: new FormControl(
            this.playlist.default_duration || 15 * 1000,
        ),
        valid_from: new FormControl(this.playlist.valid_from * 1000),
        valid_until: new FormControl(this.playlist.valid_until * 1000),
    });

    @ViewChild('search_input')
    public search_input: ElementRef<HTMLInputElement>;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: SignagePlaylist = {} as any,
        private _state: SignageStateService,
        private _dialog: MatDialog,
        private _dialog_ref: MatDialogRef<SignagePlaylistModalComponent>,
    ) {}

    public async savePlaylist() {
        this.form.markAllAsTouched();
        this.form.updateValueAndValidity();
        if (this.form.invalid) return;
        this.loading = true;
        const form_value = this.form.getRawValue();
        const result = await this._state
            .savePlaylist({
                ...form_value,
                valid_from: getUnixTime(form_value.valid_from),
                valid_until: getUnixTime(form_value.valid_until),
            })
            .catch((_) => {
                notifyError('Error saving playlist');
                this.loading = false;
                throw _;
            });
        this._dialog_ref.close(result);
    }
}
