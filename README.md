```
pnpm install
pnpm run dev
```
```bash
▲ [WARNING] Converting "require" to "esm" is currently not supported                                                                                                      
                                                                                                                                                                          
    dist/bundle.js:11:17:                                                                                                                                                 
      11 │ module.exports = require("puppeteer-extra");                                                                                                                   
         ╵                  ~~~~~~~                                                                                                                                       

▲ [WARNING] Converting "require" to "esm" is currently not supported

    dist/bundle.js:21:17:
      21 │ module.exports = require("puppeteer-extra-plugin-stealth");
         ╵                  ~~~~~~~

▲ [WARNING] Enabling node.js compatibility mode for built-ins and globals. This is experimental and has serious tradeoffs. Please see https://github.com/ionic-team/rollup-plugin-node-polyfills/ for more details.


⎔ Starting a local server...
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ [b] open a browser, [d] open Devtools, [l] turn off local mode, [c] clear console, [x] to exit                                                                         │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
[mf:err] /tmp/tmp-6015-AjUkHS40r9RU/bundle.js:11
    throw new Error('Dynamic require of "' + x + '" is not supported');
    ^

Error: Dynamic require of "kind-of" is not supported
    at /tmp/tmp-6015-AjUkHS40r9RU/bundle.js:11:11
    at Function.getter (/home/raul/dev/api-minimal/node_modules/.pnpm/lazy-cache@1.0.4/node_modules/lazy-cache/index.js:39:29)
    at cloneDeep (/home/raul/dev/api-minimal/node_modules/.pnpm/clone-deep@0.2.4/node_modules/clone-deep/index.js:14:17)
    at mergeDeep (/home/raul/dev/api-minimal/node_modules/.pnpm/merge-deep@3.0.3/node_modules/merge-deep/index.js:19:16)
    at new PuppeteerExtraPlugin (/home/raul/dev/api-minimal/node_modules/.pnpm/puppeteer-extra-plugin@3.2.0_puppeteer-extra@3.2.3/node_modules/puppeteer-extra-plugin/src/
index.ts:77:18)
    at new StealthPlugin (/home/raul/dev/api-minimal/node_modules/.pnpm/puppeteer-extra-plugin-stealth@2.9.0_puppeteer-extra@3.2.3/node_modules/puppeteer-extra-plugin-ste
alth/index.js:74:5)
    at defaultExport (/home/raul/dev/api-minimal/node_modules/.pnpm/puppeteer-extra-plugin-stealth@2.9.0_puppeteer-extra@3.2.3/node_modules/puppeteer-extra-plugin-stealth
/index.js:172:31)
    at /home/raul/dev/api-minimal/dist/webpack:/api/src/index.ts:14:1
✘ [ERROR] Miniflare process exited with code 1
```
