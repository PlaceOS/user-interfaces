import { Component, computed, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent, TranslatePipe } from '@placeos/components';

import { ANCHORS } from './ai-layer.component';
import {
    AiAnchor,
    AiBrandKit,
    AiLayerState,
    AiTextBlock,
    AiTextRole,
} from './ai.types';

export function newTextBlock(role: AiTextRole, anchor: AiAnchor): AiTextBlock {
    return {
        id: `${Date.now()}-${Math.round(Math.random() * 1e6)}`,
        text: '',
        role,
        anchor,
        colour: '#FFFFFF',
        panel: true,
    };
}

/**
 * The words and the logo, as a sidebar panel beside the preview.
 *
 * Split from the canvas so the preview can hold the main pane: the person
 * writing a headline wants to see it at size while they type, not in a strip
 * above a stack of form fields.
 */
@Component({
    selector: 'ai-layer-controls',
    template: `
        <div class="flex flex-col gap-3">
            @for (block of state().blocks; track block.id) {
                <div
                    class="border-base-content/10 flex flex-col gap-2 rounded border p-3"
                >
                    <div class="flex items-center gap-2">
                        <mat-form-field
                            appearance="outline"
                            class="flex-1"
                            subscriptSizing="dynamic"
                        >
                            <input
                                matInput
                                [ngModel]="block.text"
                                (ngModelChange)="
                                    patchBlock(block.id, { text: $event })
                                "
                                [placeholder]="
                                    placeholderFor(block.role) | translate
                                "
                                [attr.aria-label]="
                                    placeholderFor(block.role) | translate
                                "
                            />
                        </mat-form-field>
                        <button
                            icon
                            default
                            error
                            type="button"
                            [disabled]="state().blocks.length < 2"
                            [matTooltip]="
                                'SIGNAGE_MANAGER.AI_REMOVE_TEXT' | translate
                            "
                            (click)="removeBlock(block.id)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        <mat-form-field
                            appearance="outline"
                            class="w-32"
                            subscriptSizing="dynamic"
                        >
                            <mat-select
                                [ngModel]="block.role"
                                (ngModelChange)="
                                    patchBlock(block.id, { role: $event })
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.AI_TEXT_SIZE' | translate
                                "
                            >
                                <mat-option value="headline">{{
                                    'SIGNAGE_MANAGER.AI_ROLE_HEADLINE'
                                        | translate
                                }}</mat-option>
                                <mat-option value="subheading">{{
                                    'SIGNAGE_MANAGER.AI_ROLE_SUBHEADING'
                                        | translate
                                }}</mat-option>
                                <mat-option value="body">{{
                                    'SIGNAGE_MANAGER.AI_ROLE_BODY' | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>

                        <mat-form-field
                            appearance="outline"
                            class="w-36"
                            subscriptSizing="dynamic"
                        >
                            <mat-select
                                [ngModel]="block.anchor"
                                (ngModelChange)="
                                    patchBlock(block.id, { anchor: $event })
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.AI_TEXT_POSITION'
                                        | translate
                                "
                            >
                                @for (anchor of anchors; track anchor) {
                                    <mat-option [value]="anchor">{{
                                        anchorLabel(anchor) | translate
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>

                    <div class="flex flex-wrap items-center gap-3">
                        @for (colour of palette(); track colour) {
                            <button
                                type="button"
                                class="border-base-content/20 h-6 w-6 rounded-full border"
                                [style.background]="colour"
                                [class.ring-2]="block.colour === colour"
                                (click)="patchBlock(block.id, { colour })"
                                [attr.aria-label]="colour"
                            ></button>
                        }
                        <mat-slide-toggle
                            [ngModel]="block.panel"
                            (ngModelChange)="
                                patchBlock(block.id, { panel: $event })
                            "
                        >
                            {{ 'SIGNAGE_MANAGER.AI_TEXT_PANEL' | translate }}
                        </mat-slide-toggle>
                    </div>
                </div>
            }

            <button
                mat-stroked-button
                type="button"
                class="self-start"
                (click)="addBlock()"
            >
                {{ 'SIGNAGE_MANAGER.AI_ADD_TEXT' | translate }}
            </button>

            <div
                class="border-base-content/10 flex flex-wrap items-center gap-3 rounded border p-3"
            >
                @if (!logo_url()) {
                    <span class="text-sm">{{
                        'SIGNAGE_MANAGER.AI_NO_LOGO_YET' | translate
                    }}</span>
                    <button
                        mat-stroked-button
                        type="button"
                        [disabled]="uploading()"
                        (click)="logo_input.click()"
                    >
                        {{
                            (uploading()
                                ? 'SIGNAGE_MANAGER.AI_LOGO_UPLOADING'
                                : 'SIGNAGE_MANAGER.AI_ADD_LOGO'
                            ) | translate
                        }}
                    </button>
                } @else {
                    <mat-slide-toggle
                        [ngModel]="state().logo"
                        (ngModelChange)="patch({ logo: $event })"
                    >
                        {{ 'SIGNAGE_MANAGER.AI_SHOW_LOGO' | translate }}
                    </mat-slide-toggle>
                    @if (state().logo) {
                        <mat-form-field
                            appearance="outline"
                            class="w-36"
                            subscriptSizing="dynamic"
                        >
                            <mat-select
                                [ngModel]="state().logo_position"
                                (ngModelChange)="
                                    patch({ logo_position: $event })
                                "
                                [attr.aria-label]="
                                    'SIGNAGE_MANAGER.AI_LOGO_POSITION'
                                        | translate
                                "
                            >
                                <mat-option value="bottom-right">{{
                                    'SIGNAGE_MANAGER.AI_POS_BOTTOM_RIGHT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="bottom-left">{{
                                    'SIGNAGE_MANAGER.AI_POS_BOTTOM_LEFT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="top-right">{{
                                    'SIGNAGE_MANAGER.AI_POS_TOP_RIGHT'
                                        | translate
                                }}</mat-option>
                                <mat-option value="top-left">{{
                                    'SIGNAGE_MANAGER.AI_POS_TOP_LEFT'
                                        | translate
                                }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                    }
                }
                <input
                    #logo_input
                    type="file"
                    class="sr-only"
                    accept="image/png,image/jpeg,image/webp,image/svg+xml"
                    [attr.aria-label]="
                        'SIGNAGE_MANAGER.AI_ADD_LOGO' | translate
                    "
                    (change)="pickLogo($event)"
                />
            </div>
        </div>
    `,
    imports: [
        FormsModule,
        IconComponent,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        TranslatePipe,
    ],
})
export class AiLayerControlsComponent {
    public readonly state = input.required<AiLayerState>();
    public readonly logo_url = input<string>('');
    public readonly brand = input<AiBrandKit | null>(null);
    public readonly uploading = input(false);

    public readonly changed = output<AiLayerState>();
    public readonly logoPicked = output<File>();

    public readonly anchors = ANCHORS;

    public readonly palette = computed(() => {
        const colours = Object.values(this.brand()?.palette || {});
        return ['#FFFFFF', '#1B2420', ...colours].filter(
            (colour, index, all) => all.indexOf(colour) === index,
        );
    });

    public patch(changes: Partial<AiLayerState>) {
        this.changed.emit({ ...this.state(), ...changes });
    }

    public patchBlock(id: string, changes: Partial<AiTextBlock>) {
        this.patch({
            blocks: this.state().blocks.map((block) =>
                block.id === id ? { ...block, ...changes } : block,
            ),
        });
    }

    public addBlock() {
        const blocks = this.state().blocks;
        const role: AiTextRole = blocks.length === 1 ? 'subheading' : 'body';
        const anchor: AiAnchor =
            blocks.length < 2 ? blocks[0]?.anchor || 'top-left' : 'bottom-left';
        this.patch({ blocks: [...blocks, newTextBlock(role, anchor)] });
    }

    public removeBlock(id: string) {
        if (this.state().blocks.length < 2) return;
        this.patch({
            blocks: this.state().blocks.filter((block) => block.id !== id),
        });
    }

    public pickLogo(event: Event) {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        input.value = '';
        if (file) this.logoPicked.emit(file);
    }

    public placeholderFor(role: AiTextRole) {
        return role === 'headline'
            ? 'SIGNAGE_MANAGER.AI_HEADLINE'
            : role === 'subheading'
              ? 'SIGNAGE_MANAGER.AI_SUBHEADING'
              : 'SIGNAGE_MANAGER.AI_BODY_TEXT';
    }

    public anchorLabel(anchor: AiAnchor) {
        return `SIGNAGE_MANAGER.AI_ANCHOR_${anchor
            .toUpperCase()
            .replace('-', '_')}`;
    }
}
