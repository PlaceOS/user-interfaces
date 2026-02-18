import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from '@placeos/components';
import { notifySuccess } from '@placeos/common';

import { ServicesStateService } from './services-state.service';

@Component({
    selector: 'services-packages',
    template: `
        <div class="p-6">
            <div class="mb-6 flex items-start justify-between">
                <div>
                    <h2 class="text-2xl font-semibold">
                        CNSI Event Packages & Services
                    </h2>
                    <p class="text-base-content/60 mt-1">
                        Bundled packages include AV equipment, basic technical
                        support, and events staff assistance.
                    </p>
                </div>
                <a
                    matRipple
                    [routerLink]="['/services', 'form']"
                    class="bg-primary text-primary-content flex items-center gap-2 rounded px-4 py-2 text-sm font-medium"
                >
                    <icon>add</icon>
                    Add Service
                </a>
            </div>

            <div class="mb-4 flex items-center gap-2">
                <span class="text-sm font-medium">Pricing:</span>
                <button
                    class="rounded-full px-4 py-1 text-sm font-medium transition-colors"
                    [class]="
                        rate_type() === 'internal'
                            ? 'bg-primary text-primary-content'
                            : 'bg-base-200 hover:bg-base-300'
                    "
                    (click)="rate_type.set('internal')"
                >
                    Internal (UCLA)
                </button>
                <button
                    class="rounded-full px-4 py-1 text-sm font-medium transition-colors"
                    [class]="
                        rate_type() === 'external'
                            ? 'bg-primary text-primary-content'
                            : 'bg-base-200 hover:bg-base-300'
                    "
                    (click)="rate_type.set('external')"
                >
                    External
                </button>
            </div>

            <!-- Event Packages -->
            <h3 class="mb-3 text-lg font-semibold">Event Packages</h3>
            <div
                class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
                @for (pkg of packages(); track pkg.id) {
                    <div
                        class="border-base-200 bg-base-100 group rounded-lg border p-4 shadow-sm"
                    >
                        <div class="mb-3 flex items-start justify-between">
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold">
                                    {{ pkg.name }}
                                </h3>
                                <p class="text-base-content/60 text-sm">
                                    {{ pkg.space }}
                                </p>
                            </div>
                            <div class="flex items-center gap-1">
                                <a
                                    matRipple
                                    [routerLink]="[
                                        '/services',
                                        'form',
                                        pkg.id,
                                    ]"
                                    class="hover:bg-base-200 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                                >
                                    <icon class="text-base">edit</icon>
                                </a>
                                <button
                                    matRipple
                                    (click)="remove(pkg.id)"
                                    class="hover:bg-error/10 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                                >
                                    <icon class="text-error text-base">
                                        delete
                                    </icon>
                                </button>
                            </div>
                        </div>
                        <p class="text-base-content/70 mb-3 text-sm">
                            {{ pkg.description }}
                        </p>
                        <div
                            class="border-base-200 flex items-center justify-between border-t pt-3"
                        >
                            <span
                                class="bg-base-200 rounded px-2 py-0.5 text-xs"
                            >
                                {{ pkg.duration }}
                            </span>
                            <span class="text-primary text-lg font-bold">
                                {{
                                    rate_type() === 'internal'
                                        ? pkg.internal_price
                                        : pkg.external_price
                                }}
                            </span>
                        </div>
                    </div>
                }
            </div>

            <!-- A La Carte -->
            <h3 class="mb-3 text-lg font-semibold">
                A La Carte Options
                <span class="text-base-content/60 text-sm font-normal">
                    (up to 4 hours)
                </span>
            </h3>
            <div
                class="border-base-200 mb-8 overflow-hidden rounded-lg border"
            >
                <table class="w-full">
                    <thead>
                        <tr class="bg-base-200">
                            <th class="px-4 py-3 text-left text-sm">
                                Service
                            </th>
                            <th class="px-4 py-3 text-right text-sm">Price</th>
                            <th class="w-20 px-4 py-3 text-right text-sm">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @for (option of alacarte(); track option.id) {
                            <tr class="border-base-200 group border-t">
                                <td class="px-4 py-3 text-sm">
                                    {{ option.name }}
                                </td>
                                <td
                                    class="text-primary px-4 py-3 text-right text-sm font-semibold"
                                >
                                    {{
                                        rate_type() === 'internal'
                                            ? option.internal_price
                                            : option.external_price
                                    }}
                                </td>
                                <td class="px-4 py-3 text-right">
                                    <div
                                        class="flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100"
                                    >
                                        <a
                                            [routerLink]="[
                                                '/services',
                                                'form',
                                                option.id,
                                            ]"
                                            class="hover:bg-base-200 flex h-7 w-7 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-sm">edit</icon>
                                        </a>
                                        <button
                                            (click)="remove(option.id)"
                                            class="hover:bg-error/10 flex h-7 w-7 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-error text-sm">
                                                delete
                                            </icon>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>

            <!-- AV Add-ons -->
            <h3 class="mb-3 text-lg font-semibold">AV Add-ons</h3>
            <div class="border-base-200 overflow-hidden rounded-lg border">
                <table class="w-full">
                    <thead>
                        <tr class="bg-base-200">
                            <th class="px-4 py-3 text-left text-sm">
                                Add-on
                            </th>
                            <th class="px-4 py-3 text-left text-sm">Space</th>
                            <th class="px-4 py-3 text-right text-sm">Price</th>
                            <th class="w-20 px-4 py-3 text-right text-sm">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @for (addon of addons(); track addon.id) {
                            <tr class="border-base-200 group border-t">
                                <td class="px-4 py-3 text-sm">
                                    <div class="flex items-center gap-2">
                                        <icon
                                            class="text-base-content/40 text-base"
                                        >
                                            {{ addon.icon }}
                                        </icon>
                                        {{ addon.name }}
                                    </div>
                                </td>
                                <td
                                    class="text-base-content/60 px-4 py-3 text-sm"
                                >
                                    {{ addon.space }}
                                </td>
                                <td
                                    class="text-primary px-4 py-3 text-right text-sm font-semibold"
                                >
                                    {{
                                        rate_type() === 'internal'
                                            ? addon.internal_price
                                            : addon.external_price
                                    }}
                                </td>
                                <td class="px-4 py-3 text-right">
                                    <div
                                        class="flex items-center justify-end gap-1 opacity-0 transition-opacity group-hover:opacity-100"
                                    >
                                        <a
                                            [routerLink]="[
                                                '/services',
                                                'form',
                                                addon.id,
                                            ]"
                                            class="hover:bg-base-200 flex h-7 w-7 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-sm">edit</icon>
                                        </a>
                                        <button
                                            (click)="remove(addon.id)"
                                            class="hover:bg-error/10 flex h-7 w-7 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-error text-sm">
                                                delete
                                            </icon>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>

            <div class="bg-info/10 text-info mt-6 rounded-lg p-4 text-sm">
                Please submit agenda and additional details to
                <strong>events&#64;cnsi.ucla.edu</strong> with subject line:
                <em>event name and date</em>.
            </div>
        </div>
    `,
    imports: [CommonModule, RouterModule, MatRippleModule, IconComponent],
})
export class ServicesPackagesComponent {
    private _state = inject(ServicesStateService);

    public rate_type = signal<'internal' | 'external'>('internal');

    public packages = computed(() =>
        this._state.services().filter((s) => s.category === 'package'),
    );

    public alacarte = computed(() =>
        this._state.services().filter((s) => s.category === 'alacarte'),
    );

    public addons = computed(() =>
        this._state.services().filter((s) => s.category === 'addon'),
    );

    public remove(id: string) {
        this._state.removeService(id);
        notifySuccess('Service removed.');
    }
}
