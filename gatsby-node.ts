import path from 'path';
import _ from 'lodash';
import config from './config/SiteConfig';
import { GatsbyNode, Actions } from 'gatsby'
import { Post, PostGraphqlResponse } from './types';


const getPostsByType = (posts: Post[], classificationType: 'category' | 'tags') => {
  const postsByType: { [key: string]: Post[]} = {};
  posts.forEach((post) => {
    const nodeClassificationType = post.frontmatter[classificationType];
    if (nodeClassificationType) {
      if (_.isArray(nodeClassificationType)) {
        nodeClassificationType.forEach(name => {
          if (!_.has(postsByType, name)) {
            postsByType[name] = [];
          }
          postsByType[name].push(post);
        });
      } else {
        const name = nodeClassificationType;
        if (!postsByType[name]) {
          postsByType[name] = [];
        }
        postsByType[name].push(post);
      }
    }
  });
  return postsByType;
};

interface CreateClassificationPagesArgs {
  posts: Post[]
  createPage: Actions['createPage'],
  postsPerPage: number,
  numPages: number,
}

const createClassificationPages = ({ createPage, posts }: CreateClassificationPagesArgs) => {
  const classifications = [
    {
      singularName: 'category',
      pluralName: 'categories',
      template: {
        part: path.resolve(`src/templates/Category.tsx`),
        all: path.resolve(`src/templates/AllCategory.tsx`),
      },
      postsByClassificationNames: getPostsByType(posts, 'category'),
    },
    {
      singularName: 'tag',
      pluralName: 'tags',
      template: {
        part: path.resolve(`src/templates/Tag.tsx`),
        all: path.resolve(`src/templates/AllTag.tsx`),
      },
      postsByClassificationNames: getPostsByType(posts, 'tags'),
    },
  ];

  classifications.forEach(classification => {
    const names = Object.keys(classification.postsByClassificationNames);

    createPage({
      path: _.kebabCase(`/${classification.pluralName}`),
      component: classification.template.all,
      context: {
        [`${classification.pluralName}`]: names.sort(),
      },
    });

    names.forEach(name => {
      const postsByName = classification.postsByClassificationNames[name];
      createPage({
        path: `/${classification.pluralName}/${_.kebabCase(name)}`,
        component: classification.template.part,
        context: {
          posts: postsByName,
          [`${classification.singularName}Name`]: name,
        },
      });
    });
  });
};


const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark' && _.has(node, 'frontmatter') && _.has(node.frontmatter, 'title')) {
    const slug = `${_.kebabCase((node.frontmatter as Post['frontmatter']).title)}`;
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.onCreateNode = onCreateNode;

const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.onCreateWebpackConfig = onCreateWebpackConfig;

const createPages: GatsbyNode['createPages']  = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/Post.tsx`);

  const result = await graphql<PostGraphqlResponse>(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 10000) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
              category
              tags
              banner
            }
            timeToRead
          }
        }
      }
    }
  `)
  
  if (result.errors) {
    throw result.errors;
  }
  
  if (!result.data) {
    return;
  }
  
  const posts = result.data.allMarkdownRemark.edges.map(({node}) => node);
  const postsPerPage = config.POST_PER_PAGE;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/Blog.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPages: numPages,
        currentPage: i + 1,
      },
    });
  });

  createClassificationPages({ createPage, posts, postsPerPage, numPages });

  posts.forEach((post, index) => {
    const next = index === 0 ? null : posts[index - 1];
    const prev = index === posts.length - 1 ? null : posts[index + 1];

    createPage({
      path: `/blog/${_.kebabCase(post.frontmatter.title)}`,
      component: postTemplate,
      context: {
        slug: _.kebabCase(post.frontmatter.title),
        prev,
        next,
      },
    });
  });
};

exports.createPages = createPages;