// Schema for articles
module.exports = {
  name: {
    singular: 'Article',
    plural: 'Articles'
  },
  slug: {
    singular: 'article',
    plural: 'articles'
  },
  contentfulId: 'article',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'date',
    reverse: true
  },
  createPage: true,
  pagination: {
    perPage: 10
  }
}
