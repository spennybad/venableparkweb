const sanityClient = require('@sanity/client');

export const client = sanityClient({
  projectId: '44hbo4g5',
  dataset: 'production',
  apiVersion: '2021-08-10', // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});