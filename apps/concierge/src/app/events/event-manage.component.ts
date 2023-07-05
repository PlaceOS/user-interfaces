import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { EventFormService } from '@placeos/events';

const EMPTY = [];

@Component({
    selector: 'app-event-manage',
    template: `
        <div class="absolute inset-0 bg-white overflow-auto">
            <a
                icon
                matRipple
                class="absolute top-2 right-2"
                [routerLink]="['/entertainment', 'events']"
            >
                <app-icon>close</app-icon>
            </a>
            <form
                class="flex flex-col w-[40rem] max-w-full mx-auto px-4"
                [formGroup]="form"
            >
                <h3 class="py-4 text-2xl font-medium">New Event</h3>
                <section class="flex flex-col space-y-2">
                    <label for="title">Event Title<span>*</span></label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            name="title"
                            formControlName="title"
                            placeholder="e.g. Team Meeting"
                        />
                        <mat-error>
                            {{ 'FORM.TITLE_ERROR' | translate }}
                        </mat-error>
                    </mat-form-field>
                    <label for="organiser">Organiser<span>*</span></label>
                    <a-user-search-field
                        class="block"
                        name="organiser"
                        formControlName="organiser"
                    ></a-user-search-field>
                    <div class="flex space-x-4">
                        <div class="space-y-2 flex-1">
                            <label for="type">Type<span>*</span></label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="type"
                                    placeholder="Please select"
                                    formControlName="event_type"
                                >
                                    <mat-option>None</mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="space-y-2 flex-1">
                            <label for="category">Category<span>*</span></label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-select
                                    name="category"
                                    placeholder="Please select"
                                    formControlName="category"
                                >
                                    <mat-option>None</mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                    </div>
                    <label for="tags">Tags</label>
                    <mat-form-field appearance="outline">
                        <mat-chip-grid #chipList aria-label="Event Tags">
                            <mat-chip-row
                                *ngFor="let tag of tag_list"
                                [selectable]="true"
                                [removable]="true"
                                (removed)="removeTag(tag)"
                            >
                                {{ tag }}
                                <app-icon matChipRemove>close</app-icon>
                            </mat-chip-row>
                            <input
                                placeholder="New feature..."
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addTag($event)"
                            />
                        </mat-chip-grid>
                    </mat-form-field>
                </section>
            </form>
        </div>
    `,
    styles: [``],
})
export class EventManageComponent {
    public readonly form = this._event_form.form;
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public get tag_list() {
        return this.form.controls.tags.value || EMPTY;
    }

    constructor(private _event_form: EventFormService) {}

    /**
     * Add a feature to the list of features for the item
     * @param event Input event
     */
    public addTag(event: MatChipInputEvent): void {
        if (!this.form || !this.form.controls.tags) return;
        const input = event.input;
        const value = event.value;
        const feature_list = this.tag_list;
        if ((value || '').trim()) {
            feature_list.push(value);
            this.form.controls.tags.setValue(feature_list);
        }
        if (input) input.value = '';
    }

    /**
     * Remove tag from the list
     * @param existing_tag Feature to remove
     */
    public removeTag(existing_tag: string): void {
        if (!this.form || !this.form.controls.tags) return;
        const tag_list = this.tag_list;
        const index = tag_list.indexOf(existing_tag);

        if (index >= 0) {
            tag_list.splice(index, 1);
            this.form.controls.tags.setValue(tag_list);
        }
    }
}
