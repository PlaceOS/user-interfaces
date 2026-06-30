import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking } from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';

@Component({
    selector: 'parking-special-request-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="'BOOKINGS.P2_SPECIAL_NEEDS_DETAILS' | translate"
            [hide_confirm]="true"
        >
            <div class="space-y-6 p-4">
                <div>
                    <div class="mb-2 text-sm font-medium">
                        {{ 'BOOKINGS.P2_REASON_FOR_REQUEST' | translate }}
                    </div>
                    <div class="border-base-300 rounded-lg border p-4 text-sm">
                        {{
                            request_notes ||
                                ('COMMON.EMPTY' | translate)
                        }}
                    </div>
                </div>

                <div>
                    <div class="mb-2 text-sm font-medium">
                        {{ 'BOOKINGS.P2_ATTACH_SUPPORTING_DOCS' | translate }}
                    </div>
                    @if (attachments.length) {
                        <div class="space-y-2">
                            @for (file of attachments; track file.url) {
                                <a
                                    class="border-base-300 hover:border-info flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors"
                                    [href]="file.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <icon>attach_file</icon>
                                    <span class="truncate text-sm">
                                        {{ file.name }}
                                    </span>
                                </a>
                            }
                        </div>
                    } @else {
                        <div class="border-base-300 rounded-lg border p-4 text-sm">
                            {{ 'COMMON.EMPTY' | translate }}
                        </div>
                    }
                </div>
            </div>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        IconComponent,
        FullscreenModalShellComponent,
    ],
})
export class ParkingSpecialRequestModalComponent {
    private _data = inject<{ booking: Booking }>(MAT_DIALOG_DATA);

    public readonly request_notes: string =
        `${this._data.booking?.extension_data?.notes || this._data.booking?.description || ''}`.trim();

    public readonly attachments: { name: string; url: string }[] = (() => {
        const urls: string[] = (
            this._data.booking?.extension_data?.attachments || []
        ).filter((url) => !!url);
        return urls.map((url) => ({
            url,
            name: this._fileNameFromUrl(url),
        }));
    })();

    private _fileNameFromUrl(url: string): string {
        const last_part = `${url || ''}`.split('/').pop() || '';
        return decodeURIComponent(last_part || 'Uploaded file');
    }
}
