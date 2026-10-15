// apps/visitor-kiosk/src/app/checkin/token-from-url.ts
function parseTokenFromUrl(url) {
  if (!url)
    return "";
  try {
    const parsed_url = new URL(url, window.location.origin);
    const query_token = parsed_url.searchParams.get("access_token") || parsed_url.searchParams.get("jwt") || parsed_url.searchParams.get("token");
    if (query_token)
      return query_token;
    const hash_route = parsed_url.hash?.replace(/^#/, "") || "";
    const hash_query = hash_route.includes("?") ? hash_route.split("?")[1] : hash_route;
    const hash_params = new URLSearchParams(hash_query);
    const hash_token = hash_params.get("access_token") || hash_params.get("jwt") || hash_params.get("token");
    if (hash_token)
      return hash_token;
  } catch {
  }
  const token_match = /(?:[?#&])(access_token|jwt|token)=([^&#]+)/.exec(url);
  return token_match?.[2] ? decodeURIComponent(token_match[2]) : "";
}

export {
  parseTokenFromUrl
};
//# debugId=bb9c0a4a-9456-5121-bc76-0341421b5d60
//# sourceMappingURL=chunk-FZ3XJSQC.js.map
