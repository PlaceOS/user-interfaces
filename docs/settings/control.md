# Control App Settings

The Control app is the AV / room control interface, typically shown on an in-room touch panel. It provides controls for the room's displays, sources, lighting, microphones, cameras, calls and room joining.

Set settings in Backoffice zone metadata under `control_app` for the standard `/control/` URL. Use the organisation, region or building zone. See [settings storage and priority](README.md#settings-storage-and-priority). The examples below show the metadata details object, without an `app` wrapper.

For example, the key `logo_light` means:

```json
{
    "logo_light": "https://example.com/logo.svg"
}
```

> **Note:** Most of the Control app's behaviour — available inputs and outputs, lighting scenes, microphones, cameras, help pages, room joining and so on — is driven by the System and its module bindings, configured on the System in Backoffice rather than through these app settings.

## Application Identity

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `name` | string | `"Control"` | Name of the application. Appended to browser page titles. |
| `title` | string | `"PlaceOS"` | Base browser page title for the application. |
| `description` | string | `"Room Control UI"` | Description of the application. |
| `short_name` | string | `"PlaceOS"` | Short name for the application. Used as the app name for PlaceOS API metadata and as a fallback for page titles. |
| `general` | object | `{}` | General settings associated with the app. |
| `prevent_space_init` | boolean | `true` | Whether to prevent loading the full list of bookable spaces on application startup. Leave this on — the Control app only talks to the room's own System, and loading every space can be slow in large organisations. |

## Branding & Appearance

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `logo_light` | string or icon object | `"assets/logo-light.svg"` | Logo shown in the top bar, the tabbed room view and the help modal when the light theme is active. Accepts an image URL, or an icon object with a `src` field. |
| `logo_dark` | string or icon object | `"assets/logo-dark.svg"` | Logo shown in the same places when the dark theme is active. |
| `allow_dark_mode` | boolean | `false` | Whether the app is allowed to use the dark theme. When off, the app always uses the light theme (and the light logo) regardless of the user's theme preference. |
| `environment_bar` | string | — | CSS colour for thin identifier bars shown at the top and bottom of the app, useful for telling environments apart (e.g. `"#f59e0b"` for staging). Leave unset for no bars. |

Logo settings accept either a plain image URL string or an icon object:

```json
{
    "logo_light": { "type": "img", "src": "https://example.com/logo.svg" },
    "logo_dark": { "type": "img", "src": "https://example.com/logo-dark.svg" }
}
```

## Support Contact

These details are shown in the help contact tooltip when a user asks for assistance. They have no build-time defaults — if unset, the app falls back to generic placeholder details (`your administrator`, `support@place.tech`, `0412345678`), so you should set them for your organisation.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `support_contact` | string | — | Name of the person or team to contact for help with the room. |
| `support_email` | string | — | Email address for room support. |
| `support_phone` | string | — | Phone number for room support. |

Example:

```json
{
    "support_contact": "the AV Service Desk",
    "support_email": "av-support@example.com",
    "support_phone": "+61 2 9123 4567"
}
```

## Voice Assistant

The System's `voice_control` binding turns on the voice assistant. To give a command, say "Hey Room" and then the command, or tap the microphone button. A green ring shows on the button when the panel hears speech. If you say "Hey Room" and stop, the panel plays a short tone and waits for the command. While you give a command, the words show next to the button. Speech recognition and speech synthesis run on the device:

- Speech to text: [Whistle](https://huggingface.co/Cactus-Compute/whistle) on the Needle Wasm engine (Apache-2.0 licence). The app uses English. The engine is in `apps/control/src/assets/needle`.
- Text to speech: [Matcha-TTS](https://huggingface.co/litert-community/Matcha-TTS) on LiteRT (English only, MIT licence).

The app downloads approximately 110 MB of model files when the voice assistant starts for the first time. While the speech to text model loads, the microphone button shows an hourglass and the panel ignores speech. The browser keeps the files in the Cache API for later visits. When the model files change, the app deletes the old files from the cache. By default, the files come from Hugging Face at fixed commits.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `voice_models_url` | string | — | URL of a folder that holds copies of the model files. Use this setting when the panels cannot connect to Hugging Face. A relative URL starts at the app's base URL. |

The folder must hold these files, with the same names as in the Hugging Face repositories:

- `whistle.cact` from `Cactus-Compute/whistle`
- `matcha_textenc_fp16.tflite`, `matcha_decoder_fp16.tflite`, `matcha_vocoder_fp16.tflite`, `dp_g2p_matcha_fp16.tflite`, `emb.bin`, `g2p_dict.txt.gz`, `config.json` and `g2p_meta.json` from `litert-community/Matcha-TTS`

Use the commits in `apps/control/src/app/ui/speech/litert.ts`. If the server is on a different origin, it must send CORS headers.

The browser must support Web Workers, AudioWorklet and WebAssembly. WebGPU makes speech synthesis faster, but it is not necessary.
