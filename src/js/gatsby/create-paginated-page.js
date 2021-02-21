const { paginate } = require(`gatsby-awesome-pagination`)

module.exports = (results, createPage, postsPerPage, component, pathPrefix) => results.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0

    // This part here defines, that our tag pages will use
    // a `/tag/:slug/` permalink.
    const url = `/${pathPrefix}/${node.slug}`

    const items = Array.from({ length: totalPosts })

    // Create pagination
    paginate({
        createPage,
        items,
        itemsPerPage: postsPerPage,
        component,
        pathPrefix: ({ pageNumber }) => ((pageNumber === 0) ? url : `${url}/${pathPrefix}`),
        context: {
            slug: node.slug,
        },
    })
})
