import { short_url } from '@placeos/ts-client';
import { orThrow, orThrowPage, type Page } from '@placeos/ts-client/compat';
import { surveys_questions } from '@placeos/ts-client/staff';

const MAX_QUERY_PAGES = 50;

/**
 * Load each page until the API is exhausted or returns an empty page.
 * Give it the first page of a paged call, such as
 * `systems.query({ limit: 500 }).then(orThrowPage)`. Stops after 50 pages.
 */
export async function queryAllPages<T>(
    first_page: Promise<Page<readonly T[]>>,
): Promise<T[]> {
    let response = await first_page;
    let page_data = response?.data || [];
    const list = [...page_data];
    let page_count = 1;

    while (
        page_data.length > 0 &&
        response.next &&
        page_count < MAX_QUERY_PAGES &&
        (!response.total || list.length < response.total)
    ) {
        const next_page = response.next();
        if (!next_page) break;
        response = await next_page;
        page_data = response?.data || [];
        list.push(...page_data);
        page_count += 1;
    }
    return list;
}

/** Survey questions. The staff API sends every question in one response. */
export async function queryAllSurveyQuestions(
    query_params: Parameters<typeof surveys_questions.query>[0] = {},
) {
    return [...(await surveys_questions.query(query_params).then(orThrow))];
}

/** Every short URL of the domain that matches the query. */
export function queryAllShortURLs(
    query_params: Parameters<typeof short_url.query>[0] = {},
) {
    return queryAllPages(short_url.query(query_params).then(orThrowPage));
}
