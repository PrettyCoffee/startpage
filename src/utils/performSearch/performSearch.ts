import { getEngineUrl, SearchEngineName } from "./getEngineUrl"
import { isWebUrl } from "./isWebUrl"

const getTargetUrlByOptions = (
  query: string,
  engine: SearchEngineName,
  options?: SearchOptions
) => {
  const engineUrl = getEngineUrl(engine)
  let targetUrl = engineUrl + query

  if (options?.directLink && isWebUrl(query)) targetUrl = query
  if (options?.forwardingLookup?.[query])
    targetUrl = options?.forwardingLookup?.[query]

  return targetUrl
}

export type SearchOptions = {
  /** Query will get opened in new tab */
  newTab?: boolean
  /** If the query is an url, the url will be opened directly */
  directLink?: boolean
  /** Lookup which specifies forwarding for defined queries */
  forwardingLookup?: Record<string, string>
}

/**
 * Function to perform a web search
 *
 * @param query Query of the search
 * @param engine Engine which will be used to search
 * @param options Search options regarding the redirection
 */

export const performSearch = (
  query: string,
  engine: SearchEngineName,
  options?: SearchOptions
) => {
  const targetUrl = getTargetUrlByOptions(query, engine, options)
  const target = options?.newTab ? "_blank" : "_self"
  window.open(targetUrl, target)
}
