import { Component } from '@angular/core';
import { ANIMATION_SHOW_CONTRACT_EXPAND } from '@placeos/common';

@Component({
    selector: 'app-sidebar',
    template: `
        <div class="w-64 h-full border-r border-gray-300 p-2 overflow-auto">
            <ng-container *ngFor="let link of links">
                <ng-container *ngIf="!link.children; else group_view">
                    <a
                        matRipple
                        class="flex items-center space-x-2 rounded p-2 hover:bg-black/10 w-full"
                        [routerLink]="['/']"
                        routerLinkActive="active"
                    >
                        <app-icon class="text-2xl opacity-60">{{
                            link.icon
                        }}</app-icon>
                        <span class="font-medium">{{ link.name }}</span>
                    </a>
                </ng-container>
                <ng-template #group_view>
                    <button
                        matRipple
                        *ngIf="link.children?.length"
                        class="flex items-center space-x-2 rounded p-2 hover:bg-black/10 w-full"
                        (click)="show_block[link.id] = !show_block[link.id]"
                    >
                        <app-icon class="text-2xl opacity-60">
                            {{ link.icon }}
                        </app-icon>
                        <div class="font-medium flex-1 text-left">
                            {{ link.name }}
                        </div>
                        <app-icon class="text-2xl">arrow_drop_down</app-icon>
                    </button>
                    <section
                        class="overflow-hidden w-full"
                        *ngIf="link.children?.length"
                        [@show]="!show_block[link.id] ? 'show' : 'hide'"
                    >
                        <a
                            class="flex items-center space-x-2 rounded p-2 hover:bg-black/10 w-full"
                            *ngFor="let child of link.children"
                            [routerLink]="child.route"
                            routerLinkActive="true"
                        >
                            <app-icon class="text-2xl"></app-icon>
                            <span>{{ child.name }}</span>
                        </a>
                    </section>
                </ng-template>
            </ng-container>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
            }

            a.active {
            }
        `,
    ],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
})
export class ApplicationSidebarComponent {
    public show_block: Record<string, boolean> = {};
    public readonly links = [
        { name: 'Home', route: ['/'], icon: 'home' },
        {
            id: 'facilities',
            name: 'Facilities',
            icon: 'place',
            children: [
                {
                    id: 'facilities',
                    name: 'Building Map',
                    route: ['/facilities'],
                },
            ],
        },
        {
            id: 'bookings',
            name: 'Bookings/Admin',
            icon: 'add_circle',
            children: [
                {
                    id: 'spaces',
                    name: 'Rooms',
                    route: ['/book/rooms'],
                },
                {
                    id: 'desks',
                    name: 'Desks',
                    route: ['/book/desks'],
                },
                {
                    id: 'parking',
                    name: 'Parking',
                    route: ['/book/parking'],
                },
                {
                    id: 'lockers',
                    name: 'Lockers',
                    route: ['/book/lockers'],
                },
                {
                    id: 'visitors',
                    name: 'Visitors',
                    route: ['/book/visitors'],
                },
                {
                    id: 'assets',
                    name: 'Assets',
                    route: ['/book/assets'],
                },
            ],
        },
        {
            id: 'users',
            name: 'User Directory',
            icon: 'assignment_ind',
            children: [
                {
                    id: 'internal-users',
                    name: 'Internal',
                    route: ['/users/internal'],
                },
                {
                    id: 'external-users',
                    name: 'External',
                    route: ['/book/external'],
                },
            ],
        },
        {
            id: 'entertainment',
            name: 'Entertainment',
            icon: 'confirmation_number',
            children: [
                {
                    id: 'events',
                    name: 'Events',
                    route: ['/entertainment/events'],
                },
                {
                    id: 'points',
                    name: 'Points',
                    route: ['/entertainment/points'],
                },
            ],
        },
        {
            id: 'reports',
            name: 'Reports',
            icon: 'analytics',
            children: [
                {
                    id: 'events',
                    name: 'Events',
                    route: ['/entertainment/events'],
                },
                {
                    id: 'points',
                    name: 'Points',
                    route: ['/entertainment/points'],
                },
            ],
        },
    ];
}
