"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>w});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),w=n,h=d["".concat(s,".").concat(w)]||d[w]||p[w]||l;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),l=r(6010),i=r(2389),o=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,i=e.lazy,d=e.block,w=e.defaultValue,h=e.values,m=e.groupId,g=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===w?w:null!=(t=null!=w?w:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:f[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,s.U)(),v=C.tabGroupChoices,T=C.setTabGroupChoices,N=(0,n.useState)(k),I=N[0],x=N[1],q=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=v[m];null!=P&&P!==I&&y.some((function(e){return e.value===P}))&&x(P)}var E=function(e){var t=e.currentTarget,r=q.indexOf(t),a=y[r].value;a!==I&&(O(t),x(a),null!=m&&T(m,String(a)))},Z=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a,n=q.indexOf(e.currentTarget)+1;r=null!=(a=q[n])?a:q[0];break;case"ArrowLeft":var l,i=q.indexOf(e.currentTarget)-1;r=null!=(l=q[i])?l:q[q.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},y.map((function(e){var t=e.value,r=e.label,i=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return q.push(e)},onKeyDown:Z,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=r?r:t)}))),i?(0,n.cloneElement)(f.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function w(e){var t=(0,i.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},4959:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(9960),l=r(4477),i=r(2263);const o=function(e){var t=e.to,r=e.children,o=(0,l.E)();return(0,i.default)().siteConfig.presets[0][1].docs.disableVersioning?a.createElement(n.default,{to:"/api/"+t},r):a.createElement(n.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t},r)}},4499:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>w,toc:()=>m});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),i=r(4959),o=r(5488),s=r(5162),u=r(1435);var c=["components"],p={id:"quick-start",title:"Quick Start",description:"Quick and easy steps to get started using Crawlee today!"},d=void 0,w={unversionedId:"quick-start/quick-start",id:"quick-start/quick-start",title:"Quick Start",description:"Quick and easy steps to get started using Crawlee today!",source:"@site/../docs/quick-start/index.mdx",sourceDirName:"quick-start",slug:"/quick-start/",permalink:"/docs/quick-start/",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1658627499,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{id:"quick-start",title:"Quick Start",description:"Quick and easy steps to get started using Crawlee today!"},sidebar:"docs",next:{title:"Introduction",permalink:"/docs/introduction/"}},h={},m=[{value:"Choose your crawler",id:"choose-your-crawler",level:2},{value:"CheerioCrawler",id:"cheeriocrawler",level:3},{value:"PuppeteerCrawler",id:"puppeteercrawler",level:3},{value:"PlaywrightCrawler",id:"playwrightcrawler",level:3},{value:"Installation",id:"installation",level:2},{value:"Crawling",id:"crawling",level:2},{value:"Local usage with Crawlee command-line interface (CLI)",id:"local-usage-with-crawlee-command-line-interface-cli",level:2}],g={toc:m};function f(e){var t=e.components,p=(0,n.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"With this short tutorial you can start scraping with Crawlee in a minute or two. To learn in-depth how Crawlee works, read the ",(0,l.kt)("a",{parentName:"p",href:"./introduction",target:null,rel:null},"Introduction"),", which is a comprehensive step-by-step guide for creating your first scraper."),(0,l.kt)("h2",{id:"choose-your-crawler"},"Choose your crawler"),(0,l.kt)("p",null,"Crawlee comes with three different crawler classes: ",(0,l.kt)(i.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")),", ",(0,l.kt)(i.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," and ",(0,l.kt)(i.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),". All classes share the same interface for maximum flexibility when switching between them."),(0,l.kt)("h3",{id:"cheeriocrawler"},"CheerioCrawler"),(0,l.kt)("p",null,"This is a plain HTTP crawler. It parses HTML using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cheeriojs/cheerio",target:"_blank",rel:"noopener"},"Cheerio")," library and crawls the web using the specialized ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},"got-scraping")," HTTP client which masks as a browser. It's very fast and efficient, but can't handle JavaScript rendering."),(0,l.kt)("h3",{id:"puppeteercrawler"},"PuppeteerCrawler"),(0,l.kt)("p",null,"This crawler uses a headless browser to crawl, controlled by the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer")," library. It can control Chromium or Chrome. Puppeteer is the de-facto standard in headless browser automation."),(0,l.kt)("h3",{id:"playwrightcrawler"},"PlaywrightCrawler"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},"Playwright")," is a more powerful and full-featured successor to Puppeteer. It can control Chromium, Chrome, Firefox, Webkit and many other browsers. If you're not familiar with Puppeteer already, and you need a headless browser, go with Playwright."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Crawlee requires ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/",target:"_blank",rel:"noopener"},"Node.js")," 16 or later.\nIt can be added to any Node.js project by running:"),(0,l.kt)(o.Z,{groupId:"quick_start",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,l.kt)(u.Z,{language:"bash",mdxType:"CodeBlock"},"npm install crawlee")),(0,l.kt)(s.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,l.kt)(u.Z,{language:"bash",mdxType:"CodeBlock"},"npm install crawlee playwright"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"playwright")," is not bundled with Crawlee to reduce install size and allow greater flexibility. You need to explicitly install it with NPM."))),(0,l.kt)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,l.kt)(u.Z,{language:"bash",mdxType:"CodeBlock"},"npm install crawlee puppeteer"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"puppeteer")," is not bundled with Crawlee to reduce install size and allow greater flexibility. You need to explicitly install it with NPM.")))),(0,l.kt)("h2",{id:"crawling"},"Crawling"),(0,l.kt)("p",null,"Run the following example to perform a recursive crawl of a website using:"),(0,l.kt)(o.Z,{groupId:"quick_start",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,l.kt)(u.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},"import { CheerioCrawler, Dataset } from 'crawlee';\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ request, $, enqueueLinks, log }) {\n        const { url } = request;\n\n        // Extract HTML title of the page.\n        const title = $('title').text();\n        log.info(`Title of ${url}: ${title}`);\n\n        // Add URLs that match the provided pattern.\n        await enqueueLinks({\n            globs: ['https://www.iana.org/*'],\n        });\n\n        // Save extracted data to dataset.\n        await Dataset.pushData({ url, title });\n    },\n});\n\n// Enqueue the initial request and run the crawler.\nawait crawler.run(['https://www.iana.org/']);\n")),(0,l.kt)(s.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,l.kt)(u.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},"import { PlaywrightCrawler, Dataset } from 'crawlee';\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const { url } = request;\n\n        // Extract HTML title of the page.\n        const title = await page.title();\n        log.info(`Title of ${url}: ${title}`);\n\n        // Add URLs that match the provided pattern.\n        await enqueueLinks({\n            globs: ['https://www.iana.org/*'],\n        });\n\n        // Save extracted data to dataset.\n        await Dataset.pushData({ url, title });\n    },\n});\n\n// Enqueue the initial request and run the crawler.\nawait crawler.run(['https://www.iana.org/']);\n")),(0,l.kt)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,l.kt)(u.Z,{language:"js",title:"src/main.mjs",mdxType:"CodeBlock"},"import { PuppeteerCrawler, Dataset } from 'crawlee';\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page, enqueueLinks, log }) {\n        const { url } = request;\n\n        // Extract HTML title of the page.\n        const title = await page.title();\n        log.info(`Title of ${url}: ${title}`);\n\n        // Add URLs that match the provided pattern.\n        await enqueueLinks({\n            globs: ['https://www.iana.org/*'],\n        });\n\n        // Save extracted data to dataset.\n        await Dataset.pushData({ url, title });\n    },\n});\n\n// Enqueue the initial request and run the crawler.\nawait crawler.run(['https://www.iana.org/']);\n"))),(0,l.kt)("p",null,"When you run the example, you will see Crawlee automating the data extraction process."),(0,l.kt)(o.Z,{groupId:"quick_start",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"cheerio",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},"Logs in your terminal will show the progress of your scraping:",(0,l.kt)(u.Z,{language:"log",mdxType:"CodeBlock"},'INFO  CheerioCrawler:AutoscaledPool: state {"currentConcurrency":0,"desiredConcurrency":2,"systemStatus":{"isSystemIdle":true,"memInfo":{"isOverloaded":false,"limitRatio":0.2,"actualRatio":null},"eventLoopInfo":{"isOverloaded":false,"limitRatio":0.7,"actualRatio":null},"cpuInfo":{"isOverloaded":false,"limitRatio":0.4,"actualRatio":null},"clientInfo":{"isOverloaded":false,"limitRatio":0.3,"actualRatio":null}}}\nINFO  CheerioCrawler: Title of https://www.iana.org/: Internet Assigned Numbers Authority\nINFO  CheerioCrawler: Title of https://www.iana.org/domains: Domain Name Services\nINFO  CheerioCrawler: Title of https://www.iana.org/numbers: Number Resources\nINFO  CheerioCrawler: Title of https://www.iana.org/about/: About us\nINFO  CheerioCrawler: Title of https://www.iana.org/abuse: Abuse Issues\nINFO  CheerioCrawler: Title of https://www.iana.org/protocols: Protocol Registries\nINFO  CheerioCrawler: Title of https://www.iana.org/time-zones: Time Zone Database\nINFO  CheerioCrawler: Title of https://www.iana.org/performance: Performance\nINFO  CheerioCrawler: Title of https://www.iana.org/reports: Reports\nINFO  CheerioCrawler: Title of https://www.iana.org/reviews: Reviews\nINFO  CheerioCrawler: Title of https://www.iana.org/contact: Contact Us\nINFO  CheerioCrawler: Title of https://www.iana.org/dnssec: DNSSEC Information\nINFO  CheerioCrawler: Title of https://www.iana.org/procedures: Procedures\nINFO  CheerioCrawler: Title of https://www.iana.org/glossary: Glossary\nINFO  CheerioCrawler: Title of https://www.iana.org/audits: Audit Programs\nINFO  CheerioCrawler: All the requests from request list and/or request queue have been processed, the crawler will shut down.\nINFO  CheerioCrawler: Final request statistics: {"requestsFinished":15,"requestsFailed":0,"retryHistogram":[15],"requestAvgFailedDurationMillis":null,"requestAvgFinishedDurationMillis":482,"requestsFinishedPerMinute":209,"requestsFailedPerMinute":0,"requestTotalDurationMillis":7233,"requestsTotal":15,"crawlerRuntimeMillis":4316}\n')),(0,l.kt)(s.Z,{value:"playwright",label:"PlaywrightCrawler",mdxType:"TabItem"},"Logs in your terminal will show the progress of your scraping and you will also see Crawlee automating a browser:",(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Chrome Scrape",src:r(7940).Z,width:"705",height:"529"}))),(0,l.kt)(s.Z,{value:"puppeteer",label:"PuppeteerCrawler",mdxType:"TabItem"},"Logs in your terminal will show the progress of your scraping and you will also see Crawlee automating a browser:",(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Chrome Scrape",src:r(7940).Z,width:"705",height:"529"})))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Crawlee stores data to ",(0,l.kt)("inlineCode",{parentName:"p"},"./storage")," in the current working directory. The results of your crawl will be available under ",(0,l.kt)("inlineCode",{parentName:"p"},"./storage/datasets/default/*"),". You can override this behavior by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"CRAWLEE_STORAGE_DIR")," environment variable.")),(0,l.kt)("p",null,"More examples showcasing various features of Crawlee could be found in ",(0,l.kt)("a",{parentName:"p",href:"./examples",target:null,rel:null},"Examples")," section of the documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Related links")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./guides/environment-variables",target:null,rel:null},"Environment variables")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./guides/request-storage",target:null,rel:null},"Request storage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./guides/result-storage",target:null,rel:null},"Result storage"))),(0,l.kt)("h2",{id:"local-usage-with-crawlee-command-line-interface-cli"},"Local usage with Crawlee command-line interface (CLI)"),(0,l.kt)("p",null,"To create a boilerplate of your project, you can use the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@crawlee/cli",target:"_blank",rel:"noopener"},"Crawlee CLI")," tool by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx crawlee create my-cheerio-crawler\n")),(0,l.kt)("p",null,"The CLI will prompt you to select a project boilerplate template - let's pick the ",(0,l.kt)("strong",{parentName:"p"},"Crawlee cheerio template ","[TypeScript]"),". The tool will create a directory called ",(0,l.kt)("inlineCode",{parentName:"p"},"my-cheerio-crawler")," with Node.js project files. You can run the project as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-cheerio-crawler\nnpm start\n")))}f.isMDXComponent=!0},7940:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/chrome_scrape-a64af551de8be5fe1ced2182dc0a8dcc.gif"}}]);