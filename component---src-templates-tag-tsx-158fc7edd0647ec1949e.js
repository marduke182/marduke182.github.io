"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[264],{1998:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var l=n(701),r=n(4041),a=n(6691),i=n(2348),c=n(750),o=n.n(c),s=n(5844),m=n(9084),u=n(4918),d=n(3436),f=n(3286),p=n(4525),E=n(5414);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.A)(t,e),t.prototype.render=function(){console.log(this.props);const{posts:e,tagName:t}=this.props.pageContext,n=e?e.length:0,l=`${n} post${1===n?"":"s"} tagged with "${t}"`;return r.createElement(m.A,null,r.createElement(s.A,{title:"Tags"}),r.createElement(u.A,null,r.createElement(d.A,null,"Tag – ",t),r.createElement(f.A,{sectionTitle:!0,light:!0},l," (See ",r.createElement(a.N_,{to:"/tags"},"all tags"),")")),r.createElement(p.A,null,r.createElement(E.A,null,e?e.map((e,t)=>r.createElement(i.A,{title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt,slug:o()(e.frontmatter.title),timeToRead:e.timeToRead,category:e.frontmatter.category,key:t})):null)))},t}(r.PureComponent)},2348:function(e,t,n){n.d(t,{A:function(){return s}});var l=n(4041),r=n(6691),a=n(750),i=n.n(a),c=n(3286),o=n(6232);var s=e=>{const{title:t,date:n,excerpt:a,slug:s,timeToRead:m,category:u}=e,d=t.charAt(0);return l.createElement("article",{className:"Article-module--post--0c771"},l.createElement("h2",{className:"Article-module--title--d3c82"},l.createElement("span",{className:"Article-module--initiale--b9b01"},d),l.createElement(r.N_,{to:`/blog/${s}`},t)),l.createElement(c.A,null,l.createElement(o.n,{date:n})," — ",m," Min Read — In",l.createElement(r.N_,{to:`/categories/${i()(u)}`}," ",u)),l.createElement("p",{className:"Article-module--excerpt--7fbc1"},a))}},3436:function(e,t,n){n.d(t,{A:function(){return c}});var l=n(4041),r=n(3373),a=n.n(r),i="SectionTitle-module--uppercase--eefec";var c=e=>{let{theme:t,uppercase:n,children:r}=e;const c={"--section-title-font-size":null==t?void 0:t.fontSize.big,"--section-title-font-family":null==t?void 0:t.fontFamily.heading,"--section-title-after-bg":null==t?void 0:t.colors.white};return l.createElement("div",{className:a()("SectionTitle-module--sectionTitle--440a1",{[i]:n}),style:c},r)}},4918:function(e,t,n){var l=n(4041),r=n(6440),a=n(6326),i=n(6691),c=n(4262);const o=r.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,s=r.Ay.div`
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
`,m=r.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>l.createElement(o,{banner:e.banner||a.A.defaultBg,className:"no-print"},l.createElement(s,{justify:"space-between"},l.createElement("div",null,l.createElement(m,null,"Jesús Quintana"),l.createElement("br",null),l.createElement(i.N_,{to:"/"},a.A.siteTitle)),l.createElement(c.A,null)),l.createElement("br",null),e.children&&l.createElement(s,{direction:"column"},e.children))},5414:function(e,t,n){n.d(t,{A:function(){return r}});var l=n(4041);var r=e=>{let{children:t}=e;return l.createElement("div",{className:"Content-module--content--ea159"},t)}},5844:function(e,t,n){var l=n(4041),r=n(6326);t.A=e=>{const{title:t=r.A.siteTitle}=e;return l.createElement("div",{style:{display:"none"}},t)}}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-158fc7edd0647ec1949e.js.map