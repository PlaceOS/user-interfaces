import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'attendee-list',
    template: `
        <div class="w-full h-full overflow-hidden flex flex-col bg-base-100">
            <div class="flex items-center border-b border-base-200 p-2">
                <button close icon matRipple (click)="close.emit()">
                    <app-icon>arrow_back</app-icon>
                </button>
                <div class="flex-1 text-center pr-12 font-medium" i18n>
                    {{ list.length }} { list.length, plural, =1 { Attendee }
                    other { Attendees } }
                </div>
            </div>
            <div class="flex-1 w-full overflow-auto">
                <div
                    attendee
                    class="flex items-center p-2 space-x-2"
                    *ngFor="let user of list"
                >
                    <a-user-avatar [user]="user"></a-user-avatar>
                    <div class="">
                        <div>{{ user.name }}</div>
                        <div class="opacity-60">
                            <span *ngIf="host === user.email" i18n>Host</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [``],
})
export class AttendeeListComponent {
    @Input() public host: string = '';
    @Input() public list: any[] = [];
    @Output() public close = new EventEmitter();
}
