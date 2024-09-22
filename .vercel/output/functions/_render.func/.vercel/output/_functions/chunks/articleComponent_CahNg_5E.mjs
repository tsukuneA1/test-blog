import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro, F as Fragment } from './astro/server_M0d2d5zE.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_DBGGiwO8.mjs';
/* empty css                                    */

const $$Astro = createAstro();
const $$ArticleComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleComponent;
  const props = Astro2.props;
  const published = new Date(props.published_at);
  const updated = new Date(props.updated_at);
  return renderTemplate`<meta charset="UTF-8"> ${maybeRenderHead()}<body data-astro-cid-vtejrmf3> <div class="top_container" data-astro-cid-vtejrmf3> <div class="flex" data-astro-cid-vtejrmf3> <a${addAttribute(`/articles/user/${props.user.userName}`, "href")} data-astro-cid-vtejrmf3> ${renderComponent($$result, "Image", $$Image, { "src": props.user.userImgSrc, "width": 50, "height": 50, "alt": "", "class": "rounded-md", "data-astro-cid-vtejrmf3": true })} </a> <div class="block ml-2" data-astro-cid-vtejrmf3> <a class="text-lg"${addAttribute(`/articles/user/${props.user.userName}`, "href")} data-astro-cid-vtejrmf3> ${props.user.userName} </a> <div class="flex text-zinc-400" data-astro-cid-vtejrmf3> ${`${published.getFullYear()}.${String(published.getMonth() + 1).padStart(2, "0")}.${String(published.getDate()).padStart(2, "0")}`} ${published.getTime() < updated.getTime() ? renderTemplate`<div class="container" style="margin-left: 10px; display:flex; align-items: center;" data-astro-cid-vtejrmf3> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" data-astro-cid-vtejrmf3><path fill="none" d="M0 0h24v24H0z" data-astro-cid-vtejrmf3></path><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" data-astro-cid-vtejrmf3></path></svg> ${`${updated.getFullYear()}.${String(updated.getMonth() + 1).padStart(2, "0")}.${String(updated.getDate()).padStart(2, "0")}`} </div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-vtejrmf3": true })}`} </div> </div> </div> <a${addAttribute(props.classification === "zenn.dev" ? `https://zenn.dev${props.articleUrl}` : props.articleUrl, "href")} class="my-5 h-20 inline-block" data-astro-cid-vtejrmf3> <h1 style="width: auto;" class="text-xl" data-astro-cid-vtejrmf3>${props.title}</h1> </a> <div class="items-center" style="display: flex; align-items: center;" data-astro-cid-vtejrmf3> ${renderComponent($$result, "Image", $$Image, { "src": props.classification === "zenn.dev" ? "/zenn.png" : props.classification === "qiita.com" ? "/qiita.png" : "/favicon.svg", "width": 20, "height": 20, "alt": "", "class": "rounded-md mr-2", "data-astro-cid-vtejrmf3": true })} <div class="text-zinc-400" data-astro-cid-vtejrmf3> ${props.classification} </div> </div> </div> </body>`;
}, "C:/Users/tksch/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/git/wincblog2/src/pages/articles/articleComponent.astro", void 0);

const $$file = "C:/Users/tksch/OneDrive/デスクトップ/git/wincblog2/src/pages/articles/articleComponent.astro";
const $$url = "/articles/articleComponent";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ArticleComponent,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ArticleComponent as $, _page as _ };
