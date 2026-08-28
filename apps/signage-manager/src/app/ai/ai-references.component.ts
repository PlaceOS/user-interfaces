import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';

import { AiReference } from './ai.types';

/**
 * Pictures to work from, numbered so the brief can name them.
 *
 * A number is the whole point: the vendor is handed a list of images with no
 * names, so "the person in image 2" only means something if what the person
 * sees and what the model is told agree on the order.
 */
@Component({
    selector: 'ai-references',
    template: `
        <div class="flex flex-col gap-2">
            <p class="m-0 text-sm font-medium">
                {{ 'SIGNAGE_MANAGER.AI_REFERENCES' | translate }}
            </p>
            <p class="text-base-content/60 m-0 text-xs">
                {{ 'SIGNAGE_MANAGER.AI_REFERENCES_HINT' | translate }}
            </p>

            @if (items().length) {
                <div class="flex flex-wrap gap-2">
                    @for (item of items(); track item.id; let index = $index) {
                        <div
                            class="border-base-content/10 bg-base-200 relative h-16 w-16 overflow-hidden rounded border"
                        >
                            <img
                                [src]="item.url"
                                class="h-full w-full object-cover"
                                [alt]="item.name"
                            />
                            <span
                                class="bg-base-content text-base-100 absolute top-0 left-0 rounded-br px-1 text-xs font-bold"
                                >{{ index + 1 }}</span
                            >
                            <button
                                icon
                                type="button"
                                class="bg-base-100/80 absolute top-0 right-0 h-5 w-5 rounded-bl text-xs"
                                [matTooltip]="
                                    'SIGNAGE_MANAGER.AI_REFERENCE_REMOVE'
                                        | translate
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.AI_REFERENCE_REMOVE'
                                        | translate
                                "
                                (click)="removed.emit(item.id)"
                            >
                                <icon class="text-sm">close</icon>
                            </button>
                        </div>
                    }
                </div>
            }

            <button
                mat-stroked-button
                type="button"
                class="self-start"
                [disabled]="uploading() || items().length >= max()"
                (click)="picker.click()"
            >
                {{
                    (uploading()
                        ? 'SIGNAGE_MANAGER.AI_REFERENCE_UPLOADING'
                        : 'SIGNAGE_MANAGER.AI_REFERENCE_ADD'
                    ) | translate
                }}
            </button>
            <input
                #picker
                type="file"
                multiple
                class="sr-only"
                accept="image/png,image/jpeg,image/webp"
                [attr.aria-label]="
                    'SIGNAGE_MANAGER.AI_REFERENCE_ADD' | translate
                "
                (change)="pick($event)"
            />
        </div>
    `,
    imports: [IconComponent, MatButtonModule, MatTooltipModule, TranslatePipe],
})
export class AiReferencesComponent {
    public readonly items = input.required<AiReference[]>();
    public readonly uploading = input(false);
    /** the server takes the first eight and drops the rest */
    public readonly max = input(8);

    public readonly picked = output<File[]>();
    public readonly removed = output<string>();

    public pick(event: Event) {
        const input = event.target as HTMLInputElement;
        const files = Array.from(input.files || []);
        input.value = '';
        const room = this.max() - this.items().length;
        if (files.length) this.picked.emit(files.slice(0, room));
    }
}
