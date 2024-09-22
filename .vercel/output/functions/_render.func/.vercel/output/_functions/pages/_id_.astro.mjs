import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute, u as unescapeHTML } from '../chunks/astro/server_M0d2d5zE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CC1g_o1F.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await fetch("https://public-api.wordpress.com/wp/v2/sites/wincblog.wordpress.com/posts");
  const posts = await response.json();
  return posts.map((post) => ({
    params: {
      id: post.id.toString()
    }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  async function getCategoryName(categoryId2) {
    const response2 = await fetch(`https://public-api.wordpress.com/wp/v2/sites/wincblog.wordpress.com/categories/${categoryId2}`);
    const category = await response2.json();
    return category.name;
  }
  const postId = Astro2.params.id;
  const response = await fetch(`https://public-api.wordpress.com/wp/v2/sites/wincblog.wordpress.com/posts/${postId}`);
  const post = await response.json();
  const categoryId = post.categories.length > 0 ? post.categories[0] : null;
  if (categoryId) {
    await getCategoryName(categoryId);
  }
  const postTitle = post.title.rendered;
  const postContent = post.content.rendered;
  const postDate = post.date;
  let postCategory = [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": postTitle, "data-astro-cid-p5zaeqd4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-p5zaeqd4> <div class="without_header" data-astro-cid-p5zaeqd4> <div class="go_to_top" data-astro-cid-p5zaeqd4><a href="#" data-astro-cid-p5zaeqd4><img src="public/Group 44.png" data-astro-cid-p5zaeqd4></a></div> <p class="guide" data-astro-cid-p5zaeqd4><a href="http://localhost:4321" data-astro-cid-p5zaeqd4>home</a> > <a href="http://localhost:4321" data-astro-cid-p5zaeqd4>blog</a> > <a${addAttribute("http://localhost:4321/${categoryId}", "href")} data-astro-cid-p5zaeqd4>Web team</a> > <a${addAttribute("http://localhost:4321/${postId}", "href")} data-astro-cid-p5zaeqd4>${postTitle}</a></p> <p class="slug" data-astro-cid-p5zaeqd4>${postCategory}</p> <div class="Title_and_body" data-astro-cid-p5zaeqd4> <div class="Title_box" data-astro-cid-p5zaeqd4> <span data-astro-cid-p5zaeqd4></span> <h2 data-astro-cid-p5zaeqd4>${postDate.substring(0, 4)}.${postDate.substring(5, 7)}.${postDate.substring(8, 10)}</h2> <h1 data-astro-cid-p5zaeqd4>${postTitle}</h1> <div class="Title_box_background" data-astro-cid-p5zaeqd4></div> </div> <article class="article" data-astro-cid-p5zaeqd4> <div class="article_content" data-astro-cid-p5zaeqd4>${unescapeHTML(postContent)}</div> </article> <div class="under_botton" data-astro-cid-p5zaeqd4> <a class="before_article" href="http://localhost:4321" data-astro-cid-p5zaeqd4><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" data-astro-cid-p5zaeqd4><path fill="currentColor" d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z" data-astro-cid-p5zaeqd4></path></svg></a> <a class="botton_for_home" href="http://localhost:4321" data-astro-cid-p5zaeqd4><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" data-astro-cid-p5zaeqd4><path fill="currentColor" d="M4 20V4h16v16zm1-1h14V5H5z" data-astro-cid-p5zaeqd4></path></svg></a> <a class="next_article" href="http://localhost:4321" data-astro-cid-p5zaeqd4><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" data-astro-cid-p5zaeqd4><path fill="currentColor" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z" data-astro-cid-p5zaeqd4></path></svg></a> </div> </div> <footer data-astro-cid-p5zaeqd4> <p data-astro-cid-p5zaeqd4>© 2024 Copyright: <span data-astro-cid-p5zaeqd4><a data-astro-cid-p5zaeqd4>コンピュータ研究会・WINC</a></span></p> </footer> </div> </main>  ` })} `;
}, "C:/Users/tksch/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/git/wincblog2/src/pages/[id].astro", void 0);

const $$file = "C:/Users/tksch/OneDrive/デスクトップ/git/wincblog2/src/pages/[id].astro";
const $$url = "/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
