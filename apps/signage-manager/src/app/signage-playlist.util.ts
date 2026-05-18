import { SignageMedia } from '@placeos/ts-client';

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
