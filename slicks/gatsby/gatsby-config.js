import dotenv from 'dotenv'

dotenv.config({ path: '.env' });

export default {
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