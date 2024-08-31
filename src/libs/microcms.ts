//microcmsとAstroをつなぐための記述を行う
import { createClient } from "microcms-js-sdk";
/*↓servicedomainとapikeyを指定することで、microCMSと連携する。
servicedomainとpaikeyは個人情報なので、別ファイル(.env)に書いてそれを読み込んでいる*/
const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});
// カテゴリごとにブログ記事を取得するための関数
export const getBlogsByCategory = async (category: string) => {
  return await client.get({
    endpoint: "wincblog",
    queries: {
      filters: `category[equals]=${category}`, // 修正後
      fields: ["id", "title", "publishedAt", "content"],
    },
  });
};


export const getBlogs = async (category: any) => {
  return await client.get({
    endpoint: "wincblog",
    queries: {
      filters: `category[equals]${category}`,
      fields: ["id", "title", "publishedAt", "content"],
    },
  });
};

// ブログ記事の詳細を取得する関数。できているのか・・・？
export const getBlogDetail = async (
  blogId: string,
  queries?: MicroCMSQueries //queries?にするとqueriesをオプションにすることができる。
) => {
  return await client.getListDetail({
    endpoint: "wincblog",
    contentId: blogId,
    queries,
  });
};