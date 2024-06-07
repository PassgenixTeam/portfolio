import { GatsbyNode } from "gatsby";
import path from "path";
import { LanguageCode } from "./src/languages/types";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // create pages for Services
    const {
        data: {
            allContentfulService: { nodes: services },
        },
    } = await graphql<any>(`
        {
            allContentfulService {
                nodes {
                    slug
                }
            }
        }
    `);
    services.forEach((node: { slug: string }) => {
        createPage({
            path: `/services/${node.slug}`,
            component: path.resolve(`./src/templates/services/index.en.tsx`),
            context: {
                slug: node.slug,
            },
        });
        createPage({
            path: `${LanguageCode.VI}/services/${node.slug}`,
            component: path.resolve(`./src/templates/services/index.vi.tsx`),
            context: {
                slug: node.slug,
            },
        });
    });

    // create pages for Projects
    const {
        data: {
            allContentfulProject: { nodes: projects },
        },
    } = await graphql<any>(`
        {
            allContentfulProject {
                nodes {
                    slug
                }
            }
        }
    `);
    projects.forEach((node: { slug: string }) => {
        createPage({
            path: `/projects/${node.slug}`,
            component: path.resolve(`./src/templates/projects/index.en.tsx`),
            context: {
                slug: node.slug,
            },
        });
        createPage({
            path: `${LanguageCode.VI}/projects/${node.slug}`,
            component: path.resolve(`./src/templates/projects/index.vi.tsx`),
            context: {
                slug: node.slug,
            },
        });
    });
};
