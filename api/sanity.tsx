const sanityClient = require('@sanity/client');

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
  dataset: 'production',
  apiVersion: '2021-08-10', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});