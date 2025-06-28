"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[245],{1543:function(e,t,n){n.r(t),n.d(t,{Head:function(){return S},default:function(){return v}});var a=n(701),r=n(4041),i=n(6691),l=n(6440),o=n(6436),c=n(4894),s=n.n(c),m=n(6543),d=n.n(m),p=n(1865),u=n.n(p),g=n(4262),f=n(9084),h=n(4525),A=n(2348),y=n(3322),E=n(6326);const b=l.Ay.main`
  display: flex;
  flex-direction: column;
  @media ${o.$.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${o.$.phone} {
    height: 100%;
    flex-direction: column;
  }
`,w=l.Ay.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: ${e=>e.alignItems?e.alignItems:"center"};
  background: ${e=>e.background?`linear-gradient(\n      -185deg,\n      ${s()(d()(.1,e.theme.colors.primary),.7)}, \n      ${s()(u()(.1,e.theme.colors.grey.dark),.9)}), url(/assets/bg.png) no-repeat`:null};
  background-size: cover;
  padding: 2rem 4rem;
  color: ${e=>e.background?e.theme.colors.white:null};

  h1 {
    color: ${e=>e.background?e.theme.colors.white:null};
  }

  @media ${o.$.tablet} {
    padding: 3rem 3rem;
  }
  @media ${o.$.phone} {
    padding: 2rem 1.5rem;
  }
`,x=l.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>e.center?"center":"flex-start"};

  max-width: 40rem;
  text-align: ${e=>e.center?"center":"left"};
`;let v=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.A)(t,e),t.prototype.render=function(){const{data:e}=this.props,{edges:t,totalCount:n}=e.allMarkdownRemark;return r.createElement(f.A,null,r.createElement(h.A,{fullWidth:!0},r.createElement(b,null,r.createElement(w,{background:!1,alignItems:"flex-start"},r.createElement(x,{center:!0},r.createElement("h1",null,"Hi. I am ",r.createElement("br",null),"Jesús Quintana"),r.createElement(g.A,null))),r.createElement(w,null,r.createElement(x,null,r.createElement("h2",null,"Latest Posts"),t.map(e=>r.createElement(A.A,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})),r.createElement("p",{className:"textRight"},r.createElement(i.N_,{to:"/blog"},"All articles (",n,")")))))))},t}(r.Component);function S(){const e={"@context":"https://schema.org","@type":"Person",name:"Jesús Quintana",jobTitle:"Senior Software Engineer",worksFor:{"@type":"Organization",name:"Atlassian"},description:"Senior Software Engineer at Atlassian with over 10 years of experience in React, JavaScript, and modern web development.",url:E.A.siteUrl,sameAs:["https://github.com/marduke182",E.A.userTwitter?`https://twitter.com/${E.A.userTwitter}`:null].filter(Boolean),address:{"@type":"PostalAddress",addressLocality:"Sydney",addressCountry:"AU"},alumniOf:{"@type":"Organization",name:"Universidad Experimental Simón Bolívar"}};return r.createElement(r.Fragment,null,r.createElement(y.p,{title:"Jesús Quintana - Senior Software Engineer | Sydney, Australia",description:"Senior Software Engineer at Atlassian with over 10 years of experience in React, JavaScript, and modern web development. Based in Sydney, Australia.",image:"/assets/bg.png"}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(e)))}},1865:function(e,t,n){t.__esModule=!0,t.default=void 0;var a=o(n(7107)),r=o(n(657)),i=o(n(8677)),l=o(n(9783));function o(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}var s=(0,a.default)(function(e,t){if("transparent"===t)return t;var n=(0,i.default)(t);return(0,l.default)(c({},n,{lightness:(0,r.default)(0,1,n.lightness+parseFloat(e))}))});t.default=s;e.exports=t.default},2348:function(e,t,n){n.d(t,{A:function(){return s}});var a=n(4041),r=n(6691),i=n(750),l=n.n(i),o=n(3286),c=n(6232);var s=e=>{const{title:t,date:n,excerpt:i,slug:s,timeToRead:m,category:d}=e,p=t.charAt(0);return a.createElement("article",{className:"Article-module--post--0c771"},a.createElement("h2",{className:"Article-module--title--d3c82"},a.createElement("span",{className:"Article-module--initiale--b9b01"},p),a.createElement(r.N_,{to:`/blog/${s}`},t)),a.createElement(o.A,null,a.createElement(c.n,{date:n})," — ",m," Min Read — In",a.createElement(r.N_,{to:`/categories/${l()(d)}`}," ",d)),a.createElement("p",{className:"Article-module--excerpt--7fbc1"},i))}},3322:function(e,t,n){n.d(t,{p:function(){return i}});var a=n(4041),r=n(6326);function i(e){let t,n,i,l,{postNode:o,postPath:c,postSEO:s=!1,title:m,description:d,image:p,article:u=!1}=e;const g="/"===r.A.pathPrefix?"":r.A.pathPrefix;if(s&&o){const e=o.frontmatter;t=e.title,n=o.excerpt,i=e.banner||r.A.siteBanner,l=r.A.siteUrl+g+(c||"")}else t=m||r.A.siteTitle,n=d||r.A.siteDescription,i=p||r.A.siteBanner,l="";i=i.startsWith("http")?i:r.A.siteUrl+g+i;const f=r.A.siteUrl+r.A.pathPrefix;let h=[{"@context":"http://schema.org","@type":"WebSite","@id":f,url:f,name:t,alternateName:r.A.siteTitleAlt?r.A.siteTitleAlt:"",description:n,publisher:{"@type":"Person",name:r.A.author}}];return s&&o&&(h=[{"@context":"http://schema.org","@type":"BlogPosting","@id":l,url:l,name:t,alternateName:r.A.siteTitleAlt?r.A.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:i},description:n,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:r.A.author},publisher:{"@type":"Organization",name:r.A.author,logo:{"@type":"ImageObject",url:r.A.siteUrl+g+r.A.siteLogo}},isPartOf:f,mainEntityOfPage:{"@type":"WebSite","@id":f}}]),a.createElement(a.Fragment,null,a.createElement("html",{lang:r.A.siteLanguage}),a.createElement("title",null,t),a.createElement("meta",{name:"description",content:n}),a.createElement("meta",{name:"image",content:i}),a.createElement("link",{rel:"canonical",href:s?l:f}),a.createElement("meta",{property:"og:type",content:u?"article":"website"}),a.createElement("meta",{property:"og:url",content:s?l:f}),a.createElement("meta",{property:"og:title",content:t}),a.createElement("meta",{property:"og:description",content:n}),a.createElement("meta",{property:"og:image",content:i}),a.createElement("meta",{property:"og:locale",content:r.A.ogLanguage}),a.createElement("meta",{property:"og:site_name",content:r.A.ogSiteName||r.A.siteTitle}),r.A.siteFBAppID&&a.createElement("meta",{property:"fb:app_id",content:r.A.siteFBAppID}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:creator",content:r.A.userTwitter||""}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:n}),a.createElement("meta",{name:"twitter:image",content:i}),a.createElement("meta",{name:"twitter:url",content:s?l:f}),a.createElement("meta",{name:"robots",content:"index, follow"}),a.createElement("meta",{name:"author",content:r.A.author}),a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)))}t.A=e=>a.createElement("div",{style:{display:"none"}})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-57c65d8b47f7d2ed9766.js.map