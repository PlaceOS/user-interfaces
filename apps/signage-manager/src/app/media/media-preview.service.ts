import { inject, Injectable, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignageMedia } from '@placeos/ts-client';
import { SignageContextService } from '../signage-context.service';
import { SignagePluginService } from '../signage-plugin.service';

/**
 * Open the full screen media preview. Kept apart from `SignageMediaService`,
 * so pages that only preview media do not start the media library queries.
 */
@Injectable({
    providedIn: 'root',
})
export class MediaPreviewService {
    private readonly _dialog = inject(MatDialog);
    private readonly _context = inject(SignageContextService);
    private readonly _injector = inject(Injector);

    public async previewMedia(item: SignageMedia) {
        // The plugin service loads the plugin lists, so get it only when needed
        const plugin =
            item.media_type === 'plugin' && item.plugin_id
                ? await this._injector
                      .get(SignagePluginService)
                      .resolvePlugin(item.plugin_id)
                : undefined;
        const { MediaPreviewModalComponent } =
            await import('../shared/media-preview-modal.component');
        this._dialog.open(MediaPreviewModalComponent, {
            data: {
                media: item,
                plugin,
                group_id: this._context.api_group_id(),
            },
            panelClass: 'fullscreen-dialog',
        });
    }
}
