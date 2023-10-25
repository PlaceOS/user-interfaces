import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { unique } from '@placeos/common';
import { CateringItem } from '../catering-item.class';
import { CateringOption } from '../catering.interfaces';

interface CateringOptionGroup {
    name: string;
    multiple: boolean;
    options: CateringOption[];
}

@Component({
    selector: 'catering-item-details',
    template: `
        <ng-container *ngIf="item; else empty_state">
            <section image class="relative w-full h-64 sm:h-40 bg-neutral">
                <image-carousel
                    [images]="item.images"
                    class="absolute inset-0"
                ></image-carousel>
                <button
                    icon
                    matRipple
                    name="close-catering-item-details"
                    (click)="close.emit()"
                    class="absolute top-2 left-2 bg-neutral sm:hidden text-white"
                >
                    <app-icon>arrow_back</app-icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-catering-item-favourite-details"
                    [class.text-white]="!fav"
                    [class.text-blue-400]="fav"
                    (click)="toggleFav.emit()"
                    class="absolute top-2 right-2 bg-neutral"
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
                        <p *ngIf="item.unit_price">
                            {{ item.unit_price / 100 | currency: code }}
                        </p>
                    </div>
                    <a-counter
                        [(ngModel)]="item.quantity"
                        (ngModelChange)="
                            active ? activeChange.emit(active) : ''
                        "
                        [min]="1"
                        [max]="item.count || 10"
                    ></a-counter>
                </section>
                <section class="flex items-center flex-wrap">
                    <div
                        class="px-2 py-1 rounded-2xl bg-base-200 text-sm capitalize m-1"
                        *ngFor="let tag of item.tags"
                    >
                        {{ tag }}
                    </div>
                </section>
                <hr />
                <section details class="space-y-2">
                    <div class="flex flex-col flex-wrap">
                        <div
                            class="min-w-1/2 flex-1"
                            *ngFor="let group of groups"
                            [attr.group]="group.name"
                        >
                            <div class="font-medium p-2 capitalize">
                                {{ group.name }}
                            </div>
                            <div class="flex flex-col pl-4">
                                <ng-container
                                    *ngIf="!group.multiple; else multi_options"
                                >
                                    <mat-radio-group
                                        class="flex flex-col"
                                        aria-label="Select an option"
                                        [(ngModel)]="group_state[group.name]"
                                        (ngModelChange)="
                                            updateGroupOption(group, $event)
                                        "
                                        [disabled]="item?.in_order"
                                    >
                                        <mat-radio-button class="m-0" value="">
                                            <span class="font-medium p-2" i18n
                                                >None</span
                                            >
                                        </mat-radio-button>
                                        <mat-radio-button
                                            class="m-0"
                                            *ngFor="let opt of group?.options"
                                            [value]="opt.id"
                                        >
                                            <div
                                                class="flex items-center justify-center max-w-[calc(100vw-4rem)] sm:max-w-[15rem]"
                                            >
                                                <div
                                                    class="font-medium p-2 flex-1 w-1/2 whitespace-normal"
                                                >
                                                    {{ opt.name }}
                                                </div>
                                                <div
                                                    class="opacity-60 text-xs"
                                                    *ngIf="opt.unit_price"
                                                >
                                                    +{{
                                                        opt.unit_price / 100
                                                            | currency: code
                                                    }}
                                                </div>
                                            </div>
                                        </mat-radio-button>
                                    </mat-radio-group>
                                </ng-container>
                                <ng-template #multi_options>
                                    <mat-checkbox
                                        *ngFor="let opt of group?.options"
                                        [(ngModel)]="option_state[opt.id]"
                                        (ngModelChange)="
                                            updateCheckedState(opt.id, $event)
                                        "
                                        [disabled]="item?.in_order"
                                    >
                                        <div
                                            class="flex items-center justify-center"
                                        >
                                            <div
                                                class="font-medium p-2 flex-1 w-1/2"
                                            >
                                                {{ opt.name }}
                                            </div>
                                            <div
                                                class="opacity-60 text-xs"
                                                *ngIf="opt.unit_price"
                                            >
                                                +{{
                                                    opt.unit_price / 100
                                                        | currency: code
                                                }}
                                            </div>
                                        </div>
                                    </mat-checkbox>
                                </ng-template>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div
                class="px-2 pt-2 pb-[5.5rem] border-t border-base-200 shadow sm:hidden"
            >
                <button
                    btn
                    matRipple
                    name="select-catering-item-details"
                    [class.inverse]="active"
                    class="w-full"
                    (click)="active = !active; activeChange.emit(active)"
                >
                    <div class="flex items-center justify-center">
                        <app-icon class="text-2xl">{{
                            active ? 'remove' : 'add'
                        }}</app-icon>
                        <p>
                            {{ active ? 'Remove this item' : 'Add this item' }}
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
                <p class="opacity-30 text-center" i18n>
                    Select an item to view it's details
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
export class CateringItemDetailsComponent {
    @Input() public item?: CateringItem;
    @Input() public active: boolean = false;
    @Input() public fav: boolean = false;
    @Input() public code: string = 'USD';

    @Output() public toggleFav = new EventEmitter<void>();
    @Output() public activeChange = new EventEmitter<boolean>();
    @Output() public close = new EventEmitter<void>();

    public option_state: Record<string, boolean> = {};
    public group_state: Record<string, string> = {};
    public groups: CateringOptionGroup[];

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.item && this.item) {
            this._update();
        }
    }

    public updateGroupOption(group: CateringOptionGroup, id: string) {
        if (!group) return;
        this.group_state[group.name] = id;
        for (const option of group.options) {
            option.active = option.id === id;
        }
    }

    public updateCheckedState(id: string, state: boolean) {
        const option = this.item?.options.find((_) => _.id === id);
        if (option) option.active = state;
    }

    private _update() {
        if (!this.item) return;
        if (!this.item.quantity) {
            (this.item as any).quantity = 1;
        }
        this.option_state = {};
        this.group_state = {};
        const groups = unique(this.item.options.map((i) => i.group || 'Other'));
        const group_list = [];
        for (const group of groups) {
            const options = this.item.options.filter((i) => i.group === group);
            group_list.push({
                name: group,
                multiple: !!options.find((i) => i.multiple),
                options,
            });
        }
        this.groups = group_list;
        if (this.item.option_list) {
            for (const opt of this.item.option_list) {
                const option = this.item.options.find((_) => _.id === opt.id);
                if (option) {
                    option.active = true;
                    this.option_state[opt.id] = true;
                    this.updateGroupOption(
                        this.groups.find((g) => g.name === option.group),
                        option.id
                    );
                }
            }
        }
    }
}
