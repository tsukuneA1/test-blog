import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, a as addAttribute } from '../../chunks/astro/server_M0d2d5zE.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../../chunks/_astro_assets_DBGGiwO8.mjs';
/* empty css                                    */
import { $ as $$Header } from '../../chunks/header_BGDPYhw8.mjs';
import { g as getUsers } from '../../chunks/micro_vDiA4Qqf.mjs';
export { renderers } from '../../renderers.mjs';

const $$Users = createComponent(async ($$result, $$props, $$slots) => {
  const response = await getUsers({ fields: ["userName", "userImgSrc", "introduction", "zennId", "qiitaId", "gitUrl", "XUrl"] });
  const Resusers = response.contents;
  return renderTemplate`<meta charset="UTF-8"><title>Members</title> ${maybeRenderHead()}<body style="margin: 0;" data-astro-cid-mkimisfa> <header data-astro-cid-mkimisfa> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-mkimisfa": true })} </header> <div style="background-color: rgb(23, 25, 35); padding: 2% 3%; margin: 0; display:block" data-astro-cid-mkimisfa> <h1 style="text-align: center; color: white; margin: 15px 0;" data-astro-cid-mkimisfa>Members</h1> <div style="display: flex;" class="users-container" data-astro-cid-mkimisfa> ${Resusers.map((user) => renderTemplate`<div class="profile-section" data-astro-cid-mkimisfa> <a${addAttribute(`./user/${user.userName}`, "href")} data-astro-cid-mkimisfa> ${renderComponent($$result, "Image", $$Image, { "src": user.userImgSrc, "width": 100, "height": 100, "alt": "User profile image", "data-astro-cid-mkimisfa": true })} <div class="profile-info" data-astro-cid-mkimisfa> <h2 data-astro-cid-mkimisfa>${user.userName}</h2> <p style="height: 100px; overflow: hidden;" data-astro-cid-mkimisfa>${user.introduction}</p> </div> <div class="links" style="margin-top: 5%;" data-astro-cid-mkimisfa> <a${addAttribute(user.gitUrl, "href")} data-astro-cid-mkimisfa> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512" data-astro-cid-mkimisfa><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z" data-astro-cid-mkimisfa></path></svg> </a> <a${addAttribute(user.XUrl, "href")} data-astro-cid-mkimisfa> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" data-astro-cid-mkimisfa><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" data-astro-cid-mkimisfa></path></svg> </a> </div> </a> </div>`)} </div> </div> </body>`;
}, "C:/Users/tksch/OneDrive/\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7/git/wincblog2/src/pages/articles/users.astro", void 0);

const $$file = "C:/Users/tksch/OneDrive/デスクトップ/git/wincblog2/src/pages/articles/users.astro";
const $$url = "/articles/users";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Users,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
