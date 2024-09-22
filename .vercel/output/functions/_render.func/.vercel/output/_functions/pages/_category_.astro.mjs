import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_M0d2d5zE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CC1g_o1F.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await fetch("https://public-api.wordpress.com/wp/v2/sites/wincblog.wordpress.com/categories");
  const categories = await response.json();
  return categories.map((category) => ({
    params: {
      category: category.slug
    }
  }));
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const response = await fetch("https://public-api.wordpress.com/wp/v2/sites/wincblog.wordpress.com/categories");
  const categories = await response.json();
  const currentCategory = categories.find((cat) => cat.slug === Astro2.params.category);
  const categoryName = currentCategory ? currentCategory.name : "";
  currentCategory ? currentCategory.description : "";
  const categoryId = currentCategory ? currentCategory.id : null;
  let posts = [];
  let postTitles = [];
  let postIds = [];
  let postDates = [];
  if (categoryId) {
    const postsResponse = await fetch(`https://public-api.wordpress.com/wp/v2/sites/wincblog.wordpress.com/posts?categories=${categoryId}`);
    posts = await postsResponse.json();
    postTitles = posts.map((post) => post.title.rendered);
    postIds = posts.map((post) => post.id);
    postDates = posts.map((post) => post.date);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "wincblog", "data-astro-cid-e6jqf47y": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-e6jqf47y> <p class="guide" data-astro-cid-e6jqf47y><a href="http://localhost:4321" data-astro-cid-e6jqf47y>home</a> > <a href="http://localhost:4321" data-astro-cid-e6jqf47y>blog</a> > <a${addAttribute("http://localhost:4321/${categoryId}", "href")} data-astro-cid-e6jqf47y>Web team</a></p> <div class="eye-catch" data-astro-cid-e6jqf47y> <h1 data-astro-cid-e6jqf47y>${categoryName}</h1> <div class="carousel" data-astro-cid-e6jqf47y> <figure data-astro-cid-e6jqf47y> <img src="web/picture1.jpg" alt="" data-astro-cid-e6jqf47y> <img src="web/picture2.jpg" alt="" data-astro-cid-e6jqf47y> <img src="web/picture3.jpg" alt="" data-astro-cid-e6jqf47y> <img src="web/picture4.jpg" alt="" data-astro-cid-e6jqf47y> <img src="web/picture5.jpg" alt="" data-astro-cid-e6jqf47y> </figure> </div>  </div> <div class="New_articles" data-astro-cid-e6jqf47y> ${postTitles.length > 0 ? renderTemplate`<ul data-astro-cid-e6jqf47y> ${postTitles.map((postTitle, index) => {
    const year = postDates[index].substring(0, 4);
    const month = postDates[index].substring(5, 7);
    const date = postDates[index].substring(8, 10);
    const postId = postIds[index];
    const content = posts[index].content.rendered.substring(4, 26);
    return renderTemplate`<li data-astro-cid-e6jqf47y> <div class="blog" data-astro-cid-e6jqf47y> <div class="picture" data-astro-cid-e6jqf47y> <a${addAttribute(`./${postIds[index]}`, "href")} data-astro-cid-e6jqf47y> <img${addAttribute(`http://test.local/wp-content/uploads/${year}/${month}/${postId}.jpg`, "src")}${addAttribute(postTitle, "alt")} class="post-image" data-astro-cid-e6jqf47y> </a> </div> <div class="article_sepalate_line" data-astro-cid-e6jqf47y></div> <div class="post" data-astro-cid-e6jqf47y> <a${addAttribute(`./${postIds[index]}`, "href")} class="title" data-astro-cid-e6jqf47y>${postTitle}</a> <p class="date" data-astro-cid-e6jqf47y>投稿日: ${year}年${month}月${date}日</p> <p class="explanation" data-astro-cid-e6jqf47y>${content}・・・</p> <div class="tsuzuki_botton" data-astro-cid-e6jqf47y> <a${addAttribute(`./${postIds[index]}`, "href")} class="tsuzuki" data-astro-cid-e6jqf47y>続きを読む</a> </div> </div> </div> </li>`;
  })} </ul>` : renderTemplate`<p data-astro-cid-e6jqf47y>投稿がありません</p>`} </div> <footer data-astro-cid-e6jqf47y> <p data-astro-cid-e6jqf47y>© 2024 Copyright: <span data-astro-cid-e6jqf47y><a data-astro-cid-e6jqf47y>コンピュータ研究会・WINC</a></span></p> </footer> </main> ` })} `;
}, "C:/Users/tksch/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/git/wincblog2/src/pages/[category].astro", void 0);

const $$file = "C:/Users/tksch/OneDrive/デスクトップ/git/wincblog2/src/pages/[category].astro";
const $$url = "/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
