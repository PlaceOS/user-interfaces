import { Component, Input } from '@angular/core';

import { CateringItem } from './catering-item.class';

@Component({
    selector: '[catering-order-item]',
    template: `
        <ng-container *ngIf="item">
            <div class="w-20 text-right h-14 relative">
                <div class="border-b-2 border-l-2 border-gray-400 w-4 h-16 absolute top-1/2 left-1/2 -translate-y-full"></div>
            </div>
            <div class="w-12 mr-4">
                <button
                    action
                    mat-icon-button
                    class="border border-gray-300 border-dashed text-2xl text-dark-fade"
                    [class.bg-success]="active"
                    [class.text-white]="active"
                    [class.border-solid]="active"
                    (click)="active = !active"
                >
                    <app-icon>{{ active ? 'done' : 'local_pizza' }}</app-icon>
                </button>
            </div>
            <div class="flex flex-1 border-b border-gray-300 border-solid py-4">
                <div class="flex-1">{{ item?.name }}</div>
                <div class="flex space-x-2 mr-2">
                    <ng-container *ngFor="let opt of item.options">
                        <div class="text-xs py-1 px-2 bg-yellow-300 rounded-2xl shadow" *ngIf="opt">{{ opt.name }}</div>
                    </ng-container>
                </div>
            </div>
        </ng-container>
    `,
    styles: [
        `
            :host:last-child > div {
                border: none !important;
            }
        `,
    ],
})
export class CateringOrderItemComponent {
    @Input() public item: CateringItem;

    public active = false;
}
