import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_M0d2d5zE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CC1g_o1F.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://public-api.wordpress.com/wp/v2/sites/wincblog.wordpress.com/categories");
  await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "wincblog", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="header" data-astro-cid-j7pv25f6> <div class="headertext" data-astro-cid-j7pv25f6> <h1 class="title" data-astro-cid-j7pv25f6>WINCBLOG</h1> <div class="content_width" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>WINCブログ</h2> <p class="explanation" data-astro-cid-j7pv25f6>コンピュータサークル「WINC」の活動記録。</p> </div> <img src="./LINE_ALBUM_春合宿写真_240229_119 1.png" alt="" class="pixture1" data-astro-cid-j7pv25f6> </div> <img src="./LINE_ALBUM_春合宿写真_240229_119 2.png" alt="" class="pixture2" data-astro-cid-j7pv25f6> </div> <main data-astro-cid-j7pv25f6> <div class="category one" data-astro-cid-j7pv25f6> <div class="text" data-astro-cid-j7pv25f6> <h1 class="number" data-astro-cid-j7pv25f6>01</h1> <div class="left" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6></h3> <a href="./web" class="team_name" data-astro-cid-j7pv25f6>Web team</a> </div> </div> <img src="./web.png" alt="" class="right_one" data-astro-cid-j7pv25f6> </div> <div class="category two" data-astro-cid-j7pv25f6> <div class="text" data-astro-cid-j7pv25f6> <h1 class="number" data-astro-cid-j7pv25f6>02</h1> <div class="right" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6></h3> <a href="./app" class="team_name" data-astro-cid-j7pv25f6>App team</a> </div> </div> <img src="./app.png" alt="" class="right_one" data-astro-cid-j7pv25f6> </div> <div class="category three" data-astro-cid-j7pv25f6> <div class="text" data-astro-cid-j7pv25f6> <h1 class="number" data-astro-cid-j7pv25f6>03</h1> <div class="left" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6></h3> <a href="./competitive_programming" class="team_name" data-astro-cid-j7pv25f6>競プロ班</a> </div> </div> <img src="./competitive.png" alt="" class="right_one" data-astro-cid-j7pv25f6> </div> <div class="category four" data-astro-cid-j7pv25f6> <div class="text" data-astro-cid-j7pv25f6> <h1 class="number" data-astro-cid-j7pv25f6>04</h1> <div class="right" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6></h3> <a href="./hackathon" class="team_name" data-astro-cid-j7pv25f6>hackathonの作品</a> </div> </div> <img src="./hackathon.png" alt="" class="right_one" data-astro-cid-j7pv25f6> </div> <div class="category five" data-astro-cid-j7pv25f6> <div class="text" data-astro-cid-j7pv25f6> <h1 class="number" data-astro-cid-j7pv25f6>05</h1> <div class="left" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6></h3> <a href="./other" class="team_name" data-astro-cid-j7pv25f6>サークル外の活動</a> </div> </div> <img src="./other.png" alt="" class="right_one" data-astro-cid-j7pv25f6> </div> <footer data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>© 2024 Copyright: <span data-astro-cid-j7pv25f6><a data-astro-cid-j7pv25f6>コンピュータ研究会・WINC</a></span></p> </footer> </main> </div> ` })}`;
}, "C:/Users/tksch/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/git/wincblog2/src/pages/index.astro", void 0);

const $$file = "C:/Users/tksch/OneDrive/デスクトップ/git/wincblog2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
