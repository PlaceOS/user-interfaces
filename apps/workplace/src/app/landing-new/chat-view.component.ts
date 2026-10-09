import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
    MatBottomSheetModule,
    MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { userSignal } from '@placeos/common';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'app-chat-view',
    template: `
        <div
            class="bg-secondary text-secondary-content relative max-h-[80vh] w-screen max-w-full overflow-auto"
        >
            <button
                icon
                matRipple
                class="absolute top-2 right-2 h-16 w-16"
                (click)="close()"
            >
                <icon class="text-3xl">close</icon>
            </button>
            <div
                class="mx-auto flex w-[48rem] max-w-full flex-col items-center space-y-4 p-8"
            >
                <h2 class="text-xl font-medium">
                    Welcome {{ user().name }}, it's
                    {{ time() | date: 'fullDate' }}
                </h2>
                <div
                    class="border-base-100 relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border"
                >
                    <div
                        class="bg-base-100 absolute z-0 h-full w-full opacity-30"
                    ></div>
                    <img class="z-10 h-16" src="assets/icons/roybot.png" />
                </div>
                <p>I'm Ben, your virtual concierge</p>
                <h4 class="w-full opacity-60">Try asking me:</h4>
                <div class="-mx-1 flex flex-wrap">
                    <button btn matRipple class="inverse white m-1">
                        Book a meeting room tomorrow at 2pm for 4 people
                    </button>
                    <button btn matRipple class="inverse white m-1">
                        Find me an available desk near a window
                    </button>
                    <button btn matRipple class="inverse white m-1">
                        Reserve parking for Friday morning
                    </button>
                </div>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        placeholder="Ask Ben anything about your workplace..."
                    />
                </mat-form-field>
                <h3 class="w-full">Quick Actions (In App)</h3>
                <div class="flex w-full space-x-2">
                    <a
                        btn
                        matRipple
                        [routerLink]="['/book', 'meeting']"
                        class="inverse white flex-1"
                        (click)="close()"
                    >
                        <icon>meeting_room</icon>
                        <div>Book meeting</div>
                    </a>
                    <a
                        btn
                        matRipple
                        [routerLink]="['/book', 'desk']"
                        class="inverse white flex-1"
                        (click)="close()"
                    >
                        <icon>desk</icon>
                        <div>Book desk</div>
                    </a>
                    <a
                        btn
                        matRipple
                        [routerLink]="['/your-bookings']"
                        class="inverse white flex-1"
                        (click)="close()"
                    >
                        <icon>event_note</icon>
                        <div>View Schedule</div>
                    </a>
                    <a
                        btn
                        matRipple
                        [routerLink]="['/book', 'parking']"
                        class="inverse white flex-1"
                        (click)="close()"
                    >
                        <icon>local_parking</icon>
                        <div>Book parking</div>
                    </a>
                </div>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatBottomSheetModule,
        IconComponent,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule,
    ],
})
export class ChatViewComponent {
    private _bottom_ref = inject(MatBottomSheetRef<ChatViewComponent>);

    public readonly user = userSignal();
    public readonly time = signal(Date.now());

    public readonly close = () => this._bottom_ref.dismiss();
}
