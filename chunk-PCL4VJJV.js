import {
  surveys_questions_exports
} from "./chunk-LL76PNQV.js";
import {
  orThrow,
  orThrowPage,
  short_url_exports
} from "./chunk-P4YEUEUL.js";

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
async function queryAllSurveyQuestions(query_params = {}) {
  return [...await surveys_questions_exports.query(query_params).then(orThrow)];
}
function queryAllShortURLs(query_params = {}) {
  return queryAllPages(short_url_exports.query(query_params).then(orThrowPage));
}

export {
  queryAllPages,
  queryAllSurveyQuestions,
  queryAllShortURLs
};
//# debugId=a885e4f0-6c78-5df2-9566-7700a750a58e
//# sourceMappingURL=chunk-PCL4VJJV.js.map
