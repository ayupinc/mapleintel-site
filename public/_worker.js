// Maple Leaf Intelligence has closed (October 2026). Rather than take the
// domain offline (an error page) or put up a holding page, every address
// answers "404 Not Found" with an empty page: visitors see a blank white
// page and search engines drop the site.
//
// A small HTML document, not an empty body: Chrome replaces an empty 404 with
// its own "HTTP ERROR 404" screen.
//
// To bring the site back, delete this file: Pages then serves public/ as
// before.
const BLANK = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title></title></head><body></body></html>';

export default {
  fetch() {
    return new Response(BLANK, {
      status: 404,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "x-robots-tag": "noindex",
        "cache-control": "no-store"
      }
    });
  }
};
