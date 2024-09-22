import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D-7el-mZ.mjs';
import { manifest } from './manifest_DG_xA3TQ.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/articles/article.astro.mjs');
const _page2 = () => import('./pages/articles/articlecomponent.astro.mjs');
const _page3 = () => import('./pages/articles/user/_name_.astro.mjs');
const _page4 = () => import('./pages/articles/users.astro.mjs');
const _page5 = () => import('./pages/web1.astro.mjs');
const _page6 = () => import('./pages/_category_.astro.mjs');
const _page7 = () => import('./pages/_id_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/articles/article.astro", _page1],
    ["src/pages/articles/articleComponent.astro", _page2],
    ["src/pages/articles/user/[name].astro", _page3],
    ["src/pages/articles/users.astro", _page4],
    ["src/pages/web1.astro", _page5],
    ["src/pages/[category].astro", _page6],
    ["src/pages/[id].astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "1d021fbd-4188-44d2-9a36-63fd24b596f3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
