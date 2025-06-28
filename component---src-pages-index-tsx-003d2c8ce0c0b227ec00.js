"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[245],{487:function(e,t){t.__esModule=!0,t.default=void 0;t.default=function(e){var t,n=e.red/255,r=e.green/255,a=e.blue/255,o=Math.max(n,r,a),l=Math.min(n,r,a),i=(o+l)/2;if(o===l)return void 0!==e.alpha?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var u=o-l,s=i>.5?u/(2-o-l):u/(o+l);switch(o){case n:t=(r-a)/u+(r<a?6:0);break;case r:t=(a-n)/u+2;break;default:t=(n-r)/u+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:s,lightness:i,alpha:e.alpha}:{hue:t,saturation:s,lightness:i}};e.exports=t.default},657:function(e,t){t.__esModule=!0,t.default=void 0;t.default=function(e,t,n){return Math.max(e,Math.min(t,n))};e.exports=t.default},1521:function(e,t,n){t.__esModule=!0,t.default=void 0;var r=l(n(6231)),a=l(n(8058)),o=l(n(5041));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(0,o.default)(Math.round(255*e))}function u(e,t,n){return(0,a.default)("#"+i(e)+i(t)+i(n))}t.default=function(e,t,n){return(0,r.default)(e,t,n,u)};e.exports=t.default},1543:function(e,t,n){n.r(t),n.d(t,{Head:function(){return _},default:function(){return w}});var r=n(701),a=n(4041),o=n(6691),l=n(6440),i=n(6436),u=n(4894),s=n.n(u),c=n(6543),d=n.n(c),m=n(1865),f=n.n(m),p=n(9974),g=n(9084),h=n(3588),y=n(6123),b=n(3322),A=n(6326);const E=l.Ay.main`
  display: flex;
  flex-direction: column;
  @media ${i.$.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${i.$.phone} {
    height: 100%;
    flex-direction: column;
  }
`,v=l.Ay.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: ${e=>e.alignItems?e.alignItems:"center"};
  background: ${e=>e.background?`linear-gradient(\n      -185deg,\n      ${s()(d()(.1,e.theme.colors.primary),.7)}, \n      ${s()(f()(.1,e.theme.colors.grey.dark),.9)}), url(/assets/bg.png) no-repeat`:null};
  background-size: cover;
  padding: 2rem 4rem;
  color: ${e=>e.background?e.theme.colors.white:null};

  h1 {
    color: ${e=>e.background?e.theme.colors.white:null};
  }

  @media ${i.$.tablet} {
    padding: 3rem 3rem;
  }
  @media ${i.$.phone} {
    padding: 2rem 1.5rem;
  }
`,x=l.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>e.center?"center":"flex-start"};

  max-width: 40rem;
  text-align: ${e=>e.center?"center":"left"};
`;let w=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const{data:e}=this.props,{edges:t,totalCount:n}=e.allMarkdownRemark;return a.createElement(g.A,null,a.createElement(h.A,{fullWidth:!0},a.createElement(E,null,a.createElement(v,{background:!1,alignItems:"flex-start"},a.createElement(x,{center:!0},a.createElement("h1",null,"Hi. I am ",a.createElement("br",null),"Jesús Quintana"),a.createElement(p.A,null))),a.createElement(v,null,a.createElement(x,null,a.createElement("h2",null,"Latest Posts"),t.map(e=>a.createElement(y.A,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})),a.createElement("p",{className:"textRight"},a.createElement(o.N_,{to:"/blog"},"All articles (",n,")")))))))},t}(a.Component);function _(){const e={"@context":"https://schema.org","@type":"Person",name:"Jesús Quintana",jobTitle:"Senior Software Engineer",worksFor:{"@type":"Organization",name:"Atlassian"},description:"Senior Software Engineer at Atlassian with over 10 years of experience in React, JavaScript, and modern web development.",url:A.A.siteUrl,sameAs:["https://github.com/marduke182",A.A.userTwitter?`https://twitter.com/${A.A.userTwitter}`:null].filter(Boolean),address:{"@type":"PostalAddress",addressLocality:"Sydney",addressCountry:"AU"},alumniOf:{"@type":"Organization",name:"Universidad Experimental Simón Bolívar"}};return a.createElement(a.Fragment,null,a.createElement(b.p,{title:"Jesús Quintana - Senior Software Engineer | Sydney, Australia",description:"Senior Software Engineer at Atlassian with over 10 years of experience in React, JavaScript, and modern web development. Based in Sydney, Australia.",image:"/assets/bg.png"}),a.createElement("script",{type:"application/ld+json"},JSON.stringify(e)))}},1865:function(e,t,n){t.__esModule=!0,t.default=void 0;var r=i(n(7107)),a=i(n(657)),o=i(n(8677)),l=i(n(9783));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var s=(0,r.default)(function(e,t){if("transparent"===t)return t;var n=(0,o.default)(t);return(0,l.default)(u({},n,{lightness:(0,a.default)(0,1,n.lightness+parseFloat(e))}))});t.default=s;e.exports=t.default},3322:function(e,t,n){n.d(t,{p:function(){return o}});var r=n(4041),a=n(6326);function o(e){let t,n,o,l,{postNode:i,postPath:u,postSEO:s=!1,title:c,description:d,image:m,article:f=!1}=e;const p="/"===a.A.pathPrefix?"":a.A.pathPrefix;if(s&&i){const e=i.frontmatter;t=e.title,n=i.excerpt,o=e.banner||a.A.siteBanner,l=a.A.siteUrl+p+(u||"")}else t=c||a.A.siteTitle,n=d||a.A.siteDescription,o=m||a.A.siteBanner,l="";o=o.startsWith("http")?o:a.A.siteUrl+p+o;const g=a.A.siteUrl+a.A.pathPrefix;let h=[{"@context":"http://schema.org","@type":"WebSite","@id":g,url:g,name:t,alternateName:a.A.siteTitleAlt?a.A.siteTitleAlt:"",description:n,publisher:{"@type":"Person",name:a.A.author}}];return s&&i&&(h=[{"@context":"http://schema.org","@type":"BlogPosting","@id":l,url:l,name:t,alternateName:a.A.siteTitleAlt?a.A.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:o},description:n,datePublished:i.frontmatter.date,dateModified:i.frontmatter.date,author:{"@type":"Person",name:a.A.author},publisher:{"@type":"Organization",name:a.A.author,logo:{"@type":"ImageObject",url:a.A.siteUrl+p+a.A.siteLogo}},isPartOf:g,mainEntityOfPage:{"@type":"WebSite","@id":g}}]),r.createElement(r.Fragment,null,r.createElement("html",{lang:a.A.siteLanguage}),r.createElement("title",null,t),r.createElement("meta",{name:"description",content:n}),r.createElement("meta",{name:"image",content:o}),r.createElement("link",{rel:"canonical",href:s?l:g}),r.createElement("meta",{property:"og:type",content:f?"article":"website"}),r.createElement("meta",{property:"og:url",content:s?l:g}),r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:n}),r.createElement("meta",{property:"og:image",content:o}),r.createElement("meta",{property:"og:locale",content:a.A.ogLanguage}),r.createElement("meta",{property:"og:site_name",content:a.A.ogSiteName||a.A.siteTitle}),a.A.siteFBAppID&&r.createElement("meta",{property:"fb:app_id",content:a.A.siteFBAppID}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:a.A.userTwitter||""}),r.createElement("meta",{name:"twitter:title",content:t}),r.createElement("meta",{name:"twitter:description",content:n}),r.createElement("meta",{name:"twitter:image",content:o}),r.createElement("meta",{name:"twitter:url",content:s?l:g}),r.createElement("meta",{name:"robots",content:"index, follow"}),r.createElement("meta",{name:"author",content:a.A.author}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(h)))}t.A=e=>r.createElement("div",{style:{display:"none"}})},4066:function(e,t,n){t.__esModule=!0,t.default=function(e,t,n,l){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof l)return l>=1?(0,r.default)(e,t,n):"rgba("+(0,a.default)(e,t,n)+","+l+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===l)return e.alpha>=1?(0,r.default)(e.hue,e.saturation,e.lightness):"rgba("+(0,a.default)(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new o.default(2)};var r=l(n(1521)),a=l(n(6231)),o=l(n(9065));function l(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},5229:function(e,t,n){t.__esModule=!0,t.default=function(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return(0,r.default)(e,t,n);if("object"==typeof e&&void 0===t&&void 0===n)return(0,r.default)(e.hue,e.saturation,e.lightness);throw new a.default(1)};var r=o(n(1521)),a=o(n(9065));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},6123:function(e,t,n){var r=n(4041),a=n(6440),o=n(6691),l=n(750),i=n.n(l),u=n(5305),s=n(6232);const c=a.Ay.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`,d=a.Ay.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`,m=a.Ay.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`,f=a.Ay.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;t.A=e=>{const{title:t,date:n,excerpt:a,slug:l,timeToRead:p,category:g}=e,h=t.charAt(0);return r.createElement(c,null,r.createElement(d,null,r.createElement(m,null,h),r.createElement(o.N_,{to:`/blog/${l}`},t)),r.createElement(u.A,null,r.createElement(s.n,{date:n})," — ",p," Min Read — In",r.createElement(o.N_,{to:`/categories/${i()(g)}`}," ",g)),r.createElement(f,null,a))}},6543:function(e,t,n){t.__esModule=!0,t.default=void 0;var r=i(n(7107)),a=i(n(657)),o=i(n(8677)),l=i(n(9783));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var s=(0,r.default)(function(e,t){if("transparent"===t)return t;var n=(0,o.default)(t);return(0,l.default)(u({},n,{lightness:(0,a.default)(0,1,n.lightness-parseFloat(e))}))});t.default=s;e.exports=t.default},7107:function(e,t){function n(e,t,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):n(e,t,a)}}t.__esModule=!0,t.default=function(e){return n(e,e.length,[])},e.exports=t.default},8677:function(e,t,n){t.__esModule=!0,t.default=function(e){return(0,a.default)((0,r.default)(e))};var r=o(n(2937)),a=o(n(487));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},9783:function(e,t,n){t.__esModule=!0,t.default=function(e){if("object"!=typeof e)throw new i.default(8);if(c(e))return(0,l.default)(e);if(s(e))return(0,o.default)(e);if(m(e))return(0,a.default)(e);if(d(e))return(0,r.default)(e);throw new i.default(8)};var r=u(n(5229)),a=u(n(4066)),o=u(n(8625)),l=u(n(4894)),i=u(n(9065));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)},c=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha},d=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)},m=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha};e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-tsx-003d2c8ce0c0b227ec00.js.map