```
pnpm install
pnpm run dev
```

```
✘ [ERROR] [plugin checkForNodeBuiltins] Detected a Node builtin module import while Node compatibility is disabled.                                                       
Add node_compat = true to your wrangler.toml file to enable Node compatibility.                                                                                           
                                                                                                                                                                          
    node_modules/.pnpm/fd-slicer@1.1.0/node_modules/fd-slicer/index.js:8:27:                                                                                              
      8 │ var EventEmitter = require('events').EventEmitter;                                                                                                              
        ╵                            ~~~~~~~~                                                                                                                             
                                                                                                                                                                          
  This error came from the "onResolve" callback registered here:                                                                                                          
                                                                                                                                                                          
    ../../.nvm/versions/node/v17.9.0/pnpm-global/5/.pnpm/wrangler@2.0.7/node_modules/wrangler/wrangler-dist/cli.js:121207:11:                                             
      121207 │     build6.onResolve({                                                                                                                                                  ╵            ~~~~~~~~~                                                                                                                                                                                                                                                                                                                     at setup (/home/raul/.nvm/versions/node/v17.9.0/pnpm-global/5/.pnpm/wrangler@2.0.7/node_modules/wrangler/wrangler-dist/cli.js:121207:12)                                  at handlePlugins (/home/raul/.nvm/versions/node/v17.9.0/pnpm-global/5/.pnpm/esbuild@0.14.34/node_modules/esbuild/lib/main.js:843:23)                                      at Object.buildOrServe (/home/raul/.nvm/versions/node/v17.9.0/pnpm-global/5/.pnpm/esbuild@0.14.34/node_modules/esbuild/lib/main.js:1137:7)                                at /home/raul/.nvm/versions/node/v17.9.0/pnpm-global/5/.pnpm/esbuild@0.14.34/node_modules/esbuild/lib/main.js:2079:17                                                     at new Promise (<anonymous>)                                                                                                                                              at Object.build (/home/raul/.nvm/versions/node/v17.9.0/pnpm-global/5/.pnpm/esbuild@0.14.34/node_modules/esbuild/lib/main.js:2078:14)                                      at Object.build (/home/raul/.nvm/versions/node/v17.9.0/pnpm-global/5/.pnpm/esbuild@0.14.34/node_modules/esbuild/lib/main.js:1927:51)                                      at bundleWorker (/home/raul/.nvm/versions/node/v17.9.0/pnpm-global/5/.pnpm/wrangler@2.0.7/node_modules/wrangler/wrangler-dist/cli.js:121235:33)                           at build6 (/home/raul/.nvm/versions/node/v17.9.0/pnpm-global/5/.pnpm/wrangler@2.0.7/node_modules/wrangler/wrangler-dist/cli.js:121329:75)



✘ [ERROR] Build failed with 108 errors:                                                                                                                                   
                                                                                                                                                                          
  node_modules/.pnpm/agent-base@6.0.2/node_modules/agent-base/dist/src/index.js:5:25: ERROR:                                                                              
  [plugin: checkForNodeBuiltins] Detected a Node builtin module import while Node compatibility is                                                                        
  disabled.                                                                                                                                                               
  Add node_compat = true to your wrangler.toml file to enable Node compatibility.                                                                                         
  node_modules/.pnpm/bl@4.1.0/node_modules/bl/BufferList.js:3:27: ERROR: [plugin:                                                                                         
  checkForNodeBuiltins] Detected a Node builtin module import while Node compatibility is disabled.                                                                         Add node_compat = true to your wrangler.toml file to enable Node compatibility.                                                                                         
  node_modules/.pnpm/buffer-crc32@0.2.13/node_modules/buffer-crc32/index.js:1:21: ERROR: [plugin:                                                                         
  checkForNodeBuiltins] Detected a Node builtin module import while Node compatibility is disabled.                                                                       
  Add node_compat = true to your wrangler.toml file to enable Node compatibility.                                                                                         
  node_modules/.pnpm/chownr@1.1.4/node_modules/chownr/chownr.js:2:19: ERROR: [plugin:                                                                                     
  checkForNodeBuiltins] Detected a Node builtin module import while Node compatibility is disabled.                                                                       
  Add node_compat = true to your wrangler.toml file to enable Node compatibility.                                                                                           node_modules/.pnpm/chownr@1.1.4/node_modules/chownr/chownr.js:3:21: ERROR: [plugin:                                                                                     
  checkForNodeBuiltins] Detected a Node builtin module import while Node compatibility is disabled.                                                                       
  Add node_compat = true to your wrangler.toml file to enable Node compatibility.                                                                                         
  ...    
  ```
