import type { ShortURL } from '@placeos/common';
import { query, SurveyQuestion, type QueryResponse } from '@placeos/ts-client';

const MAX_QUERY_PAGES = 50;

type QueryParams = Record<string, string | number | boolean | null | undefined>;

/** Load each page until the API is exhausted or returns an empty page. */
export async function queryAllPages<T>(
    first_page: QueryResponse<T>,
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

export function queryAllSurveyQuestions(query_params: QueryParams = {}) {
    return queryAllPages(
        query<SurveyQuestion>({
            query_params,
            endpoint: '/api/staff/v1/surveys/questions',
            path: '',
            fn: (item) => new SurveyQuestion(item),
        }),
    );
}

export function queryAllShortURLs(query_params: QueryParams = {}) {
    return queryAllPages(
        query<ShortURL>({
            query_params,
            endpoint: '/api/engine/v2/short_url',
            path: '',
            fn: (item) => item as ShortURL,
        }),
    );
}
