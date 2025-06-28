"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[813],{742:function(e,t,n){const r=n(6440).Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 9000;
  max-width: 40rem;

  form {
    p {
      label,
      input {
        display: block;
      }

      input {
        min-width: 275px;
      }

      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
`;t.A=r},3322:function(e,t,n){n.d(t,{p:function(){return l}});var r=n(4041),a=n(6326);function l(e){let t,n,l,i,{postNode:o,postPath:m,postSEO:c=!1,title:s,description:p,image:u,article:d=!1}=e;const g="/"===a.A.pathPrefix?"":a.A.pathPrefix;if(c&&o){const e=o.frontmatter;t=e.title,n=o.excerpt,l=e.banner||a.A.siteBanner,i=a.A.siteUrl+g+(m||"")}else t=s||a.A.siteTitle,n=p||a.A.siteDescription,l=u||a.A.siteBanner,i="";l=l.startsWith("http")?l:a.A.siteUrl+g+l;const f=a.A.siteUrl+a.A.pathPrefix;let h=[{"@context":"http://schema.org","@type":"WebSite","@id":f,url:f,name:t,alternateName:a.A.siteTitleAlt?a.A.siteTitleAlt:"",description:n,publisher:{"@type":"Person",name:a.A.author}}];return c&&o&&(h=[{"@context":"http://schema.org","@type":"BlogPosting","@id":i,url:i,name:t,alternateName:a.A.siteTitleAlt?a.A.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:l},description:n,datePublished:o.frontmatter.date,dateModified:o.frontmatter.date,author:{"@type":"Person",name:a.A.author},publisher:{"@type":"Organization",name:a.A.author,logo:{"@type":"ImageObject",url:a.A.siteUrl+g+a.A.siteLogo}},isPartOf:f,mainEntityOfPage:{"@type":"WebSite","@id":f}}]),r.createElement(r.Fragment,null,r.createElement("html",{lang:a.A.siteLanguage}),r.createElement("title",null,t),r.createElement("meta",{name:"description",content:n}),r.createElement("meta",{name:"image",content:l}),r.createElement("link",{rel:"canonical",href:c?i:f}),r.createElement("meta",{property:"og:type",content:d?"article":"website"}),r.createElement("meta",{property:"og:url",content:c?i:f}),r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:n}),r.createElement("meta",{property:"og:image",content:l}),r.createElement("meta",{property:"og:locale",content:a.A.ogLanguage}),r.createElement("meta",{property:"og:site_name",content:a.A.ogSiteName||a.A.siteTitle}),a.A.siteFBAppID&&r.createElement("meta",{property:"fb:app_id",content:a.A.siteFBAppID}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:a.A.userTwitter||""}),r.createElement("meta",{name:"twitter:title",content:t}),r.createElement("meta",{name:"twitter:description",content:n}),r.createElement("meta",{name:"twitter:image",content:l}),r.createElement("meta",{name:"twitter:url",content:c?i:f}),r.createElement("meta",{name:"robots",content:"index, follow"}),r.createElement("meta",{name:"author",content:a.A.author}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("script",{type:"application/ld+json"},JSON.stringify(h)))}t.A=e=>r.createElement("div",{style:{display:"none"}})},4918:function(e,t,n){var r=n(4041),a=n(6440),l=n(6326),i=n(6691),o=n(9974);const m=a.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,c=a.Ay.div`
  z-index: 999;
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: ${e=>e.direction?e.direction:"row"};
  justify-content: ${e=>e.justify};

  a {
    &:hover {
      opacity: 0.85;
    }
  }
`,s=a.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>r.createElement(m,{banner:e.banner||l.A.defaultBg,className:"no-print"},r.createElement(c,{justify:"space-between"},r.createElement("div",null,r.createElement(s,null,"Jesús Quintana"),r.createElement("br",null),r.createElement(i.N_,{to:"/"},l.A.siteTitle)),r.createElement(o.A,null)),r.createElement("br",null),e.children&&r.createElement(c,{direction:"column"},e.children))},5844:function(e,t,n){var r=n(4041),a=n(6326);t.A=e=>{const{title:t=a.A.siteTitle}=e;return r.createElement("div",{style:{display:"none"}},t)}},9908:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(701),a=n(4041),l=n(6691),i=n(6440),o=n(750),m=n.n(o),c=n(6232),s=n(5844),p=n(9084),u=n(3322),d=n(4918),g=n(9928),f=n(3286),h=n(3588),E=n(742);const A=i.Ay.div`
  display: flex;
  margin: 3rem auto 0 auto;

  a {
    color: ${e=>e.theme.colors.primary};
    display: flex;
    align-items: center;
  }

  justify-items: center;
`,y=i.Ay.div`
  margin-right: 1rem;

  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${e=>e.theme.colors.grey.light};
  }
`,x=i.Ay.div`
  margin-left: 1rem;
  text-align: right;

  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${e=>e.theme.colors.grey.light};
  }
`;var b=e=>{const{prev:t,next:n}=e;return a.createElement(A,null,t&&a.createElement(y,null,a.createElement("span",null,"Previous"),a.createElement(l.N_,{to:`/blog/${m()(t.frontmatter.title)}`},t.frontmatter.title)),n&&a.createElement(x,null,a.createElement("span",null,"Next"),a.createElement(l.N_,{to:`/blog/${m()(n.frontmatter.title)}`},n.frontmatter.title)))};const w=i.Ay.div`
  margin-top: 1rem;
  max-width: 40rem;
  line-height: 1.8;
`;let v=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const{prev:e,next:t}=this.props.pageContext,n=this.props.data.markdownRemark;return a.createElement(p.A,null,n?a.createElement(a.Fragment,null,a.createElement(u.A,{postPath:n.fields.slug,postNode:n,postSEO:!0}),a.createElement(s.A,{title:n.frontmatter.title}),a.createElement(d.A,{banner:n.frontmatter.banner},a.createElement(g.A,null,n.frontmatter.title),a.createElement(f.A,{light:!1},a.createElement(c.n,{date:n.frontmatter.date}),a.createElement("br",null),n.timeToRead," Min Read",a.createElement("br",null),a.createElement(l.N_,{to:`/categories/${m()(n.frontmatter.category)}`},n.frontmatter.category))),a.createElement(h.A,null,a.createElement(E.A,null,a.createElement(w,{dangerouslySetInnerHTML:{__html:n.html}}),n.frontmatter.tags?a.createElement(f.A,null,"Tags:  ",n.frontmatter.tags.map((e,t)=>a.createElement(l.N_,{key:t,to:`/tags/${m()(e)}`},a.createElement("strong",null,e)," ",t<n.frontmatter.tags.length-1?", ":""))):null,a.createElement(b,{prev:e,next:t})))):null)},t}(a.PureComponent)},9928:function(e,t,n){const r=n(6440).Ay.div`
  font-size: ${e=>e.theme.fontSize.big};
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 600;
  text-transform: ${e=>e.uppercase?"uppercase":"normal"};
  text-align: left;
  position: relative;
  line-height: 1.25;
  padding: 1rem 0 0;
  margin-bottom: 1rem;

  &:after {
    content: '';
    height: 1px;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    background: ${e=>e.theme.colors.white};
  }
`;t.A=r}}]);
//# sourceMappingURL=component---src-templates-post-tsx-75f0982490b635a2dbe7.js.map