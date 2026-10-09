import {
  SignagePluginService
} from "./chunk-MOQN4WV5.js";
import {
  DEFAULT_MEDIA_VIEW,
  SIGNAGE_MEDIA_PICKER_ACCEPT,
  applyMediaView,
  getVideoContainer,
  isImageSourceFile,
  isMediaViewActive,
  isSupportedImageFile,
  validateSignageMediaDimensions,
  validateSignageMediaFile
} from "./chunk-6LWHHSW4.js";
import {
  parseWebUrl
} from "./chunk-FZRJJ3PO.js";
import {
  SignagePlaylistService
} from "./chunk-A3ZHUTED.js";
import {
  loadAuthenticatedImage
} from "./chunk-IAA4H3MD.js";
import {
  openConfirmModal
} from "./chunk-EW627VC3.js";
import {
  PAGE_SIZE,
  SignageContextService,
  dialogClosed,
  searchParam
} from "./chunk-NVC2MTBW.js";
import {
  PagedList,
  decodeEntityNames
} from "./chunk-EMBZFGIE.js";
import {
  MatDialog
} from "./chunk-B6VCLN4P.js";
import {
  OrganisationService,
  SettingsService,
  UploadsService
} from "./chunk-4BHMYMLA.js";
import {
  Bh,
  Ds,
  Gh,
  Hh,
  Lh,
  Qh,
  V,
  Wh,
  _,
  i18n,
  jh,
  notifyError,
  notifyInfo,
  notifySuccess,
  notifyWarn,
  u,
  v,
  zh
} from "./chunk-UY3BZCXJ.js";
import {
  Injectable,
  computed,
  debounced,
  effect,
  inject,
  resource,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-6HUGPUMR.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/signage-manager/src/app/signage-media-tags.util.ts
function sortTagNames(tags) {
  return [...tags].sort((a, b) => a.localeCompare(b));
}
async function listSignageMediaTagCounts(query_params = {}) {
  const params = Object.entries(query_params).filter((entry) => !!entry[1]);
  const query = new URLSearchParams(params).toString();
  try {
    const response = await _(`${u()}/signage/media/tag_counts${query ? `?${query}` : ""}`);
    const counts = {};
    for (const [tag, count] of Object.entries(response || {})) {
      counts[tag] = Number(count) || 0;
    }
    return { tags: sortTagNames(Object.keys(counts)), counts };
  } catch {
    const tags = await zh(query_params);
    return { tags: sortTagNames(tags), counts: {} };
  }
}

// apps/signage-manager/src/app/media/media-file.util.ts
var VIDEO_THUMBNAIL_OFFSET = 0.1;
var VIDEO_THUMBNAIL_TIMEOUT = 15 * 1e3;
var MEDIA_METADATA_TIMEOUT = 15 * 1e3;
function dataURLtoFile(data_url, filename) {
  const [prefix, data] = data_url.split(",");
  const mime_type = prefix.split(":")[1].split(";")[0];
  const byte_string = atob(data);
  const array_buffer = new ArrayBuffer(byte_string.length);
  const uint8_array = new Uint8Array(array_buffer);
  for (let i = 0; i < byte_string.length; i++) {
    uint8_array[i] = byte_string.charCodeAt(i);
  }
  return new File([uint8_array], filename, { type: mime_type });
}
function getMediaMetadata(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    let settled = false;
    const settle = (metadata) => {
      if (settled)
        return;
      settled = true;
      clearTimeout(timer);
      URL.revokeObjectURL(url);
      if (metadata)
        resolve(metadata);
      else
        reject(new Error(i18n("SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE")));
    };
    const timer = setTimeout(() => settle(null), MEDIA_METADATA_TIMEOUT);
    if (getVideoContainer(file)) {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => settle({
        is_landscape: video.videoWidth > video.videoHeight,
        duration: video.duration,
        width: video.videoWidth,
        height: video.videoHeight
      });
      video.onerror = () => settle(null);
      video.src = url;
    } else {
      const img = new Image();
      img.onload = () => settle({
        is_landscape: img.width > img.height,
        duration: 0,
        width: img.width,
        height: img.height
      });
      img.onerror = () => settle(null);
      img.src = url;
    }
  });
}
async function generateThumbnail(file, max_width, max_height) {
  if (getVideoContainer(file)) {
    return generateVideoThumbnail(file, max_width, max_height);
  } else if (isSupportedImageFile(file)) {
    return generateImageThumbnail(file, max_width, max_height);
  }
  return "";
}
async function generateImageThumbnail(file, max_width, max_height) {
  const source = await decodeImageSource(file);
  const { width, height } = imageSourceSize(source, max_width, max_height);
  try {
    return generateThumbnailFromResource(source, width, height, max_width, max_height);
  } finally {
    if (source instanceof ImageBitmap)
      source.close();
  }
}
async function decodeImageSource(file) {
  if (typeof createImageBitmap === "function") {
    try {
      const bitmap = await createImageBitmap(file);
      if (bitmap.width > 0 && bitmap.height > 0)
        return bitmap;
      bitmap.close();
    } catch {
    }
  }
  const image = await loadImage(file);
  if (typeof image.decode === "function") {
    await image.decode().catch(() => void 0);
  }
  return image;
}
function imageSourceSize(source, max_width, max_height) {
  const width = source.naturalWidth || source.width || 0;
  const height = source.naturalHeight || source.height || 0;
  if (width > 0 && height > 0)
    return { width, height };
  return { width: max_width, height: max_height };
}
async function convertImageToWebp(file) {
  const image = await loadImage(file);
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext("2d");
  if (!ctx)
    throw new Error(i18n("SIGNAGE_MANAGER.SVC_ERR_CONVERT_IMAGE"));
  ctx.drawImage(image, 0, 0);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/webp", 0.92));
  if (!blob)
    throw new Error(i18n("SIGNAGE_MANAGER.SVC_ERR_CONVERT_IMAGE"));
  return new File([blob], replaceFileExtension(file.name, "webp"), {
    type: "image/webp",
    lastModified: file.lastModified
  });
}
function loadImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(i18n("SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE")));
    };
    image.src = url;
  });
}
function replaceFileExtension(file_name, next_extension) {
  return file_name.replace(/\.[^.]+$/, "") + `.${next_extension}`;
}
function generateVideoThumbnail(file, max_width, max_height) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    const url = URL.createObjectURL(file);
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    let settled = false;
    const cleanup = () => {
      clearTimeout(timer);
      URL.revokeObjectURL(url);
      video.removeAttribute("src");
      video.load();
    };
    const capture = () => {
      if (settled)
        return;
      settled = true;
      const image = generateThumbnailFromResource(video, video.videoWidth, video.videoHeight, max_width, max_height);
      cleanup();
      resolve(image);
    };
    const fail = (error) => {
      if (settled)
        return;
      settled = true;
      cleanup();
      reject(error);
    };
    const timer = setTimeout(() => fail(new Error("Timed out generating video thumbnail")), VIDEO_THUMBNAIL_TIMEOUT);
    video.onseeked = capture;
    video.onloadeddata = () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      const target = duration ? Math.min(VIDEO_THUMBNAIL_OFFSET, duration / 2) : VIDEO_THUMBNAIL_OFFSET;
      if (video.currentTime === target) {
        capture();
        return;
      }
      video.currentTime = target;
    };
    video.onerror = () => fail(new Error(i18n("SIGNAGE_MANAGER.SVC_ERR_LOAD_IMAGE")));
    video.src = url;
  });
}
function generateThumbnailFromResource(data, source_width, source_height, max_width, max_height) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  let thumbnail_width = source_width;
  let thumbnail_height = source_height;
  const aspect_ratio = thumbnail_width / thumbnail_height;
  if (thumbnail_width > max_width) {
    thumbnail_width = max_width;
    thumbnail_height = thumbnail_width / aspect_ratio;
  }
  if (thumbnail_height > max_height) {
    thumbnail_height = max_height;
    thumbnail_width = thumbnail_height * aspect_ratio;
  }
  const width = Math.max(1, Math.round(thumbnail_width));
  const height = Math.max(1, Math.round(thumbnail_height));
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(data, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg");
}

// apps/signage-manager/src/app/media/signage-media.service.ts
var MEDIA_RETRY_DELAYS = [500, 1500, 4500];
var MEDIA_CONCURRENCY = 4;
async function settleEach(items, task) {
  const results = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const index = next++;
      try {
        results[index] = {
          status: "fulfilled",
          value: await task(items[index])
        };
      } catch (reason) {
        results[index] = { status: "rejected", reason };
      }
    }
  };
  const workers = Math.min(MEDIA_CONCURRENCY, items.length);
  await Promise.all(Array.from({ length: workers }, worker));
  return results;
}
function shortList(names) {
  const hidden_count = names.length - 3;
  return names.slice(0, 3).join(", ") + (hidden_count > 0 ? ` +${hidden_count}` : "");
}
function videoLength(metadata) {
  return Number.isFinite(metadata.duration) ? Math.floor(metadata.duration * 1e3) : 0;
}
function screenshotPageURL(url) {
  const page = url ? parseWebUrl(url, document.baseURI) : null;
  return page?.protocol === "https:" ? page.href : "";
}
function uploadUrl(upload_id) {
  return `${location.origin}/api/engine/v2/uploads/${encodeURIComponent(upload_id)}/url`;
}
function isRetryableMediaError(error) {
  const status = error?.status;
  return status === 408 || status === 429 || status === 503;
}
async function retryMediaRequest(request) {
  for (const delay of MEDIA_RETRY_DELAYS) {
    try {
      return await request();
    } catch (error) {
      if (!isRetryableMediaError(error))
        throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  return request();
}
var SIGNAGE_VIEW_MODE_STORAGE_KEY = "PlaceOS.SIGNAGE:media-view-mode:v1";
function loadMediaViewMode() {
  if (typeof localStorage === "undefined")
    return "grid";
  try {
    const stored = localStorage.getItem(SIGNAGE_VIEW_MODE_STORAGE_KEY);
    return stored === "list" || stored === "folder" ? stored : "grid";
  } catch {
    return "grid";
  }
}
function persistMediaViewMode(mode) {
  if (typeof localStorage === "undefined")
    return;
  try {
    localStorage.setItem(SIGNAGE_VIEW_MODE_STORAGE_KEY, mode);
  } catch {
  }
}
var SignageMediaService = class _SignageMediaService {
  loadMoreMedia() {
    this._media_list.loadMore();
  }
  /** Load the media page that failed again: the next page when some pages
   * are loaded, otherwise the first page. */
  retryMedia() {
    if (!this._media_list.retry()) {
      this._media_reload.update((count) => count + 1);
    }
  }
  queryMedia(search = "") {
    if (!this._context.canQueryLists())
      return null;
    return Hh(__spreadValues(__spreadValues({}, this._context.orgZoneQueryParams({ limit: PAGE_SIZE })), searchParam(search)));
  }
  /**
   * Create a media record and add it to the loaded list. Empty fields are
   * left out, so the backend applies its defaults.
   */
  async _createMedia(fields) {
    const data = __spreadValues({}, new Ds(fields));
    for (const key in data) {
      if (!data[key])
        delete data[key];
    }
    const query_params = this._context.groupQueryParams({});
    const result = await retryMediaRequest(() => Wh(data, query_params));
    this._addMediaToList(result);
    return result;
  }
  /**
   * Fold a newly created item into the loaded media list. Refetching instead
   * loses the item whenever the backend index lags the write, which reads as
   * a failed upload.
   */
  _addMediaToList(media) {
    if (!media?.id)
      return;
    const item = decodeEntityNames(media);
    if (!this._media_list.items().some(({ id }) => id === item.id)) {
      this._media_list.adjustTotal(1);
    }
    this._media_list.update((items) => [item, ...items.filter((existing) => existing.id !== item.id)].sort((a, b) => b.created_at - a.created_at));
    this._media_tags.reload();
  }
  /** Take deleted media out of the loaded list and its total, in place, as
   * the search index can still return it for a short time. */
  _removeMediaFromList(media_ids) {
    const removed = new Set(media_ids);
    this._media_list.update((items) => items.filter((item) => !removed.has(item.id)));
    this._media_list.adjustTotal(-removed.size);
    this._media_tags.reload();
  }
  /**
   * Playlists that include any of the media items, read from the media
   * show route. A failed lookup only leaves out the playlists of that item.
   */
  async _playlistsUsingMedia(media_ids) {
    const query_params = this._context.groupQueryParams({});
    const results = await settleEach(media_ids, (id) => Gh(id, query_params));
    const by_id = /* @__PURE__ */ new Map();
    for (const result of results) {
      if (result.status !== "fulfilled")
        continue;
      for (const playlist of result.value?.playlists || []) {
        if (playlist?.id)
          by_id.set(playlist.id, playlist);
      }
    }
    return [...by_id.values()];
  }
  /**
   * Add the playlists that use the media to a delete confirmation message
   * @param item_count Number of media items to delete
   */
  _withMediaUsage(content, playlists, item_count = 1) {
    if (!playlists.length)
      return content;
    const names = shortList(playlists.map(({ name }) => name));
    const usage = i18n(item_count > 1 ? "SIGNAGE_MANAGER.SVC_MEDIA_ITEMS_USED_IN" : "SIGNAGE_MANAGER.SVC_MEDIA_USED_IN", { count: playlists.length, names }, playlists.length);
    return `${content} ${usage}`;
  }
  /** Warn about bulk upload files larger than 4K, by name. A single file
   * shows the warning in its edit modal instead. */
  _warnLargeMedia(items) {
    const large = items.filter(({ metadata }) => !validateSignageMediaDimensions(metadata).valid);
    if (!large.length)
      return;
    const { error } = validateSignageMediaDimensions(large[0].metadata);
    notifyWarn(`${shortList(large.map(({ file }) => file.name))}: ${error}`);
  }
  async previewMedia(item) {
    const plugin = item.media_type === "plugin" && item.plugin_id ? await this._plugin_service.resolvePlugin(item.plugin_id) : void 0;
    const { MediaPreviewModalComponent } = await import("./media-preview-modal.component-KDTFDVUB.js");
    this._dialog.open(MediaPreviewModalComponent, {
      data: {
        media: item,
        plugin,
        group_id: this._context.api_group_id()
      },
      panelClass: "fullscreen-dialog"
    });
  }
  async previewFileFromInput(event) {
    const element = event.target;
    if (!element?.files?.length)
      return;
    try {
      await this.previewFiles(element.files);
    } finally {
      element.value = "";
    }
  }
  async previewFiles(files) {
    if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA"))
      return;
    if (!files)
      return;
    const upload_files = Array.from(files);
    if (upload_files.length > 1) {
      return this.bulkUploadMedia(upload_files);
    }
    const [file] = upload_files;
    const prepared = file ? await this._prepareUploadMedia(file) : null;
    if (!prepared)
      return;
    await this.editMedia(new Ds({ video_length: videoLength(prepared.metadata) }), prepared.file, prepared.metadata);
  }
  /**
   * Upload several files through the bulk upload modal. Each created item is
   * added to the loaded media list, so the list is not fetched again: the
   * search index can lag the new records and would drop them.
   */
  async bulkUploadMedia(files) {
    if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA"))
      return;
    const prepared = await settleEach(files, (file) => this._prepareUploadMedia(file));
    const items = prepared.flatMap((result) => result.status === "fulfilled" && result.value ? [result.value] : []);
    if (!items.length)
      return;
    this._warnLargeMedia(items);
    const stored = /* @__PURE__ */ new Map();
    const data = {
      items,
      onUpload: (item, permissions, on_progress) => this._addMedia(item.file, new Ds({}), item.metadata, void 0, {
        permissions,
        on_progress,
        stored: stored.get(item),
        on_stored: (upload) => stored.set(item, upload)
      })
    };
    const { BulkMediaUploadModalComponent } = await import("./bulk-media-upload-modal.component-RJNR4QDN.js");
    const ref = this._dialog.open(BulkMediaUploadModalComponent, {
      data,
      panelClass: "mobile-fullscreen"
    });
    await dialogClosed(ref);
  }
  async addMediaFromLink(url) {
    if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA"))
      return;
    const url_obj = new URL(url);
    const media = new Ds({
      name: url_obj.hostname,
      media_uri: url,
      media_type: "webpage",
      orientation: "landscape"
    });
    await this.editMedia(media);
  }
  /**
   * Create a media item from an image the backend already stored, without
   * sending the bytes up a second time. The caller adds it to a playlist, so
   * a failure there leaves the created row in its hands to retry.
   */
  async addMediaFromUpload(upload_id, media_item = {}) {
    if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA")) {
      throw new Error(i18n("SIGNAGE_MANAGER.SVC_PERMISSION_DENIED"));
    }
    let thumbnail_id = "";
    try {
      const blob = await this._fetchUpload(upload_id);
      const file = new File([blob], `${media_item.name || "image"}.${blob.type.includes("png") ? "png" : "jpg"}`, { type: blob.type || "image/jpeg" });
      const thumbnail = await this._generateThumbnailImage(file);
      if (thumbnail) {
        thumbnail_id = await this._uploadThumbnailImage(thumbnail, media_item.name || "image");
      }
    } catch {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_THUMBNAIL_FAILED"));
    }
    return this._createMedia(__spreadProps(__spreadValues({
      orientation: "landscape"
    }, media_item), {
      media_id: upload_id,
      media_uri: uploadUrl(upload_id),
      media_type: "image",
      thumbnail_id
    }));
  }
  /** Remove a media row when the generated upload could not be claimed. */
  async discardCreatedMedia(id) {
    await Qh(id);
    this._removeMediaFromList([id]);
  }
  /** Open the image generation modal, to create artwork or to change some. */
  async generateMediaWithImageGen(options = {}) {
    if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA"))
      return;
    if (!this._context.requirePermission(this._context.hasFeature(options.source_upload_id ? "ai-editing" : "ai-generation"), "SIGNAGE_MANAGER.SVC_IMAGE_GEN_DISABLED"))
      return;
    if (this._image_gen_modal_open)
      return;
    this._image_gen_modal_open = true;
    try {
      const { ImageGenModalComponent } = await import("./image-gen-modal.component-KHDMV5TR.js");
      const ref = this._dialog.open(ImageGenModalComponent, {
        data: options,
        panelClass: "fullscreen-dialog",
        autoFocus: false,
        ariaLabelledBy: "image-gen-modal-title"
      });
      const result = await dialogClosed(ref);
      this._context.changed();
      return result;
    } finally {
      this._image_gen_modal_open = false;
    }
  }
  async editMediaWithImageGen(media) {
    if (!media?.media_id)
      return;
    return this.generateMediaWithImageGen({
      source_upload_id: media.media_id,
      source_item_id: media.id,
      source_name: media.name,
      aspect_ratio: media.orientation === "portrait" ? "9:16" : "16:9"
    });
  }
  async addMediaFromPlugin(plugin) {
    if (plugin.plugin_type !== "plugin")
      return;
    if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA"))
      return;
    const media = new Ds({
      name: "",
      media_uri: plugin.uri,
      media_type: "plugin",
      plugin_id: plugin.id,
      orientation: "landscape"
    });
    await this.editMedia(media, void 0, void 0, plugin);
  }
  /**
   * Open the media edit modal. A new file must come from
   * `_prepareUploadMedia` with its metadata, as it is not validated again.
   */
  async editMedia(media = new Ds({}), file, prepared_file_metadata, plugin) {
    if (media.id) {
      if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA"))
        return;
    } else if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA"))
      return;
    const file_metadata = file ? prepared_file_metadata || await this._getMediaMetadata(file) : {
      is_landscape: media.orientation === "landscape",
      duration: 0,
      width: 0,
      height: 0
    };
    const load_plugin = media.plugin_id ? () => this._plugin_service.resolvePlugin(media.plugin_id) : void 0;
    const file_thumbnail = file ? this._generateThumbnail(file, 1280, 720).catch(() => "") : void 0;
    const { MediaEditModalComponent } = await import("./media-edit-modal.component-5E62AHFO.js");
    const ref = this._dialog.open(MediaEditModalComponent, {
      data: {
        media,
        file,
        file_metadata,
        file_thumbnail,
        group_id: this._context.api_group_id(),
        plugin,
        tag_options: this.media_tags(),
        loadPlugin: load_plugin,
        generateThumbnail: (f) => this._generateThumbnailImage(f),
        onAdd: (f, m, file_metadata2, thumbnail, fallback_thumbnail, permissions) => this._addMedia(f, m, file_metadata2, thumbnail, {
          permissions: permissions ?? "none",
          thumbnail: file_thumbnail
        }, fallback_thumbnail),
        onEdit: async (id, data) => {
          const updated_media = await this._editMedia(id, data);
          Object.assign(media, updated_media);
        },
        preview: (item) => this.previewMedia(item)
      }
    });
    await dialogClosed(ref);
  }
  async _editMedia(id, data) {
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA"))
      return;
    const _a = data, { thumbnail_image } = _a, update = __objRest(_a, ["thumbnail_image"]);
    if (thumbnail_image) {
      const thumbnail_id = await this._uploadThumbnailImage(thumbnail_image, update.name);
      if (thumbnail_id)
        update.thumbnail_id = thumbnail_id;
    }
    const updated_media = decodeEntityNames(await Bh(id, update));
    this._media_list.update((items) => items.map((item) => item.id === id ? updated_media : item));
    this._media_tags.reload();
    return updated_media;
  }
  /**
   * Add a media item, optionally to a playlist. Webpages and plugins without
   * a supplied thumbnail get a server screenshot. When the screenshot fails,
   * `fallback_thumbnail` can supply an image instead, such as the one a
   * plugin renders of itself.
   */
  async _addMedia(file, media_item, file_metadata, url_thumbnail, upload_options, fallback_thumbnail) {
    if (file) {
      return this.addMedia(file, media_item, file_metadata, upload_options);
    }
    let thumbnail_id = "";
    if (url_thumbnail) {
      thumbnail_id = await this._uploadThumbnailImage(url_thumbnail, media_item.name);
    } else if (media_item.media_type === "webpage" || media_item.media_type === "plugin") {
      thumbnail_id = await this._screenshotThumbnail(media_item.media_uri, media_item.name);
      const fallback = !thumbnail_id && fallback_thumbnail ? await fallback_thumbnail().catch(() => "") : "";
      if (fallback) {
        thumbnail_id = await this._uploadThumbnailImage(fallback, media_item.name);
      }
    }
    return this._createMedia(__spreadProps(__spreadValues({}, media_item), {
      thumbnail_id: thumbnail_id || void 0
    }));
  }
  /**
   * Upload a file and create its media record. A file passed with
   * `file_metadata` must come from `_prepareUploadMedia`, so it is not read
   * and validated a second time.
   */
  async addMedia(file, media_item = new Ds({}), file_metadata, upload_options) {
    if (!this._context.requirePermission(this._context.can_create(), "SIGNAGE_MANAGER.SVC_NO_CREATE_MEDIA")) {
      throw new Error(i18n("SIGNAGE_MANAGER.SVC_PERMISSION_DENIED"));
    }
    const prepared = file_metadata ? {
      file,
      media_type: getVideoContainer(file) ? "video" : "image",
      metadata: file_metadata
    } : await this._prepareUploadMedia(file);
    if (!prepared) {
      throw new Error(i18n("SIGNAGE_MANAGER.SVC_SELECT_MEDIA_FILE"));
    }
    const { file: upload_file, media_type, metadata } = prepared;
    const { is_landscape } = metadata;
    let stored = upload_options?.stored;
    if (!stored) {
      stored = await this._storeMediaUpload(upload_file, upload_options);
      upload_options?.on_stored?.(stored);
    }
    const { media_id, thumbnail_id } = stored;
    return this._createMedia(__spreadProps(__spreadValues({}, media_item), {
      name: media_item.name || upload_file.name,
      media_id,
      media_uri: uploadUrl(media_id),
      media_type,
      orientation: is_landscape ? "landscape" : "portrait",
      thumbnail_id
    }));
  }
  /** Upload a media file and its generated thumbnail. */
  async _storeMediaUpload(file, upload_options) {
    const thumbnail_request = upload_options?.thumbnail ?? this._generateThumbnail(file, 1280, 720).catch(() => null);
    const media_id = await this._uploads.uploadFileToCompletion(file, false, upload_options?.permissions ?? "none", upload_options?.on_progress);
    const thumbnail_image = await thumbnail_request;
    let thumbnail_id = "";
    if (thumbnail_image) {
      const name_parts = file.name.split(".");
      name_parts.pop();
      thumbnail_id = await this._uploadThumbnailImage(thumbnail_image, name_parts.join("."));
    }
    return { media_id, thumbnail_id };
  }
  /**
   * Normalise, validate and measure a picked file, once per upload. Null,
   * with an error shown, when the file cannot be used.
   */
  async _prepareUploadMedia(file) {
    if (!file) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_SELECT_MEDIA_FILE"));
      return null;
    }
    const normalized_file = await this._normalizeImageUpload(file);
    const validation = await validateSignageMediaFile(normalized_file, this._mediaValidationOptions());
    if (!validation.valid) {
      notifyError(validation.error);
      return null;
    }
    let metadata;
    try {
      metadata = await this._getMediaMetadata(normalized_file);
    } catch {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_READ_MEDIA", {
        name: normalized_file.name
      }));
      return null;
    }
    return {
      file: normalized_file,
      media_type: validation.media_type,
      metadata
    };
  }
  async _normalizeImageUpload(file) {
    if (isSupportedImageFile(file) || getVideoContainer(file)) {
      return file;
    }
    if (!isImageSourceFile(file)) {
      return file;
    }
    try {
      const converted_file = await convertImageToWebp(file);
      notifyInfo(i18n("SIGNAGE_MANAGER.SVC_CONVERTED_MEDIA", {
        from: file.name,
        to: converted_file.name
      }));
      return converted_file;
    } catch {
      return file;
    }
  }
  async removeMedia(item) {
    if (!item?.id)
      return;
    if (!this._context.requirePermission(this._context.can_delete(), "SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA"))
      return;
    const playlists = await this._playlistsUsingMedia([item.id]);
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE"),
      content: this._withMediaUsage(i18n("SIGNAGE_MANAGER.SVC_DELETE_NAMED_PLAIN", {
        name: item.name
      }), playlists),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading(i18n("SIGNAGE_MANAGER.SVC_MEDIA_REMOVING"));
    try {
      await Qh(item.id, this._context.groupQueryParams({}));
    } catch {
      result.close();
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_REMOVE_MEDIA"));
      return;
    }
    this._removeMediaFromList([item.id]);
    await this._removeDeletedMediaFromPlaylists([item.id], playlists.map(({ id }) => id));
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_MEDIA_REMOVED"));
    result.close();
  }
  /**
   * Take deleted media out of the playlists that held it. The media is
   * already gone, so a failure here only warns.
   */
  async _removeDeletedMediaFromPlaylists(media_ids, playlist_ids) {
    try {
      await this._playlist_service.removeMediaFromPlaylists(media_ids, playlist_ids);
    } catch {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_MEDIA_PLAYLISTS_NOT_UPDATED"));
    }
  }
  async removeMediaItems(items) {
    const media_items = items.filter((item) => !!item?.id);
    if (!media_items.length)
      return false;
    if (!this._context.requirePermission(this._context.can_delete(), "SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA"))
      return false;
    const media_ids = media_items.map((item) => item.id);
    const playlists = await this._playlistsUsingMedia(media_ids);
    const result = await openConfirmModal({
      title: i18n("SIGNAGE_MANAGER.SVC_REMOVE_MEDIA_TITLE"),
      content: this._withMediaUsage(i18n("SIGNAGE_MANAGER.SVC_DELETE_SELECTED_MEDIA", { count: media_items.length }, media_items.length), playlists, media_items.length),
      icon: { content: "delete" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    result.loading(i18n("SIGNAGE_MANAGER.SVC_MEDIA_REMOVING"));
    const results = await Promise.allSettled(media_ids.map((id) => Qh(id, this._context.groupQueryParams({}))));
    const removed_ids = media_ids.filter((_2, index) => results[index].status === "fulfilled");
    if (removed_ids.length) {
      this._removeMediaFromList(removed_ids);
      await this._removeDeletedMediaFromPlaylists(removed_ids, playlists.map(({ id }) => id));
    }
    result.close();
    if (removed_ids.length < media_ids.length) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_REMOVE_MEDIA"));
      return false;
    }
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_MEDIA_REMOVED"));
    return true;
  }
  async shareMediaItems(items) {
    const media_ids = items.map((item) => item.id).filter(Boolean);
    if (!media_ids.length)
      return false;
    return this._context.shareItems("media", media_ids);
  }
  async addMediaTags(items) {
    const media_items = items.filter((item) => !!item?.id);
    if (!media_items.length)
      return false;
    if (!this._context.requirePermission(this._context.can_update(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA"))
      return false;
    const { MediaTagsModalComponent } = await import("./media-tags-modal.component-OIFLNFXG.js");
    const ref = this._dialog.open(MediaTagsModalComponent, {
      data: { tags: this.media_tags() },
      width: "min(28rem, calc(100vw - 2rem))"
    });
    const tags = await dialogClosed(ref);
    if (!tags?.length)
      return false;
    const changes = media_items.map((item) => ({
      id: item.id,
      tags: [.../* @__PURE__ */ new Set([...item.tags || [], ...tags])]
    }));
    const results = await Promise.allSettled(changes.map(({ id, tags: tags2 }) => Bh(id, { tags: tags2 })));
    const saved = new Map(changes.filter((_2, index) => results[index].status === "fulfilled").map(({ id, tags: tags2 }) => [id, tags2]));
    if (saved.size) {
      this._media_list.update((items2) => items2.map((item) => saved.has(item.id) ? new Ds(__spreadProps(__spreadValues({}, item), {
        tags: saved.get(item.id)
      })) : item));
      this._media_tags.reload();
    }
    const failed = media_items.length - saved.size;
    if (failed) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_ERR_MEDIA_TAGS", { count: failed }, failed));
      return false;
    }
    notifySuccess(i18n("SIGNAGE_MANAGER.MEDIA_SAVE_SUCCESS"));
    return true;
  }
  async renameMediaTag(tag, count) {
    if (!tag)
      return false;
    if (!this._context.requirePermission(this._context.can_update_media_tags(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA"))
      return false;
    const { MediaTagModalComponent } = await import("./media-tag-modal.component-4BB4DKOB.js");
    const ref = this._dialog.open(MediaTagModalComponent, {
      data: {
        action: "rename",
        tag,
        count,
        can_delete_media: false
      },
      width: "min(28rem, calc(100vw - 2rem))"
    });
    const result = await dialogClosed(ref);
    if (result?.action !== "rename")
      return false;
    try {
      const group_id = this._context.api_group_id();
      await Lh(__spreadValues({
        current_tag: tag,
        new_tag: result.new_tag
      }, group_id ? { group_id } : {}));
    } catch (error) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_MEDIA_TAG_ERROR", {
        error: error instanceof Error ? error.message : `${error}`
      }));
      return false;
    }
    this._context.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_MEDIA_TAG_RENAMED"));
    return true;
  }
  async removeMediaTag(tag, count) {
    if (!tag)
      return false;
    if (!this._context.requirePermission(this._context.can_update_media_tags(), "SIGNAGE_MANAGER.SVC_NO_UPDATE_MEDIA"))
      return false;
    const { MediaTagModalComponent } = await import("./media-tag-modal.component-4BB4DKOB.js");
    const ref = this._dialog.open(MediaTagModalComponent, {
      data: {
        action: "remove",
        tag,
        count,
        can_delete_media: this._context.can_delete_tagged_media()
      },
      width: "min(28rem, calc(100vw - 2rem))"
    });
    const result = await dialogClosed(ref);
    if (result?.action !== "remove")
      return false;
    if (result.remove_media && !this._context.requirePermission(this._context.can_delete_tagged_media(), "SIGNAGE_MANAGER.SVC_NO_DELETE_MEDIA"))
      return false;
    try {
      const group_id = this._context.api_group_id();
      await jh(__spreadValues(__spreadValues({
        tag
      }, result.remove_media ? { remove_media: true } : {}), group_id ? { group_id } : {}));
    } catch (error) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_MEDIA_TAG_ERROR", {
        error: error instanceof Error ? error.message : `${error}`
      }));
      return false;
    }
    this._context.changed();
    notifySuccess(i18n("SIGNAGE_MANAGER.SVC_MEDIA_TAG_REMOVED"));
    return true;
  }
  async openPlaylistSelectModal(media_id) {
    const { PlaylistSelectModalComponent } = await import("./playlist-select-modal.component-EIJ37WCC.js");
    const ref = this._dialog.open(PlaylistSelectModalComponent, {
      data: { media_id },
      panelClass: "mobile-fullscreen"
    });
    const playlist_id = await dialogClosed(ref);
    if (!playlist_id)
      return;
    await this._playlist_service.addMediaToPlaylist(playlist_id, media_id, this._media_list.items().find(({ id }) => id === media_id));
  }
  async openBulkPlaylistSelectModal(media_ids) {
    const { PlaylistSelectModalComponent } = await import("./playlist-select-modal.component-EIJ37WCC.js");
    const ref = this._dialog.open(PlaylistSelectModalComponent, {
      data: { media_ids },
      panelClass: "mobile-fullscreen"
    });
    const playlist_id = await dialogClosed(ref);
    if (!playlist_id)
      return false;
    return this._playlist_service.addMediaItemsToPlaylist(playlist_id, media_ids, this._media_list.items().filter(({ id }) => media_ids.includes(id)));
  }
  _uploadThumbnailImage(data_url, name) {
    const file_name = `thumb+${(name || "media").replace(/[^a-zA-Z0-9_-]/g, "_")}.jpg`;
    return this._uploads.uploadFileToCompletion(dataURLtoFile(data_url, file_name)).catch(() => {
      notifyWarn(i18n("SIGNAGE_MANAGER.SVC_THUMBNAIL_UPLOAD_FAILED"));
      return "";
    });
  }
  /** Read an upload, with the auth the uploads route needs */
  async _fetchUpload(upload_id) {
    const source = await loadAuthenticatedImage(uploadUrl(upload_id), "/api/engine/v2/uploads");
    return (await fetch(source)).blob();
  }
  /**
   * Make a thumbnail for a webpage or plugin from a server side screenshot
   * of its URL. The full size screenshot is only the source of the
   * thumbnail, so it is deleted again after use. Returns the thumbnail
   * upload ID, or an empty string when the page cannot be captured. The
   * server only renders https pages.
   */
  async _screenshotThumbnail(url, name) {
    const page = screenshotPageURL(url);
    if (!page)
      return "";
    let screenshot_id = "";
    try {
      const upload = await v(`${u()}/uploads/screenshot`, {
        url: page,
        width: 1920,
        height: 1080,
        format: "jpeg"
      });
      screenshot_id = `${upload?.id || ""}`;
      if (!screenshot_id)
        return "";
      const blob = await this._fetchUpload(screenshot_id);
      const thumbnail = await this._generateThumbnail(new File([blob], "screenshot.jpg", {
        type: blob.type || "image/jpeg"
      }), 1280, 720);
      if (!thumbnail)
        return "";
      return await this._uploadThumbnailImage(thumbnail, name);
    } catch {
      return "";
    } finally {
      if (screenshot_id) {
        V(`${u()}/uploads/${encodeURIComponent(screenshot_id)}`).catch(() => void 0);
      }
    }
  }
  /**
   * Scale an image the user picked down to a thumbnail data URL. Webpages
   * and plugins have no file to capture a frame from, so the user can
   * supply an image instead of the automatic screenshot.
   */
  async _generateThumbnailImage(file) {
    if (!file || !isImageSourceFile(file)) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_THUMBNAIL_NOT_IMAGE"));
      return "";
    }
    const image = await this._normalizeImageUpload(file);
    const thumbnail = await this._generateThumbnail(image, 1280, 720).catch(() => "");
    if (!thumbnail) {
      notifyError(i18n("SIGNAGE_MANAGER.SVC_THUMBNAIL_FAILED"));
    }
    return thumbnail;
  }
  _mediaValidationOptions() {
    return {
      allow_extended_video_codecs: !!this._settings.get("app.media_allow_extended_video_codecs")
    };
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._uploads = inject(UploadsService);
    this._dialog = inject(MatDialog);
    this._context = inject(SignageContextService);
    this._playlist_service = inject(SignagePlaylistService);
    this._plugin_service = inject(SignagePluginService);
    this._generateThumbnail = generateThumbnail;
    this._getMediaMetadata = getMediaMetadata;
    this.media_upload_accept = SIGNAGE_MEDIA_PICKER_ACCEPT;
    this.show_media_group_tabs = this._settings.signal("show_media_group_tabs", true);
    this.search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_view_mode = signal(
      loadMediaViewMode(),
      ...ngDevMode ? [{ debugName: "media_view_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._media_search_debounced = debounced(this.search_term, 400);
    this._media_list = new PagedList({
      sort: (a, b) => b.created_at - a.created_at
    });
    this._media_reload = signal(
      0,
      ...ngDevMode ? [{ debugName: "_media_reload" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_view = signal(
      DEFAULT_MEDIA_VIEW,
      ...ngDevMode ? [{ debugName: "media_view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_view_active = computed(
      () => isMediaViewActive(this.media_view()),
      ...ngDevMode ? [{ debugName: "media_view_active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media = computed(
      () => applyMediaView(this._media_list.items(), this.media_view()),
      ...ngDevMode ? [{ debugName: "media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_loading = this._media_list.loading;
    this.media_has_more = this._media_list.has_more;
    this.media_error = this._media_list.error;
    this.media_total = this._media_list.total;
    this._reload_media = effect(
      () => {
        const initialised = this._org.initialised();
        const can_query = this._context.can_query_group_data();
        const group_id = this._context.api_group_id_debounced.value();
        const search = this._media_search_debounced.value().trim();
        this._context.data_change();
        this._media_reload();
        untracked(() => this._media_list.reset(initialised && can_query ? Hh(this._context.orgZoneQueryParams(__spreadValues({ limit: PAGE_SIZE }, searchParam(search)), group_id)) : null));
      },
      ...ngDevMode ? [{ debugName: "_reload_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load_all_media = effect(
      () => {
        if (!this.media_view_active())
          return;
        if (!this.media_has_more() || this.media_loading())
          return;
        untracked(() => this.loadMoreMedia());
      },
      ...ngDevMode ? [{ debugName: "_load_all_media" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._media_tags = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_media_tags" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        initialised: this._org.initialised(),
        can_query: this._context.can_query_group_data(),
        group_id: this._context.api_group_id_debounced.value(),
        change: this._context.data_change()
      }),
      loader: async ({ params }) => {
        const empty = { tags: [], counts: {} };
        if (!params.initialised || !params.can_query)
          return empty;
        try {
          return await listSignageMediaTagCounts(this._context.orgZoneQueryParams({}, params.group_id));
        } catch {
          return empty;
        }
      }
    }));
    this.media_tags = computed(
      () => this._media_tags.value()?.tags || [],
      ...ngDevMode ? [{ debugName: "media_tags" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.media_tag_counts = computed(
      () => this._media_tags.value()?.counts || {},
      ...ngDevMode ? [{ debugName: "media_tag_counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._image_gen_modal_open = false;
    effect(() => persistMediaViewMode(this.media_view_mode()));
  }
  static {
    this.\u0275fac = function SignageMediaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignageMediaService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignageMediaService, factory: _SignageMediaService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignageMediaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SignageMediaService
};
//# debugId=8286fc70-30bb-5290-a6f9-e8b2968fce95
//# sourceMappingURL=chunk-XR3JC4JO.js.map
