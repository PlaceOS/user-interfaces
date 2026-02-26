import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@placeos/components';
import { SignageService } from '../signage.service';

@Component({
    selector: 'zone-list',
    template: `
        <div
            class="bg-base-100 border-base-300 h-full min-w-64 overflow-auto border-r"
        >
            <div class="border-base-300 border-b p-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <input
                        matInput
                        placeholder="Search zones"
                        [ngModel]="search()"
                        (ngModelChange)="search.set($event)"
                    />
                </mat-form-field>
            </div>
            @if (zones().length > 0) {
                @for (zone of zones(); track zone.id) {
                    <a
                        matRipple
                        class="border-base-300 flex w-full cursor-pointer items-center gap-3 border-b px-4 py-3 text-left no-underline transition-colors"
                        [class.bg-primary]="selected()?.id === zone.id"
                        [class.text-primary-content]="
                            selected()?.id === zone.id
                        "
                        [class.hover:bg-base-200]="
                            selected()?.id !== zone.id
                        "
                        [routerLink]="['/zones', zone.id]"
                    >
                        <icon class="shrink-0 text-2xl">layers</icon>
                        <div class="min-w-0 flex-1">
                            <div class="truncate font-medium">
                                {{ zone.display_name || zone.name }}
                            </div>
                            @if (zone.description) {
                                <div
                                    class="mt-0.5 truncate text-xs"
                                    [class.opacity-50]="
                                        selected()?.id !== zone.id
                                    "
                                    [class.opacity-70]="
                                        selected()?.id === zone.id
                                    "
                                >
                                    {{ zone.description }}
                                </div>
                            }
                        </div>
                    </a>
                }
            } @else {
                <div
                    class="flex flex-1 flex-col items-center justify-center space-y-2 p-8 opacity-30"
                >
                    <icon class="text-6xl">layers</icon>
                    <p>No zones found.</p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
            }
        `,
    ],
    imports: [
        FormsModule,
        RouterLink,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
    ],
})
export class ZoneListComponent {
    private readonly _service = inject(SignageService);

    public readonly search = this._service.zone_search_term;
    public readonly zones = this._service.filtered_zones;
    public readonly selected = this._service.selected_zone;
}
