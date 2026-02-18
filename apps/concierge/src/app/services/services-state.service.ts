import { Injectable, signal } from '@angular/core';

export interface ServiceItem {
    id: string;
    name: string;
    category: 'package' | 'alacarte' | 'space' | 'addon';
    space: string;
    duration: string;
    description: string;
    internal_price: string;
    external_price: string;
    icon: string;
    features?: string[];
}

let _id_counter = 100;

function generateId(): string {
    return `svc-${++_id_counter}`;
}

const DEFAULT_SERVICES: ServiceItem[] = [
    {
        id: 'svc-1',
        name: 'Conference Package',
        category: 'package',
        space: 'Auditorium and Lobby',
        duration: '4-8 hours',
        description:
            'Full event package with auditorium and lobby access for large conferences.',
        internal_price: '$1,750',
        external_price: '$2,414.89',
        icon: 'groups',
    },
    {
        id: 'svc-2',
        name: 'Symposium Package',
        category: 'package',
        space: 'Auditorium and Lobby',
        duration: 'Up to 4 hours',
        description:
            'Auditorium and lobby access for shorter symposium events.',
        internal_price: '$938',
        external_price: '$1,293.93',
        icon: 'forum',
    },
    {
        id: 'svc-3',
        name: 'Workshop Package',
        category: 'package',
        space: 'Presentation Space',
        duration: '4-8 hours',
        description:
            'Space for meetings, presentations, receptions, and poster sessions.',
        internal_price: '$1,063',
        external_price: '$1,465.11',
        icon: 'build',
    },
    {
        id: 'svc-4',
        name: 'Seminar Package',
        category: 'package',
        space: 'Auditorium Only',
        duration: 'Up to 4 hours',
        description:
            'Space for presentations, lectures, videos, and panel discussions.',
        internal_price: '$719',
        external_price: '$990.94',
        icon: 'school',
    },
    {
        id: 'svc-5',
        name: 'Meeting Package',
        category: 'package',
        space: 'Executive Conference Rooms (2 available)',
        duration: 'Up to 4 hours',
        description:
            'Space for meetings, presentations, and meals. Price is per room.',
        internal_price: '$313 ea.',
        external_price: '$429.96 ea.',
        icon: 'meeting_room',
    },
    {
        id: 'svc-6',
        name: 'Lobby (reception or meals)',
        category: 'alacarte',
        space: 'Lobby',
        duration: 'Up to 4 hours',
        description: 'A la carte lobby access for receptions or meals.',
        internal_price: '$719',
        external_price: '$990.94',
        icon: 'door_front',
    },
    {
        id: 'svc-7',
        name: '5th Floor Conference Room',
        category: 'alacarte',
        space: '5th Floor (4 available)',
        duration: 'Up to 4 hours',
        description: 'A la carte conference room on the 5th floor.',
        internal_price: '$250 ea.',
        external_price: '$344.26 ea.',
        icon: 'groups',
    },
    {
        id: 'svc-8',
        name: 'Poster Session Setup',
        category: 'alacarte',
        space: 'Various',
        duration: 'Up to 4 hours',
        description: 'Setup for poster session displays.',
        internal_price: '$326',
        external_price: '$448.76',
        icon: 'dashboard',
    },
    {
        id: 'svc-9',
        name: 'After Hours',
        category: 'alacarte',
        space: 'Various',
        duration: 'After 5PM or weekends',
        description:
            'Additional fee for events held after 5PM or on weekends.',
        internal_price: '$326',
        external_price: '$448.76',
        icon: 'nightlight',
    },
    {
        id: 'svc-10',
        name: 'Laptop Rental',
        category: 'addon',
        space: 'Any',
        duration: 'Per event',
        description: 'Laptop rental for presentations.',
        internal_price: '$63',
        external_price: '$86.63',
        icon: 'laptop',
    },
    {
        id: 'svc-11',
        name: 'Web Conferencing',
        category: 'addon',
        space: 'Any',
        duration: '4 hours',
        description:
            'Conference room camera and digital speakerphone provided.',
        internal_price: '$125',
        external_price: '$172.35',
        icon: 'videocam',
    },
    {
        id: 'svc-12',
        name: 'Videography',
        category: 'addon',
        space: 'Any',
        duration: '4 hours',
        description: 'Professional videography service.',
        internal_price: '$125',
        external_price: '$172.35',
        icon: 'movie',
    },
    {
        id: 'svc-13',
        name: 'Live Streaming',
        category: 'addon',
        space: 'Any',
        duration: '4 hours',
        description: 'Live streaming of your event.',
        internal_price: '$125',
        external_price: '$172.35',
        icon: 'cast',
    },
    {
        id: 'svc-14',
        name: 'Panel Discussion',
        category: 'addon',
        space: 'Auditorium / Lobby / Presentation Space',
        duration: 'Per event',
        description:
            'Traditional table or fireside chat setup for panel discussions.',
        internal_price: '$94',
        external_price: '$129.72',
        icon: 'people',
    },
    {
        id: 'svc-15',
        name: 'Video Wall Usage',
        category: 'addon',
        space: 'Lobby',
        duration: 'Per event',
        description:
            '3x3 video wall, 1920x1080 per screen. Supports images, slideshows, and video.',
        internal_price: '$63',
        external_price: '$86.30',
        icon: 'tv',
    },
    {
        id: 'svc-16',
        name: 'Portable PA System',
        category: 'addon',
        space: 'Lobby',
        duration: 'Per event',
        description: 'Portable public address system for lobby events.',
        internal_price: '$125',
        external_price: '$172.06',
        icon: 'speaker',
    },
    {
        id: 'svc-17',
        name: 'Projector and Screen',
        category: 'addon',
        space: 'Lobby / Presentation Space',
        duration: 'Per event',
        description: 'Additional projector and screen setup.',
        internal_price: '$94',
        external_price: '$129.48',
        icon: 'present_to_all',
    },
    {
        id: 'svc-18',
        name: 'Overflow Streaming',
        category: 'addon',
        space: 'Lobby',
        duration: '4 hours',
        description: 'Stream auditorium content to lobby overflow area.',
        internal_price: '$156',
        external_price: '$214.98',
        icon: 'stream',
    },
];

@Injectable({ providedIn: 'root' })
export class ServicesStateService {
    private _services = signal<ServiceItem[]>([...DEFAULT_SERVICES]);

    public get services() {
        return this._services;
    }

    public getById(id: string): ServiceItem | undefined {
        return this._services().find((s) => s.id === id);
    }

    public addService(service: Omit<ServiceItem, 'id'>): ServiceItem {
        const new_service = { ...service, id: generateId() };
        this._services.update((list) => [...list, new_service]);
        return new_service;
    }

    public updateService(
        id: string,
        updates: Partial<ServiceItem>,
    ): ServiceItem | undefined {
        let updated: ServiceItem | undefined;
        this._services.update((list) =>
            list.map((s) => {
                if (s.id === id) {
                    updated = { ...s, ...updates };
                    return updated;
                }
                return s;
            }),
        );
        return updated;
    }

    public removeService(id: string): void {
        this._services.update((list) => list.filter((s) => s.id !== id));
    }
}
