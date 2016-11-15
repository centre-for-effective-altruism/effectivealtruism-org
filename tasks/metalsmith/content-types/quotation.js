// Schema for quotations
module.exports = {
  name: {
    singular: 'Quotation',
    plural: 'Quotations'
  },
  slug: {
    singular: 'quotation',
    plural: 'quotations'
  },
  contentfulId: 'quotation',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'title',
    reverse: false
  },
  createPage: false
}
