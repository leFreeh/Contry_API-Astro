import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C8QTn_Z-.mjs';
import { manifest } from './manifest_D3sU-krJ.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/countries/_ccn3_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.15.9_rollup@4.22.4_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/countries/[ccn3].astro", _page1],
    ["src/pages/index.astro", _page2]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
