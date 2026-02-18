import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@placeos/components';

interface AvAddon {
    name: string;
    internal_price: string;
    external_price: string;
    timed?: boolean;
}

interface Space {
    name: string;
    room_code: string;
    capacity: string;
    icon: string;
    features: string[];
    addons: AvAddon[];
    timed_addons: AvAddon[];
}

const SPACES: Space[] = [
    {
        name: 'Auditorium',
        room_code: 'CNSI 3200',
        capacity: '264 Seated',
        icon: 'stadium',
        features: [
            'Podium with wired microphone and 4-port VGA switch',
            'Projector and screen (1024x768, 1280x720, 1366x768)',
            'Overhead speakers and 2.1 channel speaker system',
            '3 wireless clip-on microphones',
            '2 wireless handheld microphones with floor stands',
            '5 wired microphones with tabletop stands',
            'Assisted listening transmitters with headphones',
            'Wired and wireless internet',
        ],
        addons: [
            {
                name: 'Laptop rental',
                internal_price: '$63',
                external_price: '$86.63',
            },
            {
                name: 'Phone conferencing',
                internal_price: 'Contact for pricing*',
                external_price: 'Contact for pricing*',
            },
            {
                name: 'Panel discussion (traditional table or fireside chat)',
                internal_price: '$94',
                external_price: '$129.72',
            },
        ],
        timed_addons: [
            {
                name: 'Web conferencing**',
                internal_price: '$125',
                external_price: '$172.35',
            },
            {
                name: 'Videography',
                internal_price: '$125',
                external_price: '$172.35',
            },
            {
                name: 'Live streaming',
                internal_price: '$125',
                external_price: '$172.35',
            },
        ],
    },
    {
        name: 'Lobby',
        room_code: 'CNSI Main',
        capacity: '260 Standing / 130 Seated',
        icon: 'door_front',
        features: [
            'Power outlets',
            'Video wall (3x3 screens, 1920x1080 each)',
            'Wireless internet',
        ],
        addons: [
            {
                name: 'Laptop rental',
                internal_price: '$63',
                external_price: '$86.63',
            },
            {
                name: 'Video wall usage',
                internal_price: '$63',
                external_price: '$86.30',
            },
            {
                name: 'Portable PA system',
                internal_price: '$125',
                external_price: '$172.06',
            },
            {
                name: 'Projector and screen',
                internal_price: '$94',
                external_price: '$129.48',
            },
            {
                name: 'Panel discussion (traditional table or fireside chat)',
                internal_price: '$94',
                external_price: '$129.72',
            },
        ],
        timed_addons: [
            {
                name: 'Videography',
                internal_price: '$125',
                external_price: '$172.35',
            },
            {
                name: 'Overflow streaming',
                internal_price: '$156',
                external_price: '$214.98',
            },
        ],
    },
    {
        name: 'Presentation Space',
        room_code: 'CNSI 5200',
        capacity: '56 Max',
        icon: 'present_to_all',
        features: [
            'Dual 85" 4K LED display with audio (HDMI up to 3840x2160)',
            'Tabletop power outlets',
            'Wired and wireless internet',
            'Tabletop projector and screen (VGA/DVI/HDMI, 1024x768 and 1280x800)',
        ],
        addons: [
            {
                name: 'Laptop rental',
                internal_price: '$63',
                external_price: '$86.63',
            },
            {
                name: 'External speakers for laptop',
                internal_price: 'Included',
                external_price: 'Included',
            },
            {
                name: 'Phone conferencing',
                internal_price: 'Contact for pricing*',
                external_price: 'Contact for pricing*',
            },
            {
                name: 'Projector and screen',
                internal_price: '$94',
                external_price: '$94',
            },
            {
                name: 'Panel discussion (traditional table or fireside chat)',
                internal_price: '$94',
                external_price: '$129.72',
            },
        ],
        timed_addons: [
            {
                name: 'Web conferencing**',
                internal_price: '$125',
                external_price: '$172.35',
            },
            {
                name: 'Videography',
                internal_price: '$125',
                external_price: '$172.35',
            },
            {
                name: 'Live streaming',
                internal_price: '$125',
                external_price: '$172.35',
            },
        ],
    },
    {
        name: 'Executive Conference Rooms',
        room_code: 'CNSI 3141, 3151',
        capacity: '15 Divided / 30 Linked',
        icon: 'meeting_room',
        features: [
            'Built-in projector and dual 85" 4K LED display with audio',
            'HDMI up to 3840x2160',
            'Wired and wireless internet',
        ],
        addons: [
            {
                name: 'Laptop rental',
                internal_price: '$63',
                external_price: '$86.63',
            },
            {
                name: 'Phone conferencing',
                internal_price: 'Contact for pricing*',
                external_price: 'Contact for pricing*',
            },
        ],
        timed_addons: [
            {
                name: 'Web conferencing**',
                internal_price: '$125',
                external_price: '$172.35',
            },
            {
                name: 'Videography',
                internal_price: '$125',
                external_price: '$172.35',
            },
            {
                name: 'Live streaming',
                internal_price: '$125',
                external_price: '$172.35',
            },
        ],
    },
    {
        name: '5th Floor Conference Rooms',
        room_code: 'CNSI 5th Floor',
        capacity: '15 Max Each (4 available)',
        icon: 'groups',
        features: ['Standard conference room setup'],
        addons: [],
        timed_addons: [],
    },
    {
        name: '6th Floor Balconies',
        room_code: 'CNSI 6th Floor',
        capacity: '150 Max Each',
        icon: 'balcony',
        features: ['Outdoor balcony space'],
        addons: [],
        timed_addons: [],
    },
];

@Component({
    selector: 'services-spaces',
    template: `
        <div class="p-6">
            <div class="mb-6">
                <h2 class="text-2xl font-semibold">Spaces & AV Equipment</h2>
                <p class="text-base-content/60 mt-1">
                    Available venues and their audio-visual capabilities.
                </p>
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

            <div class="space-y-6">
                @for (space of spaces; track space.name) {
                    <div
                        class="border-base-200 overflow-hidden rounded-lg border"
                    >
                        <div
                            class="bg-base-200 flex items-center gap-3 px-4 py-3"
                        >
                            <icon class="text-primary text-2xl">
                                {{ space.icon }}
                            </icon>
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold">
                                    {{ space.name }}
                                </h3>
                                <p class="text-base-content/60 text-xs">
                                    {{ space.room_code }}
                                </p>
                            </div>
                            <span
                                class="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium"
                            >
                                {{ space.capacity }}
                            </span>
                        </div>
                        <div class="p-4">
                            <h4 class="mb-2 text-sm font-semibold">
                                Included Equipment
                            </h4>
                            <ul class="mb-4 space-y-1">
                                @for (
                                    feature of space.features;
                                    track feature
                                ) {
                                    <li
                                        class="text-base-content/70 flex items-start gap-2 text-sm"
                                    >
                                        <icon
                                            class="text-success mt-0.5 text-base"
                                        >
                                            check_circle
                                        </icon>
                                        {{ feature }}
                                    </li>
                                }
                            </ul>

                            @if (space.addons.length) {
                                <h4 class="mb-2 text-sm font-semibold">
                                    Optional Add-ons
                                </h4>
                                <div
                                    class="border-base-200 mb-4 overflow-hidden rounded border"
                                >
                                    @for (
                                        addon of space.addons;
                                        track addon.name
                                    ) {
                                        <div
                                            class="border-base-200 flex items-center justify-between border-b px-3 py-2 last:border-b-0"
                                        >
                                            <span class="text-sm">
                                                {{ addon.name }}
                                            </span>
                                            <span
                                                class="text-primary text-sm font-medium"
                                            >
                                                {{
                                                    rate_type() === 'internal'
                                                        ? addon.internal_price
                                                        : addon.external_price
                                                }}
                                            </span>
                                        </div>
                                    }
                                </div>
                            }

                            @if (space.timed_addons.length) {
                                <h4 class="mb-2 text-sm font-semibold">
                                    Timed Add-ons
                                    <span
                                        class="text-base-content/60 font-normal"
                                    >
                                        (fee covers 4 hours)
                                    </span>
                                </h4>
                                <div
                                    class="border-base-200 overflow-hidden rounded border"
                                >
                                    @for (
                                        addon of space.timed_addons;
                                        track addon.name
                                    ) {
                                        <div
                                            class="border-base-200 flex items-center justify-between border-b px-3 py-2 last:border-b-0"
                                        >
                                            <span class="text-sm">
                                                {{ addon.name }}
                                            </span>
                                            <span
                                                class="text-primary text-sm font-medium"
                                            >
                                                {{
                                                    rate_type() === 'internal'
                                                        ? addon.internal_price
                                                        : addon.external_price
                                                }}
                                            </span>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>

            <div
                class="text-base-content/50 mt-6 border-t border-base-200 pt-4 text-xs"
            >
                <p>* Additional charges may apply. Contact events&#64;cnsi.ucla.edu for details.</p>
                <p class="mt-1">** A conference room camera and digital speakerphone will be provided.</p>
            </div>
        </div>
    `,
    imports: [CommonModule, IconComponent],
})
export class ServicesSpacesComponent {
    public rate_type = signal<'internal' | 'external'>('internal');
    public spaces = SPACES;
}
