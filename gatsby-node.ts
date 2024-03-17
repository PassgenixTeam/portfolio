import { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // create pages for teams
    const {
        data: {
            allContentfulTeam: { nodes: teams },
        },
    } = await graphql<any>(`
        {
            allContentfulTeam {
                nodes {
                    slug
                }
            }
        }
    `);
    teams.forEach((node: { slug: string }) => {
        createPage({
            path: `/teams/${node.slug}`,
            component: path.resolve(`./src/templates/teams/index.tsx`),
            context: {
                slug: node.slug,
            },
        });
    });
};
