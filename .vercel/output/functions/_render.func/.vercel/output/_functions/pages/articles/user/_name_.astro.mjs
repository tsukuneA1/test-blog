import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as createAstro } from '../../../chunks/astro/server_M0d2d5zE.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../../../chunks/_astro_assets_DBGGiwO8.mjs';
import { f as fetchAllArticles } from '../../../chunks/article_DHVxky3n.mjs';
import { $ as $$ArticleComponent } from '../../../chunks/articleComponent_CahNg_5E.mjs';
import { $ as $$Header } from '../../../chunks/header_BGDPYhw8.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const zennUsers = [
  "to3izo",
  "niiharamegumu",
  "kawarimidoll",
  "kima000",
  "anri99103",
  "sajikix",
  "euxn23",
  "chips0711",
  "otakakot",
  "strozw",
  "dai_shi",
  "inuinu",
  "moko-poi",
  "codemagic",
  "tsubasa_tech",
  "qaynam",
  "yueda256",
  "taichifukumoto",
  "uu",
  "yoshiyuki_sato"
];
const qiitaUsers = [
  "yamazombie",
  "newta",
  "zunbero_zunbero",
  "akiraarika932",
  "araidon",
  "votepurchase",
  "_mi",
  "aokikenichi",
  "renesisu727",
  "TabataRin",
  "nqdior",
  "ahya_emon",
  "yonecoko",
  "ochx",
  "Sicut_study",
  "FukuharaYohei",
  "ko1nksm",
  "b-mente",
  "yamadagenki",
  "nucomiya"
];
const users = [
  {
    userName: "Alice",
    userImgSrc: "https://randomuser.me/api/portraits/women/1.jpg",
    introduction: "Alice is a front-end developer with a passion for React and Vue.",
    zennId: zennUsers[0],
    qiitaId: qiitaUsers[0],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Bob",
    userImgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    introduction: "Bob is a full-stack engineer specializing in Node.js and Express.",
    zennId: zennUsers[1],
    qiitaId: qiitaUsers[1],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Charlie",
    userImgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
    introduction: "Charlie loves working with databases and back-end services.",
    zennId: zennUsers[2],
    qiitaId: qiitaUsers[2],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Dave",
    userImgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    introduction: "Dave is a cloud computing enthusiast and an AWS Certified Developer.",
    zennId: zennUsers[3],
    qiitaId: qiitaUsers[3],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Eve",
    userImgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
    introduction: "Eve is a data scientist passionate about machine learning and AI.",
    zennId: zennUsers[4],
    qiitaId: qiitaUsers[4],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Frank",
    userImgSrc: "https://randomuser.me/api/portraits/men/4.jpg",
    introduction: "Frank is a DevOps expert specializing in CI/CD and infrastructure automation.",
    zennId: zennUsers[5],
    qiitaId: qiitaUsers[5],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Grace",
    userImgSrc: "https://randomuser.me/api/portraits/women/3.jpg",
    introduction: "Grace is an iOS developer with a keen eye for UI/UX design.",
    zennId: zennUsers[6],
    qiitaId: qiitaUsers[6],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Hank",
    userImgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    introduction: "Hank is a cybersecurity specialist with experience in network security.",
    zennId: zennUsers[7],
    qiitaId: qiitaUsers[7],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Ivy",
    userImgSrc: "https://randomuser.me/api/portraits/women/4.jpg",
    introduction: "Ivy is a blockchain developer working on decentralized applications.",
    zennId: zennUsers[8],
    qiitaId: qiitaUsers[8],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Jack",
    userImgSrc: "https://randomuser.me/api/portraits/men/6.jpg",
    introduction: "Jack is a game developer with expertise in Unity and C#.",
    zennId: zennUsers[9],
    qiitaId: qiitaUsers[9],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Kim",
    userImgSrc: "https://randomuser.me/api/portraits/women/5.jpg",
    introduction: "Kim is a UI/UX designer who enjoys creating user-friendly interfaces.",
    zennId: zennUsers[10],
    qiitaId: qiitaUsers[10],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Leo",
    userImgSrc: "https://randomuser.me/api/portraits/men/7.jpg",
    introduction: "Leo is an AI researcher focusing on deep learning and NLP.",
    zennId: zennUsers[11],
    qiitaId: qiitaUsers[11],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Mia",
    userImgSrc: "https://randomuser.me/api/portraits/women/6.jpg",
    introduction: "Mia is a back-end engineer who loves working with microservices.",
    zennId: zennUsers[12],
    qiitaId: qiitaUsers[12],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Nina",
    userImgSrc: "https://randomuser.me/api/portraits/women/7.jpg",
    introduction: "Nina is a mobile developer with experience in cross-platform development.",
    zennId: zennUsers[13],
    qiitaId: qiitaUsers[13],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Oscar",
    userImgSrc: "https://randomuser.me/api/portraits/men/8.jpg",
    introduction: "Oscar is a Site Reliability Engineer with a background in monitoring and observability.",
    zennId: zennUsers[14],
    qiitaId: qiitaUsers[14],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Paul",
    userImgSrc: "https://randomuser.me/api/portraits/men/9.jpg",
    introduction: "Paul is a data engineer building large-scale data pipelines.",
    zennId: zennUsers[15],
    qiitaId: qiitaUsers[15],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Quinn",
    userImgSrc: "https://randomuser.me/api/portraits/women/8.jpg",
    introduction: "Quinn is an IoT specialist creating smart devices with Raspberry Pi.",
    zennId: zennUsers[16],
    qiitaId: qiitaUsers[16],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Rachel",
    userImgSrc: "https://randomuser.me/api/portraits/women/9.jpg",
    introduction: "Rachel is an AI engineer developing models for natural language processing.",
    zennId: zennUsers[17],
    qiitaId: qiitaUsers[17],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Sam",
    userImgSrc: "https://randomuser.me/api/portraits/men/10.jpg",
    introduction: "Sam is a Python developer who loves working with Flask and Django.",
    zennId: zennUsers[18],
    qiitaId: qiitaUsers[18],
    gitUrl: "",
    XUrl: ""
  },
  {
    userName: "Tina",
    userImgSrc: "https://randomuser.me/api/portraits/women/10.jpg",
    introduction: "Tina is a Java developer working on enterprise-level applications.",
    zennId: zennUsers[19],
    qiitaId: qiitaUsers[19],
    gitUrl: "",
    XUrl: ""
  }
];

const $$Astro = createAstro();
async function getStaticPaths() {
  return users.map((user) => ({
    params: { name: user.userName }
  }));
}
const $$name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$name;
  const { name } = Astro2.params;
  const props = users.filter((user) => user.userName === name)[0];
  const allArticles = (await fetchAllArticles(props, "461c52bd05403452cf6c86a1b91c28aac04b5a34")).flat().sort((a, b) => {
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
  });
  return renderTemplate`<meta charset="UTF-8"> ${maybeRenderHead()}<body style="display: block; padding: 0; margin: 0;" data-astro-cid-y6vcawnp> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-y6vcawnp": true })} <div class="content" data-astro-cid-y6vcawnp> <div class="container" data-astro-cid-y6vcawnp> <div class="profile-section" data-astro-cid-y6vcawnp> ${renderComponent($$result, "Image", $$Image, { "src": props.userImgSrc, "width": 100, "height": 100, "alt": "User profile image", "data-astro-cid-y6vcawnp": true })} <div class="profile-info" data-astro-cid-y6vcawnp> <h2 data-astro-cid-y6vcawnp>${props.userName}</h2> <p data-astro-cid-y6vcawnp>${props.introduction}</p> </div> <div class="links" data-astro-cid-y6vcawnp> <a href="" data-astro-cid-y6vcawnp> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512" data-astro-cid-y6vcawnp><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z" data-astro-cid-y6vcawnp></path></svg> </a> <a href="" data-astro-cid-y6vcawnp> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" data-astro-cid-y6vcawnp><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" data-astro-cid-y6vcawnp></path></svg> </a> </div> </div> <h1 data-astro-cid-y6vcawnp>Articles</h1> <div class="articles-container" data-astro-cid-y6vcawnp> ${allArticles.map((article, index) => index % 2 === 0 ? renderTemplate`<div class="article-right" data-astro-cid-y6vcawnp> ${renderComponent($$result, "ArticleComponent", $$ArticleComponent, { ...article, "data-astro-cid-y6vcawnp": true })} </div>` : renderTemplate`<div class="article-left" data-astro-cid-y6vcawnp> ${renderComponent($$result, "ArticleComponent", $$ArticleComponent, { ...article, "data-astro-cid-y6vcawnp": true })} </div>`)} </div> </div> </div> </body>`;
}, "C:/Users/tksch/OneDrive/デスクトップ/git/wincblog2/src/pages/articles/user/[name].astro", void 0);
const $$file = "C:/Users/tksch/OneDrive/デスクトップ/git/wincblog2/src/pages/articles/user/[name].astro";
const $$url = "/articles/user/[name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$name,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
