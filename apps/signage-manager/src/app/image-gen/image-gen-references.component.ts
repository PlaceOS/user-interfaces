import { Component, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';

import { ImageGenReference } from './image-gen.types';

/**
 * Pictures attached to a request, numbered so the brief can name them.
 *
 * One component serves both attachment lists: the images to include in the
 * artwork, and the single style reference. `offset` keeps the numbering
 * continuous across the two, matching the order the images are sent.
 */
@Component({
    selector: 'image-gen-references',
    host: { class: 'flex flex-col gap-2' },
    template: `
        <p class="m-0 text-sm font-medium">
            {{ title() | translate }}
        </p>
        <p class="text-base-content/60 m-0 text-xs">
            {{ hint() | translate }}
        </p>

        @if (items().length) {
            <div class="flex flex-wrap gap-2">
                @for (item of items(); track item.id; let index = $index) {
                    <div
                        class="border-base-300 bg-base-200 relative h-16 w-16 overflow-hidden rounded-lg border"
                    >
                        <img
                            [src]="item.url"
                            class="h-full w-full object-cover"
                            [alt]="numberedLabel(index, item.name)"
                        />
                        <span
                            aria-hidden="true"
                            class="bg-base-content text-base-100 absolute top-0 left-0 rounded-br px-1 text-xs font-bold"
                            >{{ offset() + index + 1 }}</span
                        >
                        <button
                            icon
                            type="button"
                            class="bg-base-100/80 absolute top-0 right-0 h-5 w-5 rounded-bl text-xs"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_REMOVE'
                                    | translate
                            "
                            (click)="removed.emit(item.id)"
                            [attr.aria-label]="
                                ('SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_REMOVE'
                                    | translate) +
                                ' ' +
                                numberedLabel(index, item.name)
                            "
                        >
                            <icon class="text-sm">close</icon>
                        </button>
                    </div>
                }
            </div>
        }

        <button
            btn
            matRipple
            type="button"
            class="inverse self-start"
            [disabled]="uploading() || items().length >= max()"
            (click)="picker.click()"
        >
            {{
                (uploading()
                    ? 'SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_UPLOADING'
                    : add_label()
                ) | translate
            }}
        </button>
        <input
            #picker
            type="file"
            [attr.multiple]="max() > 1 ? '' : null"
            class="sr-only"
            accept="image/png,image/jpeg,image/webp"
            [attr.aria-label]="add_label() | translate"
            (change)="pick($event)"
        />
    `,
    imports: [IconComponent, MatRippleModule, MatTooltipModule, TranslatePipe],
})
export class ImageGenReferencesComponent {
    public readonly items = input.required<ImageGenReference[]>();
    public readonly uploading = input(false);
    /** the server takes the first eight and drops the rest */
    public readonly max = input(8);
    /** translation keys, so the include and style lists can label themselves */
    public readonly title = input('SIGNAGE_MANAGER.IMAGE_GEN_INCLUDE_IMAGES');
    public readonly hint = input(
        'SIGNAGE_MANAGER.IMAGE_GEN_INCLUDE_IMAGES_HINT',
    );
    public readonly add_label = input(
        'SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_ADD',
    );
    /** how many images are sent ahead of this list */
    public readonly offset = input(0);

    public readonly picked = output<File[]>();
    public readonly removed = output<string>();

    public numberedLabel(index: number, name: string) {
        return `${i18n('SIGNAGE_MANAGER.IMAGE_GEN_REFERENCE_NUMBER', {
            number: `${this.offset() + index + 1}`,
        })}: ${name}`;
    }

    public pick(event: Event) {
        const input = event.target as HTMLInputElement;
        const files = Array.from(input.files || []);
        input.value = '';
        const room = this.max() - this.items().length;
        if (files.length) this.picked.emit(files.slice(0, room));
    }
}
