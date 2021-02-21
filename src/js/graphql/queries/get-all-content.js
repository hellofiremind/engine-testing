module.exports = graphql => graphql(`
  {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
          edges {
              node {
                  slug
              }
          }
      }
      allGhostTag(sort: { order: ASC, fields: name }) {
          edges {
              node {
                  slug
                  url
                  postCount
              }
          }
      }
      allGhostAuthor(sort: { order: ASC, fields: name }) {
          edges {
              node {
                  slug
                  url
                  postCount
              }
          }
      }
      allGhostPage(sort: { order: ASC, fields: published_at }) {
          edges {
              node {
                  slug
                  url
              }
          }
      }
  }
`)
