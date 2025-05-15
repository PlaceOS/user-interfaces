import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
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
            <section image class="relative h-64 w-full bg-base-200 sm:h-40">
                <image-carousel
                    [images]="item.images"
                    class="absolute inset-0"
                ></image-carousel>
                <button
                    icon
                    matRipple
                    name="close-catering-item-details"
                    (click)="close.emit()"
                    class="absolute left-2 top-2 bg-neutral text-white sm:hidden"
                >
                    <icon>arrow_back</icon>
                </button>
                <button
                    icon
                    matRipple
                    name="toggle-catering-item-favourite-details"
                    [class.text-white]="!fav"
                    [class.text-info]="fav"
                    (click)="toggleFav.emit()"
                    class="absolute right-2 top-2"
                >
                    <icon>{{ fav ? 'favorite' : 'favorite_border' }}</icon>
                </button>
            </section>
            <div class="h-1/2 flex-1 space-y-2 overflow-auto p-2">
                <section actions class="z-0 flex items-center justify-between">
                    <div>
                        <h2 class="mb-2 mt-4 text-xl font-medium">
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
                <section class="flex flex-wrap items-center">
                    <div
                        class="m-1 rounded-2xl bg-base-200 px-2 py-1 text-sm capitalize"
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
                            <div class="p-2 font-medium capitalize">
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
                                            <div
                                                class="p-2 font-medium opacity-60"
                                            >
                                                {{ 'COMMON.NONE' | translate }}
                                            </div>
                                        </mat-radio-button>
                                        <mat-radio-button
                                            class="m-0"
                                            *ngFor="let opt of group?.options"
                                            [value]="opt.id"
                                        >
                                            <div
                                                class="flex max-w-[calc(100vw-4rem)] items-center justify-center sm:max-w-[15rem]"
                                            >
                                                <div
                                                    class="w-1/2 flex-1 whitespace-normal p-2 font-medium capitalize"
                                                >
                                                    {{ opt.name }}
                                                </div>
                                                <div
                                                    class="text-xs opacity-60"
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
                                                class="w-1/2 flex-1 p-2 font-medium"
                                            >
                                                {{ opt.name }}
                                            </div>
                                            <div
                                                class="text-xs opacity-60"
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
                class="border-t border-base-200 px-2 pb-[5.5rem] pt-2 shadow sm:hidden"
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
                        <icon class="text-2xl">{{
                            active ? 'remove' : 'add'
                        }}</icon>
                        <p>
                            {{
                                (active
                                    ? 'CATERING.ORDER_ITEM_REMOVE'
                                    : 'CATERING.ORDER_ITEM_ADD'
                                ) | translate
                            }}
                        </p>
                    </div>
                </button>
            </div>
        </ng-container>
        <ng-template #empty_state>
            <div
                empty
                class="flex flex-col items-center justify-center space-y-2 p-16"
            >
                <p class="text-center opacity-30">
                    {{ 'CATERING.ORDER_ITEM_SELECT' | translate }}
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
    standalone: false,
})
export class CateringItemDetailsComponent implements OnChanges {
    @Input() public item?: CateringItem;
    @Input() public active = false;
    @Input() public fav = false;
    @Input() public code = 'USD';

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
                        option.id,
                    );
                }
            }
        }
    }
}
