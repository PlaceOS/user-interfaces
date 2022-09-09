import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseClass } from '@placeos/common';
import { User } from '../user.class';

export interface FindAvailabilityData {
    host: User;
    users: User[];
    date: number;
    duration: number;
}

@Component({
    selector: 'find-availability-modal',
    template: `
        <header class="relative flex items-center justify-center p-4">
            <h2 class="text-center">Find Availability</h2>
            <button
                mat-icon-button
                mat-dialog-close
                class="absolute top-1/2 left-1 -translate-y-1/2"
            >
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="flex flex-col h-[calc(100vh-3rem)] sm:h-[65vh]" (window:resize)="updateWidth()">
            <div class="w-full flex flex-col sm:flex-row sm:space-x-2 p-2">
                <a-date-field [(ngModel)]="date" class="h-[3.25rem]"></a-date-field>
                <mat-form-field appearance="outline" class="h-[3.25rem]">
                    <app-icon matPrefix class="text-xl">search</app-icon>
                    <input
                        matInput
                        [(ngModel)]="search"
                        placeholder="Type a name or email to add"
                    />
                </mat-form-field>
            </div>
            <div
                #container
                class="flex flex-1 h-1/2 w-full border-t border-gray-300 relative overflow-auto divide-x divide-gray-300 max-w-[100vw] sm:max-w-[80vw]"
                (scroll)="updateScroll()"
            >
                <div users class="sticky left-0 min-h-full bg-white border-r border-gray-300">
                    <div header class="h-10 w-[6rem] border-b border-gray-300"></div>
                    <div host class="flex flex-col items-center justify-center h-24 w-[6rem] relative border-b border-gray-300">
                        <a-user-avatar class="text-2xl" [user]="host"></a-user-avatar>
                        <div class="text-xs break-words overflow-hidden max-w-full">{{ host.name || host.email }}</div>
                        <user-availability-list
                            class="absolute top-0 -bottom-px left-full"
                            [user]="host"
                            [date]="date"
                            [offset]="offset"
                            [width]="width"
                        ></user-availability-list>
                    </div>
                    <div
                        person
                        class="flex flex-col items-center justify-center h-24 w-[6rem] relative border-b border-gray-300"
                        *ngFor="let user of users"
                    >
                        <a-user-avatar class="text-2xl" [user]="host"></a-user-avatar>
                        <div class="text-xs break-words overflow-hidden max-w-full">{{ user.name || host.email }}</div>
                        <button mat-icon-button class="absolute top-0 left-0">
                            <app-icon>close</app-icon>
                        </button>
                        <user-availability-list
                            class="absolute top-0 -bottom-px left-full"
                            [user]="user"
                            [date]="date"
                            [offset]="offset"
                            [width]="width"
                        ></user-availability-list>
                    </div>
                </div>
                <div
                    hour
                    class="min-w-[5rem] bg-gray-50 min-h-full"
                    *ngFor="let h of hours; let i = index"
                >
                    <div header class="h-10 border-b border-gray-300 p-2">
                        {{ i % 12 ? i % 12 : '12' }}{{ i >= 12 ? 'pm' : 'am' }}
                    </div>
                </div>
            </div>
        </main>
    `,
    styles: [``],
})
export class FindAvailabilityModalComponent extends BaseClass {
    public search = '';
    public date = this._data.date || Date.now();
    public users = [...this._data.users];
    public offset = 0;
    public width = 0;

    public readonly host = this._data.host;
    public readonly hours = new Array(24).fill(0);

    @ViewChild('container', { static: true }) private _container_el!: ElementRef<HTMLDivElement>;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: FindAvailabilityData,
        private _dialog_ref: MatDialogRef<FindAvailabilityModalComponent>
    ) {
        super();
    }

    public ngAfterViewInit() {
        this.timeout('init', () => {
            this.updateWidth();
            this.updateScroll();
        }, 300);
    }

    public updateWidth() {
        const container_size = this._container_el.nativeElement.getBoundingClientRect().width;
        const user_list_size = this._container_el.nativeElement.querySelector('[users]').getBoundingClientRect().width;
        console.log('Sizes:', container_size, user_list_size);
        this.width = Math.floor(container_size - user_list_size);
    }

    public updateScroll() {
        this.offset = this._container_el.nativeElement.scrollLeft;
    }
}
