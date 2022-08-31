import { Component, ElementRef, ViewChild } from '@angular/core';
import { BaseClass, notifySuccess, SettingsService } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { LandingStateService } from './landing-state.service';

@Component({
    selector: 'landing-favourites',
    template: `
            <div class="flex items-center justify-between py-2 mx-2 border-b border-gray-200">
                <h2 class="mx-2">{{ (list | async)?.length || 0 }} Resources</h2>
                <div class="flex items-center space-x-2 text-primary">
                    <button mat-icon-button class="!border !border-solid !border-primary">
                        <app-icon>search</app-icon>
                    </button>
                    <button mat-icon-button class="!border !border-solid !border-primary">
                        <app-icon>filter_list</app-icon>
                    </button>
                </div>
            </div>
            <div class="flex-1 h-1/2 w-full space-y-4 overflow-auto pt-4">
                <ng-container
                    *ngIf="(list | async)?.length; else empty_state"
                >
                    <div
                        class="flex items-center px-4 space-x-4 relative"
                        user
                        *ngFor="let user of list | async"
                    >
                        <div class="text-xl relative">
                            <a-user-avatar [user]="user"></a-user-avatar>
                            <div
                                class="rounded-full h-3 w-3 border border-white dark:border-neutral-400 absolute bottom-1 right-1"
                                [class.bg-error]="!user.location"
                                [class.bg-success]="user.location"
                            ></div>
                        </div>
                        <div class="leading-tight">
                            <div class="truncate">{{ user.name }}</div>
                            <div class="text-sm truncate">
                                {{ user.organisation }}
                            </div>
                            <div class="text-xs opacity-60 truncate">
                                {{ user.location }}
                            </div>
                        </div>
                        <button mat-icon-button class="absolute top-1/2 right-1 -translate-y-1/2 opacity-0" (click)="removeUser(user)">
                            <app-icon>close</app-icon>
                        </button>
                    </div>
                </ng-container>
            </div>
        <ng-template #empty_state>
            <div
                class="w-full h-full flex flex-col items-center justify-center space-y-2 p-8"
            >
                <img src="assets/icons/no-favourites.svg" />
                <p class="opacity-60 text-sm text-center">
                    You have no favourites hearted. To add a favourites heart a room, desk or parking space.
                </p>
            </div>
        </ng-template>
    `,
    styles: [`
        [user]:hover button {
            opacity: 1;
        }

        :host {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    `]
})
export class LandingFavouritesComponent extends BaseClass {

    public readonly list = new BehaviorSubject([]);

    constructor(private _settings: SettingsService) {
        super();
    }
}
