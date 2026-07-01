import { Component, OnInit, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { AsyncHandler, User } from '@placeos/common';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'schedule-view-attendees',
    template: `
        <header>
            <icon
                [icon]="{
                    type: 'icon',
                    class: 'material-symbols-rounded',
                    content: 'people_outline',
                }"
            ></icon>
            <h1>Attendees</h1>
        </header>
        <mat-dialog-content>
            <div class="body">
                @for (item of attendees(); track item) {
                    <div>
                        <icon
                            [icon]="{
                                type: 'icon',
                                class: 'material-symbols-rounded',
                                content: 'perm_identity',
                            }"
                        ></icon>
                        <label>{{ item.name }}</label>
                        <a href="mailto:{{ item.email }}">{{ item.email }}</a>
                    </div>
                }
            </div>
        </mat-dialog-content>
        <mat-dialog-actions>
            <footer>
                <button btn matRipple class="inverse" mat-dialog-close>
                    Close
                </button>
            </footer>
        </mat-dialog-actions>
    `,
    styles: [
        `
            .body {
                display: flex;
                flex-direction: column;
                row-gap: 0.5em;

                div {
                    display: grid;
                    grid-template-columns: 3em 1fr;
                    grid-template-rows: 1fr 1fr;
                    grid-template-areas: 'icon name' 'icon email';
                    margin-bottom: 0.5em;
                    align-items: center;

                    icon {
                        margin: auto;
                        grid-area: icon;
                        font-size: 2em;
                    }
                    label {
                        grid-area: name;
                    }
                    a {
                        grid-area: email;
                    }
                }
            }
        `,
    ],
    imports: [MatDialogModule, IconComponent],
})
export class ViewAttendeesModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _data = inject<{
        attendees: User[];
    }>(MAT_DIALOG_DATA);

    public attendees = signal<User[]>([]);

    public ngOnInit() {
        this.attendees.set(this._data.attendees);
    }
}
