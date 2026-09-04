import {
  pn,
  y
} from "./chunk-KKWVE3W4.js";

// apps/concierge/src/app/query-all-pages.ts
var MAX_QUERY_PAGES = 50;
async function queryAllPages(first_page) {
  let response = await first_page;
  let page_data = response?.data || [];
  const list = [...page_data];
  let page_count = 1;
  while (page_data.length > 0 && response.next && page_count < MAX_QUERY_PAGES && (!response.total || list.length < response.total)) {
    const next_page = response.next();
    if (!next_page)
      break;
    response = await next_page;
    page_data = response?.data || [];
    list.push(...page_data);
    page_count += 1;
  }
  return list;
}
function queryAllSurveyQuestions(query_params = {}) {
  return queryAllPages(y({
    query_params,
    endpoint: "/api/staff/v1/surveys/questions",
    path: "",
    fn: (item) => new pn(item)
  }));
}
function queryAllShortURLs(query_params = {}) {
  return queryAllPages(y({
    query_params,
    endpoint: "/api/engine/v2/short_url",
    path: "",
    fn: (item) => item
  }));
}

export {
  queryAllPages,
  queryAllSurveyQuestions,
  queryAllShortURLs
};
//# sourceMappingURL=chunk-D5OO3KR4.js.map
