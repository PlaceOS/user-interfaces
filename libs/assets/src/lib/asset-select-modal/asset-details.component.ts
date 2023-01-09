import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Asset } from '../asset.class';

@Component({
    selector: 'asset-details',
    template: `
        <ng-container *ngIf="item; else empty_state">
            <section image class="relative w-full h-64 sm:h-40 bg-black/20">
                <image-carousel
                    [images]="images"
                    class="absolute inset-0"
                ></image-carousel>
                <button
                    icon
                    matRipple
                    close
                    (click)="close.emit()"
                    class="absolute top-2 left-2 bg-black/40 sm:hidden text-white"
                >
                    <app-icon>arrow_back</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    fav
                    [class.text-white]="!fav"
                    [class.text-blue-400]="fav"
                    (click)="toggleFav.emit()"
                    class="absolute top-2 right-2 bg-black/40"
                >
                    <app-icon>{{
                        fav ? 'favorite' : 'favorite_border'
                    }}</app-icon>
                </button>
            </section>
            <div class="p-2 space-y-2 flex-1 h-1/2 overflow-auto">
                <section actions class="z-0 flex items-center justify-between">
                    <div>
                        <h2 class="text-xl font-medium mb-2 mt-4">
                            {{ item.name }}
                        </h2>
                        <p>{{ item.count }} Available</p>
                    </div>
                    <a-counter
                        [(ngModel)]="item.amount"
                        [min]="1"
                        [max]="item.count || 2"
                    ></a-counter>
                </section>
                <hr />
                <section details class="space-y-2">
                    <h2 class="text-xl font-medium">Details</h2>
                    <div class="flex items-center space-x-2">
                        <p>{{ item.description || 'No description' }}</p>
                    </div>
                </section>
            </div>
            <div class="p-2 border-t border-gray-200 shadow sm:hidden">
                <button
                    btn
                    matRipple
                    select
                    [class.inverse]="active"
                    class="w-full"
                    (click)="active = !active; activeChange.emit(active)"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-2xl">{{
                            active ? 'remove' : 'add'
                        }}</app-icon>
                        <p>
                            {{
                                active ? 'Remove this asset' : 'Add this asset'
                            }}
                        </p>
                    </div>
                </button>
            </div>
        </ng-container>
        <ng-template #empty_state>
            <div
                empty
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <p class="opacity-30 text-center">
                    Select an asset to view it's details
                </p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 30%;
                min-width: 20rem;
                height: 100%;
                min-height: 65vh;
            }
        `,
    ],
})
export class AssetDetailsComponent {
    @Input() public item?: Asset;
    @Input() public active: boolean = false;
    @Input() public fav: boolean = false;

    @Output() public toggleFav = new EventEmitter<void>();
    @Output() public activeChange = new EventEmitter<boolean>();
    @Output() public close = new EventEmitter<void>();

    public get images() {
        return this.item?.images.map((_) => _.url) || [];
    }
}
