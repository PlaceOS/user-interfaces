# Signage plugin playback

The player prepares the next plugin in a hidden iframe. It sends `config`, then
`play`, and keeps the current item visible until the next plugin can display.
The item duration starts when the player reveals the next plugin.

## Confirm the first paint

A plugin can add `can_report_playing: true` to the capabilities in its `loaded`
message. For each `play` request, it must send `playing` with the same
`request_id` after its first content frame has painted. `loaded`, iframe load,
and `ready` do not confirm that content is visible.

For DOM content, update the document and wait for two animation frames before
sending the reply. Load required images and fonts before this step. For video,
use `requestVideoFrameCallback` where available to confirm the first frame.

```typescript
// After rendering content for this play request:
requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        parent.postMessage(
            {
                api: 'signage-plugin/v1',
                type: 'playing',
                request_id: play_message.request_id,
            },
            host_origin,
        );
    });
});
```

The host accepts a reply only from the current plugin iframe and origin. It
ignores replies for old or completed play requests.

## Plugins without paint confirmation

For older plugins, the player keeps the current item visible for two seconds
after it sends `play`. This gives the next plugin time to render. It cannot
confirm that an older plugin has painted, so a plugin that takes longer can
still show a blank frame. Add paint confirmation for that plugin.

A plugin that declares paint confirmation has up to 15 seconds to reply. After
that limit, the player reveals it and starts the item duration. A missing reply
therefore cannot stop the playlist. Config changes, plugin changes, and
component destruction cancel pending confirmation timers.
