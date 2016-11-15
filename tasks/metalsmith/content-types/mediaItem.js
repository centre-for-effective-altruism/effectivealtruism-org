// Schema for media-items
module.exports = {
  name: {
    singular: 'Media Item',
    plural: 'Media Items'
  },
  slug: {
    singular: 'media-item',
    plural: 'media-items'
  },
  contentfulId: 'mediaItem',
  contentfulFilenameField: 'sys.id',
  collection: {
    sort: 'title',
    reverse: false
  },
  createPage: false
}
