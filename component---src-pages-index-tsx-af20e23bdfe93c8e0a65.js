(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return _}),n.d(t,"IndexQuery",function(){return N});var r=n(7),a=n.n(r),i=n(0),o=n.n(i),l=n(61),c=n(204),m=n(214),s=n(212),u=n.n(s),p=n(205),d=n(206),g=n(215),f=n.n(g),h=n(208),y=n.n(h),b=n(294),x=n.n(b),w=n(211),E=c.c.main.withConfig({displayName:"pages__Homepage",componentId:"sc-111kh8c-0"})(["display:flex;flex-direction:column;@media ","{height:100%;flex-direction:column;}@media ","{height:100%;flex-direction:column;}"],d.a.tablet,d.a.phone),v=c.c.div.withConfig({displayName:"pages__GridRow",componentId:"sc-111kh8c-1"})(["flex:1;display:flex;justify-content:center;align-items:",";background:",";background-size:cover;padding:2rem 4rem;color:",";h1{color:",";}@media ","{padding:3rem 3rem;}@media ","{padding:2rem 1.5rem;}"],function(e){return e.alignItems?e.alignItems:"center"},function(e){return e.background?"linear-gradient(\n      -185deg,\n      "+f()(y()(.1,e.theme.colors.primary),.7)+", \n      "+f()(x()(.1,e.theme.colors.grey.dark),.9)+"), url(/assets/bg.png) no-repeat":null},function(e){return e.background?e.theme.colors.white:null},function(e){return e.background?e.theme.colors.white:null},d.a.tablet,d.a.phone),k=c.c.div.withConfig({displayName:"pages__HomepageContent",componentId:"sc-111kh8c-2"})(["display:flex;flex-direction:column;align-items:",";max-width:40rem;text-align:",";"],function(e){return e.center?"center":"flex-start"},function(e){return e.center?"center":"left"}),_=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark,t=e.edges,n=e.totalCount;return o.a.createElement(m.d,null,o.a.createElement(m.k,{fullWidth:!0},o.a.createElement(u.a,{title:"Homepage | "+p.a.siteTitle}),o.a.createElement(E,null,o.a.createElement(v,{background:!1,alignItems:"flex-start"},o.a.createElement(k,{center:!0},o.a.createElement("h1",null,"Hi. I am ",o.a.createElement("br",null),"Jesús Quintana"),o.a.createElement(w.a,null))),o.a.createElement(v,null,o.a.createElement(k,null,o.a.createElement("h2",null,"Latest Posts"),t.map(function(e){return o.a.createElement(m.a,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})}),o.a.createElement("p",{className:"textRight"},o.a.createElement(l.Link,{to:"/blog"},"All articles (",n,")")))))))},t}(o.a.Component),N="504143126"},205:function(e,t,n){"use strict";t.a={pathPrefix:"/",siteTitle:"Inside a Developer's Head",siteTitleAlt:"Typescript Power Blog - Gatsby Starter",siteUrl:"https://jquintanab.com",siteLanguage:"en",siteBanner:"/assets/banner.jpg",defaultBg:"/assets/bg.png",favicon:"src/favicon.png",siteDescription:"Inside a Developer's Head",author:"Jesús Quintana",siteLogo:"/assets/logo.png",userTwitter:"@marduke182",ogSiteName:"marduke",ogLanguage:"en_US",themeColor:"#3498DB",backgroundColor:"#2b2e3c",headerFontFamily:"Bitter",bodyFontFamily:"Open Sans",baseFontSize:"18px",siteFBAppID:"",Google_Tag_Manager_ID:"GTM-NQZ5DVX",POST_PER_PAGE:4}},206:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"}},209:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(37);var r=n(0),a=n.n(r),i=n(204).c.span.withConfig({displayName:"Date__DateStyled",componentId:"k27vdu-0"})(["color:",";"],function(e){return e.theme.colors.primary}),o=function(e){var t=e.date;return a.a.createElement(i,null,t.replace(/\./g,"/"))}},211:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),a=n.n(r),i=n(204),o=n(15),l=i.c.nav.withConfig({displayName:"Nav__NavStyled",componentId:"sc-1rcyx9v-0"})(["display:flex;flex-direction:row;& > a{padding-left:1rem;}"]),c=function(){return a.a.createElement(l,null,a.a.createElement(o.Link,{to:"/about-me"},"About Me"),a.a.createElement(o.Link,{to:"/blog"},"Blog"))}},213:function(e){e.exports={data:{site:{buildTime:"21.04.2019"}}}},214:function(e,t,n){"use strict";var r=n(7),a=n.n(r),i=n(0),o=n.n(i),l=n(204),c=n(61),m=n(207),s=n.n(m),u=(n(216),n(215)),p=n.n(u),d=l.c.div.withConfig({displayName:"Subline",componentId:"nc5qbb-0"})(["font-size:",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.light&&"color: "+p()(e.theme.colors.white,.7)},function(e){return e.sectionTitle&&"text-align: center"}),g=n(209),f=l.c.article.withConfig({displayName:"Article__Post",componentId:"sc-760hwe-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;"]),h=l.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-760hwe-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),y=l.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-760hwe-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),b=l.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-760hwe-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),x=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.date,r=e.excerpt,a=e.slug,i=e.timeToRead,l=e.category,m=t.charAt(0);return o.a.createElement(f,null,o.a.createElement(h,null,o.a.createElement(y,null,m),o.a.createElement(c.Link,{to:"/blog/"+a},t)),o.a.createElement(d,null,o.a.createElement(g.a,{date:n})," — ",i," Min Read — In",o.a.createElement(c.Link,{to:"/categories/"+s()(l)}," ",l)),o.a.createElement(b,null,r))},t}(o.a.PureComponent),w=(n(210),n(208)),E=n.n(w),v=(l.c.button.withConfig({displayName:"Button",componentId:"sc-1ioq4lm-0"})(["background:",";border:none;display:inline-flex;align-items:center;margin:0 0.5rem;border-radius:",";font-size:",";color:white;padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}svg{width:20px;height:20px;margin-right:0.75rem;fill:white;}"],function(e){return e.theme.colors.primary},function(e){return e.big?"1.5rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.big?"0.35rem 1.6rem":"0.25rem 1.5rem"},function(e){return e.theme.transitions.normal},function(e){return E()(.3,e.theme.colors.primary)}),n(205)),k=n(211),_=l.c.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"qayata-0"})(["padding:2rem 1rem 0.5rem;text-align:left;"]),N=l.c.div.withConfig({displayName:"Header__Content",componentId:"qayata-1"})(["z-index:999;max-width:40rem;margin:0 auto;display:flex;flex-direction:",";justify-content:",";a{&:hover{opacity:0.85;}}"],function(e){return e.direction?e.direction:"row"},function(e){return e.justify}),I=l.c.span.withConfig({displayName:"Header__HeaderTitle",componentId:"qayata-2"})(["font-size:1.8rem;font-family:",";font-weight:900;"],function(e){return e.theme.fontFamily.heading}),C=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement(_,{banner:this.props.banner||v.a.defaultBg},o.a.createElement(N,{justify:"space-between"},o.a.createElement("div",null,o.a.createElement(I,null,"Jesús Quintana"),o.a.createElement("br",null),o.a.createElement(c.Link,{to:"/"},v.a.siteTitle)),o.a.createElement(k.a,null)),o.a.createElement("br",null),o.a.createElement(N,{direction:"column"},this.props.children))},t}(o.a.PureComponent),P=n(217),T=n.n(P),S=n(213),L={colors:{primary:"#ff6200",bg:"#fff",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"1.8rem"},fontFamily:{heading:'"Lato","Helvetica Neue",Helvetica,sans-serif',normal:'"Merriweather","PT Serif",Georgia,"Times New Roman",serif'}},z=n(206),A=n(218),j=n.n(A);n(219);function F(){var e=T()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    font-family: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n  h1, h2, h3, h4 {\n    color: ",";\n    font-family: ",';\n    font-weight: bold;\n  }\n  \n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return F=function(){return e},e}var B=Object(l.b)(F(),L.colors.bg,L.colors.primary,L.colors.bg,L.colors.grey.default,L.fontFamily.normal,z.a.phone,L.colors.primary,L.colors.grey.dark,L.fontFamily.heading,L.colors.primary,L.colors.grey.dark),D=l.c.footer.withConfig({displayName:"Layout__Footer",componentId:"jdfbw2-0"})(["text-align:center;padding:3rem 0;span{font-size:0.75rem;}"]),H=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(c.StaticQuery,{query:"1536950682",render:function(t){return o.a.createElement(l.a,{theme:L},o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null),e,o.a.createElement(D,null,"© ",j()(t.site.buildTime,".")[2]," by Jesús Quintana. ",o.a.createElement("br",null),o.a.createElement("span",null,"Last build: ",t.site.buildTime))))},data:S})},t}(o.a.PureComponent),O=l.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-1lrd9w8-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.primary}),R=l.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-1lrd9w8-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),q=l.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-1lrd9w8-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.light}),M=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.prev,n=e.next;return o.a.createElement(O,null,t&&o.a.createElement(R,null,o.a.createElement("span",null,"Previous"),o.a.createElement(c.Link,{to:"/blog/"+s()(t.frontmatter.title)},t.frontmatter.title)),n&&o.a.createElement(q,null,o.a.createElement("span",null,"Next"),o.a.createElement(c.Link,{to:"/blog/"+s()(n.frontmatter.title)},n.frontmatter.title)))},t}(o.a.PureComponent),W=l.c.div.withConfig({displayName:"SectionTitle",componentId:"sc-1uhfgjl-0"})(["font-size:",";font-family:",";font-weight:600;text-transform:",";text-align:left;position:relative;line-height:1.25;padding:1rem 0 0;margin-bottom:1rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.big},function(e){return e.theme.fontFamily.heading},function(e){return e.uppercase?"uppercase":"normal"},function(e){return e.theme.colors.white}),J=n(212),Q=n.n(J),U=function(e){var t,n,r,a,i=e.postNode,l=e.postPath,c=e.postSEO,m="/"===v.a.pathPrefix?"":v.a.pathPrefix;c?(t=i.frontmatter.title,n=i.excerpt,r=v.a.siteBanner,a=v.a.siteUrl+m+l):(t=v.a.siteTitle,n=v.a.siteDescription,r=v.a.siteBanner);r=v.a.siteUrl+m+r;var s=v.a.siteUrl+v.a.pathPrefix,u=[{"@context":"http://schema.org","@type":"WebSite","@id":s,url:s,name:t,alternateName:v.a.siteTitleAlt?v.a.siteTitleAlt:""}];return c&&(u=[{"@context":"http://schema.org","@type":"BlogPosting","@id":a,url:a,name:t,alternateName:v.a.siteTitleAlt?v.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:r},description:v.a.siteDescription,datePublished:i.frontmatter.date,dateModified:i.frontmatter.date,author:{"@type":"Person",name:v.a.author},publisher:{"@type":"Organization",name:v.a.author,logo:{"@type":"ImageObject",url:v.a.siteUrl+m+v.a.siteLogo}},isPartOf:s,mainEntityOfPage:{"@type":"WebSite","@id":s}}]),o.a.createElement(Q.a,null,o.a.createElement("html",{lang:v.a.siteLanguage}),o.a.createElement("title",null,v.a.siteTitle),o.a.createElement("meta",{name:"description",content:n}),o.a.createElement("meta",{name:"image",content:r}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)),o.a.createElement("meta",{property:"og:locale",content:v.a.ogLanguage}),o.a.createElement("meta",{property:"og:site_name",content:v.a.ogSiteName?v.a.ogSiteName:""}),o.a.createElement("meta",{property:"og:url",content:c?a:s}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:n}),o.a.createElement("meta",{property:"og:image",content:r}),o.a.createElement("meta",{property:"fb:app_id",content:v.a.siteFBAppID?v.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:v.a.userTwitter?v.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:url",content:v.a.siteUrl}),o.a.createElement("meta",{name:"twitter:description",content:n}),o.a.createElement("meta",{name:"twitter:image",content:r}))},G=l.c.div.withConfig({displayName:"Wrapper",componentId:"gsh72r-0"})(["display:flex;flex-direction:column;align-items:center;margin:0 auto;max-width:",";padding:",";"],function(e){return e.fullWidth?"100%":"40"},function(e){return e.fullWidth?"0":"0 1rem"}),V=l.c.div.withConfig({displayName:"Content",componentId:"nv8t6n-0"})(["display:flex;flex-direction:column;width:100%;z-index:9000;max-width:40rem;form{p{label,input{display:block;}input{min-width:275px;}textarea{resize:vertical;min-height:150px;width:100%;}}}"]),X=l.c.h3.withConfig({displayName:"Title",componentId:"sc-1ng9hw9-0"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;"]),Y=(n(86),n(220),n(221),n(36),l.c.div.withConfig({displayName:"Pagination__PaginationContainer",componentId:"sc-1m2za4c-0"})(["text-align:center;margin:2rem;}"])),Z=l.c.div.withConfig({displayName:"Pagination__PaginationContent",componentId:"sc-1m2za4c-1"})(["display:inline-block;padding:0 2.5rem;border-radius:3.5rem;background-color:#eee;@media ","{padding:0 1rem;}.page-numbers{display:block;float:left;transition:400ms ease;color:",";letter-spacing:0.1em;padding:1rem;&:hover,&.current{background-color:",";color:",";}&.prev{margin-left:-1.5rem;}&.next{margin-right:-1.5rem;}&.prev:hover,&.next:hover{background-color:transparent;color:",";}@media ","{padding:0 1.4rem;display:none;&:nth-of-type(2){position:relative;padding-right:5rem;&::after{content:'...';position:absolute;top:0;left:4.5rem;}}&:nth-child(-n + 3),&:nth-last-child(-n + 3){display:block;}&:nth-last-child(-n + 4){padding-right:1.4rem;&::after{content:none;}}}"],z.a.phone,L.colors.grey.light,E()(.2,L.colors.primary),L.colors.white,E()(.2,L.colors.primary),z.a.tablet),K=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.currentPage,n=e.totalPages,r=e.url,a=1===t,i=t===n,l=t-1==1?"/"+r+"/":"/"+r+"/"+(t-1).toString(),m="/"+r+"/"+(t+1).toString();return n>1?o.a.createElement(Y,null,o.a.createElement(Z,null,!a&&o.a.createElement(c.Link,{className:"prev page-numbers",to:l,rel:"prev"},"← Prev"),Array.from({length:n},function(e,n){return o.a.createElement(c.Link,{className:t===n+1?"page-numbers current":"page-numbers",key:"pagination-number"+(n+1),to:"/"+r+"/"+(0===n?"":n+1)},n+1)}),!i&&o.a.createElement(c.Link,{className:"next page-numbers",to:m,rel:"next"},"Next →"))):null},t}(o.a.PureComponent);n.d(t,"a",function(){return x}),n.d(t,"c",function(){return C}),n.d(t,"d",function(){return H}),n.d(t,"f",function(){return M}),n.d(t,"h",function(){return W}),n.d(t,"g",function(){return U}),n.d(t,"i",function(){return d}),n.d(t,"k",function(){return G}),n.d(t,"b",function(){return V}),n.d(t,"j",function(){return X}),n.d(t,"e",function(){return K})},294:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=l(n(234)),a=l(n(235)),i=l(n(236)),o=l(n(237));function l(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=(0,i.default)(t);return(0,o.default)(c({},n,{lightness:(0,a.default)(0,1,n.lightness+parseFloat(e))}))}var s=(0,r.default)(m);t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-tsx-af20e23bdfe93c8e0a65.js.map