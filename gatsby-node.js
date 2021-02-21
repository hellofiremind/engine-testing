const path = require(`path`)
const { postsPerPage } = require(`./src/js/config/site-config`)
const { paginate } = require(`gatsby-awesome-pagination`)
const pages = require(`./src/js/constant/gatsby-pages`)
const getAllContent = require(`./src/js/graphql/queries/get-all-content`)
const createSinglePage = require(`./src/js/gatsby/create-single-page`)
const createPaginatedPage = require(`./src/js/gatsby/create-paginated-page`)
/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const {
        data,
        errors,
    } = await getAllContent(graphql)

    // Check for any errors
    if (errors) {
        throw new Error(errors)
    }

    // Extract query results
    pages.forEach((page) => {
        const dataset = data[page.resultName]
        const component = path.resolve(page.componentPath)
        page.paginate
            ? createPaginatedPage(dataset, createPage, postsPerPage, component, page.pathPrefix)
            : createSinglePage(dataset, component, createPage)
    })

    // Load pages/dynamic
    const indexTemplate = path.resolve(`./src/js/view/pages/index.js`)

    // Create pagination
    paginate({
        createPage,
        items: data.allGhostPost,
        itemsPerPage: postsPerPage,
        component: indexTemplate,
        pathPrefix: ({ pageNumber }) => {
            if (pageNumber === 0) {
                return `/`
            } else {
                return `/page`
            }
        },
    })
}
