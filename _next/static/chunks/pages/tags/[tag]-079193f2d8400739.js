(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{5271:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return r(6888)}])},9831:function(t,e,r){"use strict";r.d(e,{TQ:function(){return s},$t:function(){return d},Uy:function(){return u}});var n=r(7320),a=r(9008),i=r(1163),o=r(1576),c=r.n(o),l=function(t){var e=t.title,r=t.description,o=t.ogType,l=t.ogImage,s=t.twImage,d=(0,i.useRouter)();return(0,n.BX)(a.default,{children:[(0,n.tZ)("title",{children:e}),(0,n.tZ)("meta",{name:"robots",content:"follow, index"}),(0,n.tZ)("meta",{name:"description",content:r}),(0,n.tZ)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(d.asPath)}),(0,n.tZ)("meta",{property:"og:type",content:o}),(0,n.tZ)("meta",{property:"og:site_name",content:c().title}),(0,n.tZ)("meta",{property:"og:description",content:r}),(0,n.tZ)("meta",{property:"og:title",content:e}),"Array"===l.constructor.name?l.map((function(t){var e=t.url;return(0,n.tZ)("meta",{property:"og:image",content:e},e)})):(0,n.tZ)("meta",{property:"og:image",content:l},l),(0,n.tZ)("meta",{name:"twitter:card",content:"summary"}),(0,n.tZ)("meta",{name:"twitter:site",content:c().twitter}),(0,n.tZ)("meta",{name:"twitter:title",content:e}),(0,n.tZ)("meta",{name:"twitter:description",content:r}),(0,n.tZ)("meta",{name:"twitter:image",content:s})]})},s=function(t){var e=t.title,r=t.description,a=c().siteUrl+c().socialBanner,i=c().siteUrl+c().socialBanner;return(0,n.tZ)(l,{title:e,description:r,ogType:"website",ogImage:a,twImage:i})},d=function(t){var e=t.title,r=t.description,o=c().siteUrl+c().socialBanner,s=c().siteUrl+c().socialBanner,d=(0,i.useRouter)();return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l,{title:e,description:r,ogType:"website",ogImage:o,twImage:s}),(0,n.tZ)(a.default,{children:(0,n.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(c().siteUrl).concat(d.asPath,"/feed.xml")})})]})},u=function(t){var e=t.authorDetails,r=t.title,o=t.summary,s=t.date,d=t.lastmod,u=t.url,p=t.images,m=void 0===p?[]:p,g=(0,i.useRouter)(),h=new Date(s).toISOString(),f=new Date(d||s).toISOString(),y=(0===m.length?[c().socialBanner]:"string"===typeof m?[m]:m).map((function(t){return{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(t)}})),Z={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:r,image:y,datePublished:h,dateModified:f,author:e?e.map((function(t){return{"@type":"Person",name:t.name}})):{"@type":"Person",name:c().author},publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:o},x=y[0].url;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(l,{title:r,description:o,ogType:"article",ogImage:y,twImage:x}),(0,n.BX)(a.default,{children:[s&&(0,n.tZ)("meta",{property:"article:published_time",content:h}),d&&(0,n.tZ)("meta",{property:"article:modified_time",content:f}),(0,n.tZ)("link",{rel:"canonical",href:"".concat(c().siteUrl).concat(g.asPath)}),(0,n.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(Z,null,2)}})]})]})}},9019:function(t,e,r){"use strict";var n=r(7320),a=r(1664),i=r(4871);e.Z=function(t){var e=t.text;return(0,n.tZ)(a.default,{href:"/tags/".concat((0,i.Z)(e)),children:(0,n.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-800 hover:text-primary-900 dark:hover:text-primary-400",children:e.split(" ").join("-")})})}},6055:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n=r(7320),a=r(7233),i=r(9019),o=(r(1576),r(1720));function c(t){var e=t.totalPages,r=t.currentPage,i=parseInt(r)-1>0,o=parseInt(r)+1<=parseInt(e);return(0,n.tZ)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.BX)("nav",{className:"flex justify-between",children:[!i&&(0,n.tZ)("button",{rel:"previous",className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Previous"}),i&&(0,n.tZ)(a.Z,{href:r-1===1?"/workshop/":"/workshop/page/".concat(r-1),children:(0,n.tZ)("button",{rel:"previous",children:"Previous"})}),(0,n.BX)("span",{children:[r," of ",e]}),!o&&(0,n.tZ)("button",{rel:"next",className:"cursor-auto disabled:opacity-50",disabled:!o,children:"Next"}),o&&(0,n.tZ)(a.Z,{href:"/workshop/page/".concat(r+1),children:(0,n.tZ)("button",{rel:"next",children:"Next"})})]})})}r(6232);function l(t){var e=t.posts,r=t.title,l=t.initialDisplayPosts,s=void 0===l?[]:l,d=t.pagination,u=(0,o.useState)(""),p=u[0],m=u[1],g=e.filter((function(t){return(t.title+t.summary+t.tags.join(" ")).toLowerCase().includes(p.toLowerCase())})),h=s.length>0&&!p?s:g;return(0,n.BX)(n.HY,{children:[(0,n.BX)("div",{className:"divide-y",children:[(0,n.BX)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:[(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r}),(0,n.BX)("div",{className:"relative max-w-lg",children:[(0,n.tZ)("input",{"aria-label":"Search articles",type:"text",onChange:function(t){return m(t.target.value)},placeholder:"Search articles",className:"block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"}),(0,n.tZ)("svg",{className:"absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})]}),(0,n.BX)("ul",{children:[!g.length&&"No posts found.",h.map((function(t){var e=t.slug,r=(t.date,t.title),o=t.summary,c=t.tags,l=t.exercise;return(0,n.tZ)("li",{className:"py-4",children:(0,n.BX)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,n.tZ)("dl",{children:(0,n.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.BX)("div",{children:["Exercise ",l]})})}),(0,n.BX)("div",{className:"space-y-3 xl:col-span-3",children:[(0,n.BX)("div",{children:[(0,n.tZ)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,n.tZ)(a.Z,{href:"/workshop/".concat(e),className:"text-gray-900 dark:text-gray-100",children:r})}),(0,n.tZ)("div",{className:"flex flex-wrap",children:c.map((function(t){return(0,n.tZ)(i.Z,{text:t},t)}))})]}),(0,n.tZ)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:o})]})]})},e)}))]})]}),d&&d.totalPages>1&&!p&&(0,n.tZ)(c,{currentPage:d.currentPage,totalPages:d.totalPages})]})}},6232:function(t,e,r){"use strict";var n=r(1576),a=r.n(n);e.Z=function(t){return new Date(t).toLocaleDateString(a().locale,{year:"numeric",month:"long",day:"numeric"})}},4871:function(t,e){"use strict";e.Z=function(t){return t&&t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(t){return t.toLowerCase()})).join("-")}},6888:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return l},default:function(){return s}});var n=r(7320),a=r(9831),i=r(1576),o=r.n(i),c=r(6055),l=!0;function s(t){var e=t.posts,r=t.tag,i=r[0].toUpperCase()+r.split(" ").join("-").slice(1);return(0,n.BX)(n.HY,{children:[(0,n.tZ)(a.$t,{title:"".concat(r," - ").concat(o().author),description:"".concat(r," tags - ").concat(o().author)}),(0,n.tZ)(c.default,{posts:e,title:i})]})}}},function(t){t.O(0,[888,179],(function(){return e=5271,t(t.s=e);var e}));var e=t.O();_N_E=e}]);