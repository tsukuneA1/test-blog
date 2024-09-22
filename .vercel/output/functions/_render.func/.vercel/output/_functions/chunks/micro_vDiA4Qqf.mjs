import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: "astro-blog-winc",
  apiKey: "xs05PmTpSmeNVgBeZzvv1gGfaWWisMrJ4aQJ"
});
const getUsers = async (queries) => {
  return await client.get({
    endpoint: "astro-blog-winc",
    queries
  });
};

export { getUsers as g };
