"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[192],{2348:function(e,t,n){n.d(t,{A:function(){return m}});var l=n(4041),r=n(6691),a=n(750),i=n.n(a),c=n(3286),o=n(6232);var m=e=>{const{title:t,date:n,excerpt:a,slug:m,timeToRead:s,category:u}=e,d=t.charAt(0);return l.createElement("article",{className:"Article-module--post--0c771"},l.createElement("h2",{className:"Article-module--title--d3c82"},l.createElement("span",{className:"Article-module--initiale--b9b01"},d),l.createElement(r.N_,{to:`/blog/${m}`},t)),l.createElement(c.A,null,l.createElement(o.n,{date:n})," — ",s," Min Read — In",l.createElement(r.N_,{to:`/categories/${i()(u)}`}," ",u)),l.createElement("p",{className:"Article-module--excerpt--7fbc1"},a))}},3436:function(e,t,n){n.d(t,{A:function(){return c}});var l=n(4041),r=n(3373),a=n.n(r),i="SectionTitle-module--uppercase--eefec";var c=e=>{let{theme:t,uppercase:n,children:r}=e;const c={"--section-title-font-size":null==t?void 0:t.fontSize.big,"--section-title-font-family":null==t?void 0:t.fontFamily.heading,"--section-title-after-bg":null==t?void 0:t.colors.white};return l.createElement("div",{className:a()("SectionTitle-module--sectionTitle--440a1",{[i]:n}),style:c},r)}},4312:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var l=n(701),r=n(4041),a=n(6691),i=n(750),c=n.n(i),o=n(5844),m=n(9084),s=n(4918),u=n(3436),d=n(3286),f=n(4525),p=n(5414),E=n(2348);let A=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.A)(t,e),t.prototype.render=function(){const{posts:e,categoryName:t}=this.props.pageContext,n=e?e.length:0,l=`${n} post${1===n?"":"s"} tagged with "${t}"`;return r.createElement(m.A,null,r.createElement(o.A,{title:t}),r.createElement(s.A,null,r.createElement(u.A,null,"Category – ",t),r.createElement(d.A,{sectionTitle:!0,light:!0},l," (See ",r.createElement(a.N_,{to:"/categories"},"all categories"),")")),r.createElement(f.A,null,r.createElement(p.A,null,e?e.map((e,t)=>r.createElement(E.A,{title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt,slug:c()(e.frontmatter.title),timeToRead:e.timeToRead,category:e.frontmatter.category,key:t})):null)))},t}(r.PureComponent)},4918:function(e,t,n){var l=n(4041),r=n(6440),a=n(6326),i=n(6691),c=n(4262);const o=r.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,m=r.Ay.div`
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
`,s=r.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>l.createElement(o,{banner:e.banner||a.A.defaultBg,className:"no-print"},l.createElement(m,{justify:"space-between"},l.createElement("div",null,l.createElement(s,null,"Jesús Quintana"),l.createElement("br",null),l.createElement(i.N_,{to:"/"},a.A.siteTitle)),l.createElement(c.A,null)),l.createElement("br",null),e.children&&l.createElement(m,{direction:"column"},e.children))},5414:function(e,t,n){n.d(t,{A:function(){return r}});var l=n(4041);var r=e=>{let{children:t}=e;return l.createElement("div",{className:"Content-module--content--ea159"},t)}},5844:function(e,t,n){var l=n(4041),r=n(6326);t.A=e=>{const{title:t=r.A.siteTitle}=e;return l.createElement("div",{style:{display:"none"}},t)}}}]);
//# sourceMappingURL=component---src-templates-category-tsx-f8932e41d1b6d35b1fad.js.map