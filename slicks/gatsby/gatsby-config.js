import dotenv from 'dotenv'

dotenv.config({ path: '.env' });

// never do this on build, only for test
// console.log(process.env.SANITY_TOKEN)

export default {
    siteMetadata: {
        title: `Slicks Slices`,
        siteUrl: 'https://gatsby-pizza',
        description: 'pizza so good it\'ll melt your face off.',
    },
   plugins: [
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