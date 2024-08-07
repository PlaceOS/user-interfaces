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
            class="p-2 flex flex-col w-[24rem]"
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
                    class="min-h-32"
                ></textarea>
            </mat-form-field>
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
                    *ngFor="let item of new_media | async | slice: 0 : 8"
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

    public duration_list = [
        5, 10, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210,
        225, 240, 255, 270, 285, 300,
    ];

    public readonly search = new BehaviorSubject('');

    public readonly form = new FormGroup({
        id: new FormControl(this.playlist.id || ''),
        name: new FormControl(this.playlist.name || '', [Validators.required]),
        description: new FormControl(this.playlist.description || ''),
        media: new FormControl(this.playlist.media || []),
        media_durations: new FormControl(this.playlist.media_durations || {}),
    });

    @ViewChild('search_input')
    public search_input: ElementRef<HTMLInputElement>;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: SignagePlaylist = {} as any,
        private _state: SignageStateService,
        private _dialog: MatDialog,
        private _dialog_ref: MatDialogRef<SignagePlaylistModalComponent>,
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
        const result = await this._state
            .savePlaylist(this.form.getRawValue())
            .catch((_) => {
                notifyError('Error saving playlist');
                this.loading = false;
                throw _;
            });
        this._dialog_ref.close(result);
    }
}
