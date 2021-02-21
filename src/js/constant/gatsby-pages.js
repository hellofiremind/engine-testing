module.exports = [
    {
        resultName: `allGhostTag`,
        componentPath: `./src/js/view/pages/tag.js`,
        pathPrefix: `tag`,
        paginate: true,
    },
    {
        resultName: `allGhostAuthor`,
        componentPath: `./src/js/view/pages/author.js`,
        pathPrefix: `author`,
        paginate: true,
    },
    {
        resultName: `allGhostPage`,
        componentPath: `./src/js/view/pages/page.js`,
        paginate: false,
    },
    {
        resultName: `allGhostPost`,
        componentPath: `./src/js/view/pages/post.js`,
        pathPrefix: `tag`,
    },
]
