# Signage plugin thumbnails

Signage Manager asks a plugin to render its own preview image rather than
screenshotting it. A plugin knows how to represent itself — it can export its
own canvas, or return a curated preview — whereas capturing the DOM loses
canvas, WebGL, video and web font content, which is most of what plugins are
made of.

This extends the existing `signage-plugin/v1` channel. It is entirely opt-in:
a plugin that does not declare the capability is never sent a request.

When a new plugin item has no thumbnail from the plugin, Signage Manager asks
the server for a screenshot of the plugin URI instead. The server loads the
page without the host, so the screenshot shows the plugin with its default
configuration. See [Fallback screenshot](#fallback-screenshot).

## Declaring the capability

Add `can_thumbnail` to the capabilities in the `loaded` message the plugin
already sends:

```js
window.parent.postMessage(
    {
        api: 'signage-plugin/v1',
        type: 'loaded',
        payload: {
            plugin: { name: 'Room Status', version: '1.2.0' },
            capabilities: {
                requires_play_signal: false,
                can_finish: false,
                static_media: true,
                can_thumbnail: true,
            },
            config_schema: {},
        },
    },
    '*',
);
```

Without this flag the host never sends a thumbnail request.

## Answering a request

The host sends:

```js
{
    api: 'signage-plugin/v1',
    type: 'thumbnail',
    request_id: 'thumbnail-1',
    payload: { width: 1280, height: 720 }
}
```

Reply with the same `request_id`:

```js
window.addEventListener('message', async (event) => {
    const msg = event.data;
    if (msg?.api !== 'signage-plugin/v1' || msg.type !== 'thumbnail') return;

    const image = await renderPreview(msg.payload.width, msg.payload.height);

    event.source.postMessage(
        {
            api: 'signage-plugin/v1',
            type: 'thumbnail',
            request_id: msg.request_id,
            payload: { image },
        },
        event.origin,
    );
});
```

The request is made against the live instance after the plugin has been
configured, so the preview should reflect the current configuration.

## Requirements for the returned image

The host validates the reply and silently discards anything that does not meet
all of these:

| Requirement | Detail                                  |
| ----------- | --------------------------------------- |
| Format      | `data:` URL, base64 encoded             |
| Types       | `image/png`, `image/jpeg`, `image/webp` |
| Size        | under 4 MB encoded                      |
| Correlation | `request_id` must match the request     |

A plugin that fails to reply within 5 seconds is treated as having no
thumbnail. In every rejection case the host uses the
[fallback screenshot](#fallback-screenshot). If that also fails, the media is
saved without a thumbnail and shows the plugin icon. A broken or slow plugin
never blocks a save.

Because a plugin is a separate document, its reply is treated as untrusted
input — hence the validation above. Do not assume anything outside these rules
will be accepted.

## Rendering the preview

A plugin drawing to a canvas can usually answer directly:

```js
async function renderPreview(width, height) {
    return document.querySelector('canvas').toDataURL('image/png');
}
```

Note that `toDataURL` throws on a canvas tainted by cross-origin images. Serve
images from the same origin, or set `crossOrigin` and rely on CORS, if the
plugin draws remote content.

Plugins that are not canvas based can return a static preview shipped
alongside the plugin, which is often the clearest option:

```js
async function renderPreview() {
    const response = await fetch('./preview.png');
    const blob = await response.blob();
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}
```

## Fallback screenshot

When a user adds a webpage or plugin item and supplies no thumbnail, Signage
Manager makes one on save:

1. `POST /api/engine/v2/uploads/screenshot` captures the page URL at
   1920x1080. For a plugin, the URL is the plugin URI.
2. The host downloads the screenshot and scales it to the usual thumbnail
   size.
3. The host saves the scaled image as the item `thumbnail_id`.
4. The host deletes the full size screenshot upload.

The item does not keep the screenshot as `media_id`. The player loads
`media_url`, which points at `media_id` when it is set, so the player would
show the screenshot instead of the page.

The server only renders `https` pages. For other URLs, or if the screenshot
fails, the item is saved without a thumbnail.

The order of thumbnail sources for a new item is:

1. An image the user picks in the media dialog.
2. For plugins that declare `can_thumbnail`, the image from the plugin.
3. The fallback screenshot.
