// Schema for books
module.exports = {
  name: {
    singular: 'Book',
    plural: 'Books'
  },
  slug: {
    singular: 'book',
    plural: 'books'
  },
  contentfulId: 'book',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'title',
    reverse: false
  },
  createPage: false
}
