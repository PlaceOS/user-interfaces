import { SignageMedia } from '@placeos/ts-client';

export function playlistMediaThumbnailUrl(item: SignageMedia) {
    return item?.thumbnail_id
        ? `/api/engine/v2/signage/media/${item.id}/thumbnail`
        : item?.thumbnail_url || '';
}

export function playlistMediaIcon(item: SignageMedia) {
    return item?.media_type === 'video'
        ? 'video_library'
        : item?.media_type === 'webpage'
          ? 'http'
          : item?.media_type === 'plugin'
            ? 'extension'
            : 'image';
}

export function playlistMediaItems(list: {
    items?: string[];
    media?: SignageMedia[];
}) {
    const media = list.media || [];
    const media_by_id = new Map(media.map((item) => [item.id, item]));
    return list.items?.length
        ? list.items
              .map((id) => media_by_id.get(id))
              .filter((item): item is SignageMedia => !!item)
        : media;
}
