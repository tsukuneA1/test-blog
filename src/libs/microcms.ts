//microcmsとAstroをつなぐための記述を行う
import { createClient } from "microcms-js-sdk";
/*↓servicedomainとapikeyを指定することで、microCMSと連携する。
servicedomainとpaikeyは個人情報なので、別ファイル(.env)に書いてそれを読み込んでいる*/
const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});



// 特定のカテゴリーに属するブログ記事を取得するためのもの
export const getBlogsByCategory = async (category: any) => { //getBlogByCategoryを定義。async:非同期処理(データが届くまで待つ必要がある)
  return await client.get({ //endpointと一致するモノを取得し、返す。awaitがあるので、データを受け取るまでこの処理が止まっている。
    endpoint: "wincblog2", //どのデータを取得するかを指定
    queries: { //queries{〇〇}でAPIにどんな条件でデータを絞り込んでほしいかを指定できる。(queryは問い合わせるという意味。)
      filters: `category[equals]=${category}`, //フィルター。categoryというフィールドの${category}というものを取得する。　getBlogsByCategory('app')と指定すると${category}の部分には""aoo"が入る。
      fields: ["title", "content", "category"], //取得するデータの中からtitile,conent,categoryだけを取るように指定している。
    },
  });
};


// ブログ記事の詳細を取得する関数。これいるのか？
export const getBlogDetail = async (
  blogId: string,
  queries?: MicroCMSQueries //queries?にするとqueriesをオプションにすることができる。
) => {
  return await client.getListDetail({
    endpoint: "wincblog2",
    contentId: blogId, //contentIdは取得したいブログのId 関数を呼び出す際に与えられるblogIdの値がここに入る。getBlogDetail('asdfg')の時、blogIdは"asdfg"。
    queries, //オプションのquiry
  });
};