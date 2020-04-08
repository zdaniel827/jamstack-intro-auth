exports.onCreatePage = async ({ page, actions }) => {
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = "/dashboard/*";
    actions.createPage(page);
  }
};