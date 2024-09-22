import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, a as addAttribute } from './astro/server_M0d2d5zE.mjs';
import 'kleur/colors';
import { g as getUsers } from './micro_vDiA4Qqf.mjs';
import { $ as $$Layout } from './Layout_CC1g_o1F.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                           */

const Component = (article) => {
  const published = new Date(article.published_at);
  const updated = new Date(article.updated_at);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }) }),
    /* @__PURE__ */ jsxs("div", { className: "top_container", style: { width: `${(windowWidth * 0.667 - 20) / 2}px` }, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx("a", { href: `/articles/user/${article.user.userName}`, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: article.user.userImgSrc,
            width: 50,
            height: 50,
            alt: "",
            className: "rounded-md"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "block ml-2", children: [
          /* @__PURE__ */ jsx("a", { className: "text-lg", href: `/articles/user/${article.user.userName}`, children: article.user.userName }),
          /* @__PURE__ */ jsxs("div", { className: "flex text-zinc-400", children: [
            `${published.getFullYear()}.${String(published.getMonth() + 1).padStart(2, "0")}.${String(published.getDate()).padStart(2, "0")}`,
            published.getTime() < updated.getTime() ? /* @__PURE__ */ jsxs("div", { className: "container", style: { marginLeft: "10px", display: "flex", alignItems: "center" }, children: [
              /* @__PURE__ */ jsxs("svg", { stroke: "currentColor", fill: "currentColor", "stroke-width": "0", viewBox: "0 0 24 24", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
                /* @__PURE__ */ jsx("path", { d: "M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" })
              ] }),
              `${updated.getFullYear()}.${String(updated.getMonth() + 1).padStart(2, "0")}.${String(updated.getDate()).padStart(2, "0")}`
            ] }) : /* @__PURE__ */ jsx(Fragment, {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("a", { href: article.classification === "zenn.dev" ? `https://zenn.dev${article.articleUrl}` : article.articleUrl, className: "my-5 h-20 inline-block", children: /* @__PURE__ */ jsx("h1", { style: { width: "auto", border: "none", textAlign: "start" }, className: "text-xl", children: article.title }) }),
      /* @__PURE__ */ jsxs("div", { className: "items-center", style: { display: "flex", alignItems: "center" }, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: article.classification === "zenn.dev" ? "/zenn.png" : article.classification === "qiita.com" ? "/qiita.png" : "/favicon.svg",
            width: 20,
            height: 20,
            alt: "",
            className: "rounded-md mr-2"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-zinc-400", children: article.classification })
      ] })
    ] })
  ] });
};

const ArticleList = ({ articles }) => {
  const [visibleCount, setVisibleCount] = useState(30);
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 30);
  };
  return /* @__PURE__ */ jsxs("div", { style: { display: "block" }, children: [
    /* @__PURE__ */ jsx("div", { className: "articles-container", children: articles.slice(0, visibleCount).map((article, index) => /* @__PURE__ */ jsx("div", { className: index % 2 === 0 ? "article-right" : "article-left", style: { width: "100%" }, children: /* @__PURE__ */ jsx(Component, { ...article }) }, article.articleUrl)) }),
    visibleCount < articles.length && /* @__PURE__ */ jsx("button", { className: "load-more-btn", onClick: handleLoadMore, children: "Load More" })
  ] });
};

const fetchAllArticles = async (user, token) => {
  await fetch(`https://qiita.com/api/v2/users/${user.qiitaId}/items`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  let articles = [];
  try {
    const response2 = await fetch(`https://zenn.dev/api/articles?username=${user.zennId}&order=latest`);
    if (!response2.ok) {
      const errorDetails = await response2.text();
      console.error(`ZennError: ${response2.status} - ${response2.statusText}`);
      console.error(`ZennDetails: ${errorDetails}`);
      return [];
    }
    const data = await response2.json();
    if (!data.articles) {
      console.error("Expected articles field in response");
      return [];
    }
    articles = articles.concat(data.articles.map((article) => ({
      user,
      title: article.title,
      published_at: article.published_at,
      updated_at: article.body_updated_at,
      classification: "zenn.dev",
      articleUrl: article.path
    })));
  } catch (error) {
    console.error("An error occurred:", error);
  }
  return articles;
};
const $$Article = createComponent(async ($$result, $$props, $$slots) => {
  const response = await getUsers({ fields: ["userName", "userImgSrc", "introduction", "zennId", "qiitaId", "gitUrl", "XUrl"] });
  const Resusers = response.contents;
  const apiToken = "461c52bd05403452cf6c86a1b91c28aac04b5a34";
  const allArticles = (await Promise.all(Resusers.map((user) => fetchAllArticles(user, apiToken)))).flat().sort((a, b) => {
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
  });
  return renderTemplate`<meta charset="UTF-8"><title>Qiita Articles</title> ${renderComponent($$result, "Layout", $$Layout, { "title": "articles", "data-astro-cid-4yqtncfb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<body style="display: block;" data-astro-cid-4yqtncfb> <div class="top-container" data-astro-cid-4yqtncfb> <div class="container" data-astro-cid-4yqtncfb> <h1 data-astro-cid-4yqtncfb>Members</h1> <div class="users-container" data-astro-cid-4yqtncfb> ${Resusers.map((user) => renderTemplate`<a${addAttribute(`/articles/user/${user.userName}`, "href")} data-astro-cid-4yqtncfb> <div class="user-card w-40 h-60" data-astro-cid-4yqtncfb> <img${addAttribute(user.userImgSrc, "src")}${addAttribute(`${user.userName}'s avatar`, "alt")} data-astro-cid-4yqtncfb> <h2 data-astro-cid-4yqtncfb>${user.userName}</h2> <p data-astro-cid-4yqtncfb>${user.introduction}</p> </div> </a>`)} </div> <div style="display: flex; align-items: center; justify-content: flex-end; width: fit-content;" data-astro-cid-4yqtncfb> <a href="/articles/users" class="detail" style="color: white; font-size: large; display: flex; align-items: center;" data-astro-cid-4yqtncfb> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" data-astro-cid-4yqtncfb><path fill="currentColor" d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z" data-astro-cid-4yqtncfb></path></svg>
Detail
</a> </div> <h1 data-astro-cid-4yqtncfb>Articles</h1> ${renderComponent($$result2, "ArticleList", ArticleList, { "client:load": true, "articles": allArticles, "client:component-hydration": "load", "client:component-path": "C:/Users/tksch/OneDrive/デスクトップ/git/wincblog2/src/pages/articles/articles", "client:component-export": "default", "data-astro-cid-4yqtncfb": true })} </div> </div> </body> ` })} `;
}, "C:/Users/tksch/OneDrive/デスクトップ/git/wincblog2/src/pages/articles/article.astro", void 0);
const $$file = "C:/Users/tksch/OneDrive/デスクトップ/git/wincblog2/src/pages/articles/article.astro";
const $$url = "/articles/article";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Article,
    fetchAllArticles,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, fetchAllArticles as f };
