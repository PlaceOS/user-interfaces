import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent } from '@placeos/components';
import { PlaceCurrentGroup, SignagePlaylist } from '@placeos/ts-client';

export interface PlaylistRequestApprovalModalData {
    playlist: SignagePlaylist;
    groups: PlaceCurrentGroup[];
    selected_group_id?: string;
}

export interface PlaylistRequestApprovalModalResult {
    group_id: string;
    message: string;
}

@Component({
    selector: 'playlist-request-approval-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">Request Approval</h2>
            <button
                icon
                type="button"
                matRipple
                mat-dialog-close
                aria-label="Close request approval dialog"
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="flex max-h-[70vh] w-[28rem] max-w-[calc(100vw-2rem)] flex-col gap-4 overflow-auto px-4 pt-2 pb-4 max-md:w-auto max-md:flex-1"
        >
            <div>
                <div class="text-base-content/70 text-sm">Playlist</div>
                <div class="font-medium">{{ data.playlist.name }}</div>
            </div>
            <div>
                <label for="approval-group"
                    >Group to request approval from</label
                >
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        name="approval-group"
                        [(ngModel)]="selected_group_id"
                        required
                    >
                        @for (item of data.groups; track item.group.id) {
                            <mat-option [value]="item.group.id">
                                {{ item.group.name || item.group.id }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <div>
                <label for="message">Message</label>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <textarea
                        matInput
                        name="message"
                        class="min-h-28 resize-y"
                        placeholder="Add a note for the approvers..."
                        [(ngModel)]="message"
                    ></textarea>
                </mat-form-field>
            </div>
        </main>
        <footer
            class="border-base-300 bg-base-100 sticky bottom-0 flex justify-end gap-2 border-t p-4"
        >
            <button
                btn
                type="button"
                matRipple
                class="inverse w-36"
                mat-dialog-close
            >
                Cancel
            </button>
            <button
                btn
                type="button"
                matRipple
                class="w-44"
                [disabled]="!selected_group_id()"
                (click)="submit()"
            >
                Request Approval
            </button>
        </footer>
    `,
    imports: [
        FormsModule,
        MatRippleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        IconComponent,
    ],
})
export class PlaylistRequestApprovalModalComponent {
    public readonly data =
        inject<PlaylistRequestApprovalModalData>(MAT_DIALOG_DATA);
    private readonly _dialog_ref =
        inject<
            MatDialogRef<
                PlaylistRequestApprovalModalComponent,
                PlaylistRequestApprovalModalResult
            >
        >(MatDialogRef);

    public readonly selected_group_id = signal(
        this.data.selected_group_id || this.data.groups[0]?.group.id || '',
    );
    public readonly message = signal('');

    public submit() {
        const group_id = this.selected_group_id();
        if (!group_id) return;
        this._dialog_ref.close({ group_id, message: this.message().trim() });
    }
}
