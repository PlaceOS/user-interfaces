import { Component, inject, OnInit, signal } from '@angular/core';
import {
    AsyncHandler,
    firstTruthyValueFrom,
    OrganisationService,
} from '@placeos/common';
import { SafePipe } from '@placeos/components';
import { showMetadata } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { SidebarComponent } from './ui/sidebar.component';

interface RecorderStreamImage {
    id: string;
    name: string;
    ip_address: string;
}

interface RecorderStreamMetadata {
    domain: string;
    api_path: string;
    images: RecorderStreamImage[];
}

@Component({
    selector: `recorder-grid-view`,
    template: ` <div class="absolute inset-0 flex bg-base-200">
        <sidebar />
        <div class="flex flex-1 flex-col">
            <header
                class="flex h-[4.5rem] w-full items-center justify-between border-base-400 bg-base-100 p-4"
            >
                <h1 class="text-2xl font-bold">Recorder Streams</h1>
            </header>
            <main
                class="grid w-full flex-1 grid-cols-1 gap-4 overflow-auto p-4 sm:grid-cols-3"
            >
                @for (image of images(); track image.id) {
                    <div
                        class="relative min-h-[25vh] overflow-hidden rounded-xl border border-base-300 bg-base-100"
                    >
                        <div
                            class="absolute inset-2 overflow-hidden rounded-lg bg-base-300"
                        >
                            <img
                                class="h-full w-full object-contain object-center"
                                [src]="image.url | safe: 'url'"
                            />
                        </div>
                        <div
                            class="overflow absolute bottom-4 left-1/2 -translate-x-1/2 rounded bg-base-400 bg-opacity-30 px-2 py-1 text-xs"
                        >
                            {{ image.name }}
                        </div>
                    </div>
                }
            </main>
        </div>
    </div>`,
    styles: ``,
    imports: [SidebarComponent, SafePipe],
})
export class RecorderGridViewComponent extends AsyncHandler implements OnInit {
    private _org = inject(OrganisationService);

    public readonly time = signal(Date.now());
    public readonly images = signal([]);
    public domain = 'placeos-nonprod.avit.it.ucla.edu';
    public api_path = '';
    public image_data = [];
    public refresh_index = 0;
    public readonly refresh_delay = 1000;

    public async ngOnInit() {
        await firstTruthyValueFrom(this._org.initialised);
        const block = await lastValueFrom(
            showMetadata(this._org.organisation.id, 'recorder-streams'),
        );
        const { domain, api_path, images } =
            block.details as RecorderStreamMetadata;
        console.log(domain, api_path, images);
        this.domain = domain;
        this.api_path = api_path;
        this.image_data = images;
        this.refresh();
    }

    public refresh_image() {
        this.images.update((images) => {
            if (images.length <= 0) return images;
            let index = this.refresh_index;
            if (index >= images.length || index < 0) index = 0;
            const time = Date.now();
            images[index].id = `${images[index].id.split('|')[0]}|${time}`;
            images[index].url = `${images[index].raw_url}&t=${time}`;
            this.refresh_index = index + 1;
            console.log('Refresh');
            return [...images];
        });
        this.timeout(
            'refresh_image',
            () => this.refresh_image(),
            this.refresh_delay,
        );
    }

    public refresh() {
        this.time.set(Date.now());
        const image_list = [];
        for (const image of this.image_data) {
            const { name, ip_address, id } = image;
            const request_path = this.api_path
                .replace('{IP_ADDRESS}', ip_address)
                .replace('{DEVICE_ID}', id);
            const time = Date.now();
            image_list.push({
                id: `${ip_address}+${id}|${time}`,
                name,
                raw_url: `https://${this.domain}${request_path}`,
                url: `https://${this.domain}${request_path}`,
            });
        }
        console.log('Images:', image_list);
        this.images.set(image_list);
        this.refresh_image();
    }
}
