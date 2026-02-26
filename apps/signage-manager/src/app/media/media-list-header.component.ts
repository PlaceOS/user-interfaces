import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { notifyError } from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { isValidUrl } from '@placeos/events';
import { SignageService } from '../signage.service';

@Component({
    selector: 'media-list-header',
    template: `
        <div
            class="bg-base-100 border-base-300 sticky top-0 flex flex-nowrap items-center gap-2 border-b px-4 py-2 shadow"
        >
            <div class="py-2">
                <h3 class="text-2xl font-medium">Signage Media</h3>
                <div class="text-sm opacity-60">
                    {{
                        'COMMON.ITEM_COUNT' | translate: { count: item_count() }
                    }}
                </div>
            </div>
            <div class="w-px flex-1"></div>
            <mat-form-field
                appearance="outline"
                class="no-subscript white w-full flex-1"
            >
                <input
                    matInput
                    placeholder="Search"
                    [ngModel]="search()"
                    (ngModelChange)="search.set($event)"
                />
            </mat-form-field>
            <button
                icon
                matRipple
                customTooltip
                [content]="add_link_template"
                class="bg-secondary text-secondary-content h-12 w-12 rounded-lg"
                matTooltip="Add from link"
                matTooltipPosition="left"
            >
                <icon>link</icon>
            </button>
            <ng-template #add_link_template>
                <div
                    class="border-base-300 bg-base-100 my-2 flex w-[20rem] flex-col space-y-4 rounded-lg border p-4 shadow-sm"
                >
                    <mat-form-field appearance="outline" class="no-subscript">
                        <input matInput placeholder="URL" [(ngModel)]="link" />
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="w-full"
                        (click)="addFromLink()"
                    >
                        <icon class="mr-2 text-2xl">add</icon>
                        <div>Add</div>
                    </button>
                </div>
            </ng-template>
            <button
                icon
                matRipple
                class="bg-secondary text-secondary-content h-12 w-12 rounded-lg"
                matTooltip="Upload media"
                matTooltipPosition="left"
            >
                <icon>add</icon>
                <input
                    type="file"
                    class="absolute inset-0 opacity-0"
                    (change)="previewFile($event)"
                />
            </button>
        </div>
    `,
    imports: [
        CommonModule,
        FormsModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        CustomTooltipComponent,
        IconComponent,
        TranslatePipe,
    ],
})
export class MediaListHeaderComponent {
    private readonly _service = inject(SignageService);
    public readonly link = signal('');
    public readonly item_count = signal(0);
    public readonly search = this._service.search_term;

    public readonly previewFile = (event) =>
        this._service.previewFileFromInput(event);

    public async addFromLink() {
        const link = this.link().trim();
        if (!link) return;
        const is_valid = isValidUrl(link);
        if (!is_valid) {
            notifyError('Supplied URL is not valid.');
            return;
        }
        await this._service.addMediaFromLink(link);
        this.link.set('');
    }
}
