export type SearchEngineName =
  | "deepl"
  | "duckduckgo"
  | "ecosia"
  | "google"
  | "startpage"
  | "youtube"

const engineLookup: Record<SearchEngineName, string> = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

export const getEngineUrl = (engine: SearchEngineName) => engineLookup[engine]
