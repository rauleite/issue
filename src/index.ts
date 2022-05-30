import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

/**
Line with issue:
  [plugin: checkForNodeBuiltins] Detected a Node builtin module import while Node compatibility is disabled.
  Add node_compat = true to your wrangler.toml file to enable Node compatibility.
PS. works only if comment this line
*/

puppeteer.use(StealthPlugin())


addEventListener("fetch", (event) => {
  //@ts-ignore
  event.respondWith(handleRequest(event.request));
});

//@ts-ignore
async function handleRequest(request) {
  return new Response("Hello worker!", {
    headers: { "content-type": "text/plain" },
  });
}
