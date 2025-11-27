import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    AsyncHandler,
    notifyError,
    notifySuccess,
    User,
} from '@placeos/common';
import {
    IconComponent,
    TranslatePipe,
    UserAvatarComponent,
} from '@placeos/components';
import { LandingStateService } from '../landing/landing-state.service';

@Component({
    selector: 'add-colleagues-modal',
    standalone: true,
    template: `
        <div
            class="relative flex h-screen w-screen flex-col sm:h-auto sm:w-[32rem]"
        >
            <!-- Header -->
            <header
                class="sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded border-none bg-base-200 p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{ 'APP.WORKPLACE.COLLEAGUES_ADD' | translate }}
                </h2>
                <button icon matRipple class="h-10 w-10" (click)="dismiss()">
                    <icon>close</icon>
                </button>
            </header>

            <!-- Content -->
            <main class="flex-1 overflow-auto p-4">
                <p class="mb-4 text-sm opacity-60">
                    {{ 'APP.WORKPLACE.COLLEAGUES_ADD_DESCRIPTION' | translate }}
                </p>

                <!-- Search Filter -->
                <mat-form-field
                    appearance="outline"
                    class="no-subscript mb-4 w-full"
                >
                    <icon
                        matPrefix
                        class="block flex w-6 items-center justify-center text-2xl"
                        >search</icon
                    >
                    <input
                        matInput
                        [(ngModel)]="search_term"
                        [placeholder]="
                            'APP.WORKPLACE.COLLEAGUE_SEARCH' | translate
                        "
                        [disabled]="loading_users()"
                    />
                    @if (loading_users()) {
                        <mat-spinner matSuffix diameter="24"></mat-spinner>
                    }
                </mat-form-field>

                <!-- Available Users List -->
                @if (search_term && search_term.length > 2) {
                    @let user_list = available_users();
                    @if (loading_users()) {
                        <div class="flex items-center justify-center py-8">
                            <mat-spinner [diameter]="32"></mat-spinner>
                        </div>
                    } @else if (user_list.length > 0) {
                        <div class="mb-4 space-y-2">
                            <div class="text-sm font-medium">
                                {{
                                    'APP.WORKPLACE.COLLEAGUES_AVAILABLE'
                                        | translate
                                }}
                            </div>
                            <div class="max-h-64 space-y-2 overflow-auto">
                                @for (user of user_list; track user.email) {
                                    <button
                                        class="flex w-full items-center space-x-2 rounded border border-base-300 bg-base-100 p-2 text-left hover:bg-base-200"
                                        matRipple
                                        [disabled]="
                                            loading() ||
                                            isUserSelected(user) ||
                                            isExistingContact(user)
                                        "
                                        (click)="toggleUser(user)"
                                    >
                                        <a-user-avatar [user]="user" />
                                        <div
                                            class="flex w-16 flex-1 flex-col leading-tight"
                                        >
                                            <div class="truncate">
                                                {{ user.name }}
                                            </div>
                                            <div
                                                class="truncate text-xs opacity-60"
                                            >
                                                {{ user.email }}
                                            </div>
                                        </div>
                                        @if (isExistingContact(user)) {
                                            <div class="text-xs opacity-60">
                                                {{
                                                    'APP.WORKPLACE.COLLEAGUES_EXISTS'
                                                        | translate
                                                }}
                                            </div>
                                        } @else if (isUserSelected(user)) {
                                            <icon class="text-success"
                                                >check_circle</icon
                                            >
                                        } @else {
                                            <icon class="opacity-30"
                                                >radio_button_unchecked</icon
                                            >
                                        }
                                    </button>
                                }
                            </div>
                        </div>
                    } @else {
                        <div
                            class="flex flex-col items-center justify-center rounded-xl bg-base-200 py-16 text-sm opacity-60"
                        >
                            <icon class="mb-2 text-4xl">person_cancel</icon>
                            <div>{{ 'FORM.USER_EMPTY' | translate }}</div>
                        </div>
                    }
                } @else {
                    <div
                        class="flex flex-col items-center justify-center rounded-xl bg-base-200 py-16 text-sm opacity-60"
                    >
                        <icon class="mb-2 text-4xl">search</icon>
                        <p>
                            {{
                                (search_term
                                    ? 'APP.WORKPLACE.COLLEAGUE_SEARCH_NO_MATCH'
                                    : 'APP.WORKPLACE.COLLEAGUE_SEARCH_EMPTY'
                                ) | translate
                            }}
                        </p>
                    </div>
                }

                <!-- Selected Users List -->
                @if (selected_users().length > 0) {
                    <div class="mt-4 space-y-2 border-t border-base-200 pt-4">
                        <div class="text-sm font-medium">
                            {{
                                'APP.WORKPLACE.COLLEAGUES_SELECTED'
                                    | translate
                                        : {
                                              count: selected_users().length,
                                          }
                                        : selected_users().length
                            }}
                        </div>
                        @for (user of selected_users(); track user.email) {
                            <div
                                class="bg-success/10 flex items-center space-x-2 rounded border border-base-300 p-2"
                            >
                                <a-user-avatar [user]="user" />
                                <div
                                    class="flex w-16 flex-1 flex-col leading-tight"
                                >
                                    <div class="truncate">{{ user.name }}</div>
                                    <div class="truncate text-xs opacity-60">
                                        {{ user.email }}
                                    </div>
                                </div>
                                <button
                                    icon
                                    matRipple
                                    (click)="toggleUser(user)"
                                    [disabled]="loading()"
                                >
                                    <icon>close</icon>
                                </button>
                            </div>
                        }
                    </div>
                }

                @if (loading()) {
                    <div
                        class="mt-4 flex items-center justify-center space-x-2"
                    >
                        <mat-spinner [diameter]="24"></mat-spinner>
                        <span class="text-sm opacity-60">{{
                            'APP.WORKPLACE.COLLEAGUES_ADDING' | translate
                        }}</span>
                    </div>
                }
            </main>

            <!-- Footer -->
            <footer
                class="flex items-center justify-between gap-2 border-t border-base-200 p-4"
            >
                <button
                    btn
                    matRipple
                    class="inverse flex-1"
                    (click)="dismiss()"
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [disabled]="loading() || selected_users().length === 0"
                    (click)="confirm()"
                >
                    {{
                        'APP.WORKPLACE.COLLEAGUES_ADD_CONFIRM'
                            | translate
                                : {
                                      count: selected_users().length,
                                  }
                                : selected_users().length
                    }}
                </button>
            </footer>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        FormsModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        UserAvatarComponent,
    ],
})
export class AddColleaguesModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(LandingStateService);
    private _dialog_ref = inject(MatDialogRef<AddColleaguesModalComponent>, {
        optional: true,
    });

    public readonly loading = signal(false);
    public readonly selected_users = signal<User[]>([]);
    public readonly search_term_signal = signal('');

    private readonly _search_results = toSignal(this._state.search_results, {
        initialValue: [],
    });
    private readonly _loading_state = toSignal(this._state.loading, {
        initialValue: '',
    });
    private readonly _existing_contacts = toSignal(this._state.contacts, {
        initialValue: [],
    });

    public readonly loading_users = computed(() => !!this._loading_state());
    public readonly available_users = computed(() => this._search_results());
    public readonly existing_contacts = computed(() =>
        this._existing_contacts(),
    );

    public get search_term() {
        return this.search_term_signal();
    }

    public set search_term(value: string) {
        this.search_term_signal.set(value);
        this._state.setOptions({ search: value });
    }

    ngOnInit() {
        // Initialize with empty search
        this._state.setOptions({ search: '' });
    }

    public toggleUser(user: User) {
        const current_users = this.selected_users();
        const is_selected = current_users.find((u) => u.email === user.email);

        if (is_selected) {
            // Remove from selection
            this.selected_users.set(
                current_users.filter((u) => u.email !== user.email),
            );
        } else {
            // Add to selection
            this.selected_users.set([...current_users, user]);
        }
    }

    public isUserSelected(user: User): boolean {
        return !!this.selected_users().find((u) => u.email === user.email);
    }

    public isExistingContact(user: User): boolean {
        return !!this.existing_contacts().find((u) => u.email === user.email);
    }

    public async confirm() {
        this.loading.set(true);
        try {
            // Add all selected users as contacts
            await this._state.addContacts(this.selected_users());
            const count = this.selected_users().length;
            notifySuccess(
                count === 1
                    ? 'Colleague added successfully'
                    : `${count} colleagues added successfully`,
            );

            this._dialog_ref?.close(true);
        } catch (error) {
            console.error('Error adding colleagues:', error);
            notifyError('Failed to add colleagues. Please try again.');
        } finally {
            this.loading.set(false);
        }
    }

    public dismiss() {
        this._dialog_ref?.close(false);
    }
}
