import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
    // path prefix is for hosting on regular server
    // 1. also need to npm run build -- --prefix-paths
    // 2. add your website/pizza (or whatever prefix) to sanity.io cors config
    // pathPrefix: '/pizza',
    siteMetadata: {
        title: `Slicks Slices`,
        siteUrl: 'https://gatsby-pizza',
        description: 'pizza so good it\'ll melt your face off.',
        twitter: '@slicksSlices',
    },
   plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
        // name of the plugin your adding
        resolve: 'gatsby-source-sanity',
        options: {
            projectId: 'romuqopg',
            dataset: 'slicks',
            watchMode: true,
            token: process.env.SANITY_TOKEN,
        }
    }
   ], 
};