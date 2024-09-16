import { createClient } from "microcms-js-sdk";

// serviceDomainとapiKeyはばれてはいけないので、envファイルで別で保存。
const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
}); 

//　↓ここあっているのかな？
export const getBlogsByCategory = async (category: string) => {
  return await client.get({
    endpoint: "wincblog2",
    queries: {
      filters: `category[equals]=${category}`, // category[equals]=${category}で取得できているのかな？←引数categoryと等しいうブログ記事を取るという命令のつもり
      fields: ["id", "title", "category"],
    },
  });
};

export const getCategoryDetail = async (categoryId: string) => {
  return await client.getListDetail({
    endpoint: "category",
    contentId: categoryId,
  });
};


export const getCategories = async () => {
  return await client.get({
    endpoint: "category",
    queries: {
      fields: ["id", "name"], 
    },
  });
};


export const getBlogDetail = async (blogId: string) => {
  return await client.getListDetail({
    endpoint: "wincblog2",
    contentId: blogId,
  });
};


