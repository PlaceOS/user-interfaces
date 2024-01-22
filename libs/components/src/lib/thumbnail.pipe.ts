import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {
    private _thumbnail_cache: Record<string, string> = {};

    public transform(url: string): string {
        if (!url) return null;
        if (!this._thumbnail_cache[url]) {
            createVideoThumbnail(url)
                .then((_) => (this._thumbnail_cache[url] = _))
                .catch((GENERATING[url] = null));
        }
        return this._thumbnail_cache[url] || '';
    }
}

const GENERATING = {};

function createVideoThumbnail(url: string) {
    if (!GENERATING[url]) {
        GENERATING[url] = new Promise<string>((resolve) => {
            var video = document.createElement('video');
            video.crossOrigin = 'anonymous';
            video.src = url;
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            video.addEventListener('loadedmetadata', () => {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                video.currentTime = 1;
            });

            video.addEventListener('seeked', () => {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                var thumbnail = canvas.toDataURL('image/png');
                resolve(thumbnail);
            });
            video.load();
        });
    }
    return GENERATING[url];
}
