// Schema for chapters
module.exports = {
  name: {
    singular: 'Chapter',
    plural: 'Chapters'
  },
  slug: {
    singular: 'chapter',
    plural: 'chapters'
  },
  contentfulId: 'chapter',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'title',
    reverse: false
  },
  createPage: false
}
