import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    debounced,
    inject,
    resource,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StaffUser } from '@placeos/common';
import { queryUsers } from '@placeos/ts-client';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

@Component({
    selector: `select-user-modal`,
    template: ` <div class="w-md">
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'COMMON.SELECT_USER_TITLE' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[60vh] overflow-auto px-2 pb-2">
            <mat-form-field
                class="no-subscript bg-base-100 sticky top-0 z-10 mb-2 w-full"
                appearance="outline"
            >
                <icon class="relative -left-2 text-2xl" matPrefix>search</icon>
                <input
                    matInput
                    [placeholder]="'COMMON.SELECT_USER_SEARCH' | translate"
                    [(ngModel)]="search"
                />
            </mat-form-field>
            <div class="relative z-0 w-full space-y-2">
                @for (user of users(); track user) {
                    <button
                        class="border-base-300 hover:bg-base-200 w-full rounded-sm border p-2 text-left"
                        matRipple
                        (click)="select(user)"
                    >
                        <div>{{ user.name }}</div>
                        <div class="text-xs opacity-30">{{ user.email }}</div>
                    </button>
                }
                @if (!users().length) {
                    <div
                        class="flex h-32 w-full items-center justify-center p-8 opacity-30"
                    >
                        {{
                            (search()
                                ? 'COMMON.SELECT_USER_EMPTY_MATCHES'
                                : 'COMMON.SELECT_USER_EMPTY'
                            ) | translate
                        }}
                    </div>
                }
            </div>
        </main>
    </div>`,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FormsModule,
        IconComponent,
    ],
})
export class SelectUserModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<SelectUserModalComponent>>(MatDialogRef);

    public readonly search = signal('');

    private readonly _debounced_search = debounced(this.search, 300);
    private readonly _users = resource({
        params: () => ({ q: this._debounced_search.value() }),
        loader: ({ params: { q } }) =>
            queryUsers({ q })
                .then((o) => o.data.map((u) => new StaffUser(u)))
                .catch(() => [] as StaffUser[]),
    });
    public readonly users = computed(() => this._users.value() ?? []);

    public select(user: StaffUser) {
        this._dialog_ref.close(user);
    }
}
