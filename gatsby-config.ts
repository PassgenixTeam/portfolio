import * as dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Passgenix Technology`,
        description: `Launched in 2023, we're a Vietnamese open-source company passionate about building high-quality software and services for the global tech community. Our team brings together Vietnam's top IT talent, selected for their strong skills and proven experience on large-scale projects.`,
        author: `@passgenix.solutions`,
        siteUrl: `https://passgenix.com`,
    },
    graphqlTypegen: true,
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                downloadLocal: true,
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-postcss`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#FFFFFF`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `static/assets/img/favicon.png`, // This path is relative to the root of the site.
            },
        },
    ],
};

export default config;
