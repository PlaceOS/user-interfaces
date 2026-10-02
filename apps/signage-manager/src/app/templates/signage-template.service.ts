import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    linkedSignal,
    signal,
    untracked,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    i18n,
    notifyError,
    notifySuccess,
    notifyWarn,
    OrganisationService,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import {
    addSignageTemplate,
    addSignageTemplateMapping,
    listSignageTemplateApprovers,
    PlaceCurrentGroup,
    query,
    querySignageTemplates,
    removeSignageTemplate,
    removeSignageTemplateDraft,
    removeSignageTemplateMapping,
    requestApprovalSignageTemplate,
    showSignageTemplate,
    type SignagePlaylistSchedule,
    SignageTemplate,
    type SignageTemplateApprover,
    type SignageTemplateLayout,
    updateSignageTemplate,
    updateSignageTemplateMapping,
} from '@placeos/ts-client';
import { decodeEntityNames } from '../shared/decode-entity-names.util';
import { PagedList } from '../shared/paged-list';
import { byName } from '../shared/paged-search';
import type { TemplateRequestApprovalModalResult } from '../shared/template-request-approval-modal.component';
import { SignageContextService } from '../signage-context.service';
import { dialogClosed, PAGE_SIZE, searchParam } from '../signage-service.util';
import {
    HydratedSignageTemplateMapping,
    SignageTemplateMappingQuery,
    SignageTemplateMappingTarget,
} from '../signage-template-mapping';
import { applyLayoutPositionDefaults } from './template-layout.util';

/** Whether two records are approved and draft versions of one template. */
export function isSameSignageTemplate(
    first: SignageTemplate,
    second: SignageTemplate,
) {
    return (
        (first.live_template_id || first.id) ===
        (second.live_template_id || second.id)
    );
}

/**
 * The template under its live ID. The API returns a template with pending
 * changes as a draft record with its own ID, but routes and every template
 * call (update, approve, draft discard) use the live ID.
 */
export function liveSignageTemplate(template: SignageTemplate) {
    return template.live_template_id &&
        template.live_template_id !== template.id
        ? new SignageTemplate({ ...template, id: template.live_template_id })
        : template;
}

/** Signage templates, the selected template and its layout draft, and template mappings */
@Injectable({
    providedIn: 'root',
})
export class SignageTemplateService {
    private readonly _org = inject(OrganisationService);
    private readonly _dialog = inject(MatDialog);
    private readonly _context = inject(SignageContextService);

    // --- Templates (paged incrementally as the user scrolls) ---
    // Searching is done by the backend so results are paged like the full
    // list, like the other signage lists.
    public readonly template_search_term = signal('');
    private readonly _template_search_debounced = debounced(
        this.template_search_term,
        400,
    );
    private readonly _template_list = new PagedList<SignageTemplate>({
        sort: byName,
    });

    // Drafts this session made or fetched, by live ID. The template index
    // returns only the live (approved) record, so a page or reload would
    // replace a held draft and hide its pending changes. A held draft stays
    // until it is approved, undone or deleted, or the group changes. A draft
    // made outside this session still shows as approved in the list, as the
    // index gives no sign of it.
    private readonly _held_drafts = signal<Record<string, SignageTemplate>>({});

    /** Loaded templates, with the drafts this session holds in place of their live records */
    public readonly templates = computed(() => {
        const held = this._held_drafts();
        return this._template_list.items().map((item) => held[item.id] ?? item);
    });
    public readonly templates_loading = this._template_list.loading;
    public readonly templates_has_more = this._template_list.has_more;
    /** Whether the last page of templates failed to load */
    public readonly templates_error = this._template_list.error;
    /** Number of templates that match the query, loaded or not */
    public readonly templates_total = this._template_list.total;
    private readonly _templates_retry = signal(0);
    // Query of the loaded list, so a data change can keep its rows on screen
    private _template_query: { group_id: string; search: string } | null = null;

    private readonly _reload_templates = effect(() => {
        const enabled = this._context.templates_enabled();
        const initialised = this._org.initialised();
        const can_query = this._context.can_query_group_data();
        const group_id = this._context.api_group_id_debounced.value();
        const search = this._template_search_debounced.value().trim();
        this._context.data_change();
        this._templates_retry();
        untracked(() => {
            const active = enabled && initialised && can_query;
            if (this._template_query?.group_id !== group_id) {
                this._held_drafts.set({});
            }
            // A data change on the same query keeps the loaded rows on screen
            // and reloads as many rows as were loaded, so the list does not
            // empty or drop the pages the user scrolled to.
            const same_query =
                active &&
                this._template_query?.group_id === group_id &&
                this._template_query.search === search;
            const limit = same_query
                ? Math.max(PAGE_SIZE, this._template_list.loaded_rows)
                : PAGE_SIZE;
            this._template_query = active ? { group_id, search } : null;
            this._template_list.reset(
                active
                    ? querySignageTemplates(
                          this._context.groupQueryParams(
                              { limit, ...searchParam(search) },
                              group_id,
                          ),
                      )
                    : null,
                { keep_items: same_query },
            );
        });
    });

    public loadMoreTemplates() {
        this._template_list.loadMore();
    }

    /** Load the failed page again, or the whole list when the first page failed */
    public reloadTemplates() {
        if (!this._template_list.retry()) {
            this._templates_retry.update((count) => count + 1);
        }
    }

    /**
     * Fetch a template that is not in the loaded pages, e.g. for a link to
     * it. It joins the loaded templates only when no search filters them,
     * so search results hold only matches.
     * @returns The template under its live ID, or null when it cannot be loaded
     */
    public async loadTemplate(template_id: string) {
        if (!template_id) return null;
        try {
            const template = liveSignageTemplate(
                decodeEntityNames(await showSignageTemplate(template_id)),
            );
            this._holdDraft(template);
            if (!this._template_query?.search) {
                this._template_list.update((items) =>
                    [
                        ...items.filter(
                            (item) => !isSameSignageTemplate(item, template),
                        ),
                        template,
                    ].sort(byName),
                );
            }
            return template;
        } catch {
            return null;
        }
    }

    public async listApprovedTemplates() {
        if (!this._context.canQueryLists()) return [];
        const result = await query<SignageTemplate>({
            path: 'signage/templates',
            query_params: this._context.groupQueryParams({
                approved: true,
                limit: 10_000,
            }),
            fn: (data) => new SignageTemplate(decodeEntityNames(data)),
        });
        return result.data;
    }

    /** Refresh assignment counts after template mappings change. */
    public readonly template_mappings_revision = signal(0);
    /** Whether the template mapping modal is loading its templates */
    public readonly template_mapping_opening = signal(false);

    public async listTemplateMappings(
        query_params: SignageTemplateMappingQuery,
    ) {
        if (!this._context.canQueryLists()) return [];
        const result = await query<HydratedSignageTemplateMapping>({
            path: 'signage/template_mappings',
            query_params: { ...query_params, limit: 10_000 },
            fn: (data) =>
                new HydratedSignageTemplateMapping({
                    ...data,
                    template_details: decodeEntityNames(data.template_details),
                }),
        });
        return result.data;
    }

    public readonly selected_template = signal<SignageTemplate | null>(null);
    public readonly selected_template_requires_approval = computed(() => {
        const template = this.selected_template();
        return !!template?.id && !template.approved;
    });
    public readonly template_approval_request_loading = signal(false);
    public readonly selected_template_layout_index = signal<number | null>(
        null,
    );
    // Editable copy of the selected template's layout items, so reorders and
    // plugin changes only hit the API when explicitly saved. Resets whenever
    // the selection (or its saved layouts) change, except that unsaved edits
    // survive a refresh of the same template (details edit, approval).
    public readonly template_layout_draft = linkedSignal<
        SignageTemplate | null,
        SignageTemplateLayout[]
    >({
        source: this.selected_template,
        computation: (template, previous) => {
            const previous_template = previous?.source;
            const keep_draft =
                !!template &&
                !!previous_template &&
                isSameSignageTemplate(previous_template, template) &&
                JSON.stringify(previous.value) !==
                    JSON.stringify(previous_template.layouts ?? []);
            return keep_draft
                ? previous.value
                : structuredClone(template?.layouts ?? []);
        },
    });
    public readonly template_layout_dirty = computed(
        () =>
            JSON.stringify(this.template_layout_draft()) !==
            JSON.stringify(this.selected_template()?.layouts ?? []),
    );

    public async addTemplate() {
        if (
            !this._context.requirePermission(
                this._context.can_create_templates(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES',
            )
        )
            return;
        const { TemplateEditModalComponent } =
            await import('../shared/template-edit-modal.component');
        const ref = this._dialog.open(TemplateEditModalComponent, {
            data: {
                template: new SignageTemplate({}),
                onAdd: (data: Partial<SignageTemplate>) =>
                    this._addSignageTemplate(data),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await dialogClosed(ref);
        if (result) {
            this._context.changed();
        }
    }

    public async editTemplate(template: SignageTemplate) {
        if (
            !this._context.requirePermission(
                this._context.can_update_templates(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES',
            )
        )
            return;
        const { TemplateEditModalComponent } =
            await import('../shared/template-edit-modal.component');
        const ref = this._dialog.open(TemplateEditModalComponent, {
            data: {
                template,
                group_id: this._context.api_group_id(),
                onEdit: (id: string, data: Partial<SignageTemplate>) =>
                    updateSignageTemplate(id, data),
            },
            panelClass: 'mobile-fullscreen',
        });
        const result = await dialogClosed(ref);
        if (result) {
            this.updateCachedTemplate(result);
            this._context.changed();
        }
    }

    public async editTemplateMapping(
        target: SignageTemplateMappingTarget,
        mapping: HydratedSignageTemplateMapping | null = null,
    ) {
        if (
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS',
            )
        )
            return false;
        if (this.template_mapping_opening()) return false;
        let templates: SignageTemplate[] = [];
        this.template_mapping_opening.set(true);
        try {
            if (!mapping) templates = await this.listApprovedTemplates();
        } catch {
            notifyError(i18n('COMMON.LOAD_ERROR'));
            return false;
        } finally {
            this.template_mapping_opening.set(false);
        }
        const { TemplateMappingModalComponent } =
            await import('../shared/template-mapping-modal.component');
        const ref = this._dialog.open(TemplateMappingModalComponent, {
            data: {
                mapping,
                templates,
                save: (
                    template_id: string,
                    schedule: SignagePlaylistSchedule | null,
                ) =>
                    mapping
                        ? updateSignageTemplateMapping(mapping.id, { schedule })
                        : addSignageTemplateMapping({
                              ...target,
                              template_id,
                              schedule,
                          }),
            },
            panelClass: 'mobile-fullscreen',
        });
        const changed = !!(await dialogClosed(ref));
        if (changed)
            this.template_mappings_revision.update((value) => value + 1);
        return changed;
    }

    public async removeTemplateMapping(
        mapping: HydratedSignageTemplateMapping,
    ) {
        if (
            !mapping?.id ||
            !this._context.requirePermission(
                this._context.can_update(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_ASSIGNMENTS',
            )
        )
            return false;
        const result = await openConfirmModal(
            {
                title: i18n(
                    'SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_TITLE',
                ),
                content: i18n(
                    'SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_MAPPING_CONTENT',
                    { name: mapping.template_details.name },
                ),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        try {
            await removeSignageTemplateMapping(mapping.id);
            this.template_mappings_revision.update((value) => value + 1);
            result.close();
            notifySuccess(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVED'));
            return true;
        } catch {
            result.close();
            notifyError(
                i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_MAPPING_REMOVE_ERROR'),
            );
            return false;
        }
    }

    public async approveTemplate(template: SignageTemplate) {
        if (!template?.id || this._templateLayoutUnsaved(template)) return;
        if (
            !this._context.requirePermission(
                this._context.can_approve(),
                'SIGNAGE_MANAGER.SVC_NO_APPROVE_TEMPLATES',
            )
        )
            return;
        const { TemplateApproveModalComponent } =
            await import('../shared/template-approve-modal.component');
        this._dialog.open(TemplateApproveModalComponent, {
            data: { template },
            panelClass: 'mobile-fullscreen',
        });
    }

    public async requestTemplateApproval(template: SignageTemplate) {
        if (!template?.id || this.template_approval_request_loading()) return;
        if (this._templateLayoutUnsaved(template)) return;
        if (this._context.can_approve()) {
            await this.approveTemplate(template);
            return;
        }
        let approvers: SignageTemplateApprover[] = [];
        let group: PlaceCurrentGroup | null = null;
        this.template_approval_request_loading.set(true);
        try {
            [group] = await this._context.groupsHolding(
                template.id,
                (group_id) => querySignageTemplates({ group_id, limit: 500 }),
            );
            if (!group) {
                notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_GROUPS_FOR_TEMPLATE'));
                return;
            }
            approvers =
                ((await listSignageTemplateApprovers(
                    group.group.id,
                )) as SignageTemplateApprover[]) || [];
        } catch {
            notifyWarn(i18n('SIGNAGE_MANAGER.SVC_NO_TEMPLATE_APPROVERS'));
        } finally {
            this.template_approval_request_loading.set(false);
        }
        if (!group) return;
        const { TemplateRequestApprovalModalComponent } =
            await import('../shared/template-request-approval-modal.component');
        const ref = this._dialog.open(TemplateRequestApprovalModalComponent, {
            data: { template, approvers },
            panelClass: 'mobile-fullscreen',
        });
        const result: TemplateRequestApprovalModalResult | undefined =
            await dialogClosed(ref);
        if (!result) return;
        try {
            await requestApprovalSignageTemplate(
                template.id,
                group.group.id,
                result.message || '',
                result.approver_id || '',
            );
        } catch {
            notifyError(
                i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUEST_ERROR'),
            );
            return;
        }
        this.setTemplateApprovalStatus(template.id, false, true);
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_APPROVAL_REQUESTED'));
    }

    /**
     * Delete a template after confirmation.
     * @returns Whether the template was deleted
     */
    public async removeTemplate(template: SignageTemplate) {
        if (!template?.id) return false;
        if (
            !this._context.requirePermission(
                this._context.can_delete_templates(),
                'SIGNAGE_MANAGER.SVC_NO_DELETE_TEMPLATES',
            )
        )
            return false;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.SVC_REMOVE_TEMPLATE_TITLE'),
                content: i18n('SIGNAGE_MANAGER.SVC_DELETE_NAMED', {
                    name: template.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        try {
            await removeSignageTemplate(
                template.id,
                this._context.groupQueryParams({}),
            );
        } catch {
            result.close();
            notifyError(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVE_ERROR'));
            return false;
        }
        this._releaseDraft(template.id);
        // The reload keeps the loaded rows on screen, so drop this one now
        this._template_list.update((items) =>
            items.filter((item) => !isSameSignageTemplate(item, template)),
        );
        this._template_list.adjustTotal(-1);
        if (this.selected_template()?.id === template.id) {
            this.selected_template.set(null);
            this.selected_template_layout_index.set(null);
        }
        this._context.changed();
        notifySuccess(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_REMOVED'));
        result.close();
        return true;
    }

    /**
     * Copy a template with its settings and saved layouts. The copy starts
     * unapproved and has no template mappings.
     * @returns The new template, or null when no copy was made
     */
    public async duplicateTemplate(template: SignageTemplate) {
        if (!template?.id) return null;
        if (
            !this._context.requirePermission(
                this._context.can_create_templates(),
                'SIGNAGE_MANAGER.SVC_NO_CREATE_TEMPLATES',
            )
        )
            return null;
        try {
            const copy = await this._addSignageTemplate({
                name: i18n('SIGNAGE_MANAGER.COPY_NAME', {
                    name: template.name,
                }),
                description: template.description || undefined,
                tags: template.tags,
                background_item_id: template.background_item_id || undefined,
                full_screen_takeover: template.full_screen_takeover,
                merge: template.merge,
                layouts: (template.layouts || []).map(
                    applyLayoutPositionDefaults,
                ),
            });
            this._context.changed();
            notifySuccess(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATED'));
            return copy;
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_DUPLICATE_ERROR'));
            return null;
        }
    }

    public async shareTemplate(template: SignageTemplate) {
        if (!template?.id) return;
        await this._context.shareItems('templates', [template.id]);
    }

    /** Persist the layout draft of the selected template */
    public async saveTemplateLayouts() {
        const template = this.selected_template();
        if (!template?.id || !this.template_layout_dirty()) return;
        if (
            !this._context.requirePermission(
                this._context.can_update_templates(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES',
            )
        )
            return;
        try {
            const layouts = this.template_layout_draft().map(
                applyLayoutPositionDefaults,
            );
            const response = await updateSignageTemplate(template.id, {
                layouts,
            });
            const result = decodeEntityNames(
                new SignageTemplate({ ...response, layouts }),
            );
            this.updateCachedTemplate(result);
            // The draft is kept while dirty, so reset it to the saved layouts
            this.discardTemplateLayoutDraft();
            notifySuccess(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_SAVED'));
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_SAVE_ERROR'));
        }
    }

    public discardTemplateLayoutDraft() {
        this.template_layout_draft.set(
            structuredClone(this.selected_template()?.layouts ?? []),
        );
    }

    /**
     * Discard the pending draft of a template and restore its previous
     * version, after the user confirms. Used by the approval modals.
     * @returns Whether the draft was discarded
     */
    public async undoTemplateChanges(
        template_id: string,
        previous_version: SignageTemplate,
    ) {
        if (
            !this._context.requirePermission(
                this._context.can_update_templates(),
                'SIGNAGE_MANAGER.SVC_NO_UPDATE_TEMPLATES',
            )
        )
            return false;
        const result = await openConfirmModal(
            {
                title: i18n('SIGNAGE_MANAGER.UNDO_CHANGES'),
                content: i18n('SIGNAGE_MANAGER.TEMPLATE_REVERT_CONFIRM', {
                    name: previous_version.name,
                }),
                confirm_text: i18n('SIGNAGE_MANAGER.UNDO_CHANGES'),
                icon: { content: 'undo' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return false;
        result.loading(i18n('SIGNAGE_MANAGER.UNDOING_CHANGES'));
        try {
            await removeSignageTemplateDraft(template_id);
        } catch {
            notifyError(i18n('SIGNAGE_MANAGER.TEMPLATE_REVERT_ERROR'));
            return false;
        } finally {
            result.close();
        }
        this.updateCachedTemplate(previous_version);
        notifySuccess(i18n('SIGNAGE_MANAGER.TEMPLATE_REVERTED'));
        this._context.changed();
        return true;
    }

    public setTemplateApprovalStatus(
        template_id: string,
        approved: boolean,
        approval_requested = false,
    ) {
        const template =
            this.templates().find((item) => item.id === template_id) ||
            this.selected_template();
        if (!template || template.id !== template_id) return;
        this.updateCachedTemplate(
            new SignageTemplate({
                ...template,
                approved,
                approval_requested,
            }),
        );
    }

    /** Replace the loaded copies of a template. Stores it under its live ID. */
    public updateCachedTemplate(changed: SignageTemplate) {
        const template = liveSignageTemplate(changed);
        this._holdDraft(template);
        this._template_list.update((items) =>
            items.map((item) =>
                isSameSignageTemplate(item, template) ? template : item,
            ),
        );
        const selected_template = this.selected_template();
        if (
            selected_template &&
            isSameSignageTemplate(selected_template, template)
        ) {
            this.selected_template.set(template);
        }
    }

    /**
     * Keep a draft over its live record in the list. An approved version
     * releases it. An unapproved record without a draft, such as a template
     * that was never approved, is held only when it replaces a held draft.
     * @param template A template under its live ID
     */
    private _holdDraft(template: SignageTemplate) {
        if (template.approved) {
            this._releaseDraft(template.id);
            return;
        }
        if (!template.live_template_id && !this._held_drafts()[template.id]) {
            return;
        }
        this._held_drafts.update((held) => ({
            ...held,
            [template.id]: template,
        }));
    }

    private _releaseDraft(template_id: string) {
        if (!this._held_drafts()[template_id]) return;
        this._held_drafts.update((held) => {
            const next = { ...held };
            delete next[template_id];
            return next;
        });
    }

    /** Warn and return true when `template` has unsaved layout edits */
    private _templateLayoutUnsaved(template: SignageTemplate) {
        const selected_template = this.selected_template();
        if (
            !selected_template ||
            !isSameSignageTemplate(selected_template, template) ||
            !this.template_layout_dirty()
        )
            return false;
        notifyWarn(i18n('SIGNAGE_MANAGER.SVC_TEMPLATE_LAYOUTS_UNSAVED'));
        return true;
    }

    private _addSignageTemplate(form_data: Partial<SignageTemplate>) {
        return addSignageTemplate(
            form_data,
            this._context.groupQueryParams({}),
        );
    }
}
