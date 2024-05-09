(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>chunkId+"."+{0:"7b9d47db",13:"0aa35070",28:"abbbc432",73:"fec7e036",87:"f1560433",251:"5f418a12",254:"371989ec",274:"0efd06ff",299:"c192a213",306:"54e7d1d8",393:"4be4a086",427:"d3a7c86d",501:"e5fe304e",564:"df9a8bf5",570:"007bd401",594:"8e2028c3",641:"73021f6b",668:"8f2da59d",701:"dd9fd0f9",714:"8c5e15ef",716:"2be6a131",721:"22693b1c",736:"d71d546f",738:"8e33b85d",845:"0c070923",875:"7a3ef5da",880:"9c0bbf21",919:"f4d20ede",1017:"c0668904",1023:"783d5888",1052:"cd2193b0",1069:"ba57a1af",1073:"3db32aff",1164:"ef14d02c",1204:"c23b5903",1216:"509321d6",1219:"b8bc6916",1226:"d281f3bb",1254:"617504ac",1280:"be473551",1322:"cbedbe6a",1341:"17a29660",1371:"9621acbc",1381:"09f191ff",1390:"c223f551",1414:"b4371edb",1470:"6feb682d",1488:"2ab6d8bf",1579:"b9e19031",1613:"0ff187af",1642:"baf90df3",1643:"a8eb434e",1729:"c11c1b17",1742:"aeb70f2c",1766:"d043fe38",1864:"e9f2274b",1865:"4c7077b2",1984:"0c5758e9",1993:"b632376a",2137:"5d79fda6",2173:"cc69d64e",2175:"6ba61b3c",2181:"516a4b8c",2195:"b8116a36",2226:"082f265d",2233:"de2c3c5b",2241:"3f235425",2256:"a78c0070",2275:"4eb8ab37",2294:"a0735776",2330:"a9c7bc0a",2363:"08c01253",2378:"c69cf9d9",2393:"35a80279",2399:"062e7c2d",2422:"22ff3e34",2446:"3974011f",2457:"317a1438",2557:"dad37046",2600:"be22b647",2663:"2a640b4d",2674:"9181142f",2677:"3f6f55e4",2728:"3aef2d65",2750:"8c440d15",2751:"d7bab3c7",2800:"b2191fb7",2845:"f7228aba",2903:"6eb48f75",2964:"a462c034",2974:"5375af7d",2978:"5ba36910",2990:"e4cc2dd0",3071:"38d1c52f",3105:"d778c248",3229:"adcdf3f8",3241:"7e13ead2",3299:"d4fd4627",3306:"cb619bdc",3327:"a3f4207f",3336:"43f1bb84",3371:"57c0e1d1",3385:"286d7422",3426:"736876ea",3517:"5a13ea7b",3519:"17d51d11",3551:"abb0b555",3557:"d5e7d951",3568:"923fe5e3",3618:"697475f0",3629:"dcf643e5",3724:"f4faedfc",3811:"3c0f9011",3841:"6f3adc12",3867:"2453aa91",3891:"28e466e3",3914:"3ae0c8f4",3923:"de3c7a6f",3989:"cc5128eb",4011:"b0633e0f",4027:"36ec18d6",4034:"2ce6ebc4",4131:"2a5d2f54",4136:"4400fcf2",4160:"78ea13b7",4220:"aaa4427e",4240:"0d5cbe85",4251:"d8117cf6",4331:"d850ea94",4414:"f595ce50",4453:"7757c042",4463:"c7ceae34",4467:"b6c4353a",4472:"f05ce0c2",4555:"dbc9e5f9",4579:"b6c2dc4f",4596:"d41a6db1",4609:"d934b75b",4651:"1831ca82",4683:"9bbf747c",4775:"2b0f7aba",4786:"7eca0f4c",4793:"6838632d",4809:"84d98045",4837:"b0eeb861",4857:"ce9f7b4d",4861:"2c52b575",4898:"75dc6f5a",4931:"1f65543a",4954:"d7e78de4",5128:"98e9997e",5169:"38531998",5245:"6fd7ea1b",5269:"6825a022",5270:"8f04213c",5277:"9b3f2b36",5297:"441df35b",5332:"5eddc32d",5346:"8a2e4b7f",5385:"3b03ba6d",5413:"0acea68a",5493:"ffc961a0",5592:"2b7c8722",5612:"3da4c756",5645:"60e52258",5653:"26a44c9c",5666:"ea3f2b15",5725:"153aa3d3",5770:"a26c0741",5789:"6837d395",5826:"c55baa08",5902:"2050ca2e",5971:"98c68d71",6018:"55e10d13",6061:"bf35fb91",6079:"45dedaed",6205:"176cb850",6245:"432f3dc2",6274:"7485b6c5",6286:"f4595f4a",6394:"984aed7f",6406:"16e412c8",6454:"1d58cfc4",6479:"49761be4",6520:"b8102f68",6533:"7c108640",6549:"b725599d",6584:"5aae9839",6605:"ca8a135c",6621:"d49a920d",6663:"411c1c75",6672:"617999ae",6742:"b1bda7c8",6779:"b4bfed35",6830:"5a3f7fb2",6862:"da18c7f9",6865:"edf313b9",6924:"c6faca0f",6944:"7c7a0c38",7022:"600f2aad",7063:"e4e9bdc4",7070:"ef2c682d",7099:"a03c56fe",7125:"9706a6c4",7153:"9cdb2699",7155:"d1ba09ff",7261:"58d3ae10",7298:"f43ee85a",7306:"9b4a163f",7338:"0f8cca68",7364:"11f59739",7369:"a443c2b7",7404:"487b7538",7409:"f81e8810",7490:"aa93f33e",7502:"e51a6568",7506:"21f6dafd",7518:"e220cb98",7530:"836933b1",7542:"4180e915",7638:"04f215b8",7688:"77a25c98",7732:"4420e5f4",7755:"17bdd9eb",7763:"84e9f203",7783:"9ec329e6",7806:"980fd536",7847:"c780c174",7877:"bbd67fdf",7889:"269f64e6",7895:"63a2639f",7906:"329d9c74",7913:"659f6caf",7921:"6959e2ac",7957:"e916fe3e",8035:"c94229eb",8119:"75497fd3",8143:"baa04fb1",8154:"2b01295c",8195:"682777a9",8273:"ae106942",8279:"b2ac9edd",8343:"bf754e05",8346:"8c06b4bd",8408:"3116d9d1",8448:"b423936d",8450:"6137a9b5",8549:"1b7b34ba",8566:"d3e7d411",8583:"2d6dc695",8636:"fd6c8153",8640:"85cf0dbc",8665:"26b39c5e",8695:"d070baab",8705:"71768279",8706:"0f2b197f",8708:"3feda926",8728:"1ad8fbbd",8740:"c2b8df96",8794:"627ee4e1",8802:"2eba9784",8846:"bd9dc36b",8955:"edbbc235",8961:"38405aa7",9006:"d37e7935",9028:"a838fbc4",9041:"b14409d5",9059:"a0361c11",9082:"eaffe084",9099:"f807d9c9",9129:"26ef310a",9132:"387e094e",9185:"a336aabf",9189:"cf86ab44",9199:"e7f1e21a",9260:"19260390",9296:"b71fa400",9299:"4997fa37",9308:"15b7ec11",9316:"e0a75f77",9317:"6b5d8960",9318:"323a01f5",9421:"7cffa3d7",9431:"cdc7983b",9491:"a0c65e76",9506:"41e31104",9575:"df6d5f77",9648:"406366e5",9658:"06017a86",9738:"fb02450f",9760:"27d728f2",9779:"fd795b8c",9780:"ad511640",9785:"4ccf46d7",9789:"c2423c06",9813:"b9a61a5c",9814:"51fe8338",9862:"cca3893d",9885:"96d25fc8",9931:"fbd1955e",9995:"f99027fb",9997:"7a48d0c7"}[chunkId]+".iframe.bundle.js",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@metamask/sdk-ui:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@metamask/sdk-ui:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();