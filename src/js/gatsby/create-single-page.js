module.exports = (results, component, createPage) => results.forEach(({ node }) => {
    // This part here defines, that our pages will use
    // a `/:slug/` permalink.
    node.url = `/${node.slug}/`

    createPage({
        path: node.url,
        component,
        context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.slug,
        },
    })
})
