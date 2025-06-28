"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[264],{742:function(e,t,n){const l=n(6440).Ay.div`
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
`;t.A=l},1998:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var l=n(701),i=n(4041),r=n(6691),a=n(6123),o=n(750),c=n.n(o),m=n(5844),s=n(9084),u=n(4918),d=n(3436),p=n(3286),f=n(4525),g=n(742);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.A)(t,e),t.prototype.render=function(){console.log(this.props);const{posts:e,tagName:t}=this.props.pageContext,n=e?e.length:0,l=`${n} post${1===n?"":"s"} tagged with "${t}"`;return i.createElement(s.A,null,i.createElement(m.A,{title:"Tags"}),i.createElement(u.A,null,i.createElement(d.A,null,"Tag – ",t),i.createElement(p.A,{sectionTitle:!0,light:!0},l," (See ",i.createElement(r.N_,{to:"/tags"},"all tags"),")")),i.createElement(f.A,null,i.createElement(g.A,null,e?e.map((e,t)=>i.createElement(a.A,{title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt,slug:c()(e.frontmatter.title),timeToRead:e.timeToRead,category:e.frontmatter.category,key:t})):null)))},t}(i.PureComponent)},3436:function(e,t,n){n.d(t,{A:function(){return o}});var l=n(4041),i=n(3373),r=n.n(i),a="SectionTitle-module--uppercase--eefec";var o=e=>{let{theme:t,uppercase:n,children:i}=e;const o={"--section-title-font-size":null==t?void 0:t.fontSize.big,"--section-title-font-family":null==t?void 0:t.fontFamily.heading,"--section-title-after-bg":null==t?void 0:t.colors.white};return l.createElement("div",{className:r()("SectionTitle-module--sectionTitle--440a1",{[a]:n}),style:o},i)}},4918:function(e,t,n){var l=n(4041),i=n(6440),r=n(6326),a=n(6691),o=n(4262);const c=i.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,m=i.Ay.div`
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
`,s=i.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>l.createElement(c,{banner:e.banner||r.A.defaultBg,className:"no-print"},l.createElement(m,{justify:"space-between"},l.createElement("div",null,l.createElement(s,null,"Jesús Quintana"),l.createElement("br",null),l.createElement(a.N_,{to:"/"},r.A.siteTitle)),l.createElement(o.A,null)),l.createElement("br",null),e.children&&l.createElement(m,{direction:"column"},e.children))},5844:function(e,t,n){var l=n(4041),i=n(6326);t.A=e=>{const{title:t=i.A.siteTitle}=e;return l.createElement("div",{style:{display:"none"}},t)}},6123:function(e,t,n){var l=n(4041),i=n(6440),r=n(6691),a=n(750),o=n.n(a),c=n(3286),m=n(6232);const s=i.Ay.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`,u=i.Ay.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`,d=i.Ay.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`,p=i.Ay.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;t.A=e=>{const{title:t,date:n,excerpt:i,slug:a,timeToRead:f,category:g}=e,h=t.charAt(0);return l.createElement(s,null,l.createElement(u,null,l.createElement(d,null,h),l.createElement(r.N_,{to:`/blog/${a}`},t)),l.createElement(c.A,null,l.createElement(m.n,{date:n})," — ",f," Min Read — In",l.createElement(r.N_,{to:`/categories/${o()(g)}`}," ",g)),l.createElement(p,null,i))}}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-7ebd2c1f0d3d30057087.js.map