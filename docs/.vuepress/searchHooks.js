// /docs/.vuepress/searchHooks.js
export default {
  async processSuggestions(suggestions, queryString, queryTerms) {
    if (queryString) {
      // add a suggestion to start a search in an external service
      suggestions.push({
        path: 'https://sourcegraph.com/search?patternType=literal&q=',
        slug: queryString,
        parentPageTitle: 'Sourcegraph',
        title: 'Search code',
        contentStr: 'Search for "' + queryString + '" on Sourcegraph',
        external: true,
      })
    }
    return suggestions
  },

  async onGoToSuggestion(index, suggestion, queryString, queryTerms) {
    // e.g. create an analytics event

    // return true if you want to prevent default navigation
    return true
  },
}
