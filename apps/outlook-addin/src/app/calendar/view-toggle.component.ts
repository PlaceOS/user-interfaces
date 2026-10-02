import { Component, model } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from '@placeos/components';

export type ResultView = 'list' | 'map';

const VIEWS: { id: ResultView; name: string; icon: string }[] = [
    { id: 'list', name: 'List', icon: 'list' },
    { id: 'map', name: 'Map', icon: 'map' },
];

/** Switch between the list and map views of search results. */
@Component({
    selector: 'view-toggle',
    template: `
        <div
            role="radiogroup"
            aria-label="Result view"
            class="border-base-300 flex rounded-lg border p-0.5"
        >
            @for (item of views; track item.id) {
                <button
                    role="radio"
                    matRipple
                    class="flex items-center gap-1 rounded-md px-2 py-1 text-sm"
                    [class.bg-secondary]="view() === item.id"
                    [class.text-secondary-content]="view() === item.id"
                    [attr.aria-checked]="view() === item.id"
                    (click)="view.set(item.id)"
                >
                    <icon>{{ item.icon }}</icon>
                    {{ item.name }}
                </button>
            }
        </div>
    `,
    imports: [MatRippleModule, IconComponent],
})
export class ViewToggleComponent {
    public readonly views = VIEWS;
    public readonly view = model<ResultView>('list');
}
