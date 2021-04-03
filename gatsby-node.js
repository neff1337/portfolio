const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`./src/components/ProjectCard.js`);

  const query = `{
    projects:allDatoCmsProject
      edges {
        node {
          slug
          ProjectTitle
          ProjectDate
          projectImg {
            gatsbyImageData
          }
        }
        next {
          slug
        }
      }
    }
  }`;

  const result = await graphql(query);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const projects = result.data.projects.edges;

  const createProjectPage = (project) => {
    const next = project.next || projects[0].node;
    createPage({
      path: `/projects/${project.node.slug}`,
      component: projectTemplate,
      context: {
        nextSlug: next.slug,
        ...project.node,
      },
    });
  };

  projects.forEach(createProjectPage);
};
