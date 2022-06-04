import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

/**
The line that throws the error:

    Error: Dynamic require of "kind-of" is not supported
    at /tmp/tmp-6015-AjUkHS40r9RU/bundle.js:11:11 ...

PS. works only if comment the line below
*/

//@ts-ignore
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
