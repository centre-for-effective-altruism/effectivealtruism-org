// Schema for organisations
module.exports = {
  name: {
    singular: 'Organisation',
    plural: 'Organisations'
  },
  slug: {
    singular: 'organisation',
    plural: 'organisations'
  },
  contentfulId: 'organisation',
  contentfulFilenameField: 'fields.slug',
  collection: false,
  createPage: false
}
