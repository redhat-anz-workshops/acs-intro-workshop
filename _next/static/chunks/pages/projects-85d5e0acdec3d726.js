(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9182:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(7944)}])},9868:function(t,e,r){"use strict";var n=r(7320),a=r(5675),i=r.n(a);e.Z=t=>{let{...e}=t;return(0,n.tZ)(i(),{...e})}},4335:function(t,e,r){"use strict";r.d(e,{$t:function(){return m},TQ:function(){return d},Uy:function(){return p}});var n=r(7320),a=r(9008),i=r.n(a),o=r(1163),c=r(3516),l=r.n(c);let s=t=>{let{title:e,description:r,ogType:a,ogImage:c,twImage:s}=t,d=(0,o.useRouter)();return(0,n.BX)(i(),{children:[(0,n.tZ)("title",{children:e}),(0,n.tZ)("meta",{name:"robots",content:"follow, index"}),(0,n.tZ)("meta",{name:"description",content:r}),(0,n.tZ)("meta",{property:"og:url",content:"".concat(l().siteUrl).concat(d.asPath)}),(0,n.tZ)("meta",{property:"og:type",content:a}),(0,n.tZ)("meta",{property:"og:site_name",content:l().title}),(0,n.tZ)("meta",{property:"og:description",content:r}),(0,n.tZ)("meta",{property:"og:title",content:e}),"Array"===c.constructor.name?c.map(t=>{let{url:e}=t;return(0,n.tZ)("meta",{property:"og:image",content:e},e)}):(0,n.tZ)("meta",{property:"og:image",content:c},c),(0,n.tZ)("meta",{name:"twitter:card",content:"summary"}),(0,n.tZ)("meta",{name:"twitter:site",content:l().twitter}),(0,n.tZ)("meta",{name:"twitter:title",content:e}),(0,n.tZ)("meta",{name:"twitter:description",content:r}),(0,n.tZ)("meta",{name:"twitter:image",content:s})]})},d=t=>{let{title:e,description:r}=t,a=l().siteUrl+l().socialBanner,i=l().siteUrl+l().socialBanner;return(0,n.tZ)(s,{title:e,description:r,ogType:"website",ogImage:a,twImage:i})},m=t=>{let{title:e,description:r}=t,a=l().siteUrl+l().socialBanner,c=l().siteUrl+l().socialBanner,d=(0,o.useRouter)();return(0,n.BX)(n.HY,{children:[(0,n.tZ)(s,{title:e,description:r,ogType:"website",ogImage:a,twImage:c}),(0,n.tZ)(i(),{children:(0,n.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(l().siteUrl).concat(d.asPath,"/feed.xml")})})]})},p=t=>{let{authorDetails:e,title:r,summary:a,date:c,lastmod:d,url:m,images:p=[]}=t,h=(0,o.useRouter)(),g=new Date(c).toISOString(),u=new Date(d||c).toISOString(),y=(0===p.length?[l().socialBanner]:"string"==typeof p?[p]:p).map(t=>({"@type":"ImageObject",url:"".concat(l().siteUrl).concat(t)})),f={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":m},headline:r,image:y,datePublished:g,dateModified:u,author:e?e.map(t=>({"@type":"Person",name:t.name})):{"@type":"Person",name:l().author},publisher:{"@type":"Organization",name:l().author,logo:{"@type":"ImageObject",url:"".concat(l().siteUrl).concat(l().siteLogo)}},description:a},Z=y[0].url;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(s,{title:r,description:a,ogType:"article",ogImage:y,twImage:Z}),(0,n.BX)(i(),{children:[c&&(0,n.tZ)("meta",{property:"article:published_time",content:g}),d&&(0,n.tZ)("meta",{property:"article:modified_time",content:u}),(0,n.tZ)("link",{rel:"canonical",href:"".concat(l().siteUrl).concat(h.asPath)}),(0,n.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f,null,2)}})]})]})}},4461:function(t,e,r){"use strict";function n(t){let{src:e,width:r,quality:n}=t,a=new URL("https://workshop-936810110.imgix.net".concat(e));if(!e.includes("gif")){let t=a.searchParams;t.set("auto",t.getAll("auto").join(",")||"format"),t.set("fit",t.get("fit")||"max"),t.set("w",t.get("w")||r.toString())}return a.href}r.r(e),r.d(e,{default:function(){return n}})},7944:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var n=r(7320),a=r(3516),i=r.n(a),o=[{title:"BBQ and Kubernetes deployments",description:"Who knew that BBQing had so much to do with deploying containers\n    to Kubernetes clusters?",imgSrc:"/static/images/google.png",href:"/workshop/bbq-and-kubernetes"}],c=r(9868),l=r(3566),s=t=>{let{title:e,description:r,imgSrc:a,href:i}=t;return(0,n.tZ)("div",{className:"p-4 md:w-1/2 md",style:{maxWidth:"544px"},children:(0,n.BX)("div",{className:"h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700",children:[i?(0,n.tZ)(l.Z,{href:i,"aria-label":"Link to ".concat(e),children:(0,n.tZ)(c.Z,{alt:e,src:a,className:"object-cover object-center lg:h-48 md:h-36",width:544,height:306})}):(0,n.tZ)(c.Z,{alt:e,src:a,className:"object-cover object-center lg:h-48 md:h-36",width:544,height:306}),(0,n.BX)("div",{className:"p-6",children:[(0,n.tZ)("h2",{className:"mb-3 text-2xl font-bold leading-8 tracking-tight",children:i?(0,n.tZ)(l.Z,{href:i,"aria-label":"Link to ".concat(e),children:e}):e}),(0,n.tZ)("p",{className:"mb-3 prose text-gray-500 max-w-none dark:text-gray-400",children:r}),i&&(0,n.tZ)(l.Z,{href:i,className:"text-base font-medium leading-6 text-primary-800 hover:text-primary-900 dark:hover:text-primary-400","aria-label":"Link to ".concat(e),children:"Learn more →"})]})]})})},d=r(4335);function m(){return(0,n.BX)(n.HY,{children:[(0,n.tZ)(d.TQ,{title:"Projects - ".concat(i().author),description:i().description}),(0,n.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,n.BX)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:[(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"Projects"}),(0,n.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:"Showcase your projects with a hero image (16 x 9)"})]}),(0,n.tZ)("div",{className:"container py-12",children:(0,n.tZ)("div",{className:"flex flex-wrap -m-4",children:o.map(t=>(0,n.tZ)(s,{title:t.title,description:t.description,imgSrc:t.imgSrc,href:t.href},t.title))})})]})]})}}},function(t){t.O(0,[675,888,179],function(){return t(t.s=9182)}),_N_E=t.O()}]);