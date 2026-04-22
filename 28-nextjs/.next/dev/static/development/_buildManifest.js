self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/news": [
    "static/chunks/pages/news.js"
  ],
  "/news/something-important": [
    "static/chunks/pages/news/something-important.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/news",
    "/news/something-important"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()